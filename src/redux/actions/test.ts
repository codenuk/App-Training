const setUsername = (value: string): { type: string; username: string } => {
  return {
    type: "SET_USERNAME",
    username: value,
  };
};

const setPassword = (value: string): { type: string; password: string } => ({
  type: "SET_PASSWORD",
  password: value,
});

export default {
  setUsername,
  setPassword,
};
