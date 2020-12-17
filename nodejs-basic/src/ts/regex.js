/*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

    match() Return value:
    An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.

    If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
    if the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below.
     */
const s = "one\ntwo\nthree";
console.log(s.search(/two/));
console.log(s.match(/two/));
// If global flag is used, it returns array
console.log(s.match(/two/g));
// Debug it
console.log("s.match(/two/)", s.match(/two/));
console.log("s.match(/two/g)", s.match(/two/g));
