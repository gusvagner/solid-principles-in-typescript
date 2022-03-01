class DocumentServiceSolutionDIP implements IDocumentService {

    isDocumentValid(document: string): boolean {
        if (document == "")
            return false
        else
            return true;
    }

}