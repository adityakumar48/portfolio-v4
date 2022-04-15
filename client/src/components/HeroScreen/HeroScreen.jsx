import React, { useEffect, useState } from 'react'
import AboutScreen from '../AboutScreen/AboutScreen'
import styles from './HeroScreen.module.css'
import WhatIDo from '../WhatIDo/WhatIDo';
import Project from '../Project/Project';
import ContactScreen from '../ContactScreen/ContactScreen';
import GitubRepos from '../GitubRepos/GitubRepos';



const HeroScreen = () => {
    const [timer, setTimer] = useState([
        "/images/FirstHero.png",
    ])


    useEffect(() => setInterval(() => {
        const images = [
            "/images/FirstHero.png",
            "/images/SecondHero.png",
            "/images/ThirdHero.png",
            "/images/FourthHero.png"
        ]

        let random = Math.floor(Math.random() * 4)
        setTimer(images[random])
    }, 5000), [])


    return (
        <>
            <section className={styles.heroSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className={`${styles.name}`}>I’m Aditya <br />
                                <span > Glad to see you</span></h1>
                            <p className={`${styles.subheading} col-md-10 mt-4`}>I’m a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
                            <div>
                                <p className={styles.letsConnect}>Let's Connect</p>
                            </div>
                            <div className={styles.Soicalicons}>
                                <ul className="d-flex">
                                    <li className={styles.liFirst}><a href="https://github.com/adityakumar48"><i className="fab fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/visinigiri-aditya/"> <i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="https://twitter.com/RanochTech"> <i className="fab fa-twitter"></i></a></li>
                                    <li><a href="mailto:adityakumarverified@gmail.com"> <i className="fas fa-envelope"></i></a></li>
                                    <li><a href="https://www.instagram.com/ranochtech/"> <i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-4 text-center">
                            <img src={`${timer}`} className={styles.HeroImg} alt="img" />
                        </div>
                    </div>
                </div >


            </section>
            <AboutScreen />

        </>
    )
}

export default HeroScreen
