export class ageCalc {
    constructor(ageCurr, birthdayAge) {
        this.ageCurr = ageCurr;
        this.birthdayAge = birthdayAge;
        this.ageDiff = Math.abs(ageCurr - birthdayAge);
    }
}