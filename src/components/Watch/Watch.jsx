import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Watch = ({ item, onDelet }) => {
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();
    let { title, timer } = item;

    timer = Number(timer);

    const deg = 6;
    const day = new Date();
    const hours = (day.getUTCHours() + timer) * 30;
    const minutes = day.getUTCMinutes() * deg;
    const seconds = day.getUTCSeconds() * deg;

    useEffect(() => {
        const interval = setInterval(() => {
            setHour(hours);
            setMinute(minutes);
            setSecond(seconds);
            return () => {
                clearInterval(interval);
            };
        }, 1000);
    }, [hours, minutes, seconds]);
    
    console.log(hour)
    console.log(minute)
    console.log(second)

    return (
        <div className='clock-wrapper'>
            <div className='title-wrapper'>
                <button className='clock-btn' onClick={() => onDelet(title)}>
                    x
                </button>
                <h4 className='title'>{title}</h4>
            </div>
            <div className='clock'>
                <div className='hour'>
                    <div
                        className='hour-hand'
                        id='hour-hand'
                        style={{
                            transform: `rotateZ(${hours + minutes / 12}deg)`,
                        }}
                    ></div>
                </div>
                <div className='minutes'>
                    <div
                        className='minute-hand'
                        id='minute-hand'
                        style={{ transform: `rotateZ(${minutes}deg)` }}
                    ></div>
                </div>
                <div className='seconds'>
                    <div
                        className='second-hand'
                        id='second-hand'
                        style={{ transform: `rotateZ(${seconds}deg)` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

Watch.propTypes = {
    onDelet: PropTypes.func.isRequired,
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        timer: PropTypes.string.isRequired,
    })
}
