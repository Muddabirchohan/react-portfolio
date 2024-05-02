import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import PageLayout from "../Layout/PageLayout";
import MainSection from "../components/MainSection/MainSection";

const RouterDefault = () => (
  <Router>
    <Routes>
    <Route path="/" element={<MainSection/>} />

      <Route path="/" element={<PageLayout />}>
        {/* <Route index element={<Login />} /> */}
        {/* <Route path="/about" element={<About/>} />
        <Route path="/header" element={<Header />} /> */}
        {/* <Route path="/api/v1/app/myclassroom" element={<Classroom />} />
        <Route path="/api/v1/app/myassignments" element={<Assignment />} />
        <Route path="/api/v1/app/mymeetings" element={<Meeting />} />
        <Route path="/api/v1/app/viewreports" element={<ReportCard />} /> */}
      </Route>
    </Routes>
  </Router>
);

export default RouterDefault