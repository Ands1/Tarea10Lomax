const playwright = require("playwright")
const config = require("../config/development2.js")
var faker = require('faker');


function demo(browserType = "chromium") {
    (async () => {

        //launch a new browser
        const browser = await playwright [browserType].launch({ headless:false});
        const context = await browser.newContext();
        const page = await context.newPage();

        //go to projects page and wait for it to load
        await page.goto(config.url.base_path)
        await page.waitForLoadState()
        await page.waitForTimeout(2000)

        //Go to cars indexe
        await page.goto(config.url.base_path + '/cars')
        await page.waitForLoadState()
        await page.waitForTimeout(2000)

        //go to car creation
        await page.click('text=New Car');

        await page.goto(config.url.base_path + '/cars/new')
        await page.waitForLoadState();
        await page.waitForTimeout(2000)

        //fill inputs
        page.fill(`#car_model` , faker.datatype.number({min: 1970, max: 2022}).toString())
        //console.log (`#car_model` , faker.random.arrayElement([1990, 2021]))
        //console.log (`#car_model` , faker.vehicle.model())
        await page.waitForTimeout(200);
        page.fill(`#car_brand`, faker.vehicle.manufacturer())
        await page.waitForTimeout(200);
        page.fill(`#car_driverid`, faker.datatype.number({min: 1, max: 2000}).toString())
        await page.waitForTimeout(200);
        page.fill(`#car_code`, faker.datatype.hexaDecimal())
        await page.waitForTimeout(200);
        page.fill(`#car_alias`, faker.name.firstName())
        await page.waitForTimeout(200);

        page.click('input[name=commit]') //create car
        await page.waitForTimeout();
        await page.waitForTimeout(2000);

        //go to cars index
        await page.goto(config.url.base_path + '/cars')

        //SEGUNDA PRUEBA

        //Go to cars indexe
        await page.goto(config.url.base_path + '/cars')
        await page.waitForLoadState()
        await page.waitForTimeout(2000)

        //go to car creation
        await page.click('text=New Car');

        await page.goto(config.url.base_path + '/cars/new')
        await page.waitForLoadState();
        await page.waitForTimeout(2000)

        //fill inputs
        page.fill(`#car_model` , faker.datatype.number({min: 1970, max: 2022}).toString())
        //console.log (`#car_model` , faker.random.arrayElement([1990, 2021]))
        //console.log (`#car_model` , faker.vehicle.model())
        await page.waitForTimeout(200);
        page.fill(`#car_brand`, faker.vehicle.manufacturer())
        await page.waitForTimeout(200);
        page.fill(`#car_driverid`, faker.datatype.number({min: 1, max: 2000}).toString())
        await page.waitForTimeout(200);
        page.fill(`#car_code`, faker.datatype.hexaDecimal())
        await page.waitForTimeout(200);
        page.fill(`#car_alias`, faker.name.firstName())
        await page.waitForTimeout(200);

        page.click('input[name=commit]') //create car
        await page.waitForTimeout();
        await page.waitForTimeout(2000);

        //go to cars index
        await page.goto(config.url.base_path + '/cars')

        //TERCERA PRUEBA

        //Go to cars indexe
        await page.goto(config.url.base_path + '/cars')
        await page.waitForLoadState()
        await page.waitForTimeout(2000)

        //go to car creation
        await page.click('text=New Car');

        await page.goto(config.url.base_path + '/cars/new')
        await page.waitForLoadState();
        await page.waitForTimeout(2000)

        //fill inputs
        page.fill(`#car_model` , faker.datatype.number({min: 1970, max: 2022}).toString())
        //console.log (`#car_model` , faker.random.arrayElement([1990, 2021]))
        //console.log (`#car_model` , faker.vehicle.model())
        await page.waitForTimeout(200);
        page.fill(`#car_brand`, faker.vehicle.manufacturer())
        await page.waitForTimeout(200);
        page.fill(`#car_driverid`, faker.datatype.number({min: 1, max: 2000}).toString())
        await page.waitForTimeout(200);
        page.fill(`#car_code`, faker.datatype.hexaDecimal())
        await page.waitForTimeout(200);
        page.fill(`#car_alias`, faker.name.firstName())
        await page.waitForTimeout(200);

        page.click('input[name=commit]') //create car
        await page.waitForTimeout();
        await page.waitForTimeout(2000);

        //go to cars index
        await page.goto(config.url.base_path + '/cars')

        //CUARTA PRUEBA

        //Go to cars indexe
        await page.goto(config.url.base_path + '/cars')
        await page.waitForLoadState()
        await page.waitForTimeout(2000)

        //go to car creation
        await page.click('text=New Car');

        await page.goto(config.url.base_path + '/cars/new')
        await page.waitForLoadState();
        await page.waitForTimeout(2000)

        //fill inputs
        page.fill(`#car_model` , faker.datatype.number({min: 1970, max: 2022}).toString())
        //console.log (`#car_model` , faker.random.arrayElement([1990, 2021]))
        //console.log (`#car_model` , faker.vehicle.model())
        await page.waitForTimeout(200);
        page.fill(`#car_brand`, faker.vehicle.manufacturer())
        await page.waitForTimeout(200);
        page.fill(`#car_driverid`, faker.datatype.number({min: 1, max: 2000}).toString())
        await page.waitForTimeout(200);
        page.fill(`#car_code`, faker.datatype.hexaDecimal())
        await page.waitForTimeout(200);
        page.fill(`#car_alias`, faker.name.firstName())
        await page.waitForTimeout(200);

        page.click('input[name=commit]') //create car
        await page.waitForTimeout();
        await page.waitForTimeout(2000);

        //go to cars index
        await page.goto(config.url.base_path + '/cars')

    })()
}

demo()