class CustomerService {

    addCustomer(customer: CustomerSolution) {

        if (!customer.isValid())
            return "Invalid data"

        var customerRepository = new CustomerRepository();
        customerRepository.addCustomer(customer);

        EmailService.sendEmail();

        return "Customer registered";
    }

}