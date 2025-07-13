export class Helpers {
  /**
   * Waits for an element to be displayed and enabled before clicking it.
   * @param {WebdriverIO.Element} element - The element to wait for and click.
   */
  public static async waitAndClick(
    element: WebdriverIO.Element
  ): Promise<void> {
    await element.waitForDisplayed();
    await element.waitForEnabled();
    await element.click();
    console.log(`Clicked on element: ${JSON.stringify(element.selector)}`);
  }

  public static async setValueToElement(
    element: WebdriverIO.Element,
    value: string | number
  ): Promise<void> {
    await element.waitForDisplayed();
    await element.waitForEnabled();
    await element.setValue(value);
    console.log(`Set value to element: ${element.selector}, value: ${value}`);
  }

  public static async waitForElementToBeDisplayed(
    element: WebdriverIO.Element,
    timeout: number = 5000
  ): Promise<void> {
    await element.waitForDisplayed({ timeout });
    console.log(`Element displayed: ${element.selector}`);
  }

  public static async waitforElementToBePresentInDOM(element: WebdriverIO.Element, timeout: number = 5000
  ): Promise<void> {
    await element.waitForExist({ timeout });
    await element.waitForEnabled({ timeout });
  }

  public static async scrollToElement(element: WebdriverIO.Element): Promise<void> {
    await element.scrollIntoView();
    console.log(`Scrolled to element: ${element.selector}`);
  }
}
