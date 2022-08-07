import { sketch } from "../../Sketches/sketch";
import Canvas from "../Canvas";
import "./style.css"

export default function Gallery(){
    return(
        <div className="gallery">
            <Canvas sketch={sketch[0]} size="large"/>
            <Canvas sketch={sketch[1]} size="small"/>
            <Canvas sketch={sketch[1]} size="large"/>
            <Canvas sketch={sketch[1]} size="medium"/>
            <Canvas sketch={sketch[1]} size="small"/>
        </div>
    )
}