!function(){var e={703:function(e,t,r){"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,c){if(c!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},697:function(e,t,r){e.exports=r(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e,t,n,o=window.wp.i18n,i=window.wp.blocks,c=window.React;function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var p=r(697),l=r.n(p),u=window.wp.components,m=window.wp.data,d=window.wp.coreData,b=window.wp.blockEditor,f=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"bigupweb/project-name","version":"0.1.0","title":"Project Name","category":"theme","icon":"portfolio","description":"Name of the project","usesContext":["postId","postType","queryId"],"textdomain":"bigupweb-project-name","editorScript":"file:./index.js"}'),h=JSON.parse('{"key":"project","label":"Projects","prefix":"_bigup_","customFields":[{"block_name":"bigupweb/project-name","suffix":"_name","label":"Project Name","description":"Name of the project","type":"string","input_type":"text","placeholder":"Add a name","length_limit":"50","required":"","show_in_rest":"true","single":"true","user_capabilities":"edit_posts"},{"block_name":"bigupweb/project-url","suffix":"_url","label":"Project URL","description":"Link to learn more. E.g the live project or a full blog post","type":"string","input_type":"url","placeholder":"Add a project URL","length_limit":"300","required":"","show_in_rest":"true","single":"true","user_capabilities":"edit_posts"},{"block_name":"bigupweb/project-sort-index","suffix":"_sort_index","label":"Sort Index","description":"Projects can be ordered using this number","type":"integer","input_type":"number","number_min":0,"number_max":100,"number_step":1,"required":"","show_in_rest":"true","single":"true","user_capabilities":"edit_posts"},{"block_name":"bigupweb/project-is-featured","suffix":"_is_featured","label":"Featured","description":"Check if the project should be used in featured template areas","type":"boolean","input_type":"checkbox","required":"","show_in_rest":"true","single":"true","user_capabilities":"edit_posts"}]}');const{prefix:_,label:g,key:y,customFields:w}=h;function v({isSelected:e,context:{postId:t,postType:r,queryId:n}}){const i=(0,b.useBlockProps)();if(y===(0,m.useSelect)((e=>e("core/editor").getCurrentPostType())))return(0,c.createElement)("p",null,`Error: This block cannot be used inside the ${g} post type!`);if(!Number.isFinite(n)||y!==r)return(0,c.createElement)("p",null,`Error: This block must be used inside a ${g} post type query loop!`);const[s]=(0,d.useEntityProp)("postType",r,"meta",t);let a={};w.forEach((e=>{e.block_name===f.name&&(a=e,a.metaKey=_+y+e.suffix,a.value=s[a.metaKey])}));const p="post.php?post="+t+"&action=edit";return(0,c.createElement)(c.Fragment,null,e&&(0,c.createElement)(b.InspectorControls,null,(0,c.createElement)(u.PanelBody,{title:(0,o.__)("Settings"),initialOpen:!0},(0,c.createElement)(u.PanelRow,null,(0,c.createElement)("a",{href:p},(0,o.__)("Edit this project to set the name"))))),(0,c.createElement)("div",{...i},(0,c.createElement)("p",null,(0,c.createElement)("em",null,a.value?"~ "+a.value:a.placeholder))))}v.propTypes={context:l().object,isSelected:l().bool},console.log(f.name+" BLOCK LOADED"),(0,i.registerBlockCollection)("bigupweb",{title:(0,o.__)("Bigup Web"),icon:function(r){return c.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:24,height:24},r),e||(e=c.createElement("path",{d:"M.614 0v24h13.003c3.191 0 5.611-.583 7.262-1.748 1.672-1.166 2.508-2.789 2.508-4.869 0-1.394-.363-2.583-1.09-3.566-.703-1.005-1.716-1.771-3.036-2.297-.056-.023-.12-.038-.177-.06.943-.51 1.693-1.148 2.224-1.929.66-.96.99-2.045.99-3.257 0-1.828-.76-3.326-2.277-4.491C18.502.594 16.148 0 12.958 0Z"})),t||(t=c.createElement("path",{fill:"#f8f801",d:"M9.432.928c-.87-.017-1.376.102-1.696.377-.112.097-.437.647-.747 1.271-.625 1.255-.62 1.248-1.346 2.356-.654.999-.756 1.273-.713 1.96.054.885.484 1.57 1.26 1.995l.214.117-.41-.027c.009.334.05.65.147.969.11.362.33.59.781.816.523.259 1 .362 1.646.355.95-.008 1.506-.258 1.811-.812.32-.582.2-1.142-.463-2.219-.281-.458-.294-.502-.254-.89.082-.803.089-.768-.095-.766-.137.002-.226.104-.448.506-.322.584-.516.808-1.023 1.197-.448.34-.572.37-.203.049.644-.562 1.135-1.515 1.576-3.055l.232-.81-.353-.358c-.294-.297-.326-.35-.178-.307.21.06.54.057.643-.007.107-.069.083-.444-.043-.682-.135-.256-.097-.264.203-.043.516.381 1.044.347 1.4-.094l.215-.27.004.27c.005.588.36 1.046 1.393 1.8.553.402.694.474.925.466.588-.02.622-.37.135-1.383-.16-.334-.38-.878-.492-1.21-.287-.856-.522-1.256-.785-1.347-.12-.039-.444-.069-.723-.066A23.053 23.053 0 0 1 10.43.988a13.737 13.737 0 0 0-.998-.06Zm4.957 1.115c-.377.002-.663.133-.66.309 0 .134.36 1.075.525 1.375.111.204.541.113.791-.17.46-.52.027-1.515-.656-1.514Zm.4 1.945c-.177 0-.33.026-.33.077.001.04.037.211.08.377.103.388.01.645-.29.804-.334.177-.748.109-1.274-.209-.333-.2-.541-.274-.836-.295-.614-.045-1.125.252-1.166.68-.01.103-.014.193-.012.273.008.242.08.4.23.547.234.227.27.234.934.125.256-.04.931-.108 1.5-.15 1.143-.084 1.774-.264 1.963-.559.354-.55.197-1.322-.322-1.593-.097-.051-.3-.077-.477-.077Zm-.207 2.354c-.256.002-.602.046-1.068.121-.39.062-.915.116-1.17.12-.256.002-.545.046-.64.097-.267.137-.498.534-.495.851.004.34.187.536.557.594.15.023.304.055.344.07.038.014.57.015 1.177 0 1.02-.024 1.136-.043 1.463-.21.426-.218.528-.407.524-.952-.005-.5-.129-.695-.692-.691Zm-.19 2.064-1.437.077c-.999.055-1.472.108-1.55.174-.071.06-.106.207-.106.372 0 .167.036.351.107.487.13.243.524.493.97.615.44.12 1.4.067 1.698-.094.574-.306.825-1.057.483-1.445Zm-.837 2.713c-.452-.008-1.006.04-1.7.14-.647.091-1.5.188-1.894.216-1.257.086-1.393.212-1.773 1.664-.097.372-.31.997-.471 1.39-.338.82-.473 1.234-.426 1.471.028.143.122.223.278.29.319.134.65.052 1.01-.253 1.549-1.315 1.852-1.702 1.884-2.408l.018-.353.215.203c.594.56 1.212.522 1.923-.121l.19-.172-.17.345c-.195.394-.215.613-.073.758.123.126.608.136.83.02.246-.13.202-.045-.216.418l-.379.422.291.867c.524 1.56.967 2.383 1.686 3.125.35.363.626.66.61.66-.013 0-.164-.072-.335-.162-.434-.23-.98-.799-1.412-1.473-.288-.448-.412-.57-.574-.572-.242 0-.256.093-.084.588.19.553.153.733-.352 1.709-.419.811-.47.963-.473 1.428-.004.84.442 1.437 1.24 1.666.465.133 1.607.115 2.122-.033 1.045-.302 1.652-.76 1.807-1.393.107-.44.017-.755-.063-1.154-.244-.002-.24-.005.137-.24.45-.282.706-.61.978-1.258.229-.545.274-1.452.094-1.963-.06-.173-.465-.803-.9-1.397-.712-.975-1.34-1.975-2.16-3.451-.37-.664-.865-.958-1.858-.977Zm-6.342 1.63c-.505-.004-.999.57-1.04 1.134a.961.961 0 0 0 .013.24c.074.415.577.828.964.793.18-.017.242-.12.49-.816.156-.44.285-.878.286-.975.003-.211-.305-.374-.713-.377Zm-.48 2.355c-.381-.003-.468.028-.682.254a1.36 1.36 0 0 0-.381.918c0 .11.01.22.04.33.106.408.259.57.751.799.317.147.62.187 1.854.24.81.036 1.751.064 2.093.062.582-.003.635-.017.803-.238.122-.161.18-.363.182-.63.006-.74-.46-1.081-1.39-1.02-.423.026-.579.088-1.018.392-.575.399-1.078.51-1.497.332-.329-.14-.458-.48-.38-1.011l.062-.426Zm.566 2.732c-.617-.004-.82.138-.89.5-.019.09-.026.19-.026.291 0 .307.076.637.201.836.13.204.38.335.87.453.45.109 2.418.038 2.99-.107.79-.201.975-.553.642-1.217-.256-.514-.431-.596-1.285-.604a24.19 24.19 0 0 1-1.737-.1 8.59 8.59 0 0 0-.765-.052Zm.313 2.41-.22.215c-.14.14-.19.22-.19.39 0 .058.004.125.013.208.113 1.081 1.245 1.52 2.818 1.092.659-.18 1.116-.623 1.18-1.145.037-.31.014-.437-.101-.566-.14-.157-.264-.169-1.827-.182Z"})))}}),(0,i.registerBlockType)(f.name,{...f,icon:function(e){return c.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},e),n||(n=c.createElement("path",{d:"M8.75 2.5c-1.25 0-2.5.83-2.5 2.5 0 3.33 5 3.33 5 0 0-1.67-1.25-2.5-2.5-2.5zm0 1.5a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1zm-2 4.75A2.75 2.75 0 0 0 4 11.5v1h1.5v-1c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v1h1.5v-1a2.75 2.75 0 0 0-2.75-2.75h-4zm1.13 5.4v.01l.01-.02zm0 .01-.96 2.73-2.92.07 2.33 1.75-.85 2.79 2.4-1.67 2.4 1.67-.86-2.79 2.34-1.77-2.93-.06-.95-2.72zm8.24-.02-.95 2.75-2.93.07 2.34 1.75-.85 2.79 2.4-1.67 2.39 1.67-.85-2.79L20 16.94l-2.92-.06-.96-2.74z"})))},edit:v,save:()=>null})}()}();