export class User {
    firstName: string;
    socondName: string;
    email: string;
    birthDate: string;
    birthDay:Date;
    street: string;
    zipCode: number;
    city: string;
    customIdName: string = '';


    constructor(obj?:any){
        this.firstName = obj ? obj.firstName : ''
        this.socondName = obj ? obj.socondName : ''
        this.email = obj ? obj.email : ''
        this.birthDate = obj ? obj.birthDate : ''
        this.birthDay = obj ? obj.birthDay : ''
        this.street = obj ? obj.street : ''
        this.zipCode = obj ? obj.zipCode : ''
        this.city = obj ? obj.city : ''
        this.customIdName = obj ? obj.customIdName : '';

    }

    public toJSON(){
        return{
            firstName: this.firstName,
            socondName: this.socondName,
            email: this.email,
            birthDate: this.birthDate,
            birthDay: this.birthDay,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            customIdName: this.customIdName  
        };
    }


}