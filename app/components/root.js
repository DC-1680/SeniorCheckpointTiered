import React from 'react'
import Navbar from './Navbar'
import { Route, Switch } from 'react-router-dom';
import HomeView from './HomeView'
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';

const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={HomeView} />
          {/* <Route path='/students' component={AllStudents} /> */}
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AllStudents} />
          <Route path="/campuses/:campusId" component={SingleCampus} />
        </Switch>
      </main>
    </div>
  )
}

export default Root
