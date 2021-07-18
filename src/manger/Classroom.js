import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { useState, useEffect } from 'react';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
    insert_classs: {
        background: "#aee75198",
        height: 37,
        fontWeight: 900,
        direction: "rtl",
        width: 155,
        marginTop: "9px",
        marginRight: "32px",

        fontSize: 14
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 420,
        fontSize: 25
    },
    filee: {
        background: "rgba(255, 0, 0, 0.562)",
        marginRight: "5px",
        height: 40,
        fontWeight: 900,
        width: 200,
        margin: "2px",
        fontSize: 14
    },
    fileee: {
        background: "#df9533d5",
        height: 40,
        width: 200,

        fontWeight: 900,
        fontSize: 14
    },

}));

function Classroom() {
    const classes = useStyles();
    const [classses, setclassses] = useState([]);
    const [classRooms,setClassRooms] = useState([]);
    const [Gradess, setGradess] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [subjects, setsubjects] = useState([]);
    const [isBusy, setBusy] = useState(true)
    const [classRoomData, setClassRoomData] = useState({
        className: '',
        classID: '',
        teacherID: '',
        subjectID: '',
        semester: '',

    });
    const handleChange = prop => event => {
        setClassRoomData({ ...classRoomData, [prop]: event.target.value });

    };
    useEffect(() => {
        axios.get('http://localhost:9000/classes/')
            .then( function (data) {
                setclassses(data.data.classes)
                 axios.get('http://localhost:9000/classes/getClassesName')
                    .then( function (classesName) {
                        setGradess(classesName.data.Grades)
                                 axios.get('http://localhost:9000/subject/getSubjectListName')
                                    .then( function (subjectName) {
                                        setsubjects(subjectName.data.SubjectList)
                                         axios.get('http://localhost:9000/classRoom/')
                                            .then( function (classRoom) {
                                                setClassRooms(classRoom);
                                                setBusy(false);
                                                getTeachers()
                                            })
                                    })
                            

                    })
            }).catch((err) => {
                console.log('err');
            })

    }, [])
const getTeachers = async ()=>{
   return axios.get('http://localhost:9000/employee/getTeachers')
    .then( function (teacherData) {
        setTeachers(teacherData.data.Teachers);
    })
}
    
    function saveClassRoom() {
        axios.post('http://localhost:9000/classRoom/store', classRoomData)
            .then(function (response) {
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

    return (
        <div>
        {!isBusy ? (
        <div>

            <div className="classroom">
                <br />
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
                                    <input type="text" class="form-controls" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='       اسم غرفة الصف' onChange={handleChange('className')} />


                                    <span class="input-group-texts"  >                                            اسم غرفة الصف
                                    </span>

                                </div>
                                <br />

                                <div class="input-group">


                                    <select className="form-controls" onChange={handleChange('classID')}>
                                        <option className="opt" selected disabled>اسم الصف</option>
                                        {classses ? classses.map(classelement => (
                                            <option className="opt" value={classelement._id}  >{classelement.level}</option>
                                        )) : (<option className="opt"> الصف الدراسي </option>)
                                        }
                                    </select>

                                    <span class="input-group-texts"  >                                 الفصل الدراسي
                                    </span>

                                </div>
                                <br />

                                <div class="input-group">


                                    <select className="form-controls" type="text" placeholder=" اسم المرحلة" required onChange={handleChange('semester')}>
                                        <option className="opt" selected disabled>اسم المرحلة</option>
                                        {Gradess ? Gradess.map(grades => (
                                            <option className="opt" value={grades}  >{grades}</option>
                                        )) : (<option className="opt" selected disabled>اسم المرحلة</option>
                                        )
                                        }
                                    </select>
                                    <span class="input-group-texts" id="inputGroup-sizing-default">المرحلة</span>

                                </div>
                                <br />

                                <div class="input-group">

                                    <select class="form-controls" onChange={handleChange('teacherID')}>
                                        <option className="opt" selected disabled > اسم المعلم</option>
                                        {teachers ? teachers.map(teacher => (
                                            <option className="opt" value={teacher._id}> {teacher.full_name_ar} </option>
                                        )) : (<option className="opt" selected disabled > اسم المعلم</option>)}

                                    </select>

                                    <span class="input-group-texts" id="inputGroup-sizing-default">المعلم</span>

                                </div>
                                <br />

                                <div class="input-group">

                                    <select class="form-controls" onChange={handleChange('subjectID')}>
                                        <option className="opt" selected disabled > اسم المادة</option>
                                        {subjects ? subjects.map(subject => (
                                            <option className="opt" value={subject}> {subject} </option>
                                        )) : (<option className="opt" selected disabled > اسم المادة</option>)}

                                    </select>
                                    <span class="input-group-texts" id="inputGroup-sizing-default"> اسم المادة </span>

                                </div>

                            </div>

                            <br />
                            <div class="modal-footers">
                                <Button className={classes.filee} data-dismiss="modal" aria-label="Close" >     الغاء  </Button>

                                <Button className={classes.fileee} onClick={saveClassRoom}  >   اضافة    </Button>
                            </div>

                        </div>
                    </div>
                </div>
                <Button className={classes.insert_classs} data-toggle="modal" data-target="#exampleModalCenter">  انشاء غرفة   </Button>
                <br />

                <table class="table">
                    <thead>
                        <tr className="rwos">
                            <th className="th "> اسم غرفة الصف     </th>
                            <th className="th "> المرحلة </th>

                            <th className="th ">
                                الفصل الدراسي
                            </th>
                            <th className="th ">المعلم</th>
                            <th className="th ">المادة</th>
                            <th className="th ">العمليات</th>

                        </tr>
                    </thead>
                    <tbody>
                        {classRooms.length>0?classRooms.map((classroom) => (
                            <tr className="rwo1">
                                <td className="thss " >{classroom.name}  </td>
                                <td className="thss " >{classroom.location}</td>
                                <td className="thss " >{classroom.location}</td>
                                <td className="thss " >{classroom.location}</td>
                                <td className="thss " >{classroom.location}</td>
                                <td>
                                    <button class="button2">تعديل</button>
                                    <button class="button3">حذف</button>

                                </td>
                            </tr>

                        )):(<h1>No Classes Room in the System</h1>)}

                    </tbody>

                </table>
            </div>
        </div>
          ):(<h1>Looding ..</h1>)}
          </div>
    )
}

export default Classroom
