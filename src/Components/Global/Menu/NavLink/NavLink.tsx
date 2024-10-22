import React, { useRef } from 'react'
import { INavLink } from './navLinkType'
import styles from './_navLink.module.scss'
import Link from 'next/link'
import gsap from 'gsap'


function NavLink({ text, href, onClick }: INavLink) {

    const linkRef = useRef(null)
    const rectRef = useRef(null)

    function mouseEnter() {
        gsap.to(linkRef.current, { backgroundColor: 'rgba(217, 217, 217, 0.20)', scale : 0.97, duration: 0.25, yoyo: true, repeat: 1 , ease : 'expo'})
        // gsap.to(rectRef.current, {opacity:1, rotate : '360deg', duration: 0.35})
    }
    return (
        <Link href={href} onTouchStart={mouseEnter} className={styles.link_container} ref={linkRef} onClick={onClick}>
            <p>{text}</p>
            <div className={styles.rectangle} ref={rectRef}></div>
        </Link>
    )
}

export default NavLink