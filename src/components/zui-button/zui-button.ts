import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import './zui-button.css';

export interface ZuiButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  // 尺寸
  size?: 'small' | 'medium' | 'large';
  // 按钮文本
  label: string;
  onClick?: () => void;
}

export const ZuiButton = ({ primary, backgroundColor, size, label, onClick }: ZuiButtonProps) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary';

  return html`
    <button
      type="button"
      class=${['btn', `btn-${size || 'medium'}`, mode].join(' ')}
      style=${styleMap({ backgroundColor })}
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};
