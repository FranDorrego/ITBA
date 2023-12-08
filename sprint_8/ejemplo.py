import sqlite3

with sqlite3.connect('sprint_8/APIpublica/ITBA/db.sqlite3') as base:
    cursor = base.cursor()

    res = cursor.execute('select * from empleado_direccion')
    lista = res.fetchall()

    repetidos = {}

    for lis in lista:

        if repetidos.get(lis[0], False):
            print(lis)
            cursor.execute(f'DELETE FROM empleado_direccion WHERE id = {lis[0]}')
            cursor.execute(f"INSERT INTO empleado_direccion VALUES ('{lis[0]}', '{lis[1]}', '{lis[2]}')")
        else:
            repetidos[lis[0]] = True