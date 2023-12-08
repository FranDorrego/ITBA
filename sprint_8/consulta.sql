ALTER TABLE empleado ADD user_id int;
ALTER TABLE cliente ADD user_id int;

ALTER TABLE movimientos DROP hora; 
ALTER TABLE movimientos ADD hora DATETIME;

INSERT INTO tipo_movimientos VALUES (15,'PRESTAMO');
INSERT INTO tipo_movimientos VALUES (16,'CANCELO_PRESTAMO');


ALTER TABLE empleado_direccion 
ADD id int;