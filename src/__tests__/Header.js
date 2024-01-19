// import {BrowserRouter} from 'react-router-dom'
// import {render, screen} from '@testing-library/react'

// import {setupServer} from 'msw/node'
// import {rest} from 'msw'

// import userEvent from '@testing-library/user-event'

// import App from '../App'

// const homeRoutePath = '/'
// const aboutRoutePath = '/about'

// const countryLevelCovidDashboardDataUrl =
//   'https://apis.ccbp.in/covid19-state-wise-data'

// const faqsUrl = 'https://apis.ccbp.in/covid19-faqs'

// const countryLevelDashboardResponse = {
//   AN: {
//     meta: {
//       population: 100000,
//     },
//     districts: {
//       Nicobars: {
//         total: {
//           vaccinated1: 22280,
//           vaccinated2: 8483,
//         },
//       },
//       'North and Middle Andaman': {
//         total: {
//           vaccinated1: 75270,
//           vaccinated2: 32482,
//         },
//       },
//       'South Andaman': {
//         total: {
//           vaccinated1: 166658,
//           vaccinated2: 69149,
//         },
//       },
//       Unknown: {
//         total: {
//           confirmed: 7573,
//           deceased: 129,
//           recovered: 7437,
//         },
//       },
//     },
//     total: {
//       confirmed: 7573,
//       deceased: 129,
//       recovered: 7437,
//       tested: 504146,
//       active: 7,
//       vaccinated1: 264215,
//       vaccinated2: 110115,
//     },
//   },
//   AP: {
//     meta: {
//       population: 100000,
//     },
//     districts: {
//       Chittoor: {
//         total: {
//           confirmed: 239599,
//           deceased: 1864,
//           recovered: 235712,
//           tested: 780322,
//           vaccinated1: 1937900,
//           vaccinated2: 946960,
//         },
//       },
//       'East Godavari': {
//         total: {
//           confirmed: 287007,
//           deceased: 1264,
//           recovered: 283566,
//           tested: 944746,
//           vaccinated1: 2330355,
//           vaccinated2: 786995,
//         },
//       },
//       Guntur: {
//         total: {
//           confirmed: 173372,
//           deceased: 1186,
//           recovered: 171147,
//           tested: 833823,
//           vaccinated1: 2114861,
//           vaccinated2: 823621,
//         },
//       },
//       Krishna: {
//         total: {
//           confirmed: 114688,
//           deceased: 1332,
//           recovered: 111380,
//           tested: 782232,
//           vaccinated1: 2096923,
//           vaccinated2: 835709,
//         },
//       },
//       Kurnool: {
//         total: {
//           confirmed: 123888,
//           deceased: 850,
//           recovered: 122926,
//           tested: 867361,
//           vaccinated1: 1575498,
//           vaccinated2: 687943,
//         },
//       },
//       'Other State': {
//         total: {
//           confirmed: 2461,
//           recovered: 2461,
//         },
//       },
//       Prakasam: {
//         total: {
//           confirmed: 134506,
//           deceased: 1060,
//           recovered: 131168,
//           tested: 697340,
//           vaccinated1: 1477656,
//           vaccinated2: 733527,
//         },
//       },
//       'S.P.S. Nellore': {
//         total: {
//           confirmed: 141403,
//           deceased: 1014,
//           recovered: 138194,
//           tested: 682964,
//           vaccinated1: 1423798,
//           vaccinated2: 707157,
//         },
//       },
//       Srikakulam: {
//         total: {
//           confirmed: 122276,
//           deceased: 779,
//           recovered: 121145,
//           tested: 670899,
//           vaccinated1: 1221192,
//           vaccinated2: 525268,
//         },
//       },
//       Visakhapatnam: {
//         total: {
//           confirmed: 155421,
//           deceased: 1107,
//           recovered: 153880,
//           tested: 744983,
//           vaccinated1: 2406524,
//           vaccinated2: 883151,
//         },
//       },
//       Vizianagaram: {
//         total: {
//           confirmed: 82531,
//           deceased: 669,
//           recovered: 81716,
//           tested: 531433,
//           vaccinated1: 1114052,
//           vaccinated2: 388287,
//         },
//       },
//       'West Godavari': {
//         total: {
//           confirmed: 175212,
//           deceased: 1087,
//           recovered: 173023,
//           tested: 793098,
//           vaccinated1: 2034472,
//           vaccinated2: 682050,
//         },
//       },
//       'Y.S.R. Kadapa': {
//         delta21_14: {
//           confirmed: 416,
//         },
//         total: {
//           confirmed: 113174,
//           deceased: 631,
//           recovered: 112005,
//           tested: 671761,
//           vaccinated1: 1276835,
//           vaccinated2: 614310,
//         },
//       },
//     },
//     total: {
//       confirmed: 2023242,
//       deceased: 13935,
//       recovered: 1994855,
//       tested: 27037651,
//       active: 14452,
//       vaccinated1: 22756066,
//       vaccinated2: 9448882,
//     },
//   },
// }

