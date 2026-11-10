import { test, expect } from '@playwright/test';
import { SiakadLoginPage } from '../../pages/SiakadLoginPage';

test.describe('SIAKAD login UI', () => {
  test.beforeEach(async ({ page }) => {
    await new SiakadLoginPage(page).goto();
  });

  test('form elements are visible and usable', async ({ page }) => {
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
    await expect(page.getByRole('link', { name: 'Lupa Password?' })).toBeVisible();
  });

  test('input fields accept text', async ({ page }) => {
    const username = page.getByRole('textbox', { name: 'Username' });
    await username.fill('0000000000');
    await expect(username).toHaveValue('0000000000');
  });

  test('show password checkbox can be toggled', async ({ page }) => {
    const toggle = page.getByRole('checkbox', { name: 'Tampilkan Password' });
    await toggle.check();
    await expect(toggle).toBeChecked();
    await toggle.uncheck();
    await expect(toggle).not.toBeChecked();
  });

  test('forgot password dialog opens and closes', async ({ page }) => {
    await page.getByRole('link', { name: 'Lupa Password?' }).click();
    await expect(page.getByText('Lupa Password').first()).toBeVisible();
    await page.getByRole('button', { name: 'Tutup' }).click();
    await expect(page.getByRole('button', { name: 'Tutup' })).toBeHidden();
  });
});

test.describe('SIAKAD login UI on mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('login form is usable on a small screen', async ({ page }) => {
    await new SiakadLoginPage(page).goto();
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });
});