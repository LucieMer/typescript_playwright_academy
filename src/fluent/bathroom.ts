import { EntryHall } from "./entry_hall.ts";

export class Bathroom {
  private readonly visitorName: string;

  constructor(visitorName: string) {
    this.visitorName = visitorName;
    console.log(`Návštěvník ${this.visitorName} vstoupil na toalety.`);
  }

  returnToEntryHall() {
    console.log(
      `Návštěvník ${this.visitorName} se vrací z toalety do vstupní haly.`,
    );
    return new EntryHall(this.visitorName);
  }
}
