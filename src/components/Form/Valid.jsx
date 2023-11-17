export const Valid = (data) => {
    const { title, timer } = data;

    if (title === '' || timer === '') {
        alert('Введите данные во все поля');
        return;
    }

    if (isNaN(timer)) {
        alert('Формат ввода часов - цифры');
        return;
    } else {
        return true;
    }
};
