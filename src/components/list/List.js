import React from 'react'
import "./List.css";
import ListItem from './ListItem';
import { useStateValue } from '../../StateProvider';

const List = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="list">
    <div className='list__title'>
      <h6>
        My Wishlist
      </h6>
    </div>
      <div className='list__items'>
          {basket.map(item => (
            <ListItem
              title={item.title}
              image={item.image}
              description={item.description }
            />
          ))}
      </div>  
    </div>
  )
}

export default List