import React from "react";
import { useSelector } from 'react-redux'
import { ICombineReducers } from '../../redux/reducers'

const MainPage: React.FC = () => {
  const stateRedux = useSelector((state: ICombineReducers) => state.testReducer)
  return (
    <div>
      <p>Main Pages</p>
      <p>Hello {stateRedux.username}</p>
    </div>
  );
}

export default MainPage;
