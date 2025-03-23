document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.querySelector(".switch input");
    const prices = document.querySelectorAll(".price");
    const billingTexts = document.querySelectorAll(".billing");

    // Pricing values for Monthly and Yearly plans
    const yearlyPrices = [19, 59, 99, 2999];
    const monthlyPrices = yearlyPrices.map(price => Math.round(price / 0.8)); // 20% increase for monthly

    // Toggle pricing when switch is clicked
    toggleSwitch.addEventListener("change", function () {
        prices.forEach((priceElement, index) => {
            if (toggleSwitch.checked) {
                priceElement.innerHTML = `$${monthlyPrices[index]} <span>/ Month</span>`;
                billingTexts[index].innerText = "Billed Monthly";
            } else {
                priceElement.innerHTML = `$${yearlyPrices[index]} <span>/ Month</span>`;
                billingTexts[index].innerText = "Billed Annually";
            }
        });
    });

    // Add hover popup effect for cards
    const plans = document.querySelectorAll(".plan");

    plans.forEach(plan => {
        plan.addEventListener("mouseenter", () => {
            plan.classList.add("hovered");
        });

        plan.addEventListener("mouseleave", () => {
            plan.classList.remove("hovered");
        });
    });
});
