ALTER TABLE empleado ADD user_id int;
ALTER TABLE cliente ADD user_id int;

ALTER TABLE movimientos DROP hora; 
ALTER TABLE movimientos ADD hora DATETIME;

INSERT INTO tipo_movimientos VALUES (15,'PRESTAMO')