class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;

    }
    getRadius(){
        return this.radius;
    }
    getColor(){
        return this.color;
    }
    setRadius(radius){
        this.radius=radius;
    }
    setColor(color){
        this.color=color;
    }
    toString(){
        return `circle[radius=${1.0},color=${red}]`;
    }
    getArea(){
        return 3.14*this.radius**2;
    }
    getCircumference(){
        return 2*3.14*this.radius;
    }

    }
        let circle1=new Circle(1.0,'red');
        console.log(`Circle Radius:${circle1.getRadius()}`);
        console.log(`Circle Color:${circle1.getColor()}`);
        console.log(`Area of Circle:${circle1.getArea()}`);
        console.log(`Area of Circumference:${circle1.getCircumference ()}`);
        
      
