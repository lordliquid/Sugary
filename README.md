#sugary

A javascript library that offers extended functionality to standard javascript object types.

Currently in production, contributors welcome.


Array Prototype Functions
---------------------------

.cycle()

Optionally takes a starting index.

.cycle(2)

// Example
let arrayCycle = ['John Smith', 'Chris Johnson', 'Mike Henry', 'Amy Michelle'].cycle(1);
arrayCycle.start();
arrayCycle.next();
arrayCycle.previous();