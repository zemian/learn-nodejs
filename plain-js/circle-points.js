{
    // Learn about Circle / Angle in Radian and Degrees unit
    // 360 deg = 2 * PI radian
    //
    // R = D * PI / 180
    // D = 180 * R / PI
    console.log("== Common angles with radians and degrees conversion");

    function pad(s) {
        return s.padEnd(12, ' ');
    }
    const degreeList = [30, 45, 60, 90, 180, 270, 360]
    const radList = ['PI/6', 'PI/4', 'PI/3', 'PI/2', 'PI', '3PI/2', '2PI']
    console.log(pad("deg"), pad("radian (PI)"), pad("radian (float)"));
    degreeList.forEach( (deg, index) => {
        const radPI = radList[index];
        const rad = (deg * Math.PI) / 180;
        console.log(pad("" + deg), pad(radPI), pad("" + rad));
    });
}

{
    // What is cos, sin, tan function?
    // https://www.mathsisfun.com/sine-cosine-tangent.html
    //
    // NOTE: JS Math.cos(), sin() and tan() works with RADIAN unit!
    //
    // What is a Unit Circle? Radian = 1 and used to calculating X, Y values in plot
    // https://www.mathsisfun.com/geometry/unit-circle.html

    console.log("== x, y points in radian for unit circle");
    // Add 2 extra degree to shows they loop back in to a circle
    for (let deg of Array(360 + 2).keys()) {
        const rad = (deg * Math.PI) / 180;
        const x = Math.cos(rad), y = Math.sin(rad);
        console.log("Angle, x, y", deg, x, y);
    }
}
