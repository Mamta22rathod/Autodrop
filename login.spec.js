import {test, expect} from '@playwright/test';
import{LoginPage} from '../Pages/loginpages';

test('verifying login pages', async ({page}) => {
  const login = new LoginPage(page);
  await login.navigateToLoginPage();
  await login.verifyCredential();
})