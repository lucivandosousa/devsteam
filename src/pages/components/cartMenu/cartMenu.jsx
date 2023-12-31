import styles from './cartMenu.module.css'
import CartOption from '../cartOption/cartOption'

export default function CartMenu({cart, onRemove}) {
  console.log(cart)
  return (
    <div className={styles.menu}>
      <div className={styles.options}>
        {
          cart.length == 0 && <p>Nenhum produto no seu carrinho</p>
        }
        {
          cart.map((cartInfo, positionCart) => 
            <CartOption
              image={cartInfo.image}
              title={cartInfo.name}
              price={cartInfo.price.toFixed(2)}
              onRemove={() => onRemove(positionCart)}
              key={`cart-info-${positionCart}`}
            />
          )
        }
      </div>
      <div className={styles.priceline}>
        <h2>Total</h2>
        <h2 className={styles.price}>R${cart.reduce((prev, current) => prev + current.price, 0).toFixed(2)}</h2>
      </div>
    </div>
  )
}