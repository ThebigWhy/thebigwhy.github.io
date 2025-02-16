document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('coaching-form');
    const serviceInputs = form.querySelectorAll('input[name="service"]');
    const totalCostDisplay = document.getElementById('total-cost');

    function updateTotal() {
        let total = 0;
        serviceInputs.forEach(input => {
            if (input.checked) {
                total += parseFloat(input.dataset.price);
            }
        });
        totalCostDisplay.textContent = total.toFixed(2);
    }

    serviceInputs.forEach(input => {
        input.addEventListener('change', updateTotal);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let selectedServices = [];
        serviceInputs.forEach(input => {
            if (input.checked) {
                selectedServices.push(input.value);
            }
        });
        const totalCost = totalCostDisplay.textContent;
        alert(`Thanks for your interest!\n\nSelected Services:\n- ${selectedServices.join('\n- ')}\n\nTotal Cost: $${totalCost}\n\nI'll be in touch soon.`);
        // Optionally, send data to your email or server using a service like Formspree
    });
});
