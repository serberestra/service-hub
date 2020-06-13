export class ReservationCatcher {




    /**
     *     {
        "reservationId": 3,
        "service": "Gutter Clean",
        "companyId": 5001,
        "companyName": "ABC Pressure Gutter",
        "companyAddress": "120 Ruby St.",
        "contact": "(808)123",
        "workerId": 1001,
        "firstName": "Rich",
        "lastName": "Black",
        "reservationDate": "2020-09-09T00:00:00.000+00:00",
        "status": true,
        "userId": 1010,
        "userName": "test@test.com"
    }
     */

    constructor(
        public reservationId?: string,
        public service?: string,
        public companyId?: string,
        public companyName?: string,
        public companyAddress?: string,
        public contact?: string,
        public workerId?: string,
        public firstName?: string,
        public lastName?: string,
        public reservationDate?: string,
        public status?: boolean,
        public userId?: string,
        public userName?: string
    ){}
}