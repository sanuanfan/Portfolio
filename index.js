function sendMail(){
    if(
        document.getElementById("name").value.length > 0 && 
        document.getElementById("email").value.length > 0 && 
        document.getElementById("mobile").value.length > 0 && 
        document.getElementById("subject").value.length > 0 && 
        document.getElementById("message").value.length > 0
    
    
    ){
    var params ={
        name : document.getElementById("name").value,
        email:document.getElementById("email").value,
        mobile:document.getElementById("mobile").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }
    const serviceID ="service_rerjkyk";
const templateID ="template_7gn7vi6";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your mail sent successfully")
    }
)
.catch((err)=>console.log(err));
}
else{
    alert("Fill all the field before sending")
}
}

