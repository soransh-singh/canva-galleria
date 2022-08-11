import { useState } from "react";
import { sketches } from "../../Sketches/sketch";
import Viewer from "../Viewer";
import "./style.css"

export default function Gallery(){
    /* 
        to check sketch before adding  
        just set current to required sketch
        and then change it t0 -1 before commiting
    */   
    const [current, setCurrent] = useState(-1);
    const link = "https://raw.githubusercontent.com/soransh-singh/Container/main/galleria/"
    const length = sketches.length

    let galleryItem = []    
    for(let i=0; i<length; i++){
        galleryItem.push(
            <div onClick={()=> setCurrent(i)} key={i} className="gallery__item">
                <img src={`${link}sketch${i+1}.png`} alt={`sketch${i}`} />
            </div>
        )
    }

    return(
        <>
        {current === -1?
            
            <main className="gallery">
                {galleryItem.map( item => item)}
            </main>:
            <Viewer sketch={sketches} current={current} changeCurrent={setCurrent}/>
        }
        </>
    )
}