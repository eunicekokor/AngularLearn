function repeat(operation, num) {
	for (var i = 0; i < num; i++){
		operation();
	}     
}
    module.exports = repeat

/*******
Official Solution
    function repeat(operation, num) {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
      }
    
      module.exports = repeat
//Learning Point 1: you can return (loop) an actual function
//Learning Point 2: you can --var in the parameters!
//Learning Point 3. higher order functions return functions, and
//and that doesn't have to be complex, even when a function is an
//input.

//Looking back I realize now that the official solution is an
//example of recursion! oh, the things you learn!
