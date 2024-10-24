'use client'

import React, { useRef } from 'react'
import styles from './_card-project.module.scss'

import Image from 'next/image'
import imagePortfolio from '../../../../../public/portfolio.png'
import imageImusic from '../../../../../public/Imusic.png'
import gsap from 'gsap'

interface ICardProject {
    name: 'My-portfolio' | 'I-music'
}

function CardProject({ name }: ICardProject) {

    const card = useRef<HTMLAnchorElement>(null)

    function handleMouseEnter() {
        gsap.to(card.current, {
            scale: 1.05,
            duration: 1,
            ease: 'elastic'
        })
    }

    function handleMouseLeave() {
        gsap.to(card.current, {
            scale: 1,
            duration: 1,
            ease: 'back'
        })
    }

    function handleTouch() {
        handleMouseEnter()

        setTimeout(() => {
            handleMouseLeave()
        }, 250)
    }

    return (
        <a title='web site' href={name == 'I-music' ? 'https://latest-i-music.vercel.app' : '#home'} target={name == 'I-music' ? '_blank' : '_self'} className={styles.card_wrapper} onMouseEnter={handleMouseEnter} onTouchStart={handleTouch} onMouseLeave={handleMouseLeave} ref={card}>
            {
                name == 'My-portfolio' ? <Image src={imagePortfolio} alt='' className={styles.image} /> : ''
            }

            {
                name == 'I-music' ? <Image src={imageImusic} alt='' className={styles.image} /> : ''
            }

            {/* <video src="/video.mp4" ref={videoRef}></video> */}
            <div className={styles.descriZone}>
                <h3>{name}</h3>
                <p className={styles.descriText}>
                    { name == 'My-portfolio' ? 'This portfolio represents my skills and know-how as developer, while highlighting my achievements' : 
                    'An e-commerce site to sell guitars, with real-time shopping cart management, and a fluid interface developed with Next.js'}
                </p>
            </div>

        </a>
    )
}

export default CardProject