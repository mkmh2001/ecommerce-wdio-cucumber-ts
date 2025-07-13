// describe('Direct logout test (no Cucumber)', () => {
//   it('should login and logout directly', async () => {
//     await browser.url('https://automationexercise.com/login');

//     // Login
//     await $('input[data-qa="login-email"]').setValue('qa.manojkumar.haveri@gmail.com');
//     await $('input[data-qa="login-password"]').setValue('testMK');
//     await $('button[data-qa="login-button"]').click();

//     // Logout
//     const logoutBtn = await $('a[href="/logout"]');
//     await logoutBtn.waitForDisplayed();
//     await logoutBtn.click();

//     // Verify redirected to login
//     await expect(browser).toHaveUrlContaining('/login');
//   });
// });
