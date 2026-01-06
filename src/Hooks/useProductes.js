import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useProductes = () => {
    const [products, setProducts] = useState([])
    console.log(products)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

   
    useEffect(() =>{
        const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios.get('/data.json')
      console.log(res)
      setProducts(res.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  fetchData()

       
    },[])
    return {products, loading, error}
};

export default useProductes;