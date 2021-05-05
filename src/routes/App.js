import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import SignUp from "../containers/SignUp";
import LogIn from "../containers/LogIn";
import DashBoard from "../containers/DashBoard";
import AppContext from "../context";

import Orders from '../containers/Dashboard/Orders'
import Menu from '../containers/Dashboard/Menu'
import GenerateCode from '../containers/Dashboard/GenerateCode'
import Settings from '../containers/Dashboard/Settings'
import { auth } from "../auth/index";
import UseInitialState from "../hooks/useInitialState";
function App() {
  const initialState = UseInitialState();
  const token = initialState.state.token;
  console.log(token);
  let history=useHistory(null)
  const [acces, setAcces] = useState(null);
  useEffect(() => {
    auth(token).then((res) => {
      !res.pass&& localStorage.removeItem('token');     
      setAcces(res);
    });
  }, [token]);
  console.log(acces);
  return (
    <Router>
      <Switch>
        <AppContext.Provider value={initialState}>
          {token && (
            <>
              {
                //
                <Layout>
                  {acces &&
                    (acces.pass ? (
                      <>
                        <Route exact path="/dashboard/" component={Orders} />
                        <Route exact path="/dashboard/menu" component={Menu} />
                        <Route exact path="/dashboard/generate-code" component={GenerateCode} />
                        <Route exact path="/dashboard/settings" component={Settings} />
                      </>
                    ) : (
                      <h2>{acces.messege}</h2>
                    ))}
                </Layout>
                //
              }
            </>
          ) 
            
            }
            
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
            
        </AppContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
