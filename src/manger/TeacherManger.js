import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect, } from 'react';
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
  insert_classss: {
    background: "#aee75198",
    height: 37,
    fontWeight: 900,
    direction: "rtl",
    width: 155,
    marginTop: "9px",
    marginRight: "10px",

    fontSize: 14
  },
  insert_classs: {
    background: "#aee75198",
    height: 37,
    fontWeight: 900,
    direction: "rtl",
    width: 155,
    marginTop: "9px",
    marginRight: "32px",

    fontSize: 14
  }
}));


function TeacherManger() {
  const [values, setValues] = useState({
    identification_number: '',
    full_name_ar: '',
    full_name_en: '',
    date_Of_birth: '',
    gender: '',
    address: '',
    job_Number: '',
    social_Status: '',
    phone: "",
    teaching_Subject: '',

  });
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  // const [open2, setOpen2] = React.useState(false);


  const [isBusy, setBusy] = useState(true)
  const [teachers, setTeachers] = useState([]);
  const [subjecttsName, setsubjecttsName] = useState([]);

  const [fileExcel, setfileExcel] = useState()


  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  useEffect(() => {
    axios.get(`http://localhost:9000/employee/getTeachers`)
      .then(async function (data) {
        if (data.data.Teachers) {
          setTeachers(data.data.Teachers)
        }
        axios.get(`http://localhost:9000/subject/getSubjectListName`)
          .then((data) => {
            setsubjecttsName(data.data.SubjectList)
            setBusy(false);
          })

      }).catch((err) => {
        console.log(err);
      })

  }, [])

  // const openForm = () => setOpen2(true);

  const handleChange = prop => event => {
   
      setValues({ ...values, [prop]: event.target.value });
    
    // console.log(event.target.value,'this is the value in handle change')
  };


  const uploadExcel = async () => {
    var formdata = new FormData();
    formdata.append("file", fileExcel);
    setBusy(true)
    axios.post('http://localhost:9000/employee/create', formdata,
        { headers: {'Content-Type': 'multipart/form-data' }})

    .then(res => {
      
        console.log(res);
        setBusy(false)
        
    }).catch(err => {
      setBusy(false);
       console.log(err)}
    )

  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };



  const handleClose1 = () => {
    setOpen1(false);
  };
  // const handleClose2 = () => {
  //   setOpen2(false);
  // };
  const handleClose = () => {
    setOpen(false);
  }

  const saveTeacher = () => {
    axios.post('http://localhost:9000/employee/createOne', values)
      .then(function (doc) {
        alert('Done')
        window.location.replace(`/teachers`)
        console.log(doc)
      }).catch(error => {
        console.log(error)
        if (error.response) {
          /* the request was made and the server responded
          with a status code that falls out of the range of 2xx */
          alert(error.response.data)

        }
      });
  }
  function updateTeacher(teacher) {
    // setupdateteacher(teacher)
    // setOpen2(true);
  }
  function deleteTeacher(teacherId) {
    axios.delete(`http://localhost:9000/employee/${teacherId}`)
      .then(function (response) {
        alert(response.data);
        window.location.reload();
      })
      .catch(error => {
        if (error.response) {
          /* the request was made and the server responded
          with a status code that falls out of the range of 2xx */
          alert(error.response.data)

        }
      });
  }

  return (
    <div>

      <div className="Class_alls">
        <div className="Class_alls_under"  >
          <Button className={classes.insert_classss} color="black" onClick={handleClickOpen1}>
            اضافة معلم   </Button>
          <Button className={classes.insert_classs} color="black" onClick={handleClickOpen}>
            اضافة معلم عبر ملف   </Button>

        </div>
        <div>
          {!isBusy ? (
            <table class="table">

              <thead>
                <tr className="rwos">
                  <th className="tht " >اسم المعلم</th>
                  <th className="tht " >الاسم بالانجليزية </th>
                  <th className="tht ">رقم الهوية   </th>
                  <th className="tht " >تاريخ الميلاد </th>
                  <th className="tht " >الرقم الوظيفي </th>
                  {/* <th className="tht " > كلمة المرور</th> */}
                  <th className="tht " >رقم الهاتف </th>
                  <th className="tht " >المواد الدراسية </th>
                  <th className="tht " >العنوان </th>
                  <th className="tht ">الجنس </th>
                  <th className="tht ">العمليات

                  </th>

                </tr>
              </thead>
              <tbody>

                {teachers.map((teacher) => (
                  <tr className="rwo1">
                    <td className="thss " >{teacher.full_name_ar}  </td>
                    <td className="thss ">{teacher.full_name_en}</td>
                    <td className="thss " >{teacher.identification_number}</td>
                    <td className="thss " >{teacher.date_Of_birth.slice(0, 10)}</td>
                    <td className="thss " >{teacher.job_Number}</td>
                    {/* <td className="thss " >{teacher.password}</td> */}
                    <td className="thss " >{teacher.phone}</td>
                    <td className="thss " >{teacher.teaching_Subject}</td>
                    <td className="thss " >{teacher.address}</td>
                    <td className="thss " >{teacher.gender}</td>

                    <td>
                      <button class="button2" onClick={() => { updateTeacher(teacher) }} >تعديل</button>
                      <button class="button3" onClick={() => { deleteTeacher(teacher._id) }}>حذف</button>

                    </td>
                  </tr>
                ))}

              </tbody>

            </table>
          ) : (<h1>There is no Teachers no the  System</h1>)}
        </div>
        <Dialog
          fullScreen={fullScreen}
          open={open1}
          onClose={handleClose1}
          aria-labelledby="responsive-dialog-title"
        >

          <div className="insert_std">
            <div className="form">
              <div className="text_std">
                <span>اضافة المعلمين للصفوف الدراسية</span>
              </div>
              <div className="line_leftt"></div>
              <div className="line_leftts"></div>
              <div>
                <hr className="line_titles" />
              </div>
              <div className="form_inputt">


                <select className="boxes333" onChange={handleChange('teaching_Subject')}>

                  <option className="opt" selected disabled >المواد الدراسية</option>
                  {subjecttsName ? subjecttsName.map(subject => (
                    <option className="opt" value={subject}  >{subject}</option>
                  )) : (<option className="opt">المواد الدراسية</option>)
                  }
                </select>
                <input className="class" placeholder=" اسم المعلم باللغة الانجليزية " onChange={handleChange('full_name_en')} />

                <input className="class" placeholder=" اسم المعلم باللغة العربية" onChange={handleChange('full_name_ar')} />



                <input type="number" className="class" placeholder="رقم الهاتف " onChange={handleChange('phone')} />
                <input className="class" placeholder="رقم هوية المعلم" onChange={handleChange('identification_number')} />



                <input className="class" placeholder="العنوان" onChange={handleChange('address')} />
                <select className="boxes333" onChange={handleChange('gender')}>
                  <option className="boxes333" selected disabled > الجنس</option>

                  <option className="opt"> ذكر   </option>
                  <option className="opt"> انثى   </option>

                </select>
                <input type="date" className="class" placeholder="تاريخ الميلاد" onChange={handleChange('date_Of_birth')} />
                <input className="class" placeholder="الرقم الوظيفي" onChange={handleChange('job_Number')} />

                <input className="class" placeholder="كلمة المرور  " onChange={handleChange('password')} />
                <br />
                <button autoFocus onClick={handleClose1} className="diiialo_class" color="primary">  الغاء            </button>
                <button onClick={saveTeacher} className="diialo_class" color="primary" autoFocus>
                  اضافة
                </button>
              </div>
            </div>
          </div>
          <div className="div_class">

          </div>
        </Dialog>
        <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
          <span className="sp">  قم باختيار ملف   </span>
          <DialogContent>
            <form className={classes.container}>
              
                <input type="file" onChange={(e)=>{
                    setfileExcel(e.target.files[0])
                  
                  }} accept=".xls,.xlsx"/>
           
            </form>
          </DialogContent>
          <div className="buttons_row" >

            <button onClick={handleClose} className="diiiallo"  >
              الغاء          </button>
            <button className="diiallo"  onClick={uploadExcel}  >
              اضافة
            </button>
          </div>

        </Dialog>
        {/* <Dialog
          fullScreen={fullScreen}
          open={open2}
          onClose={handleClose2}
          aria-labelledby="responsive-dialog-title"
        >

          <div className="insert_std">
            <div className="form"  >
              <div className="text_std">
                <span>تعديل المعلمين للصوف الدراسية</span>
              </div>
              <div className="line_leftt"></div>
              <div className="line_leftts"></div>
              <div>
                <hr className="line_titles" />
              </div>
              {teachers.map((teacher) => (

                <div className="form_inputt">


                  <select className="boxes333">
                    <option className="boxes333" value={updateteacher.teaching_Subject} >
                      {teacher.teaching_Subject}
                    </option>


                  </select>
                  <input className="class" value={teacher.full_name_en} placeholder=" اسم المعلم باللغة الانجليزية " />

                  <input className="class" value={teacher.full_name_ar} placeholder="اسم المعلم" />



                  <input value={teacher.phone} className="class" placeholder="رقم الهاتف " />
                  <input className="class" value={teacher.identification_number} placeholder="رقم هوية المعلم" />



                  <input className="class" value={teacher.address} placeholder="العنوان" />
                  <select className="boxes333">
                    <option className="boxes333" value={teacher.gender} >
                      {teacher.gender}
                    </option>


                  </select>
                  <input className="class" value={teacher.date_Of_birth.slice(0, 10)} placeholder="تاريخ الميلاد" />
                  <input className="class" value={teacher.job_Number} placeholder="الرقم الوظيفي" />

                  <input className="class" value={teacher.password} placeholder="كلمة المرور  " />

                </div>
              ))}
                <br />
                  <button autoFocus onClick={handleClose2} className="diiialo_class" color="primary">  الغاء            </button>
                  <button onClick={saveTeacher} className="diialo_class" color="primary" autoFocus>تعديل    </button>

            </div>

          </div>



        </Dialog> */}
      </div>

    </div>
  )
}

export default TeacherManger
