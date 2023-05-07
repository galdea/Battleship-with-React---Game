import React from 'react';

const Cell = ({ row, col, cellData, onClick }) => {
  let cellClass = 'cell';
  let cellContent = '';
  if (cellData === 'empty') {
    cellClass += ' empty';
  } else if (cellData === 'miss') {
    cellClass += ' miss';
    cellContent = '💦';
  } else if (cellData === 'hit') {
    cellClass += ' hit';
    cellContent = '💣';
  } else {
    cellContent = cellData[1] === 'h' ? 'X' : '';
    if (cellData[1] === 's' && cellData[0] === '') {
      cellClass += ' ship';
    } else if (cellData[1] === 'h') {
      cellClass += ' hit-ship';
    }
  }

  return (
    <div className={cellClass} onClick={() => onClick(row, col)}>
      {cellContent}
    </div>
  );
};

export default Cell;
