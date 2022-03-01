class checkingAccountDebit extends accountDebitSolution {

    override debit(value: number, account: string): number {
        // debit checking account 
        return this.transactionId;
    }

}