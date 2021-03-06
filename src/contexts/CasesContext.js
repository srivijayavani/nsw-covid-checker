import React, { createContext, useState } from 'react'

export const CasesContext = createContext()

const axios = require('axios');
axios.defaults.headers = {
  'Content-Type': 'application/xml',
}

const CasesContextProvider = (props) => {
  const [ cases, setCases ] = useState([])
  const [ error, setError ] = useState(null)

  const searchLocation = (location) => {
    const url = `${process.env.REACT_APP_API_HOST}/fetchData`
    let params = {}
    if (location) {
      params = { postcode : location }
    }

    axios.get(url, {params: params}).then(res => {
      const records = res.data.result['records']
      setCases(records)
    }).catch(err => {
      setError(err)
    })
  }

  return (
    <CasesContext.Provider value={{cases, searchLocation, error}}>
      {props.children}
    </CasesContext.Provider>
  );
}

export default CasesContextProvider;