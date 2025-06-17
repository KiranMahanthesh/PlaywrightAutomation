exports.loginPage = class loginPage {

        constructor(page) {
            this.page = page;
            this.userName = '#user-name';
            this.passwordInput = '#password';
            this.loginButton = '#login-button';

        }
        
        async gotologinPage() {
            await this.page.goto('https://www.saucedemo.com');
        }

        async login(username, password) {
            await this.page.locator(this.userName).fill(username);
            await this.page.locator(this.passwordInput).fill(password);
            await this.page.locator(this.loginButton).click();
        }
};


    
