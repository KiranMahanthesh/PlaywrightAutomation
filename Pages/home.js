exports.homePage = class homePage {

    constructor(page) {
        this.page = page;
        this.tshirt = '#add-to-cart-sauce-labs-bolt-t-shirt';
        this.bikeLight = '#add-to-cart-sauce-labs-bike-light';
        this.backpack = '#add-to-cart-sauce-labs-backpack';
        this.cartButton = '.shopping_cart_link';

    }
    

    async addToCart() {
        await this.page.locator(this.tshirt).click();
        await this.page.locator(this.bikeLight).click();
        await this.page.locator(this.backpack).click();
        await this.page.locator(this.cartButton).click();
        
    }
};



