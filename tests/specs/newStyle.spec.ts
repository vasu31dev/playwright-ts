import {  test } from "@PageSetup";
import LoginWithClass from "../pages/LoginWithClass";
import * as LoginMethod from "../pages/LoginWithFunction";

test.describe.configure({ mode: "parallel" });

test.describe("This is Customized Framework code", () => {
  test("Classes with New Framework for Amazon @class", async () => {
    const login = new LoginWithClass();
    await login.gotoHomePage();
    await login.loginSuccessfully();
  });

  test("Functions with New Framework for Amazon @function", async () => {
    await LoginMethod.gotoHomePage();
    await LoginMethod.loginSuccessfully();
  });

});






















// test('No TestUtils with test Signin @test', async ({ page }) => {
//   const signin = new Signin();
//   await signin.goto();
//   await signin.justLogin();
// });