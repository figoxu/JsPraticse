function maskDiv(backcolor,opacityValue,closeOption){
    var bodyObj=document.body||document.documentElement;//注意ie6，7不支持documentElement，支持document.body
    var bodyObj_h=document.documentElement.scrollHeight;//获取网页body的高
    var bodyObj_w=document.documentElement.scrollWidth;//获取网页body的宽
    var mDiv=document.createElement("div");
    var mcDiv=document.createElement("div");
//创建div元素
    bodyObj.appendChild(mcDiv);
    mcDiv.appendChild(mDiv);
    mcDiv.id="mcDiv";
//把创建好的div元素放入body里面
    mDiv.id="mask";
    mDiv.style.height=bodyObj_h+"px";
    mDiv.style.width=bodyObj_w+"px";
    mDiv.style.zIndex="1111";
    mDiv.style.top="0";
    mDiv.style.left="0";
    mDiv.style.position="absolute";
    mDiv.style.opacity=opacityValue/100;
    mDiv.style.filter="alpha(opacity="+opacityValue+")";
    mDiv.style.background=backcolor;

    if(closeOption==1){
        var body_w=document.documentElement.scrollWidth;
        var maskObj=document.getElementById("mcDiv");
        var closeDiv=document.createElement("div");
        maskObj.appendChild(closeDiv);
        closeDiv.id="closeMask";
        closeDiv.style.position="absolute";
        closeDiv.style.zIndex="1222";
        closeDiv.style.left=parseInt(body_w-48)+"px";
        closeDiv.style.top="0";
        closeDiv.style.opacity="1";
        closeDiv.style.width="48px";
        closeDiv.style.height="48px";
        closeDiv.style.background="url(close.png)";
    }
    if(document.getElementById("closeMask")){
        document.getElementById("closeMask").onclick=function(e){
            e=e||event;
            bodyObj.removeChild(document.getElementById('mcDiv'));
        }

    }

}

function removeMask(){
    var bodyObj=document.body||document.documentElement;
    bodyObj.removeChild(document.getElementById('mcDiv'));
}