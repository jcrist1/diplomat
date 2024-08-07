// generated by diplomat-tool
import type { OptionStruct } from "./OptionStruct"
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";

export class OptionOpaque {
    

    get ffiValue(): pointer;

    static new_(i: number): OptionOpaque | null;

    static newNone(): OptionOpaque | null;

    static returns(): OptionStruct | null;

    optionIsize(): number | null;

    optionUsize(): number | null;

    optionI32(): number | null;

    optionU32(): number | null;

    static newStruct(): OptionStruct;

    static newStructNones(): OptionStruct;

    assertInteger(i: number): void;

    static optionOpaqueArgument(arg: OptionOpaque | null): boolean;
}