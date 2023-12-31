
-- CANTIDAD DE CLIENTES POR SUCURSAL DE MAYOR A MENOR
SELECT COUNT(c.customer_id) AS cantidad_clientes, s.branch_name
FROM cliente c
JOIN sucursal s ON c.branch_id = s.branch_id
GROUP BY c.branch_id 
ORDER BY cantidad_clientes DESC;

-- CANTIDAD DE EMPLEADOS POR SUCURSAL
SELECT COUNT(e.employee_id) AS Cantidad_empleados, s.branch_name
FROM empleado e
JOIN sucursal s ON e.branch_id = s.branch_id
GROUP BY s.branch_id;

-- CANTIDAD DE EMPLEADOS POR CLIENTE EN CADA SUCURSAL
WITH EmpleadosPorSucursal AS (
    SELECT s.branch_id, COUNT(e.employee_id) AS CANTIDAD_EMPLEADOS
    FROM empleado e
    JOIN sucursal s ON e.branch_id = s.branch_id
    GROUP BY s.branch_id
)

SELECT
    CAST(eps.CANTIDAD_EMPLEADOS AS REAL) / CAST(COUNT(c.customer_id) AS REAL) AS CANTIDAD_DE_EMPLEADOS_POR_CLIENTE,
    s.branch_name AS SUCURSAL
FROM cliente c 
JOIN sucursal s ON c.branch_id = s.branch_id
LEFT JOIN EmpleadosPorSucursal eps ON s.branch_id = eps.branch_id
GROUP BY s.branch_id, s.branch_name;


-- CANTIDAD DE TARJETAS DE CREDITO POR SUCURSAL
SELECT branch_name, COUNT(t.tipo_tarjeta_id)  AS cantidad_tarjetas_de_credito
FROM tarjeta t
JOIN cliente c ON c.customer_id = t.id_cliente
JOIN sucursal s  ON c.branch_id = s.branch_id
WHERE tipo_tarjeta_id = 2 -- ES IGUAL A 2 PORQUE ESE ES EL VALOR DEL ID DE CREDITO
GROUP BY branch_name
ORDER BY branch_name;

-- PROMEDIO DE $$ EN CREDITOS POR SUCURSAL 
SELECT contador.cantidad/contador.prestamos AS promedio_en_prestamos, s.branch_name
FROM sucursal s
JOIN(
    SELECT COUNT(p.loan_id) AS prestamos, SUM(p.loan_total) AS cantidad, c.branch_id
    FROM prestamo p
    JOIN cliente c ON p.customer_id = c.customer_id
    GROUP BY c.branch_id
    ) contador
ON contador.branch_id = s.branch_id;

-- TRIGER DE AUDITORIA
DROP TABLE IF EXISTS auditoria_cuenta;
CREATE TABLE auditoria_cuenta(
    old_id INTEGER NOT NULL,
    new_id INTEGER NOT NULL,
    old_balance INTEGR NOT NULL,
    new_balance INTEGR NOT NULL,
    old_iban INTEGR NOT NULL,
    new_iban INTEGR NOT NULL,
    old_tipe INTEGR NOT NULL,
    new_tipe INTEGR NOT NULL,
    user_action INTEGER NOT NULL,
    created_at INTEGER NOT NULL
);

DROP TRIGGER IF EXISTS AUDITORIA_CUENTA_TRIGER;
CREATE TRIGGER AUDITORIA_CUENTA_TRIGER
    AFTER UPDATE ON cuenta
    BEGIN
        INSERT INTO auditoria_cuenta(
            old_id, new_id,
            old_balance, new_balance,
            old_iban, new_iban,
            old_tipe, new_tipe,
            user_action,
            created_at
        )
        VALUES(
            OLD.account_id, NEW.account_id,
            OLD.balance, NEW.balance,
            OLD.iban, NEW.iban,
            OLD.tipo_cuenta_id, NEW.tipo_cuenta_id,
            1, strftime('%s', 'now')
        );
END;

SELECT account_id, balance 
FROM cuenta
WHERE account_id IN (10,11,12,13,14);

-- RESTO 100 A LAS CUENTAS 10,11,12,13,14
UPDATE cuenta 
SET balance = balance - 10000
WHERE account_id IN (10,11,12,13,14);

SELECT account_id, balance 
FROM cuenta
WHERE account_id IN (10,11,12,13,14);

-- INDICE DE CLIENTE.DNI

EXPLAIN QUERY PLAN
SELECT *
FROM cliente
WHERE customer_DNI = '74701370';

DROP INDEX IF EXISTS index_dni;
CREATE INDEX index_dni
on cliente(customer_DNI);

EXPLAIN QUERY PLAN
SELECT *
FROM cliente
WHERE customer_DNI = '74701370';


-- TABLA MOVIMINETO CON ROLLBACK

-- Creamos una tabla para los tipos de operaciones
DROP TABLE IF EXISTS tipo_movimientos;
CREATE TABLE tipo_movimientos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo TEXT NOT NULL
);

INSERT INTO tipo_movimientos (tipo) VALUES
    ('RETIRO_EFECTIVO_CAJERO_AUTOMATICO'),
    ('RETIRO_EFECTIVO_POR_CAJA'),
    ('COMPRA_EN_CUOTAS_TARJETA_CREDITO'),
    ('COMPRA_TARJETA_CREDITO'),
    ('ALTA_TARJETA_CREDITO'),
    ('ALTA_TARJETA_DEBITO'),
    ('ALTA_CHEQUERA'),
    ('ALTA_CUENTA_CTE'),
    ('ALTA_CAJA_DE_AHORRO'),
    ('ALTA_CUENTA_DE_INVERSION'),
    ('COMPRA_DOLAR'),
    ('VENTA_DOLAR'),
    ('TRANSFERENCIA_ENVIADA'),
    ('TRANSFERENCIA_RECIBIDA');


-- CREAMOS LA TABLA MOVIMIENTOS
DROP TABLE IF EXISTS movimientos;
CREATE TABLE movimientos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    numero_cuenta INTEGER NOT NULL,
    monto INTEGER NOT NULL,
    id_tipo_operacion INTEGER NOT NULL,
    hora INTEGER,

    FOREIGN KEY (numero_cuenta) 
        REFERENCES cuenta(account_id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,

    FOREIGN KEY (id_tipo_operacion) 
        REFERENCES tipo_movimientos(id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);

-- SETEAMOS LA HORA AUTOMATICAMENTE
DROP TRIGGER IF EXISTS actualizar_hora;
CREATE TRIGGER actualizar_hora
    AFTER INSERT ON movimientos
    BEGIN
        UPDATE movimientos
        SET hora = strftime('%s', 'now')
        WHERE id = NEW.id;
END;

-- TRANSACCION
BEGIN TRANSACTION;

    UPDATE cuenta
    SET balance = balance - 100000
    WHERE account_id = 200;

    INSERT INTO movimientos(numero_cuenta, monto, id_tipo_operacion)
    VALUES(200,-100000,(SELECT id FROM tipo_movimientos WHERE tipo = 'TRANSFERENCIA_ENVIADA'));

    UPDATE cuenta
    SET balance = balance + 100000
    WHERE account_id = 400;

    INSERT INTO movimientos(numero_cuenta, monto, id_tipo_operacion)
    VALUES(400,+100000,(SELECT id FROM tipo_movimientos WHERE tipo = 'TRANSFERENCIA_RECIBIDA'));
    
COMMIT;


