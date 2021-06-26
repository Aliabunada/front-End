 import React from 'react'
  import AccountCircleIcon from '@material-ui/icons/AccountCircle';
 import $ from 'jquery'

 function Activity() {
 
  $(document).bind('dragover', function (e) {
    var dropZone = $('.zone'),
        timeout = window.dropZoneTimeout;
    if (!timeout) {
        dropZone.addClass('in');
    } else {
        clearTimeout(timeout);
    }
    var found = false,
        node = e.target;
    do {
        if (node === dropZone[0]) {
            found = true;
            break;
        }
        node = node.parentNode;
    } while (node != null);
    if (found) {
        dropZone.addClass('hover');
    } else {
        dropZone.removeClass('hover');
    }
    window.dropZoneTimeout = setTimeout(function () {
        window.dropZoneTimeout = null;
        dropZone.removeClass('in hover');
    }, 100);
});
   return(
     <div>
<div id="boxx_Naain">
 <p id="demo"> النشاط الثالث</p> 
 <div  id="datetime">

<span id="datetime">23/23/23/</span>
<label>وقت انتهاء التسليم</label>
</div>
 <span id="demoes">  xzdrezserwrer ifvrieovmbrfs ilwfewlf.ad 
 jesifowefbe  iajfoqwlk sud9qwod lzuc0 dsuovmod fdefnoenwfoep nvoifsfoe
 wivn ioefjwpoflv eiwofiefbwe feiwof9ewpfn efowye80ipfbe buiwfp
 v wiofwqp aifpwaldb wofv powyd9pw iwapqawif klasfoialfw aloiwfpnsf lowdnafe rererwe
 dvb rytn ytrjytm mkuuikikmyujm ytjnytj fdpodftboit bftrbpn9opfd erivjw[-sef vrjbvi0repkv[pswe fioewfv-peow fieopwfwpoenf ioewfe
 iewfe8wikf eiwofnpoewf ioefposfn sefioesfkpe[sf esoif90epojmfew
 mfnioefne oiwejfopwn fowfkp[wf iowfjpwqfn owfo[a;fdboaiwlfv tyfaw;</span> 
 

 
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />

<br />
 <div id="boxxs_Nain" >
 <div id="show_comments"  >
   
<lable >    مي سامي عبدالرحيم جبر </lable>
<AccountCircleIcon style={{ fontSize:22 }}/>

<p id="show_comment">فبلاىىفغقى بتىتغفى بلاىففقلا لابتفقلا ب غتغ ثقبق هننععععغ لابي</p>
</div>

<br/>
<div id="show_comments"  >

<lable >    مي سامي عبدالرحيم جبر </lable>
<AccountCircleIcon style={{ fontSize:22 }}/>

<p id="show_comment">فبلاىىفغقى بتىتغفى بلاىففقلا لابتفقلا ب غتغ ثقبق هننععععغ لابي</p>
 </div>
    
 </div>
  <br />
  <div class="modal-footer">

<div id="shows_comment" > 
  <input id="boxx_comments" placeholder= " اضافة تعليق"/>
<AccountCircleIcon style={{ fontSize:36 }}/>
 
</div>
</div>
  
              
<br />
</div>

<div  id="boxx_Nain">
<br />
<br />
<form> 
 
 
<div id="dropZ">
  <i class="fa fa-cloud-upload"></i>
   <div class="selectFile">       
    <label className="aa" for="file">  قم باختيار ملف</label>                   
    <input className="aa" type="file" name="files[]" id="file" />
  </div>
 </div>
    <br />
  </form>
<br />
<br />
 
<br />
<br />
<br />
 

<br />
<br />
<br />
<br />
<div class="modal-footer">

  <button id="button_Submit">تسليم</button>
  <button id="button_Submits">الغاء</button>

 </div>
 </div>

     </div>
    )
 
  }
 
 export default Activity