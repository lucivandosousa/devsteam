import styles from './saleCard.module.css'
import Image from 'next/image'
import Button from '../../forms/button/button'

export default function SaleCard({image, discount, fullprice, discountPrice}) {
  return (
    <div className={styles.salecard}>
      <Image src={`/products/${image}`} width={250} height={300}/>
      <div className={styles.info}>
        <h3 className={styles.title}>Oferta Exclusiva</h3>
        <div className={styles.pricecard}>
          <div className={styles.percent}>-{discount}</div>
          <div className={styles.price}>
            <p className={styles.fullprice}>R${fullprice}</p>
            <h4 className={styles.discountprice}>R${discountPrice}</h4>
          </div>
        </div>
        <Button fullWidth>Adicionar ao carrinho</Button>
      </div>
    </div>
  )
}