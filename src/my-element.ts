export class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <style>
        :host {
          display: flex;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
          box-sizing: border-box;
        }
        div{
          padding: 20px;
          margin: 20px;
          background-color: #6b7ecd;
          border-radius: 10px;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
          color: white;
          height: fit-content;
        }

        h2 {
          font-size: 24px;
        }
      </style>
      <div>
        <h2>This is my Custom native plugin</h2>
      </div>
    `;
  }
}

// Define el custom element
customElements.define('my-element', MyElement);

// Declaración global (opcional, pero útil para TypeScript)
declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}