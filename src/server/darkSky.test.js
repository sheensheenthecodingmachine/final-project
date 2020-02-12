const fetch = require('node-fetch');

import {fetchDaWeather} from "./darkSky";

test('properly fetch the weather', () => {
    expect(fetchDaWeather()).toBeTruthy();
  });

/* //a poor attempt at a test for the weather fetching function
import {fetchDaWeather} from "./darkSky";

describe("Integration Test - darkSky", () => {
    it("should fetch the weather for valid parameters", ()=>{
        expect(fetchDaWeather(lat, long, (new Date()).getTime())).toBeDefined();
    });

test('data filtering', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  }); 

  test(lat, () => {
    const testing = lat;
    expect(testing).toBeDefined();
  }); */

/* }); */