export function getYearDifference(year: string) {
  return new Date().getFullYear() - parseInt(year);
}

export function totalToPay(mark: string): number {
  let increment: number = 0;
  switch (mark) {
    case "european":
      increment = 1.3;
      break;
    case "american":
      increment = 1.15;
      break;
    case "asian":
      increment = 1.05;
      break;

    default:
      break;
  }
  return increment;
}

export function typeOfInsurance(plan: string):number {
  return plan === "basic" ? 1.2 : 1.5;
}

export function capitalLetter(word:string) {
  return word.charAt(0).toUpperCase()+word.slice(1);
}