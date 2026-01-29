const { normalizeEmail } = require("./app");
const { InvalidEmailError } = require("./src/errors");

test ('Checking valid emails', () => {
    
});

test ('Multiple @ symbols', () => {
    expect(() => normalizeEmail('test@@example.com')).toThrow(InvalidEmailError);

    expect(() => normalizeEmail('test@example@com')).toThrow(InvalidEmailError);
});

test ("Missing @ symbol", () => {
    expect(() => normalizeEmail('testexample.com')).toThrow(InvalidEmailError);
});

test ("Empty email", () => {
    expect(() => normalizeEmail('')).toThrow(InvalidEmailError);
});