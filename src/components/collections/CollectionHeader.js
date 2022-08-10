import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';  
import './CollectionHeader.css';

const CollectionHeader = () => {
  return (
    <div class = 'CollectionHeader'>
<<<<<<< Updated upstream
        <DropdownButton id="dropdown-basic-button" title="Collections" align={{ lg: 'end' }}>
          <Dropdown.Item id = 'item' href="#/action-1">Collection #1</Dropdown.Item>
          <Dropdown.Item id = 'item' disabled href="#/ac tion-2">Collection #2 (COMING SOON)</Dropdown.Item>
          <Dropdown.Item id = 'item' disabled href="#/action-3">Collection #3 (COMING SOON)</Dropdown.Item>
=======
        <DropdownButton id="dropdown-basic-button" title="NEW Collections">
          <Dropdown.Item href="#/action-1">Collection #1</Dropdown.Item>
          <Dropdown.Item href="#/ac tion-2">Collection #3</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Collection #6</Dropdown.Item>
>>>>>>> Stashed changes
        </DropdownButton>
    </div>
  )
}

export default CollectionHeader