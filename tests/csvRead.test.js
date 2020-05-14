const CSVRead = require('../csv/Read.js');
const City = require('../models/City.js')
const expect = require('expect');
test('Can Read CSV File', () => {
    let filename  = 'data/data.csv';
    let records = CSVRead.getRecords(filename, City);
    expect(records.length).toBe(6);
});