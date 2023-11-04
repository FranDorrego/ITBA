import sqlite3
import json

URL = "sprint_6/datos.json"
BASE = "sprint_6/itbank.db"

def leer_json():
    with open(URL) as file:
        data = json.load(file)
    return data

def insertar_cliente(data):
    for item in data:
        cursor.execute(f'''
                        INSERT INTO cliente (customer_name, customer_surname, customer_DNI, branch_id, dob)
                        VALUES ('{item["customer_name"]}', '{item["customer_surname"]}', '{item["customer_DNI"]}',
                        '{item["branch_id"]}', '{item["customer_dob"]}');
                    ''')
        print("Se ingreso un valor")


if __name__ == '__main__':
    conn = sqlite3.connect(BASE)
    cursor = conn.cursor()

    data = leer_json() 
    insertar_cliente(data)
        
    conn.commit()
    conn.close()