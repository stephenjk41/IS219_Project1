const CSVRead = require('../csv/read');
const City = require('../models/city')
const expect = require('expect');
test('Can Read CSV File', () => {
    let filename  = 'data/data.csv';
    let records = CSVRead.getRecords(filename, City);
    expect(records.length).toBe(6);
});