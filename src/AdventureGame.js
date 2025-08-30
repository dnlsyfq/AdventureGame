// ===========================================
// The Dragon's Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
const readline = require('readline-sync');

// Game state variables
let playerName = "";
let playerHealth = 100;
let playerGold = 20;  // Starting gold
let currentLocation = "village";
let gameRunning = true;
let inventory = [];

console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");

// Get player's name
playerName = readline.question("\nWhat is your name, brave adventurer? ");
console.log("\nWelcome, " + playerName + "!");
console.log("You start with " + playerGold + " gold.");

let weaponDamage = 0
console.log(`Weapon Damage = ${weaponDamage}`)

console.log("When you buy a sword, weapon damage will increase to 10!")

let monsterDefense = 5

console.log(`Monster Defense = ${monsterDefense}`)

console.log("Monster can withstand some damage in combat!")

let healingPotionValue = 30

console.log(`Healing Potion = ${healingPotionValue}`)

console.log("A potion will restore 30 health!")