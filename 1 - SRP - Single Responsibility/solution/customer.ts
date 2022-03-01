class CustomerSolution {
    id: number;
    name: string;
    email: string;
    document: string;

    isValid(): boolean {
        return EmailService.IsEmailValid(this.email) && DocumentService.IsDocumentValid(this.document);
    }
}