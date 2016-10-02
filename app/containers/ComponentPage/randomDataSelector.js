import { createSelector } from 'reselect';
import moment from 'moment';
import Chance from 'chance';
import faker from 'faker';

const chance = new Chance();
const months = moment.months();

export const adjustMonths = (dataPoints) => {
  if (dataPoints <= 12) {
    return months.slice(0, dataPoints);
  } else if (dataPoints > 12) {
    const adjustedMonths = [];
    for (let i = 0; i < dataPoints; i += 1) {
      adjustedMonths.push(moment.months(i));
    }
    return adjustedMonths;
  }
  return months;
};

export const generateBarChartData = (dataPoints, seriesCount) => {
  const series = [];
  const totalMonths = adjustMonths(dataPoints);
  const randomMonth = month => ({ x: month, y: chance.integer({ min: 100, max: 1000 }) });

  for (let i = 0; i < seriesCount; i += 1) {
    series.push(totalMonths.map(month => randomMonth(month)));
  }

  return series;
};


const selectDataRanges = () => (state) => {
  const { seriesCount, dataPoints } = state.get('controlPanel').toJS();
  return { seriesCount, dataPoints };
};

// via https://github.com/adazzle/react-data-grid/blob/f5656244c18c287aee5c7a14e73d56f11365e7f9/examples/scripts/FakeObjectDataStore.js
// eslint-disable-next-line
const createFakeRowObjectData = (index) => {
  return {
    id: `id_${index}`,
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
    title: faker.name.prefix(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    catchPhrase: faker.company.catchPhrase(),
  };
};
export const createRows = (numberOfRows) => {
  const rows = [];
  for (let i = 0; i < numberOfRows; i += 1) {
    rows[i] = createFakeRowObjectData(i);
  }
  return rows;
};

// eslint-disable-next-line
export const createColumns = () => {
  return [

    {
      key: 'firstName',
      name: 'First Name',
      sortable: false,
    },
    {
      key: 'lastName',
      name: 'Last Name',
      sortable: false,
    },
    {
      key: 'email',
      name: 'Email',
      sortable: false,
    },
    {
      key: 'tite',
      name: 'Title',
      sortable: false,
    },
    {
      key: 'catchPhrase',
      name: 'Catch Phrase',
    },
  ];
};
/**
 * Default selector used by ControlPanel
 */

const randomDataSelector = () => createSelector(
  selectDataRanges(),
  ranges => generateBarChartData(ranges.dataPoints, ranges.seriesCount)
);

export default randomDataSelector;
