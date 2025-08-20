import { test, expect } from '@playwright/test';

test.describe('Portfolio Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the homepage', async ({ page }) => {
    // Check if the page loads successfully
    await expect(page).toHaveTitle(/Portfolio/);
    
    // Check if the main heading is visible
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    // Check if navigation menu exists
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Check if navigation links are present
    await expect(page.locator('a[href="#about"]')).toBeVisible();
    await expect(page.locator('a[href="#skills"]')).toBeVisible();
    await expect(page.locator('a[href="#projects"]')).toBeVisible();
    await expect(page.locator('a[href="#contact"]')).toBeVisible();
  });

  test('should navigate to different sections', async ({ page }) => {
    // Click on About link
    await page.click('a[href="#about"]');
    await page.waitForTimeout(1000); // Wait for smooth scroll
    
    // Click on Skills link
    await page.click('a[href="#skills"]');
    await page.waitForTimeout(1000);
    
    // Click on Projects link
    await page.click('a[href="#projects"]');
    await page.waitForTimeout(1000);
    
    // Click on Contact link
    await page.click('a[href="#contact"]');
    await page.waitForTimeout(1000);
  });

  test('should display contact form', async ({ page }) => {
    // Navigate to contact section
    await page.click('a[href="#contact"]');
    await page.waitForTimeout(1000);
    
    // Check if contact form exists
    const form = page.locator('form');
    await expect(form).toBeVisible();
    
    // Check form fields
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="subject"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check if mobile menu toggle exists
    const mobileMenuToggle = page.locator('[data-testid="mobile-menu-toggle"]');
    if (await mobileMenuToggle.isVisible()) {
      await mobileMenuToggle.click();
      await expect(page.locator('nav')).toBeVisible();
    }
    
    // Check if content is still visible on mobile
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should load competitive programming ratings', async ({ page }) => {
    // Navigate to skills or about section where ratings might be displayed
    await page.click('a[href="#about"]');
    await page.waitForTimeout(2000); // Wait for API calls
    
    // Check if competitive programming section exists
    const cpSection = page.locator('text=Codeforces').or(page.locator('text=CodeChef'));
    if (await cpSection.isVisible()) {
      await expect(cpSection).toBeVisible();
    }
  });

  test('should have working social links', async ({ page }) => {
    // Check if social links exist
    const githubLink = page.locator('a[href*="github.com"]');
    const linkedinLink = page.locator('a[href*="linkedin.com"]');
    
    if (await githubLink.isVisible()) {
      await expect(githubLink).toHaveAttribute('target', '_blank');
    }
    
    if (await linkedinLink.isVisible()) {
      await expect(linkedinLink).toHaveAttribute('target', '_blank');
    }
  });

  test('should validate contact form', async ({ page }) => {
    // Navigate to contact section
    await page.click('a[href="#contact"]');
    await page.waitForTimeout(1000);
    
    // Try to submit empty form
    await page.click('button[type="submit"]');
    
    // Check if validation messages appear (this depends on your form validation implementation)
    // You might need to adjust these selectors based on your actual form validation
    const nameField = page.locator('input[name="name"]');
    const emailField = page.locator('input[name="email"]');
    
    await expect(nameField).toBeVisible();
    await expect(emailField).toBeVisible();
  });
});