'use client'

import React, { useRef } from 'react'
import styles from './_scroll.module.scss'
import arrowIcon from '../../../Icons/Arrow/arrow_down.svg'
import Image from 'next/image'
import { splitText } from '@/Utils/splitText/splitText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Scroll() {

    const textScroll = useRef<HTMLParagraphElement>(null)

    useGSAP(() => {
        if (textScroll.current && textScroll) {
            const paragElement = textScroll.current
            splitText(paragElement)
            const chars = paragElement.querySelectorAll('span')
            gsap.from(chars, {
                stagger: 0.12,
                duration : 3,
                display : 'none',
                color : '#ff0000a6',
                repeat : Infinity,
                ease : 'back',
            })
        }
    })

    return (
        <>
            <div className={styles.wrapper_scroll}>
                <Image src={arrowIcon} alt='' />
                <p ref={textScroll} translate='no'>Scroll</p>
            </div>
        </>
    )
}

export default Scroll