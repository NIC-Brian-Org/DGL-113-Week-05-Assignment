import path from "path";

describe("index.html", () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, "../docs/index.html")}`;
    await page.setViewport({'width': 1920, 'height': 1080 });
    await page.goto(URL);
  });

  it("copy selected", async () => {
    await page.click('#test1');

    await page.waitForSelector('#selectedcellvalue');
    let element = await page.$('#selectedcellvalue');
    let value = await page.evaluate(el => el.innerText, element);
    expect(value).toBe( '24,006' );

    await page.click('#test2');

    await page.waitForSelector('#selectedcellvalue');
    element = await page.$('#selectedcellvalue');
    value = await page.evaluate(el => el.innerText, element);
    expect(value).toBe( '89' );
  });
});
