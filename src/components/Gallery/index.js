import { useState } from "react";
import { sketch } from "../../Sketches/sketch";
import Canvas from "../Canvas";
import "./style.css"

export default function Gallery(){
    const [current, setCurrent] = useState(0);
    return(
        <div className="gallery">
            <Canvas sketch={sketch[0]} />
        </div>
    )
}