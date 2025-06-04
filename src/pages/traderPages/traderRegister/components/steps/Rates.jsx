import React from 'react';
import { 
    Box, MenuItem, Switch, FormControlLabel 
} from '@mui/material';

import LabelFor from '../../../../../components/form/LabelFor';
import { TextInput } from '../../../../../components/form/InputFields';

const Rates = ({ 
    formData, 
    handleChange, 
    setFormData 
}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Box>
      <div className="grid grid-cols-6 items-center mb-4 gap-4">
        <div className='col-span-4 flex flex-col gap-1'>
          <LabelFor name="gst" text="Is your company currently registered for GST?" />
          <LabelFor
            name="gst2"
            text="The General Service Tax or GST is a 10% fee on top of your original charge."
            className="text-sm text-gray-500"
          />
        </div>
        <div className='col-span-2 flex items-center'>
          <FormControlLabel
            control={<Switch checked={formData.gstRegistered} onChange={(e) => setFormData({ ...formData, gstRegistered: e.target.checked })} />}
          />
        </div>
      </div>
    </Box>
    <Box>
      <LabelFor name="areaOfService" text="Area of Service" />
      <LabelFor name="areaOfService2"
        text="Your input in the fields will also determine your Area of Service. We will recommend you in the area."
        className="text-sm text-gray-500"
      />
    </Box>
    <Box>
      <LabelFor name="state" text="State" required="yes" />
      <TextInput select required name="state" value={formData.state} onChange={handleChange}>
        <MenuItem value="one">Option 1</MenuItem>
        <MenuItem value="two">Option 2</MenuItem>
      </TextInput>
    </Box>
    <Box>
      <LabelFor name="municipality" text="Municipality" required='yes' />
      <TextInput select required name="municipality" value={formData.municipality} onChange={handleChange}>
        <MenuItem value="one">Option 1</MenuItem>
        <MenuItem value="two">Option 2</MenuItem>
      </TextInput>
    </Box>
    <Box>
      <LabelFor name="city" text="City" required='yes' />
      <TextInput select required name="city" value={formData.city} onChange={handleChange}>
        <MenuItem value="one">Option 1</MenuItem>
        <MenuItem value="two">Option 2</MenuItem>
      </TextInput>
    </Box>
    <Box>
      <LabelFor name="addressLineOne" text="Address Line 1" required='yes' />
      <TextInput name="addressLineOne" onChange={handleChange} value={formData.addressLineOne} />
    </Box>
    <Box>
      <LabelFor name="addressLineTwo" text="Address Line 2" required='yes' />
      <TextInput name="addressLineTwo" onChange={handleChange} value={formData.addressLineTwo} />
    </Box>
    <Box>
      <LabelFor name="postalCode" text="Postal Code" required='yes' />
      <TextInput name="postalCode" onChange={handleChange} placeholder='3070' value={formData.postalCode} />
    </Box>
  </Box>
);

export default Rates;