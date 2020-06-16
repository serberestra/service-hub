/**
 * Defines Worker model for communication with backend with fields containing
 * appropriate information.
 */
export class Worker {

    constructor(

        public id: number,
        public firstName: string,
        public lastName: string,
        public companyId: number,
        public serviceName: string,
        public companyName?: string,
        public available?: boolean
    ) { }

}