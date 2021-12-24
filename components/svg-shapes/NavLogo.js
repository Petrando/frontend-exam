import styles from "../../styles/components/layout/Navbar.module.css";
import {useStyles} from "../../styles/components/layout/Navbar.module"

const NavLogo = ({atNavbar}) => {
  const classes = useStyles()

  return (
  <div className={`${atNavbar?styles.logo:styles.logoNotAtNavbar}`}>
    <svg width="35" height="15" viewBox="0 0 35 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.059 10.258V12H1.04V2.991H3.068V10.258H7.059ZM9.16429 7.489C9.16429 7.931 9.21629 8.32967 9.32029 8.685C9.43296 9.04033 9.58896 9.348 9.78829 9.608C9.99629 9.85933 10.2476 10.0543 10.5423 10.193C10.837 10.3317 11.175 10.401 11.5563 10.401C11.929 10.401 12.2626 10.3317 12.5573 10.193C12.8606 10.0543 13.112 9.85933 13.3113 9.608C13.5193 9.348 13.6753 9.04033 13.7793 8.685C13.892 8.32967 13.9483 7.931 13.9483 7.489C13.9483 7.047 13.892 6.64833 13.7793 6.293C13.6753 5.929 13.5193 5.62133 13.3113 5.37C13.112 5.11 12.8606 4.91067 12.5573 4.772C12.2626 4.63333 11.929 4.564 11.5563 4.564C11.175 4.564 10.837 4.63767 10.5423 4.785C10.2476 4.92367 9.99629 5.123 9.78829 5.383C9.58896 5.63433 9.43296 5.942 9.32029 6.306C9.21629 6.66133 9.16429 7.05567 9.16429 7.489ZM16.0413 7.489C16.0413 8.26033 15.9243 8.94067 15.6903 9.53C15.465 10.1107 15.153 10.6003 14.7543 10.999C14.3556 11.389 13.879 11.6837 13.3243 11.883C12.7783 12.0823 12.189 12.182 11.5563 12.182C10.941 12.182 10.3603 12.0823 9.81429 11.883C9.26829 11.6837 8.79162 11.389 8.38429 10.999C7.97696 10.6003 7.65629 10.1107 7.42229 9.53C7.18829 8.94067 7.07129 8.26033 7.07129 7.489C7.07129 6.71767 7.19262 6.04167 7.43529 5.461C7.67796 4.87167 8.00296 4.37767 8.41029 3.979C8.82629 3.58033 9.30296 3.28133 9.84029 3.082C10.3863 2.88267 10.9583 2.783 11.5563 2.783C12.1716 2.783 12.7523 2.88267 13.2983 3.082C13.8443 3.28133 14.321 3.58033 14.7283 3.979C15.1356 4.37767 15.4563 4.87167 15.6903 5.461C15.9243 6.04167 16.0413 6.71767 16.0413 7.489ZM21.4758 4.551C20.5311 4.551 19.8465 4.81533 19.4218 5.344C19.0058 5.864 18.7978 6.579 18.7978 7.489C18.7978 7.931 18.8498 8.334 18.9538 8.698C19.0578 9.05333 19.2138 9.361 19.4218 9.621C19.6298 9.881 19.8898 10.0847 20.2018 10.232C20.5138 10.3707 20.8778 10.44 21.2938 10.44C21.5191 10.44 21.7098 10.4357 21.8658 10.427C22.0305 10.4183 22.1735 10.401 22.2948 10.375V7.242H24.3228V11.701C24.0801 11.7963 23.6901 11.896 23.1528 12C22.6155 12.1127 21.9525 12.169 21.1638 12.169C20.4878 12.169 19.8725 12.065 19.3178 11.857C18.7718 11.649 18.3038 11.3457 17.9138 10.947C17.5238 10.5483 17.2205 10.0587 17.0038 9.478C16.7958 8.89733 16.6918 8.23433 16.6918 7.489C16.6918 6.735 16.8088 6.06767 17.0428 5.487C17.2768 4.90633 17.5975 4.41667 18.0048 4.018C18.4121 3.61067 18.8888 3.303 19.4348 3.095C19.9895 2.887 20.5788 2.783 21.2028 2.783C21.6275 2.783 22.0088 2.81333 22.3468 2.874C22.6935 2.926 22.9881 2.991 23.2308 3.069C23.4821 3.13833 23.6858 3.212 23.8418 3.29C24.0065 3.368 24.1235 3.42867 24.1928 3.472L23.6078 5.097C23.3305 4.94967 23.0098 4.824 22.6458 4.72C22.2905 4.60733 21.9005 4.551 21.4758 4.551ZM27.2627 7.489C27.2627 7.931 27.3147 8.32967 27.4187 8.685C27.5314 9.04033 27.6874 9.348 27.8867 9.608C28.0947 9.85933 28.3461 10.0543 28.6407 10.193C28.9354 10.3317 29.2734 10.401 29.6547 10.401C30.0274 10.401 30.3611 10.3317 30.6557 10.193C30.9591 10.0543 31.2104 9.85933 31.4097 9.608C31.6177 9.348 31.7737 9.04033 31.8777 8.685C31.9904 8.32967 32.0467 7.931 32.0467 7.489C32.0467 7.047 31.9904 6.64833 31.8777 6.293C31.7737 5.929 31.6177 5.62133 31.4097 5.37C31.2104 5.11 30.9591 4.91067 30.6557 4.772C30.3611 4.63333 30.0274 4.564 29.6547 4.564C29.2734 4.564 28.9354 4.63767 28.6407 4.785C28.3461 4.92367 28.0947 5.123 27.8867 5.383C27.6874 5.63433 27.5314 5.942 27.4187 6.306C27.3147 6.66133 27.2627 7.05567 27.2627 7.489ZM34.1397 7.489C34.1397 8.26033 34.0227 8.94067 33.7887 9.53C33.5634 10.1107 33.2514 10.6003 32.8527 10.999C32.4541 11.389 31.9774 11.6837 31.4227 11.883C30.8767 12.0823 30.2874 12.182 29.6547 12.182C29.0394 12.182 28.4587 12.0823 27.9127 11.883C27.3667 11.6837 26.8901 11.389 26.4827 10.999C26.0754 10.6003 25.7547 10.1107 25.5207 9.53C25.2867 8.94067 25.1697 8.26033 25.1697 7.489C25.1697 6.71767 25.2911 6.04167 25.5337 5.461C25.7764 4.87167 26.1014 4.37767 26.5087 3.979C26.9247 3.58033 27.4014 3.28133 27.9387 3.082C28.4847 2.88267 29.0567 2.783 29.6547 2.783C30.2701 2.783 30.8507 2.88267 31.3967 3.082C31.9427 3.28133 32.4194 3.58033 32.8267 3.979C33.2341 4.37767 33.5547 4.87167 33.7887 5.461C34.0227 6.04167 34.1397 6.71767 34.1397 7.489Z" fill="url(#paint0_linear_3_1417)"/>
      <defs>
        <linearGradient id="paint0_linear_3_1417" x1="34.9547" y1="7.49649" x2="-8.62393e-05" y2="7.50227" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD25F"/>
          <stop offset="1" stopColor="#FF5C01"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
  )
}

export default NavLogo;