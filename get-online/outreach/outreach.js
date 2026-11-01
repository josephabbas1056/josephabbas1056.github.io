(function(){
  'use strict';
  var BASE='https://josephabbas1056.github.io/';
  var LANDING=BASE+'get-online/';
  var SIG='\n\nJoseph Abbas\n(207) 601-1495\njosephabbas1056@gmail.com';
  // Do-not-contact list, stored as SHA-256 hashes (names lowercased to letters/digits; phones as 10 digits).
  var DNC=["19d41462bbe70137d68eaaf285054e0e9d79946f6a9b79668d6e2e12eabf1acd", "1a301cc92f392b66a1a8894c1990438957c7fb78e569a8fa8e2def395884cfe6", "23d754890f34d74bc8c6bac2c4df0158c568356bbf720c57ff60d0ec388cbbbc", "26477a2d51ecd8f4b23f0a15ce5d52cbd8d5b67cf32cd0f49669e66e9f9f687c", "2e036ba9853f055589c1f7a513e6a9d9100c890bc5d927dd492f0e4e8ae5513b", "307a94fc366f9d446dc211e0eb5656cdcdfe8a33d3d26ead3380178537ba1788", "4800191cdadd50d07d2473cffc45b1b0338852a8e9e964bc77d0e4a0d5af385b", "4943813c63330450db10f18c390443f9d2f442a04a2944d68b4fc75ad1e093d7", "637b4af875ed4393bf39d6e846bd0b3940d6e0a13b5dda50b653d1e026c4d1e1", "64c321872eb1d297a284be110a2f15de0f065f84ab2d1a3ccf132b2a4ca60749", "6920600689613d96a8f242b8a47682166b9a18f1d745a8a0bf09f5fcc30331d9", "693bc6a66b2ced507c14386d449007f5d334b06c2cafeaabfefb56a7972489cf", "76ba36287c5d417c9ea3dc66ad1e5e7b10b364ea1125f689e4a4700c5a08f1d4", "7933a021de080cbee10ac7b03a7ab0aec1eaa975899a324d31786a99d56cd1f9", "8242c72f80de659c46862a06f439373936449a10dd88d6ba822edfe23413c4dd", "8318e1f44401b570915011c3f8b5eed32eaf10c35ebad1158ad3f6cd52b4acd8", "8e02c35090851060efa5511fa9de1c5c6120b067ce750b77ae6f9510f426a11a", "a58b182826d82db00ad2595a7748b61ea776ecd9b81641c3377c80b76b3a0aa2", "f62f53d261384992a60b99e44c8fb701fb4daa3f228a0860b09c143ac9013f34", "ff4784856d0b9dce39e92717d877d0841d0b4b0e1ec3109db6d7d3ec47e6114a"];
  var $=function(id){return document.getElementById(id)};
  var dl=$('slugs');(window.KNOWN_SLUGS||[]).forEach(function(s){var o=document.createElement('option');o.value=s;dl.appendChild(o);});
  function clean(s,max){return String(s||'').replace(/[\u0000-\u001F\u007F<>]/g,'').replace(/\s+/g,' ').trim().slice(0,max||200);}
  function slugOf(v){v=clean(v).toLowerCase();var m=v.match(/^(?:https?:\/\/josephabbas1056\.github\.io)?\/?([a-z0-9][a-z0-9-]{0,79})\/?(?:index\.html)?$/);return m&&m[1]!=='get-online'?m[1]:'';}
  function digits(p){var d=String(p||'').replace(/\D/g,'');if(d.length===11&&d[0]==='1')d=d.slice(1);return d;}
  function norm(s){return String(s||'').toLowerCase().replace(/[^a-z0-9]/g,'');}
  function sha(s){if(!s||!window.crypto||!crypto.subtle)return Promise.resolve('');return crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)).then(function(b){return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('')});}
  function prefixes(s){var out=[];for(var i=Math.min(s.length,8);i<=s.length;i++)out.push(sha(s.slice(0,i)));return out;}
  function radio(n){return (document.querySelector('input[name='+n+']:checked')||{}).value;}
  function setBtn(a,href){if(href){a.href=href;a.removeAttribute('aria-disabled');a.tabIndex=0;}else{a.removeAttribute('href');a.setAttribute('aria-disabled','true');a.tabIndex=-1;}}
  var userEdited={};['o-text','o-mail','o-subj'].forEach(function(id){$(id).addEventListener('input',function(){userEdited[id]=true;links();});});

  function build(){
    var biz=clean($('biz').value,80),demo=slugOf($('demo').value),type=clean($('type').value,40);
    var angle=clean($('angle').value,160).replace(/^with\s+/i,''),benefit=clean($('benefit').value,160).replace(/^so\s+/i,'').replace(/[.!]+$/,'');
    var kind=radio('kind'); if(!demo&&kind==='demo')kind='nodemo';
    var w=$('warn');w.classList.remove('show');
    if($('demo').value.trim()&&!demo){w.textContent='That demo link doesn\u2019t look like one of your demo sites, so it was left out.';w.classList.add('show');}
    else if(demo&&(window.KNOWN_SLUGS||[]).indexOf(demo)<0){w.textContent='Heads up: \u201C'+demo+'\u201D isn\u2019t in the demo list. Check the slug, or the page will show the no-demo version.';w.classList.add('show');}
    var u=new URL(LANDING);if(biz)u.searchParams.set('for',biz);if(demo&&kind==='demo')u.searchParams.set('demo',demo);if(type)u.searchParams.set('type',type);
    var landing=biz?u.toString().replace(/\+/g,'%20'):'';
    var link=(radio('linkto')==='demo'&&demo&&kind==='demo')?BASE+demo+'/':landing;
    var msg='';
    if(biz){
      if(kind==='demo'){
        msg='Hey, it\u2019s Joseph Abbas, I\u2019m local here in Maine and I build websites for small businesses. I put together a demo site for '+biz+(angle?' with '+angle:'')+(benefit?', so '+benefit:'')+'. Here\u2019s the link: '+link+' If you like it, I can get it live for $500 with everything set up for you.';
      } else {
        msg='Hey, it\u2019s Joseph Abbas, I\u2019m local here in Maine and I build websites for small businesses. I noticed '+biz+' doesn\u2019t have a website yet, so I put together a page for you: '+link+' If you\u2019d like one, I can build it for $500 with everything set up. Happy to chat by phone, in person or on Zoom.';
      }
      if($('optout').checked)msg+='\n\nNot interested? Reply STOP and I won\u2019t reach out again.';
    }
    $('o-link').value=landing;
    if(!userEdited['o-text'])$('o-text').value=msg;
    if(!userEdited['o-subj'])$('o-subj').value=biz?(kind==='demo'?'A demo website for '+biz:'A website for '+biz):'';
    if(!userEdited['o-mail'])$('o-mail').value=msg?msg+SIG:'';
    setBtn($('b-preview'),landing);
    var blocked=false;
    Promise.all(prefixes(norm(biz)).concat(prefixes(norm(demo)),[sha(digits($('phone').value))])).then(function(h){
      blocked=h.some(function(x){return x&&DNC.indexOf(x)>=0});
      if(blocked){['o-link','o-text','o-mail','o-subj'].forEach(function(i){$(i).value='';});setBtn($('b-preview'),'');w.textContent='This business asked not to be contacted. Don\u2019t send them anything.';w.classList.add('show');}
      window.__blocked=blocked;links();
    });
    links();
  }
  function links(){
    var blocked=!!window.__blocked;
    var ph=digits($('phone').value),em=clean($('email').value,120),t=$('o-text').value,b=$('o-mail').value,s=$('o-subj').value;
    setBtn($('b-sms'),(!blocked&&ph.length===10&&t)?'sms:+1'+ph+'?&body='+encodeURIComponent(t):'');
    setBtn($('b-mail'),(!blocked&&/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)&&b)?'mailto:'+encodeURIComponent(em).replace('%40','@')+'?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent(b):'');
    document.querySelectorAll('[data-copy]').forEach(function(x){x.disabled=blocked;});
  }
  ['biz','demo','type','phone','email','angle','benefit','optout'].forEach(function(id){$(id).addEventListener('input',function(){window.__blocked=false;if(id!=='phone'&&id!=='email'){userEdited={};}build();});});
  document.querySelectorAll('input[name=kind],input[name=linkto]').forEach(function(r){r.addEventListener('change',function(){userEdited={};build();});});
  document.querySelectorAll('[data-copy]').forEach(function(bt){bt.addEventListener('click',function(){
    var src=$(bt.dataset.copy),flag=$(bt.dataset.flag);
    function done(){flag.textContent='Copied';setTimeout(function(){flag.textContent='';},1600);}
    if(navigator.clipboard&&isSecureContext)navigator.clipboard.writeText(src.value).then(done,function(){src.select();document.execCommand('copy');done();});
    else{src.select();document.execCommand('copy');done();}
  });});
  build();
})();