// const faqsFixtures = {
//   factoids: [
//     {
//       banner:
//         'This will pass too. Enjoy your time at home and spend quality time with your family! Things will be normal soon.',
//       id: '24',
//     },
//     {
//       banner:
//         '#BreakTheChain of unverified WhatsApp forwards which spread wrong information! Do not forward unless you verify it.',
//       id: '25',
//     },
//   ],
//   faq: [
//     {
//       answer: 'No.',
//       category: 'General',
//       qno: '1',
//       question: 'Are you official?',
//     },
//     {
//       answer:
//         "We are a group of dedicated volunteers who curate and verify the data coming from several sources. We extract the details, like a patient's relationship with other patients to identify local and community transmissions, travel history and status. We never collect or expose any personally identifiable data regarding the patients.",
//       category: 'General',
//       qno: '5',
//       question: 'Who are you?',
//     },
//     {
//       answer:
//         "Because it affects all of us. Today it's someone else who is getting infected; tomorrow it could be us. We need to prevent the spread of this virus. We need to document the data so that people with knowledge can use this data to make informed decisions.",
//       category: 'General',
//       qno: '6',
//       question:
//         'Why are you guys putting in time and resources to do this while not gaining a single penny from it?',
//     },
//   ],
// }

// const andamanConfirmedCasesCount =
//   countryLevelDashboardResponse.AN.total.confirmed

// const server = setupServer(
//   rest.get(countryLevelCovidDashboardDataUrl, (req, res, ctx) =>
//     res(ctx.json(countryLevelDashboardResponse)),
//   ),
//   rest.get(faqsUrl, (req, res, ctx) => res(ctx.json(faqsFixtures))),
// )

// const renderWithBrowserRouter = (ui, {route = homeRoutePath} = {}) => {
//   window.history.pushState({}, 'Test page', route)
//   return render(ui, {wrapper: BrowserRouter})
// }

// describe(':::RJSCPAUCLT_TEST_SUITE_4:::Header Tests', () => {
//   beforeAll(() => {
//     server.listen()
//   })

//   afterEach(() => {
//     server.resetHandlers()
//   })

//   afterAll(() => {
//     server.close()
//   })

//   it(':::RJSCPAUCLT_TEST_16:::Home Route should consist of two HTML unordered list elements to display the list items of Header items and Countrywide covid19 cases:::5:::', async () => {
//     renderWithBrowserRouter(<App />)

//     expect(
//       await screen.findByText(andamanConfirmedCasesCount),
//     ).toBeInTheDocument()

//     const unorderedListItems = await screen.findAllByRole('list')

//     expect(unorderedListItems.length).toBeGreaterThanOrEqual(2)
//   })

