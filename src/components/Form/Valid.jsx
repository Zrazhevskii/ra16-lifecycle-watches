import React from 'react';

export const Valid = (data) => {
    const { title, timer } = data;

    if (title === '' || timer === '') {
        alert('Введите данные во все поля')
        return
    }

    if (!isNumeric(timer)) {
        alert('Формат ввода часов - цифры')
        return
    } else {
        return true
    }
};

function isNumeric(value) {
    return /^\d+$/.test(value);
}
