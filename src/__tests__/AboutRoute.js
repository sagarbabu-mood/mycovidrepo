import {BrowserRouter} from 'react-router-dom'
import {setupServer} from 'msw/node'
import {rest} from 'msw'
import {
  render,
  screen,
  within,
  waitForElementToBeRemoved,
} from '@testing-library/react'

import App from '../App'

const faqsFixtures = {
  factoids: [
    {
      banner:
        'This will pass too. Enjoy your time at home and spend quality time with your family! Things will be normal soon.',
      id: '24',
    },
    {
      banner:
        '#BreakTheChain of unverified WhatsApp forwards which spread wrong information! Do not forward unless you verify it.',
      id: '25',
    },
  ],
  faq: [
    {
      answer: 'No.',
      category: 'General',
      qno: '1',
      question: 'Are you official?',
    },
    {
      answer:
        "We are a group of dedicated volunteers who curate and verify the data coming from several sources. We extract the details, like a patient's relationship with other patients to identify local and community transmissions, travel history and status. We never collect or expose any personally identifiable data regarding the patients.",
      category: 'General',
      qno: '5',
      question: 'Who are you?',
    },
  ],
}

const aboutRoutePath = '/about'

const faqsUrl = 'https://apis.ccbp.in/covid19-faqs'

const server = setupServer(
  rest.get(faqsUrl, (req, res, ctx) => res(ctx.json(faqsFixtures))),
)

const renderWithBrowserRouter = (
  ui = <App />,
  {route = aboutRoutePath} = {},
) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, {wrapper: BrowserRouter})
}

const firstQuestionText = faqsFixtures.faq[0].question

describe(':::RJSCPAUCLT_TEST_SUITE_1:::About Route Tests', () => {
  beforeAll(() => {
    server.listen()
  })

  afterEach(() => {
    server.resetHandlers()
    jest.spyOn(window, 'fetch').mockRestore()
    jest.spyOn(console, 'error').mockRestore()
  })

  afterAll(() => {
    server.close()
  })

  it(':::RJSCPAUCLT_TEST_1:::In the About Route, when the HTTP GET request of FAQs API is successful, then the About Route list items should be rendered using a unique key as a prop for each similar list item:::10:::', async () => {
    const consoleSpy = jest.spyOn(console, 'error')
    renderWithBrowserRouter()
    expect(await screen.findByText(firstQuestionText)).toBeInTheDocument()
    expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(2)
    expect(consoleSpy).not.toHaveBeenCalledWith(
      expect.stringMatching(/Each child in a list should have a unique/),
      expect.anything(),
      expect.anything(),
      expect.anything(),
    )
    expect(consoleSpy).not.toHaveBeenCalledWith(
      expect.stringMatching(/Encountered two children with the same key/),
      expect.anything(),
      expect.anything(),
    )
    consoleSpy.mockRestore()
  })

  it(':::RJSCPAUCLT_TEST_2:::When the HTTP GET request of the About Route is in progress, then the page should consist of the HTML container element with the testid attribute value "aboutRouteLoader" should be displayed:::5:::', async () => {
    renderWithBrowserRouter()
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId('aboutRouteLoader'),
    )
  })

  it(':::RJSCPAUCLT_TEST_3:::When the About Route is opened, then an HTTP GET request should be made to covid19 FAQs API with the given covid19 FAQs API URL and the page should consist of an HTML element with the text content as value of the key "question" from HTTP GET FAQs API Call response:::10:::', async () => {
    const fetchSpy = jest.spyOn(window, 'fetch').mockImplementation(() => ({
      ok: true,
      json: () => Promise.resolve(faqsFixtures),
    }))
    renderWithBrowserRouter(<App />, aboutRoutePath)
    expect(await screen.findByText(firstQuestionText)).toBeInTheDocument()
    expect(fetchSpy.mock.calls[0][0]).toMatch(faqsUrl)
    fetchSpy.mockRestore()
  })

  it(':::RJSCPAUCLT_TEST_4:::In the About Route, when the HTTP GET request is successful, then the page should consist of an HTML unordered list element with testid attribute value as "faqsUnorderedList" to display the fetched FAQs:::5:::', async () => {
    renderWithBrowserRouter()
    const unorderedListElement = await screen.findByTestId('faqsUnorderedList')
    expect(unorderedListElement.tagName).toBe('UL')
  })

  it(':::RJSCPAUCLT_TEST_5:::In the About Route, when the HTTP GET request is successful, then the page should contain the fetched FAQs number of list items in the HTML unordered list element with testid attribute value as "faqsUnorderedList":::10:::', async () => {
    renderWithBrowserRouter()
    const faqsUnorderedList = await screen.findByTestId('faqsUnorderedList')
    expect(faqsUnorderedList.tagName).toBe('UL')

    expect(within(faqsUnorderedList).getAllByRole('listitem').length).toBe(
      faqsFixtures.faq.length,
    )
  })

  it(':::RJSCPAUCLT_TEST_6:::In the About Route, when the HTTP GET request is successful, then the page should contain the fetched FAQs in the HTML unordered list element with testid attribute value as "faqsUnorderedList":::10:::', async () => {
    renderWithBrowserRouter()
    const faqsUnorderedList = await screen.findByTestId('faqsUnorderedList')
    const listItems = within(faqsUnorderedList).getAllByRole('listitem')
    expect(faqsUnorderedList.tagName).toBe('UL')

    expect(
      within(listItems[0]).getByText(faqsFixtures.faq[0].question),
    ).toBeInTheDocument()
    expect(
      within(listItems[0]).getByText(faqsFixtures.faq[0].answer),
    ).toBeInTheDocument()
    expect(
      within(listItems[1]).getByText(faqsFixtures.faq[1].question),
    ).toBeInTheDocument()
    expect(
      within(listItems[1]).getByText(faqsFixtures.faq[1].answer),
    ).toBeInTheDocument()
  })
})
