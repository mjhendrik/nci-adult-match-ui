export class DialogResults {
    success: boolean;
    comment?: string;

    static fromString(value: string): DialogResults {
        return JSON.parse(value) as DialogResults;
    }

    static toString(value: DialogResults): string {
        return JSON.stringify(value);
    }
}
