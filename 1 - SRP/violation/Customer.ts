class CustomerViolation {
    id: number;
    name: string;
    email: string;
    document: string;

    addCustomer(): string {

        if (!this.email.includes('@'))
            return "Invalid email";

        if (this.document == "")
            return "Document is required";


        // request http service to save the customer 

        return "Customer added with success";
    }

}