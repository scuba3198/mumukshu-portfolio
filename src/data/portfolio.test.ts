import { describe, it, expect } from "vitest";
import { portfolioData } from "./portfolio";
import { portfolioDataSchema } from "../schemas/portfolio";

describe("Portfolio Data Validation", () => {
    it("should match the Zod schema perfectly", () => {
        const result = portfolioDataSchema.safeParse(portfolioData);

        if (!result.success) {
            console.error("❌ Portfolio Data Validation Failed!");
            console.error(JSON.stringify(result.error.format(), null, 2));
        }

        expect(result.success).toBe(true);
    });
});
