import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import checkStatus from '../redux/categories/categories';

const Category = () => {
  const Status = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const display = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <p>
        {Status}
      </p>
      <button className="btn" onClick={() => display()} type="button">Check Status</button>
    </>
  );
};
export default Category;
