import React, { useState } from 'react'
import Logo from "../Assets/gravitiss-logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { Box,
Drawer,
List,
ListItem,
ListItemButton,
ListItemIcon,
ListItemText, } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

import Payment from './Payment';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const location = useLocation();
    const menuOptions = [

{
    text:"Home",
    icon:<HomeIcon/>,
    link: "/"
},
{
    text:"About",
    icon:<InfoIcon/>,
    link: "/About"
},

{
    text:"Contact",
    icon:<PhoneRoundedIcon/>,
    link: "/Contact"
},

];
const navigate = useNavigate();

const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleMenuOptionClick = (link) => {
    navigate(link);
    setOpenMenu(false);
  };

  return (
    <nav >
        <div className='nav-logo-container'>
       <img  className='nav-logo' src={Logo} alt="" />
        </div>
        <div className='navbar-links-container' >
            
           {/* <Link to="/">Home</Link>
           <Link to="/About">About</Link>
           <Link to="/Contact">Contact</Link>
           <Link to="/Products">Products</Link> */}


           {menuOptions.map((item) => (
          <Link 
          key={item.text} 
          to={item.link}
          className={location.pathname === item.link ? 'active' : ''}
          >
            {item.text}
            </Link>
        ))}
        <Link to="/Products">Products</Link>
        <button onClick={() => navigate('/Payment')} className='primary-button'>Buy Now</button>
      </div>
           
            {/* <button onClick={()=> navigate(Payment)} className='primary-button' >Buy Now </button>
        </div> */}
        <div className='navbar-menu-container'>
            {/* <HiOutlineBars3 onClick={() => setOpenMenu(true) }/> */}
            <HiOutlineBars3 onClick={handleMenuClick}/>
        </div>
        <Drawer open={openMenu}  onClose={handleMenuClick}
       anchor="right">
        <Box sx={{width:250 }}
        role="presentation"
        // onClick={() => setOpenMenu(false)}
        // onKeyDown={() => setOpenMenu(false)}>
        onClick={handleMenuClick}
          onKeyDown={handleMenuClick}>
            <List>
                {menuOptions.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
        </Drawer>
    </nav>
  )
}

export default Navbar