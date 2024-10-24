import React from 'react'
import logoMobile from '../../../Icons/Logo/logo-mobile.svg'
import Image from 'next/image'
import Link from 'next/link'
import styles from './_logo.module.scss'

function Logo() {
  return (
    <Link translate='no' href={'#home'} className={styles.logo} id='linkLogo'>
        <Image src={logoMobile} alt='logo'/>
        <p className={styles.logo__text} >-Portfolio</p>
    </Link>
  )
}

export default Logo