class EmailServiceSolutionDIP implements IEmailService {

    isValid(email: string): boolean {
        return email.includes('@');
    }

    send() {
        // send email
    }

}