class EmailService {

    static IsEmailValid(email: string): boolean {
        return email.includes('@');
    }

}