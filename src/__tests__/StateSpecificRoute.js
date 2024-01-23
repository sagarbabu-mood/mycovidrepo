// import {BrowserRouter} from 'react-router-dom'
// import {setupServer} from 'msw/node'
// import {rest} from 'msw'

// import {
//   render,
//   screen,
//   within,
//   waitFor,
//   waitForElementToBeRemoved,
// } from '@testing-library/react'

// import userEvent from '@testing-library/user-event'

// import App from '../App'

// const statesList = [
//   {
//     state_code: 'AN',
//     state_name: 'Andaman and Nicobar Islands',
//   },
//   {
//     state_code: 'AP',
//     state_name: 'Andhra Pradesh',
//   },
//   {
//     state_code: 'AR',
//     state_name: 'Arunachal Pradesh',
//   },
//   {
//     state_code: 'AS',
//     state_name: 'Assam',
//   },
//   {
//     state_code: 'BR',
//     state_name: 'Bihar',
//   },
//   {
//     state_code: 'CH',
//     state_name: 'Chandigarh',
//   },
//   {
//     state_code: 'CT',
//     state_name: 'Chhattisgarh',
//   },
//   {
//     state_code: 'DN',
//     state_name: 'Dadra and Nagar Haveli and Daman and Diu',
//   },
//   {
//     state_code: 'DL',
//     state_name: 'Delhi',
//   },
//   {
//     state_code: 'GA',
//     state_name: 'Goa',
//   },
//   {
//     state_code: 'GJ',
//     state_name: 'Gujarat',
//   },
//   {
//     state_code: 'HR',
//     state_name: 'Haryana',
//   },
//   {
//     state_code: 'HP',
//     state_name: 'Himachal Pradesh',
//   },
//   {
//     state_code: 'JK',
//     state_name: 'Jammu and Kashmir',
//   },
//   {
//     state_code: 'JH',
//     state_name: 'Jharkhand',
//   },
//   {
//     state_code: 'KA',
//     state_name: 'Karnataka',
//   },
//   {
//     state_code: 'KL',
//     state_name: 'Kerala',
//   },
//   {
//     state_code: 'LA',
//     state_name: 'Ladakh',
//   },
//   {
//     state_code: 'LD',
//     state_name: 'Lakshadweep',
//   },
//   {
//     state_code: 'MP',
//     state_name: 'Madhya Pradesh',
//   },
//   {
//     state_code: 'MH',
//     state_name: 'Maharashtra',
//   },
//   {
//     state_code: 'MN',
//     state_name: 'Manipur',
//   },
//   {
//     state_code: 'ML',
//     state_name: 'Meghalaya',
//   },
//   {
//     state_code: 'MZ',
//     state_name: 'Mizoram',
//   },
//   {
//     state_code: 'NL',
//     state_name: 'Nagaland',
//   },
//   {
//     state_code: 'OR',
//     state_name: 'Odisha',
//   },
//   {
//     state_code: 'PY',
//     state_name: 'Puducherry',
//   },
//   {
//     state_code: 'PB',
//     state_name: 'Punjab',
//   },
//   {
//     state_code: 'RJ',
//     state_name: 'Rajasthan',
//   },
//   {
//     state_code: 'SK',
//     state_name: 'Sikkim',
//   },
//   {
//     state_code: 'TN',
//     state_name: 'Tamil Nadu',
//   },
//   {
//     state_code: 'TG',
//     state_name: 'Telangana',
//   },
//   {
//     state_code: 'TR',
//     state_name: 'Tripura',
//   },
//   {
//     state_code: 'UP',
//     state_name: 'Uttar Pradesh',
//   },
//   {
//     state_code: 'UT',
//     state_name: 'Uttarakhand',
//   },
//   {
//     state_code: 'WB',
//     state_name: 'West Bengal',
//   },
// ]

