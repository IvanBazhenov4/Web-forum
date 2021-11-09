import React from 'react';
import classes from "./MsImput.module.css";

const MsImput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myImpat} {...props}/>
    );
});

export default MsImput;