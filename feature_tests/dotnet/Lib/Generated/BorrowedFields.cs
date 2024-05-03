// <auto-generated/> by Diplomat

#pragma warning disable 0105
using System;
using System.Runtime.InteropServices;

using DiplomatFeatures.Diplomat;
#pragma warning restore 0105

namespace DiplomatFeatures;

#nullable enable

public partial class BorrowedFields
{
    private Raw.BorrowedFields _inner;

    /// <summary>
    /// Creates a managed <c>BorrowedFields</c> from the raw representation.
    /// </summary>
    public unsafe BorrowedFields(Raw.BorrowedFields data)
    {
        _inner = data;
    }

    /// <returns>
    /// A <c>BorrowedFields</c> allocated on C# side.
    /// </returns>
    public static BorrowedFields FromBarAndStrings(Bar bar, ushort[] dstr16, string utf8Str)
    {
        unsafe
        {
            byte[] dstr16Buf = DiplomatUtils.StringToUtf8(dstr16);
            byte[] utf8StrBuf = DiplomatUtils.StringToUtf8(utf8Str);
            nuint dstr16BufLength = (nuint)dstr16Buf.Length;
            nuint utf8StrBufLength = (nuint)utf8StrBuf.Length;
            Raw.Bar* barRaw;
            barRaw = bar.AsFFI();
            if (barRaw == null)
            {
                throw new ObjectDisposedException("Bar");
            }
            fixed (byte* dstr16BufPtr = dstr16Buf)
            {
                fixed (byte* utf8StrBufPtr = utf8StrBuf)
                {
                    Raw.BorrowedFields retVal = Raw.BorrowedFields.FromBarAndStrings(barRaw, dstr16BufPtr, dstr16BufLength, utf8StrBufPtr, utf8StrBufLength);
                    return new BorrowedFields(retVal);
                }
            }
        }
    }

    /// <summary>
    /// Returns a copy of the underlying raw representation.
    /// </summary>
    public Raw.BorrowedFields AsFFI()
    {
        return _inner;
    }
}
