user_id_values = list(range(502, 1008))

with open('archivo.txt', 'w') as archivo:
    for i in range(1, len(user_id_values)):
        archivo.write(f'UPDATE cliente SET user_id = {user_id_values[i]} WHERE customer_id = {i};\n')


print(len(user_id_values))
