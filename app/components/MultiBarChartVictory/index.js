/**
*
* A multi bar chart using c3
*
*/
/*
 * A simple nvd3 line chart
 */

import React from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryBar } from 'victory';

function getDatum(data) {
  const formattedSeries = [];
  const arrayLength = data.length;

  for (let i = 0; i < arrayLength; i += 1) {
    formattedSeries.push([]);
  }
  for (let i = 0; i < arrayLength; i += 1) {
    data[i].map((val) => formattedSeries[i].push({ x: val.x, y: val.y }));
  }
  // console.log(formattedSeries);
  return formattedSeries[0];
}


const style = {
  parent: { border: '1px solid #ccc', margin: '2%', maxWidth: '40%' },
};


const MultiBarChartVictory = ({ data, width, height }) =>
   (
     <VictoryChart
       style={style}
       domainPadding={{ x: 30, y: 30 }}
       height={height}
       width={width}
       events={[{
         childName: 'bar',
         target: 'data',
       }]}
     >
       <VictoryBar
         name="bar"
         style={{ data: { width: 35, fill: 'blue' } }}
         data={getDatum(data)}
       />
     </VictoryChart>
  );


MultiBarChartVictory.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  data: PropTypes.array,
};

export default MultiBarChartVictory;
