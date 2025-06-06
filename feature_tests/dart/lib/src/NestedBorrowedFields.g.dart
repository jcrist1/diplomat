// generated by diplomat-tool
// dart format off

part of 'lib.g.dart';

final class _NestedBorrowedFieldsFfi extends ffi.Struct {
  external _BorrowedFieldsFfi fields;
  external _BorrowedFieldsWithBoundsFfi bounds;
  external _BorrowedFieldsWithBoundsFfi bounds2;
}

final class NestedBorrowedFields {
  BorrowedFields fields;
  BorrowedFieldsWithBounds bounds;
  BorrowedFieldsWithBounds bounds2;

  NestedBorrowedFields({required this.fields, required this.bounds, required this.bounds2});

  // ignore: unused_element
  NestedBorrowedFields._fromFfi(_NestedBorrowedFieldsFfi ffi, core.List<Object> xEdges, core.List<Object> yEdges, core.List<Object> zEdges) :
    fields = BorrowedFields._fromFfi(ffi.fields, xEdges),
    bounds = BorrowedFieldsWithBounds._fromFfi(ffi.bounds, xEdges, yEdges, yEdges),
    bounds2 = BorrowedFieldsWithBounds._fromFfi(ffi.bounds2, zEdges, zEdges, zEdges);

  // If this struct contains any slices, their lifetime-edge-relevant objects (typically _FinalizedArenas) will only
  // be constructed here, and can be appended to any relevant lifetime arrays here. <lifetime>AppendArray accepts a list
  // of arrays for each lifetime to do so. It accepts multiple lists per lifetime in case the caller needs to tie a lifetime to multiple
  // output arrays. Null is equivalent to an empty list: this lifetime is not being borrowed from.
  //
  // This method does not handle lifetime relationships: if `'foo: 'bar`, make sure fooAppendArray contains everything barAppendArray does.
  // ignore: unused_element
  _NestedBorrowedFieldsFfi _toFfi(ffi.Allocator temp, {core.List<core.List<Object>> xAppendArray = const [], core.List<core.List<Object>> yAppendArray = const [], core.List<core.List<Object>> zAppendArray = const []}) {
    final struct = ffi.Struct.create<_NestedBorrowedFieldsFfi>();
    struct.fields = fields._toFfi(temp, aAppendArray: [...xAppendArray]);
    struct.bounds = bounds._toFfi(temp, aAppendArray: [...xAppendArray], bAppendArray: [...yAppendArray], cAppendArray: [...yAppendArray]);
    struct.bounds2 = bounds2._toFfi(temp, aAppendArray: [...zAppendArray], bAppendArray: [...zAppendArray], cAppendArray: [...zAppendArray]);
    return struct;
  }

  static NestedBorrowedFields fromBarAndFooAndStrings(Bar bar, Foo foo, String dstr16X, String dstr16Z, String utf8StrY, String utf8StrZ) {
    final dstr16XArena = _FinalizedArena();
    final dstr16ZArena = _FinalizedArena();
    final utf8StrYArena = _FinalizedArena();
    final utf8StrZArena = _FinalizedArena();
    // This lifetime edge depends on lifetimes: 'x, 'y
    core.List<Object> xEdges = [bar, dstr16XArena, utf8StrYArena];
    // This lifetime edge depends on lifetimes: 'y
    core.List<Object> yEdges = [bar, utf8StrYArena];
    // This lifetime edge depends on lifetimes: 'z
    core.List<Object> zEdges = [foo, dstr16ZArena, utf8StrZArena];
    final result = _NestedBorrowedFields_from_bar_and_foo_and_strings(bar._ffi, foo._ffi, dstr16X._utf16AllocIn(dstr16XArena.arena), dstr16Z._utf16AllocIn(dstr16ZArena.arena), utf8StrY._utf8AllocIn(utf8StrYArena.arena), utf8StrZ._utf8AllocIn(utf8StrZArena.arena));
    return NestedBorrowedFields._fromFfi(result, xEdges, yEdges, zEdges);
  }

  @override
  bool operator ==(Object other) =>
      other is NestedBorrowedFields &&
      other.fields == fields &&
      other.bounds == bounds &&
      other.bounds2 == bounds2;

  @override
  int get hashCode => Object.hashAll([
        fields,
        bounds,
        bounds2,
      ]);

  // Return all fields corresponding to lifetime `'x` 
  // without handling lifetime dependencies (this is the job of the caller)
  // This is all fields that may be borrowed from if borrowing `'x`,
  // assuming that there are no `'other: x`. bounds. In case of such bounds,
  // the caller should take care to also call _fieldsForLifetimeOther
  // ignore: unused_element
  core.List<Object> get _fieldsForLifetimeX => [...fields._fieldsForLifetimeA, ...bounds._fieldsForLifetimeA];

  // Return all fields corresponding to lifetime `'y` 
  // without handling lifetime dependencies (this is the job of the caller)
  // This is all fields that may be borrowed from if borrowing `'y`,
  // assuming that there are no `'other: y`. bounds. In case of such bounds,
  // the caller should take care to also call _fieldsForLifetimeOther
  // ignore: unused_element
  core.List<Object> get _fieldsForLifetimeY => [...bounds._fieldsForLifetimeB, ...bounds._fieldsForLifetimeC];

  // Return all fields corresponding to lifetime `'z` 
  // without handling lifetime dependencies (this is the job of the caller)
  // This is all fields that may be borrowed from if borrowing `'z`,
  // assuming that there are no `'other: z`. bounds. In case of such bounds,
  // the caller should take care to also call _fieldsForLifetimeOther
  // ignore: unused_element
  core.List<Object> get _fieldsForLifetimeZ => [...bounds2._fieldsForLifetimeA, ...bounds2._fieldsForLifetimeB, ...bounds2._fieldsForLifetimeC];
}

@_DiplomatFfiUse('NestedBorrowedFields_from_bar_and_foo_and_strings')
@ffi.Native<_NestedBorrowedFieldsFfi Function(ffi.Pointer<ffi.Opaque>, ffi.Pointer<ffi.Opaque>, _SliceUtf16, _SliceUtf16, _SliceUtf8, _SliceUtf8)>(isLeaf: true, symbol: 'NestedBorrowedFields_from_bar_and_foo_and_strings')
// ignore: non_constant_identifier_names
external _NestedBorrowedFieldsFfi _NestedBorrowedFields_from_bar_and_foo_and_strings(ffi.Pointer<ffi.Opaque> bar, ffi.Pointer<ffi.Opaque> foo, _SliceUtf16 dstr16X, _SliceUtf16 dstr16Z, _SliceUtf8 utf8StrY, _SliceUtf8 utf8StrZ);

// dart format on
