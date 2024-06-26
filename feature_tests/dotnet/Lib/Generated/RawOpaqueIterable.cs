// <auto-generated/> by Diplomat

#pragma warning disable 0105
using System;
using System.Runtime.InteropServices;

using DiplomatFeatures.Diplomat;
#pragma warning restore 0105

namespace DiplomatFeatures.Raw;

#nullable enable

[StructLayout(LayoutKind.Sequential)]
public partial struct OpaqueIterable
{
    private const string NativeLib = "diplomat_feature_tests";

    [DllImport(NativeLib, CallingConvention = CallingConvention.Cdecl, EntryPoint = "namespace_OpaqueIterable_iter", ExactSpelling = true)]
    public static unsafe extern OpaqueIterator* NamespaceIter(OpaqueIterable* self);

    [DllImport(NativeLib, CallingConvention = CallingConvention.Cdecl, EntryPoint = "namespace_OpaqueIterable_destroy", ExactSpelling = true)]
    public static unsafe extern void Destroy(OpaqueIterable* self);
}
