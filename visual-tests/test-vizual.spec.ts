import { test, expect } from '@playwright/test';

test('Verificare vizuala pagina dashboard', async ({ page }) => {
  await page.goto('https://ui.shadcn.com/examples/dashboard')
  await expect(page).toHaveScreenshot('reference-screenshot.png')



})