import { useState } from "react";
type AuthUser={
    name:string,
    email:string
}

export default function UseStateFuture(){

    const [user,setUser] = useState<null | AuthUser >(null);

    return(
        <>
            <button onClick={()=>{setUser({name:"bilal",email:"abc@gmail.com"})}}>Login</button>
            <button onClick={()=>{setUser(null)}}>Logout</button>
            <h3>{user?.name}</h3>
            <h3>{user?.email}</h3>
        </>
    );
};