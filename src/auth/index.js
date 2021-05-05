
const auth =(token)=>{
    console.log(token)
  
     return fetch("/verifyToken/",{
        method:"POST",
        body:JSON.stringify(token),
        headers: {
            'Content-Type': 'application/json'
            
          },
    }).then(res=>res.json()).then(data=>data)

   
}

module.exports={auth}