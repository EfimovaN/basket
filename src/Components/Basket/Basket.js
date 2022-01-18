import { NavLink } from 'react-router-dom';
import OrderForm from '../Basket/OrderForm/OrderForm';
import './Basket.css';


const Basket = () => {

    return (
        <div className='basket'>
            <h1 className='basket__title'>Корзина</h1>
            <div className='basket-wrapper'>
                <span className='basket__login'>Есть аккаунт?</span>
                <NavLink className='basket__link' to={'/login'}>Войти</NavLink>
            </div>
            <OrderForm />
        </div>

    );
}

export default Basket; 