// generated by diplomat-tool
import { RenamedAttrEnum } from "./RenamedAttrEnum.mjs"
import { Unnamespaced } from "./Unnamespaced.mjs"
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

const AttrOpaque1Renamed_box_destroy_registry = new FinalizationRegistry((ptr) => {
    wasm.namespace_AttrOpaque1_destroy(ptr);
});

export class AttrOpaque1Renamed {
    // Internal ptr reference:
    #ptr = null;

    // Lifetimes are only to keep dependencies alive.
    // Since JS won't garbage collect until there are no incoming edges.
    #selfEdge = [];
    
    constructor(ptr, selfEdge) {
        
        this.#ptr = ptr;
        this.#selfEdge = selfEdge;
        // Unconditionally register to destroy when this object is ready to garbage collect.
        AttrOpaque1Renamed_box_destroy_registry.register(this, this.#ptr);
    }

    get ffiValue() {
        return this.#ptr;
    }

    static totallyNotNew() {
        const result = wasm.namespace_AttrOpaque1_new();
    
        try {
            return new AttrOpaque1Renamed(result, []);
        }
        
        finally {}
    }

    get methodRenamed() {
        const result = wasm.namespace_AttrOpaque1_method(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    get abirenamed() {
        const result = wasm.renamed_on_abi_only(this.ffiValue);
    
        try {
            return result;
        }
        
        finally {}
    }

    useUnnamespaced(un) {
        wasm.namespace_AttrOpaque1_use_unnamespaced(this.ffiValue, un.ffiValue);
    
        try {}
        
        finally {}
    }

    useNamespaced(n) {
        wasm.namespace_AttrOpaque1_use_namespaced(this.ffiValue, n.ffiValue);
    
        try {}
        
        finally {}
    }
}