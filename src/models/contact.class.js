
export class Contact{

    name = '';
    lastName = '';
    phone = '';
    email = '';
    conected = false;

    constructor(name, lastName, phone, email, conected){
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.conected = conected;
    }

}
