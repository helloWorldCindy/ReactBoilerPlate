var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'haha'
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;

    alert(name);
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>submit</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Yaoshen';
var message = 'Awais is a monkey.'
ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);