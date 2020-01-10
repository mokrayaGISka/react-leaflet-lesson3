import React from 'react';

class ZoomSlider extends React.Component {
  onChange = (e) => {
    var zoom = parseInt(e.currentTarget.value, 10);

    if (this.props.onChange) {
      this.props.onChange(zoom);
    }
  }

  render() {
    return (
      <div className="basemaps-container">
        <input type="range" min="0" max="20" value={this.props.zoom} onChange={this.onChange}/>
        {this.props.zoom}
      </div>
    );
  }
};

export default ZoomSlider;