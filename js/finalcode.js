var t = 0;
var angle = 0;
var NUM_LINES = 380;
var v1;
var v2;

var increment = false;
var fator = 0.00001;

var circle;
var col;
var r;
var a = 5;
var b = 5;
var c = 5;
var d = 5;
var locked = false;
var question = 1;

function setup() {
    v1 = random(0.4) + 0.2;
    v2 = random(0.4) + 0.2;
    createCanvas(windowWidth, windowHeight);
    smooth(8);
}

function draw() {

    background(0);
    angle += 0.01;
    stroke(255);


    translate(width / 2, height / 2);
    rotate(sin(angle));

    if (mouseIsPressed) {
        locked = true;
    }
    if (locked) {
        for (var i = 1; i < NUM_LINES; i++) {
            strokeWeight(5);

            point(x(t + i), y(t + i));

            point(x2(t + i), y2(t + i));
            strokeWeight(1.5);

            line(x(t + i), y(t + i), x2(t + i), y2(t + i));
        }

        t += 0.005;
        if (increment) {
            v1 += fator;
            v2 += fator;
        }

    }

}


function keyReleased() {

    increment = false;
}


function keyPressed() {

    //reset
    if (key == ' ') {
        v1 = random(0.4) + 0.2;
        v2 = random(0.4) + 0.3;
        a = 5;
        b = 5;
        c = 5;
        d = 5;

    }
    if (keyCode == LEFT_ARROW) {
        increment = true;
        fator = -0.00001;

    } else if (keyCode == RIGHT_ARROW) {
        increment = true;
        fator = 0.00001;

    }
    if (keyCode == UP_ARROW) {
        NUM_LINES += 50;

    } else if (keyCode == DOWN_ARROW) {

        NUM_LINES -= 50;
    }

    //外环外边增大
    if (key == 'Q') {
        a += 10;

    }

    if (key == 'A') {
        a -= 10;
        if (a < 0) {
            a = 5;
        }

    }

    //外圈差距
    if (key == 'W') {
        b += 10;

    }
    if (key == 'S') {
        b -= 10;
        if (b < 0) {
            b = 5;
        }

    }
    //内环外边增大
    if (key == 'E') {
        c += 10;

    }
    if (key == 'D') {
        c -= 10;
        if (c < 0) {
            c = 5;
        }

    }
    //内环差距
    if (key == 'R') {
        d += 10;
        prvarln(d);
    }
    if (key == 'F') {
        d -= 10;
        if (d < 0) {
            d = 5;
        }

    }
}

function x(z) {

    return (sin(z / v2) * a + cos(z / v1) * b);
}

function y(z) {
    return cos(z / v2 * a) + sin(z / v1) * b;
}

function x2(z) {
    return sin(z / v2) * c + cos(z / v1) * d;
}

function y2(z) {
    return cos(z / v2) * c + sin(z / v1) * d;
}