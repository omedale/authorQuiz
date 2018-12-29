import Proptype from 'prop-types';

function Sum(props) {
  return <h1>
    {props.a} + {props.b} = {props.a + props.a}
  </h1>
}

Sum.prototype = {
  a: Proptype.number.isRequired,
  b: Proptype.number.isRequired
}

export default Sum;