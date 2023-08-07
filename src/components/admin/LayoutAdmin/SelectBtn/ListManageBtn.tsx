/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useReportStatusMutation } from '../../../../hooks/query/useReportStatusMutation';
import Swal from 'sweetalert2';

const OPTIONS = [
  { value: 'rejected', name: '유지' },
  { value: 'accepted', name: '삭제' },
  { value: 'pending', name: '대기' }
];
interface ColorOptions {
  [key: string]: string;
}
const COLORS: ColorOptions = {
  rejected: '#bec1c7',
  accepted: '#e04938',
  pending: '#344054'
};

interface Props extends React.HTMLAttributes<HTMLSelectElement> {
  defaultValue: string;
  reportId: number;
  reportPostRefetch?: () => void;
  reportCommentRefetch?: () => void;
  status: string;
}

const ReportSelectBox = ({ reportId, reportPostRefetch, reportCommentRefetch, status }: Props) => {
  const [selectedValue, setSelectedValue] = useState(status);

  const { mutate: reportStatusMutate } = useReportStatusMutation();

  const handleReportStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedValue(value);

    if (value === 'accepted') {
      reportStatusMutate(
        {
          id: reportId,
          status: 'accepted'
        },
        {
          onSuccess: () => {
            Swal.fire('처리가 완료 되었습니다.');
            reportPostRefetch && reportPostRefetch();
            reportCommentRefetch && reportCommentRefetch();
          },
          onError: (err: any) => {
            Swal.fire(err.response.data.error);
          }
        }
      );
    } else if (value === 'rejected') {
      reportStatusMutate(
        {
          id: reportId,
          status: 'rejected'
        },
        {
          onSuccess: () => {
            Swal.fire('처리가 완료 되었습니다.');
            reportPostRefetch && reportPostRefetch();
            reportCommentRefetch && reportCommentRefetch();
          },
          onError: (err: any) => {
            Swal.fire(err.response.data.error);
          }
        }
      );
    }
  };

  return (
    <ReportHandleSelect color={COLORS[selectedValue]} onChange={handleReportStatus}>
      {OPTIONS.map(option => (
        <option key={option.value} value={option.value} selected={status === option.value}>
          {option.name}
        </option>
      ))}
    </ReportHandleSelect>
  );
};

export default ReportSelectBox;

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
