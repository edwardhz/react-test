import React,{ useEffect, useState } from 'react';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

	useEffect(() => {
		getData();
	},[])

	const getData = async () => {
		const response = await fetch(API);
		const data = await response.json();
		setProducts(data);
		
	}

    return products;
}


export default useGetProducts