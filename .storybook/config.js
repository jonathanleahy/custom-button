const {configure, setAddon} = require("@storybook/react");
import JSXAddon from "storybook-addon-jsx";

setAddon(JSXAddon);

configure( () => require("./stories/transactions-grid"), module);
configure( () => require("./stories/custom-button"), module);
configure( () => require("./stories/transactions-edit"), module);

