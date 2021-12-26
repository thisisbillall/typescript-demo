type StatusProp = {
    status?:'Loading' | 'Loaded' | 'Error';
}
function Status(props:StatusProp){
    const {status = 'nothing'} = props
    return(
            <>
                <h2>Status - {props.status}</h2>
            </>
    );
}

export default Status;