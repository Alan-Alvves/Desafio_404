import PropTypes from 'prop-types';
import styles from './ComponentTest.module.scss';
import Scare from './img/Scare.png';
import {MapTo} from '@adobe/aem-react-editable-components';
import React from 'react';

const ComponentTest = ({textTest,text,image = {}}) => {
    return (
        
        <div className ={styles ['container']}>

            <p className = {styles['header']}>404 not found</p>

            <div className = {styles ['CTitle']}>
            <p className = {styles ['title']}>{textTest}</p>
            </div>

            <div className = {styles ['CText']}>
            <p className = {styles ['text']}>{text}</p>
            </div>

            <button className = {styles['button']}>Back to homepage</button>
            

            <img src = {image.src}className = {styles['image']}/>


            <footer className = {styles['footer']}><p>created by username - devChallenges.io</p></footer>
        </div>
    )

}


ComponentTest.defaultProps = {

    textTest: "String",

    text: "String",

    image: {
        src: Scare
    }
}
export default MapTo('reactapp/components/componenttest')(ComponentTest);
