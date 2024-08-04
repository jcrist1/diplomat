#[diplomat::bridge]
pub mod ffi {

    #[diplomat::attr(java, disable)]
    #[diplomat::opaque]
    pub struct ResultOpaque(i32);

    #[derive(PartialEq, Eq, Debug)]
    pub enum ErrorEnum {
        Foo,
        Bar,
    }

    #[derive(Debug)]
    pub struct ErrorStruct {
        i: i32,
        j: i32,
    }
    impl ResultOpaque {
        #[diplomat::attr(all(*, supports = fallible_constructors), constructor)]
        pub fn new(i: i32) -> Result<Box<ResultOpaque>, ErrorEnum> {
            Ok(Box::new(ResultOpaque(i)))
        }

        #[diplomat::attr(all(*, supports = fallible_constructors), named_constructor = "failing_foo")]
        pub fn new_failing_foo() -> Result<Box<ResultOpaque>, ErrorEnum> {
            Err(ErrorEnum::Foo)
        }

        #[diplomat::attr(all(*, supports = fallible_constructors), named_constructor = "failing_bar")]
        pub fn new_failing_bar() -> Result<Box<ResultOpaque>, ErrorEnum> {
            Err(ErrorEnum::Bar)
        }

        // TODO constructors: this should ideally be a constructor too
        #[diplomat::attr(dart, rename = "failing_unit")]
        pub fn new_failing_unit() -> Result<Box<ResultOpaque>, ()> {
            Err(())
        }

        #[diplomat::attr(all(*, supports = fallible_constructors), named_constructor = "failing_struct")]
        pub fn new_failing_struct(i: i32) -> Result<Box<ResultOpaque>, ErrorStruct> {
            Err(ErrorStruct { i, j: 12 })
        }

        pub fn new_in_err(i: i32) -> Result<(), Box<ResultOpaque>> {
            Err(Box::new(ResultOpaque(i)))
        }

        pub fn new_int(i: i32) -> Result<i32, ()> {
            Ok(i)
        }

        pub fn new_in_enum_err(i: i32) -> Result<ErrorEnum, Box<ResultOpaque>> {
            Err(Box::new(ResultOpaque(i)))
        }

        pub fn assert_integer(&self, i: i32) {
            assert_eq!(i, self.0);
        }
    }
}
