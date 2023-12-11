import estilosPlantilla from "@/styles/stylePlantilla.module.css";
import { Buscador } from "../ContenidoPrincipal/Buscador";
import { ContenedorPrincipal } from "../ContenidoPrincipal/ContenedorPrincipal";
import { Saludo } from "../ContenidoPrincipal/Saludo";
import { ContenedorMonto } from "./ContenedorMonto";
import { ConfirmarDivisas } from "./ConfirmarDivisas";
import { SpanCambioDivisas } from "./SpanCambioDivisas";
import { useEffect, useState } from "react";

export function GeneralCambioDivisa() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  const [exchangeRate, setExchangeRate] = useState(0);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  const [precio, setPrecio] = useState(exchangeRate);
  const [dolar, setDolar] = useState(amount);
  const [peso, setPeso] = useState(amount);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/b33857f0c7a369ed9a5061f0/latest/USD"
    )
      .then((res) => res.json())
      .then((data) => {
        const argCurrecy = Object.keys(data.conversion_rates)[7];
        const firstCurrency = Object.keys(data.conversion_rates)[0];
        setCurrencyOptions([...Object.keys(data.conversion_rates)]);
        setFromCurrency(argCurrecy);
        setToCurrency(firstCurrency);
        setExchangeRate(data.conversion_rates[argCurrecy]);
        setPrecio(data.conversion_rates[argCurrecy])
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(
        `https://v6.exchangerate-api.com/v6/b33857f0c7a369ed9a5061f0/latest/${fromCurrency}`
      )
        .then((res) => res.json())
        .then((data) => {
          setExchangeRate(data.conversion_rates[toCurrency]);
          setPrecio(data.conversion_rates[toCurrency]);
        });
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    const inputValue = e.target.value;
    setAmount(inputValue);
    setAmountInFromCurrency(true);
    setPeso(inputValue);
    setDolar(inputValue * precio);
  }

  function handleToAmountChange(e) {
    const inputValue = e.target.value;
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
    setDolar(inputValue);
    setPeso(inputValue / precio);
  }

  return (
    <div className={estilosPlantilla.general}>
      <Buscador />
      <ContenedorPrincipal>
        <Saludo texto="Cambio de divisas" />

        <ContenedorMonto // ESTE ES EL PRIEMR INPUT A LEER
          textPrincipal="Monto de origen"
          placeholder="Origen"
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleFromAmountChange}
          cambio={setPeso}
        />

        <SpanCambioDivisas
          texto={`1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`}
        />

        <ContenedorMonto // ESTE ES EL SEGUNDO
          textPrincipal="Monto de convertido"
          placeholder="Convertido"
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={handleToAmountChange}
          cambio={setDolar}
        />

        <ConfirmarDivisas // ESTE ES EL BOTON QUE NECESITA ESOS DATOS
          data={{
            pesos: peso,
            dolar: dolar,
            precio: precio,
          }}
        />

      </ContenedorPrincipal>
    </div>
  );
}
