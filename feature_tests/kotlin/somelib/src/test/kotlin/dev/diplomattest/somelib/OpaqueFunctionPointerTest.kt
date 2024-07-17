package dev.diplomattest.somelib

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class OpaqueFunctionPointerTest {
    @Test
    fun testStuff() {
        val b = OpaqueFunctionPointer.call( 3)
        println(b)
    }
}