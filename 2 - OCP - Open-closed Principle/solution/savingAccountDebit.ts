class savingAccountDebit extends accountDebitSolution {

    override debit(value: number, account: string): number {
        // debit saving account 
        return this.transactionId;
    }

}