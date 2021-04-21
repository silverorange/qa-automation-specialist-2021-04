/* eslint-env jest */

import maxLength from './maxLength';

test('maxLength < 20 chars', () => {
    expect(maxLength(20, 'not even close')).toBe(true)
});

test('maxLength == 20 chars', () => {
    expect(maxLength(20, '12345678901234567890')).toBe(true)
});

test('maxLength > 20 chars', () => {
    expect(maxLength(20, "oh dear me this is a very long string isn't it?")).toBe(false)
});
