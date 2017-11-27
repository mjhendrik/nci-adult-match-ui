export class DialogResults {
    success: boolean;
    comment?: string;

    static fromString(value: string): DialogResults {
        try {
            return JSON.parse(value) as DialogResults;
        } catch (error) {
            let defaultRes = new DialogResults();
            defaultRes.success = false;
            return defaultRes;
        }

    }

    static toString(value: DialogResults): string {
        return JSON.stringify(value);
    }
}
