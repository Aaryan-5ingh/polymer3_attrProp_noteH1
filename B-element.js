import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';
class hostB extends PolymerElement{
	static get template(){
		return( html`
			<style>*{background:lightgray;}</style><h3>hello from element B</h3><h5>why is background color no working?It will work with * and not :host. Because A is the host and B is not.</h5>
		<!--<element-c attr1=[[attrProp1]]></element-c> in the A/A-element,js file, where the call to this element is made, make a call <element-b prop1="c-affecting-value"></element-b>.-->
		<h1>😝 😜 🤪😝 😜 🤪[[attrProp1]] 😝 😜 🤪😝 😜 🤪</h1>
			` );
	}
	static get properties(){return({ attrProp1:{type:String},notifyBondage1:{type:Boolean,value:false,notify:true,reflectToAttribute:true}});}
	constructor(){super();}
}
customElements.define('element-b',hostB);