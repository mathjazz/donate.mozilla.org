import React from 'react';

var Footer = React.createClass({
  render: function() {
    return (
      <footer>
        <div className="footer">
          <div className="row">
            <div className="half">
              <img src="/images/Mozilla-wordmark.png"/>
              <p className="license">Portions of this content are &copy;1998&ndash;2015
                by
                individual mozilla.org contributors. Content available under a <a href="https://www.mozilla.org/foundation/licensing/website-content/" target="_blank">Creative Commons license</a>.
              </p>
            </div>
            <div className="quarter">
              <ul>
                <li><a href="https://www.mozilla.org/mission/" target="_blank">Mission</a></li>
                <li><a href="https://www.mozilla.org/about/" target="_blank">About</a></li>
                <li><a href="https://www.mozilla.org/contact/spaces/" target="_blank">Contact</a>
                </li>
                <li><a href="https://www.mozilla.org/privacy/" target="_blank">Privacy Policy</a>
                </li>
                <li><a href="https://www.mozilla.org/about/legal/" target="_blank">Legal Notices</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
