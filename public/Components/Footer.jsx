/** @jsx React.DOM */

var React = require('react');

var Footer = React.createClass({

    render: function (){
        return (
            <footer className="page-footer">
              <div className="container">
                <div className="row">
                  <div className="col l12 s12 center">
                    <h5 className="white-text">Simon React Practice</h5>
                    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                  </div>
                </div>
              </div>
              <div className="footer-copyright center">
                <div className="container">
                © 2014 Copyright Simon Sun
                </div>
              </div>
            </footer>
        );
    }

});

module.exports = Footer;