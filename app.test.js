it('Should calculate the high tax bracket', function() {
    expect(calculateTax(50000)).toEqual(12500);
    expect(calculateTax(100000)).toEqual(25000);
})

it('Should calculate the low tax bracket', function() {
    expect(calculateTaxes(10000).toEqual(1500));
    expect(calculateTaxes(100).toEqual(15));
    expect(calculateTaxes(0).toEqual(0));
})

it('Should remove duplicates from an array', function() {
    expect(removeDupes([1, 1, 2, 3])).tobe([1, 2, 3]);
    expect(removeDupes([1, 2, 3])).tobe([1, 2, 3]);
})