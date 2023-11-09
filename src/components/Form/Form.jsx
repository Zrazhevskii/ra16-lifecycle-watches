import { useState } from 'react';
import './Form.css';
import { Valid, sameCheck } from './Valid';
import { WatchItems } from '../Watch/WatchItems';
import PropTypes from 'prop-types';

export const Form = ({ data }) => {
    const [valueName, setValueName] = useState({
        title: '',
        timer: '',
    });

    const [items, setItems] = useState(data);

    const { title, timer } = valueName;

    const changeItems = (elems) => {
        if (!Valid(elems)) {
            return;
        }

        if (sameCheck(valueName, items))
            return setItems((prevItems) => [...prevItems, valueName]);
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

    const DeletElem = (title) => {
        return setItems(items.filter((e) => e.title !== title));
    };

    return (
        <div className='content-wrapper'>
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
            <div className='watch-items-wrapper'>
                <WatchItems data={items} onDelet={DeletElem} />
            </div>
        </div>
    );
};

Form.propTypes = {
    data: PropTypes.array.isRequired
  }
