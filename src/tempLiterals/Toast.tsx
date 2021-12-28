
type HorizontalPos = "Left" | "Center" | "Right";
type VerticalPos = "Top" | "Center" | "Bottom";

type PosProp = {
    position: Exclude<`${HorizontalPos}-${VerticalPos}`
    ,'Center-Center'> | 'Center';
};

export default function Toast({position}:PosProp){
    return(
        <>
            {position}
        </>
    )
};