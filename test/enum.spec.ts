import { assert } from "chai";

it('enum', () => {
    enum Direction {
        Up,
        Down,
        Left,
        Right,
    }
    console.log('Internal enum structure:', Direction);

    assert.equal(Direction.Up, 0);
    assert.equal(Direction.Down, 1);
    assert.equal(Direction.Right, Direction.Right);
    assert.equal(Direction[Direction.Left], "Left");
    assert.equal(Direction["Right"], Direction.Right);
    assert.notEqual(Direction["Left"], Direction.Right);
});
