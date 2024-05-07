// <auto-generated/> by Diplomat

#pragma warning disable 0105
using System;
using System.Runtime.InteropServices;

using DiplomatFeatures.Diplomat;
#pragma warning restore 0105

namespace DiplomatFeatures;

#nullable enable

public partial class OptionString: IDisposable
{
    private unsafe Raw.OptionString* _inner;

    /// <summary>
    /// Creates a managed <c>OptionString</c> from a raw handle.
    /// </summary>
    /// <remarks>
    /// Safety: you should not build two managed objects using the same raw handle (may causes use-after-free and double-free).
    /// <br/>
    /// This constructor assumes the raw struct is allocated on Rust side.
    /// If implemented, the custom Drop implementation on Rust side WILL run on destruction.
    /// </remarks>
    public unsafe OptionString(Raw.OptionString* handle)
    {
        _inner = handle;
    }

    /// <returns>
    /// A <c>OptionString</c> allocated on Rust side.
    /// </returns>
    public static OptionString? New(string diplomatStr)
    {
        unsafe
        {
            byte[] diplomatStrBuf = DiplomatUtils.StringToUtf8(diplomatStr);
            nuint diplomatStrBufLength = (nuint)diplomatStrBuf.Length;
            fixed (byte* diplomatStrBufPtr = diplomatStrBuf)
            {
                Raw.OptionString* retVal = Raw.OptionString.New(diplomatStrBufPtr, diplomatStrBufLength);
                if (retVal == null)
                {
                    return null;
                }
                return new OptionString(retVal);
            }
        }
    }

    /// <exception cref="DiplomatOpaqueException"></exception>
    public void Write(DiplomatWriteable writeable)
    {
        unsafe
        {
            if (_inner == null)
            {
                throw new ObjectDisposedException("OptionString");
            }
            Raw.OptionFfiResultVoidVoid result = Raw.OptionString.Write(_inner, &writeable);
            if (!result.isOk)
            {
                throw new DiplomatOpaqueException();
            }
        }
    }

    /// <exception cref="DiplomatOpaqueException"></exception>
    public string Write()
    {
        unsafe
        {
            if (_inner == null)
            {
                throw new ObjectDisposedException("OptionString");
            }
            DiplomatWriteable writeable = new DiplomatWriteable();
            Raw.OptionFfiResultVoidVoid result = Raw.OptionString.Write(_inner, &writeable);
            if (!result.isOk)
            {
                throw new DiplomatOpaqueException();
            }
            string retVal = writeable.ToUnicode();
            writeable.Dispose();
            return retVal;
        }
    }

    public string? Borrow()
    {
        unsafe
        {
            if (_inner == null)
            {
                throw new ObjectDisposedException("OptionString");
            }
            Options without a pointer type are not yet supported retVal = Raw.OptionString.Borrow(_inner);
            if (retVal == null)
            {
                return null;
            }
            return expected named type name, found `&'a DiplomatStr`;
        }
    }

    /// <summary>
    /// Returns the underlying raw handle.
    /// </summary>
    public unsafe Raw.OptionString* AsFFI()
    {
        return _inner;
    }

    /// <summary>
    /// Destroys the underlying object immediately.
    /// </summary>
    public void Dispose()
    {
        unsafe
        {
            if (_inner == null)
            {
                return;
            }

            Raw.OptionString.Destroy(_inner);
            _inner = null;

            GC.SuppressFinalize(this);
        }
    }

    ~OptionString()
    {
        Dispose();
    }
}
