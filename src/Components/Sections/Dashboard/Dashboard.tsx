"use client"

import AnimationFirst from "@/Components/Specifies/AnimationFirst/AnimationFirst"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import styles from './_dashboard.module.scss'
import Image from "next/image"
import Button from "@/Components/Global/Button/Button"
import Link from "next/link"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import image from '../../../public/homeIllustration.svg'
import SocialMedia from "@/Components/Specifies/SocialMedia/SocialMedia"
import Scroll from "@/Components/Specifies/Scroll/Scroll"
function Dashboard() {

    const homeSection = useRef(null)
    const leftContainer = useRef(null)
    const rightContainer = useRef(null)

    useGSAP(() => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to(homeSection.current, {
                scrollTrigger: {
                    // markers: true,
                    trigger: homeSection.current,
                    end: "bottom 30%",
                    start: "50% top",
                    scrub: 1,
                    

                },
                opacity: 0.25,
                duration: 10,
                
            })

            gsap.from(leftContainer.current, {
                delay: 1.8,
                duration: 1,
                scale: 0.85
            })
            gsap.from(rightContainer.current, {
                delay: 1.8,
                duration: 1,
                scale: 0.85
            })


    }, { scope: homeSection })

    return (
        <section className={` block ${styles.section_home}`} id='dashboard' ref={homeSection}>

            {/* <AnimationFirst /> */}

            <SocialMedia />

            <Image src={image} alt='' ref={leftContainer} className={styles.img} priority={true} />

            <div className={styles.section_home__right} ref={rightContainer}>
                <h1 translate="no">Front-End React Developer</h1>
                <p>Hello <span className={styles.emoji}>&#128075;</span>, i'am <span className={styles.name}>Radonirina</span> and
                    welcome to my portfolio. It will help you get to know me better. Remember, we can build something extraordinary together!</p>
                <div className={styles.container_button}>
                    <a href="cv.pdf" download="cv_portfolio_rado.pdf">
                        <Button type="button"
                            className="btn_secondary"
                            value="Download CV"
                        />
                    </a>
                    <Link href={'#contact'}>
                        <Button className="btn_primary"
                            value="Contact"
                            type="button" />
                    </Link>

                </div>
            </div>

            {/* <Mouse /> */}

            <Scroll />
        </section>
    )
}

export default Dashboard