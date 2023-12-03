import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import AppHeader from "../../components/header";
import AppFooter from "../../components/footer";
import AppLoading from "../../components/laoding";
import RouterPrivate from "../../Routes/privateRoutes";
import { init } from "../../utils/api-call";
import GuardComponent from "../../Routes/guards";

const Layout: React.FC = () => {
  const { loading } = useSelector((state: any) => state.loadingReducer);
  init(process.env.REACT_APP_API_HOST ?? '');
  return <Suspense fallback={<AppLoading/>}>
    {
      loading && <AppLoading/>
    }
    <GuardComponent>
      <BrowserRouter>
        <AppHeader/>
        <main>
          <RouterPrivate/>
        </main>
        <AppFooter/>
      </BrowserRouter>
    </GuardComponent>
  </Suspense>;
};

export default Layout;
