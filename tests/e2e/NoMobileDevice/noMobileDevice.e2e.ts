import { noMobileDeviceTestIds } from "@/screens/NoMobileDevice/testObject";
import { expect, test } from "@playwright/test";

test.describe(
  "No Mobile Device - Desktop  - Suite",
  {
    annotation: [
      {
        type: "desktop",
      },
    ],
    tag: ["@desktop", "@core"],
  },
  () => {
    test.use({
      isMobile: false,
      viewport: { width: 1920, height: 1080 },
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
    });

    test.describe("When user try to access any page by desktop - Suite", () => {
      [
        "home",
        "ticket/1",
        "abrir-chamado",
        "pesquisa",
        "chamados",
        "solicitacoes",
        "login",
        "register",
        "solicitacao/1",
      ].forEach((pageName) => {
        test(`It should redirect to No Mobile page if user try to access the ${pageName} page by desktop`, async ({
          page,
          baseURL,
        }) => {
          await page.goto(`${baseURL}${page}`);
          expect(page.url()).toBe(`${baseURL}noMobileDevice`);
        });
      });
    });

    test.describe("Check the No Mobile Page Structure - Suite", () => {
      test("It should contain the services logo on page", async ({ page }) => {
        await page.goto("/noMobileDevice");
        const logo = page.getByAltText(noMobileDeviceTestIds.logoAlt);
        expect(logo).toBeVisible();
      });

      test("It should contain the no mobile title on page", async ({
        page,
      }) => {
        await page.goto("/noMobileDevice");
        const title = page.getByTestId(noMobileDeviceTestIds.titleId);
        expect(title).toBeVisible();
      });

      test("It should contain the no mobile text on page", async ({ page }) => {
        await page.goto("/noMobileDevice");
        const title = page.getByTestId(noMobileDeviceTestIds.textId);
        expect(title).toBeVisible();
      });

      test("It should contain the no mobile qr code on page", async ({
        page,
      }) => {
        await page.goto("/noMobileDevice");
        const title = page.getByAltText(noMobileDeviceTestIds.qrCodeAlt);
        expect(title).toBeVisible();
      });

      test("It should contain the no mobile qr code text on page", async ({
        page,
      }) => {
        await page.goto("/noMobileDevice");
        const title = page.getByTestId(noMobileDeviceTestIds.qrCodeTextId);
        expect(title).toBeVisible();
      });
    });
  },
);
