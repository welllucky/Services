import { SectorDto } from "@/types";
import { expect, test } from "@playwright/test";

test.describe("Register Page - Sectors Loading", () => {
  test.beforeEach(async ({ page }) => {
    // Navegar para a página de registro
    await page.goto("http://localhost:2424/register");

    // Aguardar a página carregar completamente
    await page.waitForLoadState("networkidle");
  });

  test("should load sectors on page mount", async ({ page }) => {
    // Aguardar o select de setores aparecer
    const sectorSelect = page.locator("select[name=\"sector\"]");
    await expect(sectorSelect).toBeVisible({ timeout: 10000 });

    // Verificar se o select tem opções (além da opção padrão)
    const options = page.locator("select[name=\"sector\"] option");
    const count = await options.count();

    // Deve ter pelo menos 2 opções (opção padrão + pelo menos 1 setor)
    expect(count).toBeGreaterThan(1);

    // Capturar e logar as opções disponíveis
    const optionTexts = await options.allTextContents();
    console.log("Setores disponíveis:", optionTexts);
  });

  test("should load positions when sector is selected", async ({ page }) => {
    // Aguardar o select de setores
    const sectorSelect = page.locator("select[name=\"sector\"]");
    await expect(sectorSelect).toBeVisible({ timeout: 10000 });

    // Aguardar as opções carregarem
    await page.waitForTimeout(2000);

    // Selecionar o primeiro setor disponível (não a opção padrão)
    const firstSectorOption = page.locator("select[name=\"sector\"] option").nth(1);
    const sectorValue = await firstSectorOption.getAttribute("value");

    if (sectorValue) {
      // Selecionar o setor
      await sectorSelect.selectOption(sectorValue);

      // Aguardar o select de cargos aparecer e carregar
      const positionSelect = page.locator("select[name=\"role\"]");
      await expect(positionSelect).toBeVisible({ timeout: 10000 });

      // Aguardar as opções de cargo carregarem
      await page.waitForTimeout(2000);

      // Verificar se existem opções de cargo
      const positionOptions = page.locator("select[name=\"role\"] option");
      const positionCount = await positionOptions.count();

      expect(positionCount).toBeGreaterThan(1);

      // Logar os cargos disponíveis
      const positionTexts = await positionOptions.allTextContents();
      console.log("Cargos disponíveis:", positionTexts);
    }
  });

  test("should make API request to fetch sectors", async ({ page }) => {
    // Interceptar requisições para o endpoint de setores
    const sectorRequests: SectorDto[] = [];

    page.on("request", (request) => {
      if (request.url().includes("/api/public/enterprise") && request.url().includes("/sectors")) {
        sectorRequests.push({
          id: request.url(),
          name: request.method(),
          description: new Date().toISOString(),
        });
      }
    });

    // Recarregar a página para capturar requisições desde o início
    await page.reload();
    await page.waitForLoadState("networkidle");

    // Aguardar um pouco para garantir que as requisições foram feitas
    await page.waitForTimeout(3000);

    // Verificar se pelo menos uma requisição foi feita
    expect(sectorRequests.length).toBeGreaterThan(0);
    console.log("Requisições para setores:", sectorRequests);
  });

  test("should display sector data in console.log", async ({ page }) => {
    // Capturar logs do console
    const consoleLogs: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "log") {
        consoleLogs.push(msg.text());
      }
    });

    // Recarregar a página
    await page.reload();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);

    // Verificar se há logs relacionados aos setores
    const sectorLogs = consoleLogs.filter((log) =>
      log.includes("sectors") || log.includes("sectorsOptions"));

    console.log("Console logs relacionados a setores:", sectorLogs);

    // Deve haver pelo menos um log com informações de setores
    expect(sectorLogs.length).toBeGreaterThan(0);
  });
});
