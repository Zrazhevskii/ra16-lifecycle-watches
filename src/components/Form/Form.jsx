import React, { useState } from 'react';
import './Form.css';
import { Valid } from './Valid';
import { Formdata } from './Formdata';

export const Form = () => {
    const [valueName, setValueName] = useState({
        title: '',
        timer: '',
    });

    const [items, setItems] = useState([
        {
            title: 'Москва',
            timer: '3',
        },
        {
            title: 'Лондон',
            timer: '0',
        },
    ]);


    const { title, timer } = valueName;

    const changeItems = (elems) => {
        // console.log(elems)
        if (Valid(valueName)) {
            setItems((prevItems) => [...prevItems, elems])
        }
        console.log(items);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        changeItems(valueName);

        setValueName({
            title: '',
            timer: '',
        });
    };

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setValueName((prevValue) => ({ ...prevValue, [name]: value }));
    };

    // console.log(valueName);

    return (
        <div className='form-wrapper'>
            <form action='' className='form' onSubmit={submitHandler}>
                <div className='form-input-title'>
                    <label htmlFor='input-title' className='label-title'>
                        Название
                    </label>
                    <input
                        type='text'
                        id='input-title'
                        name='title'
                        value={title}
                        className='input-title'
                        placeholder='Название часов'
                        onChange={handleChange}
                    />
                </div>
                <div className='form-input-timer'>
                    <label htmlFor='input-timer' className='label-timer'>
                        Временная зона
                    </label>
                    <input
                        type='text'
                        id='input-timer'
                        name='timer'
                        value={timer}
                        className='input-timer'
                        placeholder='Смещение в часах от Гринвича'
                        onChange={handleChange}
                    />
                </div>
                <button className='btn-form'>Добавить</button>
            </form>
        </div>
    );
};
