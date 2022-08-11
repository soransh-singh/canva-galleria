import Canvas from "../Canvas";
import "./style.css"

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
                <Canvas sketch={sketch[current]} />
                <h2>{current}</h2>
                <button onClick={()=> handleClick("PREV")}>prev</button>
                <button onClick={()=> handleClick("NEXT")}>Next</button>
            </div>
    )
}