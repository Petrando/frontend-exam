import Link from "next/link"
import { useRouter } from "next/router";
import MenuIcon from "../svg-shapes/MenuIcon";
import NavLogo from "../svg-shapes/NavLogo";
import BlueDot from "../svg-shapes/BlueDot";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles/components/layout/Navbar.module.css"

const NavMenu = [{label:"Home", path:"/"}, {label:"Tags", path:"/tags"}]

const Navbar = () => {
  const router = useRouter();
  const { asPath } = router;
  const {width} = useWindowDimensions();

  return (
    <>    
    <nav className={styles.navbar}>
    <NavLogo />
      {
        NavMenu.map(d => <NavMenuItem menuData={d} key={d.label} asPath={asPath} width={width} />)
      }
    </nav>
    </>
  )
}

const NavMenuItem = ({menuData : {label, path}, asPath, width}) => {
  const isActive = path === "/"?asPath === "/" || asPath === "/search" : path === asPath;
  const showBlueDot = asPath!=="/tags" && path==="/tags" && width > 414;

  return (
    <Link href={path}>
      <a className={styles.menuItemContainer}>
        <div className={styles.iconContainer}>
          <MenuIcon isActive={isActive}/>
          <div className={`${styles.blueDot} ${!showBlueDot&&'hidden'}`}>
            <BlueDot />
          </div>
        </div>                  
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