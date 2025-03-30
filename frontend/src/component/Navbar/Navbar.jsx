import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Badge, Box, IconButton, Button } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from '@mui/icons-material/Person'
import "./Navbar.css";
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { auth, cart } = useSelector(store => store)
  const navigate = useNavigate();

  const handleAvatarClick=()=>{
    if(auth.user?.role === 'ROLE_CUSTOMER'){
      navigate("/my-profile")
    }
    else{
      navigate("/admin/restaurants/details")
    }
  }

  return (
    <Box className="px-5 sticky top-0  z-50 py-[.8rem] bg-[#D88B1B] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li onClick={()=>navigate('/')} className="logo font-semibold text-white text-2xl font-poppins">
          Taste Hunt
        </li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="font-medium">
          {auth.user ? 
            (<Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: blueGrey.A900 }}>
            {auth.user?.fullName[0].toUpperCase()}</Avatar>) :
            (<Button sx={{ bgcolor: "white" }} onClick={() => navigate("account/login")}>Login</Button>)}
        </div>
        <div className="">
          <IconButton onClick={()=> navigate("/cart")}>
            <Badge color="primary" badgeContent={cart.cart?.items.length}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};
