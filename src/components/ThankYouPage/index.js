import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styles from './index.module.css';
import Reveal from 'react-reveal/Reveal';
import 'animate.css';

const thankYouPage = () => {
    return (
        <ParallaxLayer offset={7} speed={1}>
            <Reveal effect="fadeInDown" effectOut="fadeInUp">
                <div className={styles.outtro}>
                    <h1 className={styles.thai}>
                        ขอขคุณ
                        </h1>
                    <h5 className={styles.eng}>
                        THANK YOU
                    </h5>
                </div>
            </Reveal>
        </ParallaxLayer>
    );
}

export default thankYouPage;