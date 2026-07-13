import {test,chromium} from '@playwright/test'
test("Launch", async ({page})=>{
page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})