export class GenerateQuoteRequest {
    public name: string = '';
    public email: string = '';
    public phone: string = '';
    public customer: string = '';
    public service: string = '';
    public description: string = '';
    public estimatedValue: number | null = null;
    public complement?: string;
}
