import{r as n,m as g,i as c,Q as a,j as s,P as h}from"./index-m-eWRAVj.js";import{B as p}from"./Toast-KVdhVArs.js";import{b as j}from"./index.esm-5AkatTaU.js";import{H as w}from"./HomeSidebar-ovSdexXJ.js";import"./index.esm-IW_VCk-f.js";import"./Menu-ML_fOrjv.js";import"./index.esm-XQb_oNS5.js";import"./index.esm-mYd38-lK.js";function S(){const[d,i]=n.useState([]),[u,o]=n.useState([]),m=g();n.useEffect(()=>{(async()=>{try{const e=await c.get("/users",{withCredentials:!0});e.data&&(i(e.data.suggestion),o(e.data.userList))}catch(e){const l=e;a.error(l.message)}})()},[]);function f(e){(async()=>{try{const l=await c.post("/users",{id:e},{withCredentials:!0});l.data&&(a(l.data.message),i(t=>t.map(r=>(r.user_id===e&&(r.followed=!0),r))),o(t=>t.map(r=>(r.user_id===e&&(r.followed=!0),r))))}catch(l){const t=l;a.error(t.message)}})()}function x(e){(async()=>{try{const l=await c.post("/users/unfollow",{id:e},{withCredentials:!0});l.data&&(a(l.data.message),i(t=>t.map(r=>(r.user_id===e&&(r.followed=!1),r))),o(t=>t.map(r=>(r.user_id===e&&(r.followed=!1),r))))}catch(l){const t=l;a.error(t.message)}})()}return s.jsxs("div",{className:"flex flex-col",children:[s.jsx(w,{}),s.jsxs("div",{className:"section md:ms-80 p-5",children:[s.jsx(p,{"aria-label":"Default breadcrumb example",children:s.jsx(p.Item,{href:"#",icon:j,children:"Find Friends"})}),d.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("h1",{className:"my-3",children:"Suggestions for you"}),s.jsx("section",{className:"suggested-for-you flex gap-5 py-5 flex-wrap justify-center sm:justify-start",children:d.map(e=>s.jsxs("div",{className:"friend-card bg-gray-900 rounded-md flex flex-col items-center w-56 shadow-md p-3",children:[s.jsx("div",{className:"header w-32 rounded-md mb-3",onClick:()=>m(`/view-profile/${e.user_id}`),children:e.profile_img?s.jsx("img",{src:e.profile_img,alt:"",className:"rounded-lg"}):s.jsx(h,{email:(e==null?void 0:e.email)||"",size:"large"})}),s.jsx("h1",{children:e.username}),s.jsxs("div",{className:"connections_details w-full flex justify-between py-3",children:[s.jsxs("div",{className:"followers flex flex-col items-center justify-center text-sm",children:[s.jsx("h1",{children:e.followers}),s.jsx("span",{className:"text-sm",children:"followers"})]}),s.jsxs("div",{className:"following text-sm flex flex-col items-center justify-center",children:[s.jsx("h1",{children:e.following}),s.jsx("span",{className:"text-sm",children:"following"})]})]}),e.followed?s.jsx("button",{className:"btn bg-primary p-2 px-8 rounded-md text-white hover:bg-primary-hover",onClick:()=>x(e.user_id),children:"Unfollow"}):s.jsx("button",{className:"btn bg-primary p-2 px-8 rounded-md text-white hover:bg-primary-hover",onClick:()=>f(e.user_id),children:"Follow"})]}))})]}),s.jsx("h1",{className:"my-5",children:"People You may know"}),s.jsx("section",{className:"suggested-for-you flex gap-5 py-5 flex-wrap justify-center sm:justify-start",children:u.map(e=>s.jsxs("div",{className:"friend-card bg-gray-900 rounded-md flex flex-col items-center w-56 shadow-md p-3",children:[s.jsx("div",{className:"header w-32 rounded-md mb-3",onClick:()=>m(`/view-profile/${e.user_id}`),children:e.profile_img?s.jsx("img",{src:e.profile_img,alt:"",className:"rounded-lg"}):s.jsx(h,{email:(e==null?void 0:e.email)||"",size:"large"})}),s.jsx("h1",{children:e.username}),s.jsxs("div",{className:"connections_details w-full flex justify-between py-3",children:[s.jsxs("div",{className:"followers flex flex-col items-center justify-center text-sm",children:[s.jsx("h1",{children:e.followers}),s.jsx("span",{className:"text-sm",children:"followers"})]}),s.jsxs("div",{className:"following text-sm flex flex-col items-center justify-center",children:[s.jsx("h1",{children:e.following}),s.jsx("span",{className:"text-sm",children:"following"})]})]}),e.followed?s.jsx("button",{className:"btn bg-primary p-2 px-8 rounded-md text-white hover:bg-primary-hover",onClick:()=>x(e.user_id),children:"Unfollow"}):s.jsx("button",{className:"btn bg-primary p-2 px-8 rounded-md text-white hover:bg-primary-hover",onClick:()=>f(e.user_id),children:"Follow"})]}))})]})]})}export{S as default};
