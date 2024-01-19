import {BrowserRouter} from 'react-router-dom'
import {setupServer} from 'msw/node'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import {BsSearch} from 'react-icons/bs'
import {BiChevronRightSquare} from 'react-icons/bi'
import {mount} from 'enzyme'
import {act} from 'react-dom/test-utils'
import {rest} from 'msw'
import {
  render,
  screen,
  within,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

const stateIds = {
  states: [
    {
      state_id: 1,
      state_name: 'Andaman and Nicobar Islands',
    },
    {
      state_id: 2,
      state_name: 'Andhra Pradesh',
    },
    {
      state_id: 3,
      state_name: 'Arunachal Pradesh',
    },
    {
      state_id: 4,
      state_name: 'Assam',
    },
    {
      state_id: 5,
      state_name: 'Bihar',
    },
    {
      state_id: 6,
      state_name: 'Chandigarh',
    },
    {
      state_id: 7,
      state_name: 'Chhattisgarh',
    },
    {
      state_id: 8,
      state_name: 'Dadra and Nagar Haveli',
    },
    {
      state_id: 37,
      state_name: 'Daman and Diu',
    },
    {
      state_id: 9,
      state_name: 'Delhi',
    },
    {
      state_id: 10,
      state_name: 'Goa',
    },
    {
      state_id: 11,
      state_name: 'Gujarat',
    },
    {
      state_id: 12,
      state_name: 'Haryana',
    },
    {
      state_id: 13,
      state_name: 'Himachal Pradesh',
    },
    {
      state_id: 14,
      state_name: 'Jammu and Kashmir',
    },
    {
      state_id: 15,
      state_name: 'Jharkhand',
    },
    {
      state_id: 16,
      state_name: 'Karnataka',
    },
    {
      state_id: 17,
      state_name: 'Kerala',
    },
    {
      state_id: 18,
      state_name: 'Ladakh',
    },
    {
      state_id: 19,
      state_name: 'Lakshadweep',
    },
    {
      state_id: 20,
      state_name: 'Madhya Pradesh',
    },
    {
      state_id: 21,
      state_name: 'Maharashtra',
    },
    {
      state_id: 22,
      state_name: 'Manipur',
    },
    {
      state_id: 23,
      state_name: 'Meghalaya',
    },
    {
      state_id: 24,
      state_name: 'Mizoram',
    },
    {
      state_id: 25,
      state_name: 'Nagaland',
    },
    {
      state_id: 26,
      state_name: 'Odisha',
    },
    {
      state_id: 27,
      state_name: 'Puducherry',
    },
    {
      state_id: 28,
      state_name: 'Punjab',
    },
    {
      state_id: 29,
      state_name: 'Rajasthan',
    },
    {
      state_id: 30,
      state_name: 'Sikkim',
    },
    {
      state_id: 31,
      state_name: 'Tamil Nadu',
    },
    {
      state_id: 32,
      state_name: 'Telangana',
    },
    {
      state_id: 33,
      state_name: 'Tripura',
    },
    {
      state_id: 34,
      state_name: 'Uttar Pradesh',
    },
    {
      state_id: 35,
      state_name: 'Uttarakhand',
    },
    {
      state_id: 36,
      state_name: 'West Bengal',
    },
  ],
  ttl: 24,
}

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
  AR: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  AS: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  BR: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  CH: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  CT: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  DN: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  DL: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  GA: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  GJ: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  HR: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  HP: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  JK: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  JH: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  KA: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  KL: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  LA: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  LD: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  MP: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  MH: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  MN: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  ML: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  MZ: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  NL: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  OR: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  PY: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  PB: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  RJ: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  SK: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  TN: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  TG: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  TR: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  UP: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  UT: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
  WB: {
    meta: {
      population: 0,
    },
    districts: {},
    total: {
      confirmed: 0,
      deceased: 0,
      recovered: 0,
      tested: 0,
      active: 0,
    },
  },
}

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
    {
      answer:
        "Because it affects all of us. Today it's someone else who is getting infected; tomorrow it could be us. We need to prevent the spread of this virus. We need to document the data so that people with knowledge can use this data to make informed decisions.",
      category: 'General',
      qno: '6',
      question:
        'Why are you guys putting in time and resources to do this while not gaining a single penny from it?',
    },
  ],
}

