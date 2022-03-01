class CustomerServiceViolationDIP {

    addCustomer(customer: CustomerViolationDIP) {
        if (!customer.isValid)
            return "Invalid data";

        var customerRepository = new CustomerRepository();
        customerRepository.addCustomer(customer);

        EmailService.sendEmail();

        return "Customer registered";

    }

}