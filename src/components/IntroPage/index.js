import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styles from './index.module.css';
import Reveal from 'react-reveal/Reveal';
import 'animate.css';

const introPage = () => {
    return (
        <ParallaxLayer offset={0} speed={1}>
            <Reveal effect="fadeInUp" effectOut="fadeOutUp">
                <div className={styles.intro}>
                    <p className={styles.smallPrint}>
                        #BAYTHAI2019
                    </p>
                    <h1 className={styles.title}>
                        SUMMER MISSIONS | THAILAND
                    </h1>
                </div>
            </Reveal>
        </ParallaxLayer>
    );
}

export default introPage;