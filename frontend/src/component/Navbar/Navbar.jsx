import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from '@mui/icons-material/Person'
import "./Navbar.css";
import {useNavigate} from 'react-router-dom'

export const Navbar = () => {
  const navigate= useNavigate();
  return (
    <Box className="px-5 sticky top-0  z-50 py-[.8rem] bg-[#264d4d] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-gray-300 text-2xl">
          Taste Hunt
        </li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div>
          {false? <Avatar sx={{ bgcolor: "white", color: blueGrey.A400 }}>V</Avatar>:
          <IconButton onClick={()=>navigate("account/login")}><PersonIcon/></IconButton>}
        </div>
        <div className="">
          <IconButton>
            <Badge color="primary" badgeContent={3}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};
