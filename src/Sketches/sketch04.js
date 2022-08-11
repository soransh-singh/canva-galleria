import palettes from "nice-color-palettes"
export default function sketch(p){

    const palette = palettes[Math.floor(p.random(0,100))];
    const createGrid = ()=>{
        const points = []
        const count = 10
        for(let x=0; x<count; x++){
        for(let y=0; y<count; y++){
            const u = count<=1? 0.5 : x/(count-1)
            const v = count<=1? 0.5 : y/(count-1)
            const color = palette[Math.floor(p.random(0,5))]
            points.push({
            position: [u,v],
            color
            })
        }
        }
        return points
    }
    const points = createGrid()

    p.setup = () =>{
        p.createCanvas(2400, 2400);
        p.background(0, 0, 220, 80);
        p.strokeWeight(24);
        points.forEach((data)=>{
            const {position, color} = data;
            p.fill(color)
            const [x,y] = position    
            p.circle(100 + x*(p.width - 200) , 100 + y*(p.height - 200), 100)
        })
    }
    
    p.draw = () =>{
        // empty
    }
}
