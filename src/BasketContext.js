import {createContext, useState, useEffect} from 'react';
import { getProducts } from './api/api';

const BasketContext = createContext();

const BasketContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(true);
    const [address, setAddress] =  useState('');

    const fetchData = async () => {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
    }

    const productPrice = () => {
        const newTotalPrice = products.reduce((sum, item) => {
            return sum + (item.amount * item.price);
        }, 0);
        setTotalPrice(newTotalPrice);
    }

    const changeAmount = (prodId, i) => {
        const newAmount = products.map((item) => {
            if (item.id === prodId) {
                item.amount = item.amount + i;
            }
            return item;
        });
        setProducts(newAmount);
    }
    
    const removeProduct = (prodId) => {
        const newProducts = products.filter(item => item.id !== prodId);
        setProducts(newProducts);
        
    }

    const changeAddress = (newAddress) => {
        setAddress(newAddress);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    useEffect(() => {
        productPrice();
    });

    const value = {
        products: products,
        totalPrice,
        address,
        loading,
        changeAmount: changeAmount,
        removeProduct: removeProduct,
        changeAddress: changeAddress,
    };

    return (
        <BasketContext.Provider value={value}>
            {props.children}
        </BasketContext.Provider>
    );
}

export {BasketContext, BasketContextProvider};