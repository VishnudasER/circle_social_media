import{a as _,r as n,i as j,Q as c,j as e,D as N,a_ as S}from"./index-m-eWRAVj.js";import{M as o,b as p,m as k,f as A}from"./Toast-KVdhVArs.js";import"./index.esm-5AkatTaU.js";function I({openModal:d,setOpenModal:h,myInterest:g}){const v=_(),[a,u]=n.useState(),[l,x]=n.useState([]),[i,m]=n.useState([]),f={width:"100%",height:"40px"};n.useEffect(()=>{(async()=>{var t;try{if(d){const s=await j.get("/manage-account/interest",{withCredentials:!0});s.data&&(u(s.data.interest),u(s.data.interest.filter(r=>{if(!g.find(w=>w._id===r._id))return r})))}}catch(s){const r=s;c.error((t=r.response)==null?void 0:t.data.message)}})()},[d]);function y(t){const s=a==null?void 0:a.find(r=>r._id===t.target.value);s&&(i!=null&&i.includes(s._id)||(m(r=>[...r,t.target.value]),x(r=>[...r,s])))}function C(t){m(s=>s.filter(r=>r!==t)),x(s=>s.filter(r=>r._id!==t))}async function b(){try{if(i.length>0){const t=await j.post("/manage-account/interest/add-interest",{choosedId:i},{withCredentials:!0});t.data&&(v(S()),c(t.data.message),h(!1))}}catch(t){const s=t;c.error(s.message)}}return e.jsxs(o,{show:d,size:"md",onClose:()=>h(!1),popup:!0,children:[e.jsx(o.Header,{}),e.jsx(o.Body,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-xl font-medium text-gray-900 dark:text-white",children:"Add Interest"}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2 block",children:[e.jsx(p,{htmlFor:"email",value:"Added interest"}),l==null?void 0:l.map(t=>e.jsxs("div",{className:" flex items-baseline",children:[e.jsx("h1",{children:t.interest}),e.jsx("div",{onClick:()=>C(t._id),children:e.jsx(N,{size:15})})]}))]}),e.jsx("div",{className:"mb-2 block",children:e.jsx(p,{htmlFor:"email",value:"Choose interest"})}),e.jsx("div",{children:e.jsxs(k,{id:"countries",required:!0,style:f,onChange:y,value:"",children:[e.jsx("option",{children:"choose your interest"}),a==null?void 0:a.map(t=>e.jsx(e.Fragment,{children:e.jsx("option",{value:t._id,children:t.interest})}))]})})]}),e.jsx("div",{className:"w-full",children:e.jsx(A,{style:f,onClick:b,children:"Update"})})]})})]})}export{I as default};
