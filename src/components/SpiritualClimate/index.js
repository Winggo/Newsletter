import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styles from './index.module.css';
import Fade from 'react-reveal/Fade';
import pic7 from '../../images/P1220848.jpg';

const spiritalClimate = () => {
    return (
        <ParallaxLayer offset={3} speed={1}>
            <Fade right>
                <div className={styles.secondPage}>
                    <img src={pic7} className={styles.pic7} alt='Worship in the morning.' />
                </div>
            </Fade>
        </ParallaxLayer>
    );
}

export default spiritalClimate;