'use client'

import React from 'react'
import styles from './_notFound.module.scss'
import { useRouter } from 'next/navigation'

type Props = {}

function NotFound({ }: Props) {

    const router = useRouter()

    function handleClick () {
        router.back()
    }

    return (
        <div className={styles.container} >
            <p className={styles.descri}> 404 | This page could not be found</p>
            <button type='button' onClick={handleClick} className={styles.buttonBack}>Go back</button>

        </div>
    )
}

export default NotFound