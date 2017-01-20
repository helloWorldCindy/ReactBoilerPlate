var React = require('react');
const { Link } = require('react-router');

var Example = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examples to try out</p>
      <ol>
        <li>
          <Link to='/?location=Shanghai'>Shanghai, China</Link>
        </li>
        <li>
          <Link to='/?location=Ottawa'>Ottawa, Canada</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Example;