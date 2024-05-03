// generated by diplomat-tool

part of 'lib.g.dart';

final class MyString implements ffi.Finalizable {
  final ffi.Pointer<ffi.Opaque> _ffi;

  // These are "used" in the sense that they keep dependencies alive
  // ignore: unused_field
  final core.List<Object> _selfEdge;

  // This takes in a list of lifetime edges (including for &self borrows)
  // corresponding to data this may borrow from. These should be flat arrays containing
  // references to objects, and this object will hold on to them to keep them alive and
  // maintain borrow validity.
  MyString._fromFfi(this._ffi, this._selfEdge) {
    if (_selfEdge.isEmpty) {
      _finalizer.attach(this, _ffi.cast());
    }
  }

  static final _finalizer = ffi.NativeFinalizer(ffi.Native.addressOf(_MyString_destroy));

  factory MyString(String v) {
    final temp = ffi2.Arena();
    final vView = v.utf8View;
    final result = _MyString_new(vView.allocIn(temp), vView.length);
    temp.releaseAll();
    return MyString._fromFfi(result, []);
  }

  factory MyString.unsafe(String v) {
    final temp = ffi2.Arena();
    final vView = v.utf8View;
    final result = _MyString_new_unsafe(vView.allocIn(temp), vView.length);
    temp.releaseAll();
    return MyString._fromFfi(result, []);
  }

  static MyString newOwned(String v) {
    final vView = v.utf8View;
    final result = _MyString_new_owned(vView.allocIn(_RustAlloc()), vView.length);
    return MyString._fromFfi(result, []);
  }

  static MyString newFromFirst(core.List<core.String> v) {
    final temp = ffi2.Arena();
    final vView = v.utf8View;
    final result = _MyString_new_from_first(vView.allocIn(temp), vView.length);
    temp.releaseAll();
    return MyString._fromFfi(result, []);
  }

  set str(String newStr) {
    final temp = ffi2.Arena();
    final newStrView = newStr.utf8View;
    _MyString_set_str(_ffi, newStrView.allocIn(temp), newStrView.length);
    temp.releaseAll();
  }

  String get str {
    final writeable = _Writeable();
    _MyString_get_str(_ffi, writeable._ffi);
    return writeable.finalize();
  }

  String getBoxedStr() {
    final result = _MyString_get_boxed_str(_ffi);
    return result._toDart([]);
  }
}

@meta.ResourceIdentifier('MyString_destroy')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Void>)>(isLeaf: true, symbol: 'MyString_destroy')
// ignore: non_constant_identifier_names
external void _MyString_destroy(ffi.Pointer<ffi.Void> self);

@meta.ResourceIdentifier('MyString_new')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Uint8>, ffi.Size)>(isLeaf: true, symbol: 'MyString_new')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _MyString_new(ffi.Pointer<ffi.Uint8> vData, int vLength);

@meta.ResourceIdentifier('MyString_new_unsafe')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Uint8>, ffi.Size)>(isLeaf: true, symbol: 'MyString_new_unsafe')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _MyString_new_unsafe(ffi.Pointer<ffi.Uint8> vData, int vLength);

@meta.ResourceIdentifier('MyString_new_owned')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<ffi.Uint8>, ffi.Size)>(isLeaf: true, symbol: 'MyString_new_owned')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _MyString_new_owned(ffi.Pointer<ffi.Uint8> vData, int vLength);

@meta.ResourceIdentifier('MyString_new_from_first')
@ffi.Native<ffi.Pointer<ffi.Opaque> Function(ffi.Pointer<_SliceUtf8>, ffi.Size)>(isLeaf: true, symbol: 'MyString_new_from_first')
// ignore: non_constant_identifier_names
external ffi.Pointer<ffi.Opaque> _MyString_new_from_first(ffi.Pointer<_SliceUtf8> vData, int vLength);

@meta.ResourceIdentifier('MyString_set_str')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Uint8>, ffi.Size)>(isLeaf: true, symbol: 'MyString_set_str')
// ignore: non_constant_identifier_names
external void _MyString_set_str(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Uint8> newStrData, int newStrLength);

@meta.ResourceIdentifier('MyString_get_str')
@ffi.Native<ffi.Void Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'MyString_get_str')
// ignore: non_constant_identifier_names
external void _MyString_get_str(ffi.Pointer<ffi.Opaque> self, ffi.Pointer<ffi.Opaque> writeable);

@meta.ResourceIdentifier('MyString_get_boxed_str')
@ffi.Native<_SliceUtf8 Function(ffi.Pointer<ffi.Opaque>)>(isLeaf: true, symbol: 'MyString_get_boxed_str')
// ignore: non_constant_identifier_names
external _SliceUtf8 _MyString_get_boxed_str(ffi.Pointer<ffi.Opaque> self);
