/* DATE */
const d=new Date();
document.getElementById("engDate").innerText=
  d.toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"});

const nepDigits=['०','१','२','३','४','५','६','७','८','९'];
const nepMonths=["बैशाख","जेठ","असार","साउन","भदौ","असोज","कार्तिक","मंसिर","पुष","माघ","फागुन","चैत"];
const nepNum=n=>n.toString().split('').map(d=>nepDigits[d]||d).join('');
document.getElementById("nepDate").innerText=
  nepNum(d.getFullYear()+57)+" "+nepMonths[(d.getMonth()+4)%12]+" "+nepNum(d.getDate());

/* TOC */
const toc=document.getElementById("tocList");
document.querySelectorAll(".proposal h2,.proposal h3").forEach((h,i)=>{
  h.id="sec"+i;
  const li=document.createElement("li");
  li.style.marginLeft=h.tagName==="H3"?"20px":"0";
  li.innerHTML=`<a href="#${h.id}">${h.innerText}</a>`;
  toc.appendChild(li);
});

/* BUDGET SUM */
let total=0;
document.querySelectorAll(".amount").forEach(a=>{
  total+=Number(a.innerText)||0;
});
document.getElementById("budgetTotal").innerText=total.toLocaleString("ne-NP");

/* SIGN UPLOAD */
const up=document.getElementById("signUpload");
if(up){
  up.onchange=e=>{
    const f=e.target.files[0];
    if(!f)return;
    const r=new FileReader();
    r.onload=()=>{
      signImage.src=r.result;
      signImage.style.display="block";
      textSign.style.display="none";
    };
    r.readAsDataURL(f);
  };
}
