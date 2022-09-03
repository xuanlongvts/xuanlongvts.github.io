let wasm,heap=new Array(32).fill(void 0);function getObject(a){return heap[a]}heap.push(void 0,null,!0,!1);let heap_next=heap.length;function dropObject(a){a<36||(heap[a]=heap_next,heap_next=a)}function takeObject(a){let b=getObject(a);return dropObject(a),b}function addHeapObject(b){heap_next===heap.length&&heap.push(heap.length+1);let a=heap_next;return heap_next=heap[a],heap[a]=b,a}let cachedTextDecoder=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});cachedTextDecoder.decode();let cachedUint8Memory0=new Uint8Array;function getUint8Memory0(){return 0===cachedUint8Memory0.byteLength&&(cachedUint8Memory0=new Uint8Array(wasm.memory.buffer)),cachedUint8Memory0}function getStringFromWasm0(a,b){return cachedTextDecoder.decode(getUint8Memory0().subarray(a,a+b))}function isLikeNone(a){return null==a}let cachedFloat64Memory0=new Float64Array;function getFloat64Memory0(){return 0===cachedFloat64Memory0.byteLength&&(cachedFloat64Memory0=new Float64Array(wasm.memory.buffer)),cachedFloat64Memory0}let cachedInt32Memory0=new Int32Array;function getInt32Memory0(){return 0===cachedInt32Memory0.byteLength&&(cachedInt32Memory0=new Int32Array(wasm.memory.buffer)),cachedInt32Memory0}function debugString(a){let b=typeof a;if("number"==b||"boolean"==b||null==a)return`${a}`;if("string"==b)return`"${a}"`;if("symbol"==b){let f=a.description;return null==f?"Symbol":`Symbol(${f})`}if("function"==b){let c=a.name;return"string"==typeof c&&c.length>0?`Function(${c})`:"Function"}if(Array.isArray(a)){let g=a.length,d="[";g>0&&(d+=debugString(a[0]));for(let e=1;e<g;e++)d+=", "+debugString(a[e]);return d+"]"}let h=/\[object ([^\]]+)\]/.exec(toString.call(a)),i;if(!(h.length>1))return toString.call(a);if("Object"==(i=h[1]))try{return"Object("+JSON.stringify(a)+")"}catch(j){return"Object"}return a instanceof Error?`${a.name}: ${a.message}
${a.stack}`:i}let WASM_VECTOR_LEN=0,cachedTextEncoder=new TextEncoder("utf-8"),encodeString="function"==typeof cachedTextEncoder.encodeInto?function(a,b){return cachedTextEncoder.encodeInto(a,b)}:function(a,c){let b=cachedTextEncoder.encode(a);return c.set(b),{read:a.length,written:b.length}};function passStringToWasm0(b,g,h){if(void 0===h){let e=cachedTextEncoder.encode(b),f=g(e.length);return getUint8Memory0().subarray(f,f+e.length).set(e),WASM_VECTOR_LEN=e.length,f}let c=b.length,d=g(c),j=getUint8Memory0(),a=0;for(;a<c;a++){let i=b.charCodeAt(a);if(i>127)break;j[d+a]=i}if(a!==c){0!==a&&(b=b.slice(a)),d=h(d,c,c=a+3*b.length);let k=getUint8Memory0().subarray(d+a,d+c),l=encodeString(b,k);a+=l.written}return WASM_VECTOR_LEN=a,d}function makeClosure(b,c,d,f){let e={a:b,b:c,cnt:1,dtor:d},a=(...a)=>{e.cnt++;try{return f(e.a,e.b,...a)}finally{0== --e.cnt&&(wasm.__wbindgen_export_2.get(e.dtor)(e.a,e.b),e.a=0)}};return a.original=e,a}function __wbg_adapter_18(a,b,c){wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h851528ba2ef16b6a(a,b,addHeapObject(c))}let cachedUint32Memory0=new Uint32Array;function getUint32Memory0(){return 0===cachedUint32Memory0.byteLength&&(cachedUint32Memory0=new Uint32Array(wasm.memory.buffer)),cachedUint32Memory0}function getArrayJsValueFromWasm0(b,e){let f=getUint32Memory0(),c=f.subarray(b/4,b/4+e),d=[];for(let a=0;a<c.length;a++)d.push(takeObject(c[a]));return d}function handleError(a,b){try{return a.apply(this,b)}catch(c){wasm.__wbindgen_exn_store(addHeapObject(c))}}async function load(a,b){if("function"==typeof Response&&a instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(a,b)}catch(d){if("application/wasm"!=a.headers.get("Content-Type"))console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",d);else throw d}let e=await a.arrayBuffer();return await WebAssembly.instantiate(e,b)}{let c=await WebAssembly.instantiate(a,b);return c instanceof WebAssembly.Instance?{instance:c,module:a}:c}}function getImports(){let a={};return a.wbg={},a.wbg.__wbindgen_object_drop_ref=function(a){takeObject(a)},a.wbg.__wbindgen_object_clone_ref=function(a){let b=getObject(a);return addHeapObject(b)},a.wbg.__wbindgen_string_new=function(a,b){let c=getStringFromWasm0(a,b);return addHeapObject(c)},a.wbg.__wbindgen_number_new=function(a){return addHeapObject(a)},a.wbg.__wbindgen_number_get=function(b,d){let c=getObject(d),a="number"==typeof c?c:void 0;getFloat64Memory0()[b/8+1]=isLikeNone(a)?0:a,getInt32Memory0()[b/4+0]=!isLikeNone(a)},a.wbg.__wbg_new_693216e109162396=function(){let a=new Error;return addHeapObject(a)},a.wbg.__wbg_stack_0ddaca5d1abfb52f=function(a,b){let c=getObject(b).stack,d=passStringToWasm0(c,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),e=WASM_VECTOR_LEN;getInt32Memory0()[a/4+1]=e,getInt32Memory0()[a/4+0]=d},a.wbg.__wbg_error_09919627ac0992f5=function(a,b){try{console.error(getStringFromWasm0(a,b))}finally{wasm.__wbindgen_free(a,b)}},a.wbg.__wbg_warn_921059440157e870=function(a,b){var c=getArrayJsValueFromWasm0(a,b).slice();wasm.__wbindgen_free(a,4*b),console.warn(...c)},a.wbg.__wbg_instanceof_Window_42f092928baaee84=function(a){let b=getObject(a) instanceof Window;return b},a.wbg.__wbg_document_15b2e504fb1556d6=function(b){let a=getObject(b).document;return isLikeNone(a)?0:addHeapObject(a)},a.wbg.__wbg_body_5e6efc7a3c1b65f3=function(b){let a=getObject(b).body;return isLikeNone(a)?0:addHeapObject(a)},a.wbg.__wbg_createElement_28fc3740fb11defb=function(){return handleError(function(a,b,c){let d=getObject(a).createElement(getStringFromWasm0(b,c));return addHeapObject(d)},arguments)},a.wbg.__wbg_createElementNS_dd6cca2457c8c16c=function(){return handleError(function(b,a,c,d,e){let f=getObject(b).createElementNS(0===a?void 0:getStringFromWasm0(a,c),getStringFromWasm0(d,e));return addHeapObject(f)},arguments)},a.wbg.__wbg_createTextNode_2ab1e3ebc34e2641=function(a,b,c){let d=getObject(a).createTextNode(getStringFromWasm0(b,c));return addHeapObject(d)},a.wbg.__wbg_value_eb32f706ae6bfab2=function(a,b){let c=getObject(b).value,d=passStringToWasm0(c,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),e=WASM_VECTOR_LEN;getInt32Memory0()[a/4+1]=e,getInt32Memory0()[a/4+0]=d},a.wbg.__wbg_setvalue_3dd349be116107ce=function(a,b,c){getObject(a).value=getStringFromWasm0(b,c)},a.wbg.__wbg_setchecked_a450b330df6b3fa5=function(a,b){getObject(a).checked=0!==b},a.wbg.__wbg_value_30770021ca38e0db=function(a,b){let c=getObject(b).value,d=passStringToWasm0(c,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),e=WASM_VECTOR_LEN;getInt32Memory0()[a/4+1]=e,getInt32Memory0()[a/4+0]=d},a.wbg.__wbg_setvalue_7b7950dacc5eb607=function(a,b,c){getObject(a).value=getStringFromWasm0(b,c)},a.wbg.__wbg_target_68a5c10e2732a79e=function(b){let a=getObject(b).target;return isLikeNone(a)?0:addHeapObject(a)},a.wbg.__wbg_cancelBubble_aa216b328c490cb1=function(a){let b=getObject(a).cancelBubble;return b},a.wbg.__wbg_addEventListener_ec92ea1297eefdfc=function(){return handleError(function(a,b,c,d,e){getObject(a).addEventListener(getStringFromWasm0(b,c),getObject(d),getObject(e))},arguments)},a.wbg.__wbg_parentElement_14138ef2ff0b9c88=function(b){let a=getObject(b).parentElement;return isLikeNone(a)?0:addHeapObject(a)},a.wbg.__wbg_lastChild_2d1fa5efd0e0edcc=function(b){let a=getObject(b).lastChild;return isLikeNone(a)?0:addHeapObject(a)},a.wbg.__wbg_setnodeValue_59d46f408f89fd0b=function(b,a,c){getObject(b).nodeValue=0===a?void 0:getStringFromWasm0(a,c)},a.wbg.__wbg_appendChild_d21bac021b5bbfde=function(){return handleError(function(a,b){let c=getObject(a).appendChild(getObject(b));return addHeapObject(c)},arguments)},a.wbg.__wbg_insertBefore_26dfd5eb687a3438=function(){return handleError(function(a,b,c){let d=getObject(a).insertBefore(getObject(b),getObject(c));return addHeapObject(d)},arguments)},a.wbg.__wbg_removeChild_94b0c126b878241b=function(){return handleError(function(a,b){let c=getObject(a).removeChild(getObject(b));return addHeapObject(c)},arguments)},a.wbg.__wbg_instanceof_Element_1714e50f9bda1d15=function(a){let b=getObject(a) instanceof Element;return b},a.wbg.__wbg_namespaceURI_b343a4afa454dd59=function(a,c){let b=getObject(c).namespaceURI;var d=isLikeNone(b)?0:passStringToWasm0(b,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),e=WASM_VECTOR_LEN;getInt32Memory0()[a/4+1]=e,getInt32Memory0()[a/4+0]=d},a.wbg.__wbg_removeAttribute_2d6e56b2f03aa57e=function(){return handleError(function(a,b,c){getObject(a).removeAttribute(getStringFromWasm0(b,c))},arguments)},a.wbg.__wbg_setAttribute_8cfc462c0dedd03b=function(){return handleError(function(a,b,c,d,e){getObject(a).setAttribute(getStringFromWasm0(b,c),getStringFromWasm0(d,e))},arguments)},a.wbg.__wbg_newnoargs_971e9a5abe185139=function(a,b){let c=new Function(getStringFromWasm0(a,b));return addHeapObject(c)},a.wbg.__wbg_get_72332cd2bc57924c=function(){return handleError(function(a,b){let c=Reflect.get(getObject(a),getObject(b));return addHeapObject(c)},arguments)},a.wbg.__wbg_call_33d7bcddbbfa394a=function(){return handleError(function(a,b){let c=getObject(a).call(getObject(b));return addHeapObject(c)},arguments)},a.wbg.__wbg_new_e6a9fecc2bf26696=function(){let a=new Object;return addHeapObject(a)},a.wbg.__wbg_self_fd00a1ef86d1b2ed=function(){return handleError(function(){let a=self.self;return addHeapObject(a)},arguments)},a.wbg.__wbg_window_6f6e346d8bbd61d7=function(){return handleError(function(){let a=window.window;return addHeapObject(a)},arguments)},a.wbg.__wbg_globalThis_3348936ac49df00a=function(){return handleError(function(){let a=globalThis.globalThis;return addHeapObject(a)},arguments)},a.wbg.__wbg_global_67175caf56f55ca9=function(){return handleError(function(){let a=global.global;return addHeapObject(a)},arguments)},a.wbg.__wbindgen_is_undefined=function(a){let b=void 0===getObject(a);return b},a.wbg.__wbg_valueOf_f83bee79f23e7b05=function(a){let b=getObject(a).valueOf();return b},a.wbg.__wbg_is_43eb2f9708e964a9=function(a,b){let c=Object.is(getObject(a),getObject(b));return c},a.wbg.__wbg_set_2762e698c2f5b7e0=function(){return handleError(function(a,b,c){let d=Reflect.set(getObject(a),getObject(b),getObject(c));return d},arguments)},a.wbg.__wbindgen_debug_string=function(a,b){let c=debugString(getObject(b)),d=passStringToWasm0(c,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc),e=WASM_VECTOR_LEN;getInt32Memory0()[a/4+1]=e,getInt32Memory0()[a/4+0]=d},a.wbg.__wbindgen_throw=function(a,b){throw new Error(getStringFromWasm0(a,b))},a.wbg.__wbindgen_closure_wrapper250=function(a,b,d){let c=makeClosure(a,b,137,__wbg_adapter_18);return addHeapObject(c)},a}function initMemory(a,b){}function finalizeInit(a,b){return wasm=a.exports,init.__wbindgen_wasm_module=b,cachedFloat64Memory0=new Float64Array,cachedInt32Memory0=new Int32Array,cachedUint32Memory0=new Uint32Array,cachedUint8Memory0=new Uint8Array,wasm.__wbindgen_start(),wasm}function initSync(c){let a=getImports();initMemory(a);let b=new WebAssembly.Module(c),d=new WebAssembly.Instance(b,a);return finalizeInit(d,b)}async function init(a){void 0===a&&(a=new URL("portfolio-8944248141714a4a_bg.wasm",import.meta.url));let b=getImports();("string"==typeof a||"function"==typeof Request&&a instanceof Request||"function"==typeof URL&&a instanceof URL)&&(a=fetch(a)),initMemory(b);let{instance:c,module:d}=await load(await a,b);return finalizeInit(c,d)}export default init;export{initSync}