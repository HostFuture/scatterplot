import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FileInputForm from './form';
import ScatterPlot from './scatterplot';


const Content = () => {
  const [isDataAvailable, toggleDataAvailable] = useState(false);
  const [plotData, setPlotData] = useState(null);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant='h5' gutterBottom>
        This page is designed as part of the assignment
        for <b>Full-stack Code Test for SQSE (India) Position</b>
      </Typography>
      {
        isDataAvailable
        ? <Stack spacing={2}>
            <ScatterPlot plotData={plotData} />
            <canvas id='scatterchart' style={{marginTop:50, maxHeight:'75vh'}}></canvas>
          </Stack>
        : <FileInputForm
            updateStatus={toggleDataAvailable}
            setPlotData={setPlotData}
          />
      }
    </Box>
  )
}

export default Content;