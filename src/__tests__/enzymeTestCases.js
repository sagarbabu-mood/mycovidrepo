import {BrowserRouter} from 'react-router-dom'

import {mount} from 'enzyme'

import {BarChart, LineChart} from 'recharts'

import {act} from 'react-dom/test-utils'

import App from '../App'

const timeLineFixtures = {
  AN: {
    dates: {
      '2021-09-04': {
        delta: {
          confirmed: 2,
          recovered: 4,
          tested: 1876,
          vaccinated1: 1020,
          vaccinated2: 710,
        },
        delta7: {
          confirmed: 12,
          recovered: 8,
          tested: 13186,
          vaccinated1: 10535,
          vaccinated2: 4214,
        },
        total: {
          confirmed: 7572,
          deceased: 129,
          recovered: 7436,
          tested: 498055,
          vaccinated1: 262154,
          vaccinated2: 108224,
        },
      },
      '2021-09-05': {
        delta: {
          recovered: 1,
          tested: 1924,
          vaccinated1: 39,
          vaccinated2: 15,
        },
        delta7: {
          confirmed: 8,
          recovered: 7,
          tested: 13035,
          vaccinated1: 7734,
          vaccinated2: 3388,
        },
        total: {
          confirmed: 7572,
          deceased: 129,
          recovered: 7437,
          tested: 499979,
          vaccinated1: 262193,
          vaccinated2: 108239,
        },
      },
      '2021-09-06': {
        delta: {tested: 2009, vaccinated1: 864, vaccinated2: 987},
        delta7: {
          confirmed: 7,
          recovered: 6,
          tested: 13342,
          vaccinated1: 7252,
          vaccinated2: 4184,
        },
        total: {
          confirmed: 7572,
          deceased: 129,
          recovered: 7437,
          tested: 501988,
          vaccinated1: 263057,
          vaccinated2: 109226,
        },
      },
    },
  },
  AP: {
    dates: {
      '2021-09-02': {
        delta: {
          confirmed: 1378,
          deceased: 10,
          recovered: 1139,
          tested: 59566,
          vaccinated1: 74670,
          vaccinated2: 60703,
        },
        delta7: {
          confirmed: 8950,
          deceased: 99,
          recovered: 8597,
          tested: 407089,
          vaccinated1: 2279562,
          vaccinated2: 1294981,
        },
        total: {
          confirmed: 2016680,
          deceased: 13877,
          recovered: 1988101,
          tested: 26745035,
          vaccinated1: 22280287,
          vaccinated2: 8757219,
        },
      },
      '2021-09-03': {
        delta: {
          confirmed: 1520,
          deceased: 10,
          recovered: 1290,
          tested: 64739,
          vaccinated1: 30897,
          vaccinated2: 68254,
        },
        delta7: {
          confirmed: 8955,
          deceased: 99,
          recovered: 8984,
          tested: 402963,
          vaccinated1: 2144221,
          vaccinated2: 1194487,
        },
        total: {
          confirmed: 2018200,
          deceased: 13887,
          recovered: 1989391,
          tested: 26809774,
          vaccinated1: 22311184,
          vaccinated2: 8825473,
        },
      },
      '2021-09-04': {
        delta: {
          confirmed: 1502,
          deceased: 16,
          recovered: 1525,
          tested: 63717,
          vaccinated1: 42530,
          vaccinated2: 83724,
        },
        delta7: {
          confirmed: 9136,
          deceased: 96,
          recovered: 9010,
          tested: 402219,
          vaccinated1: 2186751,
          vaccinated2: 1278211,
        },
        total: {
          confirmed: 2019702,
          deceased: 13903,
          recovered: 1990916,
          tested: 26873491,
          vaccinated1: 22353714,
          vaccinated2: 8909197,
        },
      },
      '2021-09-05': {
        delta: {
          confirmed: 1623,
          deceased: 8,
          recovered: 1340,
          tested: 65596,
          vaccinated1: 16375,
          vaccinated2: 20560,
        },
        delta7: {
          confirmed: 9202,
          deceased: 86,
          recovered: 9137,
          tested: 403265,
          vaccinated1: 1485313,
          vaccinated2: 875244,
        },
        total: {
          confirmed: 2021325,
          deceased: 13911,
          recovered: 1992256,
          tested: 26939087,
          vaccinated1: 22370089,
          vaccinated2: 8929757,
        },
      },
      '2021-09-06': {
        delta: {
          confirmed: 739,
          deceased: 14,
          recovered: 1333,
          tested: 43594,
          vaccinated1: 303169,
          vaccinated2: 419947,
        },
        delta7: {
          confirmed: 9063,
          deceased: 87,
          recovered: 9288,
          tested: 405686,
          vaccinated1: 1530190,
          vaccinated2: 1162636,
        },
        total: {
          confirmed: 2022064,
          deceased: 13925,
          recovered: 1993589,
          tested: 26982681,
          vaccinated1: 22673258,
          vaccinated2: 9349704,
        },
      },
      '2021-09-07': {
        delta: {
          confirmed: 739,
          deceased: 14,
          recovered: 1333,
          tested: 43594,
          vaccinated1: 303169,
          vaccinated2: 419947,
        },
        delta7: {
          confirmed: 9063,
          deceased: 87,
          recovered: 9288,
          tested: 405686,
          vaccinated1: 1530190,
          vaccinated2: 1162636,
        },
        total: {
          confirmed: 2022064,
          deceased: 13925,
          recovered: 1993589,
          tested: 26982681,
          vaccinated1: 22673258,
          vaccinated2: 9349704,
        },
      },
      '2021-09-08': {
        delta: {
          confirmed: 739,
          deceased: 14,
          recovered: 1333,
          tested: 43594,
          vaccinated1: 303169,
          vaccinated2: 419947,
        },
        delta7: {
          confirmed: 9063,
          deceased: 87,
          recovered: 9288,
          tested: 405686,
          vaccinated1: 1530190,
          vaccinated2: 1162636,
        },
        total: {
          confirmed: 2022064,
          deceased: 13925,
          recovered: 1993589,
          tested: 26982681,
          vaccinated1: 22673258,
          vaccinated2: 9349704,
        },
      },
      '2021-09-09': {
        delta: {
          confirmed: 739,
          deceased: 14,
          recovered: 1333,
          tested: 43594,
          vaccinated1: 303169,
          vaccinated2: 419947,
        },
        delta7: {
          confirmed: 9063,
          deceased: 87,
          recovered: 9288,
          tested: 405686,
          vaccinated1: 1530190,
          vaccinated2: 1162636,
        },
        total: {
          confirmed: 2022064,
          deceased: 13925,
          recovered: 1993589,
          tested: 26982681,
          vaccinated1: 22673258,
          vaccinated2: 9349704,
        },
      },
      '2021-09-10': {
        delta: {
          confirmed: 739,
          deceased: 14,
          recovered: 1333,
          tested: 43594,
          vaccinated1: 303169,
          vaccinated2: 419947,
        },
        delta7: {
          confirmed: 9063,
          deceased: 87,
          recovered: 9288,
          tested: 405686,
          vaccinated1: 1530190,
          vaccinated2: 1162636,
        },
        total: {
          confirmed: 2022064,
          deceased: 13925,
          recovered: 1993589,
          tested: 26982681,
          vaccinated1: 22673258,
          vaccinated2: 9349704,
        },
      },
      '2021-09-11': {
        delta: {
          confirmed: 739,
          deceased: 14,
          recovered: 1333,
          tested: 43594,
          vaccinated1: 303169,
          vaccinated2: 419947,
        },
        delta7: {
          confirmed: 9063,
          deceased: 87,
          recovered: 9288,
          tested: 405686,
          vaccinated1: 1530190,
          vaccinated2: 1162636,
        },
        total: {
          confirmed: 2022064,
          deceased: 13925,
          recovered: 1993589,
          tested: 26982681,
          vaccinated1: 22673258,
          vaccinated2: 9349704,
        },
      },
    },
  },
}

