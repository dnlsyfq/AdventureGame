let choice = 'burger';

switch (true) {
    case choice === 'burger':
        console.log("You selected a burger.");
        console.log("Price: $10");
        console.log("Preparing your burger...15 minutes remaining.");
        break;
    case choice === 'pizza':
        console.log("You selected a pizza.");
        console.log("Price: $12");       
        console.log("Preparing your pizza...20 minutes remaining.");
        break;
    case choice === 'salad':
        console.log("You selected a salad.");
        console.log("Price: $8");
        console.log("Preparing your salad...10 minutes remaining.");
        break;
}