## File: `src\App.css`

```css
1 #root {
2   max-width: 1280px;
3   margin: 0 auto;
4   padding: 2rem;
5   text-align: center;
6 }
7 
8 .logo {
9   height: 6em;
10   padding: 1.5em;
11   will-change: filter;
12   transition: filter 300ms;
13 }
14 .logo:hover {
15   filter: drop-shadow(0 0 2em #646cffaa);
16 }
17 .logo.react:hover {
18   filter: drop-shadow(0 0 2em #61dafbaa);
19 }
20 
21 @keyframes logo-spin {
22   from {
23     transform: rotate(0deg);
24   }
25   to {
26     transform: rotate(360deg);
27   }
28 }
29 
30 @media (prefers-reduced-motion: no-preference) {
31   a:nth-of-type(2) .logo {
32     animation: logo-spin infinite 20s linear;
33   }
34 }
35 
36 .card {
37   padding: 2em;
38 }
39 
40 .read-the-docs {
41   color: #888;
42 }
```

## File: `src\App.jsx`

```jsx
1 import React from "react";
2 import "../src/styles/index.css";
3 
4 import BoardLayout from "./components/board/BoardLayout";
5 import BoardGroup from "./components/board/BoardGroup";
6 import BoardItem from "./components/board/BoardItem";
7 
8 // ── Desktop screens ──
9 import W01_TopicsScreen from "./screens/user/W01_TopicsScreen";
10 import W02_VideoScreen from "./screens/user/W02_VideoScreen";
11 
12 // ── Mobile screens ──
13 import {
14   M01_TopicsScreen,
15   M02_VideoScreen,
16 } from "./screens/mobile/M_HardScreens";
17 
18 export default function App() {
19   const userScreens = 2;
20 
21   return (
22     <BoardLayout>
23       <BoardGroup
24         title="القيم الإسلامية"
25         count={userScreens}
26         subtitle={`${userScreens} Screens · Desktop + Mobile`}
27       >
28         <BoardItem
29           id="W01"
30           name="شاشة الموضوعات"
31           url="islamic-values.com/topics"
32           mobile={<M01_TopicsScreen />}
33         >
34           <W01_TopicsScreen />
35         </BoardItem>
36 
37         <BoardItem
38           id="W02"
39           name="شاشة الفيديو — كظم الغيظ"
40           url="islamic-values.com/topics/kadhm-alghaydh"
41           mobile={<M02_VideoScreen />}
42         >
43           <W02_VideoScreen />
44         </BoardItem>
45       </BoardGroup>
46     </BoardLayout>
47   );
48 }
```

## File: `src\index.css`

```css
1 @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');
2 
3 *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
4 
5 :root {
6   --g100: #f5f5f3; --g200: #e8e8e5; --g300: #d4d4d0;
7   --g400: #b0b0aa; --g500: #8a8a84; --g600: #666660;
8   --g700: #444440; --g800: #2a2a28; --g900: #1a1a18;
9   --mono: 'IBM Plex Mono', monospace;
10   --sans: 'IBM Plex Sans', sans-serif;
11   --rsm: 8px; --rmd: 14px; --rlg: 20px; --rxl: 28px;
12   --pw: 375px; --ph: 812px;
13 }
14 
15 /* Board specific overrides */
16 body {
17     display: block !important;
18     padding: 40px !important;
19     overflow-x: hidden;
20     font-family: var(--sans);
21     background: #e8e8e5;
22     min-height: 100vh;
23 }
24 
25 .board-group {
26     margin-bottom: 60px;
27 }
28 .board-group-header {
29     font-size: 24px;
30     font-weight: 700;
31     color: var(--g800);
32     margin-bottom: 30px;
33     padding-bottom: 10px;
34     border-bottom: 2px solid var(--g300);
35     display: inline-block;
36 }
37 .board-grid {
38     display: flex;
39     flex-wrap: wrap;
40     gap: 60px;
41     align-items: flex-start;
42 }
43 .board-item {
44     display: flex;
45     flex-direction: column;
46     align-items: center;
47     gap: 16px;
48 }
49 .board-meta {
50     text-align: center;
51 }
52 .board-num {
53     font-family: var(--mono);
54     font-size: 12px;
55     color: var(--g500);
56     font-weight: 600;
57     margin-bottom: 4px;
58 }
59 .board-name {
60     font-size: 16px;
61     font-weight: 600;
62     color: var(--g800);
63 }
64 
65 /* Screen label */
66 .screen-meta {
67   text-align: center;
68 }
69 .screen-num {
70   font-family: var(--mono);
71   font-size: 10px;
72   letter-spacing: .12em;
73   text-transform: uppercase;
74   color: var(--g500);
75 }
76 .screen-name {
77   font-family: var(--mono);
78   font-size: 13px;
79   font-weight: 600;
80   color: var(--g700);
81   margin-top: 2px;
82 }
83 
84 /* Phone shell */
85 .phone {
86   width: var(--pw);
87   min-height: var(--ph);
88   background: #fff;
89   border-radius: 40px;
90   border: 2.5px solid var(--g300);
91   overflow: hidden;
92   display: flex;
93   flex-direction: column;
94   /* Override phone wrapper to not center itself in body since body is block now */
95   margin: 0 !important;
96   box-shadow: 0 10px 40px rgba(0,0,0,0.1) !important;
97 }
98 
99 /* Status bar */
100 .sb {
101   height: 44px;
102   background: var(--g100);
103   display: flex;
104   align-items: center;
105   justify-content: space-between;
106   padding: 0 22px;
107   border-bottom: 1px solid var(--g200);
108   flex-shrink: 0;
109 }
110 .sb-time { font-family: var(--mono); font-size: 12px; font-weight: 600; color: var(--g700); }
111 .sb-icons { display: flex; gap: 4px; align-items: center; }
112 .sb-dot { width: 13px; height: 5px; background: var(--g400); border-radius: 3px; }
113 .sb-dot.sm { width: 7px; }
114 
115 /* Scroll content area */
116 .content {
117   flex: 1;
118   background: var(--g100);
119   overflow-y: auto;
120 }
121 
122 /* Bottom nav */
123 .bnav {
124   height: 64px;
125   background: #fff;
126   border-top: 1.5px solid var(--g200);
127   display: flex;
128   align-items: center;
129   justify-content: space-around;
130   padding: 0 14px;
131   flex-shrink: 0;
132 }
133 .bni { display: flex; flex-direction: column; align-items: center; gap: 3px; flex: 1; }
134 .bni-bar { width: 20px; height: 4px; background: var(--g300); border-radius: 2px; }
135 .bni-bar.on { background: var(--g700); width: 26px; }
136 .bni-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--g700); display: none; }
137 .bni.on .bni-dot { display: block; }
138 .bni-lbl { font-family: var(--mono); font-size: 8px; color: var(--g400); }
139 .bni-lbl.on { color: var(--g700); font-weight: 600; }
140 
141 /* ── COMPONENTS ── */
142 
143 /* Top nav bar */
144 .topnav {
145   background: #fff;
146   padding: 13px 20px;
147   display: flex;
148   align-items: center;
149   justify-content: space-between;
150   border-bottom: 1px solid var(--g200);
151 }
152 .topnav-title { font-size: 16px; font-weight: 600; color: var(--g800); }
153 .tn-btn {
154   width: 32px; height: 32px;
155   background: var(--g100);
156   border-radius: 10px;
157   border: 1px solid var(--g200);
158 }
159 .tn-btn.round { border-radius: 50%; }
160 
161 /* Greeting */
162 .greet { background: #fff; padding: 16px 20px 12px; display: flex; align-items: center; justify-content: space-between; }
163 .greet-sub { font-size: 11px; color: var(--g400); font-family: var(--mono); letter-spacing: .03em; }
164 .greet-name { font-size: 18px; font-weight: 600; color: var(--g800); margin-top: 2px; }
165 
166 /* Avatars */
167 .av-sm {
168   width: 40px; height: 40px; border-radius: 50%;
169   background: var(--g200); border: 2px solid var(--g300);
170   display: flex; align-items: center; justify-content: center;
171   font-family: var(--mono); font-size: 7px; color: var(--g500); text-align: center; line-height: 1.2; flex-shrink: 0;
172 }
173 .av-md {
174   width: 56px; height: 56px; border-radius: 50%;
175   background: var(--g200); border: 2px solid var(--g300);
176   display: flex; align-items: center; justify-content: center;
177   font-family: var(--mono); font-size: 7px; color: var(--g500); text-align: center; line-height: 1.2; flex-shrink: 0;
178 }
179 .av-lg {
180   width: 72px; height: 72px; border-radius: 50%;
181   background: var(--g200); border: 2.5px solid var(--g300);
182   display: flex; align-items: center; justify-content: center;
183   font-family: var(--mono); font-size: 7px; color: var(--g500); text-align: center; line-height: 1.3; flex-shrink: 0;
184 }
185 .av-xl {
186   width: 84px; height: 84px; border-radius: 50%;
187   background: var(--g200); border: 3px solid var(--g300);
188   display: flex; align-items: center; justify-content: center;
189   font-family: var(--mono); font-size: 7px; color: var(--g500); text-align: center; line-height: 1.3; flex-shrink: 0;
190 }
191 
192 /* Search */
193 .search {
194   margin: 0 20px 16px;
195   background: var(--g100); border: 1.5px solid var(--g200);
196   border-radius: var(--rmd); padding: 12px 16px;
197   display: flex; align-items: center; gap: 10px;
198 }
199 .search.focused { border-color: var(--g500); background: #fff; }
200 .search-circle { width: 14px; height: 14px; border-radius: 50%; border: 2px solid var(--g400); flex-shrink: 0; }
201 .search-line { flex: 1; height: 10px; background: var(--g300); border-radius: 5px; }
202 .search-cursor { width: 2px; height: 14px; background: var(--g600); border-radius: 1px; }
203 
204 /* Chips */
205 .chips { display: flex; gap: 8px; padding: 0 20px 16px; overflow-x: hidden; }
206 .chip {
207   padding: 6px 14px; border-radius: 20px;
208   border: 1.5px solid var(--g300); background: var(--g100);
209   font-size: 10px; font-family: var(--mono); color: var(--g500); white-space: nowrap; flex-shrink: 0;
210 }
211 .chip.on { background: var(--g700); border-color: var(--g700); color: #fff; }
212 
213 /* Section header */
214 .sechdr {
215   display: flex; align-items: center; justify-content: space-between;
216   padding: 0 20px 12px;
217 }
218 .sechdr-t { font-size: 14px; font-weight: 600; color: var(--g800); }
219 .sechdr-l { font-size: 10px; font-family: var(--mono); color: var(--g500); text-decoration: underline; }
220 
221 /* Banner */
222 .banner {
223   margin: 0 20px 16px;
224   background: var(--g200); border-radius: var(--rlg);
225   padding: 14px 16px; border: 1px solid var(--g300);
226 }
227 .bnr-lbl { font-size: 9px; font-family: var(--mono); color: var(--g500); text-transform: uppercase; letter-spacing: .08em; }
228 .bnr-title { font-size: 14px; font-weight: 600; color: var(--g800); margin: 4px 0 2px; }
229 .bnr-time { font-size: 10px; font-family: var(--mono); color: var(--g500); }
230 .bnr-top { display: flex; justify-content: space-between; align-items: flex-start; }
231 .bnr-actions { display: flex; gap: 8px; margin-top: 12px; }
232 
233 /* Badges */
234 .badge { padding: 4px 10px; border-radius: 20px; font-size: 8px; font-family: var(--mono); letter-spacing: .04em; }
235 .badge.confirmed { background: var(--g600); color: #fff; }
236 .badge.ended { background: var(--g200); color: var(--g600); border: 1px solid var(--g300); }
237 .badge.cancelled { background: var(--g300); color: var(--g600); border: 1px solid var(--g400); }
238 .badge.pending { background: var(--g200); color: var(--g500); border: 1px dashed var(--g400); }
239 
240 /* Field card */
241 .fcard { margin: 0 20px 14px; background: #fff; border-radius: var(--rmd); overflow: hidden; border: 1.5px solid var(--g200); }
242 .fcard-img {
243   width: 100%; height: 130px; background: var(--g200);
244   display: flex; align-items: center; justify-content: center;
245   font-family: var(--mono); font-size: 9px; color: var(--g500); letter-spacing: .06em;
246   border-bottom: 1px solid var(--g200); position: relative;
247 }
248 .fcard-img-badge {
249   position: absolute; top: 10px; inset-inline-end: 10px;
250   background: rgba(255,255,255,.9); border: 1px solid var(--g300);
251   border-radius: 20px; padding: 3px 8px;
252   font-family: var(--mono); font-size: 8px; color: var(--g600);
253 }
254 .fcard-body { padding: 12px 14px 14px; }
255 .fcard-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; }
256 .fcard-name { font-size: 13px; font-weight: 600; color: var(--g800); }
257 .fcard-price { font-family: var(--mono); font-size: 11px; color: var(--g600); font-weight: 500; }
258 .fcard-meta { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
259 .mbar { height: 7px; border-radius: 4px; background: var(--g200); }
260 .btn-primary {
261   width: 100%; padding: 10px;
262   background: var(--g800); border-radius: var(--rsm);
263   font-family: var(--mono); font-size: 11px; color: #fff;
264   text-align: center; font-weight: 500; letter-spacing: .04em;
265 }
266 
267 /* Booking card horizontal */
268 .bcard { margin: 0 20px 10px; background: #fff; border-radius: var(--rmd); border: 1.5px solid var(--g200); display: flex; overflow: hidden; }
269 .bcard-img {
270   width: 80px; background: var(--g200);
271   display: flex; align-items: center; justify-content: center;
272   font-family: var(--mono); font-size: 7px; color: var(--g400); text-align: center; padding: 6px; flex-shrink: 0;
273 }
274 .bcard-body { flex: 1; padding: 12px; }
275 .bcard-title { font-size: 12px; font-weight: 600; color: var(--g800); margin-bottom: 4px; }
276 .bcard-line { height: 7px; background: var(--g200); border-radius: 4px; margin-bottom: 4px; }
277 .bcard-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; }
278 .bcard-price { font-family: var(--mono); font-size: 11px; color: var(--g700); font-weight: 500; }
279 .bcard-actions { display: flex; gap: 6px; margin-top: 6px; }
280 .bcard-btn { flex: 1; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--g300); font-family: var(--mono); font-size: 8px; color: var(--g600); text-align: center; background: transparent; }
281 .bcard-btn.d { border-color: var(--g400); color: var(--g500); }
282 
283 /* Info grid 2×2 */
284 .igrid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 14px 20px; background: #fff; border-bottom: 1px solid var(--g200); }
285 .icell { background: var(--g100); border: 1px solid var(--g200); border-radius: var(--rsm); padding: 10px 12px; }
286 .icell-lbl { font-family: var(--mono); font-size: 8px; color: var(--g400); text-transform: uppercase; letter-spacing: .07em; margin-bottom: 4px; }
287 .icell-val { font-size: 13px; font-weight: 600; color: var(--g800); }
288 
289 /* Amenities bar */
290 .amen { display: flex; gap: 8px; padding: 12px 20px; overflow-x: hidden; background: #fff; border-bottom: 1px solid var(--g200); }
291 .amen-item { padding: 6px 12px; border-radius: 20px; border: 1.5px solid var(--g300); font-family: var(--mono); font-size: 9px; color: var(--g500); white-space: nowrap; background: var(--g100); }
292 .amen-item.no { opacity: .4; text-decoration: line-through; }
293 
294 /* Stars */
295 .stars { display: flex; gap: 2px; }
296 .star { width: 10px; height: 10px; background: var(--g300); border-radius: 2px; }
297 .star.on { background: var(--g700); }
298 
299 /* Text placeholder lines */
300 .tl { height: 9px; background: var(--g200); border-radius: 5px; margin-bottom: 6px; }
301 .tl.h7 { height: 7px; } .tl.h11 { height: 11px; } .tl.h14 { height: 14px; }
302 .tl.w100 { width: 100%; } .tl.w85 { width: 85%; } .tl.w70 { width: 70%; }
303 .tl.w55 { width: 55%; } .tl.w40 { width: 40%; } .tl.w30 { width: 30%; }
304 
305 /* Image carousel */
306 .carousel { width: 100%; height: 220px; background: var(--g300); display: flex; align-items: center; justify-content: center; font-family: var(--mono); font-size: 9px; color: var(--g500); position: relative; }
307 .carousel-dots { position: absolute; bottom: 12px; inset-inline-start: 50%; transform: translateX(-50%); display: flex; gap: 5px; }
308 .cdot { width: 5px; height: 5px; border-radius: 50%; background: rgba(255,255,255,.45); }
309 .cdot.on { background: #fff; width: 14px; border-radius: 3px; }
310 .carousel-btns { position: absolute; top: 14px; inset-inline-start: 0; inset-inline-end: 0; display: flex; justify-content: space-between; padding: 0 16px; }
311 .ovl-btn { width: 34px; height: 34px; background: rgba(255,255,255,.85); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-family: var(--mono); font-size: 7px; color: var(--g600); border: 1px solid rgba(255,255,255,.5); }
312 
313 /* Summary card */
314 .sumcard { margin: 14px 20px; background: #fff; border-radius: var(--rmd); border: 1px solid var(--g200); overflow: hidden; }
315 .sumrow { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; border-bottom: 1px solid var(--g100); }
316 .sumrow:last-child { border-bottom: none; }
317 .sumkey { font-family: var(--mono); font-size: 9px; color: var(--g400); text-transform: uppercase; letter-spacing: .06em; }
318 .sumval { font-size: 12px; font-weight: 500; color: var(--g700); }
319 .sumval.big { font-size: 17px; font-weight: 700; color: var(--g800); font-family: var(--mono); }
320 
321 /* Form field */
322 .ff { margin: 0 20px 10px; background: #fff; border: 1.5px solid var(--g300); border-radius: var(--rsm); padding: 10px 14px; }
323 .ff.focused { border-color: var(--g600); }
324 .ff.error { border-color: var(--g500); background: var(--g100); }
325 .ff-lbl { font-family: var(--mono); font-size: 9px; color: var(--g400); text-transform: uppercase; letter-spacing: .07em; margin-bottom: 5px; }
326 .ff-val { height: 12px; background: var(--g200); border-radius: 5px; width: 60%; }
327 .ff-error { font-family: var(--mono); font-size: 8px; color: var(--g500); margin-top: 4px; }
328 .inp-group { margin-bottom: 20px; }
329 .inp-lbl { font-family: var(--mono); font-size: 9px; color: var(--g400); text-transform: uppercase; letter-spacing: .07em; margin-bottom: 5px; }
330 .inp-field { padding: 10px 14px; background: #fff; border: 1.5px solid var(--g300); border-radius: var(--rsm); font-size: 14px; color: var(--g800); }
331 
332 
333 /* Tabs */
334 .tabs { display: flex; background: #fff; border-bottom: 1.5px solid var(--g200); }
335 .tab { flex: 1; padding: 12px 6px; text-align: center; font-family: var(--mono); font-size: 10px; color: var(--g400); border-bottom: 2px solid transparent; letter-spacing: .03em; }
336 .tab.on { color: var(--g800); border-bottom-color: var(--g800); font-weight: 600; }
337 
338 /* Sticky bottom bar */
339 .sticky { background: #fff; border-top: 1.5px solid var(--g200); padding: 12px 20px 16px; display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
340 .sticky-price { }
341 .sp-lbl { font-family: var(--mono); font-size: 9px; color: var(--g400); }
342 .sp-val { font-size: 18px; font-weight: 600; color: var(--g800); font-family: var(--mono); }
343 .btn-cta { flex: 1; padding: 13px 20px; background: var(--g800); border-radius: var(--rmd); font-family: var(--mono); font-size: 11px; color: #fff; text-align: center; font-weight: 600; letter-spacing: .04em; cursor: pointer; }
344 .btn-ghost { flex: 1; padding: 13px 20px; background: transparent; border: 1.5px solid var(--g300); border-radius: var(--rmd); font-family: var(--mono); font-size: 11px; color: var(--g600); text-align: center; font-weight: 500; }
345 .btn-full { display: block; width: calc(100% - 40px); margin: 0 20px; padding: 14px; background: var(--g800); border-radius: var(--rmd); font-family: var(--mono); font-size: 12px; color: #fff; text-align: center; font-weight: 600; letter-spacing: .04em; }
346 .btn-danger { flex: 1; padding: 13px 20px; background: transparent; border: 1.5px solid var(--g400); border-radius: var(--rmd); font-family: var(--mono); font-size: 11px; color: var(--g500); text-align: center; font-weight: 500; }
347 
348 /* Map thumbnail */
349 .map-thumb {
350   width: 100%; height: 110px; background: var(--g200);
351   border-radius: var(--rsm); border: 1px solid var(--g300);
352   display: flex; align-items: center; justify-content: center;
353   position: relative; overflow: hidden;
354 }
355 .map-grid { position: absolute; inset: 0; background-image: linear-gradient(var(--g300) 1px, transparent 1px), linear-gradient(90deg, var(--g300) 1px, transparent 1px); background-size: 20px 20px; }
356 .map-pin { position: relative; z-index: 2; width: 14px; height: 14px; background: var(--g700); border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 2px solid #fff; }
357 
358 /* Map fullscreen */
359 .map-full {
360   width: 100%; height: 300px; background: var(--g300);
361   display: flex; align-items: center; justify-content: center;
362   position: relative; overflow: hidden;
363 }
364 
365 /* Review card */
366 .review { margin: 0 20px 12px; background: #fff; border-radius: var(--rmd); padding: 14px; border: 1px solid var(--g200); }
367 .review-top { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
368 .review-av { width: 32px; height: 32px; border-radius: 50%; background: var(--g200); display: flex; align-items: center; justify-content: center; font-family: var(--mono); font-size: 7px; color: var(--g400); flex-shrink: 0; }
369 
370 /* Notification */
371 .notif-grp { padding: 6px 20px; font-family: var(--mono); font-size: 9px; text-transform: uppercase; letter-spacing: .09em; color: var(--g400); margin-top: 6px; }
372 .notif { background: #fff; margin: 0 20px 6px; border-radius: var(--rmd); padding: 12px 14px; border: 1px solid var(--g200); border-inline-start: 3px solid var(--g700); display: flex; gap: 10px; align-items: flex-start; }
373 .notif.read { border-inline-start-color: var(--g200); opacity: .6; }
374 .notif-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--g700); flex-shrink: 0; margin-top: 3px; }
375 .notif.read .notif-dot { background: var(--g300); }
376 .notif-title { font-size: 12px; font-weight: 600; color: var(--g800); margin-bottom: 3px; }
377 
378 /* Progress bar (owner onboarding) */
379 .prog-wrap { padding: 14px 20px; background: #fff; border-bottom: 1px solid var(--g200); }
380 .prog-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
381 .prog-lbl { font-family: var(--mono); font-size: 9px; color: var(--g400); }
382 .prog-bg { height: 4px; background: var(--g200); border-radius: 2px; overflow: hidden; }
383 .prog-fill { height: 100%; background: var(--g600); border-radius: 2px; }
384 
385 /* Type selector cards */
386 .tcards { display: flex; gap: 10px; padding: 0 20px 14px; }
387 .tcard { flex: 1; border: 1.5px solid var(--g300); border-radius: var(--rmd); padding: 14px 10px; text-align: center; background: var(--g100); }
388 .tcard.on { border-color: var(--g700); background: var(--g200); }
389 .tcard-img { height: 28px; background: var(--g300); border-radius: 6px; margin-bottom: 6px; }
390 .tcard.on .tcard-img { background: var(--g500); }
391 .tcard-lbl { font-family: var(--mono); font-size: 9px; color: var(--g500); }
392 .tcard.on .tcard-lbl { color: var(--g700); font-weight: 600; }
393 
394 /* Role cards */
395 .rcards { display: flex; gap: 12px; padding: 0 20px 16px; }
396 .rcard { flex: 1; border: 2px solid var(--g200); border-radius: var(--rlg); padding: 20px 14px; text-align: center; background: var(--g100); }
397 .rcard.on { border-color: var(--g700); background: var(--g200); }
398 .rcard-icon { width: 40px; height: 40px; border-radius: 50%; background: var(--g300); margin: 0 auto 10px; }
399 .rcard.on .rcard-icon { background: var(--g500); }
400 .rcard-lbl { font-size: 13px; font-weight: 600; color: var(--g600); font-family: var(--mono); }
401 .rcard.on .rcard-lbl { color: var(--g800); }
402 
403 /* Upload zone */
404 .upzone { margin: 0 20px 14px; border: 2px dashed var(--g400); border-radius: var(--rlg); padding: 32px 20px; text-align: center; background: var(--g100); }
405 .upzone-icon { width: 40px; height: 40px; border-radius: 50%; background: var(--g300); margin: 0 auto 10px; }
406 .upzone-text { font-family: var(--mono); font-size: 10px; color: var(--g500); margin-bottom: 4px; }
407 .upzone-sub { font-family: var(--mono); font-size: 8px; color: var(--g400); }
408 
409 /* Photo grid */
410 .pgrid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; padding: 0 20px 14px; }
411 .pthumb { aspect-ratio: 1; background: var(--g200); border-radius: var(--rsm); position: relative; border: 1px solid var(--g300); }
412 .pthumb-badge { position: absolute; bottom: 4px; inset-inline-start: 50%; transform: translateX(-50%); background: var(--g700); color: #fff; font-family: var(--mono); font-size: 7px; padding: 2px 6px; border-radius: 4px; white-space: nowrap; }
413 
414 /* Owner stats grid */
415 .ostats { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 14px 20px; }
416 .ostat { background: #fff; border: 1px solid var(--g200); border-radius: var(--rmd); padding: 14px; }
417 .ostat-lbl { font-family: var(--mono); font-size: 8px; color: var(--g400); text-transform: uppercase; margin-bottom: 6px; }
418 .ostat-val { font-size: 20px; font-weight: 700; color: var(--g800); font-family: var(--mono); }
419 .ostat-ch { font-family: var(--mono); font-size: 9px; color: var(--g500); margin-top: 2px; }
420 
421 /* Bar chart */
422 .bchart { margin: 0 20px 14px; background: #fff; border: 1px solid var(--g200); border-radius: var(--rmd); padding: 14px; }
423 .bchart-inner { height: 80px; display: flex; align-items: flex-end; gap: 6px; }
424 .bar { flex: 1; background: var(--g300); border-radius: 4px 4px 0 0; min-height: 8px; }
425 .bar.on { background: var(--g600); }
426 .bchart-labels { display: flex; justify-content: space-between; margin-top: 6px; }
427 .bchart-lbl { font-family: var(--mono); font-size: 8px; color: var(--g400); }
428 
429 /* Checklist (schedule days) */
430 .cl-item { margin: 0 20px 6px; background: #fff; border: 1px solid var(--g200); border-radius: var(--rsm); padding: 10px 14px; display: flex; align-items: center; gap: 10px; }
431 .cl-item.off { opacity: .5; }
432 .checkbox { width: 16px; height: 16px; border-radius: 4px; border: 2px solid var(--g300); flex-shrink: 0; }
433 .checkbox.on { background: var(--g700); border-color: var(--g700); }
434 .cl-day { font-size: 12px; color: var(--g700); flex: 1; }
435 .cl-times { display: flex; gap: 6px; align-items: center; }
436 .cl-tf { width: 58px; height: 24px; background: var(--g100); border: 1px solid var(--g300); border-radius: 6px; }
437 .cl-arrow { font-family: var(--mono); font-size: 9px; color: var(--g400); }
438 
439 /* Slot grid */
440 .slotgrid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; padding: 0 20px 14px; }
441 .slot { padding: 10px 6px; border-radius: var(--rsm); border: 1.5px solid var(--g300); background: var(--g100); text-align: center; font-family: var(--mono); font-size: 9px; color: var(--g600); }
442 .slot.on { background: var(--g700); border-color: var(--g700); color: #fff; }
443 .slot.booked { opacity: .35; }
444 .slot.peak { border-color: var(--g500); }
445 .slot-badge { font-size: 7px; color: var(--g400); display: block; margin-top: 2px; }
446 .slot.on .slot-badge { color: var(--g300); }
447 .slot.peak .slot-badge { color: var(--g500); }
448 
449 /* Payment items */
450 .pay-item { margin: 0 20px 8px; background: #fff; border: 1.5px solid var(--g200); border-radius: var(--rmd); padding: 14px 16px; display: flex; align-items: center; gap: 12px; }
451 .pay-item.on { border-color: var(--g600); background: var(--g100); }
452 .pay-radio { width: 16px; height: 16px; border-radius: 50%; border: 2px solid var(--g300); flex-shrink: 0; }
453 .pay-radio.on { border-color: var(--g700); background: radial-gradient(circle, var(--g700) 4px, transparent 4px); }
454 .pay-lbl { flex: 1; font-size: 13px; color: var(--g700); }
455 
456 /* Menu sections */
457 .menu-sec { background: #fff; border-radius: var(--rmd); margin: 14px 20px 0; overflow: hidden; border: 1px solid var(--g200); }
458 .menu-sec-lbl { padding: 8px 16px; font-family: var(--mono); font-size: 9px; text-transform: uppercase; letter-spacing: .09em; color: var(--g400); background: var(--g100); border-bottom: 1px solid var(--g200); }
459 .menu-item { padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--g100); }
460 .menu-item:last-child { border-bottom: none; }
461 .menu-item-lbl { font-size: 13px; color: var(--g700); }
462 .menu-item-lbl.danger { color: var(--g500); }
463 .chevron { width: 6px; height: 6px; border-inline-end: 2px solid var(--g300); border-top: 2px solid var(--g300); transform: rotate(45deg); }
464 
465 /* Info note */
466 .infonote { margin: 0 20px 14px; background: var(--g100); border: 1px solid var(--g200); border-radius: var(--rsm); padding: 10px 14px; font-family: var(--mono); font-size: 9px; color: var(--g500); line-height: 1.5; }
467 
468 /* Toggle switch */
469 .toggle { width: 38px; height: 22px; background: var(--g700); border-radius: 11px; position: relative; }
470 .toggle.off { background: var(--g200); border: 1px solid var(--g300); }
471 .toggle-knob { width: 18px; height: 18px; background: #fff; border-radius: 50%; position: absolute; top: 2px; inset-inline-end: 2px; box-shadow: 0 1px 3px rgba(0,0,0,.2); }
472 .toggle.off .toggle-knob { inset-inline-start: 2px; inset-inline-end: auto; }
473 
474 /* Reference badge */
475 .ref-badge { margin: 0 20px; background: var(--g100); border: 1.5px dashed var(--g300); border-radius: var(--rmd); padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; }
476 .ref-val { font-family: var(--mono); font-size: 16px; font-weight: 600; color: var(--g700); letter-spacing: .08em; }
477 .ref-copy { padding: 4px 10px; background: var(--g200); border-radius: 6px; font-family: var(--mono); font-size: 8px; color: var(--g500); border: 1px solid var(--g300); }
478 
479 /* Success checkmark */
480 .success-circle { width: 88px; height: 88px; border-radius: 50%; background: var(--g200); border: 3px solid var(--g400); margin: 0 auto; display: flex; align-items: center; justify-content: center; }
481 .success-inner { width: 44px; height: 44px; border-radius: 50%; background: var(--g500); display: flex; align-items: center; justify-content: center; font-size: 20px; color: #fff; }
482 
483 /* Rating breakdown bars */
484 .rating-bar-row { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }
485 .rating-bar-lbl { font-family: var(--mono); font-size: 9px; color: var(--g400); width: 14px; text-align: end; }
486 .rating-bar-bg { flex: 1; height: 6px; background: var(--g200); border-radius: 3px; overflow: hidden; }
487 .rating-bar-fill { height: 100%; background: var(--g600); border-radius: 3px; }
488 
489 /* Utility */
490 .sp { height: 12px; }
491 .sp-sm { height: 7px; }
492 .sp-lg { height: 20px; }
493 .pad { padding: 0 20px; }
494 .white-block { background: #fff; padding: 14px 20px; border-bottom: 1px solid var(--g200); }
495 
496 /* RTL Overrides */
497 html[dir="rtl"] .chevron { transform: rotate(315deg); }
498 html[dir="rtl"] .cl-arrow { transform: scaleX(-1); }
499 html[dir="rtl"] .carousel-dots { transform: translateX(50%); }
500 html[dir="rtl"] .pthumb-badge { transform: translateX(50%); }
501 html[dir="rtl"] .ovl-btn { transform: scaleX(-1); }
```

