/*
 *
 * Components
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Tabs, Tab } from 'material-ui/Tabs';
import { selectComponentsDemos } from './selectors';
import Charts from '../Charts';
import Grids from '../Grids';
import randomDataSelector, { createRows, createColumns } from './randomDataSelector';

const tabStyles = {
  marginTop: '13px',
};

export class Components extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { ui, data } = this.props;
    const rows = createRows(200);
    const columns = createColumns();
    return (
      <div>
        <Tabs style={tabStyles}>
          <Tab label="Charts" >
            <Charts ui={ui} data={data} />
          </Tab>
          <Tab label="Grids" >
            <Grids rows={rows} columns={columns} />
          </Tab>
        </Tabs>


      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: randomDataSelector(),
  ui: selectComponentsDemos(),
});

Components.propTypes = {
  ui: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  }),
  data: React.PropTypes.array,
};

export default connect(mapStateToProps)(Components);
