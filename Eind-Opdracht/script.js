const canvas = document.getElementById("canvasId");
const g = canvas.getContext("2d");

g.canvas.width  = window.innerWidth;
g.canvas.height = window.innerHeight;


// kleuren
const black = "#000000";
const red = "#FF0000";
const yellow = "#FFFF00";
const orange = "#FFA500"

class House {

    run(x, y, factor, roof, lwall, rwall) {

        const gX = canvas.width / 2;
        const gY = canvas.height / 2;

        // roof
        g.beginPath();
        g.moveTo(x + 3 * factor, y +  1 * factor);
        g.lineTo(x + 7 * factor, y +  2 * factor);
        g.lineTo(x + 6 * factor, y +  4 * factor);
        g.lineTo(x + 2 * factor, y +  3 * factor);
        g.lineTo(x + 3 * factor, y +  1 * factor);

        g.fillStyle = roof;
        g.fill();
        g.closePath();

        // left wall
        g.beginPath();
        g.moveTo(x + 2 * factor, y +  3 * factor);
        g.lineTo(x + 2 * factor, y +  5 * factor);
        g.lineTo(x + 6 * factor, y +  6 * factor);
        g.lineTo(x + 6 * factor, y +  4 * factor);
        g.lineTo(x + 2 * factor, y +  3 * factor);
        
        g.fillStyle = lwall;
        g.fill();
        g.closePath();

        // right wall
        g.beginPath();
        g.fillStyle = rwall;
        g.moveTo(x + 6 * factor, y +  4 * factor);
        g.lineTo(x + 6 * factor, y +  6 * factor);
        g.lineTo(x + 8 * factor, y +  5 * factor);
        g.lineTo(x + 8 * factor, y +  3 * factor);
        g.lineTo(x + 7 * factor, y +  2 * factor);
        g.lineTo(x + 6 * factor, y +  4 * factor);

        g.closePath();
        g.stroke();
        g.fill();
    }
}

const house = new House();
house.run(100, 100, 10, red, red, red);

const house2 = new House();
house2.run(360, 20, 14, yellow, yellow, yellow);

const house3 = new House();
house3.run(260, 150, 14, orange, orange, orange);

const house4 = new House();
house4.run(890, 400, 17, red, red, red);

const house5 = new House();
house5.run(740, 320, 17, yellow, yellow, yellow);

const house6 = new House();
house6.run(240, 320, 17, yellow, yellow, yellow);


class Tree {
    triangle(x, y, factor, color) {

        g.fillStyle = color;
        g.beginPath();
        g.moveTo(
            x - 5 * factor, 
            y
        );

        g.lineTo(
            x + 5 * factor, 
            y
        );

        g.lineTo(
            x, 
            y - 7.5 * factor
        );

        g.fill();
    }

    run(x, y, factor, size) {
        const jump = 20;

        for (let i = 0; i < size; i++) {

            this.triangle(
                x, 
                y + jump + (i * 20), 
                factor + i, 
                "green"
            )
        }
    }
}

let tree = new Tree();

        tree.run(
            200, 
            300, 
            5, 
            3
        );

let tree1 = new Tree();

        tree1.run(
            400, 
            500, 
            5, 
            3
        );

let tree2 = new Tree();

        tree2.run(
            230, 
            120, 
            5, 
            3
        );

let tree3 = new Tree();

        tree3.run(
            700, 
            200, 
            5, 
            3
        );

        let tree4 = new Tree();

        tree4.run(
            920, 
            300, 
            5, 
            3
        );

class sneeuwpoppy {

    circle(x, y, factor, color) {
        g.beginPath();
        g.fillStyle = color;

        g.arc(
            x, 
            y, 
            10 * factor, 
            0, 
            2 * Math.PI
        );

        g.fill();
        g.stroke(); 
    }

    run(x, y, factor) {
        this.circle(x, y+20, factor+0, "white")
        this.circle(x, y+100, factor+0, "white")
        this.circle(x, y+150, factor+1, "white")

        this.circle(x-25, y-5, 1, "black")
        this.circle(x+25, y-5, 1, "black")
        this.circle(x, y, 1, "orange")
    }
}

let s = new sneeuwpoppy();
s.run(1200, 100, 5);

let s1 = new sneeuwpoppy();
s1.run(200, 300, 5);

g.font = "35px Sans-Serif";

g.fillText("Merry Chrissmus", 600, 100)

