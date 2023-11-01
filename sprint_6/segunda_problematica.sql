DROP VIEW IF EXISTS vista_cliente; 

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
WHERE customer_name LIKE '%Anne' OR customer_name LIKE '%Tyler'
ORDER BY edad ASC;

-- PARA BORRAR LOS CLIENTE INGRESADO
-- DELETE FROM cliente
-- WHERE customer_id > 500

-- ACTUALIZACION DE 5 CLIENTES
UPDATE cliente
SET branch_id = 10
WHERE customer_id > 500;

-- ELIMINACION DEL REGISTRO CORRESPONDIENTE A "Noel David"
DELETE FROM cliente
WHERE customer_name = 'Noel' AND customer_surname = 'David';

-- CONSULTA DEL TIPO DE PRESTAMO DE MAYOR IMPORTE
SELECT loan_type
FROM prestamo 
WHERE loan_total = (SELECT MAX(loan_total) AS total_maximo 
                   FROM prestamo);
