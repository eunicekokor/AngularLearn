function doubleAll(numbers) {
      var map = Array.prototype.map;
      var result = map.call(numbers, function (x) {return 2*x; })
      return result;
}
    
    module.exports = doubleAll

/**********
Lessons Learned:
1) map = Array.prototype.map is just a formality. you just need
array.map(function) to utilize the map() method. DUHHHHHHHHH.
***********/