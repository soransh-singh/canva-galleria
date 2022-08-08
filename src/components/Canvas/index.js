import { useRef, useEffect } from "react";
import p5 from "p5";
import "./style.css"



export default function Canvas({sketch, ...props}){
    const myRef = useRef(0);

    
    useEffect(() => {
        new p5(sketch, myRef.current);  
    // eslint-disable-next-line
    }, []);

    return(
            <div className={`canvas__container`}>
                <div ref={myRef}></div>
            </div>
    )
}