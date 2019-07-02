import React, { Fragment } from "react";
import PropTypes from "prop-types";
import numeral from "numeral";
function UiHelper({ type = 'text', text, intial = '' }) {
  return React.createElement(
    Fragment,
    null,
    type === "money" && text ? numeral(text).format("$0,0.00") : intial,
    type === "number" && text ? numeral(text).format("0,0") : intial,
    type === "capitalize" && text ? text.charAt(0).toUpperCase() + text.slice(1) : intial,
    type === "uppercase" && text ? text.toUpperCase() : intial,
    type === "text" && text ? text : intial
  );
}

UiHelper.prototype = {
  text: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  type: PropTypes.string,
  intial: PropTypes.string
};
export default UiHelper;