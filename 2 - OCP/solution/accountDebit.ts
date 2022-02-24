abstract class accountDebitSolution {
    transactionId: number;

    abstract debit(value: number, account: string);
}