import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';  
import './CollectionHeader.css';

const CollectionHeader = () => {
  return (
    <div class = 'CollectionHeader'>
        <DropdownButton id="dropdown-basic-button" title="NEW Collections">
          <Dropdown.Item href="#/action-1">Collection #1</Dropdown.Item>
          <Dropdown.Item href="#/ac tion-2">Collection #3</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Collection #6</Dropdown.Item>
        </DropdownButton>
    </div>
  )
}

export default CollectionHeader