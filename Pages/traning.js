exports.training = class training {

  constructor(page) {
    this.page = page;
    this.pageLink = "//a[normalize-space()='Udemy Courses']";
    this.title = "//a[contains(text(),'SDET-QA')]";
  }

    async clickUdemyCourses() {
        await this.page.click(this.pageLink);
        await this.page.waitForTimeout(12000); // Wait for 2 seconds to ensure the page loads
    }

    async verifyUdemyCourses() {
        await this.page.locator(this.title).waitFor({ state: 'visible' });
        const titleElement = await this.page.locator(this.title);
        await expect(titleElement).toBeVisible();
      }

}