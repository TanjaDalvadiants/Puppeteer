
const { test, expect } = require("@playwright/test");
const { email, password } = require("./user.js");

test("Неуспешная авторизация", async ({ page }) => {
    await page.goto('https://netology.ru/');

    await page.click('text=Войти');
    await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');
    await page.click('[placeholder="Email"]');
    await page.fill('[placeholder="Email"]', 'gfhfghf');
    await page.click('[placeholder="Пароль"]');
    await page.click('[placeholder="Email"]');
    await page.fill('[placeholder="Email"]', 'gfhfghf@mail.ru');
    await page.click('[placeholder="Пароль"]');
    await page.fill('[placeholder="Пароль"]', '234423trgfgh652335');
    await page.click('[data-testid="login-submit-btn"]');
    await page.click('[data-testid="login-error-hint"]');
  });

  test("Успешная авторизация", async ({ page }) => {
    await page.goto("https://netology.ru/");
    await page.click("text=Войти");
    await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
    await page.click('[placeholder="Email"]');
    await page.locator('[placeholder="Email"]').fill(email);
    await page.click('[placeholder="Пароль"]');
    await page.locator('[placeholder="Пароль"]').fill(password);
    await page.click('[data-testid="login-submit-btn"]');
    await page.click("text=Расписание занятий");
    await expect(page).toHaveURL('https://netology.ru/profile/united-calendar');
  });