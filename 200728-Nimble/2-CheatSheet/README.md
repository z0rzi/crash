
# Cheat sheet

I'm going to read [the nim manual](https://nim-lang.org/docs/manual.html), and take note of everything important 🙌 


## Syntax

This part is a list of valid examples to remind myself of the Nim syntax!

**Variable Definition**
```nim
    var age: int = 5
    var str = "foo is "

    var sentence = str & $age & "years old"
    # ⤷ '&' is for concatenation
    # ⤷ '$' is like a toString
```

**Arrays / Sequences**
```nim
    let arr: array[0..2, int] = [1, 2, 3]

    let sequence: seq[int] = @[1, 2, 3]
    # ⤷ A sequence is a dynamic-size array

    echo len(arr) # size
    echo low(seq) # lowest bound, always 0 for seq
    echo high(seq) # highest bound
```

**Functions / Procedures**
```nim
    proc add(nums: varargs[int]): int =
        var sum = 0
        for num in items(nums):
            sum += num
        sum

    proc sub(a: int, b: int): int =
        a - b
```

**Tuples**
```nim
    type Person = tuple
        name: string
        age: int

    var pete: Person = (name: "Peter", age: 30)
    var pete: Person = ("Peter", 30) # same as above
```

**Conditions**
```nim
    if var < 2 and not (cara == '.'):
        ...
    elif cara == ';':
        ...
    else:
        ...
```

**Loops**
```nim
for i in 0..10:
    echo i
```


**Ternary operator**
```nim
    var foo = if faa<0: 10 else: 20
```



## Identifiers

Identifiers are names we give to allocated memory (in other terms, to anything). This may be for example a **variable**, or a **function**.

The identifiers names **case** is special: only the case of the 1st letter matters, and underscore are discarded.

That means:
```
    Foo === FOO
    foo !== Foo
    Foo === F_o_O
        ...
```

## Operators

All the usual operators are present in Nim; `=`, `+`, `-`, `*`, `/`, `<`, `>`, `+`, `&`, `|`


You can also define your own operators:

```nim
    proc `^/`(x, y: float): float =
        # a right-associative division operator
        result = x / y
    echo 12 ^/ 4 ^/ 8 # 24.0 (4 / 8 = 0.5, then 12 / 0.5 = 24.0)
    echo 12  / 4  / 8 # 0.375 (12 / 4 = 3.0, then 3 / 8 = 0.375)
```

## Types

### String

A string can be defined as follows:

```nim
    var my_string1 = """long string without quotes"""
    var my_string2 = """"long string with quotes""""
    var my_string3 = "normal string"
```

**operations**

Concatenation:
```nim
    var s=""
    s.add("hehe")
    s.add(50)

    echo s # hehe50
```

### Character

A character is single-quoted:

```nim
    var cara = 'a'
```

### Number

A number can be defined as follows:

```nim
    var num = 864'i8  # 8 bits int
    var num = 8.64'f  # 32 bits float
```

All available suffixes:

| Type Suffix | Resulting type of literal |
| ---         | ---                       |
| 'i8         | int8                      |
| 'i16        | int16                     |
| 'i32        | int32                     |
| 'i64        | int64                     |
| 'u          | uint                      |
| 'u8         | uint8                     |
| 'u16        | uint16                    |
| 'u32        | uint32                    |
| 'u64        | uint64                    |
| 'f          | float32                   |
| 'd          | float64                   |
| 'f32        | float32                   |
| 'f64        | float64                   |

### Enumeration

```nim
    type Direction = enum
        north, south, east, west
```
the above code is the same as
```nim
    type Direction = enum
        north=0, south=1, east=2, west=3
```

### Array / Range

Definition:
```nim
    var a:array[0..10, int]
```

### Tuples

Definition:
```nim
    var t
```

## Functions

```
    proc add(a: int, b: int): int =
        result = a + b

    proc minus(a: int, b: int): int = a - b
```
