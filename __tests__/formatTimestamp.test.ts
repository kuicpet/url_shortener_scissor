import { formatTimestamp } from '../utils/formatTimestamp';

describe('formatTimestamp', () => {
  it('should format timestamp correctly', () => {
    // Test case 1: 1663718400000 (January 20, 2023 00:00:00 UTC)
    expect(formatTimestamp(1663718400000)).toBe('Jan-20-2023, 00:00');

    // Test case 2: 1667792400000 (March 8, 2023 10:00:00 UTC)
    expect(formatTimestamp(1667792400000)).toBe('Mar-08-2023, 10:00');

    // Test case 3: 1672492800000 (January 31, 2024 00:00:00 UTC)
    expect(formatTimestamp(1672492800000)).toBe('Jan-31-2024, 00:00');
  });
});
