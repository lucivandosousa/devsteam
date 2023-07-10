import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs'
import Logo from '../logo/logo'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <input type="text" />
      <BsCart4 size={40} />
    </nav>
  )
}