import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { MenuIcon } from '../svg-shapes/MenuIcon.js';
import { NavLogo } from '../svg-shapes/NavLogo.js';
import { BlueDot } from '../svg-shapes/BlueDot.js';
import { useWindowDimensions } from '../../hooks/useWindowDimensions.js';
import { FetchContext } from '../../context/FetchContext.js';
import { useStyles } from '../../styles/components/layout/Navbar.module.js';

export const Navbar = () => {
  const classes = useStyles()
  const router = useRouter();
  const { asPath } = router;
  const {width} = useWindowDimensions();

  const NavMenu = [{label:'Home', path:'/'}, {label:'Tags', path:'/tags'}];

  return (    
    <nav className={classes.navbar}>
      {
        width>414 && <NavLogo atNavbar={true} />
      }    
      {
        NavMenu.map(
          d => 
              <NavMenuItem 
                menuData={d} 
                key={d.label} 
                asPath={asPath} 
                width={width} 
              />
        )
      }
    </nav>
  );
}

const NavMenuItem = ({menuData , asPath, width}) => {
  const classes = useStyles();

  const { label, path } = menuData;
  const isActive = 
      path === '/'? 
          asPath==='/' || 
              asPath.startsWith('/?') || 
                  asPath.startsWith('/search?') : 
                      asPath.startsWith(path+'?') || asPath === path;
  const showBlueDot = 
      !asPath.startsWith('/tags') && path==='/tags' && width > 414;
  const fetchParams = useContext(FetchContext);

  return (
    <Link href={{pathname:path, query:fetchParams}}>
      <a className={classes.menuItemContainer}>
        <Box className={classes.iconContainer}>
          <MenuIcon isActive={isActive}/>
          <Box className={`${classes.blueDot} ${!showBlueDot&&'hidden'}`}>
            <BlueDot />
          </Box>
        </Box>                  
        {
          isActive && width > 414 &&
          <p className={classes.menuLabel}>
            {label}
          </p>
        }
      </a>
    </Link>
  )
}