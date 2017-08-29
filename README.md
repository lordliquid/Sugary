# sugary

A javascript library that offers extended functionality to standard javascript object types.

Currently in production, contributors welcome.


Array Prototype Functions
---------------------------

### .cycle()

_Optionally takes a starting index._

### _.cycle(2)_

### Example
```javascript
let arrayCycle = ['John Smith', 'Chris Johnson', 'Mike Henry', 'Amy Michelle'].cycle(1);
arrayCycle.start();
arrayCycle.next();
arrayCycle.previous();
```