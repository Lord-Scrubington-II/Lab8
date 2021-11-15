// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


// phone numbers
test('925-420-6969 is a valid phone number', () => {
    expect(functions.isPhoneNumber("925-420-6969")).toBe(true);
});


test('858-111-1337 is a valid phone number', () => {
    expect(functions.isPhoneNumber("858-111-1337")).toBe(true);
});

test('925-15-1111111 is not a valid phone number', () => {
    expect(functions.isPhoneNumber("925-15-1111111")).toBe(false);
});


test('beans is not a valid phone number', () => {
    expect(functions.isPhoneNumber("beans")).toBe(false);
});


// emails
test('TheLordofScrubington@gmail.com is a valid email address', () => {
    expect(functions.isEmail("TheLordofScrubington@gmail.com")).toBe(true);
});


test('soup@haha.com is a valid email address', () => {
    expect(functions.isEmail("soup@haha.com")).toBe(true);
});

test('aaaaaaaaaaa is not a valid email address', () => {
    expect(functions.isEmail("aaaaaaaaaaa")).toBe(false);
});


test('@aa@aa@a.com is not a valid email address', () => {
    expect(functions.isEmail("@aa@aa@a.com")).toBe(false);
});


// passwords
test('NutsHaGottem is a strong password', () => {
    expect(functions.isStrongPassword("NutsHaGottem")).toBe(true);
});


test('Myb0nes_hurt is a strong password', () => {
    expect(functions.isStrongPassword("Myb0nes_hurt")).toBe(true);
});

test('1337 is not a strong password', () => {
    expect(functions.isStrongPassword("1337")).toBe(false);
});


test('e? is not a strong password', () => {
    expect(functions.isStrongPassword("e?")).toBe(false);
});

// dates
test('30/2/2012 is a date', () => {
    expect(functions.isDate("30/2/2012")).toBe(true);
});


test('10/20/2021 is a date', () => {
    expect(functions.isDate("10/20/2021")).toBe(true);
});

test('oof town road is not a date', () => {
    expect(functions.isDate("oof town road")).toBe(false);
});


test('1/1/1 is not a date', () => {
    expect(functions.isDate("1/1/1")).toBe(false);
});

// colours

test('#BEEF42 is a hex colour', () => {
    expect(functions.isHexColor("#BEEF42")).toBe(true);
});


test('#666 is a hex colour', () => {
    expect(functions.isHexColor("133769")).toBe(true);
});

test('"sad boi ode" is not a hex colour', () => {
    expect(functions.isHexColor("sad boi ode")).toBe(false);
});


test('#MEMEMACHINE is not a hex colour', () => {
    expect(functions.isHexColor("#MEMEMACHINE")).toBe(false);
});