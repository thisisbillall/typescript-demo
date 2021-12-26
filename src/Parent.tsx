import { ReactNode } from "react";

type parentProp={

    children:ReactNode
};

export default function Parent(props:parentProp){
    return(
        <>
            <h3>
                    {props.children}
            </h3>
        </>
    )
};