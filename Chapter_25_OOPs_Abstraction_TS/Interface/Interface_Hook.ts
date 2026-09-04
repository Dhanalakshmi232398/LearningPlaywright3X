// Rarely used in real world but it is used in testing framework like Jest, Mocha, Jasmine etc. It is used to define the hook functions for beforeEach and afterEach.
interface TestHook {
    (testName: string): void;
}

let beforeEachHook: TestHook = function (testName: string): void {
    console.log("[BEFORE] Setting up: " + testName);
}

let afterEachHook: TestHook = function (testName: string): void {
    console.log("[AFTER] Tearing down: " + testName);
};

beforeEachHook("Login Test");