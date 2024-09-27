import { useContext, useEffect } from "react";

import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/action.type";
import AppRouter from "./routes/AppRouter";
import { auth } from "./Utility/firebase";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