// const stateIds = {
//   states: [
//     {
//       state_id: 1,
//       state_name: 'Andaman and Nicobar Islands',
//     },
//     {
//       state_id: 2,
//       state_name: 'Andhra Pradesh',
//     },
//     {
//       state_id: 3,
//       state_name: 'Arunachal Pradesh',
//     },
//     {
//       state_id: 4,
//       state_name: 'Assam',
//     },
//     {
//       state_id: 5,
//       state_name: 'Bihar',
//     },
//     {
//       state_id: 6,
//       state_name: 'Chandigarh',
//     },
//     {
//       state_id: 7,
//       state_name: 'Chhattisgarh',
//     },
//     {
//       state_id: 8,
//       state_name: 'Dadra and Nagar Haveli',
//     },
//     {
//       state_id: 37,
//       state_name: 'Daman and Diu',
//     },
//     {
//       state_id: 9,
//       state_name: 'Delhi',
//     },
//     {
//       state_id: 10,
//       state_name: 'Goa',
//     },
//     {
//       state_id: 11,
//       state_name: 'Gujarat',
//     },
//     {
//       state_id: 12,
//       state_name: 'Haryana',
//     },
//     {
//       state_id: 13,
//       state_name: 'Himachal Pradesh',
//     },
//     {
//       state_id: 14,
//       state_name: 'Jammu and Kashmir',
//     },
//     {
//       state_id: 15,
//       state_name: 'Jharkhand',
//     },
//     {
//       state_id: 16,
//       state_name: 'Karnataka',
//     },
//     {
//       state_id: 17,
//       state_name: 'Kerala',
//     },
//     {
//       state_id: 18,
//       state_name: 'Ladakh',
//     },
//     {
//       state_id: 19,
//       state_name: 'Lakshadweep',
//     },
//     {
//       state_id: 20,
//       state_name: 'Madhya Pradesh',
//     },
//     {
//       state_id: 21,
//       state_name: 'Maharashtra',
//     },
//     {
//       state_id: 22,
//       state_name: 'Manipur',
//     },
//     {
//       state_id: 23,
//       state_name: 'Meghalaya',
//     },
//     {
//       state_id: 24,
//       state_name: 'Mizoram',
//     },
//     {
//       state_id: 25,
//       state_name: 'Nagaland',
//     },
//     {
//       state_id: 26,
//       state_name: 'Odisha',
//     },
//     {
//       state_id: 27,
//       state_name: 'Puducherry',
//     },
//     {
//       state_id: 28,
//       state_name: 'Punjab',
//     },
//     {
//       state_id: 29,
//       state_name: 'Rajasthan',
//     },
//     {
//       state_id: 30,
//       state_name: 'Sikkim',
//     },
//     {
//       state_id: 31,
//       state_name: 'Tamil Nadu',
//     },
//     {
//       state_id: 32,
//       state_name: 'Telangana',
//     },
//     {
//       state_id: 33,
//       state_name: 'Tripura',
//     },
//     {
//       state_id: 34,
//       state_name: 'Uttar Pradesh',
//     },
//     {
//       state_id: 35,
//       state_name: 'Uttarakhand',
//     },
//     {
//       state_id: 36,
//       state_name: 'West Bengal',
//     },
//   ],
//   ttl: 24,
// }

