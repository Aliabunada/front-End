import React from 'react'
import  './Mark_std.css'

var row =[{ name:"التربية الدينية",name2:"22",name3:"44",name4:"77",name5:"174  ",name6:" 77  " },
{ name:"التربية الدينية",name2:"22",name3:"44",name4:"77",name5:"174  ",name6:" 77  " },
 { name:"التربية الدينية",name2:"22",name3:"44",name4:"77",name5:"174  ",name6:" 77  " },
{ name:"التربية الدينية",name2:"22",name3:"44",name4:"77",name5:"174  ",name6:" 77  " },
{ name:"التربية الدينية",name2:"22",name3:"44",name4:"77",name5:"174  ",name6:" 77  " },
 { name:"التربية الدينية",name2:"22",name3:"44",name4:"77",name5:"174  ",name6:" 77  " },
{ name:"التربية الدينية",name2:"22",name3:"44",name4:"77",name5:"174  ",name6:" 77  " },
{ name:"التربية الدينية",name2:"22",name3:"44",name4:"77",name5:"174  ",name6:" 77  " },
{ name:"التربية الدينية",name2:"22",name3:"44",name4:"77",name5:"174  ",name6:" 77  " },
 ]
var columns=[{active:"المادة",active2:"	امتحان نصف الفصل (20%)",active3:"امتحان نهاية الفصل (30%)",active4:"تقويم نوعي 2 (50%)", 
active5:"المجموع",active6:"المعدل"}]
function MarkStd() {
    return (
       
      <table class="tablee">
      <thead>
      {columns.map((data) => (

          <tr className="rwos">
              <th className="thz " >{data.active} </th>
              <th className="thz " >{data.active2} </th>
              <th className="thz " >{data.active3} </th>
              <th className="thz " >{data.active4} </th>
              <th className="thz " >{data.active5} </th>
              <th className="thz " >{data.active6} </th>
          </tr>
                 ))}
      </thead>
      <tbody>
      {row.map((data) => (
          <tr className="rwo1">
              <td className="ths " >{data.name}  </td>
<td className="ths " >{data.name2}  
             
              </td>
              <td className="ths " >{data.name3}</td>
              <td className="ths " >

              {data.name4}  
              </td>
              <td className="ths " >

{data.name5}  
</td>
<td className="ths " >

{data.name6}  
</td>
          </tr>
          
                            ))}

      </tbody>

  </table>

        
    )
}

export default MarkStd