## File: `src\main.jsx`

```jsx
1 import { StrictMode } from 'react';
2 import { createRoot } from 'react-dom/client';
3 import './styles/index.css';
4 import App from './App.jsx';
5 
6 createRoot(document.getElementById('root')).render(
7   <StrictMode>
8     <App />
9   </StrictMode>,
10 );
```

## File: `src\components\board\BoardGroup.jsx`

```jsx
1 import React from 'react';
2 
3 export default function BoardGroup({ title, count, subtitle, children }) {
4   return (
5     <div className="board-group">
6       <div className="board-group-header">
7         <div className="board-group-title">{title}</div>
8         <div className="board-group-subtitle">
9           {subtitle || `${count} Screens`}
10         </div>
11       </div>
12       <div className="board-grid">
13         {children}
14       </div>
15     </div>
16   );
17 }
```

## File: `src\components\board\BoardItem.jsx`

```jsx
1 import React from 'react';
2 import WebFrame from '../web/WebFrame';
3 import { MobileFrame } from '../web/MobileFrame';
4 
5 /*
6   BoardItem — renders desktop + mobile side by side
7   Props:
8     id           Screen ID (e.g. "W01")
9     name         Screen name label
10     url          URL to show in browser chrome
11     children     Desktop screen component
12     mobile       Mobile screen component (optional)
13 */
14 export default function BoardItem({ id, name, url, children, mobile }) {
15   const mobileView = mobile ?? children;
16 
17   return (
18     <div className="board-item">
19       <div className="board-item-id">{id}</div>
20       <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
21 
22         {/* Desktop */}
23         <div>
24           <div style={{
25             fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 600,
26             color: 'var(--g500)', letterSpacing: '.1em', textTransform: 'uppercase',
27             marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6,
28           }}>
29             <div style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--g400)' }} />
30             DESKTOP — 1260px
31           </div>
32           <WebFrame url={url}>{children}</WebFrame>
33         </div>
34 
35         {/* Mobile */}
36         {!url.includes("dashboard") && (
37         <div>
38           <div style={{
39             fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 600,
40             color: 'var(--g500)', letterSpacing: '.1em', textTransform: 'uppercase',
41             marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6,
42           }}>
43             <div style={{ width: 8, height: 8, borderRadius: 50, background: 'var(--g400)' }} />
44             MOBILE — 390px
45           </div>
46           <MobileFrame url={url}>{mobileView}</MobileFrame>
47         </div>
48         )}
49       </div>
50 
51       <div className="board-item-name">{name}</div>
52     </div>
53   );
54 }
```

## File: `src\components\board\BoardLayout.jsx`

```jsx
1 import React from 'react';
2 
3 export default function BoardLayout({ children }) {
4   return (
5     <div className="board-layout">
6       {children}
7     </div>
8   );
9 }
```

## File: `src\components\ui\BottomNav.jsx`

```jsx
1 import React from 'react';
2 
3 // Player nav tabs
4 const PLAYER_TABS = ['الرئيسية', 'استكشف', 'حجوزاتي', 'حسابي'];
5 // Owner nav tabs
6 const OWNER_TABS = ['الرئيسية', 'التقويم', 'الحجوزات', 'الإعدادات'];
7 
8 export default function BottomNav({ activeIndex = 0, variant = 'player' }) {
9   const tabs = variant === 'owner' ? OWNER_TABS : PLAYER_TABS;
10   return (
11     <div className="bnav">
12       {tabs.map((label, i) => (
13         <div key={i} className={`bni${i === activeIndex ? ' on' : ''}`}>
14           <div className={`bni-bar${i === activeIndex ? ' on' : ''}`}></div>
15           <div className="bni-dot"></div>
16           <div className={`bni-lbl${i === activeIndex ? ' on' : ''}`}>{label}</div>
17         </div>
18       ))}
19     </div>
20   );
21 }
```

## File: `src\components\ui\FCard.jsx`

```jsx
1 import React from 'react';
2 
3 export default function FCard({ name, price, rating, imgBg, address, format, players }) {
4   const gameFormat = format || players;
5   const hasDetails = Boolean(address) || Boolean(gameFormat);
6 
7   return (
8     <div className="fcard">
9       <div className="fcard-img" style={imgBg ? { background: imgBg } : {}}>
10         [Content Image]
11         <div className="fcard-img-badge">⭐ {rating || '4.8'}</div>
12       </div>
13       <div className="fcard-body">
14         <div className="fcard-top">
15           <div className="fcard-name">{name}</div>
16           <div className="fcard-price">{price || '150 ج/ساعة'}</div>
17         </div>
18         {hasDetails ? (
19           <div className="fcard-details">
20             <div className="fcard-address">{address}</div>
21             <div className="fcard-format">{gameFormat ? `نظام اللعب: ${gameFormat}` : ''}</div>
22           </div>
23         ) : (
24           <div className="fcard-meta">
25             <div className="mbar" style={{ width: '80px' }}></div>
26             <div className="mbar" style={{ width: '55px' }}></div>
27             <div className="mbar" style={{ width: '38px' }}></div>
28           </div>
29         )}
30         <div className="btn-primary">احجز</div>
31       </div>
32     </div>
33   );
34 }
```

## File: `src\components\ui\Phone.jsx`

```jsx
1 import React from 'react';
2 import StatusBar from './StatusBar';
3 
4 export default function Phone({ children, showStatusBar = true }) {
5   return (
6     <div className="phone">
7       {showStatusBar && <StatusBar />}
8       {children}
9     </div>
10   );
11 }
```

## File: `src\components\ui\ProgressBar.jsx`

```jsx
1 import React from 'react';
2 
3 export default function ProgressBar({ step, total = 4 }) {
4   return (
5     <div className="prog-wrap">
6       <div className="prog-top">
7         <div className="prog-lbl">الخطوة {step} من {total}</div>
8         <div className="prog-lbl">{Math.round((step / total) * 100)}%</div>
9       </div>
10       <div className="prog-bg">
11         <div className="prog-fill" style={{ width: `${(step / total) * 100}%` }}></div>
12       </div>
13     </div>
14   );
15 }
```

## File: `src\components\ui\StatusBar.jsx`

```jsx
1 import React from 'react';
2 
3 export default function StatusBar() {
4   return (
5     <div className="sb">
6       <div className="sb-time">9:41</div>
7       <div className="sb-icons">
8         <div className="sb-dot sm"></div>
9         <div className="sb-dot sm"></div>
10         <div className="sb-dot"></div>
11       </div>
12     </div>
13   );
14 }
```

## File: `src\components\web\AdminLayout.jsx`

```jsx
1 import React from 'react';
2 
3 const NAV_ITEMS = [
4   { id: 'dashboard', icon: '▦', label: 'Dashboard' },
5   { id: 'bookings', icon: '📋', label: 'الحجوزات' },
6   { id: 'tours', icon: '🗺', label: 'الرحلات والوجهات' },
7   { id: 'users', icon: '👥', label: 'المستخدمون' },
8   { id: 'loyalty', icon: '⭐', label: 'الولاء والعملات' },
9   { id: 'cms', icon: '📝', label: 'إدارة المحتوى' },
10   { id: 'static-pages', icon: '📄', label: 'الصفحات الثابتة' },
11   { id: 'reviews', icon: '⭐', label: 'التقييمات' },
12   { id: 'flights', icon: '✈️', label: 'الطيران' },
13   { id: 'hotels', icon: '🏨', label: 'الفنادق' },
14   { id: 'coupons', icon: '🏷️', label: 'أكواد الخصم' },
15   { id: 'broadcast', icon: '📢', label: 'إشعارات جماعية' },
16   { id: 'currency', icon: '💱', label: 'العملات' },
17   { id: 'reports', icon: '📊', label: 'التقارير' },
18   { id: 'monitoring', icon: '🖥', label: 'المراقبة' },
19   { id: 'settings', icon: '⚙', label: 'الإعدادات' },
20 ];
21 export function AdminSidebar({ active = 'dashboard' }) {
22   return (
23     <div
24       style={{
25         width: 220,
26         background: 'var(--g900)',
27         height: '100%',
28         display: 'flex',
29         flexDirection: 'column',
30         flexShrink: 0,
31       }}
32     >
33       <div
34         style={{
35           padding: '20px 18px 16px',
36           borderBottom: '1px solid rgba(255,255,255,.07)',
37         }}
38       >
39         <div style={{ width: 100, height: 24, background: 'var(--g600)', borderRadius: 5, marginBottom: 4 }} />
40         <div
41           style={{
42             fontFamily: 'var(--mono)',
43             fontSize: 9,
44             color: 'var(--g500)',
45             letterSpacing: '.08em',
46             textTransform: 'uppercase',
47           }}
48         >
49           Admin Panel v1.1
50         </div>
51       </div>
52 
53       <div style={{ flex: 1, padding: '10px 0' }}>
54         {NAV_ITEMS.map((item) => {
55           const isActive = active === item.id;
56           return (
57             <div
58               key={item.id}
59               style={{
60                 display: 'flex',
61                 alignItems: 'center',
62                 gap: 10,
63                 padding: '10px 18px',
64                 background: isActive ? 'rgba(255,255,255,.08)' : 'transparent',
65                 borderRight: isActive ? '3px solid #fff' : '3px solid transparent',
66                 cursor: 'pointer',
67               }}
68             >
69               <span
70                 style={{
71                   fontSize: 14,
72                   width: 18,
73                   textAlign: 'center',
74                   opacity: isActive ? 1 : 0.5,
75                 }}
76               >
77                 {item.icon}
78               </span>
79               <span
80                 style={{
81                   fontFamily: 'var(--mono)',
82                   fontSize: 11,
83                   color: isActive ? '#fff' : 'var(--g500)',
84                   fontWeight: isActive ? 600 : 400,
85                 }}
86               >
87                 {item.label}
88               </span>
89               {item.id === 'monitoring' && (
90                 <div
91                   style={{
92                     marginRight: 'auto',
93                     width: 16,
94                     height: 16,
95                     borderRadius: '50%',
96                     background: '#ef4444',
97                     display: 'flex',
98                     alignItems: 'center',
99                     justifyContent: 'center',
100                     fontFamily: 'var(--mono)',
101                     fontSize: 8,
102                     fontWeight: 700,
103                     color: '#fff',
104                   }}
105                 >
106                   3
107                 </div>
108               )}
109             </div>
110           );
111         })}
112       </div>
113 
114       <div
115         style={{
116           padding: '14px 18px',
117           borderTop: '1px solid rgba(255,255,255,.07)',
118           display: 'flex',
119           alignItems: 'center',
120           gap: 10,
121         }}
122       >
123         <div
124           style={{
125             width: 30,
126             height: 30,
127             borderRadius: '50%',
128             background: 'var(--g600)',
129             border: '1.5px solid var(--g500)',
130             flexShrink: 0,
131           }}
132         />
133         <div style={{ flex: 1, overflow: 'hidden' }}>
134           <div
135             style={{
136               fontFamily: 'var(--mono)',
137               fontSize: 10,
138               color: '#fff',
139               fontWeight: 600,
140               overflow: 'hidden',
141               textOverflow: 'ellipsis',
142               whiteSpace: 'nowrap',
143             }}
144           >
145             Super Admin
146           </div>
147           <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)', marginTop: 1 }}>
148             admin@el-eman.com
149           </div>
150         </div>
151         <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>↩</div>
152       </div>
153     </div>
154   );
155 }
156 
157 export function AdminTopbar({ breadcrumb = [], actions = null }) {
158   return (
159     <div
160       style={{
161         height: 52,
162         background: '#fff',
163         borderBottom: '1.5px solid var(--g200)',
164         display: 'flex',
165         alignItems: 'center',
166         justifyContent: 'space-between',
167         padding: '0 24px',
168         flexShrink: 0,
169       }}
170     >
171       <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 11 }}>
172         <span style={{ color: 'var(--g500)' }}>الإيمان للسياحة</span>
173         {breadcrumb.map((b, i) => (
174           <React.Fragment key={`${b}-${i}`}>
175             <span style={{ color: 'var(--g300)' }}>/</span>
176             <span
177               style={{
178                 color: i === breadcrumb.length - 1 ? 'var(--g800)' : 'var(--g500)',
179                 fontWeight: i === breadcrumb.length - 1 ? 600 : 400,
180               }}
181             >
182               {b}
183             </span>
184           </React.Fragment>
185         ))}
186       </div>
187       <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
188         <div
189           style={{
190             position: 'relative',
191             width: 32,
192             height: 32,
193             borderRadius: 8,
194             background: 'var(--g100)',
195             border: '1px solid var(--g200)',
196             display: 'flex',
197             alignItems: 'center',
198             justifyContent: 'center',
199           }}
200         >
201           <span style={{ fontSize: 14 }}>🔔</span>
202           <div
203             style={{
204               position: 'absolute',
205               top: 4,
206               right: 4,
207               width: 8,
208               height: 8,
209               borderRadius: '50%',
210               background: '#ef4444',
211               border: '1.5px solid #fff',
212             }}
213           />
214         </div>
215         {actions}
216       </div>
217     </div>
218   );
219 }
220 
221 export function AdminFrame({ active, breadcrumb = [], actions = null, children }) {
222   return (
223     <div style={{ display: 'flex', height: 780, background: 'var(--g100)', overflow: 'hidden' }}>
224       <AdminSidebar active={active} />
225       <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
226         <AdminTopbar breadcrumb={breadcrumb} actions={actions} />
227         <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '24px' }}>{children}</div>
228       </div>
229     </div>
230   );
231 }
232 
233 export function StatCard({ label, value, sub, trend, color = 'var(--g800)' }) {
234   const isUp = trend > 0;
235   return (
236     <div style={{ background: '#fff', borderRadius: 12, border: '1.5px solid var(--g200)', padding: '18px 20px' }}>
237       <div
238         style={{
239           fontFamily: 'var(--mono)',
240           fontSize: 10,
241           color: 'var(--g400)',
242           textTransform: 'uppercase',
243           letterSpacing: '.07em',
244           marginBottom: 10,
245         }}
246       >
247         {label}
248       </div>
249       <div style={{ fontFamily: 'var(--mono)', fontSize: 26, fontWeight: 700, color, marginBottom: 6 }}>{value}</div>
250       {(sub || trend !== undefined) && (
251         <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
252           {trend !== undefined && (
253             <div
254               style={{
255                 fontFamily: 'var(--mono)',
256                 fontSize: 10,
257                 color: isUp ? '#16a34a' : '#dc2626',
258                 display: 'flex',
259                 alignItems: 'center',
260                 gap: 3,
261               }}
262             >
263               <span>{isUp ? '↑' : '↓'}</span>
264               <span>{Math.abs(trend)}%</span>
265             </div>
266           )}
267           {sub && <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)' }}>{sub}</span>}
268         </div>
269       )}
270     </div>
271   );
272 }
273 
274 export function AdminBtn({ label, primary = false, danger = false }) {
275   const bg = danger ? '#dc2626' : primary ? 'var(--g800)' : '#fff';
276   const color = danger || primary ? '#fff' : 'var(--g700)';
277   const border = danger || primary ? 'none' : '1.5px solid var(--g300)';
278   return (
279     <div
280       style={{
281         padding: '8px 16px',
282         background: bg,
283         color,
284         border,
285         borderRadius: 8,
286         fontFamily: 'var(--mono)',
287         fontSize: 11,
288         fontWeight: primary || danger ? 600 : 400,
289         whiteSpace: 'nowrap',
290         cursor: 'pointer',
291       }}
292     >
293       {label}
294     </div>
295   );
296 }
```

## File: `src\components\web\Footer.jsx`

```jsx
1 import React from 'react';
2 
3 /* Footer — shared across all public pages */
4 
5 const COLS = [
6   {
7     title: 'روابط سريعة',
8     links: ['الرئيسية', 'الوجهات', 'رحلاتنا', 'حجز طيران', 'حجز فنادق'],
9   },
10   {
11     title: 'الشركة',
12     links: ['من نحن', 'تواصل معنا', 'المدونة', 'الوظائف'],
13   },
14   {
15     title: 'قانوني',
16     links: ['سياسة الخصوصية', 'الشروط والأحكام'],
17   },
18 ];
19 
20 export default function Footer() {
21   return (
22     <div className="w-footer">
23       <div className="w-footer-grid">
24         <div>
25           <div className="w-footer-logo" />
26           <div className="w-footer-desc">
27             الإيمان للسياحة — وجهتك الأولى لرحلات الاسترخاء والعمرة
28             وحجز الطيران والفنادق في مصر والعالم.
29           </div>
30         </div>
31         {COLS.map((col) => (
32           <div key={col.title}>
33             <div className="w-footer-col-title">{col.title}</div>
34             {col.links.map((l) => (
35               <span key={l} className="w-footer-link">{l}</span>
36             ))}
37           </div>
38         ))}
39       </div>
40       <div className="w-footer-bottom">
41         <span>© 2026 El-Eman Tourist. جميع الحقوق محفوظة.</span>
42         <span>تصميم وتطوير — الإيمان للسياحة</span>
43       </div>
44     </div>
45   );
46 }
```

## File: `src\components\web\LiveChat.jsx`

