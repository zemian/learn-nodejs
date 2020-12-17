
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
console.log('Internal enum structure:', Direction);

console.log(Direction.Up, 0);
console.log(Direction.Down, 1);
console.log(Direction.Right, Direction.Right);
console.log(Direction[Direction.Left], "Left");
console.log(Direction["Right"], Direction.Right);
console.log(Direction["Left"], Direction.Right);
