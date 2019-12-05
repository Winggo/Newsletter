import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styles from './header.module.css';

export default () => {
    return (
        <Navbar className={styles.nav}>
            <Navbar.Brand className={styles.brand}>
                BayThai2019
            </Navbar.Brand>
        </Navbar>
    );
}