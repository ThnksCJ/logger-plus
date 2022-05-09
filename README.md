# Node.js log util

## Usage 

```js
const log = require('./log.js')

log.CLEAR()
log.FATAL(`uh oh`)
log.ERROR(`Something went wrong`)
log.WARN(`this could be a problem`)
log.INFO(`Server started`)
log.DEBUG(`config loaded`)
log.COLOUR(`Cool colours`, `red`)
```

## Avalible log.COLOUR values

◘ black
◘ red
◘ green
◘ yellow
◘ blue
◘ magenta
◘ cyan
◘ white
◘ gray
◘ grey
