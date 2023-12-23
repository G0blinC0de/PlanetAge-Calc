// import { ageCalc } from "./ageCalc";

export class planetCalc {
    constructor(ageCalcInstance) {
        this.ageCalc = ageCalcInstance;
        this.mercuryAge;
    }
    getAgeCalcValue() {
        return {
            currentAge: this.ageCalc.ageCurr,
            birthdayAge: this.ageCalc.birthdayAge,
            ageDiff: this.ageCalc.ageDiff
        };
    }
    mercuryAgeCalc() {
        this.mercuryAge = parseInt(this.ageCalc.ageCurr / .24);
    }
}