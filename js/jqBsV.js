(function(e){function u(c,b){for(var a=Array.prototype.slice.call(arguments).splice(2),e=c.split("."),f=e.pop(),g=0;g<e.length;g++)b=b[e[g]];return b[f].apply(this,a)}var r=[],h={options:{prependExistingHelpBlock:!1,sniffHtml:!0,preventSubmit:!0,submitError:!1,submitSuccess:!1,semanticallyStrict:!1,autoAdd:{helpBlocks:!0},filter:function(){return!0}},methods:{init:function(c){var b=e.extend(!0,{},h);b.options=e.extend(!0,b.options,c);c=e.unique(this.map(function(){return e(this).parents("form")[0]}).toArray());
e(c).bind("submit",function(a){var c=e(this),f=0,g=c.find("input,textarea,select").not("[type=submit],[type=image]").filter(b.options.filter);g.trigger("submit.validation").trigger("validationLostFocus.validation");g.each(function(a,b){var c=e(b).parents(".form-group").first();c.hasClass("warning")&&(c.removeClass("warning").addClass("error"),f++)});g.trigger("validationLostFocus.validation");f?(b.options.preventSubmit&&a.preventDefault(),c.addClass("error"),e.isFunction(b.options.submitError)&&b.options.submitError(c,
a,g.jqBootstrapValidation("collectErrors",!0))):(c.removeClass("error"),e.isFunction(b.options.submitSuccess)&&b.options.submitSuccess(c,a))});return this.each(function(){var a=e(this),c=a.parents(".form-group").first(),f=c.find(".help-block").first(),g=a.parents("form").first(),k=[];!f.length&&b.options.autoAdd&&b.options.autoAdd.helpBlocks&&(f=e('<div class="help-block" />'),c.find(".controls").append(f),r.push(f[0]));if(b.options.sniffHtml){var d="";void 0!==a.attr("pattern")&&(d="Not in the expected format\x3c!-- data-validation-pattern-message to override --\x3e",
a.data("validationPatternMessage")&&(d=a.data("validationPatternMessage")),a.data("validationPatternMessage",d),a.data("validationPatternRegex",a.attr("pattern")));if(void 0!==a.attr("max")||void 0!==a.attr("aria-valuemax")){var h=void 0!==a.attr("max")?a.attr("max"):a.attr("aria-valuemax"),d="Too high: Maximum of '"+h+"'\x3c!-- data-validation-max-message to override --\x3e";a.data("validationMaxMessage")&&(d=a.data("validationMaxMessage"));a.data("validationMaxMessage",d);a.data("validationMaxMax",
h)}if(void 0!==a.attr("min")||void 0!==a.attr("aria-valuemin"))h=void 0!==a.attr("min")?a.attr("min"):a.attr("aria-valuemin"),d="Too low: Minimum of '"+h+"'\x3c!-- data-validation-min-message to override --\x3e",a.data("validationMinMessage")&&(d=a.data("validationMinMessage")),a.data("validationMinMessage",d),a.data("validationMinMin",h);void 0!==a.attr("maxlength")&&(d="Too long: Maximum of '"+a.attr("maxlength")+"' characters\x3c!-- data-validation-maxlength-message to override --\x3e",a.data("validationMaxlengthMessage")&&
(d=a.data("validationMaxlengthMessage")),a.data("validationMaxlengthMessage",d),a.data("validationMaxlengthMaxlength",a.attr("maxlength")));void 0!==a.attr("minlength")&&(d="Too short: Minimum of '"+a.attr("minlength")+"' characters\x3c!-- data-validation-minlength-message to override --\x3e",a.data("validationMinlengthMessage")&&(d=a.data("validationMinlengthMessage")),a.data("validationMinlengthMessage",d),a.data("validationMinlengthMinlength",a.attr("minlength")));if(void 0!==a.attr("required")||
void 0!==a.attr("aria-required"))d=b.builtInValidators.required.message,a.data("validationRequiredMessage")&&(d=a.data("validationRequiredMessage")),a.data("validationRequiredMessage",d);void 0!==a.attr("type")&&"number"===a.attr("type").toLowerCase()&&(d=b.builtInValidators.number.message,a.data("validationNumberMessage")&&(d=a.data("validationNumberMessage")),a.data("validationNumberMessage",d));void 0!==a.attr("type")&&"email"===a.attr("type").toLowerCase()&&(d="Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e",
a.data("validationValidemailMessage")?d=a.data("validationValidemailMessage"):a.data("validationEmailMessage")&&(d=a.data("validationEmailMessage")),a.data("validationValidemailMessage",d));void 0!==a.attr("minchecked")&&(d="Not enough options checked; Minimum of '"+a.attr("minchecked")+"' required\x3c!-- data-validation-minchecked-message to override --\x3e",a.data("validationMincheckedMessage")&&(d=a.data("validationMincheckedMessage")),a.data("validationMincheckedMessage",d),a.data("validationMincheckedMinchecked",
a.attr("minchecked")));void 0!==a.attr("maxchecked")&&(d="Too many options checked; Maximum of '"+a.attr("maxchecked")+"' required\x3c!-- data-validation-maxchecked-message to override --\x3e",a.data("validationMaxcheckedMessage")&&(d=a.data("validationMaxcheckedMessage")),a.data("validationMaxcheckedMessage",d),a.data("validationMaxcheckedMaxchecked",a.attr("maxchecked")))}void 0!==a.data("validation")&&(k=a.data("validation").split(","));e.each(a.data(),function(a,c){var b=a.replace(/([A-Z])/g,
",$1").split(",");"validation"===b[0]&&b[1]&&k.push(b[1])});var d=k,p=[];do e.each(k,function(a,b){k[a]=n(b)}),k=e.unique(k),p=[],e.each(d,function(c,d){if(void 0!==a.data("validation"+d+"Shortcut"))e.each(a.data("validation"+d+"Shortcut").split(","),function(a,b){p.push(b)});else if(b.builtInValidators[d.toLowerCase()]){var f=b.builtInValidators[d.toLowerCase()];"shortcut"===f.type.toLowerCase()&&e.each(f.shortcut.split(","),function(a,b){b=n(b);p.push(b);k.push(b)})}}),d=p;while(0<d.length);var m=
{};e.each(k,function(c,d){var f=a.data("validation"+d+"Message"),q=void 0!==f,g=!1,f=f?f:"'"+d+"' validation failed \x3c!-- Add attribute 'data-validation-"+d.toLowerCase()+"-message' to input to change this message --\x3e";e.each(b.validatorTypes,function(b,c){void 0===m[b]&&(m[b]=[]);g||void 0===a.data("validation"+d+n(c.name))||(m[b].push(e.extend(!0,{name:n(c.name),message:f},c.init(a,d))),g=!0)});if(!g&&b.builtInValidators[d.toLowerCase()]){var h=e.extend(!0,{},b.builtInValidators[d.toLowerCase()]);
q&&(h.message=f);var k=h.type.toLowerCase();"shortcut"===k?g=!0:e.each(b.validatorTypes,function(b,c){void 0===m[b]&&(m[b]=[]);g||k!==b.toLowerCase()||(a.data("validation"+d+n(c.name),h[c.name.toLowerCase()]),m[k].push(e.extend(h,c.init(a,d))),g=!0)})}g||e.error("Cannot find validation info for '"+d+"'")});f.data("original-contents",f.data("original-contents")?f.data("original-contents"):f.html());f.data("original-role",f.data("original-role")?f.data("original-role"):f.attr("role"));c.data("original-classes",
c.data("original-clases")?c.data("original-classes"):c.attr("class"));a.data("original-aria-invalid",a.data("original-aria-invalid")?a.data("original-aria-invalid"):a.attr("aria-invalid"));a.bind("validation.validation",function(c,d){var f=t(a),g=[];e.each(m,function(c,q){(f||f.length||d&&d.includeEmpty||b.validatorTypes[c].blockSubmit&&d&&d.submitting)&&e.each(q,function(d,e){b.validatorTypes[c].validate(a,f,e)&&g.push(e.message)})});return g});a.bind("getValidators.validation",function(){return m});
a.bind("submit.validation",function(){return a.triggerHandler("change.validation",{submitting:!0})});a.bind("keyup focus blur click keydown keypress change".split(" ").join(".validation ")+".validation",function(d,h){var k=t(a),l=[];c.find("input,textarea,select").each(function(b,c){var d=l.length;e.each(e(c).triggerHandler("validation.validation",h),function(a,b){l.push(b)});l.length>d?e(c).attr("aria-invalid","true"):(d=a.data("original-aria-invalid"),e(c).attr("aria-invalid",void 0!==d?d:!1))});
g.find("input,select,textarea").not(a).not('[name="'+a.attr("name")+'"]').trigger("validationLostFocus.validation");l=e.unique(l.sort());l.length?(c.removeClass("success error").addClass("warning"),b.options.semanticallyStrict&&1===l.length?f.html(l[0]+(b.options.prependExistingHelpBlock?f.data("original-contents"):"")):f.html('<ul role="alert"><li>'+l.join("</li><li>")+"</li></ul>"+(b.options.prependExistingHelpBlock?f.data("original-contents"):""))):(c.removeClass("warning error success"),0<k.length&&
c.addClass("success"),f.html(f.data("original-contents")));"blur"===d.type&&c.removeClass("success")});a.bind("validationLostFocus.validation",function(){c.removeClass("success")})})},destroy:function(){return this.each(function(){var c=e(this),b=c.parents(".form-group").first(),a=b.find(".help-block").first();c.unbind(".validation");a.html(a.data("original-contents"));b.attr("class",b.data("original-classes"));c.attr("aria-invalid",c.data("original-aria-invalid"));a.attr("role",c.data("original-role"));
-1<r.indexOf(a[0])&&a.remove()})},collectErrors:function(c){var b={};this.each(function(a,c){var f=e(c),g=f.attr("name"),f=f.triggerHandler("validation.validation",{includeEmpty:!0});b[g]=e.extend(!0,f,b[g])});e.each(b,function(a,c){0===c.length&&delete b[a]});return b},hasErrors:function(){var c=[];this.each(function(b,a){c=c.concat(e(a).triggerHandler("getValidators.validation")?e(a).triggerHandler("validation.validation",{submitting:!0}):[])});return 0<c.length},override:function(c){h=e.extend(!0,
h,c)}},validatorTypes:{callback:{name:"callback",init:function(c,b){return{validatorName:b,callback:c.data("validation"+b+"Callback"),lastValue:c.val(),lastValid:!0,lastFinished:!0}},validate:function(c,b,a){if(a.lastValue===b&&a.lastFinished)return!a.lastValid;!0===a.lastFinished&&(a.lastValue=b,a.lastValid=!0,a.lastFinished=!1,u(a.callback,window,c,b,function(b){a.lastValue===b.value&&(a.lastValid=b.valid,b.message&&(a.message=b.message),a.lastFinished=!0,c.data("validation"+a.validatorName+"Message",
a.message),setTimeout(function(){c.trigger("change.validation")},1))}));return!1}},ajax:{name:"ajax",init:function(c,b){return{validatorName:b,url:c.data("validation"+b+"Ajax"),lastValue:c.val(),lastValid:!0,lastFinished:!0}},validate:function(c,b,a){if(""+a.lastValue===""+b&&!0===a.lastFinished)return!1===a.lastValid;!0===a.lastFinished&&(a.lastValue=b,a.lastValid=!0,a.lastFinished=!1,e.ajax({url:a.url,data:"value="+b+"&field="+c.attr("name"),dataType:"json",success:function(b){""+a.lastValue===
""+b.value&&(a.lastValid=!!b.valid,b.message&&(a.message=b.message),a.lastFinished=!0,c.data("validation"+a.validatorName+"Message",a.message),setTimeout(function(){c.trigger("change.validation")},1))},failure:function(){a.lastValid=!0;a.message="ajax call failed";a.lastFinished=!0;c.data("validation"+a.validatorName+"Message",a.message);setTimeout(function(){c.trigger("change.validation")},1)}}));return!1}},regex:{name:"regex",init:function(c,b){var a=c.data("validation"+b+"Regex");return{regex:new RegExp("^"+
a+"$")}},validate:function(c,b,a){return!a.regex.test(b)&&!a.negative||a.regex.test(b)&&a.negative}},required:{name:"required",init:function(c,b){return{}},validate:function(c,b,a){return!(0!==b.length||a.negative)||!!(0<b.length&&a.negative)},blockSubmit:!0},match:{name:"match",init:function(c,b){var a=c.parents("form").first().find('[name="'+c.data("validation"+b+"Match")+'"]').first();a.bind("validation.validation",function(){c.trigger("change.validation",{submitting:!0})});return{element:a}},
validate:function(c,b,a){return b!==a.element.val()&&!a.negative||b===a.element.val()&&a.negative},blockSubmit:!0},max:{name:"max",init:function(c,b){return{max:c.data("validation"+b+"Max")}},validate:function(c,b,a){return parseFloat(b,10)>parseFloat(a.max,10)&&!a.negative||parseFloat(b,10)<=parseFloat(a.max,10)&&a.negative}},min:{name:"min",init:function(c,b){return{min:c.data("validation"+b+"Min")}},validate:function(c,b,a){return parseFloat(b)<parseFloat(a.min)&&!a.negative||parseFloat(b)>=parseFloat(a.min)&&
a.negative}},maxlength:{name:"maxlength",init:function(c,b){return{maxlength:c.data("validation"+b+"Maxlength")}},validate:function(c,b,a){return b.length>a.maxlength&&!a.negative||b.length<=a.maxlength&&a.negative}},minlength:{name:"minlength",init:function(c,b){return{minlength:c.data("validation"+b+"Minlength")}},validate:function(c,b,a){return b.length<a.minlength&&!a.negative||b.length>=a.minlength&&a.negative}},maxchecked:{name:"maxchecked",init:function(c,b){var a=c.parents("form").first().find('[name="'+
c.attr("name")+'"]');a.bind("click.validation",function(){c.trigger("change.validation",{includeEmpty:!0})});return{maxchecked:c.data("validation"+b+"Maxchecked"),elements:a}},validate:function(c,b,a){return a.elements.filter(":checked").length>a.maxchecked&&!a.negative||a.elements.filter(":checked").length<=a.maxchecked&&a.negative},blockSubmit:!0},minchecked:{name:"minchecked",init:function(c,b){var a=c.parents("form").first().find('[name="'+c.attr("name")+'"]');a.bind("click.validation",function(){c.trigger("change.validation",
{includeEmpty:!0})});return{minchecked:c.data("validation"+b+"Minchecked"),elements:a}},validate:function(c,b,a){return a.elements.filter(":checked").length<a.minchecked&&!a.negative||a.elements.filter(":checked").length>=a.minchecked&&a.negative},blockSubmit:!0}},builtInValidators:{email:{name:"Email",type:"shortcut",shortcut:"validemail"},validemail:{name:"Validemail",type:"regex",regex:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",message:"Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e"},
passwordagain:{name:"Passwordagain",type:"match",match:"password",message:"Does not match the given password\x3c!-- data-validator-paswordagain-message to override --\x3e"},positive:{name:"Positive",type:"shortcut",shortcut:"number,positivenumber"},negative:{name:"Negative",type:"shortcut",shortcut:"number,negativenumber"},number:{name:"Number",type:"regex",regex:"([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",message:"Must be a number\x3c!-- data-validator-number-message to override --\x3e"},integer:{name:"Integer",
type:"regex",regex:"[+-]?\\d+",message:"No decimal places allowed\x3c!-- data-validator-integer-message to override --\x3e"},positivenumber:{name:"Positivenumber",type:"min",min:0,message:"Must be a positive number\x3c!-- data-validator-positivenumber-message to override --\x3e"},negativenumber:{name:"Negativenumber",type:"max",max:0,message:"Must be a negative number\x3c!-- data-validator-negativenumber-message to override --\x3e"},required:{name:"Required",type:"required",message:"This is required\x3c!-- data-validator-required-message to override --\x3e"},
checkone:{name:"Checkone",type:"minchecked",minchecked:1,message:"Check at least one option\x3c!-- data-validation-checkone-message to override --\x3e"}}},n=function(c){return c.toLowerCase().replace(/(^|\s)([a-z])/g,function(b,a,c){return a+c.toUpperCase()})},t=function(c){var b=c.val(),a=c.attr("type");"checkbox"===a&&(b=c.is(":checked")?b:"");"radio"===a&&(b=0<e('input[name="'+c.attr("name")+'"]:checked').length?b:"");return b};e.fn.jqBootstrapValidation=function(c){return h.methods[c]?h.methods[c].apply(this,
Array.prototype.slice.call(arguments,1)):"object"!==typeof c&&c?(e.error("Method "+c+" does not exist on jQuery.jqBootstrapValidation"),null):h.methods.init.apply(this,arguments)};e.jqBootstrapValidation=function(c){e(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments)}})(jQuery);