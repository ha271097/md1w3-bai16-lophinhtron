class Circle{
    constructor(_radius,_color) {
        this.radius=_radius;
        this.color=_color;
    }
    getArea(){
        return  Math.PI*this.radius*this.radius;
    }
    getNull(){
        return;
    }
    getRadius(){
        return this.radius;
    }
}
let tron= new Circle(2);
let Area= tron.getArea();
let Radius= tron.getRadius();
