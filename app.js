function calculateTaxes(income) {
    if (!Number.isFinite(income)) {
        throw new Error('BAD ICOME')
    }
    if (income > 3000) {
        return income * 0.25
    } else {
        return income * 0.15
    }
}