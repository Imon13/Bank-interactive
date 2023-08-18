document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFeild = document.getElementById('WithDraw-feild')
    const newWithdrawAmountString = withdrawFeild.value
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)
    const WithdrawTotalElement = document.getElementById('WithDraw-total')
    const priviousWithdrawTotalString = WithdrawTotalElement.innerText
    const priviousWithDrawTotal = parseFloat(priviousWithdrawTotalString)
    const cuurentWithDrawTotal = priviousWithDrawTotal+newWithdrawAmount
    WithdrawTotalElement.innerText=cuurentWithDrawTotal
    withdrawFeild.value = ''
    // if(newWithdrawAmount>priviousBalanceTotal){
    //     alert('insufficent balance')
    //     return;
    // }
    const balanceTotalElement = document.getElementById('balance-total')
    const priviousBalanceTotalString = balanceTotalElement.innerText
    const priviousBalanceTotal = parseFloat(priviousBalanceTotalString)
    cuurentBalanceTotal = priviousBalanceTotal-newWithdrawAmount
    balanceTotalElement.innerText = cuurentBalanceTotal




})