/*
============================
============================
|| Last time + Delta time ||
|| Run all other ticks    ||
============================
============================
*/

//Game control object
let gameControl = {
    //---Last time and delta time properties---

    //Last time property set to currrent time
    lastTime: performance.now(),

    //Delta time property set to null as we need at least one tick for that
    deltaTime: null,

    //Tick
    tick: function() {
        //---Calulate last time and delta time---

        //Find current time and store in a constant variable to use for delta time and last time calculations
        const time = performance.now();

        //Calculate and set delta time using time and last time variables to make an fps work
        this.deltaTime = (time - this.lastTime) / 1000;

        //Track the last time to help with delta time calculations
        this.lastTime = time;
    }
};