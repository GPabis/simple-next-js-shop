
import { useUser } from '@auth0/nextjs-auth0';
import { useState } from 'react';
import  Link  from 'next/link';
import classes from './Header.module.scss';

type link = {
  name: string,
  path: string,
  isForAuthenticated?: boolean
}

const LINKS: link[]= [
  {
    name: 'Login',
    path: '/api/auth/login',
    isForAuthenticated: false,
  },
  {
    name:'Wishlist',
    path: '/wishlist',
    isForAuthenticated: true,
  },
  {
    name: 'Products',
    path: '/products',
  },
  {
    name: 'Cart',
    path: '/cart',
    isForAuthenticated: true,
  },
  {
    name: 'Logout',
    path: '/api/auth/logout',
    isForAuthenticated: true,
  }
]

const Nav = () =>{
  const [links, setLink] = useState<(link[])>(LINKS);
  const { user, error, isLoading } = useUser();

  

  return(
    <nav className={classes.header__nav}>
      {links.filter(link => link.isForAuthenticated === undefined || (link.isForAuthenticated && user) || (!link.isForAuthenticated && !user)).map(item => {
        return <Link key={item.name} href={item.path}>{item.name}</Link>;
      })}
    </nav>
  )
}

export default Nav;