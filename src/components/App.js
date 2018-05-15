import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Layout from "./Layout";
//Pages
import HomePage from "./HomePage";
import ArticlesPage from "./ArticlesPage";
import NotFoundPage from "./NotFoundPage";
//Pages
import AthletesPages from "./pages/AthletesPages";
import CalendarPages from "./pages/CalendarPages";
import ClubPages from "./pages/ClubPages";
import CompetitionPages from "./pages/CompetitionPages";
import FinancePages from "./pages/FinancePages";
import GroupPages from "./pages/GroupPages";
import InvoicePages from "./pages/InvoicePages";
import MessagePages from "./pages/MessagePages";
import ReportPages from "./pages/ReportPages";
import ScoutingPages from "./pages/ScoutingPages";
import StaffPages from "./pages/StaffPages";
import TestPages from "./pages/TestPages";
import TrainingPages from "./pages/TrainingPages";
import TransferPages from "./pages/TransferPages";

const App = ({ location }) => {
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 300, exit: 200 };

  return (
    <Layout>
      <TransitionGroup component="main" className="page-main">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="fade"
          appear
        >
          <section className="page-main-inner">
            <Switch location={location}>
              <Route path="/" exact component={HomePage} />
              <Route path="/articles" component={ArticlesPage} />
              //Pages
              <Route path="/athlete" component={AthletesPages} />
              <Route path="/calendar" component={CalendarPages} />
              <Route path="/club" component={ClubPages} />
              <Route path="/competition" component={CompetitionPages} />
              <Route path="/finance" component={FinancePages} />
              <Route path="/group" component={GroupPages} />
              <Route path="/invoice" component={InvoicePages} />
              <Route path="/message" component={MessagePages} />
              <Route path="/report" component={ReportPages} />
              <Route path="/scout" component={ScoutingPages} />
              <Route path="/staff" component={StaffPages} />
              <Route path="/test" component={TestPages} />
              <Route path="/train" component={TrainingPages} />
              <Route path="/transfer" component={TransferPages} />
              //end pages
              <Route component={NotFoundPage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
};

export default withRouter(App);
