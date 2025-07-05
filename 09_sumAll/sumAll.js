const sumAll = function(low, hi) {
    if (typeof(low) != 'number' || typeof(hi) != 'number' || !Number.isInteger(low) || !Number.isInteger(hi) || low < 0 || hi < 0) {
        return 'ERROR';
    }
    if (low > hi) {
        let temp = hi;
        hi = low;
        low = temp;
    }
    let sum = 0;
    for (let i = low; i <= hi; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
