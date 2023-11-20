import { test as setup, expect } from "@playwright/test";

const authFile = "tests/fixture/.auth/user.json";

setup("authenticate", async ({ page }) => {
	// Perform authentication steps. Replace these actions with your own.
	await page.goto("/login");
	await page.getByLabel("Digite o seu email").fill("username");
	await page.getByLabel("Digite a sua senha").fill("password");
	await page.getByRole("button", { name: "Entrar" }).click();
	// Wait until the page receives the cookies.
	//
	// Sometimes login flow sets cookies in the process of several redirects.
	// Wait for the final URL to ensure that the cookies are actually set.
	await page.waitForURL("/");
	// Alternatively, you can wait until the page reaches a state where all cookies are set.
	await expect(page.getByText("Chamados recentes")).toBeVisible();

	// End of authentication steps.

	await page.context().storageState({ path: authFile });
});
