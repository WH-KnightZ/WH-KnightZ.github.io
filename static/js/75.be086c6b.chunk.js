(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[75],{1037:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(1),r=n(20),i=n(91),s=n(41),o=n.n(s),u=n(86),d=n(29),l=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],p=window.gapi,f=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.load("client:auth2",Object(u.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("loaded client"),p.client.init({apiKey:d.b,clientId:d.c,discoveryDocs:l,scope:"https://www.googleapis.com/auth/calendar.events"}),e.next=4,p.auth2.getAuthInstance();case 4:if(n=e.sent,n.isSignedIn.get()){e.next=9;break}return e.next=9,n.signIn();case 9:p.client.load("calendar","v3",(function(){p.client.calendar.events.insert({calendarId:"primary",resource:t}).execute((function(e){window.location=e.htmlLink}))}));case 10:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=function(e){var t,n=new URLSearchParams(null===(t=e.location)||void 0===t?void 0:t.search),s=n.get("summary")||"",o=n.get("start")||"",u=n.get("end")||"",d=Object(r.c)(),l={summary:s,start:{dateTime:o,timeZone:"America/Los_Angeles"},end:{dateTime:u,timeZone:"America/Los_Angeles"},reminders:{useDefault:!1,overrides:[{method:"popup",minutes:15}]}};return Object(c.useEffect)((function(){d(Object(i.c)()),f(l)})),Object(a.jsx)("div",{})}}}]);
//# sourceMappingURL=75.be086c6b.chunk.js.map