# Lesson 5

## Type Coercion for Primitives  

&nbsp;

## GTU-01

```javascript
Number('0x77') === 0x77  // true
Number('077') === 077  // false 
Number(' 12')  // 12  
isNaN(' ')  // false  
+''  // 0
.1 + .2 == .3  // false  
9007199254740992 + 1 == 9007199254740992  // true
9007199254740992 + 2 == 9007199254740992  // false
0 === +0  // true
+0 === -0  // true
1 / '2'  // 0.5
1 / 0  // Infinity
1 / -0  // -Infinity
Infinity / 6  // Infinity
Infinity / -256  // -Infinity
Infinity / Infinity  // NaN
0 / 0  // NaN
+true  // 1
+false  // 0
+null  // 0
+undefined  // NaN
parseInt('.2')  // NaN
parseInt('077a')  // 77
parseInt('0x77a')  // 1914
parseInt('I’m the best value - said Infinity.')  // NaN
parseFloat('I’m the best value - said Infinity.')  // NaN
parseInt('Infinity is the best value!')  // NaN
parseFloat('Infinity is the best value!')  // Infinity 
parseFloat('12.78ff')  // 12.78
```

&nbsp;

## GTU-02

```javascript
"" + 1 + 0  // "10"
"" - 1 + 0  // -1
true + false  // 1
6 / "3"  // 2
"2" * "3"  // 6
4 + 5 + "px"  // "9px"
"$" + 4 + 5  // "$45"
"4" - 2  // 2
"4px" - 2  // NaN
7 / 0  // Infinity
"-9" + 5  // "-95"
"-9" - 5  // -14
null + 1  // 1
undefined + 1  // NaN
```







