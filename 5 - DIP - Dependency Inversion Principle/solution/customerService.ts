class CustomerServiceSolutionDIP implements ICustomerServices {

    private readonly emailService: IEmailService;
    private readonly customerRepository: ICustomerRepository;

    constructor(
        EmailService: IEmailService,
        CustomerRepository: ICustomerRepository
    ) {
        this.emailService = EmailService;
        this.customerRepository = CustomerRepository;
    }

    addCustomer(customer: CustomerSolutionDIP) {
        if (!customer.isValid)
            return "Invalid data";

        this.customerRepository.addCustomer(customer);

        this.emailService.send();
        return "Customer registered";
    }

}