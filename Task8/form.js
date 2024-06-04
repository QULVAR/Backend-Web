function formLoad() {
    const isLoggedIn = false;
    
    const messages = {
        success: '',
        info: '',
        error: ''
    };
    
    const values = {
        fio: '',
        phone: '',
        email: '',
        birthday: '',
        gender: '',
        like_lang: [],
        biography: '',
        ozakomlen: true
    };
    
    const errors = {
        fio: '',
        phone: '',
        email: '',
        birthday: '',
        gender: '',
        like_lang: '',
        biography: '',
        ozakomlen: ''
    };

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "index.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            isLoggedIn = response.isLoggedIn;
            Object.assign(messages, response.messages);
            Object.assign(values, response.values);
            Object.assign(errors, response.errors);
            console.log('Данные получены и присвоены', { isLoggedIn, messages, values, errors });
        }
    };
    xhr.send();
    
    document.getElementById('logoutButton').style.display = isLoggedIn ? 'block' : 'none';
    document.getElementById('loginLink').style.display = isLoggedIn ? 'none' : 'block';
    
    document.getElementById('successMessage').innerText = messages.success || '';
    document.getElementById('infoMessage').innerText = messages.info || '';
    document.getElementById('errorMessage').innerText = messages.error || '';
    
    document.getElementById('fio').value = values.fio;
    document.getElementById('fioError').innerText = errors.fio;
    
    document.getElementById('phone').value = values.phone;
    document.getElementById('phoneError').innerText = errors.phone;
    
    document.getElementById('email').value = values.email;
    document.getElementById('emailError').innerText = errors.email;
    
    document.getElementById('birthday').value = values.birthday;
    document.getElementById('birthdayError').innerText = errors.birthday;
    
    document.getElementById('genderMale').checked = values.gender === 'male';
    document.getElementById('genderFemale').checked = values.gender === 'female';
    document.getElementById('genderError').innerText = errors.gender;
    
    document.getElementById('like_lang').value = values.like_lang;
    document.getElementById('likeLangError').innerText = errors.like_lang;
    
    document.getElementById('biography').value = values.biography;
    document.getElementById('biographyError').innerText = errors.biography;
    
    document.getElementById('oznakomlen').checked = values.ozakomlen;
    document.getElementById('oznakomlenError').innerText = errors.ozakomlen;
}

function genderSelect(){
    setTimeout(function(){
        let el = document.querySelector('input[name=gender][checked]');
        if(el != null)
            el.click();
    }, 200)
}

document.addEventListener('DOMContentLoaded', formLoad);
document.addEventListener("DOMContentLoaded", genderSelect);