const printError = (id, msg) => {
    document.getElementById(id).innerHTML = msg;
}
const validate = () => {
    let nameerr = mobileerr = langerr = hobbieerr = emailerr = true;
    let data = {
        name:" ",
        mobile:" ",
        hobbies:[],
        lang:"",
    }


    const name = document.studentFrm.name.value;
    const mobile = document.studentFrm.mobile.value;
    const email = document.studentFrm.email.value;
    const lang = document.studentFrm.lang.value;
    const hobbies = document.getElementsByName("hobbies");
    if(name=== ""){
        printError("nameerr", " please enter your name");
    }else {
        printError("nameerr","");
        data = { ...data, name}
        nameerr = false;
    }
    if(mobile=== ""){
        printError("mobileerr", " please enter your mobile number");
    }else {
        printError("mobileerr","");
        data = { ...data,mobile}
        mobileerr = false;
    }
    if(email=== ""){
        printError("emailerr", " please enter your email");
    }else {
        printError("emailerr","");
        data = { ...data,mobile}
        emailerr = false;
    }
    if(lang==="select"){
        printError("langerr", " select your language");
    }else {
        printError("langerr","");
        data = { ...data,lang}
        langerr = false;
    }
    if (hobbies.length>0) {
        for (let hobbie of hobbies) {
            if (hobbie.checked === true){
                data.hobbies.push(hobbie.value);
            }

        }
        if (data.hobbies.length>0) {
            printError("hobbieerr", "");
            hobbieerr = false;

        } else {
            printError("hobbieerr", "select your hobbie");
           
        }

    }

    if (nameerr || mobileerr || langerr || hobbieerr) {
        return false;
    }
    else {
        alert(JSON.stringify(data));
        return true;
    }
}