```jsx
1 import React from 'react';
2 
3 /*
4   LiveChat — Desktop floating support widget
5   Per FRD FR-SUPPORT-001 + FR-SUPPORT-002:
6     - WhatsApp floating button (always visible)
7     - Live Chat bubble (optional, via Intercom/Freshchat)
8   
9   Props:
10     state: 'closed' | 'chat_open' | 'wa_open'  (default: 'closed')
11 */
12 export default function LiveChat({ state = 'closed' }) {
13   return (
14     <div style={{
15       position: 'fixed',
16       bottom: 28,
17       left: 28,
18       display: 'flex',
19       flexDirection: 'column',
20       alignItems: 'flex-end',
21       gap: 10,
22       zIndex: 999,
23       pointerEvents: 'none',
24     }}>
25 
26       {/* ── Live Chat panel (open state) ── */}
27       {state === 'chat_open' && (
28         <div style={{
29           width: 320,
30           background: '#fff',
31           borderRadius: 16,
32           border: '1.5px solid var(--g200)',
33           overflow: 'hidden',
34           boxShadow: '0 8px 32px rgba(0,0,0,.14)',
35           marginBottom: 4,
36         }}>
37           {/* Chat header */}
38           <div style={{
39             background: 'var(--g800)',
40             padding: '14px 16px',
41             display: 'flex',
42             alignItems: 'center',
43             justifyContent: 'space-between',
44           }}>
45             <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
46               <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--g600)', border: '2px solid var(--g500)', position: 'relative' }}>
47                 {/* Online dot */}
48                 <div style={{ position: 'absolute', bottom: 0, right: 0, width: 9, height: 9, borderRadius: '50%', background: '#4ade80', border: '2px solid var(--g800)' }} />
49               </div>
50               <div>
51                 <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>خدمة العملاء</div>
52                 <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)' }}>متاح الآن · رد خلال دقائق</div>
53               </div>
54             </div>
55             <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: 12, color: '#fff' }}>✕</div>
56           </div>
57 
58           {/* Messages area */}
59           <div style={{ padding: '14px 14px 10px', background: 'var(--g100)', minHeight: 160, display: 'flex', flexDirection: 'column', gap: 10 }}>
60             {/* Agent message */}
61             <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
62               <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--g300)', flexShrink: 0 }} />
63               <div style={{ background: '#fff', borderRadius: '12px 12px 12px 2px', padding: '8px 12px', maxWidth: '75%', border: '1px solid var(--g200)' }}>
64                 <div style={{ fontSize: 12, color: 'var(--g800)', lineHeight: 1.5 }}>أهلاً! كيف يمكنني مساعدتك اليوم؟</div>
65                 <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', marginTop: 3 }}>10:32 ص</div>
66               </div>
67             </div>
68             {/* User message */}
69             <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
70               <div style={{ background: 'var(--g700)', borderRadius: '12px 12px 2px 12px', padding: '8px 12px', maxWidth: '75%' }}>
71                 <div style={{ fontSize: 12, color: '#fff', lineHeight: 1.5 }}>أريد الاستفسار عن رحلة شرم الشيخ</div>
72                 <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', marginTop: 3, textAlign: 'right' }}>10:33 ص</div>
73               </div>
74             </div>
75             {/* Typing indicator */}
76             <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
77               <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--g300)', flexShrink: 0 }} />
78               <div style={{ background: '#fff', borderRadius: '12px 12px 12px 2px', padding: '10px 14px', border: '1px solid var(--g200)' }}>
79                 <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
80                   {[0, 1, 2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--g400)' }} />)}
81                 </div>
82               </div>
83             </div>
84           </div>
85 
86           {/* Input bar */}
87           <div style={{ padding: '10px 12px', borderTop: '1px solid var(--g200)', background: '#fff', display: 'flex', gap: 8, alignItems: 'center' }}>
88             <div style={{ flex: 1, height: 36, background: 'var(--g100)', border: '1.5px solid var(--g200)', borderRadius: 20, display: 'flex', alignItems: 'center', padding: '0 12px' }}>
89               <div style={{ height: 8, background: 'var(--g300)', borderRadius: 4, width: '60%' }} />
90             </div>
91             <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--g800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
92               <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '9px solid #fff', marginRight: -2 }} />
93             </div>
94           </div>
95 
96           {/* Powered by */}
97           <div style={{ padding: '6px 14px', background: '#fff', borderTop: '1px solid var(--g100)', fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', textAlign: 'center' }}>
98             Powered by Intercom
99           </div>
100         </div>
101       )}
102 
103       {/* ── WhatsApp panel (open state) ── */}
104       {state === 'wa_open' && (
105         <div style={{
106           width: 280,
107           background: '#fff',
108           borderRadius: 16,
109           border: '1.5px solid var(--g200)',
110           overflow: 'hidden',
111           boxShadow: '0 8px 32px rgba(0,0,0,.14)',
112           marginBottom: 4,
113         }}>
114           <div style={{ background: '#25D366', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
115             <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>💬</div>
116             <div>
117               <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>واتساب — الإيمان للسياحة</div>
118               <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.75)' }}>نرد خلال دقائق · متاح 9ص–9م</div>
119             </div>
120           </div>
121           <div style={{ padding: 14 }}>
122             <div style={{ background: '#f0f8f0', border: '1px solid #d0e8d0', borderRadius: 12, padding: '10px 12px', marginBottom: 12 }}>
123               <div style={{ fontSize: 12, color: '#2d6a2d', lineHeight: 1.5 }}>أهلاً! ابدأ المحادثة وسيرد عليك فريقنا فوراً.</div>
124             </div>
125             <div style={{ height: 40, background: '#25D366', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
126               <div style={{ fontSize: 15 }}>💬</div>
127               <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 600, color: '#fff' }}>ابدأ المحادثة</div>
128             </div>
129             <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', textAlign: 'center', marginTop: 8 }}>سيتم فتح واتساب تلقائياً</div>
130           </div>
131         </div>
132       )}
133 
134       {/* ── Floating buttons row ── */}
135       <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
136         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
137           <div style={{ position: 'relative' }}>
138             <div style={{
139               width: 48, height: 48,
140               borderRadius: '50%',
141               background: 'var(--g800)',
142               border: '2.5px solid var(--g600)',
143               display: 'flex', alignItems: 'center', justifyContent: 'center',
144               boxShadow: '0 4px 16px rgba(0,0,0,.22)',
145               cursor: 'pointer',
146             }}>
147               <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
148                 <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="#fff" opacity=".9"/>
149               </svg>
150             </div>
151             <div style={{ position: 'absolute', top: -3, right: -3, width: 16, height: 16, borderRadius: '50%', background: '#ef4444', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: 8, fontWeight: 700, color: '#fff' }}>1</div>
152           </div>
153           <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g500)', whiteSpace: 'nowrap' }}>Live Chat</div>
154         </div>
155 
156         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
157           <div style={{
158             width: 48, height: 48,
159             borderRadius: '50%',
160             background: '#25D366',
161             border: '2.5px solid #1da851',
162             display: 'flex', alignItems: 'center', justifyContent: 'center',
163             boxShadow: '0 4px 16px rgba(37,211,102,.35)',
164             cursor: 'pointer',
165             fontSize: 22,
166           }}>💬</div>
167           <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g500)', whiteSpace: 'nowrap' }}>واتساب</div>
168         </div>
169       </div>
170     </div>
171   );
172 }
```

## File: `src\components\web\MobileFrame.jsx`

```jsx
1 import React from 'react';
2 
3 export function MobileFrame({ children, url = 'el-eman.com' }) {
4   return (
5     <div style={{ width: 390, borderRadius: 16, overflow: 'hidden', border: '2px solid var(--g300)', background: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,.12)' }}>
6       <div style={{ height: 36, background: 'var(--g100)', borderBottom: '1px solid var(--g200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', flexShrink: 0 }}>
7         <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 600, color: 'var(--g700)' }}>9:41</div>
8         <div style={{ display: 'flex', gap: 4 }}>
9           {[12,8,12].map((w,i) => <div key={i} style={{ width: w, height: 4, background: 'var(--g400)', borderRadius: 2 }} />)}
10         </div>
11       </div>
12       <div style={{ height: 36, background: 'var(--g100)', borderBottom: '1.5px solid var(--g200)', display: 'flex', alignItems: 'center', padding: '0 12px', flexShrink: 0 }}>
13         <div style={{ flex: 1, height: 22, background: '#fff', border: '1px solid var(--g200)', borderRadius: 8, display: 'flex', alignItems: 'center', padding: '0 10px' }}>
14           <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)' }}>{url}</span>
15         </div>
16       </div>
17       <div style={{ maxHeight: 700, overflowY: 'auto', overflowX: 'hidden', background: 'var(--g100)', position: 'relative', transform: 'translate3d(0,0,0)', contain: 'paint', isolation: 'isolate', clipPath: 'inset(0)' }}>
18         {children}
19       </div>
20     </div>
21   );
22 }
23 
24 export function MobileNavbar({ showBack = false, title = '' }) {
25   return (
26     <div style={{ height: 52, background: '#fff', borderBottom: '1px solid var(--g200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', position: 'sticky', top: 0, zIndex: 10, flexShrink: 0 }}>
27       {showBack ? <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--g100)', border: '1px solid var(--g200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--g600)' }}>←</div>
28         : <div style={{ width: 88, height: 22, background: 'var(--g200)', borderRadius: 4 }} />}
29       {title && <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--g800)' }}>{title}</div>}
30       <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
31         <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g600)', border: '1px solid var(--g300)', padding: '3px 8px', borderRadius: 6 }}>EGP</div>
32         <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 4 }}>
33           {[20,14,20].map((w,i) => <div key={i} style={{ width: w, height: 2, background: 'var(--g600)', borderRadius: 1 }} />)}
34         </div>
35       </div>
36     </div>
37   );
38 }
39 
40 export function MobileNavbarUser({ showBack = false, title = '' }) {
41   return (
42     <div style={{ height: 52, background: '#fff', borderBottom: '1px solid var(--g200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', position: 'sticky', top: 0, zIndex: 10, flexShrink: 0 }}>
43       {showBack ? <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--g100)', border: '1px solid var(--g200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--g600)' }}>←</div>
44         : <div style={{ width: 88, height: 22, background: 'var(--g200)', borderRadius: 4 }} />}
45       {title && <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--g800)', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>{title}</div>}
46       <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
47         <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>⭐ 120</div>
48         <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--g200)', border: '1.5px solid var(--g300)' }} />
49       </div>
50     </div>
51   );
52 }
53 
54 export function MobileFooter() {
55   return (
56     <div style={{ background: 'var(--g800)', padding: '20px 16px' }}>
57       <div style={{ width: 80, height: 20, background: 'var(--g600)', borderRadius: 4, marginBottom: 12 }} />
58       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px', marginBottom: 14 }}>
59         {['الرئيسية','الوجهات','رحلاتنا','حجز طيران','حجز فنادق','من نحن','المدونة','تواصل'].map((l,i) => (
60           <div key={i} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>{l}</div>
61         ))}
62       </div>
63       <div style={{ borderTop: '1px solid var(--g700)', paddingTop: 12, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g600)' }}>© 2026 El-Eman Tourist</div>
64     </div>
65   );
66 }
67 
68 export function MobileStickyBar({ price, priceLabel = '/ للشخص', ctaLabel = 'احجز الآن', ghost = '' }) {
69   return (
70     <div style={{ position: 'sticky', bottom: 0, background: '#fff', borderTop: '1.5px solid var(--g200)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, zIndex: 20 }}>
71       {price && <div style={{ flex: 1 }}>
72         <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)' }}>يبدأ من</div>
73         <div style={{ fontFamily: 'var(--mono)', fontSize: 18, fontWeight: 700, color: 'var(--g800)' }}>{price}</div>
74         <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)' }}>{priceLabel}</div>
75       </div>}
76       {ghost && <div style={{ flex: 1, padding: '12px 0', border: '1.5px solid var(--g300)', borderRadius: 10, textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--g600)' }}>{ghost}</div>}
77       <div style={{ flex: price ? 1 : 2, padding: '13px 0', background: 'var(--g800)', borderRadius: 10, textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 600, color: '#fff' }}>{ctaLabel}</div>
78     </div>
79   );
80 }
81 
82 export function MobileStepDots({ total = 5, active = 1 }) {
83   return (
84     <div style={{ background: '#fff', borderBottom: '1px solid var(--g200)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
85       <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)', whiteSpace: 'nowrap' }}>الخطوة {active} من {total}</div>
86       <div style={{ flex: 1, display: 'flex', gap: 4 }}>
87         {[...Array(total)].map((_,i) => <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i < active ? 'var(--g700)' : 'var(--g200)' }} />)}
88       </div>
89     </div>
90   );
91 }
92 
93 /* ── Live Chat + WhatsApp floating widget ── */
94 export function MobileLiveChat({ state = 'closed' }) {
95   return (
96     <div style={{ position: 'relative' }}>
97       {state === 'chat_open' && (
98         <div style={{ margin: '0 12px 8px', background: '#fff', borderRadius: 14, border: '1.5px solid var(--g200)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,.1)' }}>
99           <div style={{ background: 'var(--g800)', padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
100             <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
101               <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--g600)', border: '2px solid var(--g500)', position: 'relative' }}>
102                 <div style={{ position: 'absolute', bottom: 0, right: 0, width: 8, height: 8, borderRadius: '50%', background: '#4ade80', border: '2px solid var(--g800)' }} />
103               </div>
104               <div>
105                 <div style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>خدمة العملاء</div>
106                 <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g400)' }}>متاح · رد خلال دقائق</div>
107               </div>
108             </div>
109             <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: 11, color: '#fff' }}>✕</div>
110           </div>
111           <div style={{ padding: '12px', background: 'var(--g100)', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 130 }}>
112             <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
113               <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--g300)', flexShrink: 0 }} />
114               <div style={{ background: '#fff', borderRadius: '10px 10px 10px 2px', padding: '7px 10px', border: '1px solid var(--g200)' }}>
115                 <div style={{ fontSize: 11, color: 'var(--g800)', lineHeight: 1.5 }}>أهلاً! كيف يمكنني مساعدتك؟</div>
116               </div>
117             </div>
118             <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
119               <div style={{ background: 'var(--g700)', borderRadius: '10px 10px 2px 10px', padding: '7px 10px' }}>
120                 <div style={{ fontSize: 11, color: '#fff', lineHeight: 1.5 }}>استفسار عن رحلة شرم الشيخ</div>
121               </div>
122             </div>
123             <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
124               <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--g300)', flexShrink: 0 }} />
125               <div style={{ background: '#fff', borderRadius: '10px 10px 10px 2px', padding: '8px 12px', border: '1px solid var(--g200)' }}>
126                 <div style={{ display: 'flex', gap: 3 }}>{[0,1,2].map(i => <div key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--g400)' }} />)}</div>
127               </div>
128             </div>
129           </div>
130           <div style={{ padding: '8px 10px', borderTop: '1px solid var(--g200)', background: '#fff', display: 'flex', gap: 8, alignItems: 'center' }}>
131             <div style={{ flex: 1, height: 32, background: 'var(--g100)', border: '1.5px solid var(--g200)', borderRadius: 16, display: 'flex', alignItems: 'center', padding: '0 10px' }}>
132               <div style={{ height: 7, background: 'var(--g300)', borderRadius: 3, width: '50%' }} />
133             </div>
134             <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--g800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
135               <div style={{ width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: '7px solid #fff', marginRight: -2 }} />
136             </div>
137           </div>
138           <div style={{ padding: '5px', background: '#fff', fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g400)', textAlign: 'center' }}>Powered by Intercom</div>
139         </div>
140       )}
141       {state === 'wa_open' && (
142         <div style={{ margin: '0 12px 8px', background: '#fff', borderRadius: 14, border: '1.5px solid var(--g200)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,.1)' }}>
143           <div style={{ background: '#25D366', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
144             <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>💬</div>
145             <div>
146               <div style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>واتساب — الإيمان</div>
147               <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'rgba(255,255,255,.75)' }}>رد خلال دقائق</div>
148             </div>
149           </div>
150           <div style={{ padding: 12 }}>
151             <div style={{ background: '#f0f8f0', border: '1px solid #d0e8d0', borderRadius: 10, padding: '8px 10px', marginBottom: 10 }}>
152               <div style={{ fontSize: 11, color: '#2d6a2d', lineHeight: 1.5 }}>أهلاً! راسلنا وسيرد فريقنا فوراً.</div>
153             </div>
154             <div style={{ height: 38, background: '#25D366', borderRadius: 19, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
155               <span style={{ fontSize: 14 }}>💬</span>
156               <span style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 600, color: '#fff' }}>ابدأ المحادثة</span>
157             </div>
158           </div>
159         </div>
160       )}
161       <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '8px 14px 4px' }}>
162         <div style={{ position: 'relative' }}>
163           <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--g800)', border: '2px solid var(--g600)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 12px rgba(0,0,0,.2)' }}>
164             <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="#fff" opacity=".9"/></svg>
165           </div>
166           <div style={{ position: 'absolute', top: -2, right: -2, width: 14, height: 14, borderRadius: '50%', background: '#ef4444', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: 7, fontWeight: 700, color: '#fff' }}>1</div>
167         </div>
168         <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#25D366', border: '2px solid #1da851', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 12px rgba(37,211,102,.35)', fontSize: 20 }}>💬</div>
169       </div>
170     </div>
171   );
172 }
173 
174 /* ── Filter Bottom Sheet ── */
175 export function MobileFilterDrawer({ type = 'tours' }) {
176   const tourFilters = [
177     { title: 'نوع الرحلة', options: [['ترفيهية',14,true],['دينية',8,true],['ثقافية',6,false],['نايل كروز',4,false],['شهر عسل',5,false]] },
178     { title: 'مدة الرحلة', options: [['1–3 أيام',7,false],['4–7 أيام',18,true],['أكثر من أسبوع',12,false]] },
179     { title: 'نوع الإقامة', options: [['5 نجوم',10,true],['4 نجوم',15,false],['3 نجوم',12,false]] },
180   ];
181   const flightFilters = [
182     { title: 'عدد التوقفات', options: [['بدون توقف',12,true],['توقف واحد',28,true],['توقفان',8,false]] },
183     { title: 'شركة الطيران', options: [['مصر للطيران',18,true],['فلاي دبي',11,false],['طيران ناس',9,false]] },
184     { title: 'الأمتعة', options: [['حقيبة مجانية',22,true],['بتكلفة إضافية',26,false]] },
185   ];
186   const hotelFilters = [
187     { title: 'تصنيف الفندق', options: [['5 نجوم',8,true],['4 نجوم',14,true],['3 نجوم',11,false]] },
188     { title: 'نوع الإقامة', options: [['إفطار مشمول',19,true],['نصف إقامة',12,false],['بدون وجبات',22,false]] },
189     { title: 'المرافق', options: [['شاطئ خاص',14,true],['بركة سباحة',28,true],['سبا',18,false]] },
190   ];
191   const filters = type === 'flights' ? flightFilters : type === 'hotels' ? hotelFilters : tourFilters;
192 
193   return (
194     <div style={{ position: 'relative' }}>
195       <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.5)', zIndex: 30, top: -700 }} />
196       <div style={{ position: 'relative', zIndex: 31, background: '#fff', borderRadius: '20px 20px 0 0', boxShadow: '0 -8px 32px rgba(0,0,0,.15)' }}>
197         <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 0' }}>
198           <div style={{ width: 36, height: 4, borderRadius: 2, background: 'var(--g300)' }} />
199         </div>
200         <div style={{ padding: '12px 16px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--g200)' }}>
201           <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--g800)' }}>الفلاتر</div>
202           <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--g500)', textDecoration: 'underline' }}>مسح الكل</div>
203         </div>
204         {/* Price range */}
205         <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--g100)' }}>
206           <div style={{ fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 600, color: 'var(--g600)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 12 }}>
207             {type === 'flights' ? 'سعر التذكرة' : type === 'hotels' ? 'السعر / الليلة' : 'نطاق السعر'}
208           </div>
209           <div style={{ position: 'relative', height: 4, background: 'var(--g200)', borderRadius: 2, margin: '16px 8px' }}>
210             <div style={{ position: 'absolute', right: '10%', left: '30%', height: '100%', background: 'var(--g700)', borderRadius: 2 }} />
211             <div style={{ position: 'absolute', right: '10%', top: '50%', transform: 'translate(50%,-50%)', width: 18, height: 18, borderRadius: '50%', background: '#fff', border: '2.5px solid var(--g700)', boxShadow: '0 2px 6px rgba(0,0,0,.15)' }} />
212             <div style={{ position: 'absolute', left: '30%', top: '50%', transform: 'translate(-50%,-50%)', width: 18, height: 18, borderRadius: '50%', background: '#fff', border: '2.5px solid var(--g700)', boxShadow: '0 2px 6px rgba(0,0,0,.15)' }} />
213           </div>
214           <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
215             {[type==='flights'?'900 ج':type==='hotels'?'800 ج':'2,000 ج', type==='flights'?'5,000 ج':type==='hotels'?'8,000 ج':'35,000 ج'].map((v,i) => (
216               <div key={i} style={{ background: 'var(--g100)', border: '1.5px solid var(--g300)', borderRadius: 8, padding: '5px 10px', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--g700)' }}>{v}</div>
217             ))}
218           </div>
219         </div>
220         {filters.map((section, si) => (
221           <div key={si} style={{ padding: '12px 16px', borderBottom: si < filters.length-1 ? '1px solid var(--g100)' : 'none' }}>
222             <div style={{ fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 600, color: 'var(--g600)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 10 }}>{section.title}</div>
223             <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
224               {section.options.map(([label, count, selected], oi) => (
225                 <div key={oi} style={{ padding: '6px 12px', borderRadius: 20, border: `1.5px solid ${selected?'var(--g800)':'var(--g300)'}`, background: selected?'var(--g800)':'#fff', display: 'flex', alignItems: 'center', gap: 5 }}>
226                   <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: selected?'#fff':'var(--g600)', fontWeight: selected?600:400 }}>{label}</span>
227                   <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: selected?'var(--g300)':'var(--g400)' }}>({count})</span>
228                 </div>
229               ))}
230             </div>
231           </div>
232         ))}
233         <div style={{ padding: '14px 16px 20px', background: '#fff' }}>
234           <div style={{ height: 48, background: 'var(--g800)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
235             <span style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 600, color: '#fff' }}>تطبيق الفلاتر</span>
236             <span style={{ background: 'rgba(255,255,255,.2)', borderRadius: 10, padding: '2px 8px', fontFamily: 'var(--mono)', fontSize: 10, color: '#fff' }}>3 نشطة</span>
237           </div>
238         </div>
239       </div>
240     </div>
241   );
242 }
243 
244 export function MobileFilterFAB({ label = 'فلاتر', count = 0 }) {
245   return (
246     <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 16px 12px', position: 'sticky', bottom: 16, zIndex: 20 }}>
247       <div style={{ background: 'var(--g800)', color: '#fff', borderRadius: 24, padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 600, boxShadow: '0 4px 16px rgba(0,0,0,.2)' }}>
248         <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
249           {[14,10,6].map((w,i) => <div key={i} style={{ width: w, height: 2, background: '#fff', borderRadius: 1 }} />)}
250         </div>
251         {label}
252         {count > 0 && <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700 }}>{count}</div>}
253       </div>
254     </div>
255   );
256 }
257 
258 export function MobileWA() {
259   return <MobileLiveChat state="closed" />;
260 }
```

## File: `src\components\web\Navbar.jsx`

```jsx
1 import React from 'react';
2 
3 /*
4   Navbar — shared across all pages
5   Props:
6     variant:    'guest' | 'user' | 'minimal'   (default: 'guest')
7     activeLink: 'home' | 'destinations' | 'tours' | 'flights' | 'hotels' | 'blog' | 'contact'
8 */
9 
10 const NAV_LINKS = [
11   { id: 'home',         label: 'الرئيسية' },
12   { id: 'destinations', label: 'الوجهات' },
13   { id: 'tours',        label: 'رحلاتنا' },
14   { id: 'flights',      label: 'حجز طيران' },
15   { id: 'hotels',       label: 'حجز فنادق' },
16   { id: 'blog',         label: 'المدونة' },
17   { id: 'contact',      label: 'تواصل معنا' },
18 ];
19 
20 export default function Navbar({ variant = 'guest', activeLink = '' }) {
21   return (
22     <nav className="w-nav">
23       <div className="w-nav-logo" title="El-Eman Tourist" />
24 
25       {variant !== 'minimal' && (
26         <div className="w-nav-links">
27           {NAV_LINKS.map(({ id, label }) => (
28             <span key={id} className={`w-nav-link${activeLink === id ? ' on' : ''}`}>
29               {label}
30             </span>
31           ))}
32         </div>
33       )}
34 
35       {variant === 'minimal' && <div style={{ flex: 1 }} />}
36 
37       <div className="w-nav-actions">
38         <span className="w-nav-currency">EGP ▾</span>
39 
40         {variant === 'user' && (
41           <div className="w-nav-user">
42             <div className="w-nav-user-av" />
43             <div>
44               <div className="w-nav-user-name">أحمد محمد</div>
45               <div className="w-nav-points">⭐ 120 نقطة</div>
46             </div>
47           </div>
48         )}
49 
50         {(variant === 'guest' || variant === 'minimal') && (
51           <>
52             <span className="w-nav-btn ghost">تسجيل الدخول</span>
53             <span className="w-nav-btn solid">إنشاء حساب</span>
54           </>
55         )}
56       </div>
57     </nav>
58   );
59 }
```

## File: `src\components\web\WebFrame.jsx`

```jsx
1 import React from 'react';
2 
3 export default function WebFrame({ children, url = 'el-eman.com', breakpoint = 'Desktop — 1260px' }) {
4   return (
5     <div className="web-frame">
6       <div className="chrome-bar">
7         <div className="chrome-dots">
8           <div className="chrome-dot" />
9           <div className="chrome-dot" />
10           <div className="chrome-dot" />
11         </div>
12         <div className="chrome-url">{url}</div>
13         <div className="chrome-bp">{breakpoint}</div>
14       </div>
15       <div className="web-content">
16         {children}
17       </div>
18     </div>
19   );
20 }
```

## File: `src\lib\index.js`

```javascript
1 export { default as Phone } from './mobile/Phone.jsx';
2 export { default as StatusBar } from './mobile/StatusBar.jsx';
3 export { default as BottomNav } from './mobile/BottomNav.jsx';
4 
5 export { default as FCard } from './components/FCard.jsx';
6 export { default as ProgressBar } from './components/ProgressBar.jsx';
7 
8 export { default as BoardLayout } from './sections/BoardLayout.jsx';
9 export { default as BoardGroup } from './sections/BoardGroup.jsx';
10 export { default as BoardItem } from './sections/BoardItem.jsx';
11 
12 export { default as Section } from './sections/Section.jsx';
13 export { default as ScreenGrid } from './sections/ScreenGrid.jsx';
14 export { default as ScreenList } from './sections/ScreenList.jsx';
15 export { default as ScreenTile } from './sections/ScreenTile.jsx';
16 
17 export {
18   Box,
19   Button,
20   Column,
21   Content,
22   Divider,
23   Field,
24   Group,
25   IconButton,
26   Label,
27   MobileApp,
28   Positioned,
29   Row,
30   SkeletonBlock,
31   SkeletonLine,
32   Spacer,
33   Stack,
34   Text,
35   TopNav,
36   WebApp,
37 } from './widgets.jsx';
```

## File: `src\lib\widgets.jsx`

