import { test, expect } from '@playwright/test';
import { SiakadLoginPage } from '../../pages/SiakadLoginPage';

test('login page shows the main elements', async ({ page }) => {
  const loginPage = new SiakadLoginPage(page);
  await loginPage.goto();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Lupa Password?' })).toBeVisible();
});

test('login with invalid credentials is rejected', async ({ page }) => {
  const loginPage = new SiakadLoginPage(page);
  await loginPage.goto();
  await loginPage.login('0000000000', 'wrong-password');
  await loginPage.expectLoginError();
});