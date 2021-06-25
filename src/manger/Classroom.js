import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    insert_classs:{
        background:"#aee75198",
         height: 37,
        fontWeight:900,
        direction:"rtl",
        width: 155,
         marginTop:"9px",
         marginRight:"32px",

       fontSize:14
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
var classroom = [{ name: " مي سامي عبد الرحيم جبر ", location: "10.99.76", vaule: 90, State: "غزة" },
{ name: " مي سامي عبد الرحيم جبر ", location: "10.99.76", vaule: 80, State: "غزة" },
{ name: " مي سامي عبد الرحيم جبر ", location: "10.99.76", vaule: 70, State: "غزة" },
{ name: " مي سامي عبد الرحيم جبر ", location: "10.99.76", vaule: 60, State: "غزة" },
{ name: " مي سامي عبد الرحيم جبر ", location: "10.99.76", vaule: 50, State: "غزة" },
{ name: " مي سامي عبد الرحيم جبر ", location: "10.99.76", vaule: 60, State: "غزة" },
{ name: " مي سامي عبد الرحيم جبر ", location: "10.99.76", vaule: 30, State: "غزة" }
];
function Classroom() {
    const classes = useStyles();

    return (
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
                                    <input type="text" class="form-controls" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='       اسم غرفة الصف' />


                                    <span class="input-group-texts"  >                                            اسم غرفة الصف
                                    </span>

                                </div>
                                <br />

                                <div class="input-group">

                                    <select class="form-controls">
                                        <option className="boxes333" value="">
                                            {" "}
                                            الفصل الدراسي
                                            {" "}
                                        </option>
                                        <option >majasdjoefvdvd</option>
                                    </select>


                                    <span class="input-group-texts"  >                                 الفصل الدراسي
                                    </span>

                                </div>
                                <br />

                                <div class="input-group">

                                    <select class="form-controls">
                                        <option className="boxes333" value="">
                                            {" "}
                                            المرحلة
                                            {" "}
                                        </option>
                                        <option >majasdjoefvdvd</option>
                                    </select>
                                    <span class="input-group-texts" id="inputGroup-sizing-default">المرحلة</span>

                                </div>
                                <br />

                                <div class="input-group">

                                    <select class="form-controls">
                                        <option className="boxes333" value="">
                                            {" "}
                                            المعلم
                                            {" "}
                                        </option>
                                        <option >majasdjoefvdvd</option>
                                    </select>

                                    <span class="input-group-texts" id="inputGroup-sizing-default">المعلم</span>

                                </div>
                                <br />

                                <div class="input-group">

                                    <select class="form-controls">
                                        <option className="boxes333" value="">
                                            {" "}
                                            المادة
                                            {" "}
                                        </option>
                                        <option >majasdjoefvdvd</option>
                                    </select>
                                    <span class="input-group-texts" id="inputGroup-sizing-default"> اسم المادة </span>

                                </div>

                            </div>

<br />
                             <div class="modal-footers">
                                <Button className={classes.filee} data-dismiss="modal" aria-label="Close" >     الغاء  </Button>

                                <Button className={classes.fileee}   >   اضافة    </Button>
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
                        {classroom.map((classroom) => (
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
 
                        ))}

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Classroom