```jsx
1 import React from 'react';
2 import Phone from './mobile/Phone.jsx';
3 
4 function cx(...parts) {
5   return parts.filter(Boolean).join(' ');
6 }
7 
8 export function Box({ as = 'div', className, style, children, ...rest }) {
9   return React.createElement(as, { className, style, ...rest }, children);
10 }
11 
12 export function Content({ className, children, ...rest }) {
13   return (
14     <Box className={cx('content', className)} {...rest}>
15       {children}
16     </Box>
17   );
18 }
19 
20 export function Row({
21   className,
22   children,
23   align = 'center',
24   justify,
25   wrap = false,
26   gap,
27   style,
28   ...rest
29 }) {
30   const alignClass =
31     align === 'start' ? 'items-start' : align === 'end' ? 'items-end' : 'items-center';
32   const justifyClass = justify
33     ? justify === 'start'
34       ? 'justify-start'
35       : justify === 'end'
36         ? 'justify-end'
37         : justify === 'between'
38           ? 'justify-between'
39           : justify === 'around'
40             ? 'justify-around'
41             : justify === 'evenly'
42               ? 'justify-evenly'
43               : 'justify-center'
44     : '';
45 
46   return (
47     <Box
48       className={cx('flex flex-row', alignClass, justifyClass, wrap ? 'flex-wrap' : '', className)}
49       style={gap != null ? { ...style, gap } : style}
50       {...rest}
51     >
52       {children}
53     </Box>
54   );
55 }
56 
57 export function Column({
58   className,
59   children,
60   align = 'stretch',
61   justify,
62   gap,
63   style,
64   ...rest
65 }) {
66   const alignClass =
67     align === 'start'
68       ? 'items-start'
69       : align === 'end'
70         ? 'items-end'
71         : align === 'center'
72           ? 'items-center'
73           : 'items-stretch';
74   const justifyClass = justify
75     ? justify === 'start'
76       ? 'justify-start'
77       : justify === 'end'
78         ? 'justify-end'
79         : justify === 'between'
80           ? 'justify-between'
81           : justify === 'around'
82             ? 'justify-around'
83             : justify === 'evenly'
84               ? 'justify-evenly'
85               : 'justify-center'
86     : '';
87 
88   return (
89     <Box
90       className={cx('flex flex-col', alignClass, justifyClass, className)}
91       style={gap != null ? { ...style, gap } : style}
92       {...rest}
93     >
94       {children}
95     </Box>
96   );
97 }
98 
99 export function Stack({ className, children, ...rest }) {
100   return (
101     <Box className={cx('relative', className)} {...rest}>
102       {children}
103     </Box>
104   );
105 }
106 
107 export function Positioned({ className, children, style, top, right, bottom, left, ...rest }) {
108   return (
109     <Box
110       className={cx('absolute', className)}
111       style={{ ...style, top, right, bottom, left }}
112       {...rest}
113     >
114       {children}
115     </Box>
116   );
117 }
118 
119 export function Spacer({ size = 12, vertical = true }) {
120   const style = vertical ? { height: size } : { width: size };
121   return <Box style={style} aria-hidden="true" />;
122 }
123 
124 export function Divider({ className, ...rest }) {
125   return <Box as="hr" className={cx('border-0 border-t border-[var(--g200)]', className)} {...rest} />;
126 }
127 
128 export function TopNav({ title, left, right, className, ...rest }) {
129   return (
130     <Box className={cx('topnav', className)} {...rest}>
131       {left ?? <IconButton />}
132       <Box className="topnav-title">{title}</Box>
133       {right ?? <Box className="w-[32px]" />}
134     </Box>
135   );
136 }
137 
138 export function IconButton({ round = false, className, ...rest }) {
139   return <Box className={cx('tn-btn', round ? 'round' : '', className)} {...rest} />;
140 }
141 
142 export function Label({ className, children, ...rest }) {
143   return (
144     <Box className={cx('inp-lbl', className)} {...rest}>
145       {children}
146     </Box>
147   );
148 }
149 
150 export function Field({ className, children, ...rest }) {
151   return (
152     <Box className={cx('inp-field', className)} {...rest}>
153       {children}
154     </Box>
155   );
156 }
157 
158 export function Group({ className, children, ...rest }) {
159   return (
160     <Box className={cx('inp-group', className)} {...rest}>
161       {children}
162     </Box>
163   );
164 }
165 
166 export function Button({ variant = 'cta', className, children, as = 'button', ...rest }) {
167   const base =
168     variant === 'primary'
169       ? 'btn-primary'
170       : variant === 'ghost'
171         ? 'btn-ghost'
172         : variant === 'danger'
173           ? 'btn-danger'
174           : 'btn-cta';
175 
176   const isButton = as === 'button';
177 
178   return React.createElement(
179     as,
180     { className: cx(base, className), type: isButton ? 'button' : undefined, ...rest },
181     children,
182   );
183 }
184 
185 export function Text({ as = 'div', className, children, ...rest }) {
186   return React.createElement(as, { className, ...rest }, children);
187 }
188 
189 export function SkeletonLine({ className, ...rest }) {
190   return <Box className={cx('tl', className)} {...rest} />;
191 }
192 
193 export function SkeletonBlock({ className, ...rest }) {
194   return <Box className={cx('tl', className)} {...rest} />;
195 }
196 
197 export function MobileApp({ showStatusBar = true, className, children, ...rest }) {
198   return (
199     <Phone showStatusBar={showStatusBar} className={cx('wf-mobileapp', className)} {...rest}>
200       {children}
201     </Phone>
202   );
203 }
204 
205 export function WebApp({ className, children, ...rest }) {
206   return (
207     <Box className={cx('wf-webapp', className)} {...rest}>
208       {children}
209     </Box>
210   );
211 }
```

## File: `src\lib\components\FCard.jsx`

```jsx
1 import React from 'react';
2 
3 export default function FCard({
4   name,
5   price,
6   rating,
7   imgBg,
8   address,
9   format,
10   players,
11   className,
12 }) {
13   const gameFormat = format || players;
14   const hasDetails = Boolean(address) || Boolean(gameFormat);
15 
16   return (
17     <div className={['fcard', className].filter(Boolean).join(' ')}>
18       <div className="fcard-img" style={imgBg ? { background: imgBg } : {}}>
19         [Content Image]
20         <div className="fcard-img-badge">⭐ {rating || '4.8'}</div>
21       </div>
22       <div className="fcard-body">
23         <div className="fcard-top">
24           <div className="fcard-name">{name}</div>
25           <div className="fcard-price">{price || '150 ج/ساعة'}</div>
26         </div>
27         {hasDetails ? (
28           <div className="fcard-details">
29             <div className="fcard-address">{address}</div>
30             <div className="fcard-format">{gameFormat ? `نظام اللعب: ${gameFormat}` : ''}</div>
31           </div>
32         ) : (
33           <div className="fcard-meta">
34             <div className="mbar" style={{ width: '80px' }}></div>
35             <div className="mbar" style={{ width: '55px' }}></div>
36             <div className="mbar" style={{ width: '38px' }}></div>
37           </div>
38         )}
39         <div className="btn-primary">احجز</div>
40       </div>
41     </div>
42   );
43 }
```

## File: `src\lib\components\ProgressBar.jsx`

```jsx
1 import React from 'react';
2 
3 export default function ProgressBar({ step, total = 4, className }) {
4   return (
5     <div className={['prog-wrap', className].filter(Boolean).join(' ')}>
6       <div className="prog-top">
7         <div className="prog-lbl">الخطوة {step} من {total}</div>
8         <div className="prog-lbl">{Math.round((step / total) * 100)}%</div>
9       </div>
10       <div className="prog-bg">
11         <div className="prog-fill" style={{ width: `${(step / total) * 100}%` }}></div>
12       </div>
13     </div>
14   );
15 }
```

## File: `src\lib\mobile\BottomNav.jsx`

```jsx
1 import React from 'react';
2 
3 const PLAYER_TABS = ['الرئيسية', 'استكشف', 'حجوزاتي', 'حسابي'];
4 const OWNER_TABS = ['الرئيسية', 'التقويم', 'الحجوزات', 'الإعدادات'];
5 
6 export default function BottomNav({
7   activeIndex = 0,
8   variant = 'player',
9   tabs,
10   className,
11 }) {
12   const resolvedTabs = tabs ?? (variant === 'owner' ? OWNER_TABS : PLAYER_TABS);
13 
14   return (
15     <div className={['bnav', className].filter(Boolean).join(' ')}>
16       {resolvedTabs.map((label, i) => (
17         <div key={`${label}-${i}`} className={`bni${i === activeIndex ? ' on' : ''}`}>
18           <div className={`bni-bar${i === activeIndex ? ' on' : ''}`}></div>
19           <div className="bni-dot"></div>
20           <div className={`bni-lbl${i === activeIndex ? ' on' : ''}`}>{label}</div>
21         </div>
22       ))}
23     </div>
24   );
25 }
```

## File: `src\lib\mobile\Phone.jsx`

```jsx
1 import React from 'react';
2 import StatusBar from './StatusBar.jsx';
3 
4 export default function Phone({ children, showStatusBar = true, className }) {
5   return (
6     <div className={['phone', className].filter(Boolean).join(' ')}>
7       {showStatusBar && <StatusBar />}
8       {children}
9     </div>
10   );
11 }
```

## File: `src\lib\mobile\StatusBar.jsx`

```jsx
1 import React from 'react';
2 
3 export default function StatusBar({ className }) {
4   return (
5     <div className={['sb', className].filter(Boolean).join(' ')}>
6       <div className="sb-time">9:41</div>
7       <div className="sb-icons">
8         <div className="sb-dot sm"></div>
9         <div className="sb-dot sm"></div>
10         <div className="sb-dot"></div>
11       </div>
12     </div>
13   );
14 }
```

## File: `src\lib\sections\BoardGroup.jsx`

```jsx
1 import React from 'react';
2 
3 export default function BoardGroup({ title, count, subtitle, children, className }) {
4   return (
5     <div className={['board-group', className].filter(Boolean).join(' ')}>
6       <div className="board-group-header">
7         <div className="board-group-title">{title}</div>
8         <div className="board-group-subtitle">{subtitle ? subtitle : `${count} Screens`}</div>
9       </div>
10       <div className="board-grid">
11         {children}
12       </div>
13     </div>
14   );
15 }
```

## File: `src\lib\sections\BoardItem.jsx`

```jsx
1 import React from 'react';
2 
3 export default function BoardItem({ id, name, children, className }) {
4   return (
5     <div className={['board-item', className].filter(Boolean).join(' ')}>
6       <div className="board-item-id">{id}</div>
7       {children}
8       <div className="board-item-name">{name}</div>
9     </div>
10   );
11 }
```

## File: `src\lib\sections\BoardLayout.jsx`

```jsx
1 import React from 'react';
2 
3 export default function BoardLayout({ children, className }) {
4   return (
5     <div className={['board-layout', className].filter(Boolean).join(' ')}>
6       {children}
7     </div>
8   );
9 }
```

## File: `src\lib\sections\ScreenGrid.jsx`

```jsx
1 import React from 'react';
2 
3 export default function ScreenGrid({ children, className }) {
4   return (
5     <div className={['board-grid', className].filter(Boolean).join(' ')}>
6       {children}
7     </div>
8   );
9 }
```

## File: `src\lib\sections\ScreenList.jsx`

```jsx
1 import React from 'react';
2 
3 export default function ScreenList({ children, className }) {
4   return (
5     <div className={['flex flex-col gap-10 items-start', className].filter(Boolean).join(' ')}>
6       {children}
7     </div>
8   );
9 }
```

## File: `src\lib\sections\ScreenTile.jsx`

```jsx
1 import React from 'react';
2 
3 export default function ScreenTile({
4   id,
5   name,
6   type = 'mobile',
7   breakpoints,
8   children,
9   className,
10 }) {
11   const resolvedBreakpoints = breakpoints ?? (type === 'web' ? ['desktop', 'tablet', 'mobile'] : []);
12   const renderFor = (breakpoint) =>
13     typeof children === 'function' ? children({ type, breakpoint }) : children;
14 
15   return (
16     <div className={['board-item', className].filter(Boolean).join(' ')}>
17       <div className="board-item-name">{name}</div>
18       {type === 'web' ? (
19         <div className="wf-previews-bg">
20           <div className="wf-previews">
21             {resolvedBreakpoints.map((bp) => (
22               <div key={bp} className="wf-preview">
23                 <div className="wf-preview-label">{bp}</div>
24                 <div className="wf-preview-frame" data-bp={bp}>
25                   {renderFor(bp)}
26                 </div>
27               </div>
28             ))}
29           </div>
30         </div>
31       ) : (
32         children
33       )}
34       <div className="board-item-id">{id}</div>
35     </div>
36   );
37 }
```

## File: `src\lib\sections\Section.jsx`

```jsx
1 import React from 'react';
2 
3 export default function Section({ title, subtitle, count, children, className }) {
4   const resolvedCount = count ?? React.Children.toArray(children).length;
5   const resolvedSubtitle = subtitle ?? (resolvedCount ? `${resolvedCount} Screens` : undefined);
6 
7   return (
8     <div className={['board-group', className].filter(Boolean).join(' ')}>
9       <div className="board-group-header">
10         <div className="board-group-title">{title}</div>
11         {resolvedSubtitle ? <div className="board-group-subtitle">{resolvedSubtitle}</div> : null}
12       </div>
13       {children}
14     </div>
15   );
16 }
```

## File: `src\screens\mobile\M_HardScreens.jsx`

```jsx
1 import React from 'react';
2 import {
3   MobileNavbar,
4   MobileFooter,
5 } from '../../components/web/MobileFrame';
6 
7 /* ════════════════════════════════════════════════════
8    SHARED MOBILE COMPONENTS
9 ════════════════════════════════════════════════════ */
10 
11 function MobileStatusBar() {
12   return (
13     <div className="sb">
14       <div className="sb-time">9:41</div>
15       <div className="sb-icons">
16         <div className="sb-dot sm" />
17         <div className="sb-dot sm" />
18         <div className="sb-dot" />
19       </div>
20     </div>
21   );
22 }
23 
24 function MobileAppHeader({ showBack = false, title = '' }) {
25   return (
26     <div style={{
27       background: 'var(--g900)',
28       padding: '0 16px',
29       height: 52,
30       display: 'flex',
31       alignItems: 'center',
32       justifyContent: 'space-between',
33       flexShrink: 0,
34       gap: 10,
35     }}>
36       {showBack ? (
37         <div style={{
38           width: 32, height: 32, borderRadius: 8,
39           background: 'rgba(255,255,255,.1)',
40           border: '1px solid rgba(255,255,255,.1)',
41           display: 'flex', alignItems: 'center', justifyContent: 'center',
42           fontFamily: 'var(--mono)', fontSize: 13, color: '#fff', flexShrink: 0,
43         }}>←</div>
44       ) : (
45         <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
46           <div style={{
47             width: 28, height: 28, borderRadius: 8,
48             background: 'rgba(255,255,255,.1)',
49             border: '1px solid rgba(255,255,255,.12)',
50             display: 'flex', alignItems: 'center', justifyContent: 'center',
51             fontSize: 13,
52           }}>☪</div>
53           <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>القيم الإسلامية</div>
54         </div>
55       )}
56 
57       {title && (
58         <div style={{
59           fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 600,
60           color: '#fff', flex: 1, textAlign: 'center',
61         }}>{title}</div>
62       )}
63 
64       <div style={{
65         width: 28, height: 28, borderRadius: '50%',
66         background: 'var(--g600)',
67         display: 'flex', alignItems: 'center', justifyContent: 'center',
68         fontFamily: 'var(--mono)', fontSize: 9, color: '#fff', flexShrink: 0,
69       }}>أح</div>
70     </div>
71   );
72 }
73 
74 /* ════════════════════════════════════════════════════
75    M01 — شاشة الموضوعات (Mobile)
76 ════════════════════════════════════════════════════ */
77 export function M01_TopicsScreen() {
78   const topics = [
79     {
80       id: 'kadhm', title: 'كظم الغيظ', subtitle: 'فن السيطرة على النفس',
81       tag: 'أخلاق', duration: '٨ دق', accent: 'var(--g700)', icon: '🔥',
82     },
83     {
84       id: 'taawun', title: 'التعاون', subtitle: 'قوة الجماعة المؤمنة',
85       tag: 'مجتمع', duration: '١١ دق', accent: 'var(--g600)', icon: '🤝',
86     },
87     {
88       id: 'hifz', title: 'حفظ اللسان', subtitle: 'الكلمة أمانة وأثر',
89       tag: 'أخلاق', duration: '٩ دق', accent: 'var(--g500)', icon: '🔒',
90     },
91   ];
92 
93   return (
94     <div style={{ background: 'var(--g100)', display: 'flex', flexDirection: 'column' }}>
95       <MobileStatusBar />
96       <MobileAppHeader />
97 
98       {/* Scrollable content */}
99       <div className="content" style={{ background: 'var(--g100)' }}>
100         {/* Hero section */}
101         <div style={{
102           background: 'var(--g900)',
103           padding: '20px 16px 24px',
104           position: 'relative',
105           overflow: 'hidden',
106         }}>
107           {/* Decorative circles */}
108           <div style={{
109             position: 'absolute', top: -40, right: -40,
110             width: 160, height: 160, borderRadius: '50%',
111             border: '1px solid rgba(255,255,255,.05)',
112           }} />
113           <div style={{
114             position: 'absolute', top: 10, right: 10,
115             width: 100, height: 100, borderRadius: '50%',
116             border: '1px solid rgba(255,255,255,.05)',
117           }} />
118 
119           {/* Badge */}
120           <div style={{
121             display: 'inline-flex', alignItems: 'center', gap: 6,
122             background: 'rgba(255,255,255,.07)',
123             border: '1px solid rgba(255,255,255,.1)',
124             borderRadius: 20, padding: '4px 10px', marginBottom: 12,
125           }}>
126             <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,.5)' }} />
127             <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.6)', letterSpacing: '.06em' }}>٣ موضوعات · سلسلة تعليمية</span>
128           </div>
129 
130           <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', lineHeight: 1.35, marginBottom: 8 }}>
131             رحلة في<br />
132             <span style={{ color: 'rgba(255,255,255,.5)' }}>أخلاق الإسلام</span>
133           </div>
134           <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,.4)', lineHeight: 1.7, marginBottom: 18 }}>
135             اختر موضوعاً وانطلق في رحلة قصيرة مع قصص من القرآن والسنة.
136           </div>
137 
138           {/* Stats row */}
139           <div style={{ display: 'flex', gap: 16 }}>
140             {[['٣', 'حلقات'], ['٢٨ دق', 'مجموع الوقت']].map(([v, l], i) => (
141               <div key={i}>
142                 <div style={{ fontFamily: 'var(--mono)', fontSize: 15, fontWeight: 700, color: '#fff' }}>{v}</div>
143                 <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{l}</div>
144               </div>
145             ))}
146           </div>
147         </div>
148 
149         {/* Section label */}
150         <div style={{ padding: '16px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
151           <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)', textTransform: 'uppercase', letterSpacing: '.1em' }}>اختر موضوعاً</div>
152           <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)' }}>انقر للمشاهدة</div>
153         </div>
154 
155         {/* Topics list */}
156         <div style={{ padding: '0 12px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
157           {topics.map((topic, idx) => (
158             <div key={topic.id} style={{
159               background: '#fff',
160               borderRadius: 16,
161               border: `1.5px solid ${idx === 0 ? 'var(--g500)' : 'var(--g200)'}`,
162               overflow: 'hidden',
163               boxShadow: idx === 0 ? '0 4px 20px rgba(0,0,0,.08)' : 'none',
164             }}>
165               {/* Image area */}
166               <div style={{
167                 height: 110,
168                 background: idx === 0 ? 'var(--g200)' : 'var(--g100)',
169                 display: 'flex',
170                 alignItems: 'center',
171                 justifyContent: 'center',
172                 borderBottom: '1px solid var(--g200)',
173                 position: 'relative',
174               }}>
175                 {idx === 0 && (
176                   <div style={{
177                     position: 'absolute', top: 10, left: 10,
178                     background: 'var(--g800)', color: '#fff',
179                     fontFamily: 'var(--mono)', fontSize: 8,
180                     padding: '2px 8px', borderRadius: 8,
181                   }}>مميّز</div>
182                 )}
183                 {/* Decorative circles */}
184                 <div style={{ position: 'absolute', width: 90, height: 90, borderRadius: '50%', border: '1px solid var(--g200)' }} />
185                 <div style={{ position: 'absolute', width: 64, height: 64, borderRadius: '50%', border: '1px solid var(--g300)' }} />
186                 <div style={{ fontSize: 30, position: 'relative', zIndex: 2 }}>{topic.icon}</div>
187               </div>
188 
189               {/* Content */}
190               <div style={{ padding: '14px 16px' }}>
191                 {/* Tags */}
192                 <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
193                   <div style={{
194                     padding: '2px 8px', borderRadius: 20,
195                     border: '1px solid var(--g200)', background: 'var(--g100)',
196                     fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g500)',
197                   }}>{topic.tag}</div>
198                   <div style={{
199                     padding: '2px 8px', borderRadius: 20,
200                     border: '1px solid var(--g200)', background: 'var(--g100)',
201                     fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g500)',
202                     display: 'flex', alignItems: 'center', gap: 3,
203                   }}>
204                     <span style={{ fontSize: 7 }}>▶</span> {topic.duration}
205                   </div>
206                 </div>
207 
208                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
209                   <div>
210                     <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--g900)', marginBottom: 2 }}>{topic.title}</div>
211                     <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>{topic.subtitle}</div>
212                   </div>
213 
214                   {/* CTA */}
215                   <div style={{
216                     width: 40, height: 40, borderRadius: '50%',
217                     background: idx === 0 ? 'var(--g800)' : 'var(--g200)',
218                     display: 'flex', alignItems: 'center', justifyContent: 'center',
219                     flexShrink: 0,
220                   }}>
221                     <div style={{
222                       width: 0, height: 0,
223                       borderTop: '7px solid transparent',
224                       borderBottom: '7px solid transparent',
225                       borderLeft: `10px solid ${idx === 0 ? '#fff' : 'var(--g600)'}`,
226                       marginRight: -3,
227                     }} />
228                   </div>
229                 </div>
230               </div>
231             </div>
232           ))}
233         </div>
234 
235         {/* Info note */}
236         <div style={{
237           margin: '0 12px 24px',
238           padding: '12px 14px',
239           background: '#fff',
240           border: '1px solid var(--g200)',
241           borderRadius: 12,
242           display: 'flex', gap: 10, alignItems: 'flex-start',
243         }}>
244           <div style={{ fontSize: 18, flexShrink: 0 }}>📖</div>
245           <div>
246             <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--g800)', marginBottom: 2 }}>الهدف من السلسلة</div>
247             <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)', lineHeight: 1.6 }}>
248               قصص واقعية وفيديوهات مُبسّطة — مناسبة لجميع الأعمار.
249             </div>
250           </div>
251         </div>
252       </div>
253 
254       {/* Bottom nav */}
255       <div className="bnav">
256         {['الرئيسية', 'الموضوعات', 'حسابي'].map((label, i) => (
257           <div key={i} className={`bni${i === 1 ? ' on' : ''}`}>
258             <div className={`bni-bar${i === 1 ? ' on' : ''}`} />
259             <div className="bni-dot" />
260             <div className={`bni-lbl${i === 1 ? ' on' : ''}`}>{label}</div>
261           </div>
262         ))}
263       </div>
264     </div>
265   );
266 }
267 
268 /* ════════════════════════════════════════════════════
269    M02 — شاشة الفيديو (Mobile)
270 ════════════════════════════════════════════════════ */
271 export function M02_VideoScreen() {
272   const chapters = [
273     { time: '0:00', title: 'المقدمة والتعريف', active: true },
274     { time: '1:45', title: 'قصة من السيرة النبوية', active: false },
275     { time: '4:10', title: 'الآيات والأحاديث', active: false },
276     { time: '6:00', title: 'كيف تطبّقها في حياتك؟', active: false },
277   ];
278 
279   return (
280     <div style={{ background: 'var(--g100)', display: 'flex', flexDirection: 'column' }}>
281       <MobileStatusBar />
282       <MobileAppHeader showBack title="كظم الغيظ" />
283 
284       <div className="content" style={{ background: 'var(--g100)' }}>
285         {/* VIDEO PLAYER */}
286         <div style={{
287           width: '100%',
288           aspectRatio: '16 / 9',
289           background: 'var(--g800)',
290           position: 'relative',
291           overflow: 'hidden',
292         }}>
293           {/* Gradient bg */}
294           <div style={{
295             position: 'absolute', inset: 0,
296             background: 'linear-gradient(135deg, var(--g700), var(--g900))',
297           }} />
298 
299           {/* Decorative rings */}
300           <div style={{
301             position: 'absolute', top: '50%', left: '50%',
302             transform: 'translate(-50%,-50%)',
303             width: 130, height: 130, borderRadius: '50%',
304             border: '1px solid rgba(255,255,255,.06)',
305           }} />
306           <div style={{
307             position: 'absolute', top: '50%', left: '50%',
308             transform: 'translate(-50%,-50%)',
309             width: 90, height: 90, borderRadius: '50%',
310             border: '1px solid rgba(255,255,255,.08)',
311           }} />
312 
313           {/* Episode label */}
314           <div style={{
315             position: 'absolute', top: 8, right: 10,
316             background: 'rgba(0,0,0,.4)',
317             border: '1px solid rgba(255,255,255,.1)',
318             borderRadius: 5,
319             padding: '3px 8px',
320             fontFamily: 'var(--mono)', fontSize: 8, color: '#fff',
321           }}>حلقة ١ من ٣</div>
322 
323           {/* Play button */}
324           <div style={{
325             position: 'absolute', top: '50%', left: '50%',
326             transform: 'translate(-50%,-50%)',
327             width: 52, height: 52, borderRadius: '50%',
328             background: 'rgba(255,255,255,.9)',
329             display: 'flex', alignItems: 'center', justifyContent: 'center',
330             boxShadow: '0 4px 20px rgba(0,0,0,.3)',
331             zIndex: 2,
332           }}>
333             <div style={{
334               width: 0, height: 0,
335               borderTop: '10px solid transparent',
336               borderBottom: '10px solid transparent',
337               borderLeft: '16px solid var(--g800)',
338               marginRight: -3,
339             }} />
340           </div>
341 
342           {/* Bottom overlay */}
343           <div style={{
344             position: 'absolute', bottom: 0, left: 0, right: 0,
345             padding: '20px 12px 8px',
346             background: 'linear-gradient(to top, rgba(0,0,0,.75), transparent)',
347           }}>
348             <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 2 }}>كظم الغيظ</div>
349             <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.6)' }}>٨ دقائق</div>
350           </div>
351         </div>
352 
353         {/* Controls */}
354         <div style={{
355           background: 'var(--g900)',
356           padding: '8px 12px',
357           display: 'flex',
358           alignItems: 'center',
359           gap: 10,
360         }}>
361           <div style={{
362             width: 30, height: 30, borderRadius: '50%',
363             background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
364           }}>
365             <div style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '9px solid var(--g800)', marginRight: -2 }} />
366           </div>
367           <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.6)', flexShrink: 0 }}>0:22 / 8:00</div>
368           <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,.15)', borderRadius: 2, position: 'relative' }}>
369             <div style={{ width: '4.5%', height: '100%', background: '#fff', borderRadius: 2 }} />
370           </div>
371           <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,.5)', flexShrink: 0 }}>⛶</div>
372         </div>
373 
374         {/* Title + tags */}
375         <div style={{ background: '#fff', padding: '16px 14px', borderBottom: '1px solid var(--g200)' }}>
376           <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--g900)', marginBottom: 8, lineHeight: 1.35 }}>
377             كظم الغيظ — فن السيطرة على النفس
378           </div>
379           <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
380             {['أخلاق · نفس', '٨ دقائق', 'الحلقة ١ من ٣'].map((tag, i) => (
381               <div key={i} style={{
382                 padding: '3px 10px', borderRadius: 20,
383                 border: '1px solid var(--g200)', background: 'var(--g100)',
384                 fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)',
385               }}>{tag}</div>
386             ))}
387           </div>
388           <div style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--g600)', lineHeight: 1.75 }}>
389             رحلة مع مفهوم كظم الغيظ في الإسلام — قصص من السيرة وآيات قرآنية كريمة.
390           </div>
391         </div>
392 
393         {/* Ayah */}
394         <div style={{
395           margin: '12px 12px 0',
396           padding: '12px 14px',
397           background: 'var(--g100)',
398           border: '1.5px dashed var(--g300)',
399           borderRadius: 12,
400         }}>
401           <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g400)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 6 }}>آية قرآنية</div>
402           <div style={{ fontSize: 13, color: 'var(--g800)', fontWeight: 500, lineHeight: 1.8, textAlign: 'right', direction: 'rtl' }}>
403             ﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ﴾
404           </div>
405           <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)', marginTop: 4 }}>آل عمران · ١٣٤</div>
406         </div>
407 
408         {/* Chapters */}
409         <div style={{ padding: '16px 12px 4px' }}>
410           <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>فصول الفيديو</div>
411           <div style={{ background: '#fff', border: '1.5px solid var(--g200)', borderRadius: 12, overflow: 'hidden' }}>
412             {chapters.map((ch, i) => (
413               <div key={i} style={{
414                 display: 'flex', alignItems: 'center', gap: 10,
415                 padding: '11px 14px',
416                 borderBottom: i < chapters.length - 1 ? '1px solid var(--g100)' : 'none',
417                 background: ch.active ? 'var(--g100)' : '#fff',
418                 borderRight: ch.active ? '3px solid var(--g700)' : '3px solid transparent',
419               }}>
420                 <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', width: 32, flexShrink: 0 }}>{ch.time}</div>
421                 <div style={{
422                   width: 20, height: 20, borderRadius: '50%',
423                   background: ch.active ? 'var(--g800)' : 'var(--g200)',
424                   display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
425                 }}>
426                   {ch.active
427                     ? <span style={{ fontSize: 7, color: '#fff' }}>▶</span>
428                     : <span style={{ fontFamily: 'var(--mono)', fontSize: 7, color: 'var(--g500)' }}>{i + 1}</span>}
429                 </div>
430                 <div style={{ fontSize: 11, color: ch.active ? 'var(--g800)' : 'var(--g600)', fontWeight: ch.active ? 600 : 400, flex: 1 }}>{ch.title}</div>
431                 {ch.active && (
432                   <div style={{
433                     padding: '1px 6px', borderRadius: 8,
434                     background: 'var(--g800)', fontFamily: 'var(--mono)', fontSize: 7, color: '#fff',
435                   }}>الآن</div>
436                 )}
437               </div>
438             ))}
439           </div>
440         </div>
441 
442         {/* Progress / Next episodes */}
443         <div style={{ padding: '16px 12px' }}>
444           <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>تقدّمك في السلسلة</div>
445 
446           {/* Progress bar */}
447           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
448             <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)' }}>اكتملت ١ من ٣ حلقات</div>
449             <div style={{ fontFamily: 'var(--mono)', fontSize: 9, fontWeight: 600, color: 'var(--g700)' }}>٣٣٪</div>
450           </div>
451           <div style={{ height: 4, background: 'var(--g200)', borderRadius: 2, overflow: 'hidden', marginBottom: 14 }}>
452             <div style={{ width: '33%', height: '100%', background: 'var(--g700)', borderRadius: 2 }} />
453           </div>
454 
455           {/* Episode list */}
456           <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
457             {[
458               { title: 'كظم الغيظ', num: '١', status: 'current' },
459               { title: 'التعاون', num: '٢', status: 'locked' },
460               { title: 'حفظ اللسان', num: '٣', status: 'locked' },
461             ].map((ep, i) => (
462               <div key={i} style={{
463                 display: 'flex', alignItems: 'center', gap: 10,
464                 padding: '10px 12px', borderRadius: 10,
465                 border: `1.5px solid ${ep.status === 'current' ? 'var(--g700)' : 'var(--g200)'}`,
466                 background: ep.status === 'current' ? 'var(--g800)' : '#fff',
467               }}>
468                 <div style={{
469                   width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
470                   background: ep.status === 'current' ? 'rgba(255,255,255,.15)' : 'var(--g200)',
471                   display: 'flex', alignItems: 'center', justifyContent: 'center',
472                   fontFamily: 'var(--mono)', fontSize: 9,
473                   color: ep.status === 'current' ? '#fff' : 'var(--g500)',
474                 }}>{ep.num}</div>
475                 <div style={{
476                   fontSize: 12, flex: 1, fontWeight: 500,
477                   color: ep.status === 'current' ? '#fff' : 'var(--g600)',
478                 }}>{ep.title}</div>
479                 <div style={{
480                   fontFamily: 'var(--mono)', fontSize: 9,
481                   color: ep.status === 'current' ? 'rgba(255,255,255,.5)' : 'var(--g400)',
482                 }}>
483                   {ep.status === 'current' ? '▶ تشاهد' : '🔒'}
484                 </div>
485               </div>
486             ))}
487           </div>
488         </div>
489 
490         {/* Hadith card */}
491         <div style={{
492           margin: '0 12px 24px',
493           padding: '14px',
494           background: 'var(--g900)',
495           borderRadius: 14,
496           textAlign: 'right',
497         }}>
498           <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'rgba(255,255,255,.3)', letterSpacing: '.08em', marginBottom: 8 }}>الحديث النبوي الشريف</div>
499           <div style={{ fontSize: 12, color: 'rgba(255,255,255,.8)', lineHeight: 1.8, direction: 'rtl' }}>
500             «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الغَضَبِ»
501           </div>
502           <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'rgba(255,255,255,.3)', marginTop: 6 }}>رواه البخاري ومسلم</div>
503         </div>
504       </div>
505 
506       {/* Bottom nav */}
507       <div className="bnav">
508         {['الرئيسية', 'الموضوعات', 'حسابي'].map((label, i) => (
509           <div key={i} className={`bni${i === 1 ? ' on' : ''}`}>
510             <div className={`bni-bar${i === 1 ? ' on' : ''}`} />
511             <div className="bni-dot" />
512             <div className={`bni-lbl${i === 1 ? ' on' : ''}`}>{label}</div>
513           </div>
514         ))}
515       </div>
516     </div>
517   );
518 }
```

