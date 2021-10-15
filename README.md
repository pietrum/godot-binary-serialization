# Godot Binary Serialization
Godot has a simple serialization API based on Variant. It’s used for converting data types to an array of bytes efficiently.

[![Travis CI](https://travis-ci.org/Pietrum/godot-binary-serialization.svg?branch=master)](https://travis-ci.org/Pietrum/godot-binary-serialization)

[![NPM](https://nodei.co/npm/godot-binary-serialization.png?downloads=true)](https://nodei.co/npm/godot-binary-serialization/)

https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html
(version 3.x)

## Quick Start

### Install
```bash
$ npm install [--save] godot-binary-serialization
```

### Requirements
Godot version 3.0

## Basic Usage

#### UDP
```javascript
const packetPeer = require('godot-binary-serialization').PacketPeer;
```

```javascript
// decode data - receive from Godot Engine
const decoded = packetPeer.get_var(msg);

// encode data - send them to Godot Engine
const encoded = packetPeer.put_var(variant);
```

#### TCP
```javascript
const streamPeer = require('godot-binary-serialization').StreamPeer;
```

```javascript
// decode data - receive from Godot Engine
const decoded = streamPeer.get_var(msg);

// encode data - send them to Godot Engine
const encoded = streamPeer.put_var(variant);
```

It is possible to send/receive single type value into the stream.

```javascript
// @example - FLOAT type
// decode data - receive from Godot Engine
const decoded = streamPeer.get_float(msg);

// encode data - send them to Godot Engine
const encoded = streamPeer.put_float(variant);
```

##### Available 
- [x] Signed Int (8-/16-/32-/64-bits)
- [x] Unsigned Int (8-/16-/32-/64-bits)
- [x] Real (float/double)
- [x] String

## Already Supported
atomic types
- [x] [BOOL](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#bool)
- [x] [INT](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#int)
- [x] [FLOAT](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#float)
- [x] [STRING](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#string)

math types
- [x] [AABB](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#aabb)
- [x] [BASIS](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#basis)
- [x] [PLANE](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#plane)
- [x] [QUAT](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#quat)
- [x] [RECT2](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#rect2)
- [x] [TRANSFORM2D](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#transform2d)
- [x] [TRANSFORM](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#transform)
- [x] [VECTOR2](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#vector2)
- [x] [VECTOR3](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#vector3)

misc types
- [x] [COLOR](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#color)
- [x] [NODE_PATH](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#nodepath)
- [ ] [RID](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#rid-unsupported) (unsupported)
- [ ] [OBJECT](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#object)
- [x] [DICTIONARY](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#dictionary)
- [x] [ARRAY](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#array)

arrays
- [ ] [POOL_BYTE_ARRAY](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#packedbytearray)
- [ ] [POOL_INT_32_ARRAY](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#packedint32array)
- [ ] [POOL_INT_64_ARRAY](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#packedint64array)
- [ ] [POOL_FLOAT_32_ARRAY](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#packedfloat32array)
- [ ] [POOL_FLOAT_64_ARRAY](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#packedfloat64array)
- [ ] [POOL_STRING_ARRAY](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#packedstringarray)
- [ ] [POOL_VECTOR2_ARRAY](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#packedvector2array)
- [ ] [POOL_VECTOR3_ARRAY](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#packedvector3array)
- [ ] [POOL_COLOR_ARRAY](https://docs.godotengine.org/en/latest/tutorials/io/binary_serialization_api.html#packedcolorarray)

## License
MIT license
