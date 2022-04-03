const {configure, setAddon} = require("@storybook/react");
import JSXAddon from "storybook-addon-jsx";

setAddon(JSXAddon);

configure( () => require("./stories"), module);
