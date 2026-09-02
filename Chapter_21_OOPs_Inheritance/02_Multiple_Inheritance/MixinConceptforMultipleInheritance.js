// Mixin concept can help you to perform the multiple inheritance. 

// Mostly we wont use in Automation, but in the case of framework development, we can use it.

// Mixin 1: Adds logging ability

// Mixin 1: Adds logging ability
let LoggerMixin = function (Base) {
    return class extends Base {
        log(msg) {
            console.log("[Log] " + msg);
        }
    }
}

let ScreenshotMixin = function (Base) {
    return class extends Base {
        takeScreenshot() {
            console.log("[SCREENSHOT] captured");
        }
    };
};

// Base class
class TestCase {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log("Running: " + this.name);
    }
}

// Apply BOTH mixins
class SmartTest extends ScreenshotMixin(LoggerMixin(TestCase)) {
    constructor(name) {
        super(name);
    }
}

let t = new SmartTest("Login Flow");
t.run();
t.log("Test started");
t.takeScreenshot();

/* Ans:
Running: Login Flow
[Log] Test started
[SCREENSHOT] captured */