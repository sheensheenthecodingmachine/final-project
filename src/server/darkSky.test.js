import {fetchDaWeather} from "./darkSky";
describe("Integration Test - darkSky", () => {
    it("should fetch the weather for valid parameters", ()=>{
        expect(fetchDaWeather(52.511769, 13.398004, (new Date()).getTime())).toBeFalsy();
    })
});