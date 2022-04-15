import React from 'react'
import styles from './WhatIDo.module.css'
import Project from '../Project/Project';
import ContactScreen from '../ContactScreen/ContactScreen';
import GitubRepos from '../GitubRepos/GitubRepos';

const Images = [
    "/images/html.png",
    "/images/css.png",
    "/images/js.png",
    "/images/chart.png",
    "/images/bootstrap.png",
    "/images/php.png",
    "/images/heroku.png",
    "/images/git.png",
    "/images/firebase.png",
    "/images/mongo.png",
    "/images/mysql.png",
    "/images/nodejs.png",
    "/images/netlify.png",
    "/images/python.png",
    "/images/react.png",
    "/images/linux.png",
    "/images/cpp.png",
    "/images/github.png",
    "/images/xampp.png",
    "/images/express.png",

]

const WhatIDo = () => {
    return (
        <>
            <section className={styles.whatiDoSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className={`${styles.whatiDo}`}>What I Do ?
                            </h1>
                        </div>
                        <div className="col-md-8">
                            <div className={styles.imgWrapper}>


                                {Images.map(image => {
                                    return <img className={`${styles.icons}`} src={image} />
                                })}
                            </div>




                        </div>
                        <div className="col-md-4">
                            <div className={`mx-auto`}>
                                <img src="/images/working.png" className={`${styles.whatIDoIMG} rounded mx-auto d-block`} alt="" />
                            </div>
                        </div>

                    </div>
                </div >

            </section >
            <Project />
            <GitubRepos />
            <ContactScreen />
        </>
    )
}

export default WhatIDo
