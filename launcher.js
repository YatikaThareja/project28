class Launcher{
    constructor(bodyA, anchor){
        var options = {
            bodyA: bodyA,
            pointB: anchor,
            stiffness: 0.4,
            length: 1
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
        this.pointB=anchor;
       this.bodyA= bodyA;
    }

    display(){
        if(this.launcher.bodyA!==null){
            var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    fly(){
        this.launcher.bodyA=null
    }
    
}