/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
import React, { useState } from 'react';
import { styled } from 'styled-components';

const OPTIONS = [
  { value: 'Normal', name: '유지' },
  { value: 'Delete', name: '삭제' },
  { value: 'WaitingProgress', name: '대기' }
];
interface ColorOptions {
  [key: string]: string;
}
const COLORS: ColorOptions = {
  Normal: '#bec1c7',
  Delete: '#e04938',
  WaitingProgress: '#344054'
};

interface Props extends React.HTMLAttributes<HTMLSelectElement> {
  defaultValue: string;
}

const SelectBox = (props: Props) => {
  const [selectedValue, setSelectedValue] = useState(props.defaultValue);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <ReportHandleSelect
      color={COLORS[selectedValue]}
      defaultValue={props.defaultValue}
      onChange={handleChange}
    >
      {OPTIONS.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </ReportHandleSelect>
  );
};

function SelectBoxOptionProps() {
  return <SelectBox defaultValue="WaitingProgress"></SelectBox>;
}
export default SelectBoxOptionProps;

const ReportHandleSelect = styled.select<{ color: string }>`
  display: block;
  width: 60%;
  padding: 0.7rem;
  background-color: ${props => props.color || '#4e2bf5'};
  border-radius: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 0;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;