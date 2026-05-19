/*
========================================
========================================
|| Rendering + screen clearing        ||
|| Canvas resizing + graphics scaling ||
========================================
========================================
*/

//-------Graphics object-------
let graphics = {
    //---Canvas and ctx properties to be able to draw to the canvas and resize it---

    //Canvas property to be able to resize the canvas
    canvas: document.getElementById("canvas"),

    //Ctx property to be able to render 2d graphics to the canvas
    ctx: document.getElementById("canvas").getContext("2d"),

    //---Graphics tick function: Clear screen and call all draw functions---
    tick: function() {
        //Clear the screen to be able to render new graphics instead of adding to the old one
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //Call all draw functions
    },

    //Scale property to be able to fit any screen
    scale: 1,

    //Set world width and height
    worldWidth: 150,
    worldHeight: 100,

    //-----Resize function: Sets canvas width and height and sets scale property-----
    resize: function() {
        //---Calculate ratios using width and height of the world and screen---

        //Find the width and height of the screen and store them in constant variables
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        //Calculate current ratio using the screen width and height and needed ratio using world width and height
        const currentRatio = screenWidth / screenHeight;
        const neededRatio = this.worldWidth / this.worldHeight;

        //Change the canvas to match the size
        this.canvas.width = screenWidth;
        this.canvas.height = screenHeight;

        //Check the ratio and change the size
        if (currentRatio > neededRatio) {
            this.canvas.width = screenHeight * neededRatio;
        }
        else if (currentRatio < neededRatio) {
            this.canvas.height = screenWidth / neededRatio;
        }

        //Change the scale
        this.scale = this.canvas.width / this.worldWidth; 
    }
};