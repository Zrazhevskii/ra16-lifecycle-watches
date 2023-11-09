import React from 'react';

export const Watch = (item) => {
    console.log(item)

    return (
        <div className='clock'>
            <div className='hour'>
                <div className='hour-hand' id='hour-hand'></div>
            </div>
            <div className='minutes'>
                <div className='minute-hand' id='minute-hand'></div>
            </div>
            <div className='seconds'>
                <div className='second-hand' id='second-hand'></div>
            </div>
        </div>
    );
};
