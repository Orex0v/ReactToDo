import React from 'react';

const MyFilter = ({ filter, setFilter, option, value, onChange }) => {
  return (
    <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
      <p className="small mb-0 me-2 text-muted">Filter</p>
      <select
        className="select"
        onChange={(selectedSort) => {
          console.log(selectedSort.target.value);
          setFilter({ ...filter, sort: selectedSort.target.value });
        }}
      >
        <option value={'all'}>All</option>
        <option value={'complited'}>Completed</option>
        <option value={'active'}>Active</option>
      </select>
    </div>
  );
};

export default MyFilter;
