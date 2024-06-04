function formLoad() {
    const isLoggedIn = false;
    
    const messages = {
        success: 'Your success message here',
        info: 'Your info message here',
        error: 'Your error message here'
    };
    
    const values = {
        fio: '',
        phone: '',
        email: '',
        birthday: '',
        gender: 'male',
        like_lang: ['JavaScript'],
        biography: '',
        ozakomlen: true
    };
    
    const errors = {
        fio: 'Error message for fio',
        phone: '',
        email: '',
        birthday: '',
        gender: '',
        like_lang: '',
        biography: '',
        ozakomlen: ''
    };
    
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