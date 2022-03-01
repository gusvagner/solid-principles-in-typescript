class Main {

    private Main() {
        var square = new Square();
        square.height = 10;
        square.width = 5;

        this.getRectangleArea(square); // 
    }

    private getRectangleArea(rectangle: Rectangle): number {
        return rectangle.area;
    }

}