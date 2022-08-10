import { useRef, useEffect } from "react";
import p5 from "p5";
import "./style.css"

export default function Canvas({sketch, ...props}){
    const myRef = useRef(0);
    
    useEffect(() => {
        new p5(sketch, myRef.current);  
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        myRef.current.removeChild(myRef.current.children[0])
        new p5(sketch, myRef.current);  
    }, [sketch]);

    return(
            <div className={`canvas__container`}>
                <div ref={myRef}></div>
            </div>
    )
}