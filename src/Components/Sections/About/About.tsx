"use client"

import React, { useRef } from 'react'
import styles from './_about.module.scss'
import Title from '@/Components/Global/Title/Title'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import _ScrollTrigger, { ScrollTrigger } from 'gsap/ScrollTrigger';
import decoLeft from '../../../public/deco_flower1.png'
import decoRight from '../../../public/deco_flower2.png'
import Image from 'next/image';



function About() {
    const title_about = useRef()
    const about_section = useRef<HTMLDivElement>(null)
    const titleDescription = useRef()

    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger)

        const textDescription = document.querySelectorAll(`.${styles.more_description} p`)

        gsap.from(textDescription, {
            scrollTrigger: {
                // markers : true,     
                trigger: textDescription,
                start: "top 70%",
                endTrigger: about_section?.current,
                toggleActions: 'restart none none reverse',
                end: 'bottom 65%',
                // scrub:1,
            },
            xPercent: -10,
            duration: 1.5,
            ease : 'elastic',
            stagger: 0.35,
            opacity: 0

        })

        if (about_section) {
            
            // let animate_pin = gsap.to(about_section.current, {
            //     scrollTrigger: {
            //         trigger: about_section.current,
            //         start: 'top top',
            //         end: 'bottom 15%',
            //         // markers: true,
            //         scrub: 1,
            //         pin: true,
            //         pinSpacing: false,
            //     },
            //     opacity: 0,
            //     x : +25
        
            // })

            // ScrollTrigger.create({
            //     trigger: about_section.current,
            //     start: 'top top',
            //     end: 'bottom top',
            //     onLeave: () => {
            //         // console.log('leave')
            //         animate_pin.scrollTrigger?.disable()
            //         // console.log("enabled?")
            //       },
            //       onLeaveBack: () => {
            //         // console.log('leave back')
            //         animate_pin.scrollTrigger?.enable()
            //         // console.log("disable")
            //       }
            // })

            gsap.from(about_section.current, {
                scrollTrigger: {
                    trigger: about_section.current,
                    start: 'top bottom',
                    end: '50% 50%',
                    // markers: true, 
                    scrub: 1
                },
                backgroundColor: 'rgba(4, 4, 4, 0.06)'
            })
        }

    }, { scope: about_section })


    return (
        <section className={styles.about_section} ref={about_section} id='about'>
            <Title
                underTitle='self-summary'
                title='about'
                description='[[ HERE,  DISCOVER MY PERSONAL PROFILE  ]]'
            />

            <div className={styles.more_description}>
                <p className='text-description'>For me, every new challenge is an opportunity to grow and improve.
                    My goal is to create intuitive and high-performing user experiences.
                    It's always a real pleasure for me to work on new projects. </p>

                <p className='text-description'>I'm passionate about innovation and technology,
                    and a developer specializing in the creation of web and mobile solutions. Since 2023, I've been focusing my efforts on front-end development,
                    mastering various languages and frameworks. Don't hesitate to contact me if you'd like to work together! </p>

                <div className={styles.flowerZone}>
                    <Image src={decoLeft} alt='' />
                    <Image src={decoRight} alt='' />

                </div>

            </div>
        </section>
    )
}

export default About