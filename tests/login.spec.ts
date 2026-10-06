import {expect} from '@playwright/test';
import {test} from '../fixtures/fixtures.ts';
import testdata from '../test-data/testdata.json';

test("login functionality", async ({page,loginPage})=>{

    await page.goto("https://rahulshettyacademy.com/client");

    await loginPage.login(testdata.username,testdata.password);

    await expect(page).toHaveTitle("Let's Shop");
    

});