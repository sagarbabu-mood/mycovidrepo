// import * as fs from 'fs'
// import path from 'path'
// import {VscGithubAlt} from 'react-icons/vsc'
// import {FiInstagram} from 'react-icons/fi'
// import {FaTwitter} from 'react-icons/fa'
// import {mount} from 'enzyme'
// import {BrowserRouter} from 'react-router-dom'
// import {act} from 'react-dom/test-utils'

// import {render, screen} from '@testing-library/react'

// import Footer from '../components/Footer'
// import App from '../App'

// const testingHomeDashBoardFixtures = {
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
//           deceased: 0,
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

// const jsxCode = fs.readFileSync(
//   path.resolve(__dirname, '../components/Footer/index.js'),
//   'utf8',
// )

// const mockHomeRouteAPI = () => {
//   window.history.pushState({}, 'Test page', '/')
//   const promise = Promise.resolve(testingHomeDashBoardFixtures)
//   const fetchSpy = jest.spyOn(window, 'fetch').mockImplementation(() =>
//     Promise.resolve({
//       status: 200,
//       ok: true,
//       json: () => promise,
//     }),
//   )
//   return fetchSpy
// }

// describe(':::RJSCPAUCLT_TEST_SUITE_3:::Footer Tests', () => {
//   it(':::RJSCPAUCLT_TEST_8:::The Footer should consist of an HTML element with the text content as "COVID19INDIA":::5:::', async () => {
//     render(<Footer />)
//     const covid19Text = screen.getByText(/COVID19/i, {exact: false})
//     expect(covid19Text).toBeInTheDocument()
//     const indiaText = screen.getByText(/INDIA/i, {exact: false})
//     expect(indiaText).toBeInTheDocument()
//   })

//   it(':::RJSCPAUCLT_TEST_9:::The Footer should consist of an HTML paragraph element with the text content as "we stand with everyone fighting on the front lines":::5:::', async () => {
//     render(<Footer />)
//     const footerHeading = screen.getByText(
//       /we stand with everyone fighting on the front lines/i,
//       {exact: false},
//     )
//     expect(footerHeading).toBeInTheDocument()
//     expect(footerHeading.tagName).toBe('P')
//   })

//   it(':::RJSCPAUCLT_TEST_10:::JSX code implementation for the Footer Component should use "VscGithubAlt" from the "react-icons" package:::5:::', async () => {
//     expect(jsxCode.match(/VscGithubAlt/).length).toBeGreaterThanOrEqual(1)
//     expect(jsxCode.match(/<VscGithubAlt/).length).toBeGreaterThanOrEqual(1)
//   })

//   it(':::RJSCPAUCLT_TEST_11:::The Footer should contain a "VscGithubAlt" react icon:::5:::', async () => {
//     const promise = Promise.resolve(testingHomeDashBoardFixtures)
//     const fetchSpy = mockHomeRouteAPI()

//     const wrapper = mount(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>,
//     )
//     await act(() => promise)
//     await wrapper.update()
//     expect(wrapper.find(VscGithubAlt)).toHaveLength(1)
//     fetchSpy.mockRestore()
//   })

//   it(':::RJSCPAUCLT_TEST_12:::JSX code implementation for the Footer Component should use "FiInstagram" from the "react-icons" package:::5:::', async () => {
//     expect(jsxCode.match(/FiInstagram/).length).toBeGreaterThanOrEqual(1)
//     expect(jsxCode.match(/<FiInstagram/).length).toBeGreaterThanOrEqual(1)
//   })

//   it(':::RJSCPAUCLT_TEST_13:::The Footer should contain a "FiInstagram" react icon:::5:::', async () => {
//     const promise = Promise.resolve(testingHomeDashBoardFixtures)
//     const fetchSpy = mockHomeRouteAPI()

//     const wrapper = mount(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>,
//     )
//     await act(() => promise)
//     await wrapper.update()
//     expect(wrapper.find(FiInstagram)).toHaveLength(1)
//     fetchSpy.mockRestore()
//   })

//   it(':::RJSCPAUCLT_TEST_14:::JSX code implementation for the Footer Component should use "FaTwitter" from the "react-icons" package:::5:::', async () => {
//     expect(jsxCode.match(/FaTwitter/).length).toBeGreaterThanOrEqual(1)
//     expect(jsxCode.match(/<FaTwitter/).length).toBeGreaterThanOrEqual(1)
//   })

//   it(':::RJSCPAUCLT_TEST_15:::The Footer should contain a "FaTwitter" react icon:::5:::', async () => {
//     const promise = Promise.resolve(testingHomeDashBoardFixtures)
//     const fetchSpy = mockHomeRouteAPI()

//     const wrapper = mount(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>,
//     )
//     await act(() => promise)
//     await wrapper.update()
//     expect(wrapper.find(FaTwitter)).toHaveLength(1)
//     fetchSpy.mockRestore()
//   })
// })
