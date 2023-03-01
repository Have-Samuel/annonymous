describe('calculate tests', function() {
    it('Should calculate the high tax bracket', function() {
        expect(calculateTax(50000)).toEqual(12500);
        expect(calculateTax(100000)).toEqual(25000);
    })
    
    it('Should calculate the low tax bracket', function() {
        expect(calculateTaxes(10000).toEqual(1500));
        expect(calculateTaxes(100).toEqual(15));
        expect(calculateTaxes(0).toEqual(0));
    })
    
    it('Should reject invalid incomes', function() {
        expect(() => calculateTaxes('addajdjd').toThrowError());
        expect(() => calculateTaxes([]).toThrowError());
        expect(() => calculateTaxes(true).toThrowError());
    })
})

describe('removeDupes tests', function() {
    it('Should remove duplicates from an array', function() {
        expect(removeDupes([1, 1, 2, 3])).toEqual([1, 2, 3]);
        expect(removeDupes([1, 2, 3])).toBeInstanceOf(Array);
    })
    
    it('Should remove duplicates from an string', function() {
        expect(removeDupes('hello')).toEqual('helo');
        expect(removeDupes('hello')).toBeInstanceOf(String);
    })
})

describe('remove tests', function() {
    it('Should remove value from array', function() {
        expect(remove([1, 2, 3], 2)).not.toContain(2);
    })
})

describe('submitForm() tests', function() {
    it('saves input val to usernames', () => {
        input.value = 'Kabareebe';
    submitForm();
    expect(usernames.length).tobe(1);
    expect(usernames).toContain('Kabareebe');
    });
})