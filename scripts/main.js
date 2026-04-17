Events.on(ClientLoadEvent, e => {
    Vars.content.blocks().each(block => {
        if (block != null && block.requirements != null) {
            block.alwaysUnlocked = true;
            block.buildVisibility = BuildVisibility.shown;
            
            try {
                block.requirements = ItemStack.with();
                if ("buildCost" in block) block.buildCost = 0;
                
                if ("envEnabled" in block) block.envEnabled = -1;
            } catch(err) {}
        }
    });

    Vars.content.units().each(unit => {
        if(unit != null) unit.alwaysUnlocked = true;
    });

    Log.info("Unlock Em' EVOLVED: The Tech-Bridge is live. Author: Tiago, Gemini & Copilot");
});
