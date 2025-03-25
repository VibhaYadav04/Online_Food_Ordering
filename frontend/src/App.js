import React from "react";
import './App.css';
import { Navbar } from './component/Navbar/Navbar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from './Theme/DarkTheme'
import { Home } from './component/Home/Home';
import { RestaurantDetails } from './component/Restaurant/RestaurantDetails';
import { Cart } from './component/Cart/Cart';
import { ProfileNavigation } from './component/Profile/ProfileNavigation';
import { CustomerRoute } from './component/Routers/CustomerRoute'
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      {/* <ProfileNavigation/> */}
      <CustomerRoute/>
    </ThemeProvider>
  );
}

export default App;
