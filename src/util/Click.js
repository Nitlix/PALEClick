const Controller = require('robotjs');

function route(type, delay){
    Controller.mouseToggle("down", type)

    setTimeout(() => {
        Controller.mouseToggle("up", type)
    }, delay)
}

function Click(type, delay=35){
    switch(type){
        case "left":
            route("left", delay)
            break;
        case "right":
            route("right", delay)
            break;
        case "middle":
            route("middle", delay)
            break;
        default:
            route("left", delay)
            break;
    }
}

module.exports = Click;