import { getFullYear } from '../utils/getCurrentYear';

test('returns the current year', () => {
  const currentYear = new Date().getFullYear();
  const result = getFullYear();
  expect(result).toEqual(currentYear);
});
