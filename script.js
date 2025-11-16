document.getElementById('loan-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const loanAmount = document.getElementById('loan-amount').value;
    const loanType = document.getElementById('loan-type').value;
    const annualIncome = document.getElementById('annual-income').value;
    const terms = document.getElementById('terms').checked;

    let isValid = true;
    let errorMessage = '';

    // Full Name Validation
    if (fullName === '') {
        isValid = false;
        errorMessage += 'Full Name is required.\n';
    }

    // Email Validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    // Phone Number Validation (simple)
    if (phone === '' || phone.length < 10) {
        isValid = false;
        errorMessage += 'Please enter a valid phone number.\n';
    }

    // Loan Amount Validation
    if (loanAmount < 1000) {
        isValid = false;
        errorMessage += 'Loan Amount must be at least 1000.\n';
    }

    // Loan Type Validation
    if (loanType === '') {
        isValid = false;
        errorMessage += 'Please select a Loan Type.\n';
    }
    
    // Annual Income Validation
    if (annualIncome < 0) {
        isValid = false;
        errorMessage += 'Annual Income cannot be negative.\n';
    }

    // Terms and Conditions Validation
    if (!terms) {
        isValid = false;
        errorMessage += 'You must agree to the terms and conditions.\n';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Here you would typically send the form data to a server
        // Example: fetch('/api/submit-loan', { method: 'POST', body: new FormData(this) });
        this.reset();
    } else {
        alert('Please correct the following errors:\n\n' + errorMessage);
    }});