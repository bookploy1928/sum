const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3',function () {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21', function() {
  expect(sum(20,1)).toBe(21);
});

// 2 + 5 เท่ากับ 7
test('2 + 5 เท่ากับ 7', function() {
  expect(sum(2,5)).toBe(7);
});

// 108 + 12 เท่ากับ 120
test('108 + 12 เท่ากับ 120',function(){
  expect(sum(108,12)).toBe(120);
});

// 1 + 0 เท่ากับ 1
test('1 + 0 เท่ากับ 1',function(){
  expect(sum(1,0)).toBe(1);
});

// 1000+55 เท่ากับ 1055
test('1000+55 เท่ากับ 1055',function(){
  expect(sum(1000,55)).toBe(1055);
});



