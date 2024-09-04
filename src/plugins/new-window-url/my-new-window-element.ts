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
      <dss-container><div class="container">
        <button class="dss-button dss-button--md dss-button--primary" @click=${() => window.open("https://www.sport.es/es/", "_blank")}>Obrir App en nova pestanya</button>
      </div></dss-container>
      <dss-container><div class="dss-user-feedback">
        <img class="dss-user-feedback__image" src="img/feedback-error.svg">
        <h4 class="dss-user-feedback__title">Title</h4>
        <p class="dss-user-feedback__description">Write your text here. If it’s longer than three lines, rewrite the text so that it takes up less space.</p>
        <div class="dss-user-feedback__button-group">
          <button type="button" class="dss-user-feedback__button-primary" @click=${() => window.open("https://www.sport.es/es/", "_blank")}>
              Anar a l'aplicació
          </button>
        </div>
      </div></dss-container>
    `
  }


  static styles = css`
    :host {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
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
