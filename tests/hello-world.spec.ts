import { test, expect, Page } from '@playwright/test';

// Helper to get the bounding box center X of an element
async function getElementCenterX(page: Page, selector: string) {
    const box = await page.locator(selector).boundingBox();
    if (!box) throw new Error(`No bounding box for selector: ${selector}`);
    return box.x + box.width / 2;
}

// Helper to get the viewport center X
async function getViewportCenterX(page: Page) {
    const viewport = await page.viewportSize();
    if (!viewport) throw new Error('No viewport size');
    return viewport.width / 2;
}

test('main content is visually center aligned', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Check logo is horizontally centered
    const logoCenter = await getElementCenterX(page, 'img[alt="The Cube Studio"]');
    const viewportCenter = await getViewportCenterX(page);
    expect(Math.abs(logoCenter - viewportCenter)).toBeLessThanOrEqual(2);

    // Check main heading is centered
    const h1Center = await getElementCenterX(page, 'h1');
    expect(Math.abs(h1Center - viewportCenter)).toBeLessThanOrEqual(2);

    // Check contact info is centered
    const contactCenter = await getElementCenterX(page, ':has-text("Contact:")');
    expect(Math.abs(contactCenter - viewportCenter)).toBeLessThanOrEqual(2);
});

test('all draggable cubes are horizontally centered', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const cubes = page.locator('canvas'); // Assuming DraggableCube renders a <canvas>
    const count = await cubes.count();
    const viewportCenter = await getViewportCenterX(page);

    for (let i = 0; i < count; i++) {
        const cubeCenter = await getElementCenterX(page, `canvas:nth-of-type(${i + 1})`);
        expect(Math.abs(cubeCenter - viewportCenter)).toBeLessThanOrEqual(2);
    }
});

test('logo, headings, and contact info are visible', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page.locator('img[alt="The Cube Studio"]')).toBeVisible();
    await expect(page.locator('h1')).toHaveText(/Where creativity meets clarity/i);
    await expect(page.locator('h2')).toHaveText(/Design. Strategy. Impact./i);
    await expect(page.locator(':has-text("Contact:")')).toBeVisible();
    await expect(page.locator('text=info@thecubestudio.in')).toBeVisible();
});

test('under construction notice is present and styled', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const notice = page.locator('.glowing-border');
    await expect(notice).toBeVisible();
    await expect(notice).toContainText(/Website under construction/i);
});

test('responsive layout: logo and heading remain centered on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone X size
    await page.goto('http://localhost:3000');

    const logoCenter = await getElementCenterX(page, 'img[alt="The Cube Studio"]');
    const viewportCenter = await getViewportCenterX(page);
    expect(Math.abs(logoCenter - viewportCenter)).toBeLessThanOrEqual(2);

    const h1Center = await getElementCenterX(page, 'h1');
    expect(Math.abs(h1Center - viewportCenter)).toBeLessThanOrEqual(2);
});