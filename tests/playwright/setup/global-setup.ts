import { chromium, expect, type FullConfig } from "@playwright/test";
import authFile from "../fixture/.auth/user.json";

async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const context = await browser.newContext();

  process.env.BASE_URL = baseURL;
  process.env.USER_EMAIL = authFile.email;
  process.env.USER_PASSWORD = authFile.password;

  try {
    // Perform authentication steps. Replace these actions with your own.
    await page.goto(baseURL!);
    await page.getByLabel("Digite o seu email").fill(authFile.email);
    await page.getByLabel("Digite a sua senha").fill(authFile.password);
    await page.getByRole("button", { name: "Entrar" }).click();
    // Wait until the page receives the cookies.
    //
    // Sometimes login flow sets cookies in the process of several redirects.
    // Wait for the final URL to ensure that the cookies are actually set.
    await page.waitForURL("/home");
    // Alternatively, you can wait until the page reaches a state where all cookies are set.
    await expect(page.getByText("Chamados recentes")).toBeVisible();

    // End of authentication steps.

    await page.context().storageState({ path: storageState as string });
    await browser.close();
  } catch (error) {
    await context.tracing.stop({
      path: "./test-results/failed-setup-trace.zip",
    });
    await browser.close();
    throw error;
  }
}

export default globalSetup;
