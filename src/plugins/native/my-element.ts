import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {

  render() {
    return html`
      <div class="card">
        <h2>This a lit Demo Plugin</h2>
      </div>
    `
  }


  static styles = css`
    :host {
      display: flex;
      flex:1;
      max-width: 1280px;
      margin: 0 auto;
      margin: 24px;
      text-align: center;
      box-sizing: border-box;
    }

    .card{
      width: 100%;
      padding: 2rem;
      border-radius: 10px;
      background-color: #f5f6fa;
      color: #000;
    }

    h2{
      font-size: 1.5rem;
      font-weight: 600;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
