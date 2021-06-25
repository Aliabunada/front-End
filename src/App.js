import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import HeaderStd from './Header/HeaderStd'
import Home from './student/Home'
import AppBare from './Header_home/AppBare'
import Login from './Login'
import ProfileStd from './Profiles/ProfileStd'
import HeaderTeac from './Header/HeaderTeac'
import Header_manger from './Header/Header_manger'
import HeaderParent from './Header/HeaderParent'
import AppBareParent from './Header_home/AppBareParent'
import MarkStd from './student/MarkStd'
 import InsertStd from './manger/InsertStd'
import Marks_manger from './manger/MarksManger'
  import MainTeacher from './teacher/MainTeacher'
import AdvTeacher from './Ads/AdvTeacher'
import AdvManger from './Ads/AdvManger'
import InsertAdv from './Ads/InsertAdv'
 import InsertAdvManger from "./Ads/InsertAdvMa+nger";
import AdvStd from './Ads/AdvStd'
import InsertSchool from './manger/InsertSchool'

import './App.css';
import SubjectsCalass from './teacher/SubjectsCalass'
  import InsertTeac
 from './manger/InsertTeac'
 import Material from './Materials/Material'
 import HomWTeacher from './Materials/HomWTeacher'

 import MarksManger from './Profiles/ProfileManger'
import ProfileTeacher from './Profiles/ProfileTeacher'
import InnClass from './manger/InnClass'
import ProfileParent from './parent/ProfileParent'
 
import MaterialHrader from './Materials/MaterialHrader'
  
import Parts from './Parts'
  import AppBareMan from './Header_home/AppBareMan'
import AppBareStd from './Header_home/AppBareStd'
import InsertHomeWork from './teacher/InsertHomeWork'
import Class from "./manger/Class";
 import MainStd from './student/MainStd'
import TeacherManger from './manger/TeacherManger'
  
 import Activity from './student/Activity'
import Classroom from './manger/Classroom'

 
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/manger">
            <Header_manger />
            <AppBareMan />
            <AdvManger />
          </Route>
          <Route path="/profiles_manger">
            <Header_manger />
            <AppBareMan />
            <MarksManger />
          </Route>
          <Route path="/teachers">
            <Header_manger />
            <AppBareMan />
            <TeacherManger />
          </Route>

           
          <Route path="/insert">
          <Header_manger />
            <AppBareMan />
          </Route>
          <Route path="/Class">
          <Header_manger />
            <AppBareMan />
            <Class />
          </Route>
          <Route path="/marks_manger">
          <Header_manger />
            <AppBareMan />
            <Marks_manger />
          </Route>
       
          <Route path="/add_adv">
            <Header_manger />
            <AppBareMan />
            <InsertAdvManger />
          </Route>
          <Route path="/Exams">
          <Header_manger />
            <AppBareMan />
            <HomWTeacher />
          </Route>
          <Route path="/classroom">
          <Header_manger />
            <AppBareMan />
            <Classroom />
 
          </Route>
           <Route path="/in_class">
          <Header_manger />
            <AppBareMan />
            <InnClass />
           </Route>
          <Route path="/insert_std">
          <Header_manger />
            <AppBareMan />
            <InsertStd />
          </Route>
           
         

          <Route path="/insert_teac">
          <Header_manger />
            <AppBareMan />
            <InsertTeac />
          </Route>



          <Route path="/subject">
            <HeaderTeac />
            <AppBare />
            <SubjectsCalass />
            <AdvTeacher />
          </Route>
          <Route path="/Material">
            <HeaderTeac />
            <MaterialHrader />
                <Material  />
          </Route>
          <Route path="/part">
            <HeaderTeac />
            <AppBare />
           <Parts />
          </Route>






          <Route path="/profile_Parent">
            <HeaderParent />
            <AppBareParent />
            <ProfileParent />
          </Route>
          <Route path="/parent">
            <HeaderParent />
            <AppBareParent />
            </Route>

          
          
          <Route path="/Exams_std">
          <HeaderStd />
            <AppBareStd />
           </Route>
          <Route path="/profile">
            <HeaderStd />
            <AppBareStd />
            <ProfileStd />
          </Route>

          <Route path="/teacher">
            <HeaderTeac />
            < AppBare />
            <div className="app_teacher">
              <MainTeacher />
              <AdvTeacher />
            </div>
          </Route>
          <Route path="/Exam">
          <HeaderTeac />
            <AppBare />
           </Route>
          <Route path="/Profile_teacher">
            <HeaderTeac />
            <AppBare />
            <ProfileTeacher />
          </Route>
       
          <Route path="/add_advs">
            <HeaderTeac />
            <MaterialHrader />
            <InsertAdv />
          </Route>
          <Route path="/socail_teacher">
            <HeaderTeac />
            <MaterialHrader />
            <InsertHomeWork />
      
            </Route>
         
          <Route path="/task">
            <HeaderTeac />
            <MaterialHrader />
           </Route>
          <Route path="/mark_teacher">
            <HeaderTeac />
            <AppBare />
          </Route>

          <Route path="/Material_teac">
            <HeaderTeac />
            <AppBare />
            <SubjectsCalass />
          </Route>
              <Route path="/Exams_std_table">
            <HeaderStd />
            <AppBareStd />
    
          </Route>
          <Route path="/Social">
            <HeaderStd />
            <AppBareStd />
          </Route>
          <Route path="/homeWork_std">
            <HeaderStd />
            <AppBareStd />
       
          
            
          </Route>
          <Route path="/activity">
          <HeaderStd />
            <AppBareStd />
            <Activity />
          </Route>
          <Route path="/marks_std">
            <HeaderStd />
            <AppBareStd />
            <MarkStd />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/student">
            <HeaderStd />
            <AppBareStd />
           <Home />
            <AdvStd />
          </Route>
          <Route exact path="/Material_std">
            <HeaderStd />
            <AppBareStd />
            <MainStd />
            </Route>
         
          <Route exact path="/">
            < InsertSchool />
           </Route>
        </Switch>
      </div>
    </Router>



  );
}

export default App;
