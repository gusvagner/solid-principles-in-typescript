class Rectangle {

    private _height: number;
    private _width: number;

    get area() {
        return this._height * this._width;
    }

    public get height(): number {
        return this._height;
    }

    public set height(value: number) {
        this._height = value;
    }

    public get width(): number {
        return this._width;
    }

    public set width(value: number) {
        this._width = value;
    }
}