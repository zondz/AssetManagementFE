export const validateName = string => {
    if(!string) return "Field is required";
    if(!String(string).match('[a-zA-Z\\s]+')){
        return "Name must not contain numbers and special characters";
    }
    if(string.length < 2) return "Name is too short! Please input first name with 2 characters or more";
    if(string.length > 10) return "Too long!";
    return "";
  }

  export const validateDate = dob => {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    if(age < 18){
        return "User is under 18. Please select a different date";
    }
    return "";
  }

  export const validateJoinedDate = (joinedDate,dob) => {
    var birthDate = new Date(dob);
    var joinedDate = new Date(joinedDate);
    if(joinedDate.getTime() < birthDate.getTime()){
        return "Joined date is not later than Date of Birth. Please select a different date";
    }
    if(joinedDate.getDay() === 6 || joinedDate.getDay() === 0){
        return "Joined date is Saturday or Sunday. Please select a different date";
    }
    return "";
  }

  export const validateType = type => {
    if(!type) return "Type is empty! Please choose type";
    return "";
  }