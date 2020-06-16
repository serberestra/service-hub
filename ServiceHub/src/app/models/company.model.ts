/**
 * Defines Company object to be sent to backend with fields containing appropriate information
 */
export class Company {
    constructor(
        public id: number,
        public name: string,
        public phoneNumber: string,
        public address: string,
        public userId: number
    ) { }

}