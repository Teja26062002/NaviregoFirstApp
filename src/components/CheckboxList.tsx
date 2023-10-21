
import React, { useState } from 'react';
import DynamicComponent from './Display';

const CheckboxList: React.FC = () => {
  const [checked, setChecked] = useState<boolean[]>(new Array(7).fill(false));
  const [dataArray, setDataArray] = useState<string[]>(new Array(7).fill(''));

  const toggleCheckbox = (index: number) => {
    const updatedChecked = [...checked];
    updatedChecked[index] = !updatedChecked[index];
    setChecked(updatedChecked);
  };

  return (
    <div className='display-container'>
      {checked.map((isChecked, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => toggleCheckbox(index)}
          />
          Checkbox {index}
        </label>
      ))}
      {checked.map((isChecked, index) => (
        isChecked && <DynamicComponent key={index} index={index} />
      ))}
    </div>
  );
};

export default CheckboxList;
