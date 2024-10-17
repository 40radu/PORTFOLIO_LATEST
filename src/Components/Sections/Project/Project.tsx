'use client'

import React, { useRef } from 'react'
import styles from './_project.module.scss'
import Title from '@/Components/Global/Title/Title'
import CardProject from '@/Components/Specifies/Projects/Card/CardProject'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Project() {
    const refProjectSection = useRef(null)

    useGSAP(() => {
        gsap.from(refProjectSection.current, {
            scrollTrigger: {
                trigger: refProjectSection.current,
                start: 'top bottom',
                endTrigger: refProjectSection.current,
                end: '50% 50%',
                // markers: true, 
                scrub: 1
            },
            backgroundColor: 'rgba(4, 4, 4, 0.06)'
        })

        // if (window.innerWidth >= 1024) {
        //     let animate_pin = gsap.to(refProjectSection.current, {
        //         scrollTrigger: {
        //             trigger: refProjectSection.current,
        //             start: 'top top',
        //             end: 'bottom 15%',
        //             // markers: true,
        //             scrub: 1,
        //             pin: true,
        //             pinSpacing: false,
        //         },
        //         opacity: 0,
        //         x: -100

        //     })

        //     ScrollTrigger.create({
        //         trigger: refProjectSection.current,
        //         start: 'top top',
        //         end: 'bottom top',
        //         onLeave: () => {
        //             // console.log('leave')
        //             animate_pin.scrollTrigger?.disable()
        //             // console.log("enabled?")
        //         },
        //         onLeaveBack: () => {
        //             // console.log('leave back')
        //             animate_pin.scrollTrigger?.enable()
        //             // console.log("disable")
        //         }
        //     })
        // }


    })


    return (
        <section className={styles.section_project} id='project' ref={refProjectSection}>
            <Title title='project' description='[[ Here, you can discover my project ]]' underTitle='some of my work' />
            <div className={styles.cards_wrapper}>
                <CardProject name='My-portfolio' />
                <CardProject name='I-music' />
            </div>
        </section>
    )
}

export default Project