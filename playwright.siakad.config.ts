import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/siakad',
  workers: 1,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL: 'https://siakad.polinema.ac.id',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});