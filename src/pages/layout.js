import * as React from "react";
import Navbar from './navbar'
const Layout = ({ children }) => {
  
  return (
    <div>
      <Navbar/>
      {children}
      <footer>You reached the end of the page</footer>
    </div>
  );

};
export default Layout;
