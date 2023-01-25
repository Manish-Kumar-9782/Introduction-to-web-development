class AnimeElement {

    #width = null;
    #x = null;
    #y = null;
    constructor(element) {

        if (element instanceof Element) {
            this.element = element;
            this.AnimeFrom = null;
            this.AnimeTo = null;
            this.refreshStyles(this.element);
        }
    }

    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }

    setX(x) {
        // first we need to set the the style 
        this.element.style.left = x + 'px';
        this.#x = x;
    }

    setY(y) {
        this.element.style.top = y + 'px';
        this.#y = y;
    }

    refreshStyles(element) {
        this.styles = getComputedStyle(element);
        this.#refreshX();
        this.#refreshY();
        this.#updateWidth();
    }

    #updateWidth() {
        let width = this.styles.width
        if (width.endsWith("px")) {
            width = Number(width.replace("px", ""));
        }
        this.#width = width;
    }

    getWidth() {
        return this.#width;
    }

    moveLeft(n, intervalTime = 1, step = 1) {
        /** Move left by  n number of pixels*/
        let moveCount = 0;
        let id = setInterval(() => {
            if (moveCount == n) {
                clearInterval(id);
            }
            // console.log("moves count: ", moveCount);
            this.setX(this.#x - step);
            moveCount++;
        }, intervalTime);
    }

    moveRight(n, intervalTime = 1, step = 1) {
        /** move right by n number of pixels*/
        let moveCount = 0;
        let id = setInterval(() => {
            if (moveCount >= n) {
                clearInterval(id);
            }
            // console.log("moves count: ", moveCount);
            this.setX(this.#x + step);
            moveCount += step;
        }, intervalTime);
    }

    moveUp(n, intervalTime = 1, step = 1) {
        let moveCount = 0;
        let id = setInterval(() => {
            if (moveCount >= n) {
                clearInterval(id);
            }
            // console.log("moves count: ", moveCount);
            this.setY(this.#y - step);
            moveCount += step;
        }, intervalTime);
    }

    moveDown(n, intervalTime = 1, step = 1) {
        let moveCount = 0;
        let id = setInterval(() => {
            if (moveCount >= n) {
                clearInterval(id);
            }
            // console.log("moves count: ", moveCount);
            this.setY(this.#y + step);
            moveCount += step;
        }, intervalTime);
    }

    moveTo(x, y, steps = 20) {

        let initX = this.#x;
        let initY = this.#y;

        let finalX = x
        let finalY = y

        let movex = finalX - initX; // distance in x direction
        let movey = finalY - initY; // distance in y direction


        // console.log(`thisX: ${this.#x} \t thisY: ${this.#y} \t initX: ${initX} \t initY: ${initY}`);

        let slope = movey / movex
        let stepsOffset = movex / steps;

        let i = 1;

        /**
         *  y = mx +b;
         * m = (x2 - x1) /  (y2 - y1)
         */
        // console.log(this)
        let id = setInterval(() => {

            let X = (stepsOffset * i); // offset in x direction per point
            let Y = slope * X; // offset in y direction per point

            // console.log(`(${X}, ${Y}) : initX:${initX}, initY:${initY}`)
            // console.log(`this.#x: ${this.#x} ,\t x2: ${x}`);

            if (i <= steps) {
                this.setX(Math.floor(X) + initX);
                this.setY(Math.floor(Y) + initY);
                i++;
            }
            else {
                clearInterval(id);
            }
        }, 20)

    }
    /*===============================================================*/
    // private methods.
    #refreshX() {
        let left = this.styles.left;

        if (left.endsWith("px")) {
            left = Number(left.replace("px", ""));
            this.#x = left;
        }
    }

    #refreshY() {
        let top = this.styles.top;

        if (top.endsWith("px")) {
            top = Number(top.replace("px", ""));
            this.#y = top;
        }
    }



    updateGeometry() {
        this.#refreshX();
        this.#refreshY();
    }

}



