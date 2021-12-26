import React from 'react';
type StyledProps={
    style:React.CSSProperties
};

export default function Style(props:StyledProps){

    return(
        <>
            <h1 style={props.style}>Hello Styling Props</h1>
        </>
    );
};