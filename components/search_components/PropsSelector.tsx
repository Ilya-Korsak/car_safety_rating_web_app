import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import { OutlinedInput, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';


type ItemSelectorProps = {
  data: string[],
  label: string
};

const ItemSelector: React.FC<ItemSelectorProps> = ({ data, label }) => {
  const [itemName, setItemName] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setItemName(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={itemName}
        label={label}
        onChange={handleChange}
      >
        {data.map((item)=><MenuItem value={item}>{item}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

export default ItemSelector;