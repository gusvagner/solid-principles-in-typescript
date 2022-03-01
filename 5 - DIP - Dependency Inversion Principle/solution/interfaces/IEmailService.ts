interface IEmailService {

    isValid(email: string): boolean;
    send();

}