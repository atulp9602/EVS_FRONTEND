import {
  Autocomplete,
  Box,
  Checkbox,
  ListItemText,
  TextField,
} from "@mui/material";
import React from "react";

const MyEvents = () => {
  const [value, setValue] = React.useState([]);
  const options = [
    { title: "Option 1", year: 1994 },
    { title: "Option 2", year: 1972 },
    { title: "Option 3", year: 1974 },
  ];

  const handleOptionClick = (option) => {
    if (value.some((val) => val.title === option.title)) {
      // If the option is already selected, unselect it
      const newValue = value.filter((val) => val.title !== option.title);
      setValue(newValue);
    } else {
      // If the option is not selected, add it to the selection
      const newValue = [...value, option];
      setValue(newValue);
    }
  };

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 64px)",
      }}
    >
      <Autocomplete
        multiple
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        id="controllable-states-demo"
        options={options}
        getOptionLabel={(option) => option?.title}
        renderOption={(props, option) => (
          <li {...props} onClick={() => handleOptionClick(option)}>
            <Checkbox
              checked={value.some((val) => val.title === option.title)}
            />
            <ListItemText primary={option.title} />
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Controllable" variant="outlined" />
        )}
      />
    </Box>
  );
};

export default MyEvents;