## File: `src\screens\user\W01_HomePage.jsx`

```jsx
1 import React from 'react';
2 import LiveChat from '../../components/web/LiveChat';
3 import Navbar from '../../components/web/Navbar';
4 import Footer from '../../components/web/Footer';
5 
6 /* ─────────────────────────────────────────────────────
7    W01 — الصفحة الرئيسية
8    States: Guest (default shown) | User (navbar variant noted)
9    Breakpoints: Desktop 1260 → Tablet 768 → Mobile 375
10 ───────────────────────────────────────────────────── */
11 function Hero() {
12   return (
13     <div className="w-hero">
14       <div className="w-hero-overlay" />
15       <div className="w-hero-label">HERO BANNER — يُدار من CMS</div>
16       <div className="w-hero-content">
17         <div className="w-hero-title">اكتشف مصر .. ارسم رحلتك</div>
18         <div className="w-hero-sub">رحلات داخلية · عمرة · نايل كروز · برامج خاصة</div>
19         <div className="sp" />
20         {/* Search bar */}
21         <div className="w-search-bar">
22           <div className="w-search-field">
23             <div className="w-sf-lbl">الوجهة</div>
24             <div className="w-sf-val" style={{ width: '120px' }} />
25           </div>
26           <div className="w-search-field">
27             <div className="w-sf-lbl">تاريخ المغادرة</div>
28             <div className="w-sf-val" style={{ width: '90px' }} />
29           </div>
30           <div className="w-search-field">
31             <div className="w-sf-lbl">عدد المسافرين</div>
32             <div className="w-sf-val" style={{ width: '70px' }} />
33           </div>
34           <div className="w-search-field">
35             <div className="w-sf-lbl">الميزانية القصوى</div>
36             <div className="w-sf-val" style={{ width: '80px' }} />
37           </div>
38           <div className="w-search-btn">بحث</div>
39         </div>
40       </div>
41     </div>
42   );
43 }
44 
45 function CategoryChips() {
46   const cats = ['الكل', 'رحلات ترفيهية', 'رحلات دينية', 'رحلات ثقافية', 'نايل كروز', 'شهر عسل', 'رحلات عائلية'];
47   return (
48     <div className="w-container">
49       <div className="w-section-sm">
50         <div className="w-chips">
51           {cats.map((c, i) => (
52             <span key={i} className={`w-chip${i === 0 ? ' on' : ''}`}>{c}</span>
53           ))}
54         </div>
55       </div>
56     </div>
57   );
58 }
59 
60 function DestinationsSection() {
61   const dests = [
62     { name: 'شرم الشيخ', count: '12 رحلة' },
63     { name: 'الغردقة', count: '8 رحلات' },
64     { name: 'الأقصر', count: '5 رحلات' },
65     { name: 'أسوان', count: '4 رحلات' },
66     { name: 'القاهرة', count: '9 رحلات' },
67     { name: 'الإسكندرية', count: '6 رحلات' },
68   ];
69   return (
70     <div style={{ background: '#fff', padding: '40px 0' }}>
71       <div className="w-container">
72         <div className="w-sec-hdr">
73           <div>
74             <div className="w-sec-title">استكشف الوجهات</div>
75             <div className="w-sec-subtitle">اختر وجهتك وابدأ رحلتك</div>
76           </div>
77           <span className="w-sec-link">عرض الكل</span>
78         </div>
79         <div className="w-grid-3" style={{ gridTemplateColumns: 'repeat(6, 1fr)', gap: '14px' }}>
80           {dests.map((d, i) => (
81             <div key={i} className="w-dest-card" style={{ cursor: 'pointer' }}>
82               <div className="w-dest-img">[صورة]</div>
83               <div className="w-dest-overlay" />
84               <div className="w-dest-info">
85                 <div className="w-dest-name">{d.name}</div>
86                 <div className="w-dest-count">{d.count}</div>
87               </div>
88             </div>
89           ))}
90         </div>
91       </div>
92     </div>
93   );
94 }
95 
96 function FeaturedPackages() {
97   const tours = [
98     { name: 'رحلة شرم الشيخ الفاخرة', dest: 'شرم الشيخ', price: '8,500 ج', days: '5 أيام', type: 'ترفيهية', rating: 5 },
99     { name: 'برنامج عمرة رمضان', dest: 'مكة المكرمة', price: '35,000 ج', days: '10 أيام', type: 'دينية', rating: 5 },
100     { name: 'نايل كروز الأقصر وأسوان', dest: 'الأقصر — أسوان', price: '12,000 ج', days: '7 أيام', type: 'نايل كروز', rating: 4 },
101     { name: 'القاهرة الحضارة والتاريخ', dest: 'القاهرة', price: '4,200 ج', days: '3 أيام', type: 'ثقافية', rating: 4 },
102     { name: 'شهر عسل دهب', dest: 'دهب', price: '9,800 ج', days: '6 أيام', type: 'شهر عسل', rating: 5 },
103     { name: 'مرسى علم الغوص', dest: 'مرسى علم', price: '7,500 ج', days: '4 أيام', type: 'ترفيهية', rating: 4 },
104   ];
105   return (
106     <div className="w-container">
107       <div className="w-section">
108         <div className="w-sec-hdr">
109           <div>
110             <div className="w-sec-title">البرامج المميزة</div>
111             <div className="w-sec-subtitle">الأكثر حجزاً هذا الموسم</div>
112           </div>
113           <span className="w-sec-link">عرض الكل</span>
114         </div>
115         <div className="w-grid-3">
116           {tours.map((t, i) => (
117             <div key={i} className="w-tour-card">
118               <div className="w-tour-img">
119                 [صورة الرحلة]
120                 <div className="w-tour-badge">⭐ {t.rating}.0</div>
121                 <div className="w-tour-badge type">{t.type}</div>
122               </div>
123               <div className="w-tour-body">
124                 <div className="w-tour-name">{t.name}</div>
125                 <div className="w-tour-dest">📍 {t.dest}</div>
126                 <div className="w-tour-footer">
127                   <div>
128                     <div className="w-tour-price-lbl">يبدأ من</div>
129                     <div className="w-tour-price">{t.price}</div>
130                     <div className="w-tour-loyalty">⭐ +10 نقاط ولاء</div>
131                   </div>
132                   <div>
133                     <div className="w-tour-duration">{t.days}</div>
134                     <div className="sp-sm" />
135                     <div className="w-tour-cta">احجز الآن</div>
136                   </div>
137                 </div>
138               </div>
139             </div>
140           ))}
141         </div>
142       </div>
143     </div>
144   );
145 }
146 
147 function PromoSection() {
148   return (
149     <div style={{ background: '#fff', padding: '0 0 40px' }}>
150       <div className="w-container">
151         <div className="w-promo">
152           <div>
153             <div className="w-promo-title">عروض العمرة — موسم 1446</div>
154             <div className="w-promo-sub">برامج عمرة متكاملة بأسعار تنافسية · من 25,000 ج فقط</div>
155             <div className="w-promo-btn">اعرف أكثر</div>
156           </div>
157           <div className="w-promo-img" />
158         </div>
159       </div>
160     </div>
161   );
162 }
163 
164 function BlogSection() {
165   const articles = [
166     { cat: 'سياحة دينية', title: 'دليلك الشامل للعمرة: كل ما تحتاج معرفته' },
167     { cat: 'وجهات', title: 'أفضل 5 أماكن لقضاء الإجازة في شرم الشيخ' },
168     { cat: 'نصائح السفر', title: 'كيف تختار الرحلة المناسبة لشهر العسل؟' },
169     { cat: 'نايل كروز', title: 'تجربة نايل كروز: رحلة لا تُنسى بين الأقصر وأسوان' },
170   ];
171   return (
172     <div className="w-container">
173       <div className="w-section">
174         <div className="w-sec-hdr">
175           <div>
176             <div className="w-sec-title">مدونة السفر</div>
177             <div className="w-sec-subtitle">نصائح ووجهات وتجارب من الميدان</div>
178           </div>
179           <span className="w-sec-link">كل المقالات</span>
180         </div>
181         <div className="w-grid-4">
182           {articles.map((a, i) => (
183             <div key={i} className="w-blog-card">
184               <div className="w-blog-img">[صورة المقال]</div>
185               <div className="w-blog-body">
186                 <div className="w-blog-cat">{a.cat}</div>
187                 <div className="w-blog-title">{a.title}</div>
188                 <div className="w-tl w70" />
189               </div>
190             </div>
191           ))}
192         </div>
193       </div>
194     </div>
195   );
196 }
197 export default function W01_HomePage() {
198   return (
199     <>
200       {/* ── Guest State (default) ── */}
201       <Navbar variant="guest" activeLink="home" />
202       <Hero />
203       <CategoryChips />
204       <DestinationsSection />
205       <FeaturedPackages />
206       <PromoSection />
207       <BlogSection />
208       <Footer />
209       {/* WhatsApp floating */}
210       <LiveChat />
211     </>
212   );
213 }
```

## File: `src\screens\user\W01_TopicsScreen.jsx`

```jsx
1 import React from 'react';
2 
3 /* ─────────────────────────────────────────────────────
4    W01 — شاشة الموضوعات (اختر موضوعك)
5    Desktop 1260px
6 ───────────────────────────────────────────────────── */
7 
8 const TOPICS = [
9   {
10     id: 'kadhm',
11     title: 'كظم الغيظ',
12     subtitle: 'فن السيطرة على النفس',
13     desc: 'تعلّم كيف يُعلّمنا الإسلام ضبط النفس عند الغضب، وكيف يكون الحِلم طريقاً إلى الكمال الإنساني.',
14     tag: 'أخلاق · نفس',
15     duration: '٨ دقائق',
16     icon: (
17       <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width={80} height={80}>
18         <circle cx="40" cy="40" r="36" stroke="var(--g300)" strokeWidth="2" fill="var(--g100)" />
19         {/* flame shape — representing anger being extinguished */}
20         <path d="M40 55 C30 55 24 48 24 40 C24 32 30 28 34 24 C34 30 38 33 38 33 C38 33 36 26 42 20 C44 28 50 30 52 36 C54 42 50 50 40 55Z" fill="var(--g300)" stroke="var(--g400)" strokeWidth="1.5" strokeLinejoin="round"/>
21         {/* water drop overlay */}
22         <path d="M40 48 C36 48 33 45 33 42 C33 39 36 35 40 32 C44 35 47 39 47 42 C47 45 44 48 40 48Z" fill="var(--g500)" opacity="0.5"/>
23         {/* inner peaceful dot */}
24         <circle cx="40" cy="42" r="3" fill="var(--g600)"/>
25       </svg>
26     ),
27   },
28   {
29     id: 'taawun',
30     title: 'التعاون',
31     subtitle: 'قوة الجماعة المؤمنة',
32     desc: 'كيف يبني التعاون مجتمعاً متماسكاً، وما أثره العميق في حياة الفرد والأمة من منظور إسلامي.',
33     tag: 'مجتمع · قيم',
34     duration: '١١ دقيقة',
35     icon: (
36       <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width={80} height={80}>
37         <circle cx="40" cy="40" r="36" stroke="var(--g300)" strokeWidth="2" fill="var(--g100)" />
38         {/* Two hands meeting */}
39         <path d="M26 44 C26 44 24 40 26 37 C28 34 32 35 33 37 L36 43" stroke="var(--g500)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
40         <path d="M54 44 C54 44 56 40 54 37 C52 34 48 35 47 37 L44 43" stroke="var(--g500)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
41         {/* center clasp */}
42         <ellipse cx="40" cy="44" rx="5" ry="4" fill="var(--g400)" stroke="var(--g500)" strokeWidth="1.5"/>
43         <line x1="36" y1="44" x2="44" y2="44" stroke="var(--g600)" strokeWidth="1.5"/>
44         {/* people icons above */}
45         <circle cx="30" cy="28" r="5" fill="var(--g300)" stroke="var(--g400)" strokeWidth="1.5"/>
46         <circle cx="50" cy="28" r="5" fill="var(--g300)" stroke="var(--g400)" strokeWidth="1.5"/>
47         <path d="M24 36 Q30 32 36 36" stroke="var(--g400)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
48         <path d="M44 36 Q50 32 56 36" stroke="var(--g400)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
49       </svg>
50     ),
51   },
52   {
53     id: 'hifz',
54     title: 'حفظ اللسان',
55     subtitle: 'الكلمة أمانة وأثر',
56     desc: 'الكلمة الطيبة صدقة، والكلمة الجارحة جُرح. اكتشف حكمة الإسلام في آداب الكلام وحفظ اللسان.',
57     tag: 'أخلاق · كلام',
58     duration: '٩ دقائق',
59     icon: (
60       <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width={80} height={80}>
61         <circle cx="40" cy="40" r="36" stroke="var(--g300)" strokeWidth="2" fill="var(--g100)" />
62         {/* Speech bubble with lock */}
63         <path d="M22 28 Q22 22 28 22 L52 22 Q58 22 58 28 L58 42 Q58 48 52 48 L44 48 L40 54 L36 48 L28 48 Q22 48 22 42 Z" fill="var(--g200)" stroke="var(--g400)" strokeWidth="1.5"/>
64         {/* lock icon inside bubble */}
65         <rect x="34" y="31" width="12" height="10" rx="2" fill="var(--g500)" stroke="var(--g600)" strokeWidth="1.5"/>
66         <path d="M36 31 Q36 27 40 27 Q44 27 44 31" stroke="var(--g500)" strokeWidth="2" fill="none" strokeLinecap="round"/>
67         <circle cx="40" cy="36" r="1.5" fill="var(--g100)"/>
68       </svg>
69     ),
70   },
71 ];
72 
73 /* ── App Header ── */
74 function AppHeader() {
75   return (
76     <div style={{
77       background: 'var(--g900)',
78       borderBottom: '1px solid rgba(255,255,255,.06)',
79       padding: '0 40px',
80       height: 64,
81       display: 'flex',
82       alignItems: 'center',
83       justifyContent: 'space-between',
84       flexShrink: 0,
85     }}>
86       {/* Logo area */}
87       <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
88         <div style={{
89           width: 34,
90           height: 34,
91           borderRadius: 10,
92           background: 'rgba(255,255,255,.1)',
93           border: '1.5px solid rgba(255,255,255,.12)',
94           display: 'flex',
95           alignItems: 'center',
96           justifyContent: 'center',
97           fontSize: 16,
98         }}>☪</div>
99         <div>
100           <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '.01em' }}>القيم الإسلامية</div>
101           <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.35)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Islamic Values · Series</div>
102         </div>
103       </div>
104 
105       {/* Right nav */}
106       <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
107         {['الرئيسية', 'الموضوعات', 'عن المشروع'].map((l, i) => (
108           <div key={i} style={{
109             padding: '6px 14px',
110             fontFamily: 'var(--mono)',
111             fontSize: 11,
112             color: i === 1 ? '#fff' : 'rgba(255,255,255,.45)',
113             fontWeight: i === 1 ? 600 : 400,
114             borderRadius: 6,
115             background: i === 1 ? 'rgba(255,255,255,.08)' : 'transparent',
116           }}>{l}</div>
117         ))}
118         <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,.1)', margin: '0 6px' }} />
119         <div style={{
120           width: 32,
121           height: 32,
122           borderRadius: '50%',
123           background: 'var(--g600)',
124           border: '2px solid var(--g500)',
125           display: 'flex',
126           alignItems: 'center',
127           justifyContent: 'center',
128           fontFamily: 'var(--mono)',
129           fontSize: 9,
130           color: '#fff',
131         }}>أح</div>
132       </div>
133     </div>
134   );
135 }
136 
137 /* ── Hero Banner ── */
138 function Hero() {
139   return (
140     <div style={{
141       background: 'linear-gradient(135deg, var(--g800) 0%, var(--g700) 60%, var(--g600) 100%)',
142       padding: '52px 40px 48px',
143       position: 'relative',
144       overflow: 'hidden',
145     }}>
146       {/* Decorative geometric shapes */}
147       <div style={{
148         position: 'absolute', top: -40, right: -40,
149         width: 260, height: 260,
150         borderRadius: '50%',
151         border: '1px solid rgba(255,255,255,.06)',
152       }} />
153       <div style={{
154         position: 'absolute', top: 20, right: 20,
155         width: 160, height: 160,
156         borderRadius: '50%',
157         border: '1px solid rgba(255,255,255,.06)',
158       }} />
159       <div style={{
160         position: 'absolute', bottom: -60, left: 200,
161         width: 200, height: 200,
162         borderRadius: '50%',
163         border: '1px solid rgba(255,255,255,.04)',
164       }} />
165 
166       <div style={{ position: 'relative', zIndex: 2 }}>
167         {/* Eyebrow */}
168         <div style={{
169           display: 'inline-flex',
170           alignItems: 'center',
171           gap: 8,
172           background: 'rgba(255,255,255,.08)',
173           border: '1px solid rgba(255,255,255,.1)',
174           borderRadius: 20,
175           padding: '5px 14px',
176           marginBottom: 20,
177         }}>
178           <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,.6)' }} />
179           <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,.7)', letterSpacing: '.08em', textTransform: 'uppercase' }}>سلسلة قيم إسلامية · ٣ حلقات</span>
180         </div>
181 
182         <div style={{ fontSize: 36, fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: 10, maxWidth: 560 }}>
183           رحلة في<br />
184           <span style={{ color: 'rgba(255,255,255,.55)' }}>أخلاق الإسلام</span>
185         </div>
186         <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.7, maxWidth: 440, marginBottom: 28 }}>
187           اختر موضوعاً وانطلق في رحلة قصيرة مع قصص وأمثلة من القرآن والسنة النبوية.
188         </div>
189 
190         {/* Stats row */}
191         <div style={{ display: 'flex', gap: 28 }}>
192           {[['٣', 'موضوعات'], ['٢٨ دقيقة', 'مجموع الوقت'], ['القرآن · السنة', 'المصادر']].map(([v, l], i) => (
193             <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
194               <div style={{ fontFamily: 'var(--mono)', fontSize: 18, fontWeight: 700, color: '#fff' }}>{v}</div>
195               <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{l}</div>
196             </div>
197           ))}
198         </div>
199       </div>
200     </div>
201   );
202 }
203 
204 /* ── Topics Grid ── */
205 function TopicsGrid() {
206   return (
207     <div style={{ padding: '44px 40px 60px', background: 'var(--g100)' }}>
208       {/* Section header */}
209       <div style={{
210         display: 'flex',
211         alignItems: 'flex-end',
212         justifyContent: 'space-between',
213         marginBottom: 28,
214       }}>
215         <div>
216           <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 6 }}>اختر موضوعاً</div>
217           <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--g800)' }}>الموضوعات المتاحة</div>
218         </div>
219         <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--g500)', display: 'flex', alignItems: 'center', gap: 4 }}>
220           <div style={{ width: 16, height: 16, borderRadius: '50%', border: '1.5px solid var(--g300)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: 'var(--g500)' }}>ℹ</div>
221           انقر على الموضوع لمشاهدة الفيديو
222         </div>
223       </div>
224 
225       {/* Cards row */}
226       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
227         {TOPICS.map((topic, idx) => (
228           <TopicCard key={topic.id} topic={topic} index={idx} />
229         ))}
230       </div>
231 
232       {/* Footer note */}
233       <div style={{
234         marginTop: 40,
235         padding: '16px 20px',
236         background: '#fff',
237         border: '1.5px solid var(--g200)',
238         borderRadius: 12,
239         display: 'flex',
240         alignItems: 'center',
241         gap: 14,
242       }}>
243         <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--g200)', border: '1.5px solid var(--g300)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>📖</div>
244         <div>
245           <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--g800)', marginBottom: 2 }}>الهدف من السلسلة</div>
246           <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)', lineHeight: 1.6 }}>
247             رحلة تفاعلية قصيرة تُقدّم قيماً إسلامية من خلال قصص واقعية ومقاطع فيديو مُبسّطة — مناسبة لجميع الأعمار.
248           </div>
249         </div>
250       </div>
251     </div>
252   );
253 }
254 
255 function TopicCard({ topic, index }) {
256   const isFirst = index === 0;
257   return (
258     <div style={{
259       background: '#fff',
260       border: `1.5px solid ${isFirst ? 'var(--g600)' : 'var(--g200)'}`,
261       borderRadius: 20,
262       overflow: 'hidden',
263       cursor: 'pointer',
264       transition: 'box-shadow .2s',
265       boxShadow: isFirst ? '0 8px 32px rgba(0,0,0,.08)' : 'none',
266       position: 'relative',
267     }}>
268       {isFirst && (
269         <div style={{
270           position: 'absolute',
271           top: 14,
272           left: 14,
273           background: 'var(--g800)',
274           color: '#fff',
275           fontFamily: 'var(--mono)',
276           fontSize: 8,
277           fontWeight: 600,
278           padding: '3px 10px',
279           borderRadius: 10,
280           letterSpacing: '.06em',
281           textTransform: 'uppercase',
282         }}>مميّز</div>
283       )}
284 
285       {/* Icon zone */}
286       <div style={{
287         height: 160,
288         background: isFirst ? 'var(--g200)' : 'var(--g100)',
289         display: 'flex',
290         alignItems: 'center',
291         justifyContent: 'center',
292         borderBottom: '1px solid var(--g200)',
293         position: 'relative',
294       }}>
295         {/* Decorative circles */}
296         <div style={{ position: 'absolute', width: 120, height: 120, borderRadius: '50%', border: '1px solid var(--g200)' }} />
297         <div style={{ position: 'absolute', width: 90, height: 90, borderRadius: '50%', border: '1px solid var(--g300)' }} />
298         <div style={{ position: 'relative', zIndex: 2 }}>{topic.icon}</div>
299       </div>
300 
301       {/* Content */}
302       <div style={{ padding: '20px 22px' }}>
303         {/* Tags */}
304         <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
305           <div style={{
306             padding: '3px 10px',
307             borderRadius: 20,
308             border: '1px solid var(--g200)',
309             background: 'var(--g100)',
310             fontFamily: 'var(--mono)',
311             fontSize: 9,
312             color: 'var(--g500)',
313           }}>{topic.tag}</div>
314           <div style={{
315             padding: '3px 10px',
316             borderRadius: 20,
317             border: '1px solid var(--g200)',
318             background: 'var(--g100)',
319             fontFamily: 'var(--mono)',
320             fontSize: 9,
321             color: 'var(--g500)',
322             display: 'flex',
323             alignItems: 'center',
324             gap: 4,
325           }}>
326             <span style={{ fontSize: 8 }}>▶</span> {topic.duration}
327           </div>
328         </div>
329 
330         <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--g900)', marginBottom: 4, lineHeight: 1.3 }}>{topic.title}</div>
331         <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--g500)', marginBottom: 12 }}>{topic.subtitle}</div>
332         <div style={{ height: 1, background: 'var(--g200)', marginBottom: 12 }} />
333 
334         {/* Description lines */}
335         <div style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--g600)', lineHeight: 1.7, marginBottom: 20 }}>
336           {topic.desc}
337         </div>
338 
339         {/* CTA */}
340         <div style={{
341           display: 'flex',
342           alignItems: 'center',
343           justifyContent: 'space-between',
344           padding: '12px 16px',
345           background: isFirst ? 'var(--g800)' : 'var(--g100)',
346           borderRadius: 12,
347           border: isFirst ? 'none' : '1.5px solid var(--g200)',
348         }}>
349           <div style={{
350             fontFamily: 'var(--mono)',
351             fontSize: 11,
352             fontWeight: 600,
353             color: isFirst ? '#fff' : 'var(--g700)',
354             letterSpacing: '.03em',
355           }}>ابدأ المشاهدة</div>
356           <div style={{
357             width: 28,
358             height: 28,
359             borderRadius: '50%',
360             background: isFirst ? 'rgba(255,255,255,.15)' : 'var(--g200)',
361             display: 'flex',
362             alignItems: 'center',
363             justifyContent: 'center',
364           }}>
365             <span style={{ fontSize: 10, color: isFirst ? '#fff' : 'var(--g600)' }}>▶</span>
366           </div>
367         </div>
368       </div>
369     </div>
370   );
371 }
372 
373 /* ── Page Footer ── */
374 function PageFooter() {
375   return (
376     <div style={{
377       background: 'var(--g900)',
378       padding: '24px 40px',
379       display: 'flex',
380       alignItems: 'center',
381       justifyContent: 'space-between',
382       borderTop: '1px solid rgba(255,255,255,.05)',
383     }}>
384       <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>
385         © ٢٠٢٦ · سلسلة القيم الإسلامية
386       </div>
387       <div style={{ display: 'flex', gap: 20 }}>
388         {['الشروط والأحكام', 'سياسة الخصوصية', 'تواصل معنا'].map((l, i) => (
389           <div key={i} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g600)' }}>{l}</div>
390         ))}
391       </div>
392     </div>
393   );
394 }
395 
396 /* ── Main Export ── */
397 export default function W01_TopicsScreen() {
398   return (
399     <div style={{ background: 'var(--g100)', minHeight: 780, display: 'flex', flexDirection: 'column' }}>
400       <AppHeader />
401       <Hero />
402       <div style={{ flex: 1 }}>
403         <TopicsGrid />
404       </div>
405       <PageFooter />
406     </div>
407   );
408 }
```

