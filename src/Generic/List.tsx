type ListProps={

    list:string[] | number[],
    onClick:(value:string | number)=>void

};

export default function List(props:ListProps){

    return(
        <>
        {props.list.map((e,ind)=>{
            return(
                <div key={ind} onClick={()=>props.onClick(e)}>
                    <h2>{ind} - {e}</h2>
                </div>
            )
        })}
        </>
    );
};