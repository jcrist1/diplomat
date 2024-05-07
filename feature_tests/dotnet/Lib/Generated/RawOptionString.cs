// <auto-generated/> by Diplomat

#pragma warning disable 0105
using System;
using System.Runtime.InteropServices;

using DiplomatFeatures.Diplomat;
#pragma warning restore 0105

namespace DiplomatFeatures.Raw;

#nullable enable

[StructLayout(LayoutKind.Sequential)]
public partial struct OptionString
{
    private const string NativeLib = "diplomat_feature_tests";

    [DllImport(NativeLib, CallingConvention = CallingConvention.Cdecl, EntryPoint = "OptionString_new", ExactSpelling = true)]
    public static unsafe extern OptionString* New(byte* diplomatStr, nuint diplomatStrSz);

    [DllImport(NativeLib, CallingConvention = CallingConvention.Cdecl, EntryPoint = "OptionString_write", ExactSpelling = true)]
    public static unsafe extern OptionFfiResultVoidVoid Write(OptionString* self, DiplomatWriteable* writeable);

    [DllImport(NativeLib, CallingConvention = CallingConvention.Cdecl, EntryPoint = "OptionString_borrow", ExactSpelling = true)]
    public static unsafe extern Options without a pointer type are not yet supported Borrow(OptionString* self);

    [DllImport(NativeLib, CallingConvention = CallingConvention.Cdecl, EntryPoint = "OptionString_destroy", ExactSpelling = true)]
    public static unsafe extern void Destroy(OptionString* self);
}
