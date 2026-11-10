import { Page, expect } from '@playwright/test';

export class SiakadLoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/login');
  }

  async login(nim: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Username' }).fill(nim);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async expectLoginError() {
    await expect(this.page.getByText('Username / Password Salah')).toBeVisible();
  }
}