function calculateTaxes(income) {
    if (income > 3000) {
        return income * 0.25
    } else {
        return income * 0.15
    }
}

function removeDupes(values) {
    return [...new Set(values)]
}