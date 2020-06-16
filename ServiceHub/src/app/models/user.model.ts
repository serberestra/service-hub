/**
 * Defines User interface for communication with backend with fields 
 * containing appropriate information
 */
export interface User {
    id?: string,
    username: string,
    password: string,
    userType?: string,
    phoneNumber?: string
}