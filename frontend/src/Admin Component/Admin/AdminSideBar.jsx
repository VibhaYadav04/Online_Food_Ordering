import React from 'react'
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import CategoryIcon from '@mui/icons-material/Category';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { ShoppingBag, Dashboard } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Drawer, Divider, useMediaQuery } from "@mui/material";
import { logout } from '../../component/State/Authentication/Action'

const menu = [
  { title: "Details", icon: <AdminPanelSettingsIcon />, path: "/details" },
  //{ title: "Dashboard", icon: <Dashboard />, path: "/" },
  { title: "Orders", icon: <ShoppingBag />, path: "/orders" },
  { title: "Menu", icon: <ShopTwoIcon />, path: "/menu" },
  { title: "FoodCategory", icon: <CategoryIcon />, path: "/category" },
  { title: "Ingredients", icon: <FastfoodIcon />, path: "/ingredients" },
  
  { title: "Logout", icon: <LogoutIcon />, path: "/" }
];

export const AdminSideBar = ({ handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:1080px)")
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (item) => {
    navigate(`/admin/restaurants${item.path}`)
    if (item.title === "Logout") {
      navigate("/")
      dispatch(logout())
      handleClose()
    }
  }

  return (
    <div>
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        onClose={handleClose}
        open={true}
        anchor='left'
        sx={{ zIndex: 1 }}>

        <div className='w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]'>

          {menu.map((item, i) => (
            <React.Fragment key={i}>
              <div onClick={() => handleNavigate(item)} className='px-5 flex items-center gap-5 cursor-pointer'>
                {item.icon}
                <span>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </React.Fragment>
          ))}

        </div>

      </Drawer>
    </div>
  )
};

export default AdminSideBar;
