import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  file: {
    background: "#DF9433",
    marginRight: "5px",
    height: 32,
    fontWeight: 900,

    margin: "5px",
    fontSize: 14
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    fontSize: 25
  },
  filee: {
    background: "#84b13cb2",
    marginRight: "5px",
    height: 32,
    fontWeight: 900,

    margin: "2px",
    fontSize: 14
  },
  fileee: {
    background: "#ebaf607e",
    marginRight: "5px",
    height: 32,
    fontWeight: 900,
    margin: "2px",
    fontSize: 14
  },

  insert_classs: {
    background: "#aee75198",
    marginRight: "33px",
    height: 37,
    fontWeight: 900,
    direction: "rtl",
    width: 155,
    marginTop: "9px",
    fontSize: 14
  }
}));



function Class() {

  var grades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

  const [classData, setClassData] = useState({
    level: '',
    grade: '',
    branch: '',

  });
  const [isBusy, setBusy] = useState(true)
  const [classesName, setclassesName] = useState([]);
  const [classes, setclasses] = useState([]);
  const [branches, setBranches] = useState([]);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classesStyle = useStyles();

  useEffect(() => {
    axios.get('http://localhost:9000/classes/')
      .then(async function (data) {
        setclasses(data.data.classes)
        await axios.get('http://localhost:9000/classes/getClassesName')
          .then(async function (classesName) {
            console.log(classesName)
            setclassesName(classesName.data.classes)
            setBranches(classesName.data.branches)
            setBusy(false);
          })
      }).catch((err) => {
        console.log('err');
      })

  }, [])

  const handleChange = prop => event => {
    setClassData({ ...classData, [prop]: event.target.value });

  };




  function addClass() {
    setOpen(false);
    axios.post('http://localhost:9000/classes/create', classData)
      .then(function (response) {
        alert(response.data.msg);
        window.location.reload();
      })
      .catch(error => {
        console.log(error)
        if (error.response) {
          /* the request was made and the server responded
          with a status code that falls out of the range of 2xx */
          alert(error.response.data)

        }
      });
  }

  function deleteClass(level, branch) {
    axios.delete(`http://localhost:9000/classes/${level}${branch}`)
      .then(function (response) {
        alert(response.data);
        window.location.reload();
      })
      .catch(error => {
        console.log(error)
      });
  }


  const [checkeds, setCheckeds] = useState(false);

  const [checked, setChecked] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div>
      {!isBusy ? (

        <div className="Class_alls">
          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body">

                  <div class="input-group">
                    <input type="text" class="form-controls" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='       اسم غرفة الصف' />

                    <span class="input-group-texts"  >

                      اسم   الكتاب الدراسي
                    </span>

                  </div>
                  <br />

                  <div class="input-group">

                    <select className="form-controls" onChange={handleChange}>
                      <option className="opt" selected disabled>اسم الصف</option>
                      {classesName ? classesName.map(className => (
                        <option className="opt" value={className}  >{className}</option>
                      )) : (<option className="opt"> الصف الدراسي </option>)
                      }
                    </select>

                    <span class="input-group-texts"  >   الصف الدراسي   </span>

                  </div>
                  <br />
                  <div class="input-groups">

                    {
                      checked ? (

                        <input className="form-controlss" type="url" name="url" placeholder=" رفع بواسطة رابط" />
                      ) : (<div></div>)
                    }

                    <span class="input-group-textss"  >
                      <input type="checkbox" className="inputlink" onChange={() => setChecked(!checked)} checked={checked} />
                      رفع بواسطة رابط
                    </span>
                  </div>
                  <br />



                  <div class="input-groups">

                    {
                      checkeds ? (

                        <input className="form-controlss" name="token" type="file" />
                      ) : (<div></div>)
                    }

                    <span class="input-group-textss"  >
                      <input type="checkbox" className="inputlink" onChange={() => setCheckeds(!checkeds)} checked={checkeds} />
                      رفع بواسطة ملف
                    </span>
                  </div>


                </div>

                <br />
                <div class="modal-footers">
                  <Button className={classesStyle.filee} data-dismiss="modal" aria-label="Close" >     الغاء  </Button>

                  <Button className={classesStyle.fileee}   >   اضافة    </Button>
                </div>

              </div>
            </div>
          </div>
          <div className="Class_alls_under"  >
            <Button className={classesStyle.insert_classs} color="black" onClick={handleClickOpen}>
              اضافة صف   </Button>
            <Button className={classesStyle.insert_classs} data-toggle="modal" data-target="#exampleModalCenter">  رفع الكتاب الدراسي     </Button>

          </div>

          <table class="table">

            <thead>
              <tr className="rwos">
                <th className="th " >اسم الصف</th>
                <th className="th ">الشعبة   </th>
                <th className="th ">اسم المرحلة</th>
                <th className="th ">العمليات
                </th>

              </tr>
            </thead>
            <tbody>

              {classes.length !== 0 ? classes.map((classs) => (
                <tr className="rwo1">

                  <td className="thss "> <a href={`/in_class/${classs.level}/${classs.branch}`} >{classs.level}</a></td>
                  <td className="thss ">{classs.branch}</td>
                  <td className="thss " >{classs.grade}</td>
                  <td>
                    <button class="button3" onClick={() => { deleteClass(classs.level, classs.branch) }}>حذف</button>


                  </td>
                </tr>
              )) : (<h1>There is No Classes</h1>)}

            </tbody>

          </table>
          <div>

            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <span className="sp">  اضافة صفوف دراسية   </span>
              <DialogContent    >
                <div className="div_class">
                  <select className="slectt" type="text" placeholder=" اسم الصف" required name="level" onChange={handleChange('level')}>
                    <option className="opt" selected disabled>اسم الصف</option>
                    {classesName ? classesName.map(className => (
                      <option className="opt" value={className}  >{className}</option>
                    )) : (<option className="opt">اسم  الصف</option>)
                    }

                  </select>

                  <select className="slectt" type="text" placeholder=" الشعبة " required onChange={handleChange('branch')}>

                    <option className="opt" selected disabled>الشعبة</option>
                    {grades ? grades.map(grade => (
                      <option className="opt" value={grade}  >{grade}</option>
                    )) : (<option className="opt" selected disabled>الشعبة</option>)
                    }

                  </select>
                  <select className="slectt" type="text" placeholder=" اسم المرحلة" required onChange={handleChange('grade')} >
                    <option className="opt" selected disabled>اسم المرحلة</option>
                    {branches ? branches.map(branch => (
                      <option className="opt" value={branch}  >{branch}</option>
                    )) : (<option className="opt" selected disabled>اسم المرحلة</option>
                    )
                    }
                  </select>


                </div>
              </DialogContent>
              <div className="div_class">
                <button autoFocus onClick={handleClose} className="diiialo_class" color="primary"> الغاء  </button>

                <button className="diialo_class" color="primary" autoFocus onClick={addClass}>  اضافة  </button>
              </div>
            </Dialog>
          </div>

        </div>
      ) : (<h1>Looding ..</h1>)}

    </div>
  )
}

export default Class