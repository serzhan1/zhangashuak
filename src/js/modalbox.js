var modal = document.getElementById("advice");
var btn = document.getElementById("adviceBtn");
var btn1 = document.getElementById("footerAdviceBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
} 
btn1.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}

document.getElementById('advice-btn').addEventListener('click', function(e) {

  e.preventDefault();

  let adviceForm = document.forms['adviceForm']

  let name = adviceForm.elements['name'].value,
  surname = adviceForm.elements['surname'].value,
  email = adviceForm.elements['email'].value,
  phone = adviceForm.elements['phone'].value,
  message = adviceForm.elements['message'].value;
  
  let advice = JSON.stringify({name, surname, email, phone, message})

  let req = new XMLHttpRequest();
  req.open('POST', '/', true);
  req.setRequestHeader('Content-Type', 'application/json')
  
  req.addEventListener('load', function(){
    let receivedMessage = JSON.parse(req.response);
    document.getElementById('result').innerHTML = receivedMessage;
  })

  req.send(advice)
})