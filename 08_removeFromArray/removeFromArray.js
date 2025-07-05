const removeFromArray = function(arr) {
    const args = Array.prototype.slice.call(arguments, 1);
    return arr.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
