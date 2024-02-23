'use client';

import classes from './verticalResizeHandle.module.css';

export function VerticalResizeHandle(props:any) {
    return <div ref={props.innerRef} className={classes.verticalResizeHandle} />;
}
