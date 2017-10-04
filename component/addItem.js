let AddNewForm = React.createClass({
	propTypes: {
		newItem: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSubmit: React.PropTypes.func.isRequired
	},
	onNameChange: function(e) {
		this.props.onChange(Object.assign({}, this.props.newItem, {name: e.target.value}));
	},
	onPhoneChange: function(e) {
		this.props.onChange(Object.assign({}, this.props.newItem, {phone: e.target.value}));
	},
	onEmailChange: function(e) {
		this.props.onChange(Object.assign({}, this.props.newItem, {email: e.target.value}));
	},
	onSubmit: function(e) {
		this.props.onSubmit(this.props.newItem);
	},
	render: function() {
		return (
			React.createElement("form", {},
				React.createElement("input", {
					type: "text",
					placeholder: "Name",
					value: this.props.newItem.name,
					onChange: this.onNameChange
				}),
				React.createElement("input", {
					type: "text",
					placeholder: "Phone",
					value: this.props.newItem.phone,
					onChange: this.onPhoneChange
				}),
				React.createElement("textarea", {
					placeholder: "Email",
					value: this.props.newItem.email,
					onChange: this.onEmailChange
				}),
				React.createElement("button", {type: "button", onClick: this.onSubmit}, "Submit")
			)
		);
	}
});

let AddNewItemPage = React.createClass({
	propTypes: {
		newItem: React.PropTypes.object.isRequired,
		items: React.PropTypes.array.isRequired,
		onNewItemChange: React.PropTypes.func.isRequired,
		onSubmitNewItem: React.PropTypes.func.isRequired
	},
	render: function() {
		return (
			React.createElement("div", {},
				React.createElement(NavMenu, {}),
				React.createElement(AddNewForm, {
					newItem: this.props.newItem,
					onChange: this.props.onUpdateNewItemChange,
					onSubmit: this.props.onSubmitNewItem})
			)
		);
	}
});


function updateNewItem(item) {
	setState({newItem: item});
}
function addNewItem(item) {
	if(item.name == "" || item.phone==""){
		alert("Invalid Data");
		return;
	}
	let itemList = state.items;
	itemList.push(Object.assign({}, {id:itemList.length + 1},{key: itemList.length + 1}, item));
	setState({items: itemList,newItem:{name:"",phone:"",email:""}});
	alert("Added New Item");
}

