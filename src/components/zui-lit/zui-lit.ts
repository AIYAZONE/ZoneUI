import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('zui-lit')
export class ZuiLit extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--zui-lit-text-color, #000);

      max-width: 800px;
      margin: 0 auto;
    }
    p {
      color: blue;
    }
  `;
  @property()
  name = '你好';
  render() {
    return html`<p>${this.name}，世界！</p>`;
  }
}
