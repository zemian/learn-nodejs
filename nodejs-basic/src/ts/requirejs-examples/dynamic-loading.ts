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

// But below is not the same as above code?
export function load(localeName: string, callback: Function) {
    if (!localeName || localeName === "en") {
        // Default moment is for English. Note that there is no external file for it!
        let moment = require('moment');
        moment.locale('en');
        callback(moment);
    } else {
        let moment = require('moment');
        require('moment/locale/' + localeName);
        moment.locale(localeName);
        callback(moment);
    }
}
