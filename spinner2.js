'use strict'
const spinnerState = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\n']
let timer = 0
for(let spin of spinnerState) {
  timer += 200;
setTimeout(() => {
  process.stdout.write(spin)
}, timer);
}

