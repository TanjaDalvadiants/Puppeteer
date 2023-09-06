let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub',{timeout: 30000});
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content",{timeout: 30000});
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team",{timeout: 30000})
  });
});
describe("My tests", () => {
  
  test("Actions page", async () => {
    await page.goto("https://github.com/features/actions");
    const titleFeatures = await page.title();
    expect(titleFeatures).toEqual("Features • GitHub Actions · GitHub", {timeout: 30000});
  });

  test("Package page", async () => {
    await page.goto("https://github.com/features/packages");
    const titleCodespace = await page.title();
    expect(titleCodespace).toEqual('GitHub Packages: Your packages, at home with their code · GitHub', {timeout: 70000})
  });

  test("Security page", async () => {
    await page.goto("https://github.com/features/security");
    const titlePricing = await page.title();
    expect(titlePricing).toEqual('Features · Security · GitHub', {timeout: 30000})
  });
});