# sugary

A javascript library that offers extended functionality to standard javascript object types.

Currently in production, contributors welcome.


Array Prototype Functions
---

### .cycle()
  Returns an object with useful helper methods for stepping through the array with .next() and .previous()..

### Usage
  ### Step 1: 
  #### Assign an array
  ```javascript
  let array = [1, 2, 3, 4];
  ```
  ### Step 2: 
  #### Assign a new variable to store the cycle object.
  ```javascript
  let arrayCycle = array.cycle();
  ```
  ### Step 3: 
  #### Start the cycle
  NOTE: Without providing arguments the cycle starts at the first index of the array. You can optionally pass in a starting index.
 
  ```javascript
  arrayCycle.start(); 
  ```
  _Optionally takes a starting index._
  ### _.start(1)_

    Step 4: Cycle by calling either next() or previous() methods.
  ```javascript
  arrayCycle.next();
  ```

### Example
```javascript
let arrayCycle = ['John Smith', 'Chris Johnson', 'Mike Henry', 'Amy Michelle'].cycle();
arrayCycle.start(1);
arrayCycle.next();
arrayCycle.previous();
```