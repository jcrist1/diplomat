// generated by diplomat-tool
import { CyclicStructA } from "./CyclicStructA.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";



export class CyclicStructB {
    
    #field;
    
    get field()  {
        return this.#field;
    } 
    set field(value) {
        this.#field = value;
    }
    
    /** Create `CyclicStructB` from an object that contains all of `CyclicStructB`s fields.
    * Optional fields do not need to be included in the provided object.
    */
    static fromFields(structObj) {
        return new CyclicStructB(structObj);
    }

    #internalConstructor(structObj) {
        if (typeof structObj !== "object") {
            throw new Error("CyclicStructB's constructor takes an object of CyclicStructB's fields.");
        }

        if ("field" in structObj) {
            this.#field = structObj.field;
        } else {
            throw new Error("Missing required field field.");
        }

        return this;
    }

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    
    _intoFFI(
        functionCleanupArena,
        appendArrayMap
    ) {
        return this.#field;
    }

    static _fromSuppliedValue(internalConstructor, obj) {
        if (internalConstructor !== diplomatRuntime.internalConstructor) {
            throw new Error("_fromSuppliedValue cannot be called externally.");
        }

        if (obj instanceof CyclicStructB) {
            return obj;
        }

        return CyclicStructB.fromFields(obj);
    }

    _writeToArrayBuffer(
        arrayBuffer,
        offset,
        functionCleanupArena,
        appendArrayMap
    ) {
        diplomatRuntime.writeToArrayBuffer(arrayBuffer, offset + 0, this.#field, Uint8Array);
    }

    // This struct contains borrowed fields, so this takes in a list of
    // "edges" corresponding to where each lifetime's data may have been borrowed from
    // and passes it down to individual fields containing the borrow.
    // This method does not attempt to handle any dependencies between lifetimes, the caller
    // should handle this when constructing edge arrays.
    static _fromFFI(internalConstructor, primitiveValue) {
        if (internalConstructor !== diplomatRuntime.internalConstructor) {
            throw new Error("CyclicStructB._fromFFI is not meant to be called externally. Please use the default constructor.");
        }
        let structObj = {};
        structObj.field = primitiveValue;
        

        return new CyclicStructB(structObj);
    }

    static getA() {
        const result = wasm.CyclicStructB_get_a();
    
        try {
            return CyclicStructA._fromFFI(diplomatRuntime.internalConstructor, result);
        }
        
        finally {}
    }

    static getAOption() {
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 2, 1, true);
        
        const result = wasm.CyclicStructB_get_a_option(diplomatReceive.buffer);
    
        try {
            if (!diplomatReceive.resultFlag) {
                return null;
            }
            return CyclicStructA._fromFFI(diplomatRuntime.internalConstructor, (new Uint8Array(wasm.memory.buffer, diplomatReceive.buffer, 1))[0]);
        }
        
        finally {
            diplomatReceive.free();
        }
    }

    constructor(structObj) {
        return this.#internalConstructor(...arguments)
    }
}