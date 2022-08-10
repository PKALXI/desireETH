import React from 'react';
import Collection from './collections/Collection'
import List from './list/List'
import './Body.css';
const Body = () => {

  return (
    <div className="body">
        <div className='left__side'>
          <Collection />
        </div>
        <div className='right__side'>
          <List />
        </div>
        
    </div>
  )
}

export default Body