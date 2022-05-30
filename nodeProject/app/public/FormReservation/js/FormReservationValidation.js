export default class FormReservationValidation{

    validateNameGuest(firstNameGuest) {
        let name = firstNameGuest.value;
        let regex = /^[a-zA-Z]*$/;
    
        if(name.length < 3 || regex.exec(name) == null){
            firstNameGuest.style.borderColor = "red";
            firstNameGuest.style.borderWidth = "2px";
            firstNameGuest.style.borderStyle = "solid";
            console.log("Invalid Name");
        } else{
            firstNameGuest.style.borderColor = "green";
            firstNameGuest.style.borderWidth = "2px";
            firstNameGuest.style.borderStyle = "solid";
            console.log("Valid Name");
        }
    }
    
    ValidateLastNameGuest(lastNameGuest) {
        let lastName = lastNameGuest.value;
        let regex = /^[a-zA-Z]*$/;
    
        if(lastName.length < 3 || regex.exec(lastName) == null){
            lastNameGuest.style.borderColor = "red";
            lastNameGuest.style.borderWidth = "2px";
            lastNameGuest.style.borderStyle = "solid";
            console.log("Invalid Name");
        } else{
            lastNameGuest.style.borderColor = "green";
            lastNameGuest.style.borderWidth = "2px";
            lastNameGuest.style.borderStyle = "solid";
            console.log("Valid Name");
        }
    }
    ValidateDNI(numberDNIGuest) {
        let lastName = numberDNIGuest.value;
        let regex = /[0-9]/;
    
        if(regex.exec(lastName) == null || lastName.length < 5){
            numberDNIGuest.style.borderColor = "red";
            numberDNIGuest.style.borderWidth = "2px";
            numberDNIGuest.style.borderStyle = "solid";
        } else{
            numberDNIGuest.style.borderColor = "green";
            numberDNIGuest.style.borderWidth = "2px";
            numberDNIGuest.style.borderStyle = "solid";
        }
    }
    
    validateNamePartner(firstNamePartner) {
        let name = firstNamePartner.value;
        let regex = /^[a-zA-Z]*$/;
    
        if(name.length < 3 || regex.exec(name) == null){
            firstNamePartner.style.borderColor = "red";
            firstNamePartner.style.borderWidth = "2px";
            firstNamePartner.style.borderStyle = "solid";
            console.log("Invalid Name");
        } else{
            firstNamePartner.style.borderColor = "green";
            firstNamePartner.style.borderWidth = "2px";
            firstNamePartner.style.borderStyle = "solid";
            console.log("Valid Name");
        }
    }
    
    ValidateLastNamePartner(lastNamePartner) {
        let lastName = lastNamePartner.value;
        let regex = /^[a-zA-Z]*$/;
    
        if(lastName.length < 3 || regex.exec(lastName) == null){
            lastNamePartner.style.borderColor = "red";
            lastNamePartner.style.borderWidth = "2px";
            lastNamePartner.style.borderStyle = "solid";
            console.log("Invalid Name");
        } else{
            lastNamePartner.style.borderColor = "green";
            lastNamePartner.style.borderWidth = "2px";
            lastNamePartner.style.borderStyle = "solid";
            console.log("Valid Name");
        }
    }
    
    ablePartner(partnerGuestCheck, firstNamePartner, lastNamePartner){
        if(partnerGuestCheck.checked){
            firstNamePartner.removeAttribute('disabled');
            firstNamePartner.required = true;
            lastNamePartner.removeAttribute('disabled');
            lastNamePartner.required = true;
        }else{
            firstNamePartner.setAttribute('disabled', true);
            lastNamePartner.setAttribute('disabled', true);
        }
    }
    
    
    validateDateCheckin(dateCheckinRoom, dateCheckoutRoom){
        let checkInDate = dateCheckinRoom.value;
        let checkOutDate = dateCheckoutRoom.value;
        let today = new Date();
    
        console.log(checkInDate + "in");
        console.log(checkOutDate + "out");
        if(checkInDate === ""){
            dateCheckinRoom.style.borderColor = "red";
            dateCheckinRoom.style.borderWidth = "2px";
            dateCheckinRoom.style.borderStyle = "solid";
        }else if(checkInDate > checkOutDate && checkOutDate !== ""){
            dateCheckinRoom.style.borderColor = "red";
            dateCheckinRoom.style.borderWidth = "2px";
            dateCheckinRoom.style.borderStyle = "solid";
        }else{
            dateCheckinRoom.style.borderColor = "green";
            dateCheckinRoom.style.borderWidth = "2px";
            dateCheckinRoom.style.borderStyle = "solid";
        }
    }
    
    validateDateCheckOut(dateCheckoutRoom, dateCheckinRoom){
        let checkOutDate = dateCheckoutRoom.value;
        let checkInDate = dateCheckinRoom.value;
    
        if(checkOutDate === ""){
            dateCheckoutRoom.style.borderColor = "red";
            dateCheckoutRoom.style.borderWidth = "2px";
            dateCheckoutRoom.style.borderStyle = "solid";
        }else if(checkOutDate < checkInDate && checkInDate !== ""){
            dateCheckoutRoom.style.borderColor = "red";
            dateCheckoutRoom.style.borderWidth = "2px";
            dateCheckoutRoom.style.borderStyle = "solid";
        }else{
            dateCheckoutRoom.style.borderColor = "green";
            dateCheckoutRoom.style.borderWidth = "2px";
            dateCheckoutRoom.style.borderStyle = "solid";
        }
    }
}
