document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('deposit')
    //get the amount from deposit input feild
    const depositFeild = document.getElementById('deposit-feild')
    const newDepositAmountString = depositFeild.value
    const newDepositAmount = parseFloat(newDepositAmountString)
    //  get the cuurent deposit
    const depositTotalElement = document.getElementById('deposit-total')
    const priviousDepositTotalString = depositTotalElement.innerText
    const priviousDepositTotal = parseFloat(priviousDepositTotalString)
    const cuurentDepositTotal = priviousDepositTotal+ newDepositAmount
    depositTotalElement.innerText = cuurentDepositTotal

    
   
    // clear the deposit feild
    depositFeild.value=''
    const balanceTotalElement = document.getElementById('balance-total')
    const priviousBalanceTotalString = balanceTotalElement.innerText
    const priviousBalanceTotal = parseFloat(priviousBalanceTotalString)
    const cuurentBalanceTotal = priviousBalanceTotal+newDepositAmount
    balanceTotalElement.innerText=cuurentBalanceTotal
    
})
