import {expect,request} from '@playwright/test';
import {test} from '../fixtures/fixtures';
import testdata from '../test-data/testdata.json';

const loginPayload={userEmail: "rafi.tgcs219@gmail.com", userPassword: "MBxanptFWYri5$k"};
let token:any;
test.beforeAll(async ()=>{

    const apiContext=await request.newContext();
    const apiRes=await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:loginPayload});
    const apiResJson=await apiRes.json();
    token=await apiResJson.token;
    console.log(token);
});

test("API Testing", async ({page,loginPage})=>{

    await page.addInitScript(value=>{

        window.localStorage.setItem('token',value)
    },token);

    await page.goto("https://rahulshettyacademy.com/client");
   

    await expect(page).toHaveTitle("Let's Shop");

   

});