class EmailServiceViolationDIP {

    static IsEmailValid(email: string): boolean {
        return email.includes('@');
    }

    static sendEmail() {
        // send email
    }

}