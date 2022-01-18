import { useContext } from 'react';
import {BasketContext} from '../../../../../BasketContext';
import './OrderListItem.css';


const OrderListItem = (props) => {
    const { amount, id, img, name, price, type } = props;
    const { changeAmount, removeProduct } = useContext(BasketContext)
    const productPrice = price * amount;

    return (
        <li className='list-item'>
            <img className='list-item__img' src={img} alt='Изображение товара'/>
            <div className='list-item__column-left'>
                <div className='list-item-wrapper'>
                    <p className='list-item__name'>{name}</p>
                    <p className='list-item__description'>{type}</p>
                </div>
                
                <div className='list-item__amount'>
                    { amount > 1 ? (
                        <div onClick={() => changeAmount(id, -1)}>&ndash;</div>
                    ): (
                        <div>&ndash;</div>
                    )
                    }
                    <p>{amount}</p>
                    <div onClick={() => changeAmount(id, 1)}>+</div>
                </div>
                
            </div>
            <div className='list-item__column-right'>
                <p>{productPrice} руб.</p> 
                <p className='list-item__remove' onClick={() => removeProduct(id)}>Удалить</p>
            </div>
        </li>
    )
}

export default OrderListItem;