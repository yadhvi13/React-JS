//most of the file is with .js extension

import {useEffect,useState} from 'react'

function useCurrencyInfo(currency){
   const [data, setData] = useState({})

   useEffect(()=>{
    if (!currency) return;
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then(res => res.json())
    .then(res => setData(res[currency]))
},[currency]);

// console.log(data);
 return data
}

export default useCurrencyInfo;