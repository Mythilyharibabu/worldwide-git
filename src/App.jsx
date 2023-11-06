import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Product from "./components/Product";
import PageNotFound from "./components/PageNotFound";
import Pricing from "./components/Pricing";
import PageNav from "./components/PageNav";
import AppLayout from "./Pages/AppLayout";
import Login from "./components/Login";
import Cities from "./components/Cities";
import Message from "./components/Message";
import Countries from "./components/Countries";
import CityDetail from "./components/CityDetail";
import CityContextProvider from "./components/Context/CityContext";
import Form from "./components/Form";
import { Authprovider } from "./components/Context/Authcontext";
import Protected from "./components/Protected";
function App() {
  return (
    <>
      <Authprovider>
        <CityContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/app"
                element={
                  <Protected>
                    <AppLayout />
                  </Protected>
                }
              >
                {/*nested route*/}
                <Route path="cities" element={<Cities />} />
                <Route path="countries" element={<Countries />} />

                <Route //dynamic
                  path="cities/:cityid"
                  element={<CityDetail />}
                />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="/product" element={<Product />} />
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/price" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/pagenav" element={<PageNav />} />
            </Routes>
          </BrowserRouter>
        </CityContextProvider>
      </Authprovider>
    </>
  );
}

export default App;
