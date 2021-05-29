export class UserObject  {
    id:number ;
    email:string;
    username:string;
    token:string ;
    createdAt:string;
    updatedAt:string;
    bio:string ;
    image: string;

    constructor(id:number = null, email:string="" , username:string="", token:string="" ,createdAt:string="", updatedAt:string="" , bio:string="" , image:string=""){
      this.id =id;
      this.email=email;
      this.username =username
      this.token =token
      this.createdAt =createdAt
      this.updatedAt =updatedAt
      this.bio =bio
      this.image =image
    }

  }