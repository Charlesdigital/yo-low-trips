import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function DestinationFilter(props) {
  // console.log("props.flightData", props.flightData.flights)

  // const [value, setValue] = React.useState(options[0]);
  // const [inputValue, setInputValue] = React.useState('');
  return (
    <Autocomplete
    onChange={(event, newValue) => {
      props.setDestination(newValue.destination)
    }}

    onInputChange={(event, newInputValue) => {

      props.setDestination(newInputValue ? newInputValue : null);
    }}
      
      sx={{ width: 300 }}
      options={props.flightData}
      autoHighlight
      getOptionLabel={(option) => option.destination}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.destination}
        </Box>
      )}
      renderInput={(params) => (
        // console.log("params", params),
        <TextField
          {...params}
          label="Choose a destination"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

// {city: "", country: "", code: ""},

const destinations = [
  {city: "Toronto, ON", country: "Canada", code: "YYZ"},
  {city: "Atlanta, GA", country: "USA", code: "ATL"},
  {city: "Phuket", country: "Thailand", code: "HKT"},
]