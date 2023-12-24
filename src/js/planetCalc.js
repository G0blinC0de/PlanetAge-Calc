export class planetCalc {
    constructor(ageCalcInstance) {
        this.ageCalc = ageCalcInstance;
        this.mercuryAge;
        this.mercuryDiff;
        this.venusAge;
        this.venusDiff;
        this.marsAge;
        this.marsDiff;
        this.jupiterAge;
        this.jupiterDiff;
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
    marsAgeCalc() {
        this.marsAge = parseInt(this.ageCalc.ageCurr / 1.88);
        this.marsDiff = parseInt(this.ageCalc.ageDiff / 1.88);
    }
    jupiterAgeCalc() {
        this.jupiterAge = parseInt(this.ageCalc.ageCurr / 11.86);
        this.jupiterDiff = parseInt(this.ageCalc.ageDiff / 11.86);
    }
}