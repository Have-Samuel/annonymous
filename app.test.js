it('Should calculate the high tax bracket', function() {
    expect(calculateTax(50000)).toEqual(12500);
    expect(calculateTax(100000)).toEqual(25000);
})

it('Should calculate the lower tax bracket', function() {

})