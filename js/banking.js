// deposite event handler
document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');

    const depositeTotal = document.getElementById('deposite-total');

    const previousDepositeAmoutn = depositeTotal.innerText;
    const newDepositeAmount = depositeInput.value;
    const newDepositeTotal = parseFloat(previousDepositeAmoutn) + parseFloat(newDepositeAmount);
    // console.log(newDepositeTotal);
    depositeTotal.innerText = newDepositeTotal;



    // balance account total
    const totalBalance = document.getElementById('balance-total')
    const previousTotalBalance = totalBalance.innerText;
    const totalBalanceUpdate = parseFloat(previousTotalBalance) + parseFloat(newDepositeAmount);
    totalBalance.innerText = totalBalanceUpdate;

    // deposite clear
    depositeInput.value = ''
})


// withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawTotal = document.getElementById('withdraw-total');
    
    const previousWithdraw = withdrawTotal.innerText;
    const newWithdraw = withdrawInput.value
    const totalWithdraw = parseFloat(previousWithdraw) + parseFloat(newWithdraw);
  
    withdrawTotal.innerText=totalWithdraw;


    // balance account total
    const totalBalance = document.getElementById('balance-total');
    const previousTotalBalance = totalBalance.innerText;
    const totalWithdrawMinusAmount=parseFloat(previousTotalBalance)-parseFloat(newWithdraw);
    totalBalance.innerText=totalWithdrawMinusAmount



    // withdraw clear
    withdrawInput.value = ''
})