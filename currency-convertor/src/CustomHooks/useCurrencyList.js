import { useEffect, useState } from 'react';

function useCurrencyList() {
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
      .then(res => res.json())
      .then(data => setCurrencies(data));
  }, []);

  return currencies;
}

export default useCurrencyList;
