exports.cartPage = class cartPage {

        constructor(page) {
            this.page = page;
            this.checkout = '#checkout';
            this.firstNameInput = '#first-name';
            this.lastNameInput = '#last-name';
            this.postalCodeInput = '#postal-code';
            this.continueButton = '#continue';

            this.paymentInfo = 'div[data-test="payment-info-value"]';
            this.shippingInfo = 'div[data-test="shipping-info-value"]';
            this.itemTotal = 'div[data-test="subtotal-label"]';
            this.tax = 'div[data-test="tax-label"]';
            this.total = 'div[data-test="total-label"]';

            this.finishButton = '#finish';

        }
        
        async login(firstName, lastName, postalCode) {
            await this.page.locator(this.checkout).click();
            await this.page.locator(this.firstNameInput).fill(firstName);
            await this.page.locator(this.lastNameInput).fill(lastName);
            await this.page.locator(this.postalCodeInput).fill(postalCode);
            await this.page.locator(this.continueButton).click();

            const paymentText = await this.page.locator(this.paymentInfo).textContent();
            const shippingText = await this.page.locator(this.shippingInfo).textContent();
            const itemTotalText = await this.page.locator(this.itemTotal).textContent();
            const taxText = await this.page.locator(this.tax).textContent();
            const totalText = await this.page.locator(this.total).textContent();

            console.log('**** Payment and Shipping Information *****');
            console.log(`Payment information: ${paymentText}`);
            console.log(`Shipping Info: ${shippingText}`);
            console.log(`${itemTotalText}`);
            console.log(`${taxText}`);
            console.log(`${totalText}`);

            await this.page.locator(this.finishButton).click();

           const successMsg =  await this.page.locator('.complete-header').textContent();
           console.log(` ********** ${successMsg}***********`);
        }
};


    
