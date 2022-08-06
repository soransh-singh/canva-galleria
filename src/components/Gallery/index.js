import sketch01 from "../../Sketches/sketch01.js";
import Canvas from "../Canvas";
import "./style.css"

export default function Gallery(){
    return(
        <div className="gallery">
            <Canvas sketch={sketch01}/>
        </div>
    )
}