import React from "react";
import { useSelector, useDispatch } from "react-redux";
import allAction from "../../redux/actions/index";
import { ICombineReducers } from "../../redux/reducers";

const LoginPage: React.FC = () => {
  const stateRedux = useSelector(
    (state: ICombineReducers) => state.testReducer
  );
  const dispatch = useDispatch();

  return (
    <div>
      <p>Login Pages</p>
      <input
        type="text"
        placeholder="username"
        onChange={(e) =>
          dispatch(allAction.testAction.setUsername(e.target.value))
        }
        value={stateRedux.username}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) =>
          dispatch(allAction.testAction.setPassword(e.target.value))
        }
        value={stateRedux.password}
      />
    </div>
  );
};

export default LoginPage;
