import {test} from '@playwright/test'

test("Introduction" , async({page}) => {
await page.goto("https://www.facebook.com/");
await page.locator("[name='email']").fill("Aishwarya");
})