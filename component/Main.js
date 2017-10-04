var NavMenu = React.createClass({
	render: function() {
		return (
			React.createElement("ul", {className: "nav-bar"},
				React.createElement("li", {},
					React.createElement("a", {href: "#/"}, "List")
				),
				React.createElement("li", {},
					React.createElement("a", {href: "#/newitem"}, "Add")
				)
			)
		);
	}
});

var InfoItem = React.createClass({
	propTypes: {
		id: React.PropTypes.number,
		name: React.PropTypes.string.isRequired,
		phone: React.PropTypes.string.isRequired,
		email: React.PropTypes.string,
		onCliked: React.PropTypes.func
	},
	render: function() {
		return (
			React.createElement("li", {},
			// React.createElement("a", {href:"#/item/:"+this.props.id, onClick:this.props.onCliked}, this.props.name)
			React.createElement("a", {href:"#/item/:"+this.props.id}, this.props.name)
		)
		);
	}
});
var InfoItems = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired
	},
	render: function() {
		return (
			React.createElement("ul", {}, this.props.items.map(i => React.createElement(InfoItem, i)))
		);
	}
});

var MainPage = React.createClass({
	render: function () {
		return (
			React.createElement("div", {},
				React.createElement(NavMenu, {}),
				React.createElement(InfoItems, {items: gitems}))
		);
	}
});

let state = {
};

function setState(changes) {
	let component;
	let componentProperties = {};
	Object.assign(state, changes);
	let splittedUrl = state.location.replace(/^#\/?|:|\/$/g, "").split("/");
	switch(splittedUrl[0]) {
	case "newitem":
		component = AddNewItemPage;
		componentProperties = {newItem:state.newItem,items:state.items,onUpdateNewItemChange:updateNewItem,onSubmitNewItem:addNewItem};
		break;
	case "item":
		component = ItemPage;
		componentProperties = gitems.find(i => i.key == splittedUrl[1]);
		break;
	default:
		component = MainPage;
		break;

	}
	ReactDOM.render(
		React.createElement(component, componentProperties), document.getElementById("react-app")
	);
}

window.addEventListener("hashchange", ()=>setState({location: location.hash}));
setState({location: location.hash,
	items: gitems,
	newItem:{
		name:"",
		phone:"",
		email:""}

});
