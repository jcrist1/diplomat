// Generated by jextract

package dev.diplomattest.somelib.ntv;

import java.lang.invoke.*;
import java.lang.foreign.*;
import java.nio.ByteOrder;
import java.util.*;
import java.util.function.*;
import java.util.stream.*;

import static java.lang.foreign.ValueLayout.*;
import static java.lang.foreign.MemoryLayout.PathElement.*;

/**
 * {@snippet lang=c :
 * struct OptionStruct {
 *     OptionOpaque *a;
 *     OptionOpaqueChar *b;
 *     uint32_t c;
 *     OptionOpaque *d;
 * }
 * }
 */
public class OptionStruct {

    OptionStruct() {
        // Should not be called directly
    }

    private static final GroupLayout $LAYOUT = MemoryLayout.structLayout(
        somelib_h.C_POINTER.withName("a"),
        somelib_h.C_POINTER.withName("b"),
        somelib_h.C_INT.withName("c"),
        MemoryLayout.paddingLayout(4),
        somelib_h.C_POINTER.withName("d")
    ).withName("OptionStruct");

    /**
     * The layout of this struct
     */
    public static final GroupLayout layout() {
        return $LAYOUT;
    }

    private static final AddressLayout a$LAYOUT = (AddressLayout)$LAYOUT.select(groupElement("a"));

    /**
     * Layout for field:
     * {@snippet lang=c :
     * OptionOpaque *a
     * }
     */
    public static final AddressLayout a$layout() {
        return a$LAYOUT;
    }

    private static final long a$OFFSET = 0;

    /**
     * Offset for field:
     * {@snippet lang=c :
     * OptionOpaque *a
     * }
     */
    public static final long a$offset() {
        return a$OFFSET;
    }

    /**
     * Getter for field:
     * {@snippet lang=c :
     * OptionOpaque *a
     * }
     */
    public static MemorySegment a(MemorySegment struct) {
        return struct.get(a$LAYOUT, a$OFFSET);
    }

    /**
     * Setter for field:
     * {@snippet lang=c :
     * OptionOpaque *a
     * }
     */
    public static void a(MemorySegment struct, MemorySegment fieldValue) {
        struct.set(a$LAYOUT, a$OFFSET, fieldValue);
    }

    private static final AddressLayout b$LAYOUT = (AddressLayout)$LAYOUT.select(groupElement("b"));

    /**
     * Layout for field:
     * {@snippet lang=c :
     * OptionOpaqueChar *b
     * }
     */
    public static final AddressLayout b$layout() {
        return b$LAYOUT;
    }

    private static final long b$OFFSET = 8;

    /**
     * Offset for field:
     * {@snippet lang=c :
     * OptionOpaqueChar *b
     * }
     */
    public static final long b$offset() {
        return b$OFFSET;
    }

    /**
     * Getter for field:
     * {@snippet lang=c :
     * OptionOpaqueChar *b
     * }
     */
    public static MemorySegment b(MemorySegment struct) {
        return struct.get(b$LAYOUT, b$OFFSET);
    }

    /**
     * Setter for field:
     * {@snippet lang=c :
     * OptionOpaqueChar *b
     * }
     */
    public static void b(MemorySegment struct, MemorySegment fieldValue) {
        struct.set(b$LAYOUT, b$OFFSET, fieldValue);
    }

    private static final OfInt c$LAYOUT = (OfInt)$LAYOUT.select(groupElement("c"));

    /**
     * Layout for field:
     * {@snippet lang=c :
     * uint32_t c
     * }
     */
    public static final OfInt c$layout() {
        return c$LAYOUT;
    }

    private static final long c$OFFSET = 16;

    /**
     * Offset for field:
     * {@snippet lang=c :
     * uint32_t c
     * }
     */
    public static final long c$offset() {
        return c$OFFSET;
    }

    /**
     * Getter for field:
     * {@snippet lang=c :
     * uint32_t c
     * }
     */
    public static int c(MemorySegment struct) {
        return struct.get(c$LAYOUT, c$OFFSET);
    }

    /**
     * Setter for field:
     * {@snippet lang=c :
     * uint32_t c
     * }
     */
    public static void c(MemorySegment struct, int fieldValue) {
        struct.set(c$LAYOUT, c$OFFSET, fieldValue);
    }

    private static final AddressLayout d$LAYOUT = (AddressLayout)$LAYOUT.select(groupElement("d"));

    /**
     * Layout for field:
     * {@snippet lang=c :
     * OptionOpaque *d
     * }
     */
    public static final AddressLayout d$layout() {
        return d$LAYOUT;
    }

    private static final long d$OFFSET = 24;

    /**
     * Offset for field:
     * {@snippet lang=c :
     * OptionOpaque *d
     * }
     */
    public static final long d$offset() {
        return d$OFFSET;
    }

    /**
     * Getter for field:
     * {@snippet lang=c :
     * OptionOpaque *d
     * }
     */
    public static MemorySegment d(MemorySegment struct) {
        return struct.get(d$LAYOUT, d$OFFSET);
    }

    /**
     * Setter for field:
     * {@snippet lang=c :
     * OptionOpaque *d
     * }
     */
    public static void d(MemorySegment struct, MemorySegment fieldValue) {
        struct.set(d$LAYOUT, d$OFFSET, fieldValue);
    }

    /**
     * Obtains a slice of {@code arrayParam} which selects the array element at {@code index}.
     * The returned segment has address {@code arrayParam.address() + index * layout().byteSize()}
     */
    public static MemorySegment asSlice(MemorySegment array, long index) {
        return array.asSlice(layout().byteSize() * index);
    }

    /**
     * The size (in bytes) of this struct
     */
    public static long sizeof() { return layout().byteSize(); }

    /**
     * Allocate a segment of size {@code layout().byteSize()} using {@code allocator}
     */
    public static MemorySegment allocate(SegmentAllocator allocator) {
        return allocator.allocate(layout());
    }

    /**
     * Allocate an array of size {@code elementCount} using {@code allocator}.
     * The returned segment has size {@code elementCount * layout().byteSize()}.
     */
    public static MemorySegment allocateArray(long elementCount, SegmentAllocator allocator) {
        return allocator.allocate(MemoryLayout.sequenceLayout(elementCount, layout()));
    }

    /**
     * Reinterprets {@code addr} using target {@code arena} and {@code cleanupAction} (if any).
     * The returned segment has size {@code layout().byteSize()}
     */
    public static MemorySegment reinterpret(MemorySegment addr, Arena arena, Consumer<MemorySegment> cleanup) {
        return reinterpret(addr, 1, arena, cleanup);
    }

    /**
     * Reinterprets {@code addr} using target {@code arena} and {@code cleanupAction} (if any).
     * The returned segment has size {@code elementCount * layout().byteSize()}
     */
    public static MemorySegment reinterpret(MemorySegment addr, long elementCount, Arena arena, Consumer<MemorySegment> cleanup) {
        return addr.reinterpret(layout().byteSize() * elementCount, arena, cleanup);
    }
}
