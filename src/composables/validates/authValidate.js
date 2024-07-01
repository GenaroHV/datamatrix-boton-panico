const authValidate = () => {
    const validateEmailMatch = (email) => {
        return email.match(
            /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        );
    };
    
    const validateEmail = (ev) => {
        const value = ev.target.value;
        ev.target.classList.remove('ion-valid');
        ev.target.classList.remove('ion-invalid');
        validateEmailMatch(value) ? ev.target.classList.add('ion-valid') : ev.target.classList.add('ion-invalid');
    };
    
    const validatePassword = (ev) => {
        const value = ev.target.value;
        ev.target.classList.remove('ion-valid');
        ev.target.classList.remove('ion-invalid');
        value.length >= 8 ? ev.target.classList.add('ion-valid') : ev.target.classList.add('ion-invalid');
    };
    
    const markTouched = (ev) => {
        ev.target.classList.add('ion-touched');
    };

    return {
        validateEmail,
        validatePassword,
        markTouched
    }
}

export default authValidate