import React, { useEffect } from "react";
import './App.css';
import { Navbar } from './component/Navbar/Navbar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from './Theme/DarkTheme'
import { Home } from './component/Home/Home';
import { RestaurantDetails } from './component/Restaurant/RestaurantDetails';
import { Cart } from './component/Cart/Cart';
import { ProfileNavigation } from './component/Profile/ProfileNavigation';
import { CustomerRoute } from './component/Routers/CustomerRoute'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./component/State/Authentication/Action";
import { findCart} from './component/State/Cart/Action'
import { Routers } from "./component/Routers/Routers";
import { getRestaurantByUserId} from './component/State/Restaurant/Action'
function App() {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)
  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt))
  },[auth.jwt]);

  useEffect(()=>{
    dispatch(getRestaurantByUserId(auth.jwt || jwt));
  }, [auth.user])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      {/* <CustomerRoute/> */}
      <Routers/>
    </ThemeProvider>
  );
}

export default App;
