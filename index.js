function produceDrivingRange(range) {
    return function (begin, end) {
      let distance = Math.abs(parseInt(begin) - parseInt(end));

      if (distance > range) {
        return `${distance - range} blocks out of range`;
      } else {
        return `within range by ${range - distance}`;
      }
      
    }
  }
  
  function produceTipCalculator(tip) {
    return function (payment) {
      return payment * tip;
    }
  }
  
  function createDriver() {
    let i = 0;
    // return the class
    return class {
  
      constructor(name) {
        this.name = name;
        this.id = ++i;
      }
    };
  }