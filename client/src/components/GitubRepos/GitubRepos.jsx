import React, { useState, useEffect } from "react";
import styles from "./GitubRepos.module.css";
require('dotenv').config()

const BlogScreen = () => {
    const [repoName, setRepoName] = useState([]);

    async function getData() {
        const username = process.env.USERNAME;
        const password = process.env.PASSWORD;

        const headers = {
            Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        };

        const response = await fetch(
            "https://api.github.com/users/adityakumar48/repos",
            {
                method: "GET",
                headers: headers,
            }
        );

        const data = await response.json();



        setRepoName([{
            id: 1,
            name: data[2].name,
            description: data[2].description,
            url: data[2].html_url,
            visibility: data[2].visibility,
        },
        {
            id: 2,
            name: data[3].name,
            description: data[3].description,
            url: data[3].html_url,
            visibility: data[3].visibility,
        }, {
            id: 3,
            name: data[5].name,
            description: data[5].description,
            url: data[5].html_url,
            visibility: data[5].visibility,
        },
        {
            id: 4,
            name: data[25].name,
            description: data[25].description,
            url: data[25].html_url,
            visibility: data[25].visibility,
        },
        {
            id: 5,
            name: data[21].name,
            description: data[21].description,
            url: data[21].html_url,
            visibility: data[21].visibility,
        },
        {
            id: 6,
            name: data[24].name,
            description: data[24].description,
            url: data[24].html_url,
            visibility: data[24].visibility,
        },




        ]);
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <section className={styles.GithubSection}>
                <div className="container ">
                    <div className="row ">
                        <div className="col-md-12 text-center">
                            <h1 className={`${styles.Github}`}>Github Repositories</h1>
                        </div>

                        {repoName.length !== 0 ? (repoName.map(name => {
                            return <div className={`${styles.card}  card`} key={name.id} style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h3 className={`${styles.title} card-title`}>{name.name}</h3>
                                    <p className={`${styles.text} card-text`}>{name.description}</p>
                                    <a href={name.url} className={`${styles.cardLink}`}><svg aria-hidden="true" height="22" viewBox="0 0 16 16" version="1.1" width="22" data-view-component="true" className="octicon octicon-repo UnderlineNav-octicon hide-sm">
                                        <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                                    </svg></a>
                                </div>
                            </div>
                        })) : (
                            <h1>Loading .....</h1>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogScreen;
