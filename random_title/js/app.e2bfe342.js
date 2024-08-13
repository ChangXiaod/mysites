(function(){"use strict";var t={6458:function(t,e,i){var o=i(6369),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bruce",attrs:{id:"body"}},[e("div",{staticClass:"header"},[e("div",[e("p",{staticClass:"text"},[t._v("随机出题")]),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.isScreen?"取消全屏":"全屏",placement:"top-start"}},[e("i",{staticClass:"el-icon-full-screen",staticStyle:{position:"absolute",right:"100px",top:"50%",transform:"translate(-50%,-50%)",cursor:"pointer"},on:{click:t.turnOff}})])],1)]),e("ul",{staticClass:"bubble-bgwall"},t._l(10,(function(i){return e("li",{key:i},[t._v(t._s(i))])})),0),e("section",{staticStyle:{height:"calc(100vh - 300px)",width:"100%",position:"absolute",top:"80px"}},[e("el-container",[e("el-header",[e("el-row",{staticStyle:{height:"100px",border:"solid 2px #e3e3e3"}},[e("el-col",{staticClass:"flex",staticStyle:{height:"100%","border-right":"#e3e3e3 2px solid"},attrs:{span:4}},[e("h2",{staticStyle:{"font-size":"35px"}},[t._v("答题情况")])]),e("el-col",{staticStyle:{height:"100%"},attrs:{span:20}},[e("div",{staticClass:"flex",staticStyle:{"margin-top":"5px",height:"100%",width:"100%"}},t._l(t.proData,(function(i,o){return e("div",{key:o,staticStyle:{margin:"0 5px"}},[e("el-button",{staticStyle:{width:"60px",height:"60px"},attrs:{circle:"",type:i.checked?"success":"default",size:"default"},on:{click:function(e){return t.clickNum(o)}}},[e("span",{staticStyle:{"font-size":"20px"}},[t._v(" "+t._s(o+1)+" ")])])],1)})),0)])],1)],1),e("el-main",{staticStyle:{"margin-top":"50px"}},[e("el-row",{staticStyle:{height:"calc(100vh - 240px)",border:"solid 2px #e3e3e3"}},[e("el-col",{staticClass:"flex_s",staticStyle:{height:"100%","border-right":"#e3e3e3 2px solid"},attrs:{span:4}},[e("div",{staticClass:"flex_s",staticStyle:{flex:"1","border-bottom":"#e3e3e3 2px solid",width:"100%"}},[e("h2",{staticStyle:{"font-size":"35px"}},[t._v("抽中题号")]),e("p",{style:{color:t.rangeColor,"font-size":"120px"}},[t._v(t._s(t.loading?t.changeNum:t.curNum))])]),e("div",{staticStyle:{flex:"2",width:"100%"}},[e("div",{staticClass:"flex_s",staticStyle:{height:"100%",width:"100%","justify-content":"space-around"}},[e("div",{staticStyle:{"margin-bottom":"25px"}},[e("el-button",{staticStyle:{height:"100px",width:"200px","font-size":"35px"},attrs:{type:"primary",loading:t.loading},on:{click:t.rande}},[t._v("开始")])],1),e("el-button",{staticStyle:{height:"100px",width:"200px","font-size":"35px","background-color":"rgb(214, 40, 40)"},attrs:{type:"danger"},on:{click:t.stop}},[t._v("结束")])],1)])]),e("el-col",{staticStyle:{height:"100%"},attrs:{span:20}},[e("div",{staticStyle:{padding:"25px","font-size":"55px",height:"100%",display:"flex","flex-direction":"column","box-sizing":"border-box"}},[e("div",{staticStyle:{width:"100%","overflow-wrap":"break-word","word-wrap":"break-word",height:"200px","font-weight":"600"}},[t._v(" "+t._s(t.dataList.name))]),e("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"space-around",height:"calc(100% - 200px)","box-sizing":"border-box"}},t._l(t.dataList.select,(function(i,o){return e("p",{key:o,staticStyle:{"line-height":"65px","font-size":"43px"}},[t._v(t._s(i.option+"."+i.title))])})),0)])])],1)],1)],1)],1)])},l=[],c=(i(7658),{components:{},data(){return{isScreen:!1,changeNum:0,proData:[],processNum:0,loading:!1,rangeColor:"",titleData:[],dataList:{},curNum:0}},mounted(){this.init()},methods:{turnOff(){this.isScreen=!this.isScreen,this.isScreen?this.reqFullScreen():this.exitFullScreen()},reqFullScreen(t=document.documentElement){const e=["requestFullscreen","webkitRequestFullscreen","mozRequestFullscreen","msRequestFullscreen"],i=e.find((e=>e in t));t[i]()},exitFullScreen(){document.documentElement.requestFullScreen?document.exitFullScreen():document.documentElement.webkitRequestFullScreen?document.webkitCancelFullScreen():document.documentElement.mozRequestFullScreen&&document.mozCancelFullScreen()},init(){[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].forEach((t=>{this.proData.push({num:t,checked:!1})})),this.titleData=[{name:"1.城市管理网格员职业技能共设（）个等级",id:1,checked:!1,select:[{option:"A",title:"三"},{option:"B",title:"四"},{option:"C",title:"五"}]},{name:"2.下列关于计算机信息系统的表述正确的是（）",id:2,checked:!1,select:[{option:"A",title:"由计算机及其相关的和配套的设备、设施(含网络)构成的"},{option:"B",title:"由计算机及其相关的和配套的设备、设施构成的"},{option:"C",title:"按照一定的应用目标和规则对信息进行采集、加工、存储、传输、检索等处理的人机系统"},{option:"D",title:"按照一定的应用目标和规则对信息进行采集、加工、存储、传输、检索等处理的系统"}]},{name:"3.计算机信息系统安全保护主要包括_______。",id:3,checked:!1,select:[{option:"A",title:"保障计算机及其相关的和配套的设备、设施(含网络)的安全"},{option:"B",title:"运行环境的安全"},{option:"C",title:"保障信息的安全"},{option:"D",title:"保障计算机功能的正常发挥"}]},{name:"4.下列对于城市网格员职业能力特征表述正确的是（）",id:4,checked:!1,select:[{option:"A",title:"具有学习、表达和计算能力"},{option:"B",title:"具有空间感、形体知觉和色觉"},{option:"C",title:"肢体灵活，动作协调"},{option:"D",title:"沟通交流能力、观察分析能力"}]},{name:"5.下列关于单元网格表述错误的是（）",id:5,checked:!1,select:[{option:"A",title:"是数字化城市管理的基本监督和管理单元。"},{option:"B",title:"基于城市大比例尺基础地理数据，根据数字化城市管理工作的需要，按照规定的原则划分的、边界清晰的多边形区域。"},{option:"C",title:"单元网格划分原则有属地管理原则、面积适当原则、现状管理原则等。"},{option:"D",title:"一个单元网格可以有多个标识码。"}]},{name:"6.部件是城市管理公共区域内的各项（）与（），包括公用设施、交通设施、市容环境设施、园林绿化设施和其他部件等。",id:6,checked:!1,select:[{option:"A",title:"市政工程设施"},{option:"B",title:"市政环境设施"},{option:"C",title:"市政公用设施"},{option:"D",title:"市政交通设施"}]},{name:"7.专业部门是指部件和事件问题的（）",id:7,checked:!1,select:[{option:"A",title:"主管部门"},{option:"B",title:"部件的权属单位"},{option:"C",title:"采集部门"},{option:"D",title:"养护单位"}]},{name:"8.下列属于部件小类的是（）",id:8,checked:!1,select:[{option:"A",title:"公共厕所"},{option:"B",title:"私搭乱建"},{option:"C",title:"店外经营"},{option:"D",title:"文物古迹"}]},{name:"9.下列属于事件大类的是（）",id:9,checked:!1,select:[{option:"A",title:"市容环境"},{option:"B",title:"市容环境设施"},{option:"C",title:"街面秩序"},{option:"D",title:"交通设施"}]},{name:"10.下列关于事件大小类表述错误的是（）",id:10,checked:!1,select:[{option:"A",title:"市容环境类，主要包括私搭乱建、违章接坡、建筑物不洁、暴露垃圾等"},{option:"B",title:"施工管理类，主要包括工地扬尘、施工废弃料、施工占道等"},{option:"C",title:"突发事件类，主要包括燃气管道破裂、路面塌陷、排水管道堵塞、街头座椅等"},{option:"D",title:"其他事件类，主要包括违规高空悬挂作业、临街屠宰等"}]},{name:"11.兴趣点宜包含具有地理标识作用的（）。",id:11,checked:!1,select:[{option:"A",title:"建筑物、单位、店铺"},{option:"B",title:"车站、码头、广场"},{option:"C",title:"桥、碑、亭"},{option:"D",title:"雕塑、喷泉"}]},{name:"12.关于数据采集区域类别划分正确的（）",id:12,checked:!1,select:[{option:"A",title:"一类区域：核心区、人流密集区、一般城区、重点街道"},{option:"B",title:"二类区域：商业区、旅游景区"},{option:"C",title:"三类区域：城乡结合部、拆迁区和权属未移交区等。"}]},{name:"13.信息采集监督员是在责任网格内从事城市管理问题（）和案件核查等工作的人员",id:13,checked:!1,select:[{option:"A",title:"巡查"},{option:"B",title:"普查"},{option:"C",title:"上报"},{option:"D",title:"核实"}]},{name:"14.监督员评价的规定指标应包括（）。",id:14,checked:!1,select:[{option:"A",title:"监督举报率"},{option:"B",title:"漏报率"},{option:"C",title:"按时核实率"},{option:"D",title:"按时核查率"}]},{name:"15.下列表述错误的是（）",id:15,checked:!1,select:[{option:"A",title:"用人单位应当建立职业培训制度"},{option:"B",title:"用人单位按照国家规定提取和使用职业培训经费"},{option:"C",title:"根据本单位实际，有计划地对劳动者进行职业培训"},{option:"D",title:"从事技术工种的劳动者，上岗前可以不用经过培训"}]},{name:"16.城乡网格化服务管理的网格内应当配备（）。",id:16,checked:!1,select:[{option:"A",title:"网格长"},{option:"B",title:"专职网格员"},{option:"C",title:"兼职网格员"},{option:"D",title:"社区志愿者"},{option:"E",title:"网格指导员"}]},{name:"17.专项普查是根据监督中心的命令，在规定时间内对指定的管理部件、事件的现状或其他特定管理内容进行调查，并对相关信息收集、上报和核查的过程。",id:17,checked:!1,select:[{option:"A",title:"正确"},{option:"B",title:"错误"}]},{name:"18.下列属于路灯小类立案条件与结案条件对应正确的（）",id:18,checked:!1,select:[{option:"A",title:"倾斜（有安全隐患）、倒伏—消除安全隐患并修复"},{option:"B",title:"外观不洁—清洁"},{option:"C",title:"长明—修复"},{option:"D",title:"破损、缺亮、缺失、倾斜—修复、拆除"}]},{name:"19.下列大小类对应正确的是（）",id:19,checked:!1,select:[{option:"A",title:"公用设施—过街天桥"},{option:"B",title:"道路交通设施—自行车租赁点"},{option:"C",title:"市容环境—公共厕所"},{option:"D",title:"街面秩序—无证餐饮"}]},{name:"20.下列哪些小类的结案条件是整改(   )",id:20,checked:!1,select:[{option:"A",title:"临街阳台脏乱差"},{option:"B",title:"积存垃圾渣土"},{option:"C",title:"交通标线不清晰"},{option:"D",title:"水域秩序问题"}]},{name:"21.下列哪个（些）小类的结案条件是清除（）",id:21,checked:!1,select:[{option:"A",title:"地下通道"},{option:"B",title:"绿地护栏"},{option:"C",title:"擅自在临街的建筑物上挂彩旗"},{option:"D",title:"交通标志牌"}]},{name:"22.道路交通设施大类包括（）",id:22,checked:!1,select:[{option:"A",title:"交通信号灯"},{option:"B",title:"充电桩"},{option:"C",title:"非机动车停放点"},{option:"D",title:"存车支架"}]},{name:"23.暴露垃圾是指公共场所未倒入垃圾容器内的长时间堆积的建筑垃圾。",id:23,checked:!1,select:[{option:"A",title:"正确"},{option:"B",title:"错误"}]},{name:"24.以下属于街面秩序事件类的有（）",id:24,checked:!1,select:[{option:"A",title:"店外经营"},{option:"B",title:"机动车乱停放"},{option:"C",title:"无证餐饮"},{option:"D",title:"临街屠宰"}]},{name:"25.外观不洁的消防设施（消防栓）可选处置时限有（）",id:25,checked:!1,select:[{option:"A",title:"4工作时"},{option:"B",title:"1工作日"},{option:"C",title:"2工作日"},{option:"D",title:"5工作日"}]},{name:"26.下列小类名称与说明错误的是（）",id:26,checked:!1,select:[{option:"A",title:"通信井盖—通信运营商所设置的通信井盖"},{option:"B",title:"燃气井盖—标有煤、煤气、燃、天等字样的地下燃气管道的井盖"},{option:"C",title:"废弃车辆—在未经许可、未合法设置停车泊位的地点停放机动车辆"},{option:"D",title:"非法出版物销售—销售非法音像、图书等出版物的行为"}]},{name:"27.监督员上报数是指监督举报的部件和事件问题数",id:27,checked:!1,select:[{option:"A",title:"对"},{option:"B",title:"错"}]},{name:"28.监管信息采集设备是指供监督员使用，实现数字化城市管理监管信息的（）等任务的移动通信手持设备",id:28,checked:!1,select:[{option:"A",title:"采集"},{option:"B",title:"报送"},{option:"C",title:"核实"},{option:"D",title:"核查"}]},{name:"29.下列关于人员巡查频度表述错误的是（）",id:29,checked:!1,select:[{option:"A",title:"城市核心区、人流密集区、主要商业区等每天不少于4次"},{option:"B",title:"一般城区、次干道每天不少于3次"},{option:"C",title:"城管问题高发区、重点街道、主要河道和重点旅游景区等每天不少于4次"},{option:"D",title:"背街小巷、城乡结合部、拆迁区域和管理权属未移交区域等每天不少于1次"}]},{name:"30.下列属于雨水井盖小类结案条件的是（）",id:30,checked:!1,select:[{option:"A",title:"修复"},{option:"B",title:"清洁"},{option:"C",title:"清除"},{option:"D",title:"围护、修复"}]},{name:"31.雨水箅子破损超过25平方厘米的可选处置时限有（）",id:31,checked:!1,select:[{option:"A",title:"4紧急工作时"},{option:"B",title:"2工作时"},{option:"C",title:"4工作时"},{option:"D",title:"6工作时"}]},{name:"32.属于通信交接箱的立案条件的是（）",id:32,checked:!1,select:[{option:"A",title:"破损、倾斜、箱体锈蚀、门未关"},{option:"B",title:"破损、缺失、箱体锈蚀"},{option:"C",title:"不洁"},{option:"D",title:"外观不洁"}]},{name:"33.属于电力设施结案条件的是（）",id:33,checked:!1,select:[{option:"A",title:"围护、修复"},{option:"B",title:"清洁"},{option:"C",title:"修复"},{option:"D",title:"清除"}]},{name:"34.下列立案条件完全相同的小类是（）",id:34,checked:!1,select:[{option:"A",title:"售货亭"},{option:"B",title:"信息亭"},{option:"C",title:"报刊亭"},{option:"D",title:"电话亭"}]},{name:"35.交通信号灯与交通信号设施的立案条件不同的有（）",id:35,checked:!1,select:[{option:"A",title:"破损、缺失、倾斜、锈蚀"},{option:"B",title:"故障、缺亮"},{option:"C",title:"外观不洁"}]},{name:"36.户外广告的外观不洁可选处置时限有（）",id:36,checked:!1,select:[{option:"A",title:"4工作时"},{option:"B",title:"1工作日"},{option:"C",title:"2工作日"},{option:"D",title:"4工作日"}]},{name:"37.下列属于店外经营可选处置时限的是（）",id:37,checked:!1,select:[{option:"A",title:"1工作时"},{option:"B",title:"2工作时"},{option:"C",title:"3工作时"},{option:"D",title:"5工作时"}]},{name:"38.占道经营小类的结案条件是（）",id:38,checked:!1,select:[{option:"A",title:"制止"},{option:"B",title:"查处"},{option:"C",title:"制止并立案查处"},{option:"D",title:"恢复、立案查处"}]},{name:"40.属于突发事件的小类是（）",id:40,checked:!1,select:[{option:"A",title:"道路积水"},{option:"B",title:"路面破损"},{option:"C",title:"施工扰民"},{option:"D",title:"街头散发广告"}]}]},clickNum(t){1!=this.proData[t].checked&&(0==t?this.$message({message:"请直接点击开始进行抽题！",type:"warning"}):0==this.proData[t-1].checked?this.$message({message:"请按题号顺序答题！",type:"warning"}):(this.curNum=0,this.dataList={}))},stop(){null==this.time||this.processNum>19||(cancelAnimationFrame(this.time),this.time=null,this.dataList=this.titleData[this.curNum-1],this.rangeColor="rgb(0,0,0)",this.proData[this.processNum].checked=!0,this.processNum++,this.loading=!1,this.noRepeat(),this.curNum=this.dataList.id)},noRepeat(){this.titleData.splice(this.curNum-1,1)},rande(){if(this.processNum>19)return void this.$message({message:"答题已结束！",type:"warning"});this.loading=!0;const t=()=>{{this.changeNum=Math.floor(50*Math.random())+1,this.curNum=Math.floor(Math.random()*this.titleData.length)+1;let e=Math.floor(244*Math.random())+1,i=Math.floor(244*Math.random())+1,o=Math.floor(244*Math.random())+1;this.rangeColor=`rgb(${e},${i},${o})`,this.time=requestAnimationFrame(t)}};t()}}}),s=c,a=i(1001),p=(0,a.Z)(s,n,l,!1,null,"2cd238b8",null),r=p.exports,d=i(2631),u=function(){var t=this,e=t._self._c;return e("div")},h=[],m={},f=m,g=(0,a.Z)(f,u,h,!1,null,null,null),k=g.exports;o["default"].use(d.ZP);const x=[{path:"/",name:"Home",component:k}],y=new d.ZP({base:"",routes:x});var C=y,b=i(3822);o["default"].use(b.ZP);var v=new b.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),S=i(8499),D=i.n(S);o["default"].use(D()),o["default"].config.productionTip=!1,new o["default"]({router:C,store:v,render:t=>t(r)}).$mount("#app")}},e={};function i(o){var n=e[o];if(void 0!==n)return n.exports;var l=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(l.exports,l,l.exports,i),l.loaded=!0,l.exports}i.m=t,function(){i.amdO={}}(),function(){var t=[];i.O=function(e,o,n,l){if(!o){var c=1/0;for(r=0;r<t.length;r++){o=t[r][0],n=t[r][1],l=t[r][2];for(var s=!0,a=0;a<o.length;a++)(!1&l||c>=l)&&Object.keys(i.O).every((function(t){return i.O[t](o[a])}))?o.splice(a--,1):(s=!1,l<c&&(c=l));if(s){t.splice(r--,1);var p=n();void 0!==p&&(e=p)}}return e}l=l||0;for(var r=t.length;r>0&&t[r-1][2]>l;r--)t[r]=t[r-1];t[r]=[o,n,l]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,l,c=o[0],s=o[1],a=o[2],p=0;if(c.some((function(e){return 0!==t[e]}))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(a)var r=a(i)}for(e&&e(o);p<c.length;p++)l=c[p],i.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return i.O(r)},o=self["webpackChunkproject"]=self["webpackChunkproject"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(6458)}));o=i.O(o)})();