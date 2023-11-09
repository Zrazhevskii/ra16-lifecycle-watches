[![Build status](https://ci.appveyor.com/api/projects/status/90h8b71jmbgjhtl6/branch/master?svg=true)](https://ci.appveyor.com/project/Zrazhevskii/ra16-lifecycle-watches/branch/master)

Deployment: https://zrazhevskii.github.io/ra16-lifecycle-watches/

**Мировые часы**

Наверняка вы видели в офисах многих компаний установленные часы, показывающие время в разных столицах мира:

- New York,
- Moscow,
- London,
- Tokyo.
- Watches

![alt text](https://github.com/Zrazhevskii/ra16-lifecycle-watches/blob/main/src/image/watches.png)

**Общая механика:**

1. Вы заполняете поля «Название» и «Временная зона», указываете смещение в часах относительно Гринвича и нажимаете кнопку «Добавить».
2. Часы автоматически добавляются и, что самое важное, начинают тикать, то есть отсчитываются секунды, минуты и часы.
3. При нажатии на крестик рядом с часами часы автоматически удаляются, при этом все подписки — setTimeout, setInterval и другие — должны вычищаться в соответствующем методе жизненного цикла.

Упрощения: если вам сложно реализовать механику со стрелками через css — см. transform и rotate(), то вы можете сделать цифровые часы, где отображаются только цифры в формате: ЧЧ:ММ:СС.

**Подсказки:**

1. Посмотреть текущий TimezoneOffset вы можете, используя объект Date.
2. Можете использовать библиотеку Moment.js.