//   it(':::RJSCPAUCLT_TEST_17:::Home Route should initially consist of at least 3 HTML list items:::5:::', async () => {
//     renderWithBrowserRouter(<App />)
//     expect(
//       await screen.findByText(andamanConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const listItems = await screen.findAllByRole('listitem')
//     expect(listItems.length).toBeGreaterThanOrEqual(3)
//   })

//   it(':::RJSCPAUCLT_TEST_18:::The Home Route should contain two HTML elements with the text content as "COVID19INDIA":::5:::', async () => {
//     renderWithBrowserRouter(<App />)
//     expect(
//       await screen.findByText(andamanConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const covid19IndiaHeadingElements = screen.getAllByText(/COVID19/i, {
//       exact: false,
//     })

//     expect(covid19IndiaHeadingElements.length).toBeGreaterThanOrEqual(2)
//   })

//   it(':::RJSCPAUCLT_TEST_19:::The Home Route should contain an HTML element with the text content as "COVID19INDIA" wrapped with Link from "react-router-dom":::5:::', async () => {
//     renderWithBrowserRouter(<App />)
//     expect(
//       await screen.findByText(andamanConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const covid19IndiaLinkElement = screen.getByRole('link', {
//       name: /COVID19/i,
//       exact: false,
//     })

//     expect(covid19IndiaLinkElement).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_20:::In the Home Route, clicking on the HTML element with the text content as "COVID19INDIA" should navigate to the Home Route, and response received from the Home Route should be displayed:::10:::', async () => {
//     renderWithBrowserRouter(<App />)

//     const covid19HeadingText = await screen.findByRole('link', {
//       name: /COVID19/i,
//       exact: false,
//     })
//     userEvent.click(covid19HeadingText)
//     expect(
//       await screen.findByText(andamanConfirmedCasesCount),
//     ).toBeInTheDocument()
//     expect(window.location.pathname).toBe(homeRoutePath)
//   })

//   it(':::RJSCPAUCLT_TEST_21:::The Home Route should consist of an HTML button element with the text "Home" wrapped with Link from "react-router-dom":::5:::', async () => {
//     renderWithBrowserRouter(<App />)
//     expect(
//       await screen.findByText(andamanConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const homeButtonElement = screen.getByRole('link', {
//       name: /Home/i,
//       exact: false,
//     })
//     expect(homeButtonElement).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_22:::In the Home Route, clicking on the HTML button element with the text "Home" should navigate to the Home Route and the Home Route should contain the confirmed cases count of the state Andaman Nicobar received from the response:::10:::', async () => {
//     renderWithBrowserRouter(<App />)
//     expect(
//       await screen.findByText(andamanConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const homeButton = screen.getByRole('link', {
//       name: /Home/i,
//       exact: false,
//     })
//     userEvent.click(homeButton)
//     expect(
//       await screen.findByText(andamanConfirmedCasesCount),
//     ).toBeInTheDocument()
//     expect(window.location.pathname).toBe(homeRoutePath)
//   })
//   it(':::RJSCPAUCLT_TEST_23:::The Home Route should consist of an HTML button element with the text "About" wrapped with Link from "react-router-dom":::5:::', async () => {
//     renderWithBrowserRouter(<App />)
//     expect(
//       await screen.findByText(andamanConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const aboutButton = screen.getByRole('link', {
//       name: /About/i,
//       exact: false,
//     })

//     expect(aboutButton).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_24:::In the Home Route, clicking on the HTML button element with the text "About" should navigate to the About Route and the About Route should consist of an HTML unordered list element with testid attribute value as "faqsUnorderedList":::10:::', async () => {
//     renderWithBrowserRouter(<App />)
//     expect(
//       await screen.findByText(andamanConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const aboutButton = await screen.findByRole('link', {
//       name: /About/i,
//       exact: false,
//     })
//     userEvent.click(aboutButton)
//     expect(await screen.findByTestId('faqsUnorderedList')).toBeInTheDocument()
//     expect(window.location.pathname).toBe(aboutRoutePath)
//   })
// })
