
-- CUENTAS CON SALDO NEGATIVO
SELECT *
FROM cuenta
WHERE balance < 0;

-- SELECIONO CLIENTES QUE TIENE Z
SELECT customer_name, customer_surname, edad
FROM vista_cliente
WHERE customer_surname LIKE '%Z%';  

-- SELECIONO LAS SUCURSALES DE BRENDAN
SELECT v.customer_name, v.customer_surname, v.edad, s.branch_name
FROM vista_cliente v
JOIN sucursal s ON v.branch_id = s.branch_id
WHERE v.customer_name = 'Brendan'
ORDER BY s.branch_name;  

-- PRESTAMOS MAYORES A $80.000
SELECT *
FROM prestamo
WHERE loan_type = 'PRENDARIO' AND loan_total > 8000000; 
-- tiene 2 ceros de mas porque no tiene coma


-- PRESTAMOS QUE SON MAYORES A LA MEDIA
SELECT *
FROM prestamo
WHERE loan_total > (
    SELECT AVG(loan_total)
    FROM prestamo
);

-- CLIENTES MAYORES A 50 AÑOS
SELECT COUNT(customer_id) as Cantidad_clientes_menores_50_años
FROM vista_cliente
WHERE edad < 50;

-- 5 PRIMERAS CUENTAS MAYORES A $8.000
SELECT *
FROM cuenta
WHERE balance > 800000 -- tiene 2 ceros de mas porque no tiene coma
ORDER BY balance 
LIMIT 5;

-- PRESTAMOS EN ABRIL, JUNIO Y AGOSTO DE TODOS LOS AÑOS ORDENADOS POR IMPORTE
SELECT *
FROM prestamo
WHERE CAST(strftime('%m', loan_date) AS INTEGER) IN (4,6,8)
ORDER BY loan_total;

-- TOTAL EN PRESTAMOS POR TIPO
SELECT loan_type, SUM(loan_total) as loan_total_accu
FROM prestamo
GROUP BY loan_type
