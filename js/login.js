// document.getElementById('btn-submit').addEventListener('click',function(){
//     // get email
//     const emailFeild =document.getElementById('user-email')
//     const email = emailFeild.value
//     // get password 
//     const passwordFeild =document.getElementById('user-password')
//     const password = passwordFeild.value
//     // varifay email and password
//     if(email === 'sona@bap.com' && password === 'secret' ){
//         window.location.href='Bank.html'
//     }
//     else{
//        alert('WOrng person')
//     }

// })
document.getElementById('btn-submit').addEventListener('click',function(){
    // get email
    const emailFeild =document.getElementById('user-email')
    const email = emailFeild.value
    // get password 
    const passwordFeild =document.getElementById('user-password')
    const password = passwordFeild.value
    // varifay email and password
    if(email === 'sona@bap.com' && password === 'secret' ){
        window.location.href='Bank.html'
    }
    else{
       alert('WOrng person')
    }

})