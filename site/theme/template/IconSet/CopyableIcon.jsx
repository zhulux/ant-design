import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Icon } from 'react-lu-design';

export default class CopyableIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      justCopied: false,
    };
  }

  onCopied = () => {
    this.setState({ justCopied: true }, () => {
      setTimeout(() => {
        this.setState({ justCopied: false });
      }, 1000);
    });
  }

  render() {
    const text = `<Icon type="${this.props.type}" />`;
    return (
      <CopyToClipboard text={text} onCopy={this.onCopied}>
        <li className={this.state.justCopied ? 'copied' : ''}>
          <Icon type={this.props.type} />
          <span className="lud-icon-class">{this.props.type}</span>
        </li>
      </CopyToClipboard>
    );
  }
}
