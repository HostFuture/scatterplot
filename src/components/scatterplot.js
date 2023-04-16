import { useState } from 'react';
import Chart from 'chart.js/auto';
import Button from '@mui/material/Button';


const ScatterPlot = ({ plotData }) => {
  const [show, setShow] = useState(true);

  const showChart = () => {
    const ctx = document.getElementById('scatterchart');
    const data = plotData;
    setShow(false);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: plotData.line.labels,
        datasets: [{
          type: 'bubble',
          label: 'Data2',
          data: plotData.scatter,
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          borderColor: 'rgba(54, 162, 235, 1)',
        }]
      }
    })
  }

  return(
    <>
      {show &&
        <Button
          component='label'
          variant='contained'
          onClick={showChart}
          sx={{ mt: 3 }}
          hidden={show}
        >
          Show Chart
        </Button>
      }
    </>
  )
}

export default ScatterPlot;
