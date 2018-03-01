import React from 'react';
import g from 'glamorous';

export default () => (
  <g.Footer
    height="72px"
    backgroundColor="#444"
    color="#FFF"
    position="relative"
  >
    <g.Div
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      margin="0 auto"
      textAlign="center"
      lineHeight="1.2em"
    >
      This part is the website footer. Thanks for reading.
    </g.Div>
  </g.Footer>
)