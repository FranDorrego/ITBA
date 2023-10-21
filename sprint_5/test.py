
import unittest
from cliente.Cliente import Cliente

class Test_calcular_monto_total(unittest.TestCase):

    # Creo una instancia para cada Test
    def setUp(self):
        self.cliente = Cliente(123,"Juan", "ITBA", "12345678")

    # Comienzo los tets
    def test_numero_conocido(self):
        resultado = self.cliente.descontar_comision(monto= 100,comision= 0.1)
        self.assertEqual(resultado, 90, msg="El resultado no dio el numero correcto")

    def test_cadena(self):
        with self.assertRaises(ValueError, msg="test_Cadena, No dio un ValueError"):
            self.cliente.descontar_comision(monto= 1, comision= "a")

    def test_null(self):
        with self.assertRaises(ValueError, msg="test_null, No dio un ValueError"):
            self.cliente.descontar_comision(monto= None, comision= None)

    def test_big_numero(self):
        resultado = self.cliente.descontar_comision(monto= 1000000000000000000000000,comision= 0.5)
        self.assertIsInstance(resultado, int | float, msg="test_big_numero, No se resolvio")

    def test_child_numero(self):
        resultado = self.cliente.descontar_comision(monto= 0.000000000000000000000001,comision= 0.1)
        self.assertIsInstance(resultado, int | float, msg="test_child_numero, No se resolvio")

    def test_float_numero(self):
        resultado = self.cliente.descontar_comision(monto=100.50,comision= 0.1)
        self.assertIsInstance(resultado, int | float, msg="test_float_numero, No se resolvio")

    def test_comision_cero(self):
        resultado = self.cliente.descontar_comision(monto=100, comision=0.0)
        self.assertEqual(resultado, 100.0, msg="La comisión cero no debería afectar el monto")

    def test_comision_mayor_que_monto(self):
        resultado = self.cliente.descontar_comision(monto=50, comision=0.75)
        self.assertEqual(resultado, 12.5, msg="test_comision_mayor_que_monto, el resultado debería ser 12.5")

    def test_comision_negativa(self):
        with self.assertRaises(ValueError, msg="test_comision_negativa, No dio un ValueError"):
            self.cliente.descontar_comision(monto=100, comision=-0.1)

    def test_comision_mayor_al_100_por_ciento(self):
        with self.assertRaises(ValueError, msg="test_comision_mayor_al_100_por_ciento, No dio un ValueError"):
            self.cliente.descontar_comision(monto=100, comision=1.5)

    def test_comision_decimal(self):
        resultado = self.cliente.descontar_comision(monto=100, comision=0.15)
        self.assertAlmostEqual(resultado, 85.0, places=2, msg="La comisión del 15% no se aplicó correctamente al monto")

    def test_comision_string_numerico(self):
        with self.assertRaises(ValueError, msg="test_comision_string_numerico, No dio un ValueError"):
            self.cliente.descontar_comision(monto=100, comision="0.1")

    def test_comision_int(self):
        with self.assertRaises(ValueError, msg="test_comision_int, No dio un ValueError"):
            self.cliente.descontar_comision(monto=100, comision=10)

    def test_monto_negativo(self):
        with self.assertRaises(ValueError, msg="test_monto_negativo, No dio un ValueError"):
            self.cliente.descontar_comision(monto=-100, comision=0.1)


if __name__ == '__main__':
    unittest.main()
