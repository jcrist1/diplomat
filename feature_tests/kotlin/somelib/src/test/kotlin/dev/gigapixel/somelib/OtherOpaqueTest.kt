package dev.gigapixel.somelib

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

class OtherOpaqueTest {
   @Test
   fun testLoad() {
       val otherOpaque = OtherOpaque.fromUsize(356)
       assertEquals(otherOpaque.getLenAndAdd(4), 7)
       val borrowed = otherOpaque.borrow()
       borrowed.change(1234)
       assertEquals(otherOpaque.getLenAndAdd(4), 8)
       Result
   }

    @Test
    fun testMultiBorrow() {
        val otherOpaqueOddLen = OtherOpaque.fromUsize(356)
        val otherOpaqueEvenLen = OtherOpaque.fromUsize(1111)
        val borrowed = otherOpaqueEvenLen.borrowSelfOrOther(otherOpaqueOddLen)
        assertEquals(borrowed.getLenAndAdd(0), 4)

        otherOpaqueEvenLen.change(33333)
        val borrowed2 = otherOpaqueEvenLen.borrowSelfOrOther(otherOpaqueOddLen)
        assertEquals(borrowed2.getLenAndAdd(0), 3)
    }
}