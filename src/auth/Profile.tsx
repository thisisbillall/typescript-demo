
export type ProfileProps={
    name:string
}

export default function Profile ({name}:ProfileProps)
{
    return(
        <>
            <b>Your name is {name}</b>
        </>
    )
}