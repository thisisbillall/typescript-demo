type inputProp={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
};

export default function Input(props:inputProp){
    return(
        <>
            <input type="text" value={props.value} onChange={props.handleChange}/>
        </>
    )
};