import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import { OutlinedInput, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';


type ItemSelectorProps = {
  data: string[],
  label: string,
  callBack: (data:string)=>void
};

const ItemSelector: React.FC<ItemSelectorProps> = ({ data, label, callBack }) => {
  const [itemName, setItemName] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    callBack(event.target.value as string);
    setItemName(event.target.value as string);
  };
console.log(data);
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
        {data?.map((item, index)=><MenuItem key={label+item+index} value={item}>{item}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

export default ItemSelector;