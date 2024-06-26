#ifndef MyString_HPP
#define MyString_HPP
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>
#include <algorithm>
#include <memory>
#include <variant>
#include <optional>
#include "diplomat_runtime.hpp"

#include "MyString.h"

class MyString;

/**
 * A destruction policy for using MyString with std::unique_ptr.
 */
struct MyStringDeleter {
  void operator()(capi::MyString* l) const noexcept {
    capi::MyString_destroy(l);
  }
};
class MyString {
 public:
  static MyString new_(const std::string_view v);

  /**
   * Warning: Passing ill-formed UTF-8 is undefined behavior (and may be memory-unsafe).
   */
  static MyString new_unsafe(const std::string_view v);
  static MyString new_owned(const std::string_view v);
  void set_str(const std::string_view new_str);
  template<typename W> void get_str_to_write(W& write) const;
  std::string get_str() const;
  inline const capi::MyString* AsFFI() const { return this->inner.get(); }
  inline capi::MyString* AsFFIMut() { return this->inner.get(); }
  inline explicit MyString(capi::MyString* i) : inner(i) {}
  MyString() = default;
  MyString(MyString&&) noexcept = default;
  MyString& operator=(MyString&& other) noexcept = default;
 private:
  std::unique_ptr<capi::MyString, MyStringDeleter> inner;
};


inline MyString MyString::new_(const std::string_view v) {
  return MyString(capi::MyString_new(v.data(), v.size()));
}
inline MyString MyString::new_unsafe(const std::string_view v) {
  return MyString(capi::MyString_new_unsafe(v.data(), v.size()));
}
inline MyString MyString::new_owned(const std::string_view v) {
  return MyString(capi::MyString_new_owned(v.data(), v.size()));
}
inline void MyString::set_str(const std::string_view new_str) {
  capi::MyString_set_str(this->inner.get(), new_str.data(), new_str.size());
}
template<typename W> inline void MyString::get_str_to_write(W& write) const {
  capi::DiplomatWrite write_writer = diplomat::WriteTrait<W>::Construct(write);
  capi::MyString_get_str(this->inner.get(), &write_writer);
}
inline std::string MyString::get_str() const {
  std::string diplomat_write_string;
  capi::DiplomatWrite diplomat_write_out = diplomat::WriteFromString(diplomat_write_string);
  capi::MyString_get_str(this->inner.get(), &diplomat_write_out);
  return diplomat_write_string;
}
#endif
