"use strict";(self.webpackChunkasfe=self.webpackChunkasfe||[]).push([[642],{1642:($,M,s)=>{s.r(M),s.d(M,{AuthModule:()=>y});var Z=s(7716),l=s(6895),x=s(131),r=s(4006),t=s(8274),T=s(629);class u{constructor(){}getPasswordConfirmControl(o){return new r.p4(null,[r.kI.required,o])}getPasswordFormControl(){return new r.p4(null,[r.kI.required,r.kI.minLength(8),r.kI.maxLength(20)])}getLoginFormControl(){return new r.p4(null,[r.kI.email,r.kI.required])}getPrivacyPolicyFormControl(){return new r.p4(!1,r.kI.required)}getOffersInformationFormControl(){return new r.p4(!1)}static#t=this.\u0275fac=function(e){return new(e||u)};static#e=this.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac})}var c=s(6271);class d{constructor(){this.label="",this.autocomplete="off",this.placeholder="",this.autofocus=!1,this.error=null,this.required=!1,this.typeChanged=new t.vpe,this.touched=!1,this._type=c.o.TEXT,this._val=null}get type(){return this._type}set type(o){o&&(this._type=o,this.typeChanged.emit(o))}get value(){return this._val}set value(o){void 0!==o&&(this._val=o,this.onChange&&this.onChange(o))}markAsTouched(){this.touched||(this.runOnTouch(),this.touched=!0)}onBlur(){this.markAsTouched(),this.runOnTouch()}onInputValueChanges(o){this.writeValue(o.target.value)}writeValue(o){this.value=o}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouch=o}runOnTouch(){this.onTouch&&this.onTouch()}static#t=this.\u0275fac=function(e){return new(e||d)};static#e=this.\u0275cmp=t.Xpm({type:d,selectors:[["ng-component"]],inputs:{label:"label",autocomplete:"autocomplete",placeholder:"placeholder",autofocus:"autofocus",error:"error",required:"required"},outputs:{typeChanged:"typeChanged"},decls:0,vars:0,template:function(e,n){},encapsulation:2})}function A(i,o){if(1&i&&(t.TgZ(0,"label",1),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.ekj("floating",e.isFloat),t.xp6(1),t.AsE("",e.label,"",e.required?" *":"","")}}class f{constructor(){this.isFloat=!1,this.required=!1}static#t=this.\u0275fac=function(e){return new(e||f)};static#e=this.\u0275cmp=t.Xpm({type:f,selectors:[["asfe-label"]],inputs:{label:"label",isFloat:"isFloat",required:"required"},decls:1,vars:1,consts:[["class","float-label",3,"floating",4,"ngIf"],[1,"float-label"]],template:function(e,n){1&e&&t.YNc(0,A,2,4,"label",0),2&e&&t.Q6J("ngIf",n.label)},dependencies:[l.O5],styles:["[_nghost-%COMP%]{-webkit-user-select:none;user-select:none;pointer-events:none}label[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;pointer-events:none;color:#757575;font-size:14px;transition:.4s}label.floating[_ngcontent-%COMP%]{top:10px;font-size:12px;color:var(--main-dark-color);font-weight:500}","input[_ngcontent-%COMP%]{display:block;width:100%;height:45px;border:0;padding:5px 15px 0;margin-bottom:10px;outline:none;border-radius:4px;transition:.4s;border:1px solid transparent}input[_ngcontent-%COMP%]::-moz-placeholder{color:transparent;-moz-transition:.4s;transition:.4s}input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:transparent;-webkit-transition:.4s;transition:.4s}input[_ngcontent-%COMP%]:focus::-moz-placeholder{color:#757575}input[_ngcontent-%COMP%]:focus::-webkit-input-placeholder{color:#757575}label[_ngcontent-%COMP%]{position:absolute;top:50%;left:15px;transform:translateY(-50%)}"],changeDetection:0})}var F=s(9841),m=s(1836);class O{constructor(o){this.translocoService=o}transform(o){return(0,F.a)(Object.keys(o).map(e=>this.translocoService.selectTranslate(`error.${e}`,o[e])))}static#t=this.\u0275fac=function(e){return new(e||O)(t.Y36(m.Vn,16))};static#e=this.\u0275pipe=t.Yjl({name:"errors",type:O,pure:!0})}function k(i,o){if(1&i&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij(" ",e," ")}}class C{static#t=this.\u0275fac=function(e){return new(e||C)};static#e=this.\u0275cmp=t.Xpm({type:C,selectors:[["asfe-error"]],inputs:{errors:"errors"},decls:4,vars:5,consts:[[1,"errors"],[4,"ngFor","ngForOf"]],template:function(e,n){1&e&&(t.TgZ(0,"ul",0),t.YNc(1,k,2,1,"li",1),t.ALo(2,"async"),t.ALo(3,"errors"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,t.lcZ(3,3,n.errors))))},dependencies:[l.sg,l.Ov,O],styles:["[_nghost-%COMP%]{display:block;padding:0 5px;color:#a52020;font-size:12px}[_nghost-%COMP%]   .errors[_ngcontent-%COMP%]{margin-top:-8px;margin-bottom:5px}[_nghost-%COMP%]   .errors[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-align:right}"]})}function q(i,o){if(1&i&&t._UZ(0,"asfe-error",4),2&i){const e=t.oxw();t.Q6J("errors",e.error)}}class p extends d{constructor(){super(...arguments),this.inputType=c.o.TEXT,this.isFloating=!0}ngOnChanges(o){o.inputType&&(this.type=this.inputType)}blur(){this.isFloating=!1,this.onBlur()}static#t=this.\u0275fac=function(){let o;return function(n){return(o||(o=t.n5z(p)))(n||p)}}();static#e=this.\u0275cmp=t.Xpm({type:p,selectors:[["asfe-input"]],inputs:{inputType:"inputType"},features:[t._Bn([{provide:r.JU,useExisting:(0,t.Gpc)(()=>p),multi:!0}]),t.qOj,t.TTD],decls:4,vars:8,consts:[[1,"input"],[3,"required","label","isFloat"],[3,"autofocus","autocomplete","placeholder","type","blur","focus","input"],[3,"errors",4,"ngIf"],[3,"errors"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"asfe-label",1),t.TgZ(2,"input",2),t.NdJ("blur",function(){return n.blur()})("focus",function(){return n.isFloating=!0})("input",function(b){return n.onInputValueChanges(b)}),t.qZA()(),t.YNc(3,q,1,1,"asfe-error",3)),2&e&&(t.xp6(1),t.Q6J("required",n.required)("label",n.label)("isFloat",n.isFloating||!!n.value),t.xp6(1),t.Q6J("autofocus",n.autofocus)("autocomplete",n.autocomplete)("placeholder",n.placeholder)("type",n.type),t.xp6(1),t.Q6J("ngIf",!!n.error&&n.touched))},dependencies:[l.O5,f,C],styles:[".ng-touched.ng-invalid[_nghost-%COMP%]   .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid red}[_nghost-%COMP%]   .input[_ngcontent-%COMP%]{position:relative}","input[_ngcontent-%COMP%]{display:block;width:100%;height:45px;border:0;padding:5px 15px 0;margin-bottom:10px;outline:none;border-radius:4px;transition:.4s;border:1px solid transparent}input[_ngcontent-%COMP%]::-moz-placeholder{color:transparent;-moz-transition:.4s;transition:.4s}input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:transparent;-webkit-transition:.4s;transition:.4s}input[_ngcontent-%COMP%]:focus::-moz-placeholder{color:#757575}input[_ngcontent-%COMP%]:focus::-webkit-input-placeholder{color:#757575}label[_ngcontent-%COMP%]{position:absolute;top:50%;left:15px;transform:translateY(-50%)}"],changeDetection:0})}var J=s(7579),L=s(4482),S=s(5403),I=s(8421),U=s(5032);const Q=function(i){return{"checkbox-slider":!0,"checkbox-slider--active":i}};class h extends d{ngOnInit(){this.value=!1}toggle(){const o=!this.value;this.writeValue(o),this.onChange(o)}static#t=this.\u0275fac=function(){let o;return function(n){return(o||(o=t.n5z(h)))(n||h)}}();static#e=this.\u0275cmp=t.Xpm({type:h,selectors:[["asfe-checkbox"]],features:[t._Bn([{provide:r.JU,useExisting:(0,t.Gpc)(()=>h),multi:!0}]),t.qOj],decls:4,vars:4,consts:[[1,"checkbox"],[3,"ngClass","click"],[1,"checkbox-label"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return n.toggle()}),t.qZA(),t.TgZ(2,"div",2),t._uU(3),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngClass",t.VKq(2,Q,n.value)),t.xp6(2),t.Oqu(n.label))},dependencies:[l.mk],styles:['[_nghost-%COMP%]   .checkbox[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .checkbox-label[_ngcontent-%COMP%]{padding:5px 5px 5px 10px;font-size:12px}[_nghost-%COMP%]   .checkbox-slider[_ngcontent-%COMP%]{position:relative;width:35px;min-width:35px;height:20px;padding:3px;border-radius:10px;background-color:#ccc;transition:.4s;-webkit-user-select:none;user-select:none;cursor:pointer}[_nghost-%COMP%]   .checkbox-slider[_ngcontent-%COMP%]:before{content:"";position:relative;display:block;width:14px;height:14px;border-radius:7px;background-color:#fff;transition:.4s}[_nghost-%COMP%]   .checkbox-slider--active[_ngcontent-%COMP%]{background-color:#04aa6d}[_nghost-%COMP%]   .checkbox-slider--active[_ngcontent-%COMP%]:before{transform:translate(15px)}'],changeDetection:0})}function N(i,o){if(1&i&&t._UZ(0,"asfe-error",5),2&i){const e=t.oxw();t.Q6J("errors",e.error)}}function Y(i,o){if(1&i&&(t.TgZ(0,"div",6),t._UZ(1,"asfe-checkbox",7),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("formControl",e.switcherControl)("label",e.toggleText)}}const D=["*"];class g extends d{constructor(){super(...arguments),this.showToggle=!1,this.toggleText="Show password",this.placeholder=c.o.PASSWORD,this.isFloating=!0,this.switcherControl=new r.p4(!1),this.destroy$=new J.x}ngOnInit(){this.type=c.o.PASSWORD,this.switcherControl.valueChanges.pipe(function z(i){return(0,L.e)((o,e)=>{(0,I.Xf)(i).subscribe((0,S.x)(e,()=>e.complete(),U.Z)),!e.closed&&o.subscribe(e)})}(this.destroy$)).subscribe(o=>{this.type=o?c.o.TEXT:c.o.PASSWORD})}blur(){this.isFloating=!1,this.onBlur()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#t=this.\u0275fac=function(){let o;return function(n){return(o||(o=t.n5z(g)))(n||g)}}();static#e=this.\u0275cmp=t.Xpm({type:g,selectors:[["asfe-password"]],inputs:{showToggle:"showToggle",toggleText:"toggleText",placeholder:"placeholder"},features:[t._Bn([{provide:r.JU,useExisting:(0,t.Gpc)(()=>g),multi:!0}]),t.qOj],ngContentSelectors:D,decls:6,vars:9,consts:[[1,"password"],[3,"label","required","isFloat"],[3,"type","value","autocomplete","placeholder","blur","focus","input"],[3,"errors",4,"ngIf"],["class","password-toggle",4,"ngIf"],[3,"errors"],[1,"password-toggle"],[3,"formControl","label"]],template:function(e,n){1&e&&(t.F$t(),t.TgZ(0,"div",0),t._UZ(1,"asfe-label",1),t.TgZ(2,"input",2),t.NdJ("blur",function(){return n.blur()})("focus",function(){return n.isFloating=!0})("blur",function(){return n.onTouch()})("input",function(b){return n.onInputValueChanges(b)}),t.qZA()(),t.YNc(3,N,1,1,"asfe-error",3),t.Hsn(4),t.YNc(5,Y,2,2,"div",4)),2&e&&(t.xp6(1),t.Q6J("label",n.label)("required",n.required)("isFloat",n.isFloating||!!n.value),t.xp6(1),t.Q6J("type",n.type)("value",n.value)("autocomplete",n.autocomplete)("placeholder",n.placeholder),t.xp6(1),t.Q6J("ngIf",!!n.error&&n.touched),t.xp6(2),t.Q6J("ngIf",n.showToggle))},dependencies:[l.O5,r.JJ,r.oH,h,f,C],styles:[".ng-touched.ng-invalid[_nghost-%COMP%]   .password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid red}[_nghost-%COMP%]   .password[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .password-toggle[_ngcontent-%COMP%]{display:flex}","input[_ngcontent-%COMP%]{display:block;width:100%;height:45px;border:0;padding:5px 15px 0;margin-bottom:10px;outline:none;border-radius:4px;transition:.4s;border:1px solid transparent}input[_ngcontent-%COMP%]::-moz-placeholder{color:transparent;-moz-transition:.4s;transition:.4s}input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:transparent;-webkit-transition:.4s;transition:.4s}input[_ngcontent-%COMP%]:focus::-moz-placeholder{color:#757575}input[_ngcontent-%COMP%]:focus::-webkit-input-placeholder{color:#757575}label[_ngcontent-%COMP%]{position:absolute;top:50%;left:15px;transform:translateY(-50%)}"],changeDetection:0})}const B=["*"];class _{constructor(){this.disabled=!1,this.type="button"}static#t=this.\u0275fac=function(e){return new(e||_)};static#e=this.\u0275cmp=t.Xpm({type:_,selectors:[["asfe-button"]],inputs:{disabled:"disabled",type:"type"},ngContentSelectors:B,decls:2,vars:2,consts:[[3,"type","disabled"]],template:function(e,n){1&e&&(t.F$t(),t.TgZ(0,"button",0),t.Hsn(1),t.qZA()),2&e&&t.Q6J("type",n.type)("disabled",n.disabled)},styles:["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{width:100%;min-width:100px;height:100%;min-height:40px;border:0;font-weight:700;padding:0 15px;border-radius:4px;background-color:var(--main-dark-color);color:#fff;cursor:pointer;transition:.4s}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled{color:#00000042;background-color:#0000001f;box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}"]})}class w{constructor(o,e){this.authService=o,this.authFormService=e,this.form=this.initializeForm()}login(){this.form.valid&&this.authService.login()}initializeForm(){return new r.nJ({login:this.authFormService.getLoginFormControl(),password:this.authFormService.getPasswordFormControl()})}static#t=this.\u0275fac=function(e){return new(e||w)(t.Y36(T.e),t.Y36(u))};static#e=this.\u0275cmp=t.Xpm({type:w,selectors:[["asfe-login"]],decls:18,vars:28,consts:[["novalidate","",1,"form","form-login",3,"formGroup","ngSubmit"],["formControlName","login",3,"required","error","label","placeholder"],["formControlName","password",3,"required","showToggle","error","label","toggleText","placeholder"],["type","submit",3,"disabled"],[1,"question"],["routerLink","../registration"]],template:function(e,n){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.login()}),t.TgZ(1,"h3"),t._uU(2),t.ALo(3,"transloco"),t.qZA(),t._UZ(4,"asfe-input",1),t.ALo(5,"transloco"),t.ALo(6,"transloco"),t._UZ(7,"asfe-password",2),t.ALo(8,"transloco"),t.ALo(9,"transloco"),t.ALo(10,"transloco"),t.TgZ(11,"asfe-button",3),t._uU(12),t.ALo(13,"transloco"),t.qZA(),t.TgZ(14,"p",4),t._uU(15,"\u0415\u0449\u0435 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? "),t.TgZ(16,"a",5),t._uU(17,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),t.qZA()()()),2&e&&(t.Q6J("formGroup",n.form),t.xp6(2),t.Oqu(t.lcZ(3,14,"auth.login-form-title")),t.xp6(2),t.Q6J("required",!0)("error",n.form.controls.login.errors)("label",t.lcZ(5,16,"auth.login-input-label"))("placeholder",t.lcZ(6,18,"auth.login-input-label")),t.xp6(3),t.Q6J("required",!0)("showToggle",!0)("error",n.form.controls.password.errors)("label",t.lcZ(8,20,"auth.password-input-label"))("toggleText",t.lcZ(9,22,"auth.login-form-show-password"))("placeholder",t.lcZ(10,24,"auth.password-input-label")),t.xp6(4),t.Q6J("disabled",n.form.invalid),t.xp6(1),t.hij(" ",t.lcZ(13,26,"auth.login-form-submit-btn-name")," "))},dependencies:[r._Y,r.JJ,r.JL,r.Q7,r.sg,r.u,x.rH,p,g,_,m.Ot]})}class P{constructor(o,e){this.authService=o,this.authFormService=e,this.form=this.initializeForm(),this.passwordInputType=c.o.PASSWORD}register(){this.form.valid&&this.authService.register()}isSubmitDisabled(){return this.form.invalid||!this.form.value.privacyPolicy}initializeForm(){const o=this.authFormService.getPasswordFormControl(),e=this.authFormService.getPasswordConfirmControl(function X(i){return({value:o})=>i.value!==o?{passwordConfirm:{value:o}}:null}(o));return new r.nJ({login:this.authFormService.getLoginFormControl(),password:o,passwordConfirm:e,privacyPolicy:this.authFormService.getPrivacyPolicyFormControl(),offersInformation:this.authFormService.getPrivacyPolicyFormControl()})}static#t=this.\u0275fac=function(e){return new(e||P)(t.Y36(T.e),t.Y36(u))};static#e=this.\u0275cmp=t.Xpm({type:P,selectors:[["asfe-registration"]],decls:23,vars:41,consts:[["novalidate","",1,"form","form-login",3,"formGroup","ngSubmit"],["formControlName","login",3,"required","label","placeholder","error"],["formControlName","password",3,"required","label","showToggle","toggleText","placeholder","error","typeChanged"],["formControlName","passwordConfirm",3,"required","inputType","label","placeholder","error"],["formControlName","privacyPolicy",3,"required","label"],["type","submit",3,"disabled"],[1,"question"],["routerLink","../login"]],template:function(e,n){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.register()}),t.TgZ(1,"h3"),t._uU(2),t.ALo(3,"transloco"),t.qZA(),t._UZ(4,"asfe-input",1),t.ALo(5,"transloco"),t.ALo(6,"transloco"),t.TgZ(7,"asfe-password",2),t.NdJ("typeChanged",function(b){return n.passwordInputType=b}),t.ALo(8,"transloco"),t.ALo(9,"transloco"),t.ALo(10,"transloco"),t._UZ(11,"asfe-input",3),t.ALo(12,"transloco"),t.ALo(13,"transloco"),t.qZA(),t._UZ(14,"asfe-checkbox",4),t.ALo(15,"transloco"),t.TgZ(16,"asfe-button",5),t._uU(17),t.ALo(18,"transloco"),t.qZA(),t.TgZ(19,"p",6),t._uU(20,"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? "),t.TgZ(21,"a",7),t._uU(22,"\u0412\u043e\u0439\u0442\u0438"),t.qZA()()()),2&e&&(t.Q6J("formGroup",n.form),t.xp6(2),t.Oqu(t.lcZ(3,21,"auth.registration-form-title")),t.xp6(2),t.Q6J("required",!0)("label",t.lcZ(5,23,"auth.login-input-label"))("placeholder",t.lcZ(6,25,"auth.login-input-label"))("error",n.form.controls.login.errors),t.xp6(3),t.Q6J("required",!0)("label",t.lcZ(8,27,"auth.password-input-label"))("showToggle",!0)("toggleText",t.lcZ(9,29,"auth.login-form-show-password"))("placeholder",t.lcZ(10,31,"auth.password-input-label"))("error",n.form.controls.password.errors),t.xp6(4),t.Q6J("required",!0)("inputType",n.passwordInputType)("label",t.lcZ(12,33,"auth.password-confirm-label"))("placeholder",t.lcZ(13,35,"auth.password-confirm-label"))("error",n.form.controls.passwordConfirm.errors),t.xp6(3),t.Q6J("required",!0)("label",t.lcZ(15,37,"auth.login-form-privacy-policy-text")),t.xp6(2),t.Q6J("disabled",n.isSubmitDisabled()),t.xp6(1),t.Oqu(t.lcZ(18,39,"auth.registration-form-submit-btn-name")))},dependencies:[r._Y,r.JJ,r.JL,r.Q7,r.sg,r.u,x.rH,p,g,_,h,m.Ot]})}function E(i,o){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"h2",8),t._uU(2,"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 - Iurii"),t.qZA(),t.TgZ(3,"p")(4,"button",9),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.authService.logout())}),t._uU(5,"\u0412\u044b\u0439\u0442\u0438"),t.qZA()(),t.BQk()}}function j(i,o){1&i&&(t.TgZ(0,"h2",8),t._uU(1),t.ALo(2,"transloco"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"auth.welcome-title")))}class v{constructor(o){this.authService=o}static#t=this.\u0275fac=function(e){return new(e||v)(t.Y36(T.e))};static#e=this.\u0275cmp=t.Xpm({type:v,selectors:[["asfe-auth"]],decls:11,vars:4,consts:[[1,"auth"],[1,"auth__column","auth__column--left"],[4,"ngIf","ngIfElse"],[1,"auth__border"],["viewBox","0 0 1440 120","version","1.1","xmlns","http://www.w3.org/2000/svg"],["fill","#015f92","d","M0,24L13.3,26C26.7,28,53,32,80,46C106.7,60,133,84,160,80C186.7,76,213,44,240,38C266.7,32,293,52,320,68C346.7,84,373,96,400,86C426.7,76,453,44,480,42C506.7,40,533,68,560,68C586.7,68,613,40,640,36C666.7,32,693,52,720,64C746.7,76,773,80,800,84C826.7,88,853,92,880,80C906.7,68,933,40,960,28C986.7,16,1013,20,1040,22C1066.7,24,1093,24,1120,24C1146.7,24,1173,24,1200,38C1226.7,52,1253,80,1280,80C1306.7,80,1333,52,1360,46C1386.7,40,1413,56,1440,62C1466.7,68,1493,64,1520,58C1546.7,52,1573,44,1600,44C1626.7,44,1653,52,1680,52C1706.7,52,1733,44,1760,44C1786.7,44,1813,52,1840,56C1866.7,60,1893,60,1907,60L1920,60L1920,120L1906.7,120C1893.3,120,1867,120,1840,120C1813.3,120,1787,120,1760,120C1733.3,120,1707,120,1680,120C1653.3,120,1627,120,1600,120C1573.3,120,1547,120,1520,120C1493.3,120,1467,120,1440,120C1413.3,120,1387,120,1360,120C1333.3,120,1307,120,1280,120C1253.3,120,1227,120,1200,120C1173.3,120,1147,120,1120,120C1093.3,120,1067,120,1040,120C1013.3,120,987,120,960,120C933.3,120,907,120,880,120C853.3,120,827,120,800,120C773.3,120,747,120,720,120C693.3,120,667,120,640,120C613.3,120,587,120,560,120C533.3,120,507,120,480,120C453.3,120,427,120,400,120C373.3,120,347,120,320,120C293.3,120,267,120,240,120C213.3,120,187,120,160,120C133.3,120,107,120,80,120C53.3,120,27,120,13,120L0,120Z",2,"opacity","1","transform","rotate(90deg)","transform-origin","center"],[1,"auth__column","auth__column--light"],["authText",""],[1,"welcome-text"],[3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,E,6,0,"ng-container",2),t.ALo(3,"async"),t.qZA(),t.TgZ(4,"div",3),t.O4$(),t.TgZ(5,"svg",4),t._UZ(6,"path",5),t.qZA()(),t.kcU(),t.TgZ(7,"div",6),t._UZ(8,"router-outlet"),t.qZA()(),t.YNc(9,j,3,3,"ng-template",null,7,t.W1O)),2&e){const a=t.MAs(10);t.xp6(2),t.Q6J("ngIf",t.lcZ(3,2,n.authService.isAuth$))("ngIfElse",a)}},dependencies:[l.O5,x.lC,l.Ov,m.Ot],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}[_nghost-%COMP%]     asfe-button{min-width:-moz-fit-content;min-width:fit-content;width:100px;height:40px;margin:10px auto 0}[_nghost-%COMP%]     .question{width:100%;padding-top:10px;text-align:center;font-size:12px}[_nghost-%COMP%]   .auth[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;width:70%;height:80%;max-width:900px;max-height:500px;border-radius:10px;overflow:hidden;box-shadow:var(--box-shadow-color)}[_nghost-%COMP%]   .auth--authorized[_ngcontent-%COMP%]   .auth__column--left[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .auth--authorized[_ngcontent-%COMP%]   .auth__column--light[_ngcontent-%COMP%]{width:0%}[_nghost-%COMP%]   .auth--authorized[_ngcontent-%COMP%]   .auth__border[_ngcontent-%COMP%]{left:calc(100% - 70px)}[_nghost-%COMP%]   .auth__column[_ngcontent-%COMP%]{width:50%;padding:18px 20px;background-color:var(--main-dark-color);color:var(--main-dark-text-color);transition:all .3s linear}[_nghost-%COMP%]   .auth__column--light[_ngcontent-%COMP%]{background-color:var(--main-primary-color);color:var(--main-primary-text-color)}[_nghost-%COMP%]   .auth__column--left[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding-right:60px}[_nghost-%COMP%]   .auth__column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:20px;text-align:center}[_nghost-%COMP%]   .auth__border[_ngcontent-%COMP%]{position:absolute;left:calc(50% - 27px);height:100%;width:30px;overflow:hidden;transition:all .3s linear}[_nghost-%COMP%]   .auth__border[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;transform:scale(15) rotate(-180deg);height:114%}[_nghost-%COMP%]   .auth[_ngcontent-%COMP%]     .form{display:flex;flex-direction:column}[_nghost-%COMP%]   .auth[_ngcontent-%COMP%]     .form h3{text-align:center;font-size:28px;padding-bottom:20px}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-weight:600}.welcome-text[_ngcontent-%COMP%]{text-align:center;font-size:32px}"],changeDetection:0})}const V=[{path:"",component:v,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:w},{path:"registration",component:P}]}];class y{static#t=this.\u0275fac=function(e){return new(e||y)};static#e=this.\u0275mod=t.oAB({type:y});static#o=this.\u0275inj=t.cJS({providers:[u],imports:[l.ez,r.UX,x.Bz.forChild(V),Z.m,m.y4]})}}}]);