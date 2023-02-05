import path from "path";

describe("index.html", () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, "../docs/index.html")}`;
    await page.setViewport({'width': 1920, 'height': 1080 });
    await page.goto(URL);
  });

  it("other words", async () => {
    await page.evaluate(() => setWords('bed', 'bath', 'Fred', 'edict', 'elephant'));
    await page.click('#show');

    await page.waitForSelector('#otherwords');
    let element = await page.$('#otherwords');
    let value = await page.evaluate(el => el.innerText, element);
    expect(value).toBe( 'bath\nelephant' );
  });
});
