const CSVRead = require('../csv/Read');
const City = require('../models/City')
const expect = require('expect');
test('Can Read CSV File', () => {
    let filename  = 'data/data.csv';
    let records = CSVRead.getRecords(filename, City);
    expect(records.length).toBe(6);
});