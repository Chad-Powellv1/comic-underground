import { useState, useContext } from 'react';
import { AiOutlineClose } from 'react-icons';
import { Context } from '../context/GlobalState';
import validator from "validator";
import withModal from './Modal';


export const Sell = ({ toggleModal }) => {

  const [ addImage, setAddImage ] = useState(null);

  const { user } = useContext(Context);

  // addImagetoAuction = (e) => {

  // };

  // const createAuction = () => {
  //   try {
  //     const {close_date, minimum_bid, auction_status, items} = getInputs();
  //     if (isItemValid({close_date, minimum_bid, auction_status, items})) {
        
  //     }
  //   }
  // }

  return (
    <div className='sell'>
      <div className='sell-content'>
        <div className='sell-container'>
          <div className='sell-title'>Create Auction</div>
          <div className='sell-close'>
          <img
              alt="close"
              onClick={() => toggleModal(false)}
              src={<AiOutlineClose/>}
            />
          </div>
        </div>
        <div className='sell-subtitle'>Item Details</div>
        <div className='sell-form'>
          {

          }
      </div>
       
      
    </div>
    </div>
  )
}
