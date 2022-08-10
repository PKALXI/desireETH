import React from 'react';
import './CollectionBody.css';
import CollectionItem from './CollectionItem';
import { OpenSeaStreamClient } from '@opensea/stream-js';
import { DesiredCollectionOne } from '../constants/DesiredCollectionOne';
const CollectionBody = () => {
  const client = new OpenSeaStreamClient({
      token: 'openseaApiKey'
  });

  return (
    <div className="collection__body">
        {
            DesiredCollectionOne.map(
                (source, index) => {
                    return (
                        <CollectionItem 
                            image={source.image}
                            description={source.description}
                            title={source.title}
                        />
                    )
                }
            )
        }
    </div>
  )
}


export default CollectionBody