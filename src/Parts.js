import React from 'react'
import Partss from './Parts.css'
var parts = [{ name: " مي سامي عبد الرحيم جبر ", location:"10.99.76",vaule:90,State:"غزة" },
{ name: " مي سامي عبد الرحيم جبر ", location:"10.99.76",vaule:80,State:"غزة" },
{ name: " مي سامي عبد الرحيم جبر ", location:"10.99.76",vaule:70,State:"غزة" },
{ name: " مي سامي عبد الرحيم جبر ", location:"10.99.76",vaule:60,State:"غزة" },
{ name: " مي سامي عبد الرحيم جبر ", location:"10.99.76",vaule:50,State:"غزة" },
{ name: " مي سامي عبد الرحيم جبر ", location:"10.99.76",vaule:60,State:"غزة" },
{ name: " مي سامي عبد الرحيم جبر ", location:"10.99.76",vaule:30,State:"غزة" }
                ];
function Parts() {
    return (


        <table class="table">
            <thead>
                <tr className="rwos">
                    <th className="th " >اسم الطالب</th>
                    <th className="th ">حالة اكتمال المادة التعليمية</th>
                    <th className="th ">اخر دخول للمادة التعليمية</th>
                    <th className="th ">الحالة</th>
                </tr>
            </thead>
            <tbody>
            {parts.map((parts) => (
                <tr className="rwo1">
                    <td className="thss " >{parts.name}  </td>
<td className="thss ">
                        <progress max="100" value= {parts.vaule} >  </progress>
                    </td>
                    <td className="thss " >{parts.location}</td>
                    <td>

                        <label class="badges">{parts.State}</label>
                    </td>
                </tr>
                
                                  ))}

            </tbody>

        </table>
    )
}

export default Parts
