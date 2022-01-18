import React from 'react';
import preloader from '../../img/preloader.svg';
import classes from './Preloader.module.css';

let Preloader = (props) => {
    return (
    <div className={classes.preloader}>
        <img src={preloader} alt='Preloader'/>
    </div>
    )
}

export default Preloader;
