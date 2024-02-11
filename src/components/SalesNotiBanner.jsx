import React from 'react'

export default function SalesNotiBanner() {
    let day = '01';
    let hour = '22';
    let min = '58';
    let sec = '34';
    return (
        <div className='container-fluid cs-btn-primary mb-0'>
            <h3 className='text-center p-3 fw-light fs-6' style={{letterSpacing:'2px'}}>SALE ENDS IN <span className='fw-bold'>{day}</span><small className='fs-6'>Day</small> : <span className='fw-bold'>{hour}</span><small className='fs-6'>H</small> : <span className='fw-bold'>{min}</span><small className='fs-6'>M</small> : <span className='fw-bold'>{sec}</span><small className='fs-6'>S</small></h3>
        </div>
    )
}
