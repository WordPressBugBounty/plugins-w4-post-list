!function(){"use strict";var t={n:function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,{a:s}),s},d:function(e,s){for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e=window.wp.blocks,s=window.wp.i18n,i=window.wp.components,o=window.wp.blockEditor,n=window.wp.apiFetch,r=t.n(n),l=window.wp.element,c=window.wp.serverSideRender,a=t.n(c),p=window.ReactJSXRuntime;class d extends l.Component{constructor(t){super(t),this.state={choices:[]},this.onListSearch=this.onListSearch.bind(this),this.onListSelect=this.onListSelect.bind(this)}componentDidMount(){const{listId:t}=this.props.attributes;parseInt(t,10)>0&&this.loadChoices({include:t})}loadChoices({search:t,include:e}){let s="/wp/v2/w4pl?_fields=id,title&status=publish,pending,draft&per_page=10&_locale=user";t&&(s+="&search="+t),e&&(s+="&include[]="+e),r()({path:s}).then((t=>{const e=this.formatChoices(t);this.setState({choices:e})}))}formatChoices(t){return t?t.map((t=>({value:t.id.toString(),label:`${t.title.rendered} (#${t.id})`}))):[]}onListSearch(t){this.loadChoices({search:t})}onListSelect(t){this.props.setAttributes({listId:t})}render(){const{attributes:t}=this.props,{choices:e}=this.state;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.InspectorControls,{children:(0,p.jsxs)(i.PanelBody,{title:(0,s.__)("Settings","w4-post-list"),children:[(0,p.jsx)(i.PanelRow,{children:(0,p.jsx)(i.ComboboxControl,{label:"Select a list",value:t.listId,options:e,onChange:this.onListSelect,onFilterValueChange:this.onListSearch})}),(0,p.jsx)(i.PanelRow,{children:(0,p.jsxs)("p",{children:[(0,s.__)("Or","w4-post-list")," ",(0,p.jsx)("a",{target:"_blank",href:"post-new.php?post_type=w4pl",children:(0,s.__)("Create a new list","w4-post-list")})]})})]})}),(0,p.jsx)(i.Disabled,{children:(0,p.jsx)(a(),{block:"w4-post-list/postlist",attributes:t})})]})}}(0,e.registerBlockType)("w4-post-list/postlist",{title:(0,s.__)("W4 Post List","w4-post-list"),description:(0,s.__)("Display a list from w4 post list plugin.","w4-post-list"),supports:{align:!1,html:!1},icon:"list-view",category:"widgets",attributes:{listId:{type:"string",default:""}},edit:d})}();