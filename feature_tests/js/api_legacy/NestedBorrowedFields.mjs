// generated by diplomat-tool
import { Bar } from "./Bar.mjs"
import { BorrowedFields } from "./BorrowedFields.mjs"
import { BorrowedFieldsWithBounds } from "./BorrowedFieldsWithBounds.mjs"
import { Foo } from "./Foo.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";



export class NestedBorrowedFields {
    
    #fields;
    
    get fields()  {
        return this.#fields;
    } 
    set fields(value) {
        this.#fields = value;
    }
    
    #bounds;
    
    get bounds()  {
        return this.#bounds;
    } 
    set bounds(value) {
        this.#bounds = value;
    }
    
    #bounds2;
    
    get bounds2()  {
        return this.#bounds2;
    } 
    set bounds2(value) {
        this.#bounds2 = value;
    }
    
    /** Create `NestedBorrowedFields` from an object that contains all of `NestedBorrowedFields`s fields.
    * Optional fields do not need to be included in the provided object.
    */
    static fromFields(structObj) {
        return new NestedBorrowedFields(structObj);
    }

    #internalConstructor(structObj) {
        if (typeof structObj !== "object") {
            throw new Error("NestedBorrowedFields's constructor takes an object of NestedBorrowedFields's fields.");
        }

        if ("fields" in structObj) {
            this.#fields = BorrowedFields._fromSuppliedValue(diplomatRuntime.internalConstructor, structObj.fields);
        } else {
            throw new Error("Missing required field fields.");
        }

        if ("bounds" in structObj) {
            this.#bounds = BorrowedFieldsWithBounds._fromSuppliedValue(diplomatRuntime.internalConstructor, structObj.bounds);
        } else {
            throw new Error("Missing required field bounds.");
        }

        if ("bounds2" in structObj) {
            this.#bounds2 = BorrowedFieldsWithBounds._fromSuppliedValue(diplomatRuntime.internalConstructor, structObj.bounds2);
        } else {
            throw new Error("Missing required field bounds2.");
        }

