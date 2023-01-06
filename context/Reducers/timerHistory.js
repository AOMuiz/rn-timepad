const loadTimerHistory = async () => {
  const timerHistoryString = await AsyncStorage.getItem("timerHistory");
  if (timerHistoryString) {
    setTimerSessions(JSON.parse(timerHistoryString));
    console.log({ timerHistoryString });
  }
};

export const timerReducer = (state, { type, payload }) => {
  switch (type) {
    case LOADTIMER:
      return loadTimerHistory();
    case LOADTIMER:
      loadTimerHistory();
      break;

    default:
      return state;
  }
};
