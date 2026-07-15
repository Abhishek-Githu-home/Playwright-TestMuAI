const { test, expect } = require('@playwright/test')
const data = require('../Fixtures/TestData.js')

test.describe("Assignment Task: Playwright 101", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(data.UserURL)
        await expect(page).toHaveTitle(data.Title)
    })

    test("Verification of @TestScenario-1", async ({ page }) => {

        await expect(page).toHaveURL(/.*\/selenium-playground\//);

        const pageTitle = await page.locator('h1.font-bold').textContent()
        console.log("The pageTitle is :", pageTitle)

        await page.getByRole('link', { name: 'Simple Form Demo' }).click()
        await page.waitForURL(/.*\/simple-form-demo\//)
        await page.waitForLoadState('networkidle')

        await expect(page).toHaveURL(/.*\/simple-form-demo\//)

        await page.getByPlaceholder('Please enter your Message').fill(data.VariableValue)
        const CheckValue = page.locator('#showInput').first()
        await CheckValue.click({force : true})
        await page.waitForLoadState('domcontentloaded', {timeout : 10000})

        const Input = page.locator('.w-4\\/12').first()
        console.log("The provided input is : ", data.VariableValue)
        await expect(Input).toHaveText(`Your Message: ${data.VariableValue}`)
    })

    test("Verification of @TestScenario-2", async ({ page }) => {

        await page.getByText('Drag & Drop Sliders', { exact: true }).click()
        await page.waitForLoadState('domcontentloaded')

        await expect(page).toHaveURL(/drag-drop-range-sliders-demo/)

        const Slider = page.locator('#slider3').getByRole('slider')
        await Slider.hover()
        const Range = page.locator('#rangeSuccess')
        await expect(Range).toHaveText('15')
        console.log ("The Default value is :", await Range.innerText())
        await Slider.fill(data.MoveSlider)

        await expect(Slider).toHaveValue(data.MoveSlider)
    })

    test("Verification of @TestScenario-3", async ({ page }) => {
        await page.getByRole('link', { name: 'Input Form Submit' }).click()

        const Headline = await page.locator('.container').first().innerText()
        console.log("The Headline is : ", Headline)

        await page.locator('#name').fill(data.Username)
        await page.getByRole('textbox', { name: 'email' }).fill(data.Email)
        await page.getByLabel('Password').fill(data.Password)
        await page.getByPlaceholder('Company').fill(data.Company)
        await page.locator('#websitename').fill(data.UserURL)
        await page.locator('select[name="country"]').selectOption(data.Country)
        await page.getByPlaceholder('City').fill(data.City)
        await page.getByRole('textbox', {name : 'Address 1'}).fill(data.Address1)
        await page.locator('#inputAddress2').fill(data.Address2)
        await page.locator('#inputState').fill(data.State)
        await page.getByPlaceholder('Zip code').fill(data.pincode)

        await page.getByRole('button', { name: 'Submit' }).click()

        const SuccessMessage = await page.locator('.success-msg').innerText()
        expect(SuccessMessage).toMatch(data.SuccessNotification)
        console.log(SuccessMessage)
    })
})