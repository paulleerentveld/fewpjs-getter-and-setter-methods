class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    set diameter(value) {
        this.radius = value / 2;
    }
    set circumference(value) {
       this.radius = (value / Math.PI) / 2 
    }
    set area(value) {
        this.radius = Math.sqrt((value / Math.PI));
        
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return this.diameter * Math.PI;
    }
    get area() {
        return Math.PI * (this.radius**2);
    }
    
}

