import React from 'react'
import styles from './_card-project.module.scss'

import Image from 'next/image'
import imagePortfolio from '../../../../../public/portfolio.png'
import imageImusic from '../../../../../public/Imusic.png'

interface ICardProject {
    name: 'My-portfolio' | 'I-music'
}

function CardProject({ name }: ICardProject) {
    return (
        <div className={styles.card_wrapper}>
            {
                name == 'My-portfolio' ? <Image src={imagePortfolio} alt='' className={styles.image} /> : ''
            }

            {
                name == 'I-music' ? <Image src={imageImusic} alt='' className={styles.image} /> : ''
            }
            <div className={styles.descriZone}>
                <h3>{name}</h3>
                <p className={styles.descriText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
    )
}

export default CardProject