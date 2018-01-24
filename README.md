# Godot Binary Serialization
Godot has a simple serialization API based on Variant. It’s used for converting data types to an array of bytes efficiently.

[![Travis CI](https://travis-ci.org/Pietrum/GodotBS.svg?branch=master)](https://travis-ci.org/Pietrum/GodotBS)
[![Dependency Status](https://david-dm.org/Pietrum/godotbs.svg)](https://david-dm.org/Pietrum/godotbs)
[![devDependency Status](https://david-dm.org/Pietrum/godotbs/dev-status.svg)](https://david-dm.org/Pietrum/godotbs#info=devDependencies)

[![NPM](https://nodei.co/npm/godotbs.png?downloads=true)](https://nodei.co/npm/godotbs/)

## Quick Start

### Install

```bash
$ npm install [--save] godotbs
```

## Basic Usage

#### UDP

```javascript
const packetPeer = require('godotbs').PacketPeer;
```

```javascript
// decode data - receive from Godot Engine
const decoded = packetPeer.get_var(msg);

// encode data - send them to Godot Engine
const encoded = packetPeer.put_var(variant);
```

#### TCP

```javascript
const streamPeer = require('godotbs').StreamPeer;
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
- [x] BOOL
- [x] INT
- [x] REAL
- [x] STRING

math types
- [x] AABB
- [x] BASIS
- [x] PLANE
- [x] QUAT
- [x] RECT2
- [x] TRANSFORM2D
- [x] TRANSFORM
- [x] VECTOR2
- [x] VECTOR3

misc types
- [ ] COLOR
- [ ] NODE_PATH
- [ ] _RID
- [ ] OBJECT
- [x] DICTIONARY
- [ ] ARRAY

arrays
- [ ] POOL_BYTE_ARRAY
- [ ] POOL_INT_ARRAY
- [ ] POOL_REAL_ARRAY
- [ ] POOL_STRING_ARRAY
- [ ] POOL_VECTOR2_ARRAY
- [ ] POOL_VECTOR3_ARRAY
- [ ] POOL_COLOR_ARRAY

## License
MIT license
