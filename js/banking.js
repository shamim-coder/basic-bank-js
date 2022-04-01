function getBalance(inputAmountId, totalAmountId, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    const showAmount = document.getElementById(totalAmountId);
    const inputAmount = document.getElementById(inputAmountId);
    let totalAmount = parseFloat(showAmount.innerText) + parseFloat(inputAmount.value);
    showAmount.innerText = totalAmount;
    let totalBalance;
    if (isAdd) {
        totalBalance = parseFloat(balanceTotal.innerText) + parseFloat(inputAmount.value);
    } else {
        totalBalance = parseFloat(balanceTotal.innerText) - parseFloat(inputAmount.value);
    }
    balanceTotal.innerText = totalBalance;
    inputAmount.value = "";
}

// Deposit Money add handler
document.getElementById("deposit-btn").addEventListener("click", () => {
    getBalance("deposit-amount", "deposit-total", true);
});

// Withdraw Money Handler
document.getElementById("withdraw-btn").addEventListener("click", () => {
    getBalance("withdraw-amount", "withdraw-total", false);
});

document.getElementById("home").addEventListener("click", () => {
    window.location.href = window.location.origin;
});
