export const Valid = (data) => {
    const { title, timer } = data;

    if (title === '' || timer === '') {
        alert('Введите данные во все поля');
        return;
    }

    if (!isNumeric(timer)) {
        alert('Формат ввода часов - цифры');
        return;
    } else {
        return true;
    }
};

function isNumeric(value) {
    return /^\d+$/.test(value);
}

export function sameCheck(item, data) {
    const { title, timer } = item;
    let arr = [];
    let num = [];

    data.map((item) => {
        arr.push(item.title.toLowerCase());
    });

    data.map((item) => {
        num.push(item.timer.toLowerCase());
    });

    if (
        arr.includes(title.toLowerCase()) ||
        num.includes(timer.toLowerCase())
    ) {
        alert('Элемент с таким названием или временная зона уже существует');
        return;
    } else {
        return true;
    }
}
