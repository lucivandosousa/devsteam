import styles from './navbar.module.css'
import Logo from '../logo/logo'
import Input from '../forms/input/input'
import CartButton from '../forms/cartButton/cartButton'

export default function NavBar({cart, onRemove}) {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.search}>
        <Input type='text' placeholder='Buscar' fullWidth/>
      </div>
      <CartButton
        cart={cart}
        onRemove={onRemove}
      />
    </nav>
  )
}