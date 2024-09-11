"use client"

import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './_animationFirst.module.scss'

function AnimationFirst() {

  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoader(true)
    }, 1000)
  }, [])

  useGSAP(() => {

    const body = document.querySelector('body')
    body ? body.style.overflow = 'hidden' : ''

    setTimeout(() => {
      body ? body.style.overflow = 'auto' : ''
    }, 3000)

    setTimeout(() => {

      const bannerLeft = document.querySelector('#banner__left')
      const bannerRight = document.querySelector('#banner__right')
      const wrapperAll = document.querySelector('#wrapper_animation') as HTMLDivElement

      setTimeout(() => {
        wrapperAll.style.backgroundColor = 'transparent'
        wrapperAll.style.width = 'fit-content'
        wrapperAll.style.height = 'fit-content'
      }, 450)

      if (bannerLeft) {
        gsap.to(bannerLeft, {
          yPercent: -1,
          yoyo: true,
          duration: 0.25,
          repeat: 1,
          ease: 'power3'
        })
        gsap.to(bannerLeft, {
          delay: 0.75,
          xPercent: -100,
          duration: 0.85,

        })
      }
      if (bannerRight) {
        gsap.to(bannerRight, {
          yPercent: 1,
          yoyo: true,
          duration: 0.25,
          repeat: 1,
          ease: 'power3'

        })
        gsap.to(bannerRight, {
          delay: 0.75,
          xPercent: 100,
          duration: 0.85,

        })
      }

    }, 1000)

  })

  return (
    <section className={styles.animation_section} id='wrapper_animation'>

      {loader && <>
        <div id='banner__left' className={styles.bannerLeft}>
          <p>Welcome To</p>
        </div>

        <div id='banner__right' className={styles.bannerRight}>
          <p>
            My Portfolio</p>
        </div>
      </>}

    </section>

  )
}

export default AnimationFirst