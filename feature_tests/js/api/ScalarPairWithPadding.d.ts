// generated by diplomat-tool
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/** Testing JS-specific layout/padding behavior
*/
export class ScalarPairWithPadding {

    get first() : number;
    set first(value: number); 

    get second() : number;
    set second(value: number); 
    constructor(first: number, second: number);

    assertValue(): void;
}