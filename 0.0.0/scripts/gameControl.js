/*
============================
============================
|| Last time + Delta time ||
|| Run all other ticks    ||
============================
============================
*/

//-------Game control object-------
let gameControl = {
    //---Last time and delta time properties to make it run for any fps---

    //Last time property set to currrent time
    lastTime: performance.now(),

    //Delta time property set to null as we need at least one tick for that to be set
    deltaTime: null,

    //-----Tick function: Calculates last time, delta time and calls all other tick functions-----
    tick: function() {
        //---Calulate last time and delta time---

        //Find current time and store in a constant variable to use for delta time and last time calculations
        const time = performance.now();

        //Calculate and set delta time using time and last time variables to make any fps work
        this.deltaTime = (time - this.lastTime) / 1000;

        //Track the last time to help with delta time calculations
        this.lastTime = time;

        //Call all other tick functions
        graphics.tick();
    }
};