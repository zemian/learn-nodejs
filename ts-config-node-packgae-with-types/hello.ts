import * as _ from "lodash";

export function hello() {
	// we can use lodash in happy case here.
	console.log(_.join(_.split("Test", ""), "-"));

	// TS should catch this as failure if enabled.
	// 
	// This demonstrate the TS can and will automatically loads 
	// "@types/lodash" package even if you do not specify any tsconfig.json for it.
	// 
	// IMPORTANT: TS will only catch this as compile error if you add '@types/lodash'.
	// If you don't, this actually compiles without error!
	//
	// NOTE also that if you forgot to add '@types/lodash' into this project package.json
	// file, the default node module resolution will search parent directoy automatically!
	// In this particular project, our parent project might contains '@types/lodash' that
	// might make this works. But it's always better to explicitly add the TS type definition
	// files into your project.
	_.map([1, 2, 3], 123);
}
hello();