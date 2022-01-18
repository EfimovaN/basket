import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import {BasketContext} from '../../../BasketContext';
import OrderList from '../OrderForm/OrderList/OrderList';
import Map3 from '../../Basket/OrderForm/Map3/Map3';
import './OrderForm.css';


const OrderForm = () => {
    const { products, totalPrice, address, changeAddress } = useContext(BasketContext)

    const formik = useFormik({
        initialValues: {
          address: address,
          name: '',
          phone: '',
          email: '',
          package: '',
          comments: '',
        },
        validationSchema: Yup.object({
            address: Yup.string()
                .required('Обязательное поле!'),
            name: Yup.string()
                .required('Обязательное поле!'),
            phone: Yup.string()
                .matches(/[0-9\s\.\-\+\(\)]{6,20}/, 'Неправильный номер телефона')
                .required('Обязательное поле!'),
            email: Yup.string()
                .email('Неправильный email адрес')
                .required('Обязательное поле!'),
            package: Yup.string()
                .required('Обязательное поле!')
        }),
        onSubmit: values => {
            const newValues = {
                ...values,
                products,
                totalPrice
            }
          alert(JSON.stringify(newValues, null, 2));
          console.log(JSON.stringify(newValues, null, 2));
        }
      });

    return (
        <>
            <form className='orderForm' onSubmit={formik.handleSubmit}>

                {formik.errors.address && formik.touched.address ? <div className='error'>{formik.errors.address}</div> : null}
                <label className='orderForm__label' htmlFor='address'>Адрес</label >
                <textarea
                    className={formik.errors.address && formik.touched.address ? 'orderForm__item error' : 'orderForm__item'}
                    id='address'
                    name='address'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={() => { 
                        formik.touched.address = true;
                        changeAddress(formik.values.address);
                    }}
                    value={formik.values.address}
                />
                
                <Map3 />

                <div className='orderForm-wrapper'>
                    <div className='orderForm__column'>
                        {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
                        <input
                            className={formik.errors.name && formik.touched.name ? 'orderForm__item error' : 'orderForm__item'}
                            id='name'
                            name='name'
                            type='text'
                            placeholder='Ваше Имя'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                    </div>
                    
                    <div className='orderForm__column'>
                        {formik.errors.phone && formik.touched.phone ? <div className='error'>{formik.errors.phone}</div> : null}
                        <input
                            className={formik.errors.phone && formik.touched.phone ? 'orderForm__item error' : 'orderForm__item'}
                            id='phone'
                            name='phone'
                            type='tel'
                            placeholder='Ваш телефон'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                        />
                    </div>
                </div>
                {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}
                <input
                    className={formik.errors.email && formik.touched.email ? 'orderForm__item error' : 'orderForm__item'}
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Ваш Email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.errors.package && formik.touched.package ? <div className='error'>{formik.errors.package}</div> : null}
                <select
                    className={formik.errors.package && formik.touched.package ? 'orderForm__item error' : 'orderForm__item'}
                    id='package'
                    name='package'
                    placeholder='Nbg'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.package}
                >
                    <option hidden value='none'>Тип упаковки</option> 
                    <option value='without packaging'>Без упаковки</option>
                    <option value='standart'>Стандартная</option>
                    <option value='gift'>Подарочная</option>
                </select>

                <textarea
                    className='orderForm__item'
                    id='comments'
                    name='comments'
                    type='text'
                    rows='1'
                    placeholder='Введите комментарии'
                    onChange={formik.handleChange}
                    value={formik.values.comments}
                />
                <OrderList />
                <button className='order-button' type='submit'>Купить</button>
            </form>
        </>
    );
}

export default OrderForm;

 
