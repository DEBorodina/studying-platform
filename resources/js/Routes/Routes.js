import { Routes, Route } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import StartingPageContainer from "../Pages/StartingPage/StartingPageContainer";
import AuthorizationPageContainer from "../Pages/AuthorizationPage/AuthorizationPageContainer";
import TeacherAccountContainer from "../Pages/TeacherAccountPage/TeacherAccount/TeacherAccountContainer";
import CreateTestContainer from "../Pages/TeacherAccountPage/CreateTest/CreateTestContainer";
import ViewTestContainer from "../Pages/TeacherAccountPage/ViewTest/ViewTestContainer";
import ViewResultsContainer from "../Pages/TeacherAccountPage/ViewResults/ViewResultsContainer";
import StudentAccountContainer from "../Pages/StudentAccountPage/StudentAccount/StudentAccountContainer";
import StudentPassTestContainer from "../Pages/StudentAccountPage/StudentPassTest/StudentPassTestContainer";
import NotFound from "../Pages/NotFound";


export const Router = () => {
  return (
    <Routes>
      <Route
        path={ROUTE_NAMES.STARTING_PAGE}
        element={<StartingPageContainer />}
      />
      <Route
        path={ROUTE_NAMES.AUTHORIZATION_PAGE}
        element={<AuthorizationPageContainer />}
      />
        <Route
            path={ROUTE_NAMES.TEACHER_ACCOUNT}
            element={<TeacherAccountContainer />}
        />
        <Route
            path={ROUTE_NAMES.STUDENT_ACCOUNT}
            element={<StudentAccountContainer />}
        />
        <Route path={ROUTE_NAMES.CREATE_TEST} element={<CreateTestContainer />} />
        <Route
            path={`${ROUTE_NAMES.VIEW_TEST}/:id`}
            element={<ViewTestContainer />}
        />
        <Route
            path={`${ROUTE_NAMES.VIEW_RESULTS}/:id`}
            element={<ViewResultsContainer />}
        />
        <Route
            path={`${ROUTE_NAMES.STUDENT_PASS_TEST}/:code`}
            element={<StudentPassTestContainer />}
        />
        <Route
            path='*'
            element={<NotFound/>}
        />
    </Routes>
  );
};
