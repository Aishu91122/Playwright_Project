import {test} from '@playwright/test'

test("Introduction" , async({page}) => {
await page.goto("https://www.facebook.com/");
await page.locator("[name='email']").fill("Aishwarya");
await page.locator("[name='password']").fill("12345");
})

test("Introduction2" , async({page}) => {
await page.goto("https://www.facebook.com/");
await page.locator("[name='email']").fill("Aishwarya");
await page.locator("[name='password']").fill("12345");
})

