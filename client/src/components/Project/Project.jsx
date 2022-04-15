import React from 'react'
import styles from './Project.module.css'
const Project = () => {

    const Imagesfor1 = [
        "/images/html.png",
        "/images/css.png",
        "/images/js.png",
        "/images/bootstrap.png",
        "/images/php.png",
        "/images/mysql.png",
    ]
    const Imagesfor2 = [
        "/images/html.png",
        "/images/css.png",
        "/images/js.png",
        "/images/heroku.png",
        "/images/git.png",
        "/images/nodejs.png",
        "/images/linux.png",
        "/images/express.png",
    ]

    return (

        <section className={styles.ProjectSection}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className={`${styles.projects}`}>Projects
                        </h1>
                    </div>
                    <div className="col-md-6">
                        <img className={`${styles.work1}`} src="/images/work-1.png" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2 className={`${styles.ovs} text-white text-center`}>Online Voting System</h2>
                        <div className={`${styles.imgWrapper} text-center`}>
                            {Imagesfor1.map(image => {
                                return <img id={image} className={`${styles.icons}`} src={image} />
                            })}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h2 className={`${styles.wb} text-white text-center`}>Whatsapp Bot </h2>
                        <div className={`${styles.imgWrapper} text-center`}>
                            {Imagesfor2.map(image => {
                                return <img id={image} className={`${styles.icons}`} src={image} />
                            })}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className={`${styles.work2}`} src="/images/work-2.png" alt="" />
                    </div>
                </div>
            </div >
        </section>

    )
}

export default Project
