/**
 * Defines Reservation model to be sent to backend with fields containing appropriate information
 */
export class Reservation {

    constructor(
        public id: number,
        public bookedBy: string,      
        public workerId: number,
        public date: Date, 
        public status: boolean
    ){}
}