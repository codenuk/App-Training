import React from 'react'
import styles from './index.module.scss'
import ProfileSVG from './images/profile.svg'

const NavTopBarComponent: React.FC = (): JSX.Element => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.leftSide}>
        <h3>ระบบพยาบาล</h3>
      </div>
      <div className={styles.rightSide}>
        <p>Menu</p>
        <p>พย. สาวสวย ส้มตำอร่อย</p>
        <img alt="ProfileSVG" src={ProfileSVG} width={40} height={40} />
      </div>
    </section>
  )
}
export default NavTopBarComponent
