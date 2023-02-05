import path from "path";

describe("index.html", () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, "../docs/index.html")}`;
    await page.setViewport({'width': 1920, 'height': 1080 });
    await page.goto(URL);
  });

  it("toggle on", async () => {
    await page.click('#test1');

    await page.waitForSelector('#test1');
    let element = await page.$('#test1');
    let value = await page.evaluate(el => el.classList.contains('table-warning'), element);
    expect(value).toBe( true );
  });
});
