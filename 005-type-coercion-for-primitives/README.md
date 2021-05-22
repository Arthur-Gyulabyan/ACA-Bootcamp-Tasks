# Type Coercion for Primitives

## GTU-01

1. `Number('0x77') === 0x77` => `true`
1. `Number('077') === 077` => `false`
1. `Number(' 12')` => `12`
1. `isNaN(' ')` => `false`
1. `+''` => `0`
1. `0.1 + 0.2 == 0.3` => `false`
1. `9007199254740992 + 1 == 9007199254740992` => `true`
1. `9007199254740992 + 2 == 9007199254740992` => `false`
1. `0 === +0` => `true`
1. `+0 === -0` => `true`
1. `1 / '2'` => `0.5`
1. `1 / 0` => `Infinity`
1. `1 / -0` => `-Infinity`
1. `Infinity / 6` => `Infinity`
1. `Infinity / -256` => `-Infinity`
1. `Infinity / Infinity` => `NaN`
1. `0 / 0` => `NaN`
1. `+true` => `1`
1. `+false` => `0`
1. `+null` => `0`
1. `+undefined` => `NaN`
1. `parseInt('.2')` => `NaN`
1. `parseInt('077a')` => `77`
1. `parseInt('0x77a')` => `1914`
1. `parseInt('I’m the best value - said Infinity.')` => `NaN`
1. `parseFloat('I’m the best value - said Infinity.')` => `NaN`
1. `parseInt('Infinity is the best value!')` => `NaN`
1. `parseFloat('Infinity is the best value!')` => `Infinity`
1. `parseFloat('12.78ff')` => `12.78`

<br>

1. `'' + 1 + 0` => `"10"`
1. `'' - 1 + 0` => `-1`
1. `true + false` => `1`
1. `6 / '3'` => `2`
1. `'2' * '3'` => `6`
1. `4 + 5 + 'px'` => `"9px"`
1. `'$' + 4 + 5` => `"$45"`
1. `'4' - 2` => `2`
1. `'4px' - 2` => `NaN`
1. `7 / 0` => `Infinity`
1. `'-9' + 5` => `"-95"`
1. `'-9' - 5` => `-14`
1. `null + 1` => `1`
1. `undefined + 1` => `NaN`
