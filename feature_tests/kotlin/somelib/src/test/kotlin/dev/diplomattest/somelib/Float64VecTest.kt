package dev.diplomattest.somelib

import net.jqwik.api.ForAll
import net.jqwik.api.Property
import net.jqwik.api.constraints.NotEmpty
import net.jqwik.api.constraints.Size
import net.jqwik.api.constraints.UniqueElements
import org.junit.jupiter.api.Test
import kotlin.test.assertEquals

class Float64VecTest {
    @Test
    fun testFloat64Vec() {
        val doubleList = listOf(1.0, 2.0, 3.0, 4.0)
        val doubleArray = doubleList.toDoubleArray()
        val float64Array = Float64Vec.newFromOwned(doubleArray)
        val float64ArrayStr = float64Array.toString()
        assertEquals(float64ArrayStr, doubleList.toString())
    }
}
class Float64PropTest {
    @Property(tries = 20)
    fun `should generate Lists of Doubles`(
        @ForAll @NotEmpty @Size(value = 100000) numbers: @UniqueElements List<Double>
    ) {
        val doubleArray = numbers.toDoubleArray()
        val float64Array = Float64Vec.newFromOwned(doubleArray)
        val float64ArrayStr = float64Array.toString()
        val should = numbers.toString()
//        Float64Vec.lib.Float64Vec_destroy(float64Array.handle)
        should == float64ArrayStr
        assert(true)
    }
    @Test
    fun testWait() {
        Thread.sleep(20000)
    }
}
