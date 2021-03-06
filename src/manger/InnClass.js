import React from 'react'
import './In_class.css'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import { useState, useEffect,useRef  } from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    file: {
        marginRight: "12px",
        marginLeft: "12px",
        background: "#DF9433",
        fontSize: 14,
        fontWeight: '600',
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 420,
    },

    ins: {
        background: "#273cf581",
        marginRight: "12px",
        fontSize: 14,
        fontWeight: '600',


    },

    standard: {
        width: 120,
        fontSize: 18

    },



}));
function InnClass() {
    const [isBusy, setBusy] = useState(true)
    const [fileExcel, setfileExcel] = useState();
    const [students, setStudents] = useState([]);
    const [data, setData] = useState();

    const url = useRef(window.location.pathname);    
    console.log(url, ' ///////////////url');
    let Branch = useRef(url.current.slice(-1));
    let Level = useRef(decodeURIComponent(url.current.slice(10)).slice(0, -2));

    useEffect(() => {
        axios.get(`http://localhost:9000/students/getStudentsInClass/${Level.current}${Branch.current}`)
            .then(async function (data) {
                console.log(data)
                setStudents(data.data.studentDoc)
                setBusy(false);
            }).catch((err) => {
                console.log(err);
            })

    }, [])

    function deleteStudent(stdID) {
        axios.delete(`http://localhost:9000/students/${stdID}`)
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


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e)=>{
        let value = e.target.value;
        let name = e.target.name;
        setData({[name]:value});
    }
    const uploadExcel = async () => {
        console.log(data.password,'///');
        var formdata = new FormData();
        formdata.append("file", fileExcel);
        formdata.append("password",data.password);
        axios.post('http://localhost:9000/students/create',formdata,
            { headers: {'Content-Type': 'multipart/form-data' }})
    
        .then(res => {
            console.log(res);
            
        }).catch(err => console.log(err))
    
      }
    
    return (
        <div>
 {!isBusy ? (
     <div>
            <Grid className="divs" >
                <Grid>

                    <Button className={classes.file} onClick={handleClickOpen}> ?????????? ?????? ??????      </Button>
                    <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                        <span className="sp">  ???? ?????????????? ??????   </span>
                        <DialogContent>
                            <form className={classes.container}>
                                <FormControl className={classes.formControl}>
                                    
                                    <input type="file" onChange={(e)=>{
                                      setfileExcel(e.target.files[0])
                  
                                      }} accept=".xlsx"/>
                                    <br/>
                                    <input name="password" type="password" placeholder="???????? ????????????" onChange={handleChange}  />

                                </FormControl>
                            </form>
                        </DialogContent>
                        <div className="buttons_row" >

                            <button onClick={handleClose} className="diiiallo"  >
                                ??????????          </button>
                            <button onClick={uploadExcel} className="diiallo"    >
                                ??????????
                            </button>
                        </div>
                    </Dialog>
                </Grid>
                <Link to={`/insert_std/${Level.current}/${Branch.current}`} className="Liks_ins">
                    <Button className={classes.ins}>?????????? ????????</Button>
                </Link>


                <div className="searchs">
                    <input label="Search" className="standard-basic" placeholder="??????" type="search" />
                    <SearchIcon />
                </div>
            </Grid>
            <table class="tables" >
                <thead>
                    <tr className="bars">
                        <th className=" bar" > ????????????????  </th>
                        <th className="bar " >?????? ????????????  </th>
                        <th className=" bar"> ??????????????</th>
                        <th className="bar ">??????????</th>
                        <th className="bar ">?????????? ??????????????</th>
                        <th className=" bar">?????? ?????????? ????????????</th>
                        <th className=" bar" > ?????????? ???????????? ????????????????????</th>
                        <th className=" bar" >?????? ????????????</th>

                    </tr>

                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr className=""  >
                            <td>
                                <button class="button3" onClick={() => { deleteStudent(student.identification_number) }}>??????</button>

                                <button class="button2" >??????????</button>

                            </td>
                            <td>{student.phone_number}</td>
                            <td>{student.address}</td>
                            <td>{student.gender}</td>
                            <td>{student.birthday_date.slice(0, 10)}</td>
                            <td>{student.identification_number}</td>
                            <td>{student.full_name_en} </td>
                            <td>{student.full_name_ar} </td>

                        </tr>
                    ))}
                </tbody>

            </table>
         </div>
            ):(<h1>Looding ..</h1>)}
        </div>
    )
}
export default InnClass
