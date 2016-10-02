/*
 *
 * Grids
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';

export class GridsBase extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // eslint-disable-next-line
  render() {

    const { rows, columns } = this.props;
    const rowGetter = i => rows[i];
    return (
      <div>
        <ReactDataGrid
          columns={columns}
          rows={rows}
          rowGetter={rowGetter}
          rowsCount={rows.length}
          minHeight={500}
        />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(GridsBase);
