import{m as v,r as n,u,F as S,a4 as w,j as s,L as _,Q as r,i as E,a5 as I}from"./index-m-eWRAVj.js";function C(){const h=v(),[x,p]=n.useState(!1),{userProfile:c}=u(e=>e.user),{user:d}=u(e=>e.auth),[j,f]=n.useState([]),{id:l}=S(),[a,y]=n.useState(null),[o,m]=n.useState("PROFILE_VISIT");n.useEffect(()=>{(async()=>{const e=await w();e.plan&&f(e.plan)})()},[]);async function g(e){e.razorpay_order_id&&e.razorpay_payment_id&&e.razorpay_signature&&l&&(p(!0),(await I(l,a==null?void 0:a._id,a==null?void 0:a.amount,o,e)).boostedPost&&(p(!1),r.success("Your post boosted successfully"),h("/profile")))}async function N(){var e;if(a||r.error("Please select a plan"),o||r.error("Please select an objective"),!l)r.error("Post not found");else try{const t=await E.post("/posts/create-payment",{post_id:l,plan_id:a==null?void 0:a._id});if(t.data.order){const i={key:"rzp_test_qYNtji31kEDmBr",amount:t.data.order.amount,currency:"INR",name:"Payment razorpay",description:"Test Transaction",image:"https://example.com/your_logo",order_id:t.data.order.id,handler:function(b){g(b)},prefill:{name:c==null?void 0:c.username,email:d==null?void 0:d.email},theme:{color:"#3399cc"}};new window.Razorpay(i).open()}}catch(t){const i=t;i.response?r.error((e=i.response)==null?void 0:e.data.message):r.error(i.message)}}return s.jsx(s.Fragment,{children:x?s.jsx(_,{}):s.jsxs("section",{className:"post-boos p-10 grid grid-cols-3",children:[s.jsxs("div",{className:"plan-selection col-span-3 md:col-span-2",children:[s.jsxs("div",{className:"header mb-10",children:[s.jsx("h1",{className:"text-2xl mb-3",children:"Boost Post"}),s.jsx("p",{className:"text-sm w-3/4",children:"Boost this post into an ad to increase your reach. We’ll automatically format it for different placements across Circle and run it wherever it’s likely to perform best."})]}),s.jsx("label",{htmlFor:"",className:"text-lg",children:"What do you want people to do when they see your ad?"}),s.jsxs("div",{className:"action py-5 flex flex-col gap-3",children:[s.jsxs("div",{className:"list-group w-1/2 flex justify-between",children:[s.jsx("label",{htmlFor:"",children:"Visit Your Profile"}),s.jsx("input",{type:"radio",value:"PROFILE_VISIT",defaultChecked:!0,name:"action",id:"",onChange:e=>m(e.target.value)})]}),s.jsxs("div",{className:"list-group w-1/2 flex justify-between",children:[s.jsx("label",{htmlFor:"",children:"Visit Your Website"}),s.jsx("input",{type:"radio",value:"WEBSITE",name:"action",id:"",onChange:e=>m(e.target.value)})]}),s.jsxs("div",{className:"list-group w-1/2 flex justify-between",children:[s.jsx("label",{htmlFor:"",children:"Message You"}),s.jsx("input",{type:"radio",value:"MESSAGE",name:"action",id:"",onChange:e=>m(e.target.value)})]})]}),s.jsxs("div",{className:"select-plan my-5",children:[s.jsx("h1",{className:"text-lg",children:"Select a plan"}),s.jsx("div",{className:"plans-container flex gap-5 mt-3 flex-wrap",children:j.map((e,t)=>s.jsxs("div",{className:`w-48 h-48 bg-gray-900 rounded-md flex flex-col items-center p-3 shadow-lg ${(a==null?void 0:a._id)===e._id&&"border"}`,onClick:()=>y(e),children:[s.jsxs("h1",{className:"text-4xl",children:["₹",e.amount," "]}),s.jsxs("p",{children:["For"," ",Math.floor(e.duration/30)," ","Month"]}),s.jsx("small",{className:"text-center mt-5",children:e.discription})]},t))})]})]}),s.jsxs("section",{className:"payment-summary col-span-3 md:col-span-1",children:[s.jsx("h1",{className:"text-xl",children:"Boost Summary"}),s.jsxs("div",{className:"summary mt-5",children:[s.jsxs("ul",{className:"flex flex-col gap-3",children:[s.jsx("li",{children:s.jsxs("div",{className:"grid grid-cols-2",children:[s.jsx("h1",{className:"cols-span-1",children:"Objective"}),s.jsx("h1",{className:"col-span-1",children:o==="PROFILE_VISIT"?"Visit Profile":o==="MESSAGE"?"Message You":o==="WEBSITE"?"Visit your Website":null})]})}),s.jsx("li",{children:s.jsxs("div",{className:"grid grid-cols-2",children:[s.jsx("h1",{className:"col-span-1",children:"Plan"}),a&&s.jsxs("h1",{className:"col-span-1",children:["₹",a==null?void 0:a.amount," ","For"," ",(a==null?void 0:a.duration)&&(a==null?void 0:a.duration)/30," ","Month"]})]})})]}),s.jsxs("div",{className:"button py-8",children:[s.jsx("button",{className:"px-4 py-2 bg-red-600 hover:bg-red-800 rounded-md",children:"Cancel"}),s.jsx("button",{className:"pay-button px-3 py-2 ms-5 bg-primary hover:bg-primary-hover rounded-md",onClick:N,children:"Proceed to play"})]})]})]})]})})}export{C as default};
