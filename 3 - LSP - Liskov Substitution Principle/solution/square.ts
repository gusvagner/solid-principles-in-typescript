class SquareSolution extends Figure {

    constructor(height: number, width: number) {
        super(height, width);

        if (height !== width) {
            throw "The two sides of the square must be equals";
        }
    }

}