function getCountryWideCovidCasesDetails() {
  let countryWideConfirmedCases = 0
  let countryWideActiveCases = 0
  let countryWideRecoveredCases = 0
  let countryWideDeceasedCases = 0
  statesList.forEach(state => {
    if (testingHomeDashBoardFixtures[state.state_code]) {
      const {total} = testingHomeDashBoardFixtures[state.state_code]
      const {confirmed, deceased, recovered} = total
      countryWideConfirmedCases += confirmed
      countryWideRecoveredCases += recovered
      countryWideDeceasedCases += deceased
    }
  })
  countryWideActiveCases =
    countryWideConfirmedCases -
    (countryWideDeceasedCases + countryWideRecoveredCases)
  return {
    countryWideConfirmedCases,
    countryWideActiveCases,
    countryWideRecoveredCases,
    countryWideDeceasedCases,
  }
}

const {
  countryWideConfirmedCases,
  countryWideActiveCases,
  countryWideRecoveredCases,
  countryWideDeceasedCases,
} = getCountryWideCovidCasesDetails()

const homeRoutePath = '/'

const countryLevelCovidDashboardDataUrl =
  'https://apis.ccbp.in/covid19-state-wise-data'

const faqsUrl = 'https://apis.ccbp.in/covid19-faqs'

const statesIdsUrl = 'https://apis.ccbp.in/covid19-state-ids'

const andhrpradeshTimeLineUrl = 'https://apis.ccbp.in/covid19-timelines-data/AP'
const timeLinesUrl = 'https://apis.ccbp.in/covid19-timelines-data'

const searchResultsLength = statesList.filter(state =>
  state.state_name.toLowerCase().includes('an'),
).length

const countryLevelDashboardResponse = testingHomeDashBoardFixtures

const stateIdsResponse = stateIds

const server = setupServer(
  rest.get(countryLevelCovidDashboardDataUrl, (req, res, ctx) =>
    res(ctx.json(countryLevelDashboardResponse)),
  ),
  rest.get(andhrpradeshTimeLineUrl, (req, res, ctx) =>
    res(ctx.json(timeLineFixtures)),
  ),
  rest.get(timeLinesUrl, (req, res, ctx) => res(ctx.json(timeLineFixtures))),
  rest.get(faqsUrl, (req, res, ctx) => res(ctx.json(faqsFixtures))),
  rest.get(statesIdsUrl, (req, res, ctx) => res(ctx.json(stateIdsResponse))),
)

const andamanConfirmedCasesCount =
  countryLevelDashboardResponse.AN.total.confirmed

const renderWithBrowserRouter = (
  ui = <App />,
  {route = homeRoutePath} = {},
) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, {wrapper: BrowserRouter})
}

