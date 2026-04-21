// document.addEventListener('DOMContentLoaded', function() {
//     const title = document.querySelector('.reveal');
//     title.classList.add('active');

// })
var typed = new Typed('.text', {
    strings:["Front End Developer", "Web Designer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

var typed1 = new Typed('.typed', {
    strings: ["Incredible", "Amazing", "Fantastic"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
document.querySelectorAll('*').forEach(el => {
  if (el.scrollWidth > document.documentElement.clientWidth) {
    console.log(el);
  }
});

// const sendMail = document.querySelector('.send');
// document.addEventListener('DOMContentLoaded', () => {
const formSend = document.querySelector('#form');
console.log(formSend)
// });
// const template = {
//   user_name: 'name',
//   user_email: 'email',
//   user_subject: 'subject',
//   user_textarea: 'textarea'
// }
// const name = document.querySelector('#name').value;
// const email = document.querySelector('#email').value;
// const subject = document.querySelector('#subject').value;
// const textarea = document.querySelector('#textarea').value;
// console.log(name, email, subject, textarea);
// const template = {
//     name: `${name}`,
//     to_email: `${email}`,
//     subject: `${subject}`,
//     textarea: `${textarea}`
// };

// const template = {
//   name: name,
//   to_email: 'ayadpeter7@gmail.com',
//   subject: subject,
//   textarea: textarea
// }
// const template = {
//   name: document.querySelector('#name').value,
//   to_email: 'ayadpeter7@gmail.com',
//   email: document.querySelector('#email').value,
//   subject: document.querySelector('#subject').value,
//   textarea: document.querySelector('#textarea').value
// }

// const templateParams = {
//   name: 'James',
//   // to_email: 'James@gmail.com',
//   to_email: 'ayadpeter7@gmail.com',
//   notes: 'Check this out!',
// };
emailjs.init('8LCHn5vK0wzHAkYOP');
formSend.addEventListener('submit', function(e) {
e.preventDefault();

const template = {
  name: document.querySelector('#name').value,
  to_email: 'ayadpeter7@gmail.com',
  email: document.querySelector('#email').value,
  subject: document.querySelector('#subject').value,
  textarea: document.querySelector('#textarea').value
}

// emailjs.send("service_portfolio", "template_cir9crs", document.querySelector(".form"))
emailjs.send("service_portfolio", "template_cir9crs", template)
.then((response) => {
  console.log('Success', response.status, response.text);
},
 (error) => {
    console.log('Failed...', error);
});

});

// var typed2 = newTyped('.state', {
//     strings: [],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// })