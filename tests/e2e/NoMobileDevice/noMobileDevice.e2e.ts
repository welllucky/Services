import { test } from "@playwright/test";

test.describe(
  "No Mobile Device - Desktop  - Suite",
  {
    annotation: [
      {
        type: "desktop",
        description: "Desktop",
      },
    ],
  },
  () => {
    test("Access the home page", async ({ page }) => {
      await page.goto("/");
    });
  },
);
