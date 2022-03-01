class CustomerViolationDIP {
    id: number;
    name: string;
    email: string;
    document: string;

    isValid(): boolean {
        return EmailServiceViolationDIP.IsEmailValid(this.email) && DocumentServiceViolationDIP.IsDocumentValid(this.document);
    }
}