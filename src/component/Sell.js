import { useState} from 'react'

export const Sell = ({ toggleModal }) => {
  return (
    <div className='sell'>
        <div className='sell-content'>
            <div className='sell-container'>
                <div className='sell-title'>Sell Item</div>
                <img alt='close' onClick={() => toggleModal(false)}
                src='https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png' 
                />
            </div>
        </div>
        

    </div>
  )
}
