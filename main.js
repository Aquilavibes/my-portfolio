const btn = document.getElementById('btn')
btn.addEventListener('click', function(){
  document.querySelector('body').style.backgroundColor = 'navy';
  btn.addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = '#1A1C33';
    
  })
})

let hire = document.getElementById('HIRE');
hire.addEventListener('click',function(e){
  e.preventDefault()
  let name = document.getElementById('fullname').value;
  let email = document.getElementById('email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  let body = 'name: ' +name + '<br/> email: ' + email + '<br/> subject' + subject + '<br/> message' + message;

  Email.send({
    Host : "smtp.gmail.com",
    Username : "aquilabrama312@gmail.com",
    Password : "gjjtjqkpngahkpqu",
    To : 'aquilabrama312@gmail.com',
    From : email,
    Subject : subject,
    Body : body
}).then(
  message => alert(message)
);

})


 

 