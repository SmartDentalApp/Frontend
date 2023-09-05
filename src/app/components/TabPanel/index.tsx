import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { SyntheticEvent, useState } from 'react';
import { IBasicTabsProps } from './types';

export default function TabPanel({ tabItems }: IBasicTabsProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box className="mb-5" sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="dynamic tabs">
          {tabItems.map((item, index) => (
            <Tab key={index} label={item.label} />
          ))}
        </Tabs>
      </Box>
      {tabItems.map((item, index) => (
        <div key={index} hidden={value !== index}>
          {item.content}
        </div>
      ))}
    </Box>
  );
}