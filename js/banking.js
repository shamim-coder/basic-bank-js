// Deposit Money add handler
const depositBtn = document.getElementById("deposit-btn");
const depositTotal = document.getElementById("deposit-total");
const balanceTotal = document.getElementById("balance-total");
const withdrawTotal = document.getElementById("withdraw-total");
depositBtn.addEventListener("click", () => {
    //add to deposit balance
    let depositAmount = parseFloat(depositBtn.previousElementSibling.value);
    let depositTotalAmount = parseFloat(depositTotal.innerText) + depositAmount;
    depositTotal.innerText = depositTotalAmount;

    // sum with balance
    let totalBalance = parseFloat(balanceTotal.innerText) + depositAmount;
    balanceTotal.innerText = totalBalance;

    // clear input value when deposit done
    depositBtn.previousElementSibling.value = "";
});

// Withdraw Money Handler
const withdrawBtn = document.getElementById("withdraw-btn");

withdrawBtn.addEventListener("click", () => {
    let withdrawAmount = parseFloat(withdrawBtn.previousElementSibling.value);
    let totalWithdraw = parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = totalWithdraw + withdrawAmount;

    // Remaining Balance Calculate
    let remainingBalance = parseFloat(balanceTotal.innerText) - withdrawAmount;
    balanceTotal.innerText = remainingBalance;

    // clear input value when withdraw done
    withdrawBtn.previousElementSibling.value = "";
});
