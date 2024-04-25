import React from 'react'
import closeBlack from '../../public/icons/close-black-icon.svg'
import './ProductPopUp.css';

function ProductPopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
          <div className="popup-inner">
              <img alt='close-btn'
               src={closeBlack} 
               className='close-btn' 
               onClick={() => props.setTrigger(false)}
               onMouseOver={e => (e.currentTarget.src = closeBlack)}
               onMouseLeave={e => (e.currentTarget.src = closeBlack)}>
               </img>
            { props.children }
          </div>
        </div>
      ) : "";
}

export default ProductPopUp