package dev.diplomattest.somelib;
import com.sun.jna.Callback
import com.sun.jna.Library
import com.sun.jna.Native
import com.sun.jna.Pointer


internal interface OpaqueFunctionPointerLib: Library {
    fun OpaqueFunctionPointer_destroy(handle: Pointer)
    fun OpaqueFunctionPointer_test_call(value: Int, functionPointer: Callback): Int
    interface DiplomatCallbackI32ToI32: Callback {
        fun invoke(signal: Int): Int
    }
}

class OpaqueFunctionPointer internal constructor (
    internal val handle: Pointer,
    // These ensure that anything that is borrowed is kept alive and not cleaned
    // up by the garbage collector.
    internal val selfEdges: List<Any>
)  {

    internal class OpaqueFunctionPointerCleaner(val handle: Pointer, val lib: OpaqueFunctionPointerLib) : Runnable {
        override fun run() {
            lib.OpaqueFunctionPointer_destroy(handle)
        }
    }


    companion object {
        internal val libClass: Class<OpaqueFunctionPointerLib> = OpaqueFunctionPointerLib::class.java
        internal val lib: OpaqueFunctionPointerLib = Native.load("somelib", libClass)

        internal val callback: OpaqueFunctionPointerLib.DiplomatCallbackI32ToI32 = object : OpaqueFunctionPointerLib.DiplomatCallbackI32ToI32{
            override fun invoke(input: Int): Int {
                if (input % 2 == 0) {
                    return input /2
                } else {
                    return 3 * input + 1
                }
            }
        }

        fun call(y: Int): Int {
            println("Not calling back yet")
            return lib.OpaqueFunctionPointer_test_call(y, callback);
        }
    }

}
