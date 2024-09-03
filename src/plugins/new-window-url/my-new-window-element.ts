import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-new-window-element')
export class MyNewWindowElement extends LitElement {

  render() {
    return html`
      <button @click=${() => window.open("https://www.sport.es/es/", "_blank")}>Obrir App en nova pestanya</button>
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
    'my-new-window-element': MyNewWindowElement
  }
}
