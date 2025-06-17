import { test, expect } from '@playwright/test';
import { training } from '../Pages/traning.js';

//training page 
    test('tests',async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
    });

test('should navigate to Udemy Courses and verify elements', async ({ page }) => {
        let trainingPage = new training(page);
        await trainingPage.clickUdemyCourses();
        await trainingPage.verifyUdemyCourses();
    });