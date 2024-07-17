// extern "C" {
//     pub fn signal(sig: i32, func: sig_t);
// }
#[no_mangle]
pub extern "C" fn OpaqueFunctionPointer_test_call(sig: i32, func: sig_t) -> i32 {
    unsafe { func.unwrap()(sig) }
}

pub type sig_t = Option<unsafe extern "C" fn(i32) -> i32>;

pub const SIGUSR1: i32 = 30;

#[diplomat::bridge]
mod ffi {

    #[diplomat::opaque]
    struct OpaqueFunctionPointer(u64);
    type Callback = extern "C" fn(i32) -> i32;

    impl OpaqueFunctionPointer {
        pub fn call(opaque_function_pointer_ref: &OpaqueFunctionPointer, y: i32) -> i32 {
            let x: *const OpaqueFunctionPointer = opaque_function_pointer_ref;
            let x: *const Callback = x as *const Callback;
            // unsafe: hold my beer
            unsafe {
                let f: Callback = *x;
                f(y)
            }
        }
    }
}
