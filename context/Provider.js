import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useReducer, useState } from "react";

export const GlobalContext = createContext({});

// const [state, dispatch] = useReducer(first, second, third);

const GlobalProvider = ({ children }) => {
  const [timerSessions, setTimerSessions] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0);

  const handleAddTimerSession = async (name, elapsedTime) => {
    setTimerSessions((prevTimerSessions) => [
      ...prevTimerSessions,
      { name, elapsedTime },
    ]);
    await AsyncStorage.setItem(
      "timerHistory",
      JSON.stringify([...timerSessions, { name, elapsedTime }])
    );
  };

  const loadTimerHistory = async () => {
    const timerHistoryString = await AsyncStorage.getItem("timerHistory");
    if (timerHistoryString) {
      setTimerSessions(JSON.parse(timerHistoryString));
      console.log({ timerHistoryString });
    }
  };

  useEffect(() => {
    loadTimerHistory();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        elapsedTime,
        setElapsedTime,
        timerSessions,
        onStop: handleAddTimerSession,
        loadTimerHistory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
