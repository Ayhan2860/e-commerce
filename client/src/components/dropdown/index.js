import React, { useState} from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons'
import { CSSTransition } from 'react-transition-group';

import { MdChevronRight } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';



export default function Dropdown() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const {user, logout} = useAuth()
  let navigate = useNavigate();
  const handleLogout = async ()=>{
    setActiveMenu('logout')
     logout(()=>{
       navigate("/");
     })
  }


  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height + 20);
  }

  return (
    <>
      <Menu   className="dropdown" closeOnSelect={false}>
        <MenuButton as={Button} rightIcon={<MdChevronRight />}>
          {user.email}
        </MenuButton>
        <MenuList style={{ height: menuHeight }} className="dropdown">
          <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}
          >
            <div style={{padding:"10px"}} className="main-menu">
                <NavLink  to={`/profile/${user.email}`}>
                <MenuItem m="10px 0" h="40px"  onClick={() => setActiveMenu('profile')}>
                 <Text  >Profile</Text>
                <Box pos="absolute" ml="80%">
                
                </Box>
              </MenuItem>
             </NavLink>

              
              <MenuItem h="40px" onClick={handleLogout}>
                <Text>Logout</Text>
                <Box pos="absolute" ml="80%">
                <SettingsIcon />
                </Box>
              </MenuItem>
            </div>
          </CSSTransition>
        </MenuList>
      </Menu>
    </>
  );
}
