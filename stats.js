const Calculator = require('./Calculator');
class stats extends Calculator {

    Variance(a,b) {
        return this.Difference(a,b);
    }
    Mean(values) {
        let sum = this.Add(values);
        let numValues = values.length;
        return this.Divide(sum,numValues);
    }

}
module.exports = stats;