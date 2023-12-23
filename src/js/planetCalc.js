// import { ageCalc } from "./ageCalc";

export class planetCalc {
    constructor(ageCalcInstance) {
        this.ageCalc = ageCalcInstance;
    }
    getAgeCalcValue() {
        return {
            currentAge: this.ageCalc.ageCurr,
            birthdayAge: this.ageCalc.birthdayAge,
            ageDiff: this.ageCalc.ageDiff
        };
    }
}