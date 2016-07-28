/*
 * A simple nvd3 line chart
 */

import React from 'react';
import NVD3Chart from 'react-nvd3';

function getDatum(data, colors) {
  const datum = [];
  const arrayLength = data.length;
  for (let i = 0; i < arrayLength; i++) {
    datum.push({
      values: data[i],
      key: `Series  ${i}`,
      color: colors.shift(),
    });
  }
  return datum;
}


const MultiBarChartNvd3 = ({ data, colors, width, height }) => {
  const datum = getDatum(data, colors.slice(0));
  return (
    <div>
      <NVD3Chart
        datum={datum}
        groupSpacing={0.5}
        id="lineChart"
        type="multiBarChart"
        width={width}
        height={height}
        reduceXTicks={false}
        rotateLabels={40}
        x="x"
        y="y"
      />
    </div>
  );
};

MultiBarChartNvd3.propTypes = {
  height: React.PropTypes.number,
  width: React.PropTypes.number,
  colors: React.PropTypes.array,
  data: React.PropTypes.array,
};

export default MultiBarChartNvd3;
