async function safeGoto(page, path, timeout = 30000) {
  const response = await page.goto(path, {
    waitUntil: 'domcontentloaded',
    timeout,
  });

  return response;
}

async function typeText(locator, text, testInfo) {
  const delay = testInfo.project.use.headless === false ? 120 : 0;
  await locator.pressSequentially(text, { delay });
}

function normalizeUrl(url) {
  if (!url) {
    return '';
  }

  return new URL(url, 'https://www.geeksforgeeks.org').href;
}

function isGfgUrl(url) {
  return /^https?:\/\/(www\.)?geeksforgeeks\.org\//i.test(url || '');
}

module.exports = { safeGoto, typeText, normalizeUrl, isGfgUrl };
