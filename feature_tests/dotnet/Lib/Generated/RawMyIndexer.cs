// <auto-generated/> by Diplomat

#pragma warning disable 0105
using System;
using System.Runtime.InteropServices;

using DiplomatFeatures.Diplomat;
#pragma warning restore 0105

namespace DiplomatFeatures.Raw;

#nullable enable

[StructLayout(LayoutKind.Sequential)]
public partial struct MyIndexer
{
    private const string NativeLib = "diplomat_feature_tests";

    [DllImport(NativeLib, CallingConvention = CallingConvention.Cdecl, EntryPoint = "namespace_MyIndexer_get", ExactSpelling = true)]
    public static unsafe extern Options without a pointer type are not yet supported NamespaceGet(MyIndexer* self, nuint i);

    [DllImport(NativeLib, CallingConvention = CallingConvention.Cdecl, EntryPoint = "namespace_MyIndexer_destroy", ExactSpelling = true)]
    public static unsafe extern void Destroy(MyIndexer* self);
}
