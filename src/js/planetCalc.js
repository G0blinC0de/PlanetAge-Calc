export class planetCalc {
    constructor(ageCalcInstance) {
        this.ageCalc = ageCalcInstance;
        this.mercuryAge;
        this.mercuryDiff;
        this.venusAge;
        this.venusDiff;
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
        this.mercuryDiff = parseInt(this.ageCalc.ageDiff / .24);
    }
    venusAgeCalc() {
        this.venusAge = parseInt(this.ageCalc.ageCurr / .62);
        this.venusDiff = parseInt(this.ageCalc.ageDiff / .62);
    }
}