## File: `src\screens\user\W02_SearchResults.jsx`

```jsx
1 import React from 'react';
2 import LiveChat from '../../components/web/LiveChat';
3 import Navbar from '../../components/web/Navbar';
4 import Footer from '../../components/web/Footer';
5 
6 /* ─────────────────────────────────────────────────────
7    W02 — البحث ونتائج البحث
8    Desktop: Sidebar filters (fixed 260px) + Results grid
9    Mobile:  Filter icon → bottom drawer overlay
10    Breakpoints noted below
11 ───────────────────────────────────────────────────── */
12 /* ── Sticky search bar (below navbar) ── */
13 function SearchBanner() {
14   return (
15     <div style={{ background: '#fff', borderBottom: '1.5px solid var(--g200)', padding: '16px 40px' }}>
16       <div className="w-search-bar" style={{ maxWidth: '900px' }}>
17         <div className="w-search-field">
18           <div className="w-sf-lbl">الوجهة</div>
19           <div className="w-sf-val" style={{ width: '100px' }} />
20         </div>
21         <div className="w-search-field">
22           <div className="w-sf-lbl">التاريخ</div>
23           <div className="w-sf-val" style={{ width: '80px' }} />
24         </div>
25         <div className="w-search-field">
26           <div className="w-sf-lbl">المسافرون</div>
27           <div className="w-sf-val" style={{ width: '60px' }} />
28         </div>
29         <div className="w-search-field">
30           <div className="w-sf-lbl">الميزانية</div>
31           <div className="w-sf-val" style={{ width: '70px' }} />
32         </div>
33         <div className="w-search-btn">تعديل البحث</div>
34       </div>
35     </div>
36   );
37 }
38 
39 /* ── Filter Sidebar ── */
40 function FilterSidebar() {
41   return (
42     <div className="w-sidebar">
43       <div className="w-sidebar-hdr">
44         <span className="w-sidebar-title">الفلاتر</span>
45         <span className="w-sidebar-reset">مسح الكل</span>
46       </div>
47 
48       {/* نوع الرحلة */}
49       <div className="w-filter-section">
50         <div className="w-filter-title">نوع الرحلة</div>
51         {[['ترفيهية', 14], ['دينية', 8], ['ثقافية', 6], ['نايل كروز', 4], ['شهر عسل', 5]].map(([lbl, cnt], i) => (
52           <div key={i} className="w-filter-row">
53             <div className={`w-filter-check${i < 2 ? ' on' : ''}`} />
54             <span className="w-filter-lbl">{lbl}</span>
55             <span className="w-filter-count">{cnt}</span>
56           </div>
57         ))}
58       </div>
59 
60       {/* السعر */}
61       <div className="w-filter-section">
62         <div className="w-filter-title">نطاق السعر</div>
63         <div className="w-range-bar">
64           <div className="w-range-fill" />
65         </div>
66         <div className="w-range-vals">
67           <span>2,000 ج</span>
68           <span>40,000 ج</span>
69         </div>
70       </div>
71 
72       {/* مدة الرحلة */}
73       <div className="w-filter-section">
74         <div className="w-filter-title">مدة الرحلة</div>
75         {[['1–3 أيام', 7], ['4–7 أيام', 18], ['أكثر من أسبوع', 12]].map(([lbl, cnt], i) => (
76           <div key={i} className="w-filter-row">
77             <div className={`w-filter-check${i === 1 ? ' on' : ''}`} />
78             <span className="w-filter-lbl">{lbl}</span>
79             <span className="w-filter-count">{cnt}</span>
80           </div>
81         ))}
82       </div>
83 
84       {/* نوع الإقامة */}
85       <div className="w-filter-section">
86         <div className="w-filter-title">نوع الإقامة</div>
87         {[['5 نجوم', 10], ['4 نجوم', 15], ['3 نجوم', 12]].map(([lbl, cnt], i) => (
88           <div key={i} className="w-filter-row">
89             <div className={`w-filter-check${i === 0 ? ' on' : ''}`} />
90             <span className="w-filter-lbl">{lbl}</span>
91             <span className="w-filter-count">{cnt}</span>
92           </div>
93         ))}
94       </div>
95 
96       {/* التقييم */}
97       <div className="w-filter-section">
98         <div className="w-filter-title">التقييم</div>
99         {[['5 نجوم', 9], ['4+ نجوم', 22], ['3+ نجوم', 37]].map(([lbl, cnt], i) => (
100           <div key={i} className="w-filter-row">
101             <div className={`w-filter-check${i === 1 ? ' on' : ''}`} />
102             <span className="w-filter-lbl">{lbl}</span>
103             <span className="w-filter-count">{cnt}</span>
104           </div>
105         ))}
106       </div>
107 
108       {/* Apply */}
109       <div style={{ padding: '16px 18px' }}>
110         <div className="w-bw-cta">تطبيق الفلاتر</div>
111       </div>
112     </div>
113   );
114 }
115 
116 /* ── Results Area ── */
117 function ResultsArea() {
118   const tours = [
119     { name: 'رحلة شرم الشيخ الفاخرة', dest: 'شرم الشيخ', price: '8,500 ج', days: '5 أيام', type: 'ترفيهية', rating: 5 },
120     { name: 'برنامج عمرة رمضان المبارك', dest: 'مكة المكرمة', price: '35,000 ج', days: '10 أيام', type: 'دينية', rating: 5 },
121     { name: 'نايل كروز الأقصر وأسوان', dest: 'الأقصر — أسوان', price: '12,000 ج', days: '7 أيام', type: 'نايل كروز', rating: 4 },
122     { name: 'القاهرة التاريخية', dest: 'القاهرة', price: '4,200 ج', days: '3 أيام', type: 'ثقافية', rating: 4 },
123     { name: 'شهر عسل دهب الساحر', dest: 'دهب', price: '9,800 ج', days: '6 أيام', type: 'شهر عسل', rating: 5 },
124     { name: 'مرسى علم الغوص والاسترخاء', dest: 'مرسى علم', price: '7,500 ج', days: '4 أيام', type: 'ترفيهية', rating: 4 },
125     { name: 'الإسكندرية الساحرة', dest: 'الإسكندرية', price: '3,800 ج', days: '2 أيام', type: 'ترفيهية', rating: 4 },
126     { name: 'برنامج أسوان والنوبة', dest: 'أسوان', price: '6,900 ج', days: '4 أيام', type: 'ثقافية', rating: 5 },
127   ];
128 
129   return (
130     <div>
131       {/* Sort bar */}
132       <div className="w-sort-bar">
133         <span className="w-results-count">37 رحلة متاحة</span>
134         <div className="w-sort-options">
135           <span className="w-sort-opt">الأكثر حجزاً</span>
136           <span className="w-sort-opt on">السعر: من الأقل</span>
137           <span className="w-sort-opt">التقييم</span>
138           <span className="w-sort-opt">المدة</span>
139         </div>
140       </div>
141 
142       {/* Cards grid — 2 columns inside the results area */}
143       <div className="w-grid-2">
144         {tours.map((t, i) => (
145           <div key={i} className="w-tour-card" style={{ display: 'flex', flexDirection: 'row' }}>
146             <div className="w-tour-img" style={{ width: '180px', height: '100%', minHeight: '160px', flexShrink: 0 }}>
147               [صورة]
148               <div className="w-tour-badge type">{t.type}</div>
149             </div>
150             <div className="w-tour-body" style={{ flex: 1 }}>
151               <div className="w-tour-name">{t.name}</div>
152               <div className="w-tour-dest">📍 {t.dest}</div>
153               {/* Rating */}
154               <div className="w-tour-rating" style={{ marginBottom: '8px' }}>
155                 <div className="w-stars">
156                   {[...Array(5)].map((_, si) => (
157                     <div key={si} className={`w-star${si < t.rating ? ' on' : ''}`} />
158                   ))}
159                 </div>
160                 <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--g500)' }}>{t.rating}.0</span>
161               </div>
162               <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '8px' }}>
163                 <div>
164                   <div className="w-tour-price-lbl">يبدأ من</div>
165                   <div className="w-tour-price">{t.price}</div>
166                   <div className="w-tour-loyalty">⭐ +10 نقاط</div>
167                 </div>
168                 <div style={{ textAlign: 'left' }}>
169                   <div className="w-tour-duration">{t.days}</div>
170                   <div className="sp-sm" />
171                   <div className="w-tour-cta">التفاصيل</div>
172                 </div>
173               </div>
174             </div>
175           </div>
176         ))}
177       </div>
178 
179       {/* Pagination */}
180       <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
181         {[1, 2, 3, '...', 5].map((p, i) => (
182           <div
183             key={i}
184             style={{
185               width: '36px', height: '36px', borderRadius: '8px',
186               border: '1.5px solid', borderColor: i === 0 ? 'var(--g700)' : 'var(--g200)',
187               background: i === 0 ? 'var(--g800)' : '#fff',
188               color: i === 0 ? '#fff' : 'var(--g600)',
189               display: 'flex', alignItems: 'center', justifyContent: 'center',
190               fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: '500',
191             }}
192           >{p}</div>
193         ))}
194       </div>
195     </div>
196   );
197 }
198 
199 export default function W02_SearchResults() {
200   return (
201     <>
202       <Navbar variant="guest" activeLink="tours" />
203       <SearchBanner />
204       <div className="w-container">
205         {/* Breadcrumb */}
206         <div className="w-breadcrumb">
207           <span>الرئيسية</span>
208           <span className="w-breadcrumb-sep">/</span>
209           <span className="w-breadcrumb-cur">نتائج البحث — "شرم الشيخ"</span>
210         </div>
211 
212         {/* Sidebar + Results */}
213         <div className="w-layout-sidebar" style={{ paddingBottom: '48px' }}>
214           <FilterSidebar />
215           <ResultsArea />
216         </div>
217       </div>
218       <Footer />
219       <LiveChat />
220     </>
221   );
222 }
```

## File: `src\screens\user\W02_VideoScreen.jsx`

```jsx
1 import React from 'react';
2 
3 /* ─────────────────────────────────────────────────────
4    W02 — شاشة الفيديو
5    Desktop 1260px
6    الموضوع الافتراضي: كظم الغيظ (يمكن تغييره بالـ props)
7 ───────────────────────────────────────────────────── */
8 
9 const RELATED = [
10   { title: 'التعاون', subtitle: 'قوة الجماعة المؤمنة', duration: '١١ دق', done: false },
11   { title: 'حفظ اللسان', subtitle: 'الكلمة أمانة وأثر', duration: '٩ دق', done: false },
12 ];
13 
14 const CHAPTERS = [
15   { time: '0:00', title: 'المقدمة والتعريف', active: true },
16   { time: '1:45', title: 'قصة من السيرة النبوية', active: false },
17   { time: '4:10', title: 'الآيات والأحاديث', active: false },
18   { time: '6:00', title: 'كيف تطبّقها في حياتك؟', active: false },
19   { time: '7:30', title: 'الخلاصة والدعاء', active: false },
20 ];
21 
22 /* ── App Header (shared) ── */
23 function AppHeader() {
24   return (
25     <div style={{
26       background: 'var(--g900)',
27       borderBottom: '1px solid rgba(255,255,255,.06)',
28       padding: '0 40px',
29       height: 64,
30       display: 'flex',
31       alignItems: 'center',
32       justifyContent: 'space-between',
33       flexShrink: 0,
34     }}>
35       <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
36         <div style={{
37           width: 34, height: 34, borderRadius: 10,
38           background: 'rgba(255,255,255,.1)', border: '1.5px solid rgba(255,255,255,.12)',
39           display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
40         }}>☪</div>
41         <div>
42           <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '.01em' }}>القيم الإسلامية</div>
43           <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.35)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Islamic Values · Series</div>
44         </div>
45       </div>
46       <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
47         {['الرئيسية', 'الموضوعات', 'عن المشروع'].map((l, i) => (
48           <div key={i} style={{
49             padding: '6px 14px', fontFamily: 'var(--mono)', fontSize: 11,
50             color: 'rgba(255,255,255,.45)', borderRadius: 6, background: 'transparent',
51           }}>{l}</div>
52         ))}
53         <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,.1)', margin: '0 6px' }} />
54         <div style={{
55           width: 32, height: 32, borderRadius: '50%',
56           background: 'var(--g600)', border: '2px solid var(--g500)',
57           display: 'flex', alignItems: 'center', justifyContent: 'center',
58           fontFamily: 'var(--mono)', fontSize: 9, color: '#fff',
59         }}>أح</div>
60       </div>
61     </div>
62   );
63 }
64 
65 /* ── Breadcrumb / Back Bar ── */
66 function BreadcrumbBar() {
67   return (
68     <div style={{
69       background: '#fff',
70       borderBottom: '1px solid var(--g200)',
71       padding: '0 40px',
72       height: 46,
73       display: 'flex',
74       alignItems: 'center',
75       gap: 8,
76     }}>
77       {/* Back arrow */}
78       <div style={{
79         width: 28, height: 28, borderRadius: 8,
80         border: '1.5px solid var(--g200)', background: 'var(--g100)',
81         display: 'flex', alignItems: 'center', justifyContent: 'center',
82         fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--g600)', marginLeft: 4,
83       }}>←</div>
84 
85       {/* Breadcrumb */}
86       {['الموضوعات', 'كظم الغيظ'].map((crumb, i) => (
87         <React.Fragment key={i}>
88           {i > 0 && <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--g300)' }}>/</span>}
89           <span style={{
90             fontFamily: 'var(--mono)', fontSize: 11,
91             color: i === 1 ? 'var(--g800)' : 'var(--g500)',
92             fontWeight: i === 1 ? 600 : 400,
93           }}>{crumb}</span>
94         </React.Fragment>
95       ))}
96 
97       <div style={{ flex: 1 }} />
98 
99       {/* Progress pill */}
100       <div style={{
101         padding: '4px 12px', borderRadius: 20,
102         background: 'var(--g100)', border: '1px solid var(--g200)',
103         display: 'flex', alignItems: 'center', gap: 6,
104       }}>
105         <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)' }}>التقدم</div>
106         <div style={{ width: 60, height: 4, background: 'var(--g200)', borderRadius: 2, overflow: 'hidden' }}>
107           <div style={{ width: '20%', height: '100%', background: 'var(--g600)', borderRadius: 2 }} />
108         </div>
109         <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g600)', fontWeight: 600 }}>١ / ٣</div>
110       </div>
111     </div>
112   );
113 }
114 
115 /* ── Main Video Player ── */
116 function VideoPlayer() {
117   return (
118     <div style={{
119       width: '100%',
120       aspectRatio: '16 / 9',
121       background: 'var(--g800)',
122       position: 'relative',
123       overflow: 'hidden',
124     }}>
125       {/* Thumbnail placeholder */}
126       <div style={{
127         position: 'absolute',
128         inset: 0,
129         background: 'linear-gradient(135deg, var(--g700) 0%, var(--g900) 100%)',
130       }} />
131 
132       {/* Geometric decoration */}
133       <div style={{
134         position: 'absolute',
135         top: '50%', left: '50%',
136         transform: 'translate(-50%,-50%)',
137         width: 200, height: 200,
138         borderRadius: '50%',
139         border: '1px solid rgba(255,255,255,.06)',
140       }} />
141       <div style={{
142         position: 'absolute',
143         top: '50%', left: '50%',
144         transform: 'translate(-50%,-50%)',
145         width: 140, height: 140,
146         borderRadius: '50%',
147         border: '1px solid rgba(255,255,255,.08)',
148       }} />
149 
150       {/* Content label */}
151       <div style={{
152         position: 'absolute',
153         top: 12, right: 14,
154         fontFamily: 'var(--mono)',
155         fontSize: 8,
156         color: 'rgba(255,255,255,.25)',
157         letterSpacing: '.08em',
158         textTransform: 'uppercase',
159       }}>VIDEO PLACEHOLDER — ١٢٨٠×٧٢٠</div>
160 
161       {/* Topic label (top left) */}
162       <div style={{
163         position: 'absolute',
164         top: 14, left: 14,
165         display: 'flex', alignItems: 'center', gap: 6,
166         background: 'rgba(0,0,0,.4)',
167         border: '1px solid rgba(255,255,255,.1)',
168         borderRadius: 6,
169         padding: '4px 10px',
170       }}>
171         <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444', animation: 'pulse 1s infinite' }} />
172         <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: '#fff', letterSpacing: '.06em' }}>حلقة ١ من ٣</span>
173       </div>
174 
175       {/* Center play button */}
176       <div style={{
177         position: 'absolute',
178         top: '50%', left: '50%',
179         transform: 'translate(-50%,-50%)',
180         width: 72, height: 72,
181         borderRadius: '50%',
182         background: 'rgba(255,255,255,.9)',
183         display: 'flex', alignItems: 'center', justifyContent: 'center',
184         boxShadow: '0 8px 32px rgba(0,0,0,.3)',
185         zIndex: 2,
186       }}>
187         <div style={{
188           width: 0, height: 0,
189           borderTop: '14px solid transparent',
190           borderBottom: '14px solid transparent',
191           borderLeft: '22px solid var(--g800)',
192           marginRight: -4,
193         }} />
194       </div>
195 
196       {/* Title overlay (bottom) */}
197       <div style={{
198         position: 'absolute',
199         bottom: 0, left: 0, right: 0,
200         padding: '32px 20px 16px',
201         background: 'linear-gradient(to top, rgba(0,0,0,.8), transparent)',
202       }}>
203         <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4 }}>كظم الغيظ</div>
204         <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,.6)' }}>فن السيطرة على النفس · ٨ دقائق</div>
205       </div>
206 
207       {/* Playback controls bar */}
208       <div style={{
209         position: 'absolute',
210         bottom: 0, left: 0, right: 0,
211         background: 'rgba(0,0,0,.75)',
212         backdropFilter: 'blur(4px)',
213         padding: '8px 16px',
214         display: 'none', // will appear on hover in real implementation
215       }} />
216     </div>
217   );
218 }
219 
220 /* ── Controls Bar ── */
221 function ControlsBar() {
222   return (
223     <div style={{
224       background: 'var(--g900)',
225       padding: '10px 16px',
226       display: 'flex',
227       alignItems: 'center',
228       gap: 12,
229     }}>
230       {/* Play */}
231       <div style={{
232         width: 36, height: 36, borderRadius: '50%',
233         background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
234         flexShrink: 0,
235       }}>
236         <div style={{ width: 0, height: 0, borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderLeft: '11px solid var(--g800)', marginRight: -2 }} />
237       </div>
238 
239       {/* Time */}
240       <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,.7)', flexShrink: 0 }}>
241         0:22 / 8:00
242       </div>
243 
244       {/* Progress bar */}
245       <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,.15)', borderRadius: 2, position: 'relative' }}>
246         <div style={{ width: '4.5%', height: '100%', background: '#fff', borderRadius: 2 }} />
247         <div style={{
248           position: 'absolute', top: '50%', left: '4.5%',
249           transform: 'translate(-50%,-50%)',
250           width: 12, height: 12, borderRadius: '50%', background: '#fff',
251         }} />
252       </div>
253 
254       {/* Right controls */}
255       <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
256         {['⏮', '⏭'].map((icon, i) => (
257           <div key={i} style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'rgba(255,255,255,.6)' }}>{icon}</div>
258         ))}
259         <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,.15)' }} />
260         <div style={{
261           padding: '3px 8px', borderRadius: 4,
262           border: '1px solid rgba(255,255,255,.2)',
263           fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.6)',
264         }}>1×</div>
265         <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'rgba(255,255,255,.6)' }}>CC</div>
266         <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'rgba(255,255,255,.6)' }}>⛶</div>
267       </div>
268     </div>
269   );
270 }
271 
272 /* ── Video Info Section ── */
273 function VideoInfo() {
274   return (
275     <div style={{ padding: '24px 0' }}>
276       {/* Title row */}
277       <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
278         <div>
279           <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--g900)', marginBottom: 6, lineHeight: 1.3 }}>
280             كظم الغيظ — فن السيطرة على النفس
281           </h1>
282           <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
283             <div style={{
284               padding: '3px 10px', borderRadius: 20,
285               background: 'var(--g100)', border: '1px solid var(--g200)',
286               fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)',
287             }}>أخلاق · نفس</div>
288             <div style={{
289               padding: '3px 10px', borderRadius: 20,
290               background: 'var(--g100)', border: '1px solid var(--g200)',
291               fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g500)',
292             }}>٨ دقائق</div>
293             <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)' }}>· الحلقة ١ من ٣</div>
294           </div>
295         </div>
296         {/* Actions */}
297         <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
298           {[
299             { icon: '↗', label: 'مشاركة' },
300             { icon: '⤓', label: 'حفظ' },
301           ].map((action, i) => (
302             <div key={i} style={{
303               display: 'flex', alignItems: 'center', gap: 5,
304               padding: '7px 14px', borderRadius: 8,
305               border: '1.5px solid var(--g200)', background: '#fff',
306               fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g600)',
307             }}>
308               <span>{action.icon}</span>
309               <span>{action.label}</span>
310             </div>
311           ))}
312         </div>
313       </div>
314 
315       <div style={{ height: 1, background: 'var(--g200)', marginBottom: 16 }} />
316 
317       {/* Description */}
318       <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--g600)', lineHeight: 1.8, maxWidth: 680, marginBottom: 20 }}>
319         يتناول هذا الفيديو مفهوم كظم الغيظ في الإسلام من خلال قصص من السيرة النبوية وآيات قرآنية كريمة.
320         ستتعلم كيف يمكن أن يكون ضبط النفس طريقاً للقرب من الله وبناء شخصية مؤمنة قوية ومتوازنة.
321       </div>
322 
323       {/* Key verses */}
324       <div style={{
325         padding: '16px 20px',
326         background: 'var(--g100)',
327         border: '1.5px dashed var(--g300)',
328         borderRadius: 12,
329         marginBottom: 20,
330       }}>
331         <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--g400)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>آية قرآنية</div>
332         <div style={{ fontSize: 15, color: 'var(--g800)', fontWeight: 500, lineHeight: 1.8, textAlign: 'right', direction: 'rtl' }}>
333           ﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ﴾
334         </div>
335         <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)', marginTop: 6 }}>سورة آل عمران · الآية ١٣٤</div>
336       </div>
337     </div>
338   );
339 }
340 
341 /* ── Chapters List ── */
342 function ChaptersList() {
343   return (
344     <div style={{ marginBottom: 20 }}>
345       <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 12 }}>فصول الفيديو</div>
346       <div style={{ background: '#fff', border: '1.5px solid var(--g200)', borderRadius: 12, overflow: 'hidden' }}>
347         {CHAPTERS.map((ch, i) => (
348           <div key={i} style={{
349             display: 'flex', alignItems: 'center', gap: 14,
350             padding: '12px 16px',
351             borderBottom: i < CHAPTERS.length - 1 ? '1px solid var(--g100)' : 'none',
352             background: ch.active ? 'var(--g100)' : '#fff',
353             borderRight: ch.active ? '3px solid var(--g700)' : '3px solid transparent',
354           }}>
355             <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)', flexShrink: 0, width: 36 }}>{ch.time}</div>
356             <div style={{
357               width: 24, height: 24, borderRadius: '50%',
358               background: ch.active ? 'var(--g800)' : 'var(--g200)',
359               display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
360             }}>
361               {ch.active
362                 ? <span style={{ fontSize: 8, color: '#fff' }}>▶</span>
363                 : <span style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--g500)' }}>{i + 1}</span>
364               }
365             </div>
366             <div style={{ fontSize: 12, color: ch.active ? 'var(--g800)' : 'var(--g600)', fontWeight: ch.active ? 600 : 400 }}>{ch.title}</div>
367             {ch.active && (
368               <div style={{
369                 marginRight: 'auto',
370                 padding: '2px 8px', borderRadius: 10,
371                 background: 'var(--g800)', fontFamily: 'var(--mono)', fontSize: 8, color: '#fff',
372               }}>الآن</div>
373             )}
374           </div>
375         ))}
376       </div>
377     </div>
378   );
379 }
380 
381 /* ── Sidebar: Related & Progress ── */
382 function Sidebar() {
383   return (
384     <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
385       {/* Series progress */}
386       <div style={{ background: '#fff', border: '1.5px solid var(--g200)', borderRadius: 16, overflow: 'hidden' }}>
387         <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--g200)' }}>
388           <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--g800)' }}>تقدّمك في السلسلة</div>
389         </div>
390         <div style={{ padding: '14px 16px' }}>
391           {/* Overall bar */}
392           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
393             <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>اكتملت ١ من ٣ حلقات</div>
394             <div style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 600, color: 'var(--g700)' }}>٣٣٪</div>
395           </div>
396           <div style={{ height: 6, background: 'var(--g200)', borderRadius: 3, overflow: 'hidden', marginBottom: 16 }}>
397             <div style={{ width: '33%', height: '100%', background: 'var(--g700)', borderRadius: 3 }} />
398           </div>
399 
400           {/* Episode pills */}
401           {[
402             { title: 'كظم الغيظ', status: 'current', num: '١' },
403             { title: 'التعاون', status: 'locked', num: '٢' },
404             { title: 'حفظ اللسان', status: 'locked', num: '٣' },
405           ].map((ep, i) => (
406             <div key={i} style={{
407               display: 'flex', alignItems: 'center', gap: 10,
408               padding: '9px 12px', marginBottom: 6,
409               borderRadius: 10,
410               border: `1.5px solid ${ep.status === 'current' ? 'var(--g700)' : 'var(--g200)'}`,
411               background: ep.status === 'current' ? 'var(--g800)' : 'var(--g100)',
412             }}>
413               <div style={{
414                 width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
415                 background: ep.status === 'current' ? 'rgba(255,255,255,.15)' : 'var(--g200)',
416                 display: 'flex', alignItems: 'center', justifyContent: 'center',
417                 fontFamily: 'var(--mono)', fontSize: 10,
418                 color: ep.status === 'current' ? '#fff' : 'var(--g500)',
419               }}>{ep.num}</div>
420               <div style={{
421                 fontSize: 12, fontWeight: 500,
422                 color: ep.status === 'current' ? '#fff' : 'var(--g600)',
423                 flex: 1,
424               }}>{ep.title}</div>
425               <div style={{
426                 fontFamily: 'var(--mono)', fontSize: 9,
427                 color: ep.status === 'current' ? 'rgba(255,255,255,.5)' : 'var(--g400)',
428               }}>{ep.status === 'current' ? '▶ تشاهد الآن' : '🔒'}</div>
429             </div>
430           ))}
431         </div>
432       </div>
433 
434       {/* Related topics */}
435       <div style={{ background: '#fff', border: '1.5px solid var(--g200)', borderRadius: 16, overflow: 'hidden' }}>
436         <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--g200)' }}>
437           <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--g800)' }}>الحلقات التالية</div>
438         </div>
439         {RELATED.map((item, i) => (
440           <div key={i} style={{
441             display: 'flex', gap: 12,
442             padding: '14px 16px',
443             borderBottom: i < RELATED.length - 1 ? '1px solid var(--g100)' : 'none',
444             alignItems: 'center',
445           }}>
446             {/* Thumbnail */}
447             <div style={{
448               width: 68, height: 52, borderRadius: 10,
449               background: 'var(--g200)',
450               border: '1px solid var(--g300)',
451               display: 'flex', alignItems: 'center', justifyContent: 'center',
452               flexShrink: 0, position: 'relative',
453             }}>
454               <div style={{
455                 width: 0, height: 0,
456                 borderTop: '7px solid transparent',
457                 borderBottom: '7px solid transparent',
458                 borderLeft: '11px solid rgba(0,0,0,.3)',
459               }} />
460               <div style={{
461                 position: 'absolute', bottom: 4, right: 4,
462                 background: 'rgba(0,0,0,.5)', borderRadius: 4,
463                 fontFamily: 'var(--mono)', fontSize: 7, color: '#fff', padding: '1px 4px',
464               }}>{item.duration}</div>
465             </div>
466             <div style={{ flex: 1 }}>
467               <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--g800)', marginBottom: 2 }}>{item.title}</div>
468               <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>{item.subtitle}</div>
469             </div>
470             <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)', flexShrink: 0 }}>🔒</div>
471           </div>
472         ))}
473         <div style={{ padding: '12px 16px' }}>
474           <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g400)', textAlign: 'center', lineHeight: 1.5 }}>
475             أكمل مشاهدة هذه الحلقة لفتح التالية
476           </div>
477         </div>
478       </div>
479 
480       {/* Ayah card */}
481       <div style={{
482         padding: '16px',
483         background: 'var(--g900)',
484         borderRadius: 16,
485         textAlign: 'right',
486       }}>
487         <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'rgba(255,255,255,.3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 8 }}>الحديث النبوي الشريف</div>
488         <div style={{ fontSize: 13, color: 'rgba(255,255,255,.8)', lineHeight: 1.8, direction: 'rtl', marginBottom: 8 }}>
489           «لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الغَضَبِ»
490         </div>
491         <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(255,255,255,.35)' }}>رواه البخاري ومسلم</div>
492       </div>
493     </div>
494   );
495 }
496 
497 /* ── Main Export ── */
498 export default function W02_VideoScreen() {
499   return (
500     <div style={{ background: 'var(--g100)', minHeight: 780, display: 'flex', flexDirection: 'column' }}>
501       <AppHeader />
502       <BreadcrumbBar />
503 
504       {/* Main layout */}
505       <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
506         {/* Video + Controls (full width) */}
507         <div style={{ background: 'var(--g900)' }}>
508           <div style={{ maxWidth: 900, margin: '0 auto' }}>
509             <VideoPlayer />
510             <ControlsBar />
511           </div>
512         </div>
513 
514         {/* Content area */}
515         <div style={{ flex: 1, padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32, alignItems: 'start' }}>
516           {/* Left: info + chapters */}
517           <div>
518             <VideoInfo />
519             <ChaptersList />
520           </div>
521           {/* Right: sidebar */}
522           <div style={{ paddingTop: 24 }}>
523             <Sidebar />
524           </div>
525         </div>
526       </div>
527 
528       {/* Footer */}
529       <div style={{
530         background: 'var(--g900)',
531         padding: '20px 40px',
532         display: 'flex',
533         alignItems: 'center',
534         justifyContent: 'space-between',
535         borderTop: '1px solid rgba(255,255,255,.05)',
536       }}>
537         <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g500)' }}>© ٢٠٢٦ · سلسلة القيم الإسلامية</div>
538         <div style={{ display: 'flex', gap: 20 }}>
539           {['الشروط والأحكام', 'سياسة الخصوصية', 'تواصل معنا'].map((l, i) => (
540             <div key={i} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--g600)' }}>{l}</div>
541           ))}
542         </div>
543       </div>
544     </div>
545   );
546 }
```

