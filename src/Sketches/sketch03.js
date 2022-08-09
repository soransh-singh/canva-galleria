import palettes from "nice-color-palettes"
export default function sketch(p){
    const palette = palettes[Math.floor(p.random(0,100))];
    p.setup = () =>{
        p.createCanvas(2400, 2400);
        p.background(palette[1]);
        p.stroke(palette[0]); 
        p.strokeWeight(60)   
        p.push()
        p.translate(p.width/2, p.height/2);
        p.angleMode(p.DEGREES);
        for(let i=0; i<=90; i+=10){
            p.line(0, 0, 1000*p.cos(i), 1000*p.sin(i) )
            p.line(0, 0, -1*1000*p.cos(i), 1000*p.sin(i) )
            p.line(0, 0, 1000*p.cos(i), -1*1000*p.sin(i) )
            p.line(0, 0, -1*1000*p.cos(i), -1*1000*p.sin(i) )
        }
        p.pop()
        p.push()
            p.noStroke()
            p.fill(palette[2])
            p.circle(p.width/2, p.height/2, 800);
        p.pop()
        p.noFill()
        p.stroke(palette[2]);
        for(let i=0; i<3; i++){
            p.circle(p.width/2, p.height/2, 1200+ i*400);
        }
    }

    p.draw = () =>{
        

    }
}