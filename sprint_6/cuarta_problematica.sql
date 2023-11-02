
-- CANTIDAD DE CLIENTES POR SUCURSAL DE MAYOR A MENOR
SELECT COUNT(c.customer_id) AS cantidad_clientes, s.branch_name
FROM cliente c
JOIN sucursal s ON c.branch_id = s.branch_id
GROUP BY c.branch_id 
ORDER BY cantidad_clientes DESC

-- CANTIDAD DE EMPLEADOS POR: SUCURSAL
SELECT COUNT(e.employee_id) AS Cantidad_empleados, s.branch_name
FROM empleado e
JOIN sucursal s ON e.branch_id = s.branch_id
GROUP BY s.branch_id

-- PUNTO 2:
------------------------------------------------------------------------
-- CANTIDAD DE EMPLEADOS POR: CLIENTE FALTA ASOCIAR CLIENTE CON EMPLEADO
-----------------------------------------------------------------------

-- PUNTO 3:
------------------------------------------------------------------------
-- CANTIDAD DE TIPO DE TARJETAS POR SUCURSAL: FALTA ASOCIAR CLIENTES A TARJETAS
------------------------------------------------------------------------

-- PROMEDIO DE $$ EN CREDITOS POR SUCURSAL 
SELECT contador.cantidad/contador.prestamos AS promedio_en_prestamos, s.branch_name
FROM sucursal s
JOIN(
    SELECT COUNT(p.loan_id) AS prestamos, SUM(p.loan_total) AS cantidad, c.branch_id
    FROM prestamo p
    JOIN cliente c ON p.customer_id = c.customer_id
    GROUP BY c.branch_id
    ) contador
ON contador.branch_id = s.branch_id

-- TRIGER DE AUDITORIA

-- INDICE DE CLIENTE.DNI

-- TABLA MOVIMINETO CON TRIGER Y ROLLBACK


