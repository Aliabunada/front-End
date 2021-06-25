import React from 'react';
 

function First() {
      return (
        <form class="form_form">
          <div class="text_row"> 
          <span class="form_rows">اضافة الانشطة والواجبات</span>
          </div>
      <div  class="form_row_inputs"> 
        <div class="form_row_input"> 
        <label class="form_row_lable">اسم الواجب الدراسي</label>
         <input type="text" class="form-control" id="inputPassword" placeholder="اسم الواجب الدرسي  " />
    </div>
    </div>
    
       <br />
       <div class="form_row_input"> 
       <label class="form_row_lable"> تاريخ الصلاحية </label>
         <input type="date" class="form-control" id="inputPassword"  />
              <br />
              <div class=" "> 
        <label class="form_row_lable"> تاريخ الانتهاء </label>
         <input type="date" class="form-control" id="inputPassword"  />
         </div>
        <br />

        <div class=" "> 
        <label class="form_row_lable"> الملفات</label>
         <input type="file" class="form-control" id="inputPassword" />
         </div>

</div>        
        <div class="form_button"> 
        <button autoFocus className="diiialo_form"  color="primary">
   الغاء            </button>
               <button  className="diialo_form"  color="primary" autoFocus>
                 اضافة
               </button>
               </div>
      </form>

 

    )
}

export default First
