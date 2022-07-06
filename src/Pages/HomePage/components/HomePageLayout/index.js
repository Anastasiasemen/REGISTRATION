import React from 'react';
import {Link} from "react-router-dom";
import styles from "../HomePageView/styles.module.scss"




const HomePageLayout = () => {
    return (

        <div>
            <Link className={styles.links} to="/Registration">
                <button className={styles.butPages}>Registration</button>
            </Link>
        </div>
    );
};

export default HomePageLayout;