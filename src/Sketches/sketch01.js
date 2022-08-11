export default function sketch(p){
    p.setup = () =>{
        p.createCanvas(2400, 2400);
        p.background(0, 0, 220, 80);
        p.noStroke();
    }

    p.draw = () =>{
        for(let i=0; i<255; i++){
            p.fill(i, 255-i, 175-i/2);
            p.circle(p.width/2, p.height/2, (255-i)*6)
        }
    }
}
