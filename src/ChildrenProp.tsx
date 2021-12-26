type chilProp={
    children:string
}

export default function ChildrenProp(props:chilProp){
    return(
        <>
            <h3>{props.children}</h3>
        </>
    );
};