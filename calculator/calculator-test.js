
it('should calculate the monthly rate correctly', function () {
  // ...
  const loanValues = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(loanValues)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const loanValues = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(loanValues)).toEqual('131.00');
});

it("should handle terribly high interest rates", function() {
  const loanValues = {
    amount: 1000,
    years: 40,
    rate: 99
  };
  expect(calculateMonthlyPayment(loanValues)).toEqual('82.50');
});

/// etc
