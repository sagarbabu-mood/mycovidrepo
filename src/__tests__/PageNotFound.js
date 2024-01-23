import {BrowserRouter} from 'react-router-dom'

import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {setupServer} from 'msw/node'
import {rest} from 'msw'
import App from '../App'

const countryLevelDashboardResponse = {
  AN: {
    meta: {
      population: 100000,
    },
    districts: {
      Nicobars: {
        total: {
          vaccinated1: 22280,
          vaccinated2: 8483,
        },
      },
      'North and Middle Andaman': {
        total: {
          vaccinated1: 75270,
          vaccinated2: 32482,
        },
      },
      'South Andaman': {
        total: {
          vaccinated1: 166658,
          vaccinated2: 69149,
        },
      },
      Unknown: {
        total: {
          confirmed: 7573,
          deceased: 129,
          recovered: 7437,
        },
      },
    },
    total: {
      confirmed: 7573,
      deceased: 129,
      recovered: 7437,
      tested: 504146,
      active: 7,
      vaccinated1: 264215,
      vaccinated2: 110115,
    },
  },
  AP: {
    meta: {
      population: 100000,
    },
    districts: {
      Chittoor: {
        total: {
          confirmed: 239599,
          deceased: 1864,
          recovered: 235712,
          tested: 780322,
          vaccinated1: 1937900,
          vaccinated2: 946960,
        },
      },
      'East Godavari': {
        total: {
          confirmed: 287007,
          deceased: 1264,
          recovered: 283566,
          tested: 944746,
          vaccinated1: 2330355,
          vaccinated2: 786995,
        },
      },
      Guntur: {
        total: {
          confirmed: 173372,
          deceased: 1186,
          recovered: 171147,
          tested: 833823,
          vaccinated1: 2114861,
          vaccinated2: 823621,
        },
      },
      Krishna: {
        total: {
          confirmed: 114688,
          deceased: 1332,
          recovered: 111380,
          tested: 782232,
          vaccinated1: 2096923,
          vaccinated2: 835709,
        },
      },
      Kurnool: {
        total: {
          confirmed: 123888,
          deceased: 850,
          recovered: 122926,
          tested: 867361,
          vaccinated1: 1575498,
          vaccinated2: 687943,
        },
      },
      'Other State': {
        total: {
          confirmed: 2461,
          recovered: 2461,
        },
      },
      Prakasam: {
        total: {
          confirmed: 134506,
          deceased: 1060,
          recovered: 131168,
          tested: 697340,
          vaccinated1: 1477656,
          vaccinated2: 733527,
        },
      },
      'S.P.S. Nellore': {
        total: {
          confirmed: 141403,
          deceased: 1014,
          recovered: 138194,
          tested: 682964,
          vaccinated1: 1423798,
          vaccinated2: 707157,
        },
      },
      Srikakulam: {
        total: {
          confirmed: 122276,
          deceased: 779,
          recovered: 121145,
          tested: 670899,
          vaccinated1: 1221192,
          vaccinated2: 525268,
        },
      },
      Visakhapatnam: {
        total: {
          confirmed: 155421,
          deceased: 1107,
          recovered: 153880,
          tested: 744983,
          vaccinated1: 2406524,
          vaccinated2: 883151,
        },
      },
      Vizianagaram: {
        total: {
          confirmed: 82531,
          deceased: 669,
          recovered: 81716,
          tested: 531433,
          vaccinated1: 1114052,
          vaccinated2: 388287,
        },
      },
      'West Godavari': {
        total: {
          confirmed: 175212,
          deceased: 1087,
          recovered: 173023,
          tested: 793098,
          vaccinated1: 2034472,
          vaccinated2: 682050,
        },
      },
      'Y.S.R. Kadapa': {
        delta21_14: {
          confirmed: 416,
        },
        total: {
          confirmed: 113174,
          deceased: 631,
          recovered: 112005,
          tested: 671761,
          vaccinated1: 1276835,
          vaccinated2: 614310,
        },
      },
    },
    total: {
      confirmed: 2023242,
      deceased: 13935,
      recovered: 1994855,
      tested: 27037651,
      active: 14452,
      vaccinated1: 22756066,
      vaccinated2: 9448882,
    },
  },
}

const pageNotFoundPath = '/bad-path'

const homeRoutePath = '/'

const countryLevelCovidDashboardDataUrl =
  'https://apis.ccbp.in/covid19-state-wise-data'

const andamanConfirmedCasesCount =
  countryLevelDashboardResponse.AN.total.confirmed

const server = setupServer(
  rest.get(countryLevelCovidDashboardDataUrl, (req, res, ctx) =>
    res(ctx.json(countryLevelDashboardResponse)),
  ),
)

const renderWithBrowserRouter = (
  ui = <App />,
  {route = pageNotFoundPath} = {},
) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, {wrapper: BrowserRouter})
}

describe(':::RJSCPAUCLT_TEST_SUITE_6:::Not Found Route Tests', () => {
  beforeAll(() => {
    server.listen()
  })

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => {
    server.close()
  })

  it(':::RJSCPAUCLT_TEST_74:::When the "/bad-path" is provided as the URL in the browser tab, then the page should be navigated to NotFound Route and consist of an HTML image element with alt text as "not-found-pic":::5:::', () => {
    renderWithBrowserRouter()
    const imageEl = screen.getByAltText(/not-found-pic/i, {exact: false})
    expect(imageEl).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_75:::When the "/bad-path" is provided as the URL in the browser tab, then the page should be navigated to NotFound Route and consist of the HTML main heading element with text content as "PAGE NOT FOUND":::5:::', () => {
    renderWithBrowserRouter()
    expect(
      screen.getByRole('heading', {
        name: /PAGE NOT FOUND/i,
        exact: false,
      }),
    ).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_76:::When the "/bad-path" is provided as the URL in the browser tab, then the page should be navigated to NotFound Route and consist of the HTML paragraph element with text content as "we are sorry, the page you requested could not be found":::5:::', () => {
    renderWithBrowserRouter()
    const paragraphEl = screen.getByText(
      /we are sorry, the page you requested could not be found/i,
      {
        exact: false,
      },
    )
    expect(paragraphEl).toBeInTheDocument()
    expect(paragraphEl.tagName).toBe('P')
  })

  it(':::RJSCPAUCLT_TEST_77:::When the "/bad-path" is provided as the URL in the browser tab, then the page should be navigated to NotFound Route and consist consist of an HTML button element with "Home" as text content":::5:::', () => {
    renderWithBrowserRouter()
    const buttonEl = screen.getByRole('button', {
      name: /Home/i,
      exact: false,
    })
    expect(buttonEl).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_78:::Not Found Route should consist of an HTML button element with "Home" as text content and clicking on it should navigate to Home Route and the Home Route should contain the confirmed cases count of the state Andaman Nicobar received from the response:::10:::', async () => {
    renderWithBrowserRouter()
    const homePageButton = screen.getByRole('button', {
      name: /Home/i,
      exact: false,
    })

    userEvent.click(homePageButton)

    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    expect(window.location.pathname).toBe(homeRoutePath)
  })
})
