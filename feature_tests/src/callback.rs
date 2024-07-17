#[no_mangle]
pub extern "C" fn OpaqueFunctionPointer_test_call(sig: i32, func: DiplomatCallbackI32ToI32) -> i32 {
    unsafe { func.unwrap()(sig) }
}

pub type DiplomatCallbackI32ToI32 = Option<unsafe extern "C" fn(i32) -> i32>;

pub const SIGUSR1: i32 = 30;

#[diplomat::bridge]
mod ffi {

    #[diplomat::opaque]
    struct OpaqueFunctionPointer(u64);
}
