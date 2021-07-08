import { FC } from "react";
import Logo from './Logo';
import Nav from "./Nav";
import classes from "./Header.module.scss";

const Header:FC = (props) =>{

  return(
    <div className="container">
      <header className={classes.header}>
        <Logo/>
        <Nav/>
      </header>
      {props.children}
    </div>
  )

}

export default Header;