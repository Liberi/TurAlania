(self.webpackChunkturalania=self.webpackChunkturalania||[]).push([[328],{5145:(e,t,a)=>{var r,n=a(2897).default,o=Object.create,s=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,h=(e,t,a,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let n of l(t))u.call(e,n)||n===a||s(e,n,{get:()=>t[n],enumerable:!(r=i(t,n))||r.enumerable});return e},c=(e,t,a)=>(((e,t,a)=>{t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),y={};((e,t)=>{for(var a in t)s(e,a,{get:t[a],enumerable:!0})})(y,{default:()=>g}),e.exports=(r=y,h(s({},"__esModule",{value:!0}),r));var d=((e,t,a)=>(a=null!=e?o(p(e)):{},h(!t&&e&&e.__esModule?a:s(a,"default",{value:e,enumerable:!0}),e)))(a(5043)),m=a(2206),f=a(1520);class g extends d.Component{constructor(){super(...arguments),c(this,"callPlayer",m.callPlayer),c(this,"onDurationChange",(()=>{const e=this.getDuration();this.props.onDuration(e)})),c(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),c(this,"unmute",(()=>{this.callPlayer("setMuted",!1)})),c(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{controls:t,config:a,onError:r,playing:o}=this.props,[,s]=e.match(f.MATCH_URL_DAILYMOTION);this.player?this.player.load(s,{start:(0,m.parseStartTime)(e),autoplay:o}):(0,m.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",(e=>e.player)).then((o=>{if(!this.container)return;const i=o.player;this.player=new i(this.container,{width:"100%",height:"100%",video:s,params:n({controls:t,autoplay:this.props.playing,mute:this.props.muted,start:(0,m.parseStartTime)(e),origin:window.location.origin},a.params),events:{apiready:this.props.onReady,seeked:()=>this.props.onSeek(this.player.currentTime),video_end:this.props.onEnded,durationchange:this.onDurationChange,pause:this.props.onPause,playing:this.props.onPlay,waiting:this.props.onBuffer,error:e=>r(e)}})}),r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.player.duration||null}getCurrentTime(){return this.player.currentTime}getSecondsLoaded(){return this.player.bufferedTime}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return d.default.createElement("div",{style:t},d.default.createElement("div",{ref:this.ref}))}}c(g,"displayName","DailyMotion"),c(g,"canPlay",f.canPlay.dailymotion),c(g,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerDailyMotion.031e2ab5.chunk.js.map