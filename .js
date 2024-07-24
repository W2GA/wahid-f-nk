let username = document.getElementById('username')
let pessword = document.getElementById('pessword')
let btn = document.getElementById('btn')
let tbo = document . getElementById('tbo')

let tabl = document.getElementById('tabl')
let TAB;
if(localStorage.pro != null)
{
    TAB=JSON.parse(localStorage.pro)
}
else
{
TAB=[]
}



btn.onclick=function()
{
  
    let object=
    {
        username:username.value,
        pessword:pessword.value,
    }
   
    
    TAB.push(object)
    localStorage.setItem('pro',JSON.stringify(TAB))


    if(username.value=='kermache wahid' && pessword.value=='01234567')
        {
   affiche()
        }
        else
        {
           
        }

    username.value=''
     pessword.value=''

    
     
}

function affiche()
{
    let table=''

    for(let i=0;i<TAB.length;i++)
    {
        table+=`
    
    <tr>
                    <td>${i+1}</td>
                    <td>${TAB[i].username}</td>
                    <td>${TAB[i].pessword}</td>
                   
          
                </tr>
    `
    }
    tbo.innerHTML=table


}
