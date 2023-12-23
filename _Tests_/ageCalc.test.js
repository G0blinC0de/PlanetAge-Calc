import { ageCalc } from "../src/js/ageCalc";

describe('ageCalc', () => {
    let barbie;

    beforeEach(() => {
        barbie = new ageCalc(45, 65);
    });
    test("should take take age input from user", () => {
        expect(barbie.ageCurr).toBe(45);
    })
    test("should take birthday age input from user", () => {
        expect(barbie.birthdayAge).toBe(65);
    })
    test("should take the absolute value of the difference of ageCurr & birthdayAge returned as a new variable", () => {
        console.log(barbie.ageDiff);
        expect(barbie.ageDiff).toBe(20);
    })
})