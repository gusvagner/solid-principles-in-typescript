class CustomerSolutionDIP {

    private readonly emailService: IEmailService;
    private readonly documentService: IDocumentService;

    constructor(EmailService: IEmailService, DocumentService: IDocumentService) {
        this.emailService = EmailService;
        this.documentService = DocumentService;
    }

    id: number;
    name: string;
    email: string;
    document: string;

    isValid(): boolean {
        return this.emailService.isValid(this.email) && this.documentService.isDocumentValid(this.document);
    }
}