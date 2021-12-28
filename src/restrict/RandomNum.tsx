type NumProp ={
    num:number
}

type PositiveProp = NumProp & {
    isPositive:boolean
    isNegative?:never
    isZero?:never
}

type NegativeProp = NumProp & {

    isPositive?:never
    isNegative:boolean
    isZero?:never
}

type ZeroProp = NumProp & {
    isPositive?:never
    isNegative?:never
    isZero:boolean
}

type baseProp = PositiveProp | NegativeProp |ZeroProp

// = {
//     num:number,
//     isPositive?:boolean,
//     isNegative?:boolean,
//     isZero?:boolean,
// }

export default function RandomNum({num,isPositive,isNegative,isZero}:baseProp){
    return(
        <>
            <h2>
                {num} is {isPositive && 'Positive'} 
                {isNegative && 'Negative'}
                {isZero && 'Zero'}
            </h2>
        </>
    );
};