import React from 'react';
import {storiesOf} from "@storybook/react";
import TransactionsGrid from "../../src/transactions-grid";

storiesOf("Transactions Grid", module).addWithJSX("simple", () => <TransactionsGrid/>)
