import React from 'react'
import styles from './WhatIDo.module.css'
import Project from '../Project/Project';
import ContactScreen from '../ContactScreen/ContactScreen';
import GitubRepos from '../GitubRepos/GitubRepos';

const Images = [
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/html.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/css.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/js.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/chart.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/bootstrap.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/php.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/heroku.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/git.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/firebase.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/mongo.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/mysql.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/nodejs.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/netlify.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/python.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/react.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/linux.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/cpp.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/github.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/xampp.png",
    "https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/express.png",

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
                                <img src="https://raw.githubusercontent.com/adityakumar48/portfolio-v4/master/client/public/images/casual-life-3d-boy-working.png" className={`${styles.whatIDoIMG} rounded mx-auto d-block`} alt="" />
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
