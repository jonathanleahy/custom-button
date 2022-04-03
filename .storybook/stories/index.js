import React from 'react';
import CustomButton from "../../src";
import {storiesOf} from "@storybook/react";

storiesOf("Custom button", module).addWithJSX("simple", () => <CustomButton/>)
