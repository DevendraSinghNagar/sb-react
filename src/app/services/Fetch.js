import React from 'react'

const useFetch = (url) => {
  return fetch(url)
  .then(response => response.json())
  .then(data =>  data)
  .catch(error => error);
}

export default useFetch