## File: `src\screens\user\W03_TourDetail.jsx`

```jsx
1 import React from 'react';
2 import LiveChat from '../../components/web/LiveChat';
3 import Navbar from '../../components/web/Navbar';
4 import Footer from '../../components/web/Footer';
5 
6 /* ─────────────────────────────────────────────────────
7    W03 — تفاصيل الرحلة
8    Two-column: Main content (scrollable) + Sticky booking widget
9    Guest:  زر الحجز يوجّه لصفحة تسجيل الدخول مع note
10    User:   زر الحجز نشط + إضافة للمفضلة
11    Mobile: Single column — Sticky bottom bar (السعر + احجز الآن)
12 ───────────────────────────────────────────────────── */
13 function Gallery() {
14   return (
15     <div className="w-gallery">
16       <div className="w-gallery-main">
17         [الصورة الرئيسية للرحلة]
18         {/* Nav arrows */}
19         <div style={{ position: 'absolute', insetInlineStart: '14px', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', background: 'rgba(255,255,255,.85)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--g700)' }}>‹</div>
20         <div style={{ position: 'absolute', insetInlineEnd: '14px', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', background: 'rgba(255,255,255,.85)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--g700)' }}>›</div>
21         {/* Gallery count */}
22         <div style={{ position: 'absolute', bottom: '12px', insetInlineEnd: '14px', background: 'rgba(0,0,0,.5)', color: '#fff', fontFamily: 'var(--mono)', fontSize: '10px', padding: '4px 10px', borderRadius: '20px' }}>1 / 12</div>
23       </div>
24       <div className="w-gallery-thumbs">
25         {[...Array(3)].map((_, i) => <div key={i} className="w-gallery-thumb">[صورة {i + 2}]</div>)}
26         <div className="w-gallery-thumb more">+8</div>
27       </div>
28     </div>
29   );
30 }
31 
32 /* ── Main content (scrollable) ── */
33 function TourMainContent() {
34   return (
35     <div>
36       {/* Title area */}
37       <div style={{ marginBottom: '20px' }}>
38         <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
39           <div>
40             <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
41               <span style={{ background: 'var(--g800)', color: '#fff', fontFamily: 'var(--mono)', fontSize: '10px', padding: '3px 10px', borderRadius: '20px' }}>ترفيهية</span>
42               <span style={{ background: 'var(--g100)', color: 'var(--g600)', fontFamily: 'var(--mono)', fontSize: '10px', padding: '3px 10px', borderRadius: '20px', border: '1px solid var(--g200)' }}>5 أيام</span>
43             </div>
44             <div style={{ fontSize: '24px', fontWeight: '600', color: 'var(--g800)', marginBottom: '6px' }}>
45               رحلة شرم الشيخ الفاخرة — فندق 5 نجوم
46             </div>
47             <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
48               <div className="w-tour-rating">
49                 <div className="w-stars">
50                   {[...Array(5)].map((_, i) => <div key={i} className="w-star on" />)}
51                 </div>
52                 <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--g500)' }}>5.0 (48 تقييم)</span>
53               </div>
54               <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--g500)' }}>📍 شرم الشيخ، سيناء</span>
55             </div>
56           </div>
57           {/* Fav button — USER only */}
58           <div style={{ flexShrink: 0, padding: '8px 16px', border: '1.5px solid var(--g300)', borderRadius: 'var(--rmd)', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--g600)', display: 'flex', alignItems: 'center', gap: '6px' }}>
59             ♡ المفضلة
60           </div>
61         </div>
62       </div>
63 
64       {/* Tabs */}
65       <div className="w-tabs" style={{ marginBottom: '24px' }}>
66         <div className="w-tab on">الوصف</div>
67         <div className="w-tab">البرنامج اليومي</div>
68         <div className="w-tab">ما يشمله السعر</div>
69         <div className="w-tab">الشروط</div>
70         <div className="w-tab">التقييمات (48)</div>
71       </div>
72 
73       {/* Tab: الوصف */}
74       <div className="w-detail-section">
75         <div className="w-detail-section-title">عن الرحلة</div>
76         {[100, 85, 90, 70, 60].map((w, i) => (
77           <div key={i} className="w-tl" style={{ width: `${w}%` }} />
78         ))}
79         <div className="sp" />
80         {[95, 80, 75, 55].map((w, i) => (
81           <div key={i} className="w-tl" style={{ width: `${w}%` }} />
82         ))}
83       </div>
84 
85       {/* Highlights */}
86       <div className="w-detail-section">
87         <div className="w-detail-section-title">أبرز مميزات الرحلة</div>
88         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
89           {['إقامة 5 نجوم على الشاطئ', 'طيران مباشر ذهاباً وإياباً', 'جولات سياحية يومية', 'وجبات مشمولة (3 وجبات)', 'خدمة نقل المطار', 'مرشد سياحي متخصص'].map((h, i) => (
90             <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
91               <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'var(--g200)', border: '2px solid var(--g400)', flexShrink: 0 }} />
92               <span style={{ fontSize: '13px', color: 'var(--g700)' }}>{h}</span>
93             </div>
94           ))}
95         </div>
96       </div>
97 
98       {/* Day-by-day itinerary */}
99       <div className="w-detail-section">
100         <div className="w-detail-section-title">البرنامج اليومي</div>
101         {[
102           { day: 1, title: 'يوم الوصول — الاستقبال والإقامة', sub: 'استقبال في المطار · نقل للفندق · عشاء ترحيبي' },
103           { day: 2, title: 'جولة خليج العقبة وشرم القديم', sub: 'رحلة بحرية · غداء · جولة شرم القديم' },
104           { day: 3, title: 'رسان الزجاجي وأم القمارى', sub: 'غوص وسنوركل · استجمام على الشاطئ' },
105           { day: 4, title: 'جزيرة تيران والسفاري', sub: 'رحلة لجزيرة تيران · سفاري صحراوية مساءً' },
106           { day: 5, title: 'يوم المغادرة', sub: 'إفطار · تسليم الغرفة · نقل للمطار' },
107         ].map((d) => (
108           <div key={d.day} className="w-day-item">
109             <div className="w-day-num">{d.day}</div>
110             <div className="w-day-body">
111               <div className="w-day-title">{d.title}</div>
112               <div className="w-tl w85" />
113               <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--g500)', marginTop: '6px' }}>{d.sub}</div>
114             </div>
115           </div>
116         ))}
117       </div>
118 
119       {/* Includes/Excludes */}
120       <div className="w-detail-section">
121         <div className="w-detail-section-title">ما يشمله السعر / ما لا يشمله</div>
122         <div className="w-inc-grid">
123           {[
124             [true, 'طيران ذهاباً وإياباً'],
125             [false, 'تأشيرات السفر'],
126             [true, 'إقامة 5 أيام فندق 5 نجوم'],
127             [false, 'المصروف الشخصي'],
128             [true, 'وجبات (إفطار + عشاء)'],
129             [false, 'الغداء'],
130             [true, 'نقل المطار'],
131             [false, 'التأمين السياحي'],
132           ].map(([inc, lbl], i) => (
133             <div key={i} className="w-inc-item">
134               <div className={`w-inc-dot${inc ? ' yes' : ''}`} />
135               <span className="w-inc-lbl">{lbl}</span>
136             </div>
137           ))}
138         </div>
139       </div>
140     </div>
141   );
142 }
143 
144 /* ── Booking widget (sticky sidebar) ── */
145 function BookingWidget({ variant = 'user' }) {
146   return (
147     <div className="w-booking-widget">
148       <div className="w-bw-header">
149         <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
150           <div className="w-bw-price">8,500 ج</div>
151           <div className="w-bw-price-lbl">/ للشخص</div>
152         </div>
153         <div style={{ display: 'flex', gap: '8px', marginTop: '6px', flexWrap: 'wrap' }}>
154           <div className="w-bw-loyalty">⭐ تكسب 10 نقاط ولاء</div>
155           <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--g500)', display: 'flex', alignItems: 'center', gap: '4px' }}>
156             <span style={{ background: 'var(--g200)', padding: '2px 8px', borderRadius: '20px', border: '1px solid var(--g200)' }}>EGP</span>
157           </div>
158         </div>
159       </div>
160       <div className="w-bw-body">
161         {/* Date field */}
162         <div className="w-bw-field">
163           <div className="w-bw-field-lbl">تاريخ الرحلة</div>
164           <div className="w-bw-field-val" />
165         </div>
166         {/* Travelers */}
167         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
168           <div className="w-bw-field">
169             <div className="w-bw-field-lbl">بالغين</div>
170             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
171               <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid var(--g300)', background: 'var(--g100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--g600)' }}>−</div>
172               <span style={{ fontFamily: 'var(--mono)', fontSize: '16px', fontWeight: '600', color: 'var(--g800)' }}>2</span>
173               <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid var(--g300)', background: 'var(--g100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--g600)' }}>+</div>
174             </div>
175           </div>
176           <div className="w-bw-field">
177             <div className="w-bw-field-lbl">أطفال</div>
178             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
179               <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid var(--g300)', background: 'var(--g100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--g600)' }}>−</div>
180               <span style={{ fontFamily: 'var(--mono)', fontSize: '16px', fontWeight: '600', color: 'var(--g800)' }}>0</span>
181               <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1.5px solid var(--g300)', background: 'var(--g100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--mono)', fontSize: '14px', color: 'var(--g600)' }}>+</div>
182             </div>
183           </div>
184         </div>
185 
186         <hr className="w-bw-divider" />
187 
188         {/* Price breakdown */}
189         <div className="w-bw-row">
190           <span className="w-bw-lbl">8,500 ج × 2 بالغ</span>
191           <span className="w-bw-val">17,000 ج</span>
192         </div>
193         <div className="w-bw-row">
194           <span className="w-bw-lbl">رسوم الخدمة</span>
195           <span className="w-bw-val">850 ج</span>
196         </div>
197         <div className="w-bw-total-row">
198           <span className="w-bw-total-lbl">الإجمالي</span>
199           <span className="w-bw-total-val">17,850 ج</span>
200         </div>
201 
202         {/* CTA — User vs Guest */}
203         {variant === 'user' ? (
204           <div className="w-bw-cta">احجز الآن</div>
205         ) : (
206           <>
207             <div className="w-bw-cta">تسجيل الدخول للحجز</div>
208             <div className="w-bw-guest-note">
209               سيتم الاحتفاظ بالرحلة المختارة بعد تسجيل الدخول
210             </div>
211           </>
212         )}
213 
214         {/* Availability note */}
215         <div style={{ marginTop: '12px', textAlign: 'center', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--g500)' }}>
216           ⚡ 3 أماكن متبقية فقط
217         </div>
218       </div>
219     </div>
220   );
221 }
222 
223 export default function W03_TourDetail() {
224   return (
225     <>
226       <Navbar variant="user" activeLink="tours" />
227       <div className="w-container">
228         <div className="w-breadcrumb">
229           <span>الرئيسية</span>
230           <span className="w-breadcrumb-sep">/</span>
231           <span>الوجهات</span>
232           <span className="w-breadcrumb-sep">/</span>
233           <span>شرم الشيخ</span>
234           <span className="w-breadcrumb-sep">/</span>
235           <span className="w-breadcrumb-cur">رحلة شرم الشيخ الفاخرة</span>
236         </div>
237 
238         {/* Gallery — full width */}
239         <Gallery />
240 
241         {/* Two-column detail layout */}
242         <div className="w-detail-layout" style={{ paddingBottom: '60px' }}>
243           <TourMainContent />
244           <BookingWidget variant="user" />
245         </div>
246       </div>
247       <Footer />
248       <LiveChat />
249     </>
250   );
251 }
```

## File: `src\styles\index.css`

