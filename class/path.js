class Marker {
    constructor(x, y, r = 50) {
        this.position = createVector(x, y);
        this.radius = r;
    }

    show() {
        push();
        {
            fill(145, 145, 145);
            stroke(201);
            ellipse(this.position.x, this.position.y, 5);
            fill(145, 145, 145, 145);
            ellipse(this.position.x, this.position.y, this.radius);
        }
        pop();
    }
}

class Path {
    //path is just an array of marker objects
    constructor(points) {
        this.markers = [];

        for (let point of points) {
            let marker = new Marker(point.x, point.y);

            this.markers.push(marker);
        }
    }

    //show function
    show() {
        for (let i = 0; i < this.markers.length; i++) {
            //console.log(this.markers[i]);
            this.markers[i].show();
        }
        push();
        {
            noFill();
            stroke(241);
            strokeWeight(3);
            beginShape();
            curveVertex(this.markers[0].position.x, this.markers[0].position.y);
            for (let i = 0; i < this.markers.length; i++) {
                let vertex = this.markers[i];
                curveVertex(vertex.position.x, vertex.position.y);
            }
            curveVertex(this.markers[0].position.x, this.markers[0].position.y);
            curveVertex(this.markers[0].position.x, this.markers[0].position.y);
            endShape();
        }
        pop();
    }
}