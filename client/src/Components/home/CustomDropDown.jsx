import {Dropdown} from 'rsuite'
import React from 'react';

const CustomDropdown = ({ ...props}) => (
    <Dropdown trigger='hover'>
      <Dropdown.Item>{props.menu}</Dropdown.Item>
    </Dropdown>
  );
  
  const CustomDropDown = ({menu,title}) => {
      return (
        <CustomDropdown title={title} trigger="hover" menu={menu}/>
      );
  }
  
  export default CustomDropDown;