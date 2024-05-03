#ifndef Utf16Wrap_D_HPP
#define Utf16Wrap_D_HPP

#include <stdio.h>
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>
#include <memory>
#include <optional>
#include "diplomat_runtime.hpp"
#include "Utf16Wrap.d.h"


class Utf16Wrap {
public:

  inline std::u16string_view borrow_cont() const;

  inline std::u16string_view owned() const;

  inline const capi::Utf16Wrap* AsFFI() const;
  inline capi::Utf16Wrap* AsFFI();
  inline static const Utf16Wrap* FromFFI(const capi::Utf16Wrap* ptr);
  inline static Utf16Wrap* FromFFI(capi::Utf16Wrap* ptr);
  inline static void operator delete(void* ptr);
private:
  Utf16Wrap() = delete;
  Utf16Wrap(const Utf16Wrap&) = delete;
  Utf16Wrap(Utf16Wrap&&) noexcept = delete;
  Utf16Wrap operator=(const Utf16Wrap&) = delete;
  Utf16Wrap operator=(Utf16Wrap&&) noexcept = delete;
  static void operator delete[](void*, size_t) = delete;
};


#endif // Utf16Wrap_D_HPP
