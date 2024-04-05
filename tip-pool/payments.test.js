describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 10;
      tipAmtInput.value = 0;
    });
  
    it('should place payments into an object, reject negative values and 0 for billAmt', function() {
        
        let test1 = createCurPayment();

        expect(Number(test1.billAmt)).toEqual(10);
        expect(Number(test1.tipAmt)).toEqual(0);
        expect(test1.tipPercent).toEqual(0);

        billAmtInput.value = -10;
        tipAmtInput.value = 0;
        expect(createCurPayment()).not.toBeDefined();

        billAmtInput.value = 0;
        tipAmtInput.value = 10;
        expect(createCurPayment()).not.toBeDefined();
    
    });

    it('should append a td element from the value', function() {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(4);
        expect(curTdList[0].innerText).toEqual('$10');
        expect(curTdList[1].innerText).toEqual('$0');
        expect(curTdList[2].innerText).toEqual('0%');
        expect(curTdList[3].innerText).toEqual('X');
    });
    
  
    afterEach(function() {
        // teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};       
    });
});

