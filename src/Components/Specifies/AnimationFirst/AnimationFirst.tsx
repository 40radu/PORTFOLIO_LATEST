"use client"

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './_animationFirst.module.scss'

function AnimationFirst() {

  useGSAP(() => {

    const body = document.querySelector('body')
    body ? body.style.overflow = 'hidden' : ''

    setTimeout(() => {
      body ? body.style.overflow = 'auto' : ''
    }, 3000)


    const bannerLeft = document.querySelector('#banner__left') as HTMLDivElement
    const bannerRight = document.querySelector('#banner__right') as HTMLDivElement
    const textLeft = document.querySelector('#text_left') as HTMLParagraphElement
    const textRight = document.querySelector('#text_right') as HTMLParagraphElement

    setTimeout(() => {
      textLeft.style.visibility = 'visible'
      textRight.style.visibility = 'visible'
    }, 800)

    if (bannerLeft) {
      gsap.to(bannerRight, {
        backgroundColor: '#f8fafc',
        duration: 0.7
      })
      gsap.to(bannerLeft, {
        yPercent: -1,
        yoyo: true,
        duration: 0.25,
        repeat: 1,
        ease: 'power3',
        delay: 1
      })
      gsap.to(bannerLeft, {
        delay: 1.75,
        duration: 0.85,
        opacity: 0,
        pointerEvents : 'none'

      })
    }
    if (bannerRight) {
      gsap.to(bannerRight, {
        yPercent: 1,
        yoyo: true,
        duration: 0.25,
        repeat: 1,
        ease: 'power3',
        delay: 1


      })
      gsap.to(bannerRight, {
        delay: 1.75,
        duration: 0.85,
        opacity: 0,
        pointerEvents : 'none'



      })
    }


  })

  return (
    <section>
      <div id='banner__left' className={styles.bannerLeft}>
        <p id='text_left'>Welcome To</p>
      </div>

      <div id='banner__right' className={styles.bannerRight}>
        <p id='text_right'>
          My Portfolio</p>
      </div>
    </section>

  )
}

export default AnimationFirst