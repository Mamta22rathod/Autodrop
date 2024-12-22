import{test, expect} from '@playwright/test';
import{LoginPage} from '../Pages/loginpages01';

test('verify login pages', async ({page}) => {
    const lp = new LoginPage(page);
    await lp.directingToLoginPage();
    await lp.verifyCredential();
})