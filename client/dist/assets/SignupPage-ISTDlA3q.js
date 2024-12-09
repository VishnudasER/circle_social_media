import{r as n,j as e,i as A,Q as j,m as z,a as F,u as L,bt as M,ab as C,L as O,bc as P}from"./index-m-eWRAVj.js";import{u as k}from"./formValidate-Cjawh5Gv.js";import{S as I,A as V,G as D}from"./GoogleAuth-7AVxzbq0.js";import{M as E,A as H,H as U,b as G}from"./Toast-KVdhVArs.js";import"./extendSxProp-ya0F_tEc.js";import"./index.esm-5AkatTaU.js";function T({openModal:w,setOpenModal:x,setIsSubmit:v,email:f}){const[r,N]=n.useState(""),a=n.useRef(null),o=n.useRef(null),l=n.useRef(null),i=n.useRef(null);async function y(){var s;if(a.current&&o.current&&l.current&&i.current){const t=a.current.value,u=o.current.value,p=l.current.value,c=i.current.value;if(t&&u&&p&&c){const g=t+u+p+c;try{const m=await A.post("/verify-otp",{otp:g,email:f});m.data.matchOtp?(v(!0),x(!1)):N(m.data.message)}catch(m){const h=m;j.error((s=h.response)==null?void 0:s.data.message)}}}}return e.jsxs(E,{show:w,size:"md",onClose:()=>x(!1),popup:!0,children:[e.jsx(E.Header,{}),e.jsxs(E.Body,{children:[e.jsx("h3",{className:"text-xl font-medium text-gray-900 dark:text-white",children:"Enter the OTP"}),r&&e.jsxs(H,{color:"failure",icon:U,children:[e.jsx("span",{className:"font-medium",children:"Alert!"}),r]}),e.jsxs("div",{className:"otp-box",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(G,{htmlFor:"email",value:"Please input the OTP that has been sent to you."})}),e.jsxs("div",{className:"inputs flex justify-around py-5",children:[e.jsx("input",{type:"number",size:1,className:"w-12 h-12 rounded-lg",ref:a,autoFocus:!0,onChange:s=>{var t;s.target.value&&s.target.value.length>1&&a.current&&(a.current.value=s.target.value[1]),(t=o.current)==null||t.focus()}}),e.jsx("input",{type:"number",size:1,className:"w-12 h-12 rounded-lg",ref:o,onChange:s=>{var t;s.target.value&&s.target.value.length>1&&o.current&&(o.current.value=s.target.value[1]),(t=l.current)==null||t.focus()}}),e.jsx("input",{type:"number",size:1,className:"w-12 h-12 rounded-lg",ref:l,onChange:s=>{var t;s.target.value&&s.target.value.length>1&&l.current&&(l.current.value=s.target.value[1]),(t=i.current)==null||t.focus()}}),e.jsx("input",{type:"number",size:1,maxLength:1,className:"w-12 h-12 rounded-lg",ref:i,onChange:s=>{s.target.value&&s.target.value.length>1&&i.current&&(i.current.value=s.target.value[1]),y()}})]})]})]})]})}const Z=()=>{const[w,x]=n.useState(!1),[v,f]=n.useState(!1),[r,N]=n.useState({email:"",password:"",username:""}),[a,o]=n.useState({email:"",password:"",username:""}),[l,i]=n.useState(!1),y=z(),s=F(),{user:t,isError:u,isSuccess:p,errorMessage:c,status:g,isLoading:m}=L(d=>d.auth);function h(d){const{name:b,value:S}=d.target;N({...r,[b]:S})}n.useEffect(()=>{(async()=>{var d;if(v&&!a.email&&!a.username&&!a.password)try{const b=await A.post("/verify-mail",{email:r.email});f(!1),b.data.exists?j.error("Email already exists"):x(!0)}catch(b){f(!1);const S=b;j.error((d=S.response)==null?void 0:d.data.message)}})()},[v,a,r]);function R(){o({...a,email:k("email",r.email),username:k("username",r.username),password:k("password",r.password)}),f(!0)}return n.useEffect(()=>{l&&!a.email&&!a.username&&!a.password&&(s(M(r)),i(!1))},[l,a,s,r]),n.useEffect(()=>{u&&g!==409&&(j(c),s(C())),p&&(s(C()),j("user registerd successfully"),(t==null?void 0:t.role)==="USER"&&y("/"))},[p,t==null?void 0:t.role,y,g,s,u,c]),e.jsxs(e.Fragment,{children:[e.jsx(T,{openModal:w,setOpenModal:x,setIsSubmit:i,email:r.email}),m?e.jsx(O,{}):e.jsxs("section",{className:"signup w-screen h-screen flex justify-center md:justify-between px-3 ",children:[e.jsxs("div",{className:"left-area  hidden md:flex w-1/2 relative pl-8 md:ps-15",children:[e.jsx("div",{className:"rectangle-box absolute bg-primary"}),e.jsx("img",{src:"https://lh3.google.com/u/0/d/1ee8WvmzqA1SFPI8N9VkCZ_hZkENV0bjX",alt:"signup",className:"signup-img absolute sm:bottom-20 md:bottom-10 md:right-15"})]}),e.jsx("div",{className:"right-area md:w-1/2 flex justify-center items-center",children:e.jsx("div",{className:"relative px-4 py-10 bg-white md:mx-0 shadow rounded-3xl sm:p-10 h-min",children:e.jsxs("div",{className:"max-w-md mx-auto",children:[e.jsx("div",{className:"flex items-center space-x-5 justify-center text-2xl mb-5",children:"Signup"}),u&&g===409?e.jsx(I,{sx:{width:"100%"},spacing:2,children:e.jsx(V,{variant:"filled",severity:"error",children:c})}):null,e.jsxs("div",{className:"mt-5 text-black",children:[e.jsx("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"E-mail"}),a.email?e.jsx("small",{className:"text-red-600",children:a.email}):null,e.jsx("input",{className:"border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full",type:"text",id:"login",onChange:h,name:"email",value:r.email}),e.jsx("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"User Name"}),a.username?e.jsx("small",{className:"text-red-600 flex",children:a.username}):null,e.jsx("input",{className:"border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full",type:"text",id:"username",onChange:h,name:"username",value:r.username}),e.jsx("label",{className:"font-semibold text-sm text-gray-600 pb-1 block",children:"Password"}),a.password?e.jsx("small",{className:"text-red-600 flex",children:a.password}):null,e.jsx("input",{className:"border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full",type:"password",id:"password",onChange:h,name:"password",value:r.password})]}),e.jsx("div",{className:"mt-5",children:e.jsx("button",{className:"py-2 px-4 bg-primary hover:bg-primary-hover focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg",type:"button",onClick:R,children:"Sign up"})}),e.jsx("div",{className:"flex justify-center w-full items-center",children:e.jsx("div",{className:"mt-6",children:e.jsx(D,{})})}),e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx("span",{className:"w-1/5 border-b dark:border-gray-600 md:w-1/4"}),e.jsx(P,{to:"/login",className:"text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline",children:"OR sign In"}),e.jsx("span",{className:"w-1/5 border-b dark:border-gray-400 md:w-1/4"})]})]})})})]})]})},$=Z;function J(){return e.jsx(e.Fragment,{children:e.jsx($,{})})}export{J as default};
