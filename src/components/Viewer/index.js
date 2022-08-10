import Canvas from "../Canvas";
import "./style.css"

export default function Viewer({current, sketch, ...props}){
    const handleClick = (action) =>{

    }
    return(
            <div className="viewer">
                <Canvas sketch={sketch[current]} />
                <h1>{current}</h1>
                <button onClick={()=> handleClick("PREV")}>prev</button>
                <button onClick={()=> handleClick("NEXT")}>Next</button>
                <button onClick={()=> handleClick("EXIT")}>exit</button>
            </div>
    )
}