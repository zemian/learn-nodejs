var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log('Internal enum structure:', Direction);
console.log(Direction.Up, 0);
console.log(Direction.Down, 1);
console.log(Direction.Right, Direction.Right);
console.log(Direction[Direction.Left], "Left");
console.log(Direction["Right"], Direction.Right);
console.log(Direction["Left"], Direction.Right);