const testingHomeDashBoardFixtures = {
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
          deceased: 0,
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

const countryLevelCovidDashboardDataUrl =
  'https://apis.ccbp.in/covid19-state-wise-data'

const mockStateSpecificRouteAPI = () => {
  window.history.pushState({}, 'Test page', '/state/AP')
  const fetchSpy = jest.spyOn(window, 'fetch').mockImplementation(url => {
    if (url === countryLevelCovidDashboardDataUrl) {
      return Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve(testingHomeDashBoardFixtures),
      })
    }
    return Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve(timeLineFixtures),
    })
  })
  return fetchSpy
}

describe(':::RJSCPAUCLT_TEST_SUITE_8:::State-specific Route Tests - 2', () => {
  it(':::RJSCPAUCLT_TEST_114:::When the HTTP GET request API calls of the State-specific Route are successful, then the page should consist of a Bar chart to represent the State-specific Covid19 cases data in graph format:::15:::', async () => {
    const fetchSpy = mockStateSpecificRouteAPI()
    const wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })
    await wrapper.update()
    expect(wrapper.find(BarChart)).toHaveLength(1)
    fetchSpy.mockRestore()
  })

  it(':::RJSCPAUCLT_TEST_115:::When the HTTP GET request API calls of the State-specific Route are successful, then the State-Specific Route should consist of 5 Line charts to represent the State-specific Covid19 Confirmed, Active, Recovered, Deceased, Tested cases data in graph format:::15:::', async () => {
    const fetchSpy = mockStateSpecificRouteAPI()
    const wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })
    await wrapper.update()
    expect(wrapper.find(LineChart)).toHaveLength(5)
    fetchSpy.mockRestore()
  })
})
