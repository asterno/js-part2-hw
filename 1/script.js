
//основная домашка

// let requestU = 'posts.json'

// let headers = {
//     'Contetn-Type':'application/json'
// }
// function sendReq(method,url,body) {
//     return fetch(url,{
//         method:method,
//         body:JSON.stringify(body),
//         headers: headers,
//     }).then(response => {
//      return  response.json()
        
//     })
// }


// sendReq('POST',requestU).then(data => {
    
//   data.forEach(element =>  {
//    if(element.userId == 1) {
//     console.log(element)
//    }
// //   console.log(element.userId)
  
//   }
    
//   );
// }

// )


//доп дз

let requestU = 'posts.json'

let input = document.querySelector('.input')
let btn = document.querySelector('.button')
let headers = {
    'Contetn-Type':'application/json'
}


btn.addEventListener('click',()=> {
    function   sendReq(method,url,body) {
    return fetch(url,{
        method:method,
        body:JSON.stringify(body),
        headers: headers,
    }).then(response => {
     return  response.json()
        
    })
}


 sendReq('POST',requestU).then(data => {
    
   data.forEach(element =>  {
    if(element.userId == input.value) {
     console.log(element)
    }
    // console.log(element.userId)
  
   }
    
   );
 }

)})

