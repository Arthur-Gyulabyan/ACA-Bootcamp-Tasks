# Regular Expressions / Errors

## Regular Expressions

Regular expressions are patterns that provide a powerful way to search and replace in text.  
In JavaScript, a regular expression can be created in two ways: with `RegExp` function constructor and with literal syntax.

> `const reg = new RegExp("pattern", "flags");`

> `const reg = /pattern/flags;`

### Flags

Regular expressions may have flags that affect the search. There are 6 flags in JavaScript:

-   `i`  
    With this flag the search is case-insensitive: no difference between `A` and `a`.
-   `g`  
    With this flag the search looks for all matches, without it – only the first match is returned.
-   `m`  
    Multiline mode.
-   `s`  
    Enables "dotall" mode, that allows a dot `.` to match newline character `\n`.
-   `u`  
    Enables full Unicode support. The flag enables correct processing of surrogate pairs.
-   `y`  
    "Sticky" mode: searching at the exact position in the text.

### Methods of RegExp and String

Below there are represented methods that work with regexps.

-   **`str.match(regexp)`**  
    This method finds matches for `regexp` in `str`.

-   **`str.matchAll(regexp)`**  
    This method is the newer and improved version of the previous one. The differences from `match` are that `marchAll` returns an iterable object instead of an array, every match returned as an array with capturing group. If there are no results, it return an empty iterable object, instead of `null`.

-   **`str.split(regexp|substr, limit)`**  
    Splits a string using `regexp` or `substr` as a delimiter.

-   **`str.search(regexp)`**  
    The method `str.search(regexp)` returns the position of the first match or `-1` if no match found.

-   **`str.replace(str|regexp, str|func)`**  
    This method is used for searching and replacing. We can use it without regexps, to search and replace a substring. If the first argument is a string, `replace` replaces only the first match.

    -   **`str.replaceAll(str|regexp, str|func)`**  
        There are two major differences between `replace` and `replaceAll`:

        1. If the first argument is a string, `replaceAll` replaces all occurrences of the string.
        2. If the first argument is a regular expression without the `g` flag, there will be an error. With `g` flag, it works the same as `replace`.

-   **`regexp.exec(str)`**  
    This method returns a match for `regexp` in the `str`. Unlike previous methods, it’s called on a regexp, not on a string.

-   **`regexp.test(str)`**  
    This method looks for a match and returns `true/false` whether it exists.
