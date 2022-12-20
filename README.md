# l3e7

[![NPM version](https://img.shields.io/npm/v/le37?color=a1b858&label=)](https://www.npmjs.com/package/le37)

[leetspeak](https://en.wikipedia.org/wiki/Leet) utility

## install

```bash
pnpm i l3e7
```

## Usage

```js
import le37 from 'le37'

const str = le37.conver('Hello World')
// H3110 W0r1d
console.log(str)
```

## Option

### `ratio`

What percentage of characters will be converted, default value is `1`

### `map`

Rules for character conversion, there are two Built-in presets for you, default is `simple`

- `simple`

|origin|output|
|------|------|
|`A`|`4`|
|`B`|`8`|
|`E`|`3`|
|`G`|`6`|
|`I`|`1`|
|`K`|`X`|
|`L`|`1`|
|`O`|`0`|
|`S`|`5`|
|`T`|`7`|
|`Y`|`j`|
|`Z`|`2`|

- `complex`

|origin|output|
|------|------|
| `A` | `4` |    
| `B` | `8` |    
| `C` | `[` |    
| `D` | `\|)` |  
| `E` | `3` |    
| `F` | `\|=` |  
| `G` | `6` |    
| `H` | `#` |    
| `I` | `1` |    
| `J` | `_\|` |  
| `K` | `X` |    
| `L` | `1` |    
| `M` | `\|v\|` |
| `N` | `^/` |   
| `O` | `0` |    
| `P` | `\|*` |  
| `Q` | `(_,)` | 
| `R` | ``\|` `` |
| `S` | `5` |
| `T` | `7` |
| `U` | `(_)` |
| `V` | `\/` |
| `W` | `\/\/` |
| `X` | `><` |
| `Y` | `j` |
| `Z` | `2` |

You can use it like this

```js
le37('hello', 'simple')
```

or you can past you custom map

```js
const str = le37('hello', {
  o: '0'
})

// hell0
console.log(str)
```

## License

[MIT](./LICENSE) License © 2022 [kkopite](https://github.com/action-hong)
