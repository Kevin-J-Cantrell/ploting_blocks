import React,{Component} from 'react';
import styles from "./Component.module.css"
const Navigation = (props) => {
    return (
        <div className={styles.nav}>{props.children}</div>
    );
}

export default Navigation;




