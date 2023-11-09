import React, {useEffect, useState} from 'react';

export const Watch = ({item}) => {

    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();
    let { title, timer } = item;
    
    timer = Number(timer)
    // console.log(typeof timer)

    const deg = 6;
    const day = new Date();
    // console.log(day.getUTCHours() )
    // const hr = document.querySelector('#hour-hand')
    // const mh = document.querySelector('#minute-hand')
    // const sec = document.querySelector('#second-hand')

    const hours = (day.getUTCHours() + timer) * 30;
    const minutes = day.getUTCMinutes() * deg;
    const seconds = day.getUTCSeconds() * deg;

    useEffect(()=> {
        const interval = setInterval(() => {
            setHour(hours)
            setMinute(minutes)
            setSecond(seconds)
            return () => { clearInterval(interval) }
        }, 1000);
    }, [hour, minute, second])

    return (
        <div className='clock-wrapper'>
            <div className='title-wrapper'>
                <button className='clock-btn'>x</button>
                <h4 className='title'>{title}</h4>
            </div>
            <div className='clock'>
                <div className='hour'>
                    <div className='hour-hand' id='hour-hand' style={{ transform: `rotateZ(${hour + (minutes / 12)}deg)` }}></div>
                </div>
                <div className='minutes'>
                    <div className='minute-hand' id='minute-hand' style={{ transform: `rotateZ(${minutes}deg)` }}></div>
                </div>
                <div className='seconds'>
                    <div className='second-hand' id='second-hand' style={{ transform: `rotateZ(${seconds}deg)` }}></div>
                </div>
            </div>
        </div>
        
    );
};
