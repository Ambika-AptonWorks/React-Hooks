import React from 'react'
import './Popup.css'

function Popup({ comeBack }) {   
  return (
    <div className='popup-backGround'>
        <div className='popup-container'>
            <div className='popup-title'>
                <h1>Do you want to Submit?</h1>
            </div>
            <div className='popup-body'>
                <p>once you  submit you cant do changes again.</p>
            </div>
            <div className='popup-footer'>
                <button className='btn btn-danger mx-3' onClick={()=>comeBack(false)}>No</button>
                <button className='btn btn-success' onClick={()=>comeBack(false)}>yes</button>
            </div>
        </div>
    </div>
  )
}

export default Popup