```css
1 @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');
2 
3 *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
4 
5 /* ─── DESIGN TOKENS ─────────────────────────────────── */
6 :root {
7   --g100: #f5f5f3; --g200: #e8e8e5; --g300: #d4d4d0;
8   --g400: #b0b0aa; --g500: #8a8a84; --g600: #666660;
9   --g700: #444440; --g800: #2a2a28; --g900: #1a1a18;
10   --mono: 'IBM Plex Mono', monospace;
11   --sans: 'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif;
12   --rsm: 8px; --rmd: 12px; --rlg: 18px; --rxl: 24px;
13   /* Web layout */
14   --max-w: 1200px;
15   --sidebar-w: 260px;
16   --nav-h: 68px;
17 }
18 
19 html { direction: rtl; }
20 
21 body {
22   display: block !important;
23   padding: 48px !important;
24   font-family: var(--sans);
25   background: #e8e8e5;
26   min-height: 100vh;
27   overflow-x: hidden;
28 }
29 
30 /* ─── BOARD LAYOUT ──────────────────────────────────── */
31 .board-layout { display: flex; flex-direction: column; gap: 80px; }
32 
33 .board-group { }
34 .board-group-header {
35   margin-bottom: 32px;
36   padding-bottom: 12px;
37   border-bottom: 2px solid var(--g300);
38 }
39 .board-group-title {
40   font-size: 22px; font-weight: 600; color: var(--g800);
41 }
42 .board-group-subtitle {
43   font-family: var(--mono); font-size: 11px; color: var(--g500); margin-top: 4px;
44 }
45 .board-grid { display: flex; flex-direction: column; gap: 48px; }
46 
47 .board-item { display: flex; flex-direction: column; gap: 16px; }
48 .board-item-id {
49   font-family: var(--mono); font-size: 11px; color: var(--g500);
50   letter-spacing: .1em; text-transform: uppercase;
51 }
52 .board-item-name {
53   font-family: var(--mono); font-size: 13px; font-weight: 600; color: var(--g700);
54   margin-top: 4px;
55 }
56 /* Breakpoint note under screen name */
57 .board-item-note {
58   font-family: var(--mono); font-size: 10px; color: var(--g400);
59 }
60 
61 /* ─── BROWSER CHROME FRAME ──────────────────────────── */
62 .web-frame {
63   width: 1260px;
64   border-radius: 16px;
65   overflow: hidden;
66   border: 2px solid var(--g300);
67   background: #fff;
68   box-shadow: 0 12px 48px rgba(0,0,0,.1);
69 }
70 .chrome-bar {
71   height: 44px;
72   background: var(--g100);
73   border-bottom: 1.5px solid var(--g200);
74   display: flex; align-items: center; gap: 12px; padding: 0 16px;
75   flex-shrink: 0;
76 }
77 .chrome-dots { display: flex; gap: 6px; }
78 .chrome-dot {
79   width: 12px; height: 12px; border-radius: 50%; background: var(--g300);
80 }
81 .chrome-url {
82   flex: 1; height: 26px; background: #fff; border: 1px solid var(--g200);
83   border-radius: 8px; display: flex; align-items: center; padding: 0 12px;
84   font-family: var(--mono); font-size: 11px; color: var(--g500);
85 }
86 .chrome-bp {
87   font-family: var(--mono); font-size: 10px; color: var(--g400);
88   background: var(--g200); padding: 3px 8px; border-radius: 4px;
89 }
90 
91 /* Web content scroll area */
92 .web-content {
93   max-height: 780px;
94   overflow-y: auto;
95   overflow-x: hidden;
96   background: var(--g100);
97   position: relative;
98   transform: translate3d(0,0,0);
99   contain: paint;
100   isolation: isolate;
101   clip-path: inset(0);
102 }
103 
104 /* ─── SITE NAVBAR ───────────────────────────────────── */
105 .w-nav {
106   height: var(--nav-h);
107   background: #fff;
108   border-bottom: 1.5px solid var(--g200);
109   display: flex; align-items: center;
110   padding: 0 40px;
111   position: sticky; top: 0; z-index: 10;
112   gap: 32px;
113 }
114 .w-nav-logo {
115   width: 120px; height: 32px; background: var(--g200);
116   border-radius: 6px; flex-shrink: 0;
117 }
118 .w-nav-links { display: flex; gap: 24px; flex: 1; }
119 .w-nav-link {
120   font-family: var(--mono); font-size: 12px; color: var(--g500);
121   white-space: nowrap;
122 }
123 .w-nav-link.on { color: var(--g800); font-weight: 600; }
124 .w-nav-actions { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
125 .w-nav-currency {
126   font-family: var(--mono); font-size: 11px; color: var(--g600);
127   border: 1px solid var(--g300); padding: 5px 10px; border-radius: var(--rsm);
128   background: var(--g100);
129 }
130 .w-nav-btn {
131   padding: 8px 18px; border-radius: var(--rmd);
132   font-family: var(--mono); font-size: 11px; font-weight: 500;
133 }
134 .w-nav-btn.ghost { border: 1.5px solid var(--g300); color: var(--g600); }
135 .w-nav-btn.solid { background: var(--g800); color: #fff; }
136 .w-nav-user { display: flex; align-items: center; gap: 8px; }
137 .w-nav-user-av {
138   width: 34px; height: 34px; border-radius: 50%;
139   background: var(--g200); border: 1.5px solid var(--g300);
140 }
141 .w-nav-user-name { font-size: 13px; font-weight: 500; color: var(--g700); }
142 .w-nav-points {
143   font-family: var(--mono); font-size: 10px; color: var(--g500);
144   background: var(--g100); padding: 3px 8px; border-radius: 20px; border: 1px solid var(--g200);
145 }
146 
147 /* Floating WhatsApp btn */
148 .w-wa-btn {
149   position: fixed; bottom: 28px; left: 28px;
150   width: 52px; height: 52px; border-radius: 50%;
151   background: var(--g700); display: flex; align-items: center; justify-content: center;
152   font-family: var(--mono); font-size: 8px; color: #fff; text-align: center;
153   border: 2.5px solid var(--g600); z-index: 99;
154   box-shadow: 0 4px 16px rgba(0,0,0,.2);
155 }
156 
157 /* ─── PAGE CONTAINER ────────────────────────────────── */
158 .w-container {
159   max-width: var(--max-w);
160   margin: 0 auto;
161   padding: 0 32px;
162 }
163 .w-section { padding: 40px 0; }
164 .w-section-sm { padding: 24px 0; }
165 
166 /* ─── BREADCRUMB ────────────────────────────────────── */
167 .w-breadcrumb {
168   display: flex; align-items: center; gap: 8px;
169   font-family: var(--mono); font-size: 11px; color: var(--g500);
170   padding: 14px 0;
171 }
172 .w-breadcrumb-sep { color: var(--g300); }
173 .w-breadcrumb-cur { color: var(--g700); font-weight: 500; }
174 
175 /* ─── SECTION HEADER ────────────────────────────────── */
176 .w-sec-hdr {
177   display: flex; align-items: flex-end; justify-content: space-between;
178   margin-bottom: 24px;
179 }
180 .w-sec-title { font-size: 20px; font-weight: 600; color: var(--g800); }
181 .w-sec-subtitle { font-family: var(--mono); font-size: 11px; color: var(--g500); margin-top: 4px; }
182 .w-sec-link {
183   font-family: var(--mono); font-size: 11px; color: var(--g500);
184   text-decoration: underline;
185 }
186 
187 /* ─── HERO SECTION ──────────────────────────────────── */
188 .w-hero {
189   width: 100%; height: 420px;
190   background: var(--g300);
191   display: flex; align-items: flex-end;
192   position: relative; overflow: hidden;
193 }
194 .w-hero-overlay {
195   position: absolute; inset: 0;
196   background: linear-gradient(to top, rgba(30,30,28,.7) 0%, transparent 60%);
197 }
198 .w-hero-label {
199   position: absolute; top: 16px; right: 16px;
200   font-family: var(--mono); font-size: 9px; color: rgba(255,255,255,.6);
201   letter-spacing: .08em;
202 }
203 .w-hero-content {
204   position: relative; z-index: 2;
205   width: 100%; padding: 0 40px 40px;
206 }
207 .w-hero-title {
208   font-size: 30px; font-weight: 600; color: #fff; margin-bottom: 6px;
209 }
210 .w-hero-sub { font-size: 15px; color: rgba(255,255,255,.75); }
211 
212 /* ─── SEARCH BOX (hero) ─────────────────────────────── */
213 .w-search-bar {
214   background: #fff; border-radius: var(--rlg);
215   border: 1.5px solid var(--g200);
216   display: flex; align-items: center;
217   overflow: hidden;
218   box-shadow: 0 4px 24px rgba(0,0,0,.1);
219 }
220 .w-search-field {
221   flex: 1; padding: 18px 20px;
222   border-left: 1.5px solid var(--g200);
223   display: flex; flex-direction: column; gap: 6px;
224 }
225 .w-search-field:last-of-type { border-left: none; }
226 .w-sf-lbl { font-family: var(--mono); font-size: 9px; color: var(--g400); text-transform: uppercase; letter-spacing: .07em; }
227 .w-sf-val { height: 14px; background: var(--g200); border-radius: 4px; width: 80%; }
228 .w-search-btn {
229   flex-shrink: 0;
230   background: var(--g800); color: #fff;
231   padding: 0 28px; height: 100%; min-height: 74px;
232   font-family: var(--mono); font-size: 12px; font-weight: 600; letter-spacing: .04em;
233   display: flex; align-items: center;
234 }
235 
236 /* ─── CATEGORY CHIPS ROW ────────────────────────────── */
237 .w-chips { display: flex; gap: 10px; flex-wrap: wrap; }
238 .w-chip {
239   padding: 8px 18px; border-radius: 24px;
240   border: 1.5px solid var(--g300); background: #fff;
241   font-family: var(--mono); font-size: 11px; color: var(--g600);
242   white-space: nowrap;
243 }
244 .w-chip.on { background: var(--g800); border-color: var(--g800); color: #fff; }
245 
246 /* ─── GRIDS ─────────────────────────────────────────── */
247 .w-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
248 .w-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }
249 .w-grid-4 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 16px; }
250 
251 /* ─── TOUR CARD ─────────────────────────────────────── */
252 .w-tour-card {
253   background: #fff; border-radius: var(--rlg);
254   border: 1.5px solid var(--g200); overflow: hidden;
255 }
256 .w-tour-img {
257   width: 100%; height: 170px; background: var(--g200);
258   display: flex; align-items: center; justify-content: center;
259   font-family: var(--mono); font-size: 9px; color: var(--g500);
260   position: relative;
261 }
262 .w-tour-badge {
263   position: absolute; top: 10px; right: 10px;
264   background: rgba(255,255,255,.9); border: 1px solid var(--g300);
265   border-radius: 20px; padding: 3px 10px;
266   font-family: var(--mono); font-size: 9px; color: var(--g700);
267 }
268 .w-tour-badge.type {
269   top: auto; bottom: 10px; right: 10px;
270   background: var(--g800); color: #fff;
271 }
272 .w-tour-body { padding: 14px 16px 16px; }
273 .w-tour-meta { display: flex; justify-content: space-between; align-items: flex-start; }
274 .w-tour-name { font-size: 14px; font-weight: 600; color: var(--g800); margin-bottom: 6px; }
275 .w-tour-dest { font-family: var(--mono); font-size: 10px; color: var(--g500); margin-bottom: 8px; }
276 .w-tour-price { font-family: var(--mono); font-size: 15px; font-weight: 600; color: var(--g800); }
277 .w-tour-price-lbl { font-family: var(--mono); font-size: 9px; color: var(--g400); }
278 .w-tour-footer {
279   display: flex; align-items: center; justify-content: space-between;
280   margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--g100);
281 }
282 .w-tour-rating { display: flex; align-items: center; gap: 6px; }
283 .w-stars { display: flex; gap: 2px; }
284 .w-star { width: 9px; height: 9px; background: var(--g300); border-radius: 2px; }
285 .w-star.on { background: var(--g700); }
286 .w-tour-duration { font-family: var(--mono); font-size: 10px; color: var(--g500); }
287 .w-tour-loyalty { font-family: var(--mono); font-size: 9px; color: var(--g400); }
288 .w-tour-cta {
289   padding: 7px 14px; background: var(--g800); color: #fff;
290   border-radius: var(--rsm); font-family: var(--mono); font-size: 10px; font-weight: 500;
291 }
292 
293 /* ─── DESTINATION CARD ──────────────────────────────── */
294 .w-dest-card {
295   border-radius: var(--rlg); overflow: hidden;
296   border: 1.5px solid var(--g200); position: relative;
297   background: var(--g300);
298 }
299 .w-dest-img {
300   width: 100%; aspect-ratio: 4/3; background: var(--g300);
301   display: flex; align-items: center; justify-content: center;
302   font-family: var(--mono); font-size: 9px; color: var(--g500);
303 }
304 .w-dest-overlay {
305   position: absolute; inset: 0;
306   background: linear-gradient(to top, rgba(20,20,18,.75) 0%, transparent 50%);
307 }
308 .w-dest-info {
309   position: absolute; bottom: 0; right: 0; left: 0;
310   padding: 14px 16px;
311 }
312 .w-dest-name { font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 3px; }
313 .w-dest-count { font-family: var(--mono); font-size: 10px; color: rgba(255,255,255,.7); }
314 
315 /* ─── FILTER SIDEBAR ────────────────────────────────── */
316 .w-layout-sidebar {
317   display: grid;
318   grid-template-columns: var(--sidebar-w) 1fr;
319   gap: 28px;
320   align-items: start;
321 }
322 .w-sidebar {
323   background: #fff; border-radius: var(--rlg);
324   border: 1.5px solid var(--g200);
325   overflow: hidden; position: sticky; top: calc(var(--nav-h) + 16px);
326 }
327 .w-sidebar-hdr {
328   padding: 14px 18px;
329   border-bottom: 1px solid var(--g200);
330   display: flex; align-items: center; justify-content: space-between;
331 }
332 .w-sidebar-title { font-size: 14px; font-weight: 600; color: var(--g800); }
333 .w-sidebar-reset { font-family: var(--mono); font-size: 10px; color: var(--g500); }
334 .w-filter-section {
335   padding: 14px 18px;
336   border-bottom: 1px solid var(--g100);
337 }
338 .w-filter-title {
339   font-family: var(--mono); font-size: 10px; font-weight: 600;
340   color: var(--g600); text-transform: uppercase; letter-spacing: .07em;
341   margin-bottom: 12px;
342 }
343 .w-filter-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
344 .w-filter-check {
345   width: 16px; height: 16px; border-radius: 4px;
346   border: 1.5px solid var(--g300); flex-shrink: 0;
347 }
348 .w-filter-check.on { background: var(--g700); border-color: var(--g700); }
349 .w-filter-lbl { font-size: 13px; color: var(--g700); flex: 1; }
350 .w-filter-count { font-family: var(--mono); font-size: 10px; color: var(--g400); }
351 .w-range-bar {
352   height: 4px; background: var(--g200); border-radius: 2px;
353   margin: 8px 0; position: relative;
354 }
355 .w-range-fill {
356   position: absolute; inset-inline-start: 10%; inset-inline-end: 30%;
357   height: 100%; background: var(--g700); border-radius: 2px;
358 }
359 .w-range-vals {
360   display: flex; justify-content: space-between;
361   font-family: var(--mono); font-size: 10px; color: var(--g500);
362 }
363 
364 /* ─── SORT BAR ──────────────────────────────────────── */
365 .w-sort-bar {
366   display: flex; align-items: center; justify-content: space-between;
367   margin-bottom: 20px;
368 }
369 .w-results-count { font-family: var(--mono); font-size: 12px; color: var(--g500); }
370 .w-sort-options { display: flex; gap: 8px; }
371 .w-sort-opt {
372   padding: 6px 14px; border-radius: 20px;
373   border: 1.5px solid var(--g300); background: var(--g100);
374   font-family: var(--mono); font-size: 11px; color: var(--g500);
375 }
376 .w-sort-opt.on { background: var(--g700); border-color: var(--g700); color: #fff; }
377 
378 /* ─── TABS (horizontal) ─────────────────────────────── */
379 .w-tabs { display: flex; border-bottom: 2px solid var(--g200); }
380 .w-tab {
381   padding: 12px 20px;
382   font-family: var(--mono); font-size: 12px; color: var(--g400);
383   border-bottom: 2px solid transparent; margin-bottom: -2px;
384   white-space: nowrap;
385 }
386 .w-tab.on { color: var(--g800); font-weight: 600; border-bottom-color: var(--g800); }
387 
388 /* ─── TOUR DETAIL LAYOUT ────────────────────────────── */
389 .w-detail-layout {
390   display: grid;
391   grid-template-columns: 1fr 340px;
392   gap: 32px;
393   align-items: start;
394   padding-top: 28px;
395 }
396 .w-detail-main { }
397 .w-detail-sidebar {
398   position: sticky; top: calc(var(--nav-h) + 16px);
399 }
400 
401 /* Gallery */
402 .w-gallery { border-radius: var(--rlg); overflow: hidden; margin-bottom: 28px; }
403 .w-gallery-main {
404   width: 100%; height: 340px; background: var(--g300);
405   display: flex; align-items: center; justify-content: center;
406   font-family: var(--mono); font-size: 10px; color: var(--g500);
407   position: relative;
408 }
409 .w-gallery-thumbs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; margin-top: 4px; }
410 .w-gallery-thumb {
411   height: 70px; background: var(--g200);
412   display: flex; align-items: center; justify-content: center;
413   font-family: var(--mono); font-size: 8px; color: var(--g400);
414 }
415 .w-gallery-thumb.more {
416   background: rgba(40,40,38,.55);
417   font-size: 13px; font-weight: 600; color: #fff;
418 }
419 
420 /* Tour detail content sections */
421 .w-detail-section { margin-bottom: 28px; }
422 .w-detail-section-title {
423   font-size: 16px; font-weight: 600; color: var(--g800); margin-bottom: 14px;
424 }
425 .w-tl { height: 9px; background: var(--g200); border-radius: 5px; margin-bottom: 8px; }
426 .w-tl.w100 { width: 100%; } .w-tl.w85 { width: 85%; }
427 .w-tl.w70 { width: 70%; } .w-tl.w50 { width: 50%; }
428 
429 /* Itinerary */
430 .w-day-item {
431   display: flex; gap: 16px;
432   padding: 16px 0;
433   border-bottom: 1px solid var(--g100);
434 }
435 .w-day-item:last-child { border-bottom: none; }
436 .w-day-num {
437   width: 40px; height: 40px; border-radius: 50%;
438   border: 2px solid var(--g300); background: var(--g100);
439   display: flex; align-items: center; justify-content: center;
440   font-family: var(--mono); font-size: 11px; font-weight: 600; color: var(--g600);
441   flex-shrink: 0;
442 }
443 .w-day-body { flex: 1; }
444 .w-day-title { font-size: 13px; font-weight: 600; color: var(--g800); margin-bottom: 6px; }
445 
446 /* Includes / Excludes grid */
447 .w-inc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
448 .w-inc-item { display: flex; align-items: center; gap: 8px; }
449 .w-inc-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--g400); flex-shrink: 0; }
450 .w-inc-dot.yes { background: var(--g700); }
451 .w-inc-lbl { font-size: 12px; color: var(--g600); }
452 
453 /* ─── BOOKING WIDGET (sidebar) ──────────────────────── */
454 .w-booking-widget {
455   background: #fff; border-radius: var(--rlg);
456   border: 1.5px solid var(--g200);
457   overflow: hidden;
458 }
459 .w-bw-header { padding: 18px 20px; border-bottom: 1px solid var(--g200); }
460 .w-bw-price { font-family: var(--mono); font-size: 22px; font-weight: 600; color: var(--g800); }
461 .w-bw-price-lbl { font-family: var(--mono); font-size: 10px; color: var(--g400); }
462 .w-bw-loyalty {
463   margin-top: 6px; font-family: var(--mono); font-size: 10px; color: var(--g500);
464   background: var(--g100); padding: 4px 10px; border-radius: 20px;
465   display: inline-block; border: 1px solid var(--g200);
466 }
467 .w-bw-body { padding: 18px 20px; }
468 .w-bw-field {
469   margin-bottom: 12px; border: 1.5px solid var(--g300);
470   border-radius: var(--rsm); padding: 10px 14px;
471 }
472 .w-bw-field-lbl { font-family: var(--mono); font-size: 9px; color: var(--g400); text-transform: uppercase; letter-spacing: .07em; margin-bottom: 5px; }
473 .w-bw-field-val { height: 14px; background: var(--g200); border-radius: 4px; width: 65%; }
474 .w-bw-divider { border: none; border-top: 1px solid var(--g100); margin: 14px 0; }
475 .w-bw-row { display: flex; justify-content: space-between; margin-bottom: 8px; }
476 .w-bw-lbl { font-family: var(--mono); font-size: 11px; color: var(--g500); }
477 .w-bw-val { font-family: var(--mono); font-size: 11px; color: var(--g700); font-weight: 500; }
478 .w-bw-total-row { display: flex; justify-content: space-between; padding-top: 12px; border-top: 1.5px solid var(--g200); }
479 .w-bw-total-lbl { font-size: 13px; font-weight: 600; color: var(--g800); }
480 .w-bw-total-val { font-family: var(--mono); font-size: 16px; font-weight: 700; color: var(--g800); }
481 .w-bw-cta {
482   display: block; width: 100%; margin-top: 16px;
483   padding: 14px; background: var(--g800); color: #fff; text-align: center;
484   border-radius: var(--rmd); font-family: var(--mono); font-size: 12px; font-weight: 600;
485   letter-spacing: .04em;
486 }
487 .w-bw-guest-note {
488   margin-top: 10px; font-family: var(--mono); font-size: 10px; color: var(--g400);
489   text-align: center; line-height: 1.5;
490 }
491 
492 /* ─── STEPPER ───────────────────────────────────────── */
493 .w-stepper {
494   display: flex; align-items: center;
495   padding: 16px 40px;
496   background: #fff; border-bottom: 1.5px solid var(--g200);
497 }
498 .w-step { display: flex; align-items: center; gap: 8px; flex: 1; }
499 .w-step:last-child { flex: none; }
500 .w-step-num {
501   width: 28px; height: 28px; border-radius: 50%;
502   border: 2px solid var(--g300); background: var(--g100);
503   display: flex; align-items: center; justify-content: center;
504   font-family: var(--mono); font-size: 11px; font-weight: 600; color: var(--g500);
505   flex-shrink: 0;
506 }
507 .w-step-num.on { background: var(--g800); border-color: var(--g800); color: #fff; }
508 .w-step-num.done { background: var(--g600); border-color: var(--g600); color: #fff; }
509 .w-step-lbl { font-family: var(--mono); font-size: 11px; color: var(--g500); }
510 .w-step-lbl.on { color: var(--g800); font-weight: 600; }
511 .w-step-line { flex: 1; height: 2px; background: var(--g200); margin: 0 8px; }
512 .w-step-line.done { background: var(--g600); }
513 
514 /* ─── PAYMENT LAYOUT ────────────────────────────────── */
515 .w-pay-layout { display: grid; grid-template-columns: 1fr 360px; gap: 28px; align-items: start; }
516 
517 .w-pay-card {
518   background: #fff; border-radius: var(--rlg); border: 1.5px solid var(--g200);
519   overflow: hidden; margin-bottom: 16px;
520 }
521 .w-pay-card-hdr {
522   padding: 14px 20px; border-bottom: 1px solid var(--g200);
523   font-size: 15px; font-weight: 600; color: var(--g800);
524 }
525 .w-pay-card-body { padding: 18px 20px; }
526 
527 .w-pay-method {
528   display: flex; align-items: center; gap: 14px;
529   padding: 14px 16px; border-radius: var(--rmd);
530   border: 1.5px solid var(--g200); margin-bottom: 10px; background: var(--g100);
531 }
532 .w-pay-method.on { border-color: var(--g700); background: #fff; }
533 .w-pay-radio { width: 18px; height: 18px; border-radius: 50%; border: 2px solid var(--g300); flex-shrink: 0; }
534 .w-pay-radio.on { border-color: var(--g700); box-shadow: inset 0 0 0 4px var(--g700); }
535 .w-pay-icon { width: 48px; height: 30px; background: var(--g200); border-radius: 4px; border: 1px solid var(--g300); flex-shrink: 0; }
536 .w-pay-lbl { flex: 1; font-size: 13px; color: var(--g700); font-weight: 500; }
537 .w-pay-sub { font-family: var(--mono); font-size: 10px; color: var(--g400); margin-top: 2px; }
538 
539 /* Loyalty toggle row */
540 .w-loyalty-row {
541   display: flex; align-items: center; justify-content: space-between;
542   padding: 14px 16px; border-radius: var(--rmd);
543   border: 1.5px solid var(--g200); background: var(--g100);
544 }
545 .w-loyalty-lbl { font-size: 13px; color: var(--g700); }
546 .w-loyalty-bal { font-family: var(--mono); font-size: 11px; color: var(--g500); margin-top: 2px; }
547 .w-toggle { width: 40px; height: 22px; background: var(--g700); border-radius: 11px; position: relative; flex-shrink: 0; }
548 .w-toggle-knob { width: 16px; height: 16px; background: #fff; border-radius: 50%; position: absolute; top: 3px; right: 3px; }
549 
550 /* Order summary */
551 .w-order-summary {
552   background: #fff; border-radius: var(--rlg);
553   border: 1.5px solid var(--g200); overflow: hidden;
554   position: sticky; top: calc(var(--nav-h) + 16px);
555 }
556 .w-os-header { padding: 16px 20px; border-bottom: 1px solid var(--g200); }
557 .w-os-title { font-size: 14px; font-weight: 600; color: var(--g800); }
558 .w-os-img { width: 100%; height: 120px; background: var(--g200); }
559 .w-os-body { padding: 16px 20px; }
560 .w-os-row { display: flex; justify-content: space-between; margin-bottom: 10px; }
561 .w-os-lbl { font-family: var(--mono); font-size: 11px; color: var(--g500); }
562 .w-os-val { font-family: var(--mono); font-size: 11px; color: var(--g700); font-weight: 500; }
563 .w-os-divider { border: none; border-top: 1px solid var(--g200); margin: 12px 0; }
564 .w-os-total-row { display: flex; justify-content: space-between; }
565 .w-os-total-lbl { font-size: 14px; font-weight: 600; color: var(--g800); }
566 .w-os-total-val { font-family: var(--mono); font-size: 18px; font-weight: 700; color: var(--g800); }
567 .w-os-cta {
568   display: block; width: calc(100% - 40px); margin: 16px 20px;
569   padding: 14px; background: var(--g800); color: #fff; text-align: center;
570   border-radius: var(--rmd); font-family: var(--mono); font-size: 12px; font-weight: 600;
571   letter-spacing: .04em;
572 }
573 
574 /* ─── BANNER / PROMO ────────────────────────────────── */
575 .w-promo {
576   background: var(--g200); border-radius: var(--rlg);
577   padding: 28px 32px;
578   display: flex; align-items: center; justify-content: space-between;
579   border: 1.5px solid var(--g300);
580 }
581 .w-promo-title { font-size: 18px; font-weight: 600; color: var(--g800); margin-bottom: 6px; }
582 .w-promo-sub { font-family: var(--mono); font-size: 12px; color: var(--g500); }
583 .w-promo-img { width: 140px; height: 80px; background: var(--g300); border-radius: var(--rmd); }
584 .w-promo-btn {
585   margin-top: 16px; display: inline-block;
586   padding: 10px 22px; background: var(--g800); color: #fff;
587   border-radius: var(--rmd); font-family: var(--mono); font-size: 11px; font-weight: 600;
588 }
589 
590 /* ─── BLOG CARD ─────────────────────────────────────── */
591 .w-blog-card {
592   background: #fff; border-radius: var(--rlg);
593   border: 1.5px solid var(--g200); overflow: hidden;
594 }
595 .w-blog-img {
596   width: 100%; height: 140px; background: var(--g200);
597   display: flex; align-items: center; justify-content: center;
598   font-family: var(--mono); font-size: 9px; color: var(--g500);
599 }
600 .w-blog-body { padding: 14px 16px; }
601 .w-blog-cat { font-family: var(--mono); font-size: 9px; color: var(--g500); text-transform: uppercase; letter-spacing: .08em; margin-bottom: 6px; }
602 .w-blog-title { font-size: 14px; font-weight: 600; color: var(--g800); margin-bottom: 8px; line-height: 1.4; }
603 
604 /* ─── FOOTER ─────────────────────────────────────────── */
605 .w-footer {
606   background: var(--g800); color: var(--g400);
607   padding: 40px 40px 24px;
608 }
609 .w-footer-grid {
610   max-width: var(--max-w); margin: 0 auto;
611   display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
612   gap: 32px; padding-bottom: 32px;
613   border-bottom: 1px solid var(--g700);
614 }
615 .w-footer-logo { width: 100px; height: 28px; background: var(--g600); border-radius: 4px; margin-bottom: 12px; }
616 .w-footer-desc { font-size: 12px; line-height: 1.7; color: var(--g500); }
617 .w-footer-col-title { font-size: 12px; font-weight: 600; color: var(--g300); margin-bottom: 14px; }
618 .w-footer-link { font-family: var(--mono); font-size: 11px; color: var(--g500); display: block; margin-bottom: 8px; }
619 .w-footer-bottom {
620   max-width: var(--max-w); margin: 0 auto;
621   padding-top: 20px; display: flex; justify-content: space-between;
622   font-family: var(--mono); font-size: 10px; color: var(--g600);
623 }
624 
625 /* ─── MOBILE ANNOTATION ─────────────────────────────── */
626 .w-mobile-note {
627   background: var(--g100); border: 1.5px dashed var(--g300);
628   border-radius: var(--rmd); padding: 12px 16px;
629   margin-top: 8px;
630   font-family: var(--mono); font-size: 10px; color: var(--g500); line-height: 1.6;
631 }
632 .w-mobile-note-title { font-weight: 600; color: var(--g700); margin-bottom: 4px; }
633 
634 /* ─── FORM FIELDS ───────────────────────────────────── */
635 .w-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 20px; }
636 .w-field { }
637 .w-field-lbl { font-family: var(--mono); font-size: 9px; color: var(--g400); text-transform: uppercase; letter-spacing: .07em; margin-bottom: 6px; }
638 .w-field-inp { height: 42px; background: #fff; border: 1.5px solid var(--g300); border-radius: var(--rsm); padding: 0 14px; }
639 .w-field-inp.focused { border-color: var(--g600); }
640 
641 /* Traveler accordion */
642 .w-traveler-block {
643   background: #fff; border-radius: var(--rlg);
644   border: 1.5px solid var(--g200); overflow: hidden; margin-bottom: 12px;
645 }
646 .w-traveler-hdr {
647   padding: 14px 20px; display: flex; align-items: center; justify-content: space-between;
648 }
649 .w-traveler-title { font-size: 14px; font-weight: 600; color: var(--g800); }
650 .w-traveler-badge {
651   font-family: var(--mono); font-size: 10px; color: var(--g500);
652   background: var(--g100); padding: 3px 10px; border-radius: 20px; border: 1px solid var(--g200);
653 }
654 .w-traveler-body { padding: 0 20px 20px; border-top: 1px solid var(--g100); }
655 
656 /* ─── UTILITIES ─────────────────────────────────────── */
657 .sp { height: 12px; } .sp-sm { height: 6px; } .sp-lg { height: 24px; } .sp-xl { height: 40px; }
658 .divider { border: none; border-top: 1px solid var(--g200); }
659 
660 /* Disable pointer events (wireframe mode) */
661 button, .w-tour-cta, .w-bw-cta, .w-os-cta, .w-nav-btn,
662 .w-search-btn, .w-promo-btn, .w-chip, .w-tab,
663 .w-sort-opt, .w-pay-method, .w-filter-check {
664   pointer-events: none;
665 }
```

