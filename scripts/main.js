// scripts/main.js

// Runs on the client
Events.on(ClientLoadEvent, e => {
    Vars.content.blocks().each(block => {
        if (block && block.requirements) {
            block.alwaysUnlocked = true;
            block.buildVisibility = BuildVisibility.shown;
            block.requirements = ItemStack.empty;

            // Only set if the property exists
            if (typeof block.buildCost !== "undefined") {
                block.buildCost = 0;
            }

            if (typeof block.envEnabled !== "undefined") {
                block.envEnabled = -1;
            }
        }
    });

    Vars.content.units().each(unit => {
        if (unit) unit.alwaysUnlocked = true;
    });

    Log.info("Unlock Em' EVOLVED: Client patch applied safely.");
});

// Runs on the server
Events.on(ContentInitEvent, e => {
    Vars.content.blocks().each(block => {
        if (block && block.requirements) {
            block.alwaysUnlocked = true;
            block.buildVisibility = BuildVisibility.shown;
            block.requirements = ItemStack.empty;

            // Only set if the property exists
            if (typeof block.buildCost !== "undefined") {
                block.buildCost = 0;
            }

            if (typeof block.envEnabled !== "undefined") {
                block.envEnabled = -1;
            }
        }
    });

    Vars.content.units().each(unit => {
        if (unit) unit.alwaysUnlocked = true;
    });

    Log.info("Unlock Em' EVOLVED: Server patch applied safely.");
});
