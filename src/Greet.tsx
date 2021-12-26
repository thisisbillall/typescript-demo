
type perSons={
    names:{
        name:string,
        age:string
    }[]  ,
    clas:string,

    obj:{
        city:string,
        pin:string
    }
    
}

function Greet(props:perSons){
    
    return(
        <>
            <h1>{props.names.map((e)=>{
                return(
                    <h2>
                        {e.name}
                        {e.age}
                        {props.clas}
                        {props.obj.city}
                    </h2>
                )
            })}</h1>
            
        </>
    );

};
export default Greet