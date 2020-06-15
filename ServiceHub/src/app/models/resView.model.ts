export class ResView{
    constructor(
        public reservationId : number,
        public service : string,
        public companyId : number,
        public companyName : string,
        public companyAddress : string,
        public contact : string,
        public workerId : number,
        public firstName : string,
        public lastName : string,
        public reservationDate : Date,
        public status : boolean,
        public userId : number,
        public userName : string
    ){}
}