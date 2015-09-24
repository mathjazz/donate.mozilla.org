import React from 'react';

var NameInput = React.createClass({
  mixins: [require('react-intl').IntlMixin],
  getInitialState: function() {
    return {
      values: {
        first: "",
        last: ""
      },
      firstValid: true,
      lastValid: true
    };
  },
  validate: function() {
    var valid = true;
    if (!this.state.values.first) {
      valid = false;
      this.setState({
        firstValid: valid
      });
    }
    if (!this.state.values.last) {
      valid = false;
      this.setState({
        lastValid: valid
      });
    }
    return valid;
  },
  onFirstChange: function(e) {
    this.setState({
      values: {
        first: e.currentTarget.value,
        last: this.state.values.last
      }
    });
    this.setState({
      firstValid: true
    });
    this.props.onChange(this.props.name, this);
  },
  onLastChange: function(e) {
    this.setState({
      values: {
        first: this.state.values.first,
        last: e.currentTarget.value
      }
    });
    this.setState({
      lastValid: true
    });
    this.props.onChange(this.props.name, this);
  },
  componentDidMount: function() {
    this.props.onChange(this.props.name, this);
  },
  render: function() {
    var firstClassName = "";
    if (!this.state.firstValid) {
      firstClassName += "parsley-error";
    }
    var lastClassName = "";
    if (!this.state.lastValid) {
      lastClassName += "parsley-error";
    }
    return (
      <div className="row cc-additional-info" id="full-name-row">
        <div className="half">
          <div className="field-container">
            <i className="fa fa-user field-icon"></i>
            <input className={firstClassName} type="text" value={this.state.values.name} onChange={this.onFirstChange} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" name="firstname" placeholder={this.getIntlMessage('first_name')}/>
          </div>
        </div>
        <div className="half">
          <div className="field-container">
            <input className={lastClassName} type="text" value={this.state.values.last} onChange={this.onLastChange} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" name="lastname" placeholder={this.getIntlMessage('last_name')}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NameInput;
