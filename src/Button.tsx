type ButtonProp={

    handleClick:(event:React.MouseEvent,id:number)=>void
};
export default function Button(props:ButtonProp){
    return(
        <>
            <button onClick={(event)=>props.handleClick(event,1)}>Click Me</button>
        </>
    );
};