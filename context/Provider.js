import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useReducer, useState } from "react";

export const GlobalContext = createContext({});

// const [state, dispatch] = useReducer(first, second, third);

const GlobalProvider = ({ children }) => {
  const [timerSessions, setTimerSessions] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [sessionName, setSessionName] = useState("");

  const handleAddTimerSession = async (name, elapsedTime, id) => {
    setTimerSessions((prevTimerSessions) => [
      ...prevTimerSessions,
      { name, elapsedTime, id },
    ]);
    await AsyncStorage.setItem(
      "timerHistory",
      JSON.stringify([...timerSessions, { name, elapsedTime, id }])
    );
  };

  const loadTimerHistory = async () => {
    const timerHistoryString = await AsyncStorage.getItem("timerHistory");
    if (timerHistoryString) {
      setTimerSessions(JSON.parse(timerHistoryString));
      console.log({ timerHistoryString });
    }
  };

  const clear = async () => {
    await AsyncStorage.clear();
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
        sessionName,
        setSessionName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
