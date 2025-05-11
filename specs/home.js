import {browser}from '@wdio/globals'
import { expect } from '@wdio/globals'

describe('Amazon HomePage', () => {

    it('Acess URL And Title', async() => {
        await browser.url('https://www.amazon.in/')
      //await expect(browser).toHaveUrlContaining('amazon');
       
    });
     it('Search item', async() => {
       await $('//input [@placeholder="Search Amazon.in"]').addValue('Macbook')
        await $('#nav-search-submit-button').click();
       
    });
     it('Verify Search result', async() => {
        
     

        expect (await $('//*[contains(text(),"results for")]//following-sibling::span[contains(text(),"macbook")]')).toBeDisplayed();
      
       
       
    });
    
});