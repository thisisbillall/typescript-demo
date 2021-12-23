import { userInfo } from "os";

type userDetails={
    fname:String
    lname:String
    gender?:String
};

function Greet(prop:userDetails){
    
    return(
        <>
            <h1>Hello {prop.fname} {prop.lname}</h1>
            <h3>{prop.gender}</h3>
        </>
    );

};
export default Greet