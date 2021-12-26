type ButtonProp={

    handleClick:()=>void
};
export default function Button(props:ButtonProp){
    return(
        <>
            <button onClick={props.handleClick}>Click Me</button>
        </>
    );
};