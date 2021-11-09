import React from 'react';
import classes from './MsButton.module.css'

const MsButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.MyBtn}>
            {children}
        </button>
    );
};

export default MsButton;