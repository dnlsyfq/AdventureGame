// Order information
let orderTotal = 45;
let destination = "domestic";
let shippingCost = 0;
// Calculate shipping cost
// Hint: Different rates for different order totals and destinations
// Use else if to handle multiple conditions
// Your code here:
switch(true){
    case orderTotal > 50 && destination === "domestic":
        console.log("Free Shipping")
        console.log(`Total: $${orderTotal}`)
        break
    case (orderTotal >= 25 && orderTotal <= 50) && destination === "domestic":
        shippingCost = 5
        console.log(`Shipping: $${shippingCost}`)
        console.log(`Total: $${orderTotal + shippingCost}`)
        break 
    case orderTotal < 25 && destination === "domestic":
        shippingCost = 10
        console.log(`Shipping: $${shippingCost}`)
        console.log(`Total: $${orderTotal + shippingCost}`)
        break 
    case orderTotal > 100 && destination === "international":
        console.log("Free Shipping")
        console.log(`Total: $${orderTotal}`)
        break
    case (orderTotal >= 50 && orderTotal <= 100) && destination === "international":
        shippingCost = 15
        console.log(`Shipping: $${shippingCost}`)
        console.log(`Total: $${orderTotal + shippingCost}`)
        break
    case orderTotal < 50 && destination === "international":
        shippingCost = 25
        console.log(`Shipping: $${shipping}`)
        console.log(`Total: $${orderTotal + shippingCost}`)
        break
}

// Display final cost
// Remember to show both order total and shipping cost