export class QuoteModel {
  mark?: string;
  year?: string;
  plan?: string;
  constructor( mark: string, year: string, plan: string) {
    this.mark = mark;
    this.year = year;
    this.plan = plan;
  }
}
