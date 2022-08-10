import React from 'react'
import './ListItem.css';
import { useStateValue } from '../../StateProvider';

const ListItem = ({title, description, image}) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
      // remove the item from the basket
      dispatch({
          type: 'REMOVE_FROM_BASKET',
          title: title,
      })
  }
  return (
    <div className = 'list__item'>
        <div className = 'left'>
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
        </div>
                    
        <div className = 'right'>
            <button className = 'go__button'>Buy</button>
            <button className = 'delete__button' onClick={removeFromBasket}>Remove</button>
        </div>
    </div>
  )
}

export default ListItem