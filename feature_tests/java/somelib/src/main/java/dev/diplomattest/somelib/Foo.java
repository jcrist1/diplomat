package dev.diplomattest.somelib;

import dev.diplomattest.somelib.ntv.*;


import java.lang.foreign.Arena;
import java.lang.foreign.MemorySegment;
import java.lang.foreign.SegmentAllocator;
import java.lang.ref.Cleaner;
import java.util.List;
import static java.lang.foreign.ValueLayout.*;
import java.nio.charset.StandardCharsets;
import java.util.stream.Stream;

public class Foo {

    MemorySegment internal;
    Cleaner.Cleanable cleanable;

    List<Object> selfEdges = List.of();
    List<Object> aEdges = List.of();
    

    static class FooCleaner implements Runnable {

        MemorySegment segment;
        FooCleaner(MemorySegment segment) {
            this.segment = segment;
        }

        public void run() {
            somelib_h.Foo_destroy(this.segment);
        }
    }

    Foo() {}
    Foo(MemorySegment handle, List<Object> selfEdges, List<Object> aEdges) {
        this.internal = handle;
        this.selfEdges = selfEdges;
        this.aEdges = aEdges;
        

    }
    
    public static Foo new_(String x) {
        
        try (var arena = Arena.ofConfined()) {
            var xMemSeg = arena.allocateFrom(x, StandardCharsets.UTF_8);
            var xLen = xMemSeg.byteSize();
            var nativeVal = somelib_h.Foo_new(xMemSeg, xLen - 1);
            List<Object> selfEdges = List.of();
            
            
            
            List<Object> aEdges = List.of(x);
            var returnVal = new Foo(nativeVal, selfEdges, aEdges);
            var cleaner = new Foo.FooCleaner(nativeVal);
            returnVal.cleanable = Lib.cleaner.register(returnVal, cleaner);
            return returnVal;
        }
    }
    
    public static Foo newStatic(String x) {
        
        try (var arena = Arena.ofConfined()) {
            var xMemSeg = arena.allocateFrom(x, StandardCharsets.UTF_8);
            var xLen = xMemSeg.byteSize();
            var nativeVal = somelib_h.Foo_new_static(xMemSeg, xLen - 1);
            List<Object> selfEdges = List.of();
            
            
            
            List<Object> aEdges = List.of();
            var returnVal = new Foo(nativeVal, selfEdges, aEdges);
            var cleaner = new Foo.FooCleaner(nativeVal);
            returnVal.cleanable = Lib.cleaner.register(returnVal, cleaner);
            return returnVal;
        }
    }
    
    public static Foo extractFromFields(BorrowedFields fields) {
        
        var fieldsNative = fields.internal;
        var nativeVal = somelib_h.Foo_extract_from_fields(fieldsNative);
        List<Object> selfEdges = List.of();
        
        
        
        List<Object> aEdges = List.of(fields);
        var returnVal = new Foo(nativeVal, selfEdges, aEdges);
        var cleaner = new Foo.FooCleaner(nativeVal);
        returnVal.cleanable = Lib.cleaner.register(returnVal, cleaner);
        return returnVal;
    }
    
    public static Foo extractFromBounds(BorrowedFieldsWithBounds bounds,String anotherString) {
        
        try (var arena = Arena.ofConfined()) {
            var boundsNative = bounds.internal;
            var anotherStringMemSeg = arena.allocateFrom(anotherString, StandardCharsets.UTF_8);
            var anotherStringLen = anotherStringMemSeg.byteSize();
            var nativeVal = somelib_h.Foo_extract_from_bounds(boundsNative, anotherStringMemSeg, anotherStringLen - 1);
            List<Object> selfEdges = List.of();
            
            
            
            List<Object> aEdges = List.of(bounds, bounds, anotherString);
            var returnVal = new Foo(nativeVal, selfEdges, aEdges);
            var cleaner = new Foo.FooCleaner(nativeVal);
            returnVal.cleanable = Lib.cleaner.register(returnVal, cleaner);
            return returnVal;
        }
    }
    
    
    public Bar getBar() {
        
        
        var nativeVal = somelib_h.Foo_get_bar(internal);
        List<Object> selfEdges = List.of();
        
        
        
        List<Object> bEdges = List.of(this);
        List<Object> aEdges = List.of(this);
        var returnVal = new Bar(nativeVal, selfEdges, bEdges, aEdges);
        var cleaner = new Bar.BarCleaner(nativeVal);
        returnVal.cleanable = Lib.cleaner.register(returnVal, cleaner);
        return returnVal;
    }
    
    public BorrowedFieldsReturning asReturning() {
        
        var returnArena = (SegmentAllocator) Arena.ofAuto();
        
        var nativeVal = somelib_h.Foo_as_returning(returnArena, internal);
        
        List<Object> aEdges = List.of(this);
        
        var returnVal = new BorrowedFieldsReturning(returnArena, nativeVal, aEdges);
        return returnVal;
    }
    
}