export default function sketch(p){
    let i;
    p.setup = () =>{
        p.colorMode(p.HSB);
        p.createCanvas(2400, 2400);
        p.background(0, 0, 100);
        p.frameRate(10)
        p.noStroke()
        i=0;
    }

    p.draw = () =>{
        p.background(p.noise(i)*360, 75, 70);
        for(let k=1; k<=5; k++){
            p.fill(0, 0, 100, 1- k/5);
            p.circle(p.width/2, p.height/2, p.noise(i*k)*700*k)
        }
        i += 0.01
    }
}
