import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiAlert  from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});


const FileInputForm = ({ updateStatus, setPlotData }) => {
  const [error, setError] = React.useState(null);

  const onSubmit = () => {
    const files = document.getElementById('dataset').files;
    const file = files[0];

    if (file.type !== 'text/csv') {
      setError('The only supported file type is .csv')
    } else if (file.size <= 0) {
      setError('The file does not contain any data')
    } else {
      const formData = new FormData();
      formData.append('file', file);

      fetch('/api/visualize/', {
        method: 'POST',
        body: formData,
      }).then(r => r.json()
      ).then(ret => {
        if(ret.status === 200) {
          setPlotData(ret.data);
          updateStatus(true);
        } else {
          setError(ret.msg);
        }
      })
    }
  }

  const generateData = () => {
    fetch('/api/visualize/random/', {
    }).then(r => r.json()
    ).then(ret => {
      if(ret.status === 200) {
        setPlotData(ret.data);
        updateStatus(true);
      } else {
        setError(ret.msg);
      }
    })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(null);
  };

  return (
    <Box sx={{ pt:4 }}>
      <Typography variant='subtitle1' gutterBottom>
        To initiate with the scatterplot, please upload a CSV file
        containing the dataset.
      </Typography>

      <Button variant='contained' component='label' sx={{ mt: 1 }}>
        Upload Dataset
        <input
          type='file'
          id='dataset'
          accept='.csv'
          hidden
          onInput={onSubmit}
        />
      </Button>
      <Button
        variant='contained'
        component='label'
        sx={{ mt: 1, ml: 1 }}
        onClick={generateData}
      >
        Generate Dataset
      </Button>

      <Snackbar
        open={error !== null}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          severity='error'
          sx={{ width: '100%' }}
          onClose={handleClose}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>

  )
}

export default FileInputForm;
