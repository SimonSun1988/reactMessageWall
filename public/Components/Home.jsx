
var React = require('react');

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var Container = require('./Container.jsx');


var homePage = React.createClass({
    render: function (){
        return (
            <div className="Container">
                <Header />
                <Container />
                <Footer />
            </div>
        );
    }
});

module.exports = homePage;