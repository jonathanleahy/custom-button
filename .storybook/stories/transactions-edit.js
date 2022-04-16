import React from 'react';
import {storiesOf} from "@storybook/react";
import TransactionEdit from "../../src/transaction-edit";

storiesOf("Transactions Edit", module).addWithJSX("simple", () => <TransactionEdit/>)
