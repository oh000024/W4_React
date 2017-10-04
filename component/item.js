var ItemPage = React.createClass({
	render: function() {
		return (
			React.createElement("div", {},
				React.createElement(NavMenu, {}),
				React.createElement("h2", {}, "Name: "+ this.props.name),
				React.createElement("p", {}, "phone: "+this.props.phone),
				React.createElement("p", {}, "email: "+this.props.email)
			)
		);
	}
});
