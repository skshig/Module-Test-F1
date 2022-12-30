function submitForm(){
    let name1 = document.getElementById('fullname').value
    let name2 = document.getElementById('lastname').value
    let mail = document.getElementById('emailid').value
    let reasonOfcontact = document.getElementById('contactreason').value
    if(name1 && name2 && mail && reasonOfcontact){
        alert("Form submitted succefully")
    }
    else {
        alert("fill all the fields")
    }
}