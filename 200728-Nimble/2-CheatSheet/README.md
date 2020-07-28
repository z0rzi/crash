
# Cheat sheet

I'm going to read [the nim manual](https://nim-lang.org/docs/manual.html), and take note of everything important 🙌 



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

## Types

### Strings

A string can be defined as follows:

```nim
    var my_string1 = """long string without quotes"""
    var my_string2 = """"long string with quotes""""
    var my_string3 = "normal string"
```
