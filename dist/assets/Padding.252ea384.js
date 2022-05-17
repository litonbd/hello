import{r as i,o as h,c as f,b as n,w as o,a as e,u as s,F as g,g as t}from"./vendor.423e1a73.js";const a=`
    <div class="p-xs-0 p-sm-2 p-md-3 p-lg-4 p-xl-5 p-xxl-7" style="border: 1px solid green;">
    This text has equal padding on all four sides. Use several classes for using different values on
    different screen size. 
    </div>
`,r=`
    <div class="p-4" style="border: 1px solid green;">
    Fox fixed value on all screen you can use only p-1, p-2, ... p-7. This text used p-4 class.
    </div>
`,p=`
    <div class="px-sm-3 px-md-6" style="border: 1px solid green;">
        Equal padding for both left and right side. Also for fixed value on all screen you can use 
        px-0, px-1, ... px-7.
    </div>
`,c=`
    <div class="py-sm-3 py-xl-5" style="border: 1px solid green;">
    Equal padding for both Top and Bottom. Also for fixed value on all screen you can use 
    py-0, py-1, ... py-7.
    </div>
`,u=`
    <div class="ps-1 pt-2 pe-3 pb-4" style="border: 1px solid green;">
    you can also use 'pl' and 'pr' prefix for left and right padding individually.
    It's also possible to use responsive prefix. xs, sm, md, lg, xl, xxl.
    </div>
`,_=`
    <div class="ps-3 pe-5" lang="ar" style="border: 1px solid green;">
        ps-3 class define start padding and ps-6 class define end padding. For responsiveness you 
        can also use ps-sm-3, ps-lg-4, pe-xl-5 etc.
    </div>
`,m=t("Padding on all sides"),x=e("p",null,[t(" The prefix `p` is used to add padding on all sides (top, right, bottom and left). See the example below with all responsive modifiers. Tip: Resize your window to see the differences in different screen sizes."),e("br"),e("br")],-1),v=e("b",null,"Responsive:",-1),y=["innerHTML"],b=e("br",null,null,-1),T=e("b",null,"Fixed:",-1),L=["innerHTML"],H=t("Padding left and right"),M=e("p",null," You can set same padding on both left and right sides with the `px` class as follows: ",-1),w=["innerHTML"],A=t("Padding top and bottom"),B=e("p",null," You can set same padding on both top and bottom side with the `py` class as follows: ",-1),F=["innerHTML"],P=t("Padding Start & End"),E=e("p",null," By using the prefix `ps` & `pe` you can define the start and end padding. ",-1),S=["innerHTML"],C=t("Different padding on different sides"),q=e("p",null," Use `pt`, `pe`, `pb`, `ps` classes to set margins on top, end, bottom and start respectively. ",-1),z=["innerHTML"],I={setup(N){return(R,V)=>{const d=i("AyoPrism"),l=i("TheCard");return h(),f(g,null,[n(l,null,{header:o(()=>[m]),content:o(()=>[x,v,e("div",{innerHTML:s(a),class:"mt-1"},null,8,y),n(d,{code:s(a)},null,8,["code"]),b,T,e("div",{innerHTML:s(r),class:"mt-1"},null,8,L),n(d,{code:s(r)},null,8,["code"])]),_:1}),n(l,{class:"mt-4"},{header:o(()=>[H]),content:o(()=>[M,e("div",{innerHTML:s(p),class:"mt-2"},null,8,w),n(d,{code:s(p)},null,8,["code"])]),_:1}),n(l,{class:"mt-4"},{header:o(()=>[A]),content:o(()=>[B,e("div",{innerHTML:s(c),class:"mt-2"},null,8,F),n(d,{code:s(c)},null,8,["code"])]),_:1}),n(l,{class:"mt-4"},{header:o(()=>[P]),content:o(()=>[E,e("div",{innerHTML:s(_),class:"mt-2"},null,8,S),n(d,{code:s(_)},null,8,["code"])]),_:1}),n(l,{class:"mt-4"},{header:o(()=>[C]),content:o(()=>[q,e("div",{innerHTML:s(u),class:"mt-2"},null,8,z),n(d,{code:s(u)},null,8,["code"])]),_:1})],64)}}};export{I as default};
