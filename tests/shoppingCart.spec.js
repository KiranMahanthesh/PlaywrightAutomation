const { test, expect } = require('@playwright/test');           
import { loginPage } from '../Pages/login.js';
import { homePage } from "../Pages/home.js";
import { cartPage } from "../Pages/cart.js";


test('login shoppingCart add items to cart and place order', async ({ page }) => {
    const login = new loginPage(page);
    await login.gotologinPage();
    await login.login('standard_user', 'secret_sauce');

    const home = new homePage(page);
    await home.addToCart();
    const cartItems = page.locator('.cart_item');
    await expect(cartItems).toHaveCount(3);

    const cart = new cartPage(page);
    await cart.login('Kiran', 'M', '00588');

});









