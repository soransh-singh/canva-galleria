import { useState } from "react";
import { sketch } from "../../Sketches/sketch";
import Canvas from "../Canvas";
import Viewer from "../Viewer";
import "./style.css"

export default function Gallery(){
    const [current, setCurrent] = useState(-1);

    return(
        <>
        {current === -1?   
            <div className="gallery">
                <Canvas 
                    sketch={sketch[0]} 
                    changeCurrent={setCurrent}
                    canvasId={1} 
                />
            </div>:
            <Viewer current={current} />
        }
        </>
    )
}