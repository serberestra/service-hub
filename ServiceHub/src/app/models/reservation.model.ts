export class Reservation {

    constructor(
        public id: number,
        public bookedBy: string,      // is user id  //  bookedBy
        public workerId: number,
        public date: Date, //Date
        public status: boolean,  // will change to a string soon  !!

        
        // Company( workers[] ) .....  I think this is what we need ?? ?? ?? ?????? 

        // Company name ?
        // Worker
    ){}
}