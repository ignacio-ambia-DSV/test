// let allGood = true;
// let accept_btn = document.getElementById('accept');
// let deny_btn = document.getElementById('deny');

// let prom = new Promise((resolve,reject)=>{

//     accept_btn.addEventListener('click',()=>{
//         resolve('Request was accepted');
//     });

//     deny_btn.addEventListener('click',()=>{
//         reject('Request was rejected');
//     });
// });

// prom.then(result=>{
//     console.log('result : ', result)
// }).catch(err=>{
//     console.log('err : ', err);
// })


console.log('hola!')

fetch("http://localhost:8080/dsv-ascend/controllers/emails/send_email.php", { 
      
    // Adding method type
    method: "POST", 
    body : JSON.stringify({OPERATION_NAME : 'SEND_FINISH_EVALUATION_OPERATOR',}),    

      
    // Adding headers to the request
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
}) 
  
// Converting to JSON
.then(response => response.text()) 
  
// Displaying results to console
.then(json => console.log('response :',json)); 