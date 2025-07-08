// Node.js Stock Transaction Calculator - Minimum Selling Price to Avoid Loss
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

// Transaction cost constants
const STAMP_TAX_RATE = 0.0005; // 0.05% stamp tax rate
const COMMISSION_RATE = 0.00025; // 0.025% commission rate
const MIN_COMMISSION = 5; // Minimum commission in cents
const PRICE_MULTIPLIER = 100; // Convert yuan to cents

const rl = readline.createInterface({ input, output });

/**
 * Calculate transaction costs and minimum selling price
 * @param {number} buyPrice - Purchase price per unit
 * @param {number} quantity - Number of shares
 * @returns {Object} Transaction details with costs and minimum selling price
 */
function calculateTransaction(buyPrice, quantity) {
    // Convert price to cents for precise calculations
    const buyPriceCents = Math.round(buyPrice * PRICE_MULTIPLIER);
    const totalCostCents = buyPriceCents * quantity;

    // Calculate buying commission
    const buyCommission = Math.max(
        totalCostCents * COMMISSION_RATE,
        MIN_COMMISSION
    );

    // Total amount spent (including commission)
    const totalSpentCents = totalCostCents + buyCommission;

    // Calculate minimum selling price needed
    const requiredSellPriceCents = (
        totalSpentCents + MIN_COMMISSION // Minimum sell commission
    ) / (
        quantity * (1 - STAMP_TAX_RATE) // After stamp tax deduction
    );

    // Calculate selling commission (based on required sell price)
    const sellCommission = Math.max(
        requiredSellPriceCents * quantity * COMMISSION_RATE,
        MIN_COMMISSION
    );

    // Calculate stamp tax
    const stampTax = requiredSellPriceCents * quantity * STAMP_TAX_RATE;

    return {
        buyPrice,
        quantity,
        totalCostCents,
        buyCommission,
        sellCommission,
        stampTax,
        totalSpentCents,
        requiredSellPrice: requiredSellPriceCents / PRICE_MULTIPLIER
    };
}

/**
 * Validate input values
 * @param {number} price - Price per unit
 * @param {number} quantity - Number of shares
 * @returns {string|null} Error message if invalid, null if valid
 */
function validateInput(price, quantity) {
    if (isNaN(price) || price <= 0) {
        return 'Please enter a valid positive number for price';
    }
    if (isNaN(quantity) || quantity <= 0 || !Number.isInteger(quantity)) {
        return 'Please enter a valid positive integer for quantity';
    }
    return null;
}

// Get user input
rl.question('Enter purchase price and quantity (e.g., 100.5,100): ', (answer) => {
    try {
        // Parse input
        const [priceStr, quantityStr] = answer.includes(',') ? answer.split(',') : [answer, '1'];
        const buyPrice = parseFloat(priceStr.trim());
        const quantity = parseInt(quantityStr.trim(), 10);

        // Validate input
        const validationError = validateInput(buyPrice, quantity);
        if (validationError) {
            console.error(`Input error: ${validationError}`);
            rl.close();
            return;
        }

        // Calculate transaction
        const result = calculateTransaction(buyPrice, quantity);

        // Display results
        console.log('\nTransaction Summary:');
        console.log(`Purchase Price: ¥${result.buyPrice.toFixed(2)}`);
        console.log(`Quantity: ${result.quantity} shares`);
        console.log('------------------------');
        console.log(`Total Purchase Cost: ¥${(result.totalCostCents / PRICE_MULTIPLIER).toFixed(2)}`);
        console.log(`Buy Commission: ¥${(result.buyCommission / PRICE_MULTIPLIER).toFixed(2)}`);
        console.log('------------------------');
        console.log(`Total Amount Spent: ¥${(result.totalSpentCents / PRICE_MULTIPLIER).toFixed(2)}`);
        console.log('\nRequired to Break Even:');
        console.log(`Minimum Sell Price: ¥${result.requiredSellPrice.toFixed(2)}`);
        console.log(`Sell Commission: ¥${(result.sellCommission / PRICE_MULTIPLIER).toFixed(2)}`);
        console.log(`Stamp Tax: ¥${(result.stampTax / PRICE_MULTIPLIER).toFixed(2)}`);
        console.log('------------------------');
        console.log(`Total Selling Costs: ¥${((result.sellCommission + result.stampTax) / PRICE_MULTIPLIER).toFixed(2)}`);
    } catch (error) {
        console.error('An error occurred:', error.message);
    } finally {
        rl.close();
    }
});
