describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
        allPayments.payment1 = {
            tipAmt: 20,
            billAmt: 100,
            tipPercent: 20,
        }
        allPayments.payment2 = {
            tipAmt: 2,
            billAmt: 12,
            tipPercent: 16.67,
        }
    });
  
    it('should prevent negative or empty inputs, billAmt is required but tip can be 0', function() {
        
    });
  
    afterEach(function() {
        // teardown logic
        allPayments = {};
        
    });
});