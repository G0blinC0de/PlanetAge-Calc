export class ageCalc {
    constructor(ageCurr, birthdayAge) {
        this.ageCurr = ageCurr;
        this.birthdayAge = birthdayAge;
        this.ageDiff = Math.abs(ageCurr - birthdayAge);
    }
}
// ageDiff handles finding the difference between the ages
//      provided by the user, regardless of Past or Future
//  returning them as an absolute value avoids arithmetic error