// priority 0

// Removing recipes
ServerEvents.recipes((event) => {
    // Remove recipes for coin minting and burning from TE
    event.remove({ id: "thermal:press_coin_die" });
    event.remove({ id: "thermal:dynamo_numismatic" });

    // Remove Recipes from Create Deco coins to avoid confusion
    event.remove({ output: "createdeco:brass_coin" });
    event.remove({ output: "createdeco:brass_coinstack" });
    event.remove({ output: "createdeco:cast_iron_coin" });
    event.remove({ output: "createdeco:cast_iron_coinstack" });
    event.remove({ output: "createdeco:copper_coin" });
    event.remove({ output: "createdeco:copper_coinstack" });
    event.remove({ output: "createdeco:gold_coin" });
    event.remove({ output: "createdeco:gold_coinstack" });
    event.remove({ output: "createdeco:iron_coin" });
    event.remove({ output: "createdeco:iron_coinstack" });
    event.remove({ output: "createdeco:netherite_coin" });
    event.remove({ output: "createdeco:netherite_coinstack" });
    event.remove({ output: "createdeco:zinc_coin" });
    event.remove({ output: "createdeco:zinc_coinstack" });

    // Back-up solution for breaking up currency
    event.stonecutting("10x thermal:copper_coin", "thermal:silver_coin");
    event.stonecutting("10x thermal:silver_coin", "thermal:gold_coin");
});
