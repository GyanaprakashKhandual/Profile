const puppeteer = require("puppeteer");

(async () => {
    const RESUME_URL = "http://127.0.0.1:5500/resumes/developer/base.resume.developer.html";
    const OUTPUT_FILE = "Full_Stack_Web_Developer.pdf";

    console.log("RESUME PDF GENERATOR STARTED");

    console.log("Launching browser...");

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log(`Opening resume → ${RESUME_URL}`);

    await page.goto(RESUME_URL, {
        waitUntil: "networkidle0",
    });

    // Remove body padding before generating PDF
    await page.evaluate(() => {
        document.body.style.padding = '0';
        document.body.style.margin = '0';
        document.body.style.background = 'transparent';
    });

    console.log("Generating PDF...");

    // Get the exact dimensions of the container
    const dimensions = await page.evaluate(() => {
        const container = document.querySelector('.container');
        return {
            width: container.offsetWidth,
            height: container.offsetHeight
        };
    });

    await page.pdf({
        path: OUTPUT_FILE,
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    console.log(`PDF created successfully: ${OUTPUT_FILE}`);

    await browser.close();

    console.log("Browser closed.");
    console.log("\nTask completed successfully!\n");
})();