// const timeLineFixtures = {
//   AN: {
//     dates: {
//       '2021-09-04': {
//         delta: {
//           confirmed: 2,
//           recovered: 4,
//           tested: 1876,
//           vaccinated1: 1020,
//           vaccinated2: 710,
//         },
//         delta7: {
//           confirmed: 12,
//           recovered: 8,
//           tested: 13186,
//           vaccinated1: 10535,
//           vaccinated2: 4214,
//         },
//         total: {
//           confirmed: 7572,
//           deceased: 129,
//           recovered: 7436,
//           tested: 498055,
//           vaccinated1: 262154,
//           vaccinated2: 108224,
//         },
//       },
//       '2021-09-05': {
//         delta: {
//           recovered: 1,
//           tested: 1924,
//           vaccinated1: 39,
//           vaccinated2: 15,
//         },
//         delta7: {
//           confirmed: 8,
//           recovered: 7,
//           tested: 13035,
//           vaccinated1: 7734,
//           vaccinated2: 3388,
//         },
//         total: {
//           confirmed: 7572,
//           deceased: 129,
//           recovered: 7437,
//           tested: 499979,
//           vaccinated1: 262193,
//           vaccinated2: 108239,
//         },
//       },
//       '2021-09-06': {
//         delta: {tested: 2009, vaccinated1: 864, vaccinated2: 987},
//         delta7: {
//           confirmed: 7,
//           recovered: 6,
//           tested: 13342,
//           vaccinated1: 7252,
//           vaccinated2: 4184,
//         },
//         total: {
//           confirmed: 7572,
//           deceased: 129,
//           recovered: 7437,
//           tested: 501988,
//           vaccinated1: 263057,
//           vaccinated2: 109226,
//         },
//       },
//     },
//   },
//   AP: {
//     dates: {
//       '2021-09-02': {
//         delta: {
//           confirmed: 1378,
//           deceased: 10,
//           recovered: 1139,
//           tested: 59566,
//           vaccinated1: 74670,
//           vaccinated2: 60703,
//         },
//         delta7: {
//           confirmed: 8950,
//           deceased: 99,
//           recovered: 8597,
//           tested: 407089,
//           vaccinated1: 2279562,
//           vaccinated2: 1294981,
//         },
//         total: {
//           confirmed: 2016680,
//           deceased: 13877,
//           recovered: 1988101,
//           tested: 26745035,
//           vaccinated1: 22280287,
//           vaccinated2: 8757219,
//         },
//       },
//       '2021-09-03': {
//         delta: {
//           confirmed: 1520,
//           deceased: 10,
//           recovered: 1290,
//           tested: 64739,
//           vaccinated1: 30897,
//           vaccinated2: 68254,
//         },
//         delta7: {
//           confirmed: 8955,
//           deceased: 99,
//           recovered: 8984,
//           tested: 402963,
//           vaccinated1: 2144221,
//           vaccinated2: 1194487,
//         },
//         total: {
//           confirmed: 2018200,
//           deceased: 13887,
//           recovered: 1989391,
//           tested: 26809774,
//           vaccinated1: 22311184,
//           vaccinated2: 8825473,
//         },
//       },
//       '2021-09-04': {
//         delta: {
//           confirmed: 1502,
//           deceased: 16,
//           recovered: 1525,
//           tested: 63717,
//           vaccinated1: 42530,
//           vaccinated2: 83724,
//         },
//         delta7: {
//           confirmed: 9136,
//           deceased: 96,
//           recovered: 9010,
//           tested: 402219,
//           vaccinated1: 2186751,
//           vaccinated2: 1278211,
//         },
//         total: {
//           confirmed: 2019702,
//           deceased: 13903,
//           recovered: 1990916,
//           tested: 26873491,
//           vaccinated1: 22353714,
//           vaccinated2: 8909197,
//         },
//       },
//       '2021-09-05': {
//         delta: {
//           confirmed: 1623,
//           deceased: 8,
//           recovered: 1340,
//           tested: 65596,
//           vaccinated1: 16375,
//           vaccinated2: 20560,
//         },
//         delta7: {
//           confirmed: 9202,
//           deceased: 86,
//           recovered: 9137,
//           tested: 403265,
//           vaccinated1: 1485313,
//           vaccinated2: 875244,
//         },
//         total: {
//           confirmed: 2021325,
//           deceased: 13911,
//           recovered: 1992256,
//           tested: 26939087,
//           vaccinated1: 22370089,
//           vaccinated2: 8929757,
//         },
//       },
//       '2021-09-06': {
//         delta: {
//           confirmed: 739,
//           deceased: 14,
//           recovered: 1333,
//           tested: 43594,
//           vaccinated1: 303169,
//           vaccinated2: 419947,
//         },
//         delta7: {
//           confirmed: 9063,
//           deceased: 87,
//           recovered: 9288,
//           tested: 405686,
//           vaccinated1: 1530190,
//           vaccinated2: 1162636,
//         },
//         total: {
//           confirmed: 2022064,
//           deceased: 13925,
//           recovered: 1993589,
//           tested: 26982681,
//           vaccinated1: 22673258,
//           vaccinated2: 9349704,
//         },
//       },
//       '2021-09-07': {
//         delta: {
//           confirmed: 739,
//           deceased: 14,
//           recovered: 1333,
//           tested: 43594,
//           vaccinated1: 303169,
//           vaccinated2: 419947,
//         },
//         delta7: {
//           confirmed: 9063,
//           deceased: 87,
//           recovered: 9288,
//           tested: 405686,
//           vaccinated1: 1530190,
//           vaccinated2: 1162636,
//         },
//         total: {
//           confirmed: 2022064,
//           deceased: 13925,
//           recovered: 1993589,
//           tested: 26982681,
//           vaccinated1: 22673258,
//           vaccinated2: 9349704,
//         },
//       },
//       '2021-09-08': {
//         delta: {
//           confirmed: 739,
//           deceased: 14,
//           recovered: 1333,
//           tested: 43594,
//           vaccinated1: 303169,
//           vaccinated2: 419947,
//         },
//         delta7: {
//           confirmed: 9063,
//           deceased: 87,
//           recovered: 9288,
//           tested: 405686,
//           vaccinated1: 1530190,
//           vaccinated2: 1162636,
//         },
//         total: {
//           confirmed: 2022064,
//           deceased: 13925,
//           recovered: 1993589,
//           tested: 26982681,
//           vaccinated1: 22673258,
//           vaccinated2: 9349704,
//         },
//       },
//       '2021-09-09': {
//         delta: {
//           confirmed: 739,
//           deceased: 14,
//           recovered: 1333,
//           tested: 43594,
//           vaccinated1: 303169,
//           vaccinated2: 419947,
//         },
//         delta7: {
//           confirmed: 9063,
//           deceased: 87,
//           recovered: 9288,
//           tested: 405686,
//           vaccinated1: 1530190,
//           vaccinated2: 1162636,
//         },
//         total: {
//           confirmed: 2022064,
//           deceased: 13925,
//           recovered: 1993589,
//           tested: 26982681,
//           vaccinated1: 22673258,
//           vaccinated2: 9349704,
//         },
//       },
//       '2021-09-10': {
//         delta: {
//           confirmed: 739,
//           deceased: 14,
//           recovered: 1333,
//           tested: 43594,
//           vaccinated1: 303169,
//           vaccinated2: 419947,
//         },
//         delta7: {
//           confirmed: 9063,
//           deceased: 87,
//           recovered: 9288,
//           tested: 405686,
//           vaccinated1: 1530190,
//           vaccinated2: 1162636,
//         },
//         total: {
//           confirmed: 2022064,
//           deceased: 13925,
//           recovered: 1993589,
//           tested: 26982681,
//           vaccinated1: 22673258,
//           vaccinated2: 9349704,
//         },
//       },
//       '2021-09-11': {
//         delta: {
//           confirmed: 739,
//           deceased: 14,
//           recovered: 1333,
//           tested: 43594,
//           vaccinated1: 303169,
//           vaccinated2: 419947,
//         },
//         delta7: {
//           confirmed: 9063,
//           deceased: 87,
//           recovered: 9288,
//           tested: 405686,
//           vaccinated1: 1530190,
//           vaccinated2: 1162636,
//         },
//         total: {
//           confirmed: 2022064,
//           deceased: 13925,
//           recovered: 1993589,
//           tested: 26982681,
//           vaccinated1: 22673258,
//           vaccinated2: 9349704,
//         },
//       },
//     },
//   },
// }

