import{r as t,u as f,i as g,Q as x,j as s}from"./index-m-eWRAVj.js";import{P as j}from"./PostModal-Qoanxz9C.js";import{a as o}from"./Skeleton--cpLnyrr.js";import{I as v,a as S}from"./ImageListItem-YsXFl5VX.js";import"./Toast-KVdhVArs.js";import"./index.esm-5AkatTaU.js";import"./index.esm-1llS7C12.js";import"./usehandleError-m2VEsqkY.js";import"./Badge-w0IGsy5p.js";import"./Typography-b7OtY1B2.js";import"./extendSxProp-ya0F_tEc.js";import"./createBox-2xx0UrTx.js";function D(){const[i,l]=t.useState([]),{isSuccess:d}=f(e=>e.post),[m,a]=t.useState(!1),[u,n]=t.useState(!1),[c,p]=t.useState(null);function h(e){n(!0),p(e)}return t.useEffect(()=>{(async()=>{try{a(!0);const e=await g.get("/profile/saved-posts",{withCredentials:!0});e.data&&(a(!1),l(e.data.posts))}catch(e){a(!1);const r=e;x.error(r.message)}})()},[d]),s.jsxs("div",{children:[s.jsx("section",{className:"posts p-5",children:m?s.jsxs("div",{className:"loader flex gap-5 justify-around",children:[s.jsx(o,{variant:"rectangular",width:210,height:118}),s.jsx(o,{variant:"rectangular",width:210,height:118}),s.jsx(o,{variant:"rectangular",width:210,height:118})]}):s.jsx(v,{style:{overflow:"hidden",height:"100%"},className:"image-list",variant:"masonry",cols:3,gap:1,children:i&&i.map((e,r)=>s.jsx(S,{className:"",children:s.jsx("div",{className:"content p-2 shadow-md",onClick:()=>h(e),children:e.type.includes("image")?s.jsx("img",{src:e==null?void 0:e.content,className:"w-full rounded-md"}):s.jsx("div",{className:"relative",children:s.jsxs("video",{className:"w-full",muted:!0,children:[s.jsx("source",{src:e==null?void 0:e.content,type:"video/mp4"}),"Error Message"]})})})},r))})}),c&&s.jsx(j,{openModal:u,setOpenModal:n,type:"SAVED",post:c})]})}export{D as default};