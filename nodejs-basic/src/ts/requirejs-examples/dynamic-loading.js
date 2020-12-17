"use strict";
// TODO Is this the correct way to implements this?
//
//import * as moment from 'moment';
//
// @ts-ignore
//declare function require(name: Array<string>, callback: Function);
//
// export function load(localeName: string, callback: Function) {
//     if (!localeName || localeName === "en") {
//         // Default moment is for English. Note that there is no external file for it!
//         require(['moment'], function (moment: any) {
//             moment.locale('en');
//             callback(moment);
//         });
//     } else {
//         require(['moment', 'moment/locale/' + localeName], function (moment: any) {
//             moment.locale(localeName);
//             callback(moment);
//         });
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
// But below is not the same as above code?
function load(localeName, callback) {
    if (!localeName || localeName === "en") {
        // Default moment is for English. Note that there is no external file for it!
        let moment = require('moment');
        moment.locale('en');
        callback(moment);
    }
    else {
        let moment = require('moment');
        require('moment/locale/' + localeName);
        moment.locale(localeName);
        callback(moment);
    }
}
exports.load = load;
