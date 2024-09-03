import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-iframe-element')
export class MyIframeElement extends LitElement {

  render() {
    return html`
      <iframe src="https://www.sport.es/es/"></iframe>
    `
  }


  static styles = css`
    :host {
      display: flex;
      max-width: 1280px;
      margin: 0 auto;
      margin: 24px;
      text-align: center;
      box-sizing: border-box;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-iframe-element': MyIframeElement
  }
}
