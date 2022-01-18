import { useContext } from 'react';
import {BasketContext} from '../../../../BasketContext';
import Preloader from '../../../Preloader/preloader';
import OrderListItem from '../OrderList/OrderListItem/OrderListItem';
import './OrderList.css';

const OrderList = () => {
    const { products, totalPrice, loading } = useContext(BasketContext)

    const elements = products.map(item => <OrderListItem key = {item.id} {...item} />
    );
    
    return (
        <div className='order'>
            <h2 className='order__title'>Выбранные товары:</h2>

            {loading ? (
                <Preloader />
                
            ) : products.length ? (
                <>
                    <ul className='order-list'>
                        {elements}
                    </ul>
                    <div className='total-price'>
                         <p>Итог:</p>
                        {totalPrice} руб.
                    </div>
                </>
            ) : (
                <p>Не удалось загрузить список</p>
            )}
        </div>
        
    )
}

export default OrderList; 
