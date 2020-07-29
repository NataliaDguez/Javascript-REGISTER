const form = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];

    var inputEmail = document.getElementById('inputEmail');

    var inputName = document.forms["myForm"]["inputName"];
    var inputLastname = document.forms["myForm"]["inputLastname"];
    var inputPassword = document.forms["myForm"]["inputPassword"];
    var inputPasswordconfirm = document.forms["myForm"]["inputPasswordconfirm"];
	var inputAddress = document.forms["myForm"]["inputAddress"];
	var inputProvince = document.forms["myForm"]["inputProvince"];
	var inputCity = document.forms["myForm"]["inputCity"];
	var inputZip = document.forms["myForm"]["inputZip"];
	var gridCheck = document.forms["myForm"]["gridCheck"];

    if(inputLastname.value == "") {
		inputLastname.classList.add("is-invalid");
		document.getElementById("errorLastname").textContent = "Este campo es obligatorio";
		acumErrores ++;
	}
    
    if(inputName.value == "") {
		inputName.classList.add("is-invalid");
		document.getElementById("errorName").textContent = "Este campo es obligatorio";
		acumErrores ++;
	}
    
    if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Este campo es obligatorio";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
		acumErrores ++;
	}

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Este campo es obligatorio";
		acumErrores ++;
    }
    else if(!validar_password(inputPassword.value)){
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent = "La contraseña debe tener un mínimo de 6 caracteres incluyendo mayúsculas, minúsculas y un número.";
    acumErrores ++;
    }

    if(inputPasswordconfirm.value == "") {
		inputPasswordconfirm.classList.add("is-invalid");
		document.getElementById("errorPasswordconfirm").textContent = "Este campo es obligatorio";
		acumErrores ++;
    }
    else if(!validar_passwordconfirm(inputPasswordconfirm.value)){
    inputPasswordconfirm.classList.add("is-invalid");
    document.getElementById("errorPasswordconfirm").textContent = "Las contraseñas no coinciden";
    acumErrores ++;
    }
	
    if(inputAddress.value == "") {
		inputAddress.classList.add("is-invalid");
		document.getElementById("errorAddress").textContent = "Este campo es obligatorio";
		acumErrores ++;
	}

    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Este campo es obligatorio";
		acumErrores ++;
	}
	
	if(inputCity.value == "") {
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "Este campo es obligatorio";
		acumErrores ++;
	}
	
	if(inputZip.value == "") {
		inputZip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "Este campo es obligatorio";
		acumErrores ++;
    }
    else if(!validar_zip(inputZip.value)){
        inputZip.classList.add("is-invalid");
        document.getElementById("errorZip").textContent = "Código postal incorrecto";
        acumErrores ++;
        }
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Debes aceptar las bases para crear tu cuenta";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}



form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validar_password(password) {
	var regex = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,})+$/;
	return regex.test(password) ? true : false;
}

function validar_passwordconfirm(passwordconfirm) {
    var inputPassword = document.getElementById("inputPassword").value;
    var inputPasswordconfirm = document.getElementById("inputPasswordconfirm").value;
    if (inputPassword != inputPasswordconfirm) {;
        return false;
    }
    return true;
}

function validar_zip(zip) {
	var regex = /^([a-zA-Z0-9_\.\-]{5,})+$/;
	return regex.test(zip) ? true : false;
}