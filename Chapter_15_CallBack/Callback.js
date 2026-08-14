function placeOrder(item, callback){
    console.log("order placed....");
    callback();
}

//2nd way for Anonymous function:
placeOrder("Burger", function(){
    console.log("Order is ready!, Pick it up!")
})

//Ans
//order placed....
//Order is ready!, Pick it up!

//Define:
//1st way:
function print(){
    console.log("Normal function - Done with the order.")
}

placeOrder("Burger", print);

/* Ans:
order placed....
Normal function - Done with the order. */

// 3rd way - Arrrow function
placeOrder("Burger", () => {
    console.log("Arrow function, I'm also a function without name!")
});

/* Ans:
order placed....
Arrow function, I'm also a function without name! */


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });


test('has title', async ({ page }) => {

});