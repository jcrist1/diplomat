package dev.diplomattest.somelib

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

class MyEnumTest {
    @Test
    fun testEnum() {
        assertEquals(MyEnum.default(), MyEnum.getA())
    }
}