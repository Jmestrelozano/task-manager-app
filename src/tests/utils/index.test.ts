import {
  formatDate,
  dateFormatter,
  getInitials,
  capitalizeWords,
  PRIORITY_STYLES,
  TASK_TYPE_STYLES,
} from "@/utils";

describe("Utility Functions", () => {
  describe("formatDate", () => {
    it("should format a valid date correctly", () => {
      const date = new Date("2025-01-22");
      expect(formatDate(date)).toBe("22-Jan-2025");
    });

    it("should return an empty string for an invalid date", () => {
      const invalidDate = new Date("invalid-date");
      expect(formatDate(invalidDate)).toBe("");
    });
  });

  describe("dateFormatter", () => {
    it("should format a valid date string correctly", () => {
      const dateString = "2025-01-22";
      expect(dateFormatter(dateString)).toBe("2025-01-22");
    });

    it("should return null for an invalid date string", () => {
      const invalidDateString = "invalid-date";
      expect(dateFormatter(invalidDateString)).toBeNull();
    });
  });

  describe("getInitials", () => {
    it("should return the initials for a full name", () => {
      const name = "John Doe";
      expect(getInitials(name)).toBe("JD");
    });

    it("should handle names with more than two words", () => {
      const name = "John Michael Doe";
      expect(getInitials(name)).toBe("JM");
    });

    it("should return the first initial for a single name", () => {
      const name = "John";
      expect(getInitials(name)).toBe("J");
    });
  });

  describe("capitalizeWords", () => {
    it("should capitalize the first letter of each word", () => {
      const str = "hello world";
      expect(capitalizeWords(str)).toBe("Hello World");
    });

    it("should handle single-word strings", () => {
      const str = "hello";
      expect(capitalizeWords(str)).toBe("Hello");
    });

    it("should handle mixed-case words", () => {
      const str = "heLLo WoRLD";
      expect(capitalizeWords(str)).toBe("Hello World");
    });
  });

  describe("PRIORITY_STYLES", () => {
    it("should return the correct class for high priority", () => {
      expect(PRIORITY_STYLES.High).toBe("text-red-600");
    });

    it("should return the correct class for medium priority", () => {
      expect(PRIORITY_STYLES.Medium).toBe("text-yellow-600");
    });

    it("should return the correct class for low priority", () => {
      expect(PRIORITY_STYLES.Low).toBe("text-blue-600");
    });
  });

  describe("TASK_TYPE_STYLES", () => {
    it("should return the correct class for Todo task type", () => {
      expect(TASK_TYPE_STYLES.Todo).toBe("bg-blue-600");
    });

    it("should return the correct class for In Progress task type", () => {
      expect(TASK_TYPE_STYLES["In Progress"]).toBe("bg-yellow-600");
    });

    it("should return the correct class for Completed task type", () => {
      expect(TASK_TYPE_STYLES.Completed).toBe("bg-green-600");
    });
  });
});
