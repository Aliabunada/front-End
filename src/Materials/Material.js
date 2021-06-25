import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
  import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
 import  { useState } from 'react';
 import FormControl from '@material-ui/core/FormControl';
import Func from './HomWTeacher'
 import AddCircleIcon from '@material-ui/icons/AddCircle';

export const Material=( )=> { 
 
  const useStyles = makeStyles((theme) => ({
    file: {
      background:"#DF9433",
      marginRight:"5px",
      height: 35,
      fontWeight:900,
      width: 200,

      margin:"5px",
     fontSize:14
       },  
       formControl: {
        margin: theme.spacing(1),
                  minWidth: 420,
                  fontSize:25
      },
       filee: {
        background:"#84b13cb2",
        marginRight:"5px",
        height: 35,
        fontWeight:900,
        width: 200,
        margin:"2px",
       fontSize:14
         },  
         fileee: {
          background:"#ebaf607e",
          marginRight:"5px",
          height: 35,
          width: 200,

          fontWeight:900,
          margin:"2px",
         fontSize:14
           }, 
    }));

    {/* */}
    const classes = useStyles();
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);

     const [maxWidth, setMaxWidth] = React.useState('sm');
    const [fullWidth, setFullWidth] = React.useState(true);
  
    const [open, setOpen] = React.useState(false);
    const handleClickOpen1 = () => {
      setOpen1(true);
    };
         
    const handleClose1 = () => {
      setOpen1(false);
    };
  
    const handleClickOpen2 = () => {
      setOpen2(true);
    };
  
    const handleClose3 = () => {
      setOpen3(false);
    };
  
    const handleClickOpen3 = () => {
      setOpen3(true);
    }
    const handleClose4 = () => {
      setOpen4(false);
    };
  
    const handleClickOpen4 = () => {
      setOpen4(true);
    }
    const handleClose2 = () => {
      setOpen2(false);
    };
    const handelSave = () => {
      var x = document.getElementById("myTexts").value;
    document.getElementById("demos").innerHTML = x;
      setOpen(false);
      };
     
       const handleClose=()=>{
    setOpen(false)
  }
      const [mune, setMune] = useState([]);
     const handleButtonClickeds = () => {
    
    setMune((prevMune) => {
      const newMune = [...prevMune];
      const id = document.getElementById('cells')
      const name = document.getElementById('myText')

         newMune.push({
      name:'',
      })
      return newMune;
    })
  }
  
 
     
  
 

    return (
        <div>
           <Grid  >
           <Dialog
          open={open1}
          onClose={handleClose1}
          maxWidth={maxWidth}
          fullWidth={fullWidth}
          aria-labelledby="form-dialog-title"
        >
             <div className="insert_stdss">

             <div className="insert_stdsss">

       <div className="formform"> 
      <br />
   <span className="sp"> رفع المواد الدراسية </span>
   
   <div className="line_div">
          <hr className="line_titleees" />
        </div>
   <br />
     
          <form
            onSubmit={e => {
              e.preventDefault();
              new Promise(resolve => resolve()).then(() => {
                handleClose1();
              });
            }}
          >
  <div  className="buttons_rowww" > 
  <Button  className={classes.fileee} onClick={handleClickOpen3}> رفع المادة الدراسية    </Button>

     
       <br />
 
   <Button  className={classes.filee} onClick={handleClickOpen2}> اضافة نص   </Button>
   <br />
    
   <Button  className={classes.file} onClick={handleClickOpen2}>  رفع ملفات اثرائية
       </Button>
       
            <br />

    <Button  className={classes.filee} onClick={handleClickOpen4}>  رفع صور</Button>
  </div>
  <br />


  <div  className="buttons_row" > 
  
  <button onClick={handleClose} className="diiialloo"  >
  الغاء          </button>
  <button onClick={handleClose} className="diiialloos"    >
   اضافة
  </button>
  </div>
  <div  className="lines_div" > 
</div>
   
          </form>
          </div>
          </div>
          </div>

         </Dialog>
            {/* THIS IS THE SECOND DIALOG */}
        <Dialog
          open={open2}
          onClose={handleClose2}
          aria-labelledby="form-dialog-title"
        >
          <span className="sp">  اضافة وحدة دراسية   </span>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
              <input type="text"  required id="myTexts" />
                </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose}  className="diiiallo"   >
              الغاء
            </button>
            <button onClick={handelSave }  className="diiallo"  >
              اضافة
            </button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={open3}
          onClose={handleClose3}
          aria-labelledby="form-dialog-title"
        >
          <span className="sp">  اضافة المادة الدراسية   </span>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
              <input type="url" placeholder="اضافة رابط" pattern="https://.*"  
                  id="myTexts" />
                 <input type="file" id="myTexts" />
                </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose3}  className="diiiallo"   >
              الغاء
            </button>
            <button onClick={handelSave }  className="diiallo"  >
              اضافة
            </button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={open4}
          onClose={handleClose4}
          aria-labelledby="form-dialog-title"
        >
          <span className="sp">  اضافة وحدة دراسية   </span>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
              <input type="file"  required id="myTexts" />
                </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose4}  className="diiiallo"   >
              الغاء
            </button>
            <button onClick={handelSave }  className="diiallo"  >
              اضافة
            </button>
          </DialogActions>
        </Dialog>
       
     
       <Grid className="cell">

<button className="dialoos"  onClick={handleButtonClickeds}>اضافة وحدة دراسية  </button>

      {mune.map((listItem) => <div key={listItem.id}>
     
        <Grid id="cells">
        <AddCircleIcon className="buttons_rows" ttitle="ttryr" variant="outlined" color="primary" onClick={handleClickOpen1}/>
                   </Grid>    
 
      </div>
        )}
        </Grid> 
        </Grid> 
  

       <Grid> 

      <Func />
        </Grid>
 
      </div>
 
    )
}

export default Material
 // <button onClick={()=>setShow(true)}>show</button>
// <button onClick={()=>setShow(false)}>move</button>
 //<button onClick={handleButtonClicked}>Add an Item</button>
 //    {
  //show?<span>mai sami </span>:null
//}
 