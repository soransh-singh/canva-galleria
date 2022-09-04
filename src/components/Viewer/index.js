import { Suspense, lazy } from "react";
import "./style.css"
// import Canvas from "../Canvas";
const LazyCanvas = lazy((sketch)=> import("../Canvas"))

export default function Viewer({current, sketch, ...props}){
    const handleClick = (action) =>{
        switch(action) {
            case "PREV":
                props.changeCurrent(prevCurrent => prevCurrent-1)
                break;
            case "NEXT":
                props.changeCurrent(prevCurrent => prevCurrent+1)
                break;
            case "EXIT":
                props.changeCurrent(-1)
                break;
            default:
                props.changeCurrent(-1)
        }
    }
    return(
            <div className="viewer">
                <button onClick={()=> handleClick("EXIT")} className="viewer__button--close">close</button>
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyCanvas sketch={sketch}/>
                </Suspense>
                <h2>{current}</h2>
                <button onClick={()=> handleClick("PREV")}>prev</button>
                <button onClick={()=> handleClick("NEXT")}>Next</button>
            </div>
    )
}