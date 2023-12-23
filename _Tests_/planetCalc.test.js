import { ageCalc } from "../src/js/ageCalc";
import { planetCalc } from "../src/js/planetCalc";

describe('planetCalc', () => {
    let ageCalcInstance;
    let barbiePlanet;

    beforeEach(() => {
        ageCalcInstance = new ageCalc(45, 65);
        barbiePlanet = new planetCalc(ageCalcInstance);
    });
    test('it should return the values of ageCurr, birthdayAge & ageDiff', () => {
        const values = barbiePlanet.getAgeCalcValue();
        expect(values).toEqual({
            currentAge: 45,
            birthdayAge: 65,
            ageDiff: 20
        }); 
    })
})