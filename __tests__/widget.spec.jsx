import Widget from '@hexlet/chatbot-v2'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, describe, beforeEach, vi } from 'vitest'
import { WidgetPage } from '../pages/widget-page.js'
import steps from '../__fixtures__/steps.js'
import errorSteps from '../__fixtures__/error-steps.js'

describe('Widget positive', () => {
  beforeEach(() => {
    render(Widget(steps))
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  test('Check correct page displaying', () => {
    const widgetPage = new WidgetPage(screen)
    widgetPage.checkOpenChatButton()
  })

  test('Check open chat button', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    widgetPage.checkTextOpenChat()
    widgetPage.checkStartConversationButton()
  })

  test('Check starting the conversation', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    widgetPage.checkTextStartConversation()
    widgetPage.checkChangeProfessionButton()
    widgetPage.checkTryITButton()
    widgetPage.checkDeveloperButton()
  })

  test('Check сhange profession or find employment section', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    widgetPage.checkTextChangeProfession()
    widgetPage.checkTellMoreButton()
    widgetPage.checkSimplerButton()
    widgetPage.checkBackButton()
  })

  test('Check try yourself in IT section', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickTryITButton(user)
    widgetPage.checkTextTryIT()
    widgetPage.checkInterestingButton()
    widgetPage.checkChangingProfessionsButton()
    widgetPage.checkGoBackButton()
  })

  test('Check I am a developer, I want to deepen my knowledge section', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickDeveloperButton(user)
    widgetPage.checkTextDeveloperText1()
    widgetPage.checkTextDeveloperText2()
    widgetPage.checkTellMoreButton()
    widgetPage.checkTakeMeBackButton()
  })

  test('Check tell me more section', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    await widgetPage.clickTellMoreButton(user)
    widgetPage.checkTextTellMoreText1()
    widgetPage.checkTextTellMoreText2()
    widgetPage.checkStayHereButton()
    widgetPage.checkBackButton()
  })

  test('Check something simpler section', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    await widgetPage.clickSimplerButton(user)
    widgetPage.checkTextSimpler()
    widgetPage.checkInterestingButton()
    widgetPage.checkChangingProfessionsButton()
    widgetPage.checkGoBackButton()
  })

  test('Check return to top function', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    await widgetPage.clickBackButton(user)
    widgetPage.checkChangeProfessionButton()
    widgetPage.checkTryITButton()
    widgetPage.checkDeveloperButton()
  })

  test('Check stay here and sign up for the course section', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickChangeProfessionButton(user)
    await widgetPage.clickTellMoreButton(user)
    await widgetPage.clickStayHereButton(user)
    widgetPage.checkTextStayHereText1()
    widgetPage.checkTextStayHereText2()
    widgetPage.checkStayHereButton()
    widgetPage.checkTakeMeBackButton()
  })

  test('Check interesting section', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickTryITButton(user)
    await widgetPage.clickInterestingButton(user)
    widgetPage.checkTextInterstingText1()
    widgetPage.checkTextInterstingText2()
    widgetPage.checkStayHereButton()
    widgetPage.checkBackButton()
  })

  test('Check what about changing professions section', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickTryITButton(user)
    await widgetPage.clickChangingProfessionsButton(user)
    widgetPage.checkChangingProfessionsText()
    widgetPage.checkTellMoreButton()
    widgetPage.checkSimplerButton()
    widgetPage.checkBackButton()
  })

  test('Сheck go back button', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickTryITButton(user)
    await widgetPage.clickGoBackButton(user)
    widgetPage.checkChangeProfessionButton()
    widgetPage.checkTryITButton()
    widgetPage.checkDeveloperButton()
  })

  test('Сheck tell me more button in I am a developer, I want to deepen my knowledge section', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickDeveloperButton(user)
    await widgetPage.clickTellMoreButton(user)
    widgetPage.checkStartConversationButton()
  })

  test('Сheck go back button in I am a developer, I want to deepen my knowledge section', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickDeveloperButton(user)
    await widgetPage.clickTakeMeBackButton(user)
    widgetPage.checkChangeProfessionButton()
    widgetPage.checkTryITButton()
    widgetPage.checkDeveloperButton()
  })

  test('Check close button', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickCloseButton(user)
    widgetPage.checkOpenChatButton()
  })
})

describe('Widget negative', () => {
  test('Check interface, negative version', async () => {
    const user = userEvent.setup()
    const widgetPage = new WidgetPage(screen)
    render(Widget(errorSteps))
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
    await widgetPage.clickOpenChatButton(user)
    await widgetPage.clickStartConversationButton(user)
    await widgetPage.clickTryITButton(user)
    await user.click(screen.getByRole('button', { name: '' }))
    await widgetPage.clickChangeProfessionButton(user)
    await widgetPage.clickCloseButton(user)
    widgetPage.checkOpenChatButton()
  })
})
