describe("Helpers test (with setup and tear-down)", function() {
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
  
    it('should sum totals from allPayments', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(22);
        expect(sumPaymentTotal('billAmt')).toEqual(112);
        expect(sumPaymentTotal('tipPercent')).toEqual(36.67);
        
    });

    it('should convert the bill and tip amount into a tip percent', function (){
        expect(calculateTipPercent(100,20)).toEqual(20);
        expect(calculateTipPercent(200,20)).toEqual(10);
    });

    it('should append a td element from the value', function() {
        let newTr = document.createElement('tr');
        newTr.id = 'payment' + '1';

        appendTd(newTr, '$' + allPayments.payment1.billAmt);
        expect(newTr.innerHTML).toEqual('<td>$100</td>');
    
    });
  
    afterEach(function() {
        // teardown logic
        allPayments = {};
        
    });
});
  