describe(':::RJSCPAUCLT_TEST_SUITE_5:::Home Route Tests', () => {
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

  it(':::RJSCPAUCLT_TEST_25:::When the HTTP GET request in the Home Route is successful, then the Home Route list items should be rendered using a unique key as a prop for each similar list item:::10:::', async () => {
    const consoleSpy = jest.spyOn(console, 'error')
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
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

  it(':::RJSCPAUCLT_TEST_26:::When the HTTP GET request of the Home Route API call is in progress, then the page should consist of the HTML container element with the testid attribute value "homeRouteLoader":::5:::', async () => {
    renderWithBrowserRouter()
    await waitForElementToBeRemoved(() =>
      screen.queryByTestId('homeRouteLoader'),
    )
  })

  it(':::RJSCPAUCLT_TEST_27:::When the Home Route is opened, an HTTP GET request should be made to state wise covid19 data API with the given countrywide covid19 data API URL:::10:::', async () => {
    const fetchSpy = jest.spyOn(window, 'fetch').mockImplementation(() => ({
      ok: true,
      json: () => Promise.resolve(testingHomeDashBoardFixtures),
    }))
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    expect(fetchSpy.mock.calls[0][0]).toMatch(countryLevelCovidDashboardDataUrl)
    fetchSpy.mockRestore()
  })

  it(':::RJSCPAUCLT_TEST_28:::When the HTTP GET request in the Home Route is successful, then the Home Route should consist of "BsSearch" a react icon:::5:::', async () => {
    const promise = Promise.resolve(testingHomeDashBoardFixtures)
    window.history.pushState({}, 'Test page', '/')
    const fetchSpy = jest.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => promise,
      }),
    )

    const wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    await act(() => promise)
    await wrapper.update()
    expect(wrapper.find(BsSearch)).toHaveLength(1)
    fetchSpy.mockRestore()
  })

  it(':::RJSCPAUCLT_TEST_29:::When the HTTP GET request in the Home Route is successful, then the Home Route should consist of an HTML input element with the type attribute value as "search":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const inputFieldElement = screen.getByRole('searchbox')
    expect(inputFieldElement).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_30:::When the HTTP GET request in the Home Route is successful, then when the user provides a non-empty value in the search input, then the provided value should be displayed in that search input:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const inputFieldElement = screen.getByRole('searchbox')

    userEvent.type(inputFieldElement, 'and')
    expect(inputFieldElement).toHaveValue('and')
  })

  it(':::RJSCPAUCLT_TEST_31:::When the HTTP GET request in the Home Route is successful, when the user provides a non-empty value in the search input,then the Home Route should consist of an HTML unordered list element with the testid attribute value as "searchResultsUnorderedList" to display the search results:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const inputFieldElement = screen.getByRole('searchbox')

    userEvent.type(inputFieldElement, 'andhra')
    const unorderedListElement = screen.getByTestId(
      'searchResultsUnorderedList',
    )
    expect(unorderedListElement).toBeInTheDocument()
    expect(unorderedListElement.tagName).toBe('UL')
  })

  it(':::RJSCPAUCLT_TEST_32:::When the HTTP GET request in the Home Route is successful, then if the user provides a non-empty value in the search input, then the search results unordered list should contain the search results number of list items wrapped with Link from "react-router-dom":::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const inputFieldElement = screen.getByRole('searchbox')

    userEvent.type(inputFieldElement, 'an')
    const searchResultsContainer = await screen.getByTestId(
      'searchResultsUnorderedList',
    )
    expect(
      within(searchResultsContainer).getAllByRole('link').length,
    ).toBeGreaterThanOrEqual(searchResultsLength)
    expect(
      within(searchResultsContainer).getAllByRole('listitem').length,
    ).toBeGreaterThanOrEqual(searchResultsLength)
  })

  it(':::RJSCPAUCLT_TEST_33:::When the HTTP GET request in the Home Route is successful, then if the user provides a non-empty value in the search input, then the HTML unordered list with the testid attribute value "searchResultsUnorderedList" should contain all the state names which match the searched text:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const inputFieldElement = screen.getByRole('searchbox')

    userEvent.type(inputFieldElement, 'a')
    const searchResultsContainer = await screen.getByTestId(
      'searchResultsUnorderedList',
    )
    const searchResultElements = within(searchResultsContainer).getAllByRole(
      'listitem',
    )
    const searchResults = statesList.filter(state =>
      state.state_name.toLowerCase().includes('a'),
    )
    expect(
      within(searchResultElements[0]).getByText(searchResults[0].state_name),
    ).toBeInTheDocument()
    expect(
      within(searchResultElements[1]).getByText(searchResults[1].state_name),
    ).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_34:::When the HTTP GET request in the Home Route is successful, then if the user provides a non-empty value in the search input, then the HTML unordered list with the testid attribute value as "searchResultsUnorderedList" should contain the state codes of states which matches the search text:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const inputFieldElement = screen.getByRole('searchbox')

    userEvent.type(inputFieldElement, 'a')
    const searchResultsContainer = await screen.getByTestId(
      'searchResultsUnorderedList',
    )
    const searchResultElements = within(searchResultsContainer).getAllByRole(
      'listitem',
    )
    const searchResults = statesList.filter(state =>
      state.state_name.toLowerCase().includes('a'),
    )
    expect(
      within(searchResultElements[0]).getByText(searchResults[0].state_code),
    ).toBeInTheDocument()
    expect(
      within(searchResultElements[1]).getByText(searchResults[1].state_code),
    ).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_35:::When the HTTP GET request in the Home Route is successful, then if the user provides a non-empty value in the search input, then search results should contain the "BiChevronRightSquare" react icon:::5:::', async () => {
    const promise = Promise.resolve(testingHomeDashBoardFixtures)
    window.history.pushState({}, 'Test page', '/')
    const fetchSpy = jest.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => promise,
      }),
    )

    const wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    await act(() => promise)
    await wrapper.update()
    wrapper
      .find('input')
      .at(0)
      .simulate('change', {target: {value: 'Andhra'}})
    expect(wrapper.find(BiChevronRightSquare)).toHaveLength(1)
    fetchSpy.mockRestore()
  })

  it(':::RJSCPAUCLT_TEST_36:::When the HTTP GET request in the Home Route is successful, clicking on a search result item should navigate to State-specific Route with the pathname "state/:stateCode" and the State-specific Route should contain an HTML container with testid value "lineChartsContainer" and the text "Top Districts":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const inputFieldElement = await screen.getByRole('searchbox')

    userEvent.type(inputFieldElement, 'Andhra')
    const searchResultsContainer = await screen.getByTestId(
      'searchResultsUnorderedList',
    )
    const searchResultElements = within(searchResultsContainer).getAllByRole(
      'listitem',
    )
    const searchResults = statesList.filter(state =>
      state.state_name.toLowerCase().includes('andhra'),
    )

    userEvent.click(searchResultElements[0])
    expect(await window.location.pathname).toBe(
      `/state/${searchResults[0].state_code}`,
    )
    await waitFor(() =>
      screen.getByText(/Top Districts/i, {
        exact: false,
      }),
    )
    const lineChartsContainer = await waitFor(() =>
      screen.getByTestId('lineChartsContainer'),
    )
  })

  it(':::RJSCPAUCLT_TEST_37:::When the HTTP GET request in the Home Route is successful, then the page should contain an HTML container element with the testid attribute value "countryWideConfirmedCases" and the confirmed cases count of the state Andaman Nicobar received from the response:::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideConfirmedCasesContainer = screen.getByTestId(
      'countryWideConfirmedCases',
    )
    expect(countryWideConfirmedCasesContainer).toBeInTheDocument()
    expect(countryWideConfirmedCasesContainer.tagName).toBe('DIV')
  })

  it(':::RJSCPAUCLT_TEST_38:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "countryWideConfirmedCases" should contain the HTML paragraph element with the text content "Confirmed":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideConfirmedCasesContainer = screen.getByTestId(
      'countryWideConfirmedCases',
    )
    const paragraphElement = within(
      countryWideConfirmedCasesContainer,
    ).getByText(/Confirmed/i, {exact: false})
    expect(paragraphElement.tagName).toBe('P')
    expect(paragraphElement).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_39:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value "countryWideConfirmedCases" should contain an HTML image element with the alt attribute value "country wide confirmed cases pic":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideConfirmedCasesContainer = screen.getByTestId(
      'countryWideConfirmedCases',
    )
    const confirmedCasesImage = within(
      countryWideConfirmedCasesContainer,
    ).getByAltText('country wide confirmed cases pic')

    expect(confirmedCasesImage).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_40:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "countryWideConfirmedCases" should contain an HTML paragraph element with the text content as the total confirmed cases count from the stateWiseCoivdData API response:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideConfirmedCasesContainer = screen.getByTestId(
      'countryWideConfirmedCases',
    )
    expect(countryWideConfirmedCasesContainer.tagName).toBe('DIV')
    const paragraphEl = within(
      countryWideConfirmedCasesContainer,
    ).getByText(countryWideConfirmedCases, {exact: true})

    expect(paragraphEl).toBeInTheDocument()
    expect(paragraphEl.tagName).toBe('P')
  })

  it(':::RJSCPAUCLT_TEST_41:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "countryWideActiveCases" to display the total active cases related data:::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideActiveCasesContainer = screen.getByTestId(
      'countryWideActiveCases',
    )
    expect(countryWideActiveCasesContainer).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_42:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "countryWideActiveCases" should contain the HTML paragraph element with the text content "Active":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideActiveCasesContainer = screen.getByTestId(
      'countryWideActiveCases',
    )
    const paragraphElement = within(
      countryWideActiveCasesContainer,
    ).getByText(/Active/, {exact: false})
    expect(paragraphElement.tagName).toBe('P')
    expect(paragraphElement).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_43:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "countryWideActiveCases" should contain an HTML image element with the alt attribute value "country wide active cases pic":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideActiveCasesContainer = screen.getByTestId(
      'countryWideActiveCases',
    )
    const ActiveCasesImage = within(
      countryWideActiveCasesContainer,
    ).getByAltText('country wide active cases pic')
    expect(ActiveCasesImage).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_44:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value "countryWideActiveCases" should contain an HTML paragraph element with the text as the total active cases count from the stateWiseCoivdData API response:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideActiveCasesContainer = screen.getByTestId(
      'countryWideActiveCases',
    )
    const paragraphEl = within(
      countryWideActiveCasesContainer,
    ).getByText(countryWideActiveCases, {exact: true})
    expect(paragraphEl).toBeInTheDocument()
    expect(paragraphEl.tagName).toBe('P')
  })

  it(':::RJSCPAUCLT_TEST_45:::When the HTTP GET request in the Home Route is successful, then the Home Route should contain an HTML container element with the testid attribute value "countryWideRecoveredCases" to display the total recovered cases related data:::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideRecoveredCasesContainer = screen.getByTestId(
      'countryWideRecoveredCases',
    )
    expect(countryWideRecoveredCasesContainer).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_46:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "countryWideRecoveredCases" should contain the HTML paragraph element with the text content "Recovered":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideRecoveredCasesContainer = screen.getByTestId(
      'countryWideRecoveredCases',
    )
    const paragraphElement = within(
      countryWideRecoveredCasesContainer,
    ).getByText(/Recovered/i, {exact: false})
    expect(paragraphElement.tagName).toBe('P')
    expect(paragraphElement).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_47:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value "countryWideRecoveredCases" should contain an HTML image element with the alt attribute value as "country wide recovered cases pic":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideRecoveredCasesContainer = screen.getByTestId(
      'countryWideRecoveredCases',
    )
    const RecoveredCasesImage = within(
      countryWideRecoveredCasesContainer,
    ).getByAltText('country wide recovered cases pic')

    expect(RecoveredCasesImage).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_48:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value "countryWideRecoveredCases" should contain the total recovered cases count from the stateWiseCoivdData API response:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideRecoveredCasesContainer = screen.getByTestId(
      'countryWideRecoveredCases',
    )
    const paragraphEl = within(
      countryWideRecoveredCasesContainer,
    ).getByText(countryWideRecoveredCases, {exact: true})

    expect(paragraphEl).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_49:::When the HTTP GET request in the Home Route is successful, then the Home Route should contain an HTML container element with the testid attribute value "countryWideDeceasedCases" to display the total deceased cases related data:::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideDeceasedCasesContainer = await screen.getByTestId(
      'countryWideDeceasedCases',
    )
    expect(countryWideDeceasedCasesContainer).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_50:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value "countryWideDeceasedCases" should contain the HTML paragraph element with the text content "Deceased":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideDeceasedCasesContainer = screen.getByTestId(
      'countryWideDeceasedCases',
    )
    const paragraphElement = within(
      countryWideDeceasedCasesContainer,
    ).getByText(/Deceased/i, {exact: false})
    expect(paragraphElement.tagName).toBe('P')
    expect(paragraphElement).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_51:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "countryWideDeceasedCases" should contain an HTML image element with the alt attribute value as "country wide deceased cases pic":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideDeceasedCasesContainer = await screen.getByTestId(
      'countryWideDeceasedCases',
    )
    const DeceasedCasesImage = within(
      countryWideDeceasedCasesContainer,
    ).getByAltText('country wide deceased cases pic')
    expect(DeceasedCasesImage).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_52:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "countryWideDeceasedCases" should contain the total deceased cases count from the stateWiseCoivdData API response:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const countryWideDeceasedCasesContainer = screen.getByTestId(
      'countryWideDeceasedCases',
    )
    const paragraphEl = within(
      countryWideDeceasedCasesContainer,
    ).getByText(countryWideDeceasedCases, {exact: true})
    expect(paragraphEl).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_53:::When the HTTP GET request in the Home Route is successful, then the Home Route should contain an HTML container element with the testid attribute value as "stateWiseCovidDataTable" to show the state-wise covid19 data:::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    expect(screen.getByTestId('stateWiseCovidDataTable')).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_54:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "stateWiseCovidDataTable" should contain an Unordered list element:::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const unorderdListElement = within(statewiseCovidDataTable).getByRole(
      'list',
    )
    expect(unorderdListElement.tagName).toBe('UL')
    expect(unorderdListElement).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_55:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "stateWiseCovidDataTable" should contain the text content "States/UT":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statesStatsTable = await screen.findByTestId(
      'stateWiseCovidDataTable',
    )
    const statesUt = 'States/UT'
    expect(within(statesStatsTable).getByText(statesUt)).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_56:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "stateWiseCovidDataTable" should contain the "FcGenericSortingAsc" react icon:::5::: ', async () => {
    const promise = Promise.resolve(testingHomeDashBoardFixtures)
    window.history.pushState({}, 'Test page', '/')
    const fetchSpy = jest.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => promise,
      }),
    )

    const wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    await act(() => promise)
    await wrapper.update()
    expect(wrapper.find(FcGenericSortingAsc)).toHaveLength(1)
    fetchSpy.mockRestore()
  })

  it(':::RJSCPAUCLT_TEST_57:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "stateWiseCovidDataTable" should contain the "FcGenericSortingDesc":::5::: ', async () => {
    const promise = Promise.resolve(testingHomeDashBoardFixtures)
    window.history.pushState({}, 'Test page', '/')
    const fetchSpy = jest.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => promise,
      }),
    )

    const wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    await act(() => promise)
    await wrapper.update()
    expect(wrapper.find(FcGenericSortingDesc)).toHaveLength(1)
    fetchSpy.mockRestore()
  })

  it(':::RJSCPAUCLT_TEST_58:::When the HTTP GET request in the Home Route is successful, then clicking on the HTML button element with the testid attribute value "ascendingSort", should change state-wise covid19 details into ascending order of their state names:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const ascendingSortButton = within(statewiseCovidDataTable).getByTestId(
      'ascendingSort',
    )
    const unorderdListElement = within(statewiseCovidDataTable).getByRole(
      'list',
    )
    userEvent.click(ascendingSortButton)
    const listItems = within(unorderdListElement).getAllByRole('listitem')
    expect(
      within(listItems[0]).getByText(statesList[0].state_name),
    ).toBeInTheDocument()
    expect(
      within(listItems[statesList.length - 1]).getByText(
        statesList[statesList.length - 1].state_name,
      ),
    ).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_59:::When the HTTP GET request in the Home Route is successful, then clicking on the HTML button element with the testid attribute value "descendingSort", should change state-wise covid19 details into descending order of their state names:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const descendingButton = within(statewiseCovidDataTable).getByTestId(
      'descendingSort',
    )
    const unorderdListElement = within(statewiseCovidDataTable).getByRole(
      'list',
    )
    userEvent.click(descendingButton)
    const listItems = within(unorderdListElement).getAllByRole('listitem')

    expect(
      within(listItems[0]).getByText(
        statesList[statesList.length - 1].state_name,
      ),
    ).toBeInTheDocument()
    expect(
      within(listItems[statesList.length - 1]).getByText(
        statesList[0].state_name,
      ),
    ).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_60:::When the HTTP GET request in the Home Route is successful, clicking on the descending sort button, and then clicking on the ascending sort button should change state-wise covid19 details into ascending order their state names:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const ascendingSortButton = within(statewiseCovidDataTable).getByTestId(
      'ascendingSort',
    )
    const descendingSortButton = within(statewiseCovidDataTable).getByTestId(
      'descendingSort',
    )
    const unorderdListElement = within(statewiseCovidDataTable).getByRole(
      'list',
    )
    userEvent.click(descendingSortButton)
    userEvent.click(ascendingSortButton)
    const listItems = within(unorderdListElement).getAllByRole('listitem')
    expect(
      within(listItems[0]).getByText(statesList[0].state_name),
    ).toBeInTheDocument()
    expect(
      within(listItems[statesList.length - 1]).getByText(
        statesList[statesList.length - 1].state_name,
      ),
    ).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_61:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "stateWiseCovidDataTable" should contain an HTML paragraph element with the text content "Confirmed":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const headingConfirmed = within(
      statewiseCovidDataTable,
    ).getByText(/Confirmed/i, {exact: false})
    expect(headingConfirmed).toBeInTheDocument()
    expect(headingConfirmed.tagName).toBe('P')
  })

  it(':::RJSCPAUCLT_TEST_62:::When the HTTP GET request in the Home Route is successful, then the HTML container with the testid attribute value as "stateWiseCovidDataTable" should contain an HTML paragraph element with the text content "Active":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const headingActive = within(statewiseCovidDataTable).getByText(/Active/i, {
      exact: false,
    })
    expect(headingActive).toBeInTheDocument()
    expect(headingActive.tagName).toBe('P')
  })

  it(':::RJSCPAUCLT_TEST_63:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "stateWiseCovidDataTable" should contain an HTML paragraph element with the text "Recovered":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const headingRecovered = within(
      statewiseCovidDataTable,
    ).getByText(/Recovered/i, {exact: false})
    expect(headingRecovered).toBeInTheDocument()
    expect(headingRecovered.tagName).toBe('P')
  })

  it(':::RJSCPAUCLT_TEST_64:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "stateWiseCovidDataTable should contain an HTML paragraph element with the text content "Deceased":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const headingDeceased = within(
      statewiseCovidDataTable,
    ).getByText(/Deceased/i, {exact: false})
    expect(headingDeceased).toBeInTheDocument()
    expect(headingDeceased.tagName).toBe('P')
  })

  it(':::RJSCPAUCLT_TEST_65:::When the HTTP GET request in the Home Route is successful, then the HTML container with the testid attribute value as "stateWiseCovidDataTable" contain an HTML paragraph element with the text content "Population":::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const headingActive = within(
      statewiseCovidDataTable,
    ).getByText(/Population/i, {exact: false})
    expect(headingActive).toBeInTheDocument()
    expect(headingActive.tagName).toBe('P')
  })

  it(':::RJSCPAUCLT_TEST_66:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "stateWiseCovidDataTable" should contain an HTML unordered list element to display the state-wise covid19 data:::5:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const unorderdListElement = within(statewiseCovidDataTable).getByRole(
      'list',
    )
    expect(unorderdListElement.tagName).toBe('UL')
  })

  it(':::RJSCPAUCLT_TEST_67:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value as "stateWiseCovidDataTable" should contain all states covid19 stats wrapped with HTML list item element:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const unorderdListElement = within(statewiseCovidDataTable).getByRole(
      'list',
    )
    const listItems = within(unorderdListElement).getAllByRole('listitem')
    expect(unorderdListElement.tagName).toBe('UL')
    expect(unorderdListElement).toBeInTheDocument()
    expect(listItems.length).toBeGreaterThanOrEqual(statesList.length)
    expect(
      within(unorderdListElement).getAllByRole('listitem').length,
    ).toBeGreaterThanOrEqual(statesList.length)
  })

  it(':::RJSCPAUCLT_TEST_68:::When the HTTP GET request in the Home Route is successful, then each list item in the HTML container element with the testid attribute value as "stateWiseCovidDataTable" should contain the respective state name from the stateWiseCoivdData API response:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const unorderdListElement = within(statewiseCovidDataTable).getByRole(
      'list',
    )
    const listItems = within(unorderdListElement).getAllByRole('listitem')
    expect(
      within(listItems[0]).getByText(statesList[0].state_name),
    ).toBeInTheDocument()
    expect(
      within(listItems[1]).getByText(statesList[1].state_name),
    ).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_69:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value "stateWiseCovidDataTable" should contain the confirmed cases count of each state by the alphabetical order of the state names:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const unorderdListElement = within(statewiseCovidDataTable).getByRole(
      'list',
    )
    const listItems = within(unorderdListElement).getAllByRole('listitem')
    expect(
      within(listItems[0]).getByText(
        testingHomeDashBoardFixtures[statesList[0].state_code].total.confirmed,
      ),
    ).toBeInTheDocument()
    expect(
      within(listItems[1]).getByText(
        testingHomeDashBoardFixtures[statesList[1].state_code].total.confirmed,
      ),
    ).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_70:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value "stateWiseCovidDataTable" should contain each state\'s active cases count by the alphabetical order of the state names:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const unorderdListElement = within(statewiseCovidDataTable).getByRole(
      'list',
    )
    const listItems = within(unorderdListElement).getAllByRole('listitem')

    expect(
      within(listItems[0]).getByText(
        testingHomeDashBoardFixtures[statesList[0].state_code].total.active,
      ),
    ).toBeInTheDocument()
    expect(
      within(listItems[1]).getByText(
        testingHomeDashBoardFixtures[statesList[1].state_code].total.active,
      ),
    ).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_71:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value "stateWiseCovidDataTable" should contain each state\'s recovered cases count by the alphabetical order of the state names:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const unorderdListElement = within(statewiseCovidDataTable).getByRole(
      'list',
    )
    const listItems = within(unorderdListElement).getAllByRole('listitem')
    expect(
      within(listItems[0]).getByText(
        testingHomeDashBoardFixtures[statesList[0].state_code].total.recovered,
      ),
    ).toBeInTheDocument()
    expect(
      within(listItems[1]).getByText(
        testingHomeDashBoardFixtures[statesList[1].state_code].total.recovered,
      ),
    ).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_72:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value "stateWiseCovidDataTable" should contain each state\'s deceased cases count by the alphabetical order of the state names:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const unorderdListElement = within(statewiseCovidDataTable).getByRole(
      'list',
    )
    const listItems = within(unorderdListElement).getAllByRole('listitem')
    expect(
      within(listItems[0]).getByText(
        testingHomeDashBoardFixtures[statesList[0].state_code].total.deceased,
      ),
    ).toBeInTheDocument()
    expect(
      within(listItems[1]).getByText(
        testingHomeDashBoardFixtures[statesList[1].state_code].total.deceased,
      ),
    ).toBeInTheDocument()
  })

  it(':::RJSCPAUCLT_TEST_73:::When the HTTP GET request in the Home Route is successful, then the HTML container element with the testid attribute value "stateWiseCovidDataTable" should contain each state\'s population by the alphabetical order of the state names:::10:::', async () => {
    renderWithBrowserRouter()
    expect(
      await screen.findByText(andamanConfirmedCasesCount),
    ).toBeInTheDocument()
    const statewiseCovidDataTable = screen.getByTestId(
      'stateWiseCovidDataTable',
    )
    const unorderdListElement = within(statewiseCovidDataTable).getByRole(
      'list',
    )
    const listItems = within(unorderdListElement).getAllByRole('listitem')

    expect(
      within(listItems[0]).getByText(
        testingHomeDashBoardFixtures[statesList[0].state_code].meta.population,
      ),
    ).toBeInTheDocument()
    expect(
      within(listItems[1]).getByText(
        testingHomeDashBoardFixtures[statesList[1].state_code].meta.population,
      ),
    ).toBeInTheDocument()
  })
})
