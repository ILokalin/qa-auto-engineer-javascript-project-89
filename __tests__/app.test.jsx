import { fireEvent, cleanup } from '@testing-library/react'
import { test, vi, beforeEach, afterEach, describe, expect } from 'vitest'
import Widget from './pages/Widget'
import App from './pages/App'
import steps from '../__fixtures__/steps'

beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn()
})

afterEach(() => {
  cleanup()
})

describe('Widget Tests', () => {
  test('Init state', () => {
    Widget.renderWidget(steps)
    expect(Widget.startButton).toBeVisible()
  })

  test('Update steps', () => {
    Widget.renderWidget(steps)
    Widget.clickStartButton()
    Widget.clickConversationButton()
    Widget.expectOptionsVisible()
  })

  test('Scrolls to the new message when it is added', () => {
    Widget.renderWidget(steps)
    Widget.clickStartButton()
    expect(Widget.startButton).toBeVisible()
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledTimes(1)
  })
})

describe('App Integration Tests', () => {
  test('Open and close modal window', async () => {
    App.renderApp()
    App.openWidget()
    App.expectModalTitle()
    App.closeWidget()
    await App.waitForModalToClose()
  })

  test('Widget does not cause errors when integrated into the App', () => {
    expect(() => App.renderApp()).not.toThrow()
  })

  test('Widget renders within the App component', () => {
    App.renderApp()
    expect(Widget.startButton).toBeVisible()
  })

  test('Form input fields are functional', () => {
    App.renderApp()
    App.fillOutForm()
    App.submitForm()
    App.expectFormSubmission()
  })

  test('Widget does not affect the functionality of the application', () => {
    App.renderApp()
    const emailInput = App.getFormInputLabel('email')
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    expect(emailInput.value).toBe('test@example.com')
    Widget.clickStartButton()
    Widget.clickConversationButton()
    Widget.expectOptionsVisible()
    expect(emailInput.value).toBe('test@example.com')
    App.submitForm()
    App.expectFormSubmission()
  })
})
