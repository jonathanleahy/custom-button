(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TransactionsGrid}));__webpack_require__(55),__webpack_require__(26),__webpack_require__(54),__webpack_require__(75),__webpack_require__(18),__webpack_require__(17),__webpack_require__(194),__webpack_require__(53),__webpack_require__(79);var react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);__webpack_require__(452),__webpack_require__(455);function _slicedToArray(arr,i){return function(arr){if(Array.isArray(arr))return arr}(arr)||function(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TransactionsGrid(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_9__.useState)(0),2),count=_useState2[0],setCount=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"container grid"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3",null,"The Ledger"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"col-4"},"111111211"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"col-4"},"2222222"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"col-4"},"3333333"))),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",null,"You clicked ",count," times"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button",{onClick:function(){return setCount(count+1)}},"Click me"))}TransactionsGrid.__docgenInfo={description:"",methods:[],displayName:"TransactionsGrid"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/transactions-grid.js"]={name:"TransactionsGrid",docgenInfo:TransactionsGrid.__docgenInfo,path:"src/transactions-grid.js"})},197:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return CustomButton}));__webpack_require__(179),__webpack_require__(458),__webpack_require__(459),__webpack_require__(178),__webpack_require__(5),__webpack_require__(26),__webpack_require__(54),__webpack_require__(75),__webpack_require__(18),__webpack_require__(17);var react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);__webpack_require__(460);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}var CustomButton=function(_Component){function CustomButton(){return _classCallCheck(this,CustomButton),_super.apply(this,arguments)}!function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(CustomButton,_Component);var Constructor,protoProps,staticProps,_super=_createSuper(CustomButton);return Constructor=CustomButton,(protoProps=[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button",null,"Hello how a111re you?")}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),CustomButton}(react__WEBPACK_IMPORTED_MODULE_10__.Component);CustomButton.__docgenInfo={description:"",methods:[],displayName:"CustomButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/custom-button.js"]={name:"CustomButton",docgenInfo:CustomButton.__docgenInfo,path:"src/custom-button.js"})},198:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TransactionEdit}));__webpack_require__(55),__webpack_require__(26),__webpack_require__(54),__webpack_require__(75),__webpack_require__(18),__webpack_require__(17),__webpack_require__(194),__webpack_require__(53),__webpack_require__(79);var react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);function _slicedToArray(arr,i){return function(arr){if(Array.isArray(arr))return arr}(arr)||function(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TransactionEdit(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_9__.useState)(0),2),count=_useState2[0],setCount=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",null,"You clicked ",count," times"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button",{onClick:function(){return setCount(count+1)}},"Click me"))}TransactionEdit.__docgenInfo={description:"",methods:[],displayName:"TransactionEdit"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/transaction-edit.js"]={name:"TransactionEdit",docgenInfo:TransactionEdit.__docgenInfo,path:"src/transaction-edit.js"})},199:function(module,exports,__webpack_require__){__webpack_require__(200),__webpack_require__(328),module.exports=__webpack_require__(329)},263:function(module,exports){},329:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(195),storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_0__),_require=__webpack_require__(46),configure=_require.configure;(0,_require.setAddon)(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_0___default.a),configure((function(){return __webpack_require__(451)}),module),configure((function(){return __webpack_require__(457)}),module),configure((function(){return __webpack_require__(462)}),module)}.call(this,__webpack_require__(77)(module))},451:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(46),_src_transactions_grid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(196);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Transactions Grid",module).addWithJSX("simple",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_transactions_grid__WEBPACK_IMPORTED_MODULE_2__.a,null)}))}.call(this,__webpack_require__(77)(module))},452:function(module,exports,__webpack_require__){var content=__webpack_require__(453);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(126)(content,options);content.locals&&(module.exports=content.locals)},453:function(module,exports,__webpack_require__){(exports=module.exports=__webpack_require__(125)(!1)).push([module.i,"@import url(https://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,700italic);",""]),exports.push([module.i,'html,body{height:100%;width:100%;margin:0;padding:0;left:0;top:0;font-size:100%}*{font-family:"Lato",Helvetica,sans-serif;color:#333447;line-height:1.5}h1{font-size:2.5rem}h2{font-size:2rem}h3{font-size:1.375rem}h4{font-size:1.125rem}h5{font-size:1rem}h6{font-size:0.875rem}p{font-size:1.125rem;font-weight:200;line-height:1.8}.font-light{font-weight:300}.font-regular{font-weight:400}.font-heavy{font-weight:700}.left{text-align:left}.right{text-align:right}.center{text-align:center;margin-left:auto;margin-right:auto}.justify{text-align:justify}.hidden-sm{display:none}.container{width:90%;margin-left:auto;margin-right:auto}@media only screen and (min-width: 33.75em){.container{width:80%}}@media only screen and (min-width: 60em){.container{width:75%;max-width:60rem}}.row{position:relative;width:100%}.row [class^="col"]{float:left;margin:0.5rem 2%;min-height:0.125rem}.row::after{content:"";display:table;clear:both}.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12{width:96%}.col-1-sm{width:4.33333%}.col-2-sm{width:12.66667%}.col-3-sm{width:21%}.col-4-sm{width:29.33333%}.col-5-sm{width:37.66667%}.col-6-sm{width:46%}.col-7-sm{width:54.33333%}.col-8-sm{width:62.66667%}.col-9-sm{width:71%}.col-10-sm{width:79.33333%}.col-11-sm{width:87.66667%}.col-12-sm{width:96%}@media only screen and (min-width: 45em){.col-1{width:4.33333%}.col-2{width:12.66667%}.col-3{width:21%}.col-4{width:29.33333%}.col-5{width:37.66667%}.col-6{width:46%}.col-7{width:54.33333%}.col-8{width:62.66667%}.col-9{width:71%}.col-10{width:79.33333%}.col-11{width:87.66667%}.col-12{width:96%}.hidden-sm{display:block}}\n',""])},455:function(module,exports,__webpack_require__){var content=__webpack_require__(456);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(126)(content,options);content.locals&&(module.exports=content.locals)},456:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(125)(!1)).push([module.i,".grid{border:1px solid green;background-color:#eee}\n",""])},457:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(46),_src_custom_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(197);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Custom button",module).addWithJSX("simple",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_custom_button__WEBPACK_IMPORTED_MODULE_2__.a,null)}))}.call(this,__webpack_require__(77)(module))},460:function(module,exports,__webpack_require__){var content=__webpack_require__(461);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(126)(content,options);content.locals&&(module.exports=content.locals)},461:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(125)(!1)).push([module.i,"button{border:1px solid green;border-radius:4px;padding:10px;background-color:#ccc}\n",""])},462:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(46),_src_transaction_edit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(198);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Transactions Edit",module).addWithJSX("simple",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_transaction_edit__WEBPACK_IMPORTED_MODULE_2__.a,null)}))}.call(this,__webpack_require__(77)(module))}},[[199,1,2]]]);
//# sourceMappingURL=main.147730167a802114e28d.bundle.js.map