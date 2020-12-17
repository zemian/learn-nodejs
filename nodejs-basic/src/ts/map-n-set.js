{
    console.log("Set example");
    const s = new Set([5, 3, 1, 5]);
    console.log(s.has(5));
    console.log(s.has(3));
    console.log(s.has(9));
    s.add(9);
    console.log(s.has(9));
    s.delete(9);
    console.log(s.has(9));
    // Set has no size method!
    // Convert set to array
    console.log(Array.from(s).length);
}
{
    console.log("Map example");
    const m = new Map();
    m.set('foo', 123);
    m.set('bar', 321);
    console.log("m", m);
}
