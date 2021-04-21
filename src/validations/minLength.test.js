/* eslint-env jest */

import minLength from './minLength';

test('minLength < 10 characters', () => {
    expect(minLength(10, "hi")).toBe(false)
});

test('minLength == 10 chars', () => {
    expect(minLength(10, "1234567890")).toBe(true)
});

test('minLength > 10 chars', () => {
    expect(minLength(10, "benny bob burger with cheese")).toBe(true)
});
