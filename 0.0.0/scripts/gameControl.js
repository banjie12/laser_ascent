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

    //Last time property
    lastTime: performance.now(),

    //Delta time property
    deltaTime: null,

    //Tick
    tick: function() {
        //---Calulate last time and delta time---

        //Find current time and store in a constant variable
        const time = performance.now();

        //Calculate and set delta time using time and last time variables
        this.deltaTime = (time - this.lastTime) / 1000;

        //Set last time variable to the time variable
        this.lastTime = time;
    }
};