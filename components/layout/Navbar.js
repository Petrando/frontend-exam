import { useContext } from "react";
import Link from "next/link"
import { useRouter } from "next/router";
import {Box} from '@mui/material'
import MenuIcon from "../svg-shapes/MenuIcon";
import NavLogo from "../svg-shapes/NavLogo";
import BlueDot from "../svg-shapes/BlueDot";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import FetchContext from "../../context/FetchContext";
import styles from "../../styles/components/layout/Navbar.module.css"

const NavMenu = [{label:"Home", path:"/"}, {label:"Tags", path:"/tags"}]

const Navbar = () => {
  const router = useRouter();
  const { asPath } = router;
  const {width} = useWindowDimensions();

  return (
    <>    
    <nav className={styles.navbar}>
      {
        width>414 && <NavLogo atNavbar={true} />
      }    
      {
        NavMenu.map(d => <NavMenuItem menuData={d} key={d.label} asPath={asPath} width={width} />)
      }
    </nav>
    </>
  )
}

const NavMenuItem = ({menuData : {label, path}, asPath, width}) => {
  const isActive = path === "/"?asPath==="/" || asPath.startsWith("/?") || asPath.startsWith("/search?") : 
                                asPath.startsWith(path+"?") || asPath === path;
  const showBlueDot = !asPath.startsWith("/tags") && path==="/tags" && width > 414;
  const fetchParams = useContext(FetchContext);

  console.log(asPath, typeof asPath);
  //console.log(fetchParams);

  return (
    <Link href={{pathname:path, query:fetchParams}}>
      <a className={styles.menuItemContainer}>
        <Box className={styles.iconContainer}>
          <MenuIcon isActive={isActive}/>
          <Box className={`${styles.blueDot} ${!showBlueDot&&'hidden'}`}>
            <BlueDot />
          </Box>
        </Box>                  
        {
          isActive &&
          <p className={styles.menuLabel}>
            {label}
          </p>
        }
      </a>
    </Link>
  )
}

export default Navbar;