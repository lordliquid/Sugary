# sugary

A javascript library that offers extended functionality to standard javascript object types.

Currently in production, contributors welcome.


Array Prototype Functions
---------------------------

# .cycle()

__Optionally takes a starting index.__

# .cycle(2)

// Example
let arrayCycle = ['John Smith', 'Chris Johnson', 'Mike Henry', 'Amy Michelle'].cycle(1);
arrayCycle.start();
arrayCycle.next();
arrayCycle.previous();