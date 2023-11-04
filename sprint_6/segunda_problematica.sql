
DROP VIEW IF EXISTS vista_cliente; 

-- CREACION DE TABLA
CREATE VIEW vista_cliente AS 
SELECT customer_id, branch_id, customer_name, 
       customer_surname, customer_DNI, 
       CAST(strftime('%Y', 'now') - strftime('%Y', date(dob)) - 
       (strftime('%m-%d', 'now') < strftime('%m-%d', date(dob))) 
       AS INTEGER) AS edad
FROM cliente;

-- CONSULTA PARA CLIENTES MAYOR A 40 Y ORDENADO POR DNI
SELECT customer_id, customer_DNI, customer_name, edad
FROM vista_cliente
WHERE edad > 40
ORDER BY customer_DNI DESC;

-- CONSULTA PARA CLIENTES Anne y Tyler Y ORDENADOS POR EDAD
SELECT customer_id, customer_DNI, customer_name, edad
FROM vista_cliente
WHERE customer_name = 'Anne' OR customer_name = 'Tyler'
ORDER BY edad ASC;

-- COMPROBAR QUE SE HAYA HECHO CON EXISTO LA INSERCION, 
-- BUSCO LOS ULTIMOS 5 CLIENTES
SELECT * FROM cliente
ORDER BY customer_id DESC
LIMIT 5;

-- COMPROBACION ANTERIOR
-- ACTUALIZACION DE 5 CLIENTES
UPDATE cliente
SET branch_id = 10
WHERE customer_id in (
       SELECT customer_id FROM cliente
       ORDER BY customer_id DESC
       LIMIT 5
);

-- COMPROBACION POSTERIOR
SELECT * FROM cliente
ORDER BY customer_id DESC
LIMIT 5;

-- COMPROBACION DE NOEL DAVID ANTERIOR
SELECT * FROM cliente
WHERE customer_name = 'Noel' AND customer_surname = 'David';

-- ELIMINACION DEL REGISTRO CORRESPONDIENTE A "Noel David"
DELETE FROM cliente
WHERE customer_name = 'Noel' AND customer_surname = 'David';

-- COMPROBACION DE NOEL DAVID POSTERIOR
SELECT * FROM cliente
WHERE customer_name = 'Noel' AND customer_surname = 'David';

-- CONSULTA DEL TIPO DE PRESTAMO DE MAYOR IMPORTE
SELECT loan_type
FROM prestamo 
WHERE loan_total = (
       SELECT MAX(loan_total) AS total_maximo 
       FROM prestamo
);
