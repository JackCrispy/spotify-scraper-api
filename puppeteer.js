const puppeteer = require('puppeteer')

async function getMonthlyListeners(UUID) {
	try {
		const URL = 'https://open.spotify.com/artist/'+UUID
		const browser = await puppeteer.launch()

		const page = await browser.newPage()
		await page.goto(URL, {
            waitUntil: "networkidle0",
        })
        //Ydwa1P5GkCggtLlSvphs
        
        //identify element with class name
        const listenersElement = await page.$(".Ydwa1P5GkCggtLlSvphs")
        //obtain text
        let amount = await (await listenersElement.getProperty('textContent')).jsonValue()
		amount = amount.replace(/\D/g,'');
		amount = parseInt(amount)

		await browser.close()

        return amount
	} catch (error) {
		console.error(error)
		return error;
	}
}

module.exports = {
	getMonthlyListeners
}