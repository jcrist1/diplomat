// generated by diplomat-tool
import { ImportedStruct } from "./ImportedStruct.mjs"
import { MyStruct } from "./MyStruct.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";


const Opaque_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.Opaque_destroy(ptr);
});
export class Opaque {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        Opaque_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }


    static new_() {
        const result = wasm.Opaque_new();
    
        try {
    
            return new Opaque(result, []);
        } finally {
        
        }
    }

    static tryFromUtf8(input) {
        
        const inputSlice = diplomatRuntime.DiplomatBuf.str8(wasm, input);
        const result = wasm.Opaque_try_from_utf8(inputSlice.ptr, inputSlice.size);
    
        try {
    
            return ((result == 0) ? undefined : new Opaque(result, []));
        } finally {
        
            inputSlice.free();
        
        }
    }

    static fromStr(input) {
        
        const inputSlice = diplomatRuntime.DiplomatBuf.str8(wasm, input);
        const result = wasm.Opaque_from_str(inputSlice.ptr, inputSlice.size);
    
        try {
    
            return new Opaque(result, []);
        } finally {
        
            inputSlice.free();
        
        }
    }

    getDebugStr() {
        
        const write = wasm.diplomat_buffer_write_create(0);
        wasm.Opaque_get_debug_str(this.ffiValue, write);
    
        try {
    
            return diplomatRuntime.readString8(wasm, wasm.diplomat_buffer_write_get_bytes(write), wasm.diplomat_buffer_write_len(write));
        } finally {
        
            wasm.diplomat_buffer_write_destroy(write);
        
        }
    }

    assertStruct(s) {
        
        let slice_cleanup_callbacks = [];
        wasm.Opaque_assert_struct(this.ffiValue, ...s._intoFFI(slice_cleanup_callbacks, {}));
    
        try {
    
        } finally {
        
            for (let cleanup of slice_cleanup_callbacks) {
                cleanup();
            }
        
        }
    }

    static returnsUsize() {
        const result = wasm.Opaque_returns_usize();
    
        try {
    
            return result;
        } finally {
        
        }
    }

    static returnsImported() {
        
        const diplomat_receive_buffer = wasm.diplomat_alloc(5, 4);
        const result = wasm.Opaque_returns_imported(diplomat_receive_buffer);
    
        try {
    
            return new ImportedStruct()._fromFFI(diplomat_receive_buffer);
        } finally {
        
            wasm.diplomat_free(diplomat_receive_buffer, 5, 4);
        
        }
    }

    static cmp() {
        const result = wasm.Opaque_cmp();
    
        try {
    
            return result;
        } finally {
        
        }
    }

    

}