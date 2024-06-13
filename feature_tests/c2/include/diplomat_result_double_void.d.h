#ifndef diplomat_result_double_void_D_H
#define diplomat_result_double_void_D_H

#include <stdio.h>
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>
#include "diplomat_runtime.h"





typedef struct diplomat_result_double_void {
  union {
    double ok;
  };
  bool is_ok;
} diplomat_result_double_void;




#endif // diplomat_result_double_void_D_H