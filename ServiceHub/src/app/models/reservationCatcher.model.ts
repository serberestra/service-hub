/**
 * Defines ReservationCatcher viewModel for communication with backend
 * Contains fields with appropriate information.
 */
export class ReservationCatcher {

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