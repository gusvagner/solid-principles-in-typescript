class Square extends Rectangle {

    public override set height(value: number) {
        this.height = this.width = value;
    }

    public override set width(value: number) {
        this.height = this.width = value;
    }

}