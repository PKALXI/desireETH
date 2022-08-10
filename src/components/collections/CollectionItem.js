import React from 'react';
import './CollectionItem.css'
import { useStateValue } from '../../StateProvider';

const CollectionItem = ({title, description, image}) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        image: image,
        description: description,
      },
    });
  };

  return (
    <div className='collection__item'>
      <img src={image}/>
      <div className='collection__info'>
          <p className='title'>{title}</p>
          <p className='description'>{description}</p>
      </div>
<<<<<<< Updated upstream
      <button className='collection__button' onClick={addToBasket}>Add</button>
=======
      <button className='collection__button' onClick={addToBasket}>Add to Cart</button>
>>>>>>> Stashed changes
    </div>
  )
}

export default CollectionItem