// const testingHomeDashBoardFixtures = {
//   AN: {
//     meta: {
//       population: 100000,
//       last_updated: '2021-10-28T11:52:23+05:30',
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
//       last_updated: '2021-10-28T11:52:23+05:30',
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

// const andhraPradeshConfirmedCasesCount =
//   testingHomeDashBoardFixtures.AP.total.confirmed

// const andhrapradeshRoutepath = '/state/AP'

// const countryLevelCovidDashboardDataUrl =
//   'https://apis.ccbp.in/covid19-state-wise-data'

// const faqsUrl = 'https://apis.ccbp.in/covid19-faqs'

// const statesIdsUrl = 'https://apis.ccbp.in/covid19-state-ids'

// const andhrpradeshTimeLineUrl = 'https://apis.ccbp.in/covid19-timelines-data/AP'

// const timeLinesUrl = `https://apis.ccbp.in/covid19-timelines-data`

// const countryLevelDashboardResponse = testingHomeDashBoardFixtures

// const stateIdsResponse = stateIds

// const server = setupServer(
//   rest.get(countryLevelCovidDashboardDataUrl, (req, res, ctx) =>
//     res(ctx.json(countryLevelDashboardResponse)),
//   ),
//   rest.get(timeLinesUrl, (req, res, ctx) => res(ctx.json(timeLineFixtures))),
//   rest.get(andhrpradeshTimeLineUrl, (req, res, ctx) =>
//     res(ctx.json(timeLineFixtures)),
//   ),
//   rest.get(faqsUrl, (req, res, ctx) => res(ctx.json(faqsFixtures))),
//   rest.get(statesIdsUrl, (req, res, ctx) => res(ctx.json(stateIdsResponse))),
// )

// const renderWithBrowserRouter = (
//   ui = <App />,
//   {route = andhrapradeshRoutepath} = {},
// ) => {
//   window.history.pushState({}, 'Test page', route)
//   return render(ui, {wrapper: BrowserRouter})
// }

// function getDistrictWiseData(stateCode, caseStatus) {
//   const districtsData = []
//   const districtNames = Object.keys(
//     countryLevelDashboardResponse[stateCode].districts,
//   )

//   districtNames.forEach(name => {
//     const {total} = countryLevelDashboardResponse[stateCode].districts[name]
//     if (caseStatus !== 'active')
//       districtsData.push({
//         name,
//         count: total[caseStatus],
//       })
//     else {
//       districtsData.push({
//         name,
//         count: total.confirmed - (total.recovered + total.deceased),
//       })
//     }
//   })

//   districtsData.sort((a, b) => {
//     const countA = a.count
//     const countB = b.count
//     if (countA > countB) {
//       return -1
//     }
//     if (countA < countB) {
//       return 1
//     }
//     return 0
//   })
//   return districtsData
// }

// const assertStateSpecificDistrictWiseData = (stateCode, filter) => {
//   const districtsDataUnorderedList = screen.getByTestId(
//     'topDistrictsUnorderedList',
//   )
//   const districtListItems = within(districtsDataUnorderedList).getAllByRole(
//     'listitem',
//   )
//   const districtsData = getDistrictWiseData(stateCode, filter)
//   expect(
//     within(districtListItems[0]).getByText(districtsData[0].count, {
//       exact: false,
//     }),
//   )
//   expect(
//     within(districtListItems[0]).getByText(districtsData[0].name, {
//       exact: false,
//     }),
//   )
//   expect(
//     within(districtListItems[1]).getByText(districtsData[1].count, {
//       exact: false,
//     }),
//   )
//   expect(
//     within(districtListItems[1]).getByText(districtsData[1].name, {
//       exact: false,
//     }),
//   )
// }

// describe(':::RJSCPAUCLT_TEST_SUITE_7:::State-specific Route Tests - 1', () => {
//   beforeAll(() => {
//     server.listen()
//   })

//   afterEach(() => {
//     server.resetHandlers()
//     jest.spyOn(window, 'fetch').mockRestore()
//     jest.spyOn(console, 'error').mockRestore()
//   })

//   afterAll(() => {
//     server.close()
//   })

