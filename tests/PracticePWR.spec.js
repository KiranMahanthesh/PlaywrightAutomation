const { test, expect } = require('@playwright/test');

test.describe('Home Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the home page before each test
        await page.goto('https://testautomationpractice.blogspot.com/');
    });

    test('should load the home page successfully', async ({ page }) => {
        // Verify the page title
        await expect(page).toHaveTitle(/Automation Testing Practice/);
    });

    test('should have a specific element visible', async ({ page }) => {
        // Verify a specific element is visible
        const element = page.locator("h3[class='post-title entry-title']");
        await expect(element).toBeVisible();
       // await page.getByRole('heading', { name: 'Automation Testing Practice' }).click();
        //await page.getByText('For Selenium, Cypress &')
        await page.getByRole('textbox', {
            name: 'Enter Name'
        }).click();
        await page.getByRole('textbox', { name: 'Enter Name' }).fill('Kiran M');
        await page.getByRole('textbox', { name: 'First Name' }).fill('Kirann').click();
        await page.getByRole('textbox', { name: 'Enter EMail' }).click();
        await page.getByRole('textbox', { name: 'Enter EMail' }).fill('kiranprince@email.com');
        await page.getByRole('textbox', { name: 'Enter Phone' }).click();
        await page.getByRole('textbox', { name: 'Enter Phone' }).fill('8818818');
        await page.getByRole('textbox', { name: 'Address:' }).click();
        await page.getByRole('textbox', { name: 'Address:' }).fill('Downtown street 55, dubai');
       // await page.getByText('Gender:').click();
        await page.getByRole('radio', { name: 'Male', exact: true }).check();
        await page.getByText('Days:').click();
        await page.getByRole('checkbox', { name: 'Wednesday' }).check();
        await page.getByText('Days: Sunday Monday Tuesday').click();
        await page.getByRole('checkbox', { name: 'Tuesday' }).check();
        await page.getByRole('checkbox', { name: 'Wednesday' }).check();
        await page.getByLabel('Country:').selectOption('india');
        await page.getByLabel('Colors:').selectOption('red');
        await page.getByText('Colors:').click();
        await page.getByLabel('Sorted List:').selectOption('cat');
        await page.getByText('Sorted List:').click();
        await page.locator('#datepicker').click();
        await page.getByTitle('Next').click();
        await page.getByRole('link', { name: '15' }).click();
        await page.locator('#txtDate').click();
        await page.getByTitle('Next').click();
        await page.getByRole('link', { name: '9', exact: true }).click();
        await page.getByPlaceholder('Start Date').fill('2025-04-22');
        await page.getByPlaceholder('End Date').fill('2025-04-27');
        await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
        //await browser.close();
        await page.getByRole('cell', { name: 'BookName' }).click();
        await page.getByRole('table').filter({ hasText: 'BookName Author Subject Price' }).click();
        await page.getByRole('table').filter({ hasText: 'BookName Author Subject Price' }).click();
        await page.getByRole('cell', { name: 'Learn Selenium' }).click();
        await page.getByRole('cell', { name: 'Learn Java' }).click();
        await page.getByRole('cell', { name: 'Learn JS' }).click();
        await page.locator('.main-outer > div:nth-child(2)').click();
        await page.getByRole('cell', { name: 'Master In Selenium' }).click();
        await page.locator('.main-outer > div:nth-child(2)').click();
        await page.getByRole('heading', { name: 'Dynamic Web Table' }).click();
        await page.locator('.column-center-inner').click();
        await page.locator('#headers').getByRole('cell', { name: 'Name' }).click();
        await page.getByText('CPU load of Chrome process: 3').click();
        await page.locator('#displayValues').getByText('71.0 MB').click();
        await page.getByText('CPU load of Chrome process: 3.8% Memory Size of Firefox process: 71.0 MB').click();
        await page.getByText('Memory Size of Firefox').click();
        await page.getByText('NameNetwork (Mbps)Memory (MB)Disk (MB/s)CPU (%) Chrome4.4 Mbps72.3 MB0.26 MB/s3').click();
    });
});