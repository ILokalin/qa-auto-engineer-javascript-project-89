import App from '../src/App.jsx'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect, beforeEach, vi } from 'vitest'
import { AppPage } from '../pages/app-page.js'
import { WidgetPage } from '../pages/widget-page.js'

beforeEach(() => {
  render(<App />)
})

test('Check if form renders correctly', () => {
  const appPage = new AppPage(screen)
  appPage.checkRegisterButton()
})

test('Check process of filling the form with the data', async () => {
  const user = userEvent.setup()
  const appPage = new AppPage(screen)
  await appPage.inputEmailField(user, 'testemail@mail.ru')
  expect(appPage.inputEmail).toHaveValue('testemail@mail.ru')
  await appPage.inputPassField(user, 'superPassword1')
  expect(appPage.inputPassword).toHaveValue('superPassword1')
  await appPage.inputAdressField(user, 'Adress')
  expect(appPage.inputAddress).toHaveValue('Adress')
  await appPage.inputCityField(user, 'Moscow')
  expect(appPage.inputCity).toHaveValue('Moscow')
  await appPage.selectCountryField(user, ['Россия'])
  expect(appPage.selectCountry).toHaveValue('Россия')
  expect(appPage.checkbox).toBeInTheDocument()
  await appPage.selectCheckboxField(user)
  await appPage.clickRegisterButton(user)
  appPage.checkBackButton()
  await appPage.clickBackButton(user)
  appPage.checkRegisterButton()
})

test('Check chat functions', async () => {
  const user = userEvent.setup()
  window.HTMLElement.prototype.scrollIntoView = vi.fn()
  const widgetPage = new WidgetPage(screen)
  await widgetPage.clickOpenChatButton(user)
  await widgetPage.clickStartConversationButton(user)
  widgetPage.checkTextStartConversation()
  widgetPage.checkChangeProfessionButton()
  widgetPage.checkTryITButton()
  widgetPage.checkDeveloperButton()
  await widgetPage.clickCloseButton(user)
  widgetPage.checkOpenChatButton()
})
