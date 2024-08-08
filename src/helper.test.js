import { timeConverter } from "./helper";

test("timeConverter function converts seconds to formatted time string", () => {
  // Test case 1: Convert 0 seconds
  expect(timeConverter(0)).toBe("00:00");

  // Test case 2: Convert seconds under 60
  expect(timeConverter(35)).toBe("00:35");

  // Test case 3: Convert seconds with minutes
  expect(timeConverter(121)).toBe("02:01");

  // Test case 4: Convert seconds with minutes and double-digit seconds
  expect(timeConverter(378)).toBe("06:18");
});
