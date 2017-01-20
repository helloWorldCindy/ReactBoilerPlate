var React = require('react');

var About = (props) => {
  return (
    <div>
      <h2 className="text-center">About</h2>
      <p>This is a weather application build on React.</p>
      <p>
        Tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Javascript framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Weather Searching
        </li>
      </ul>
    </div>
  );
};

module.exports = About;