        return this;
    }

    // Return this struct in FFI function friendly format.
    // Returns an array that can be expanded with spread syntax (...)
    // If this struct contains any slices, their lifetime-edge-relevant information will be
    // set up here, and can be appended to any relevant lifetime arrays here. <lifetime>AppendArray accepts a list
    // of arrays for each lifetime to do so. It accepts multiple lists per lifetime in case the caller needs to tie a lifetime to multiple
    // output arrays. Null is equivalent to an empty list: this lifetime is not being borrowed from.
    //
    // This method does not handle lifetime relationships: if `'foo: 'bar`, make sure fooAppendArray contains everything barAppendArray does.
    _intoFFI(
        functionCleanupArena,
        appendArrayMap
    ) {
        return [...BorrowedFields._fromSuppliedValue(diplomatRuntime.internalConstructor, this.#fields)._intoFFI(functionCleanupArena, {aAppendArray: [...appendArrayMap['xAppendArray']],}), ...BorrowedFieldsWithBounds._fromSuppliedValue(diplomatRuntime.internalConstructor, this.#bounds)._intoFFI(functionCleanupArena, {aAppendArray: [...appendArrayMap['xAppendArray']],bAppendArray: [...appendArrayMap['yAppendArray']],cAppendArray: [...appendArrayMap['yAppendArray']],}), ...BorrowedFieldsWithBounds._fromSuppliedValue(diplomatRuntime.internalConstructor, this.#bounds2)._intoFFI(functionCleanupArena, {aAppendArray: [...appendArrayMap['zAppendArray']],bAppendArray: [...appendArrayMap['zAppendArray']],cAppendArray: [...appendArrayMap['zAppendArray']],})]
    }

    static _fromSuppliedValue(internalConstructor, obj) {
        if (internalConstructor !== diplomatRuntime.internalConstructor) {
            throw new Error("_fromSuppliedValue cannot be called externally.");
        }

        if (obj instanceof NestedBorrowedFields) {
            return obj;
        }

        return NestedBorrowedFields.fromFields(obj);
    }

    _writeToArrayBuffer(
        arrayBuffer,
        offset,
        functionCleanupArena,
        appendArrayMap
    ) {
        BorrowedFields._fromSuppliedValue(diplomatRuntime.internalConstructor, this.#fields)._writeToArrayBuffer(arrayBuffer, offset + 0, functionCleanupArena, {aAppendArray: [...appendArrayMap['xAppendArray']],});
        BorrowedFieldsWithBounds._fromSuppliedValue(diplomatRuntime.internalConstructor, this.#bounds)._writeToArrayBuffer(arrayBuffer, offset + 24, functionCleanupArena, {aAppendArray: [...appendArrayMap['xAppendArray']],bAppendArray: [...appendArrayMap['yAppendArray']],cAppendArray: [...appendArrayMap['yAppendArray']],});
        BorrowedFieldsWithBounds._fromSuppliedValue(diplomatRuntime.internalConstructor, this.#bounds2)._writeToArrayBuffer(arrayBuffer, offset + 48, functionCleanupArena, {aAppendArray: [...appendArrayMap['zAppendArray']],bAppendArray: [...appendArrayMap['zAppendArray']],cAppendArray: [...appendArrayMap['zAppendArray']],});
    }

    static _fromFFI(internalConstructor, ptr, xEdges, yEdges, zEdges) {
        if (internalConstructor !== diplomatRuntime.internalConstructor) {
            throw new Error("NestedBorrowedFields._fromFFI is not meant to be called externally. Please use the default constructor.");
        }
        let structObj = {};
        const fieldsDeref = ptr;
        structObj.fields = BorrowedFields._fromFFI(diplomatRuntime.internalConstructor, fieldsDeref, xEdges);
        const boundsDeref = ptr + 24;
        structObj.bounds = BorrowedFieldsWithBounds._fromFFI(diplomatRuntime.internalConstructor, boundsDeref, xEdges, yEdges, yEdges);
        const bounds2Deref = ptr + 48;
        structObj.bounds2 = BorrowedFieldsWithBounds._fromFFI(diplomatRuntime.internalConstructor, bounds2Deref, zEdges, zEdges, zEdges);

        return new NestedBorrowedFields(structObj);
    }

    // Return all fields corresponding to lifetime `'x` 
    // without handling lifetime dependencies (this is the job of the caller)
    // This is all fields that may be borrowed from if borrowing `'x`,
    // assuming that there are no `'other: x`. bounds. In case of such bounds,
    // the caller should take care to also call _fieldsForLifetimeOther
    get _fieldsForLifetimeX() { 
        return [...fields._fieldsForLifetimeA, ...bounds._fieldsForLifetimeA];
    };

    // Return all fields corresponding to lifetime `'y` 
    // without handling lifetime dependencies (this is the job of the caller)
    // This is all fields that may be borrowed from if borrowing `'y`,
    // assuming that there are no `'other: y`. bounds. In case of such bounds,
    // the caller should take care to also call _fieldsForLifetimeOther
    get _fieldsForLifetimeY() { 
        return [...bounds._fieldsForLifetimeB, ...bounds._fieldsForLifetimeC];
    };

    // Return all fields corresponding to lifetime `'z` 
    // without handling lifetime dependencies (this is the job of the caller)
    // This is all fields that may be borrowed from if borrowing `'z`,
    // assuming that there are no `'other: z`. bounds. In case of such bounds,
    // the caller should take care to also call _fieldsForLifetimeOther
    get _fieldsForLifetimeZ() { 
        return [...bounds2._fieldsForLifetimeA, ...bounds2._fieldsForLifetimeB, ...bounds2._fieldsForLifetimeC];
    };

    static fromBarAndFooAndStrings(bar, foo, dstr16X, dstr16Z, utf8StrY, utf8StrZ) {
        let functionGarbageCollectorGrip = new diplomatRuntime.GarbageCollectorGrip();
        const dstr16XSlice = diplomatRuntime.DiplomatBuf.str16(wasm, dstr16X);
        
        const dstr16ZSlice = diplomatRuntime.DiplomatBuf.str16(wasm, dstr16Z);
        
        const utf8StrYSlice = diplomatRuntime.DiplomatBuf.str8(wasm, utf8StrY);
        
        const utf8StrZSlice = diplomatRuntime.DiplomatBuf.str8(wasm, utf8StrZ);
        
        const diplomatReceive = new diplomatRuntime.DiplomatReceiveBuf(wasm, 72, 4, false);
        
        // This lifetime edge depends on lifetimes 'x, 'y
        let xEdges = [bar, dstr16XSlice, utf8StrYSlice];
        
        // This lifetime edge depends on lifetimes 'y
        let yEdges = [bar, utf8StrYSlice];
        
        // This lifetime edge depends on lifetimes 'z
        let zEdges = [foo, dstr16ZSlice, utf8StrZSlice];
        
        const result = wasm.NestedBorrowedFields_from_bar_and_foo_and_strings(diplomatReceive.buffer, bar.ffiValue, foo.ffiValue, ...dstr16XSlice.splat(), ...dstr16ZSlice.splat(), ...utf8StrYSlice.splat(), ...utf8StrZSlice.splat());
    
        try {
            return NestedBorrowedFields._fromFFI(diplomatRuntime.internalConstructor, diplomatReceive.buffer, xEdges, yEdges, zEdges);
        }
        
        finally {
            functionGarbageCollectorGrip.releaseToGarbageCollector();
        
            diplomatReceive.free();
        }
    }

    constructor(structObj) {
        return this.#internalConstructor(...arguments)
    }
}