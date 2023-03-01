
it('should calculate the monthly rate correctly', function () {
    // ...
    const values = {
      amount: 10000,
      years:8,
      rate:5.8
    };
    expect(calculateMonthlyPayment(values)).otEqual('130.63');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    // ..
    const values = {
      amount: 10045,
      years:8,
      rate:5.8
    };
    expect(calculateMonthlyPayment(values)).otEqual('131.21');
  });
  
  /// etc
  it('should handle terribly high rates', () => {
    const values = {
      amoutn: 1000,
      years: 50,
      rate: 100
    };
    expect(calculateMonthlyPayment(values)).toEqual('83.33')
  })