//   it(':::RJSCPAUCLT_TEST_79:::When the HTTP GET requests of the State-specific Route are successful, then the State-specific Route list items should be rendered using a unique key as a prop for each similar list item:::10:::', async () => {
//     const consoleSpy = jest.spyOn(console, 'error')
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(/Top Districts/i, {
//         exact: false,
//       }),
//     ).toBeInTheDocument()
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(2)
//     expect(consoleSpy).not.toHaveBeenCalledWith(
//       expect.stringMatching(/Each child in a list should have a unique/),
//       expect.anything(),
//       expect.anything(),
//       expect.anything(),
//     )
//     expect(consoleSpy).not.toHaveBeenCalledWith(
//       expect.stringMatching(/Encountered two children with the same key/),
//       expect.anything(),
//       expect.anything(),
//     )
//     consoleSpy.mockRestore()
//   })

//   it(':::RJSCPAUCLT_TEST_80:::When the HTTP GET stateWiseCoivdData API call in the State-specific Route is in progress, then the State-specific Route should contain a HTML container element with the testid attribute value as "stateDetailsLoader":::5:::', async () => {
//     renderWithBrowserRouter()
//     await waitForElementToBeRemoved(() =>
//       screen.queryByTestId('stateDetailsLoader'),
//     )

//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_81:::When the HTTP GET timeLinesData API call in the State-specific Route is in progress, then the State-specific Route should contain a loader container with the testid attribute value as "timelinesDataLoader":::5:::', async () => {
//     renderWithBrowserRouter()
//     await screen.findByTestId('timelinesDataLoader')
//     await waitForElementToBeRemoved(() =>
//       screen.queryByTestId('timelinesDataLoader'),
//     )
//     expect(
//       await screen.findByText(/Top Districts/i, {
//         exact: false,
//       }),
//     ).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_82:::When the State-specific Route is accessed, then an HTTP GET request should be made to get countrywide covid19 cases data with the given countrywide covid19 cases URL:::10:::', async () => {
//     const fetchSpy = jest.spyOn(window, 'fetch').mockImplementation(url => {
//       if (url === countryLevelCovidDashboardDataUrl) {
//         return {
//           ok: true,
//           json: () => Promise.resolve(countryLevelDashboardResponse),
//         }
//       }
//       return {
//         ok: true,
//         json: () => Promise.resolve(timeLineFixtures),
//       }
//     })
//     renderWithBrowserRouter(<App />, andhrapradeshRoutepath)
//     expect(
//       await screen.findByText(/Top Districts/i, {
//         exact: false,
//       }),
//     ).toBeInTheDocument()
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     expect(
//       fetchSpy.mock.calls.some(
//         eachCall => eachCall[0] === countryLevelCovidDashboardDataUrl,
//       ),
//     ).toBeTruthy()
//     fetchSpy.mockRestore()
//   })

//   it(':::RJSCPAUCLT_TEST_83:::When the State-specific Route is accessed, an HTTP GET request should be made to get State-specific timelines data with the given State-specific timelines URL:::10:::', async () => {
//     const fetchSpy = jest.spyOn(window, 'fetch').mockImplementation(url => {
//       if (url === countryLevelCovidDashboardDataUrl) {
//         return {
//           ok: true,
//           json: () => Promise.resolve(countryLevelDashboardResponse),
//         }
//       }
//       return {
//         ok: true,
//         json: () => Promise.resolve(timeLineFixtures),
//       }
//     })
//     renderWithBrowserRouter(<App />, andhrapradeshRoutepath)
//     expect(
//       await screen.findByText(/Top Districts/i, {
//         exact: false,
//       }),
//     ).toBeInTheDocument()
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()

//     expect(
//       fetchSpy.mock.calls.some(eachCall => eachCall[0].includes(timeLinesUrl)),
//     ).toBeTruthy()
//     fetchSpy.mockRestore()
//   })

//   it(':::RJSCPAUCLT_TEST_84:::When the HTTP GET requests of the State-specific Route are successful, then the State-specific Route should consist of an HTML heading element with the text value as the respective state name and confirmed cases of the state:::10:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const {
//       location: {pathname},
//     } = window
//     const stateCode = pathname.substring(7)
//     const stateName = statesList.find(
//       stateObj => stateObj.state_code === stateCode,
//     ).state_name

//     expect(
//       screen.getByRole('heading', {
//         name: stateName,
//         exact: false,
//       }),
//     ).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_85:::When the HTTP GET requests of the State-specific Route are successful, then the State-specific Route should consist of an HTML paragraph element with the text content "Tested":::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const testedElements = screen.getAllByText(/Tested/i, {exact: false})
//     expect(testedElements[0]).toBeInTheDocument()
//     expect(testedElements[0].tagName).toBe('P')
//   })

//   it(':::RJSCPAUCLT_TEST_86:::When the HTTP GET requests of the State-specific Route are successful, then the State-specific Route should consist of an HTML paragraph element with the text value as the last update date from HTTP GET timeLinesData API response:::10:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const lastupdateText = screen.getByText(/Last update/i, {exact: false})
//     expect(lastupdateText).toHaveTextContent('28')
//     expect(lastupdateText.tagName).toBe('P')
//   })

//   it(':::RJSCPAUCLT_TEST_87:::When the HTTP GET requests of the State-specific Route are successful, then the State-specific Route should consist of an HTML paragraph element with the text value as total tested covid19 cases of the respective state:::10:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const {
//       location: {pathname},
//     } = window
//     const stateCode = pathname.substring(7)
//     const totalTestedCasesInRespectiveState =
//       countryLevelDashboardResponse[stateCode].total.tested
//     const paragraphElement = screen.getByText(totalTestedCasesInRespectiveState)
//     expect(paragraphElement.tagName).toBe('P')
//   })

//   it(':::RJSCPAUCLT_TEST_88:::When the HTTP GET requests of the State-specific Route are successful, then the State-specific Route should contain an HTML container element with the testid attribute value "stateSpecificConfirmedCasesContainer" to display the State-specific confirmed cases data:::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_89:::When the HTTP GET requests of the State-specific Route are successful, then the HTML container element with the testid attribute value "stateSpecificConfirmedCasesContainer" should contain the HTML paragraph element with the text "Confirmed":::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificConfirmedCasesContainer = screen.getByTestId(
//       'stateSpecificConfirmedCasesContainer',
//     )
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const paragraphElement = within(
//       stateSpecificConfirmedCasesContainer,
//     ).getByText(/Confirmed/i, {exact: false})
//     expect(paragraphElement.tagName).toBe('P')
//     expect(paragraphElement).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_90:::When the HTTP GET requests of the State-specific Route are successful, then the HTML container element with the testid attribute value "stateSpecificConfirmedCasesContainer" should contain an image element with the alt attribute value "state specific confirmed cases pic":::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificConfirmedCasesContainer = screen.getByTestId(
//       'stateSpecificConfirmedCasesContainer',
//     )
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const confirmedCasesImage = within(
//       stateSpecificConfirmedCasesContainer,
//     ).getByAltText('state specific confirmed cases pic')

//     expect(confirmedCasesImage).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_91:::When the HTTP GET requests of the State-specific Route are successful, then the HTML container element with the testid value "stateSpecificConfirmedCasesContainer" should contain an HTML element with the text as the total confirmed cases count from the stateWiseCoivdData API response:::10:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificConfirmedCasesContainer = screen.getByTestId(
//       'stateSpecificConfirmedCasesContainer',
//     )
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const {
//       location: {pathname},
//     } = window
//     const stateCode = pathname.substring(7)
//     const stateSpecificConfirmedCases =
//       countryLevelDashboardResponse[stateCode].total.confirmed
//     const paragraphEl = within(
//       stateSpecificConfirmedCasesContainer,
//     ).getByText(stateSpecificConfirmedCases, {exact: true})
//     expect(paragraphEl).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_92:::When the HTTP GET requests of the State-specific Route are successful, then the State-specific Route should contain an HTML container element with the testid attribute value "stateSpecificActiveCasesContainer" to display the State-specific active cases data:::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     expect(
//       screen.getByTestId('stateSpecificActiveCasesContainer'),
//     ).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_93:::When the HTTP GET requests of the State-specific Route are successful, then the HTML container element with testid value "stateSpecificActiveCasesContainer" should contain the HTML paragraph element with the text "Active":::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificActiveCasesContainer = screen.getByTestId(
//       'stateSpecificActiveCasesContainer',
//     )
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const paragraphElement = within(
//       stateSpecificActiveCasesContainer,
//     ).getByText(/Active/i, {exact: false})
//     expect(paragraphElement.tagName).toBe('P')
//     expect(paragraphElement).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_94:::When the HTTP GET requests of the State-specific Route are successful, then the HTML container element with the testid attribute value "stateSpecificActiveCasesContainer" should contain an image element with the alt attribute value "state specific active cases pic":::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificActiveCasesContainer = screen.getByTestId(
//       'stateSpecificActiveCasesContainer',
//     )
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const confirmedCasesImage = within(
//       stateSpecificActiveCasesContainer,
//     ).getByAltText('state specific active cases pic')

//     expect(confirmedCasesImage).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_95:::When the HTTP GET requests of the State-specific Route are successful, then the HTML container with the test id value "stateSpecificActiveCasesContainer" should contain an HTML paragraph element with the text as the total active cases count from the stateWiseCoivdData API response:::10:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificActiveCasesContainer = screen.getByTestId(
//       'stateSpecificActiveCasesContainer',
//     )
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const {
//       location: {pathname},
//     } = window
//     const stateCode = pathname.substring(7)
//     const stateSpecificActiveCases =
//       countryLevelDashboardResponse[stateCode].total.active
//     const paragraphEl = within(
//       stateSpecificActiveCasesContainer,
//     ).getByText(stateSpecificActiveCases, {exact: true})
//     expect(paragraphEl).toBeInTheDocument()
//     expect(paragraphEl.tagName).toBe('P')
//   })

//   it(':::RJSCPAUCLT_TEST_96:::When the HTTP GET requests of the State-specific Route are successful, then the State-specific Route should contain an HTML container element with the testid attribute value "stateSpecificRecoveredCasesContainer" to display the total confirmed cases-related data:::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_97:::When the HTTP GET requests of the State-specific Route are successful, then the the HTML container element with the testid attribute value "stateSpecificRecoveredCasesContainer" should contain the HTML paragraph element with the text "Recovered":::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificRecoveredCasesContainer = screen.getByTestId(
//       'stateSpecificRecoveredCasesContainer',
//     )
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const paragraphElement = within(
//       stateSpecificRecoveredCasesContainer,
//     ).getByText(/Recovered/i, {exact: false})
//     expect(paragraphElement.tagName).toBe('P')
//     expect(paragraphElement).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_98:::When the HTTP GET requests of the State-specific Route are successful, then the HTML container element with the testid attribute value "stateSpecificRecoveredCasesContainer" should contain an image element with the alt attribute value "state specific recovered cases pic":::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificRecoveredCasesContainer = screen.getByTestId(
//       'stateSpecificRecoveredCasesContainer',
//     )
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const confirmedCasesImage = within(
//       stateSpecificRecoveredCasesContainer,
//     ).getByAltText('state specific recovered cases pic')

//     expect(confirmedCasesImage).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_99:::When the HTTP GET requests of the State-specific Route are successful, then the HTML container element with test id value "stateSpecificRecoveredCasesContainer" should contain an HTML paragraph element with the text as the total recovered cases count from the stateWiseCoivdData API response:::10:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificRecoveredCasesContainer = screen.getByTestId(
//       'stateSpecificRecoveredCasesContainer',
//     )
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const {
//       location: {pathname},
//     } = window
//     const stateCode = pathname.substring(7)
//     const stateSpecificActiveCases =
//       countryLevelDashboardResponse[stateCode].total.recovered
//     const paragraphEl = within(
//       stateSpecificRecoveredCasesContainer,
//     ).getByText(stateSpecificActiveCases, {exact: true})
//     expect(paragraphEl).toBeInTheDocument()
//     expect(paragraphEl.tagName).toBe('P')
//   })

//   it(':::RJSCPAUCLT_TEST_100:::When the HTTP GET requests of the State-specific Route are successful, then the State-specific Route should contain an HTML container element with the testid attribute value "stateSpecificDeceasedCasesContainer" to display the total deceased cases related data:::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     expect(
//       await screen.findByTestId('stateSpecificDeceasedCasesContainer'),
//     ).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_101:::When the HTTP GET requests of the State-specific Route are successful, then the HTML container element with the testid attribute value "stateSpecificDeceasedCasesContainer" should contain the HTML paragraph element with the text content"Deceased":::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificConfirmedCasesContainer = screen.getByTestId(
//       'stateSpecificDeceasedCasesContainer',
//     )
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const paragraphElement = within(
//       stateSpecificConfirmedCasesContainer,
//     ).getByText(/Deceased/i, {exact: false})
//     expect(paragraphElement.tagName).toBe('P')
//     expect(paragraphElement).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_102:::When the HTTP GET requests of the State-specific Route are successful, then the HTML container element with the testid attribute value "stateSpecificDeceasedCasesContainer" should contain an image element with the alt attribute value "state specific deceased cases pic":::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificConfirmedCasesContainer = screen.getByTestId(
//       'stateSpecificDeceasedCasesContainer',
//     )
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const confirmedCasesImage = within(
//       stateSpecificConfirmedCasesContainer,
//     ).getByAltText('state specific deceased cases pic')

//     expect(confirmedCasesImage).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_103:::When the HTTP GET requests of the State-specific Route are successful, then the HTML container with testid value "stateSpecificDeceasedCasesContainer" should contain an HTML paragraph element with the text as the total deceased cases count from stateWiseCoivdData API response :::10:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificConfirmedCasesContainer = screen.getByTestId(
//       'stateSpecificDeceasedCasesContainer',
//     )
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const {
//       location: {pathname},
//     } = window
//     const stateCode = pathname.substring(7)
//     const stateSpecificDeceasedCases =
//       countryLevelDashboardResponse[stateCode].total.deceased
//     const paragraphEl = within(
//       stateSpecificConfirmedCasesContainer,
//     ).getByText(stateSpecificDeceasedCases, {exact: true})
//     expect(paragraphEl).toBeInTheDocument()
//     expect(paragraphEl.tagName).toBe('P')
//   })

//   it(':::RJSCPAUCLT_TEST_104:::When the HTTP GET requests of the State-specific Route are successful, then the State-specific Route should consist of an HTML main heading element with the text "Top Districts":::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const topDistrictsEl = screen.getByText(/Top Districts/i, {
//       exact: false,
//     })
//     expect(topDistrictsEl).toBeInTheDocument()
//     expect(topDistrictsEl.tagName).toBe('H1')
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_105:::When the HTTP GET requests of the State-specific Route are successful, then the State-specific Route should contain an HTML unordered list element with the testid attribute value as "topDistrictsUnorderedList" to display district-wise data:::5:::', async () => {
//     renderWithBrowserRouter()
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     const districtsDataUnorderedList = await screen.findByTestId(
//       'topDistrictsUnorderedList',
//     )
//     expect(districtsDataUnorderedList).toBeInTheDocument()
//     expect(districtsDataUnorderedList.tagName).toBe('UL')
//   })

//   it(':::RJSCPAUCLT_TEST_106:::When the HTTP GET requests of the State-specific Route are successful, then the HTML unordered list element with the testid attribute value "topDistrictsUnorderedList" should contain the respective state districts count numbered list items:::10:::', async () => {
//     renderWithBrowserRouter()
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const districtsDataUnorderedList = screen.getByTestId(
//       'topDistrictsUnorderedList',
//     )
//     expect(
//       within(districtsDataUnorderedList).getAllByRole('listitem').length,
//     ).toBe(
//       Object.keys(
//         testingHomeDashBoardFixtures[window.location.pathname.substring(7)]
//           .districts,
//       ).length,
//     )
//   })

//   it(':::RJSCPAUCLT_TEST_107:::When the HTTP GET requests of the State-specific Route are successful, then initially, the HTML unordered list element with the test id "topDistrictsUnorderedList" should display the respective state districts data. The state districts data should be in descending order by confirmed cases:::10:::', async () => {
//     renderWithBrowserRouter()
//     const {
//       location: {pathname},
//     } = window
//     const stateCode = pathname.substring(7)
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     assertStateSpecificDistrictWiseData(stateCode, 'confirmed')
//   })

//   it(':::RJSCPAUCLT_TEST_108:::When the HTTP GET requests of the State-specific Route are successful, then in the State-specific Route, when the confirmed cases card is clicked, then the page should display the respective state districts data in descending order by confirmed cases:::10:::', async () => {
//     renderWithBrowserRouter()
//     const {
//       location: {pathname},
//     } = window
//     const stateCode = pathname.substring(7)
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificConfirmedCasesContainer = screen.getByTestId(
//       'stateSpecificConfirmedCasesContainer',
//     )
//     userEvent.click(stateSpecificConfirmedCasesContainer)
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     assertStateSpecificDistrictWiseData(stateCode, 'confirmed')
//   })

//   it(':::RJSCPAUCLT_TEST_109:::When the HTTP GET requests of the State-specific Route are successful, then in the State-specific Route, when the active cases card is clicked, then the page should display the respective state districts data in descending order by active cases:::10:::', async () => {
//     renderWithBrowserRouter()
//     const {
//       location: {pathname},
//     } = window
//     const stateCode = pathname.substring(7)
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificActiveCasesContainer = await screen.getByTestId(
//       'stateSpecificActiveCasesContainer',
//     )
//     userEvent.click(stateSpecificActiveCasesContainer)
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     assertStateSpecificDistrictWiseData(stateCode, 'active')
//   })

//   it(':::RJSCPAUCLT_TEST_110:::When the HTTP GET requests of the State-specific Route are successful, then in the State-specific Route, when the recovered cases card is clicked, then the page should display the respective state districts data in descending order by recovered cases:::10:::', async () => {
//     renderWithBrowserRouter()
//     const {
//       location: {pathname},
//     } = window
//     const stateCode = pathname.substring(7)
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificActiveCasesContainer = screen.getByTestId(
//       'stateSpecificRecoveredCasesContainer',
//     )
//     userEvent.click(stateSpecificActiveCasesContainer)
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     assertStateSpecificDistrictWiseData(stateCode, 'recovered')
//   })

//   it(':::RJSCPAUCLT_TEST_111:::When the HTTP GET requests of the State-specific Route are successful, then in the State-specific Route, when the deceased cases card is clicked, then the page should display the respective state districts data in descending order by deceased cases:::10:::', async () => {
//     renderWithBrowserRouter()
//     const {
//       location: {pathname},
//     } = window
//     const stateCode = pathname.substring(7)
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     const stateSpecificActiveCasesContainer = screen.getByTestId(
//       'stateSpecificDeceasedCasesContainer',
//     )
//     userEvent.click(stateSpecificActiveCasesContainer)
//     expect(await screen.findByTestId('lineChartsContainer')).toBeInTheDocument()
//     assertStateSpecificDistrictWiseData(stateCode, 'deceased')
//   })

//   it(':::RJSCPAUCLT_TEST_112:::When the HTTP GET requests of the State-specific Route are successful, then the State-specific Route should consist of a Bar chart with 10 bars to represent the last 10 days of respective cases data:::10:::', async () => {
//     const {container} = renderWithBrowserRouter(<App />, {
//       route: andhrapradeshRoutepath,
//     })
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     await waitFor(() => {
//       expect(
//         container.getElementsByClassName('recharts-bar-rectangle').length,
//       ).toBeGreaterThanOrEqual(10)
//     })
//   })

//   it(':::RJSCPAUCLT_TEST_113:::When the HTTP GET requests of the State-specific Route are successful, then the State-specific Route should consist of 5 line chart components to represent the data of confirmed cases, active cases, recovered cases, deceased cases, tested cases stats:::10:::', async () => {
//     const {container} = renderWithBrowserRouter(<App />, {
//       route: andhrapradeshRoutepath,
//     })
//     expect(
//       await screen.findByText(andhraPradeshConfirmedCasesCount),
//     ).toBeInTheDocument()
//     await waitFor(() => {
//       expect(
//         container.getElementsByClassName('recharts-line').length,
//       ).toBeGreaterThanOrEqual(5)
//     })
//   })
// })
