export class Worker {

    constructor(

        public id: number,
        public firstName: string,
        public lastName: string,
        public companyId: number,
        public serviceName: string,
        public available? : boolean
    ){}

    
       // public status: number

       /**
   *   {
        "id": 1001,
        "firstName": "Rich",
        "lastName": "Black",
        "companyId": 5001,
        "serviceName": "Gutter Clean"
    },
   */

}