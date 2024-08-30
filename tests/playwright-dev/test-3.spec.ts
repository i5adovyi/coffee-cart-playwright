import { Browser, chromium, Page } from 'playwright';

const LOGIN_URL = 'https://example.test'; // Замініть на URL вашої програми
const USERNAME = 'qa-user@example.test'; // Введіть ім'я користувача
const PASSWORD = 'public-example-password'; // Введіть пароль

async function login(browser: Browser, iteration: number) {
  const context = await browser.newContext();
  const page: Page = await context.newPage();
  await page.goto('https://example.test');
  await page.goto('https://login.gsstaging-eu.net/?subdomain=igor-test-03');
  await page
    .getByTestId('email-input')
    .fill('qa-user@example.test');
  await page.getByTestId('email-input').press('Enter');
  await page
    .getByTestId('password-input')
    .fill('public-example-password');
  await page.getByTestId('password-input').press('Enter');
  //await page.getByRole('button', { name: 'Reload' }).click();
  await page.getByTitle('Organization').click();
  await page.getByText('Shit hole').click();
  await page.getByRole('img', { name: 'Van' }).click();
  await page.getByRole('link', { name: 'xss' }).click();
  await page.getByTestId('home-link').click();
  await page.getByRole('link', { name: 'Note OpenAI' }).click();
  await page.getByPlaceholder('Share your thoughts...').click();
  await page.getByPlaceholder('Share your thoughts...').fill('la lal la');
  await page.getByText('Comment', { exact: true }).click();
  await page.getByRole('link', { name: 'Home' }).click();

  // Залишаємо вікно відкритим
}

async function main() {
  const browser = await chromium.launch({ headless: false }); // Вимкнено headless для відкритих вікон

  for (let i = 1; i <= 200; i++) {
    await login(browser, i);
  }

  // Не закриваємо браузер, щоб всі вікна залишалися відкритими
  console.log('All login attempts completed');
}

main().catch((err) => {
  console.error(err);
});
