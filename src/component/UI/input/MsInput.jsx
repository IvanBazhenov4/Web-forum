import React from 'react';
import classes from "./MsImput.module.css";

const MsInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myImpat} {...props}/>
    );
});

export default MsInput;