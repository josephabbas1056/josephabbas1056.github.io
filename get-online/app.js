(function(){
  'use strict';
  var PHONE='+12076011495', EMAIL='josephabbas1056@gmail.com';
  var $=function(s,r){return (r||document).querySelector(s)};
  function el(tag,attrs,text){var e=document.createElement(tag);if(attrs)for(var k in attrs){if(k==='class')e.className=attrs[k];else e.setAttribute(k,attrs[k]);}if(text!=null)e.textContent=text;return e;}
  function svgUse(id){var ns='http://www.w3.org/2000/svg',s=document.createElementNS(ns,'svg'),u=document.createElementNS(ns,'use');u.setAttribute('href','#'+id);s.appendChild(u);return s;}
  function btn(cls,href,icon,label){var a=el('a',{'class':'btn '+cls,href:href});if(icon)a.appendChild(svgUse(icon));a.appendChild(document.createTextNode(label));return a;}

  // nav state
  var nav=$('#nav');addEventListener('scroll',function(){nav.classList.toggle('scrolled',scrollY>8)},{passive:true});

  // reveal on scroll
  var rv=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
    rv.forEach(function(n){io.observe(n)});
  } else rv.forEach(function(n){n.classList.add('in')});
  function sweep(){var vh=innerHeight;rv.forEach(function(n){if(!n.classList.contains('in')&&n.getBoundingClientRect().top<vh*0.98)n.classList.add('in');});}
  addEventListener('scroll',sweep,{passive:true});addEventListener('load',sweep);setTimeout(sweep,1200);

  // hero rotation
  var shots=[['hair-by-betsy-jackson','the-straight-edge'],['eds-barber-shop','marquetta-s-salon-and-spa'],['town-line-diner','wiz-kid-appliance-repair']];
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches, si=0;
  if(!reduce){setInterval(function(){
    si=(si+1)%shots.length;var d=$('#stage-desk'),m=$('#stage-mob'),u=$('#stage-url');
    var pair=shots[si];var pre=new Image();pre.src='img/'+pair[0]+'.jpg';
    d.style.opacity=0;m.style.opacity=0;
    setTimeout(function(){d.src='img/'+pair[0]+'.jpg';m.src='img/'+pair[1]+'-m.jpg';u.textContent='josephabbas1056.github.io/'+pair[0];d.alt='Demo website, desktop view';m.alt='Demo website, phone view';d.style.opacity=1;m.style.opacity=1;},450);
  },5200);}

  // ---- personalization: ?for=<Business>&demo=<slug>&type=<kind> ----
  var q=new URLSearchParams(location.search);
  function clean(s,max){return String(s||'').replace(/[\u0000-\u001F\u007F<>]/g,'').replace(/\s+/g,' ').trim().slice(0,max);}
  var biz=clean(q.get('for'),80);
  var rawDemo=clean(q.get('demo'),200).toLowerCase();
  var m=rawDemo.match(/^(?:https?:\/\/josephabbas1056\.github\.io)?\/?([a-z0-9][a-z0-9-]{0,79})\/?$/);
  var demo=m?m[1]:'';
  if(demo==='get-online')demo='';
  var type=clean(q.get('type'),40).toLowerCase();
  var TYPES={barbers:/barber|barbershop|cuts?$/,salons:/salon|spa|hair|nail|beauty|stylist/,trades:/plumb|heat|septic|hvac|contract|construct|trade/,electric:/electric/,food:/diner|restaurant|cafe|café|bakery|pizza|food|kitchen|grill|bar$|pub|takeout|deli/,outdoor:/landscap|lawn|tree|forestry|snow|garden|mow/,retail:/store|shop$|variety|antique|laund|market|boutique|retail/,repair:/repair|handyman|appliance|odd ?jobs|cleaning|maintenance/};
  var LABEL={barbers:'barbershops',salons:'salons',trades:'trades businesses',electric:'electricians',food:'restaurants and diners',outdoor:'landscaping and outdoor businesses',retail:'local shops',repair:'repair and home service businesses'};
  var cat='';for(var k in TYPES){if(type&&TYPES[k].test(type)){cat=k;break;}}

  var DNC=["19d41462bbe70137d68eaaf285054e0e9d79946f6a9b79668d6e2e12eabf1acd", "1a301cc92f392b66a1a8894c1990438957c7fb78e569a8fa8e2def395884cfe6", "23d754890f34d74bc8c6bac2c4df0158c568356bbf720c57ff60d0ec388cbbbc", "26477a2d51ecd8f4b23f0a15ce5d52cbd8d5b67cf32cd0f49669e66e9f9f687c", "2e036ba9853f055589c1f7a513e6a9d9100c890bc5d927dd492f0e4e8ae5513b", "307a94fc366f9d446dc211e0eb5656cdcdfe8a33d3d26ead3380178537ba1788", "4800191cdadd50d07d2473cffc45b1b0338852a8e9e964bc77d0e4a0d5af385b", "4943813c63330450db10f18c390443f9d2f442a04a2944d68b4fc75ad1e093d7", "637b4af875ed4393bf39d6e846bd0b3940d6e0a13b5dda50b653d1e026c4d1e1", "64c321872eb1d297a284be110a2f15de0f065f84ab2d1a3ccf132b2a4ca60749", "6920600689613d96a8f242b8a47682166b9a18f1d745a8a0bf09f5fcc30331d9", "693bc6a66b2ced507c14386d449007f5d334b06c2cafeaabfefb56a7972489cf", "76ba36287c5d417c9ea3dc66ad1e5e7b10b364ea1125f689e4a4700c5a08f1d4", "7933a021de080cbee10ac7b03a7ab0aec1eaa975899a324d31786a99d56cd1f9", "8242c72f80de659c46862a06f439373936449a10dd88d6ba822edfe23413c4dd", "8318e1f44401b570915011c3f8b5eed32eaf10c35ebad1158ad3f6cd52b4acd8", "8e02c35090851060efa5511fa9de1c5c6120b067ce750b77ae6f9510f426a11a", "a58b182826d82db00ad2595a7748b61ea776ecd9b81641c3377c80b76b3a0aa2", "f62f53d261384992a60b99e44c8fb701fb4daa3f228a0860b09c143ac9013f34", "ff4784856d0b9dce39e92717d877d0841d0b4b0e1ec3109db6d7d3ec47e6114a"];
  function sha(s){if(!s||!window.crypto||!crypto.subtle)return Promise.resolve('');return crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)).then(function(b){return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('')});}
  function norm(s){return String(s||'').toLowerCase().replace(/[^a-z0-9]/g,'');}
  function personalize(){
  if(biz){
    document.title=biz+' · A website from Joseph Abbas';
    var card=$('#for-you'),title=$('#p-title'),body=$('#p-body'),ctas=$('#p-ctas'),frame=$('#p-frame'),eyebrow=$('#p-eyebrow');
    var smsBody='Hi Joseph, this is '+biz+'. ';
    var mailSub='Website for '+biz;
    function renderNoDemo(){
      eyebrow.textContent='Hi, '+biz;
      title.textContent=biz+', let\u2019s get you online.';
      body.textContent='I\u2019m Joseph Abbas. I build websites for '+(cat?LABEL[cat]:'small businesses')+' that don\u2019t have one yet. I\u2019ll make a free custom demo for '+biz+' so you can see it before deciding anything. If you like it, it goes live for $500 with everything set up for you.';
      ctas.textContent='';
      ctas.appendChild(btn('btn-primary','sms:'+PHONE+'?&body='+encodeURIComponent(smsBody+'I\u2019d like a free demo website.'),'i-msg','Text for your free demo'));
      ctas.appendChild(btn('btn-ghost','tel:'+PHONE,'i-phone','Call (207) 601-1495'));
      ctas.appendChild(btn('btn-ghost','mailto:'+EMAIL+'?subject='+encodeURIComponent('Free demo for '+biz)+'&body='+encodeURIComponent('Hi Joseph,\n\nI\u2019d like a free demo website for '+biz+'.\n\n'),'i-mail','Email'));
      frame.className='pframe nodemo';frame.textContent='';
      var art=el('div',{'class':'nodemo-art'}),mock=el('div',{'class':'mock','aria-hidden':'true'});
      mock.appendChild(el('div',{'class':'l s'}));mock.appendChild(el('div',{'class':'l t'}));mock.appendChild(el('div',{'class':'l'}));mock.appendChild(el('div',{'class':'l'}));mock.appendChild(el('div',{'class':'l s'}));mock.appendChild(el('span',{'class':'b'}));
      art.appendChild(mock);art.appendChild(el('p',{style:'margin:0'},'Your free demo for '+biz+' goes here. Just say the word.'));
      frame.appendChild(art);
      $('#forbar-text').textContent='Hi '+biz+', this page was put together for you.';
    }
    function renderDemo(){
      var url='../'+demo+'/';
      eyebrow.textContent='Your free demo';
      title.textContent=biz+', here\u2019s your demo site.';
      body.textContent='I\u2019m Joseph Abbas. I put together this demo website for '+biz+' so you can see what yours could look like. Take a look on your phone. If you like it, I can get it live for $500 with everything set up for you.';
      ctas.textContent='';
      var open=btn('btn-coral',url,'i-arrow','Open your demo');open.target='_blank';open.rel='noopener';ctas.appendChild(open);
      ctas.appendChild(btn('btn-ghost','sms:'+PHONE+'?&body='+encodeURIComponent(smsBody+'I saw the demo site.'),'i-msg','Text Joseph'));
      ctas.appendChild(btn('btn-ghost','tel:'+PHONE,'i-phone','Call'));
      frame.className='pframe';frame.textContent='';
      var ifr=el('iframe',{src:url,title:'Demo website preview for '+biz,loading:'lazy',tabindex:'-1','aria-hidden':'true'});
      frame.appendChild(ifr);
      var ov=el('a',{'class':'open',href:url,target:'_blank',rel:'noopener','aria-label':'Open the demo for '+biz});ov.appendChild(el('span',null,'Open full demo \u2197'));frame.appendChild(ov);
      $('#forbar-text').textContent='Hi '+biz+', your free demo site is ready.';
    }
    if(demo){
      renderDemo();
      // fall back if the demo folder doesn't exist
      fetch('../'+demo+'/',{method:'HEAD',cache:'no-store'}).then(function(r){if(!r.ok){demo='';renderNoDemo();}}).catch(function(){});
    } else renderNoDemo();
    card.classList.add('show');$('#forbar').classList.add('show');
    var s=$('#sms-link');s.href='sms:'+PHONE+'?&body='+encodeURIComponent(smsBody);
    var ml=$('#mail-link');ml.href='mailto:'+EMAIL+'?subject='+encodeURIComponent(mailSub);
    var fb=$('#f-biz');if(fb&&!fb.value)fb.value=biz;
  }
  }
  var nb=norm(biz),checks=[];for(var i=Math.min(nb.length,8);i<=nb.length;i++)checks.push(sha(nb.slice(0,i)));checks.push(sha(norm(demo)));
  if(biz||demo){Promise.all(checks).then(function(h){if(!h.some(function(x){return x&&DNC.indexOf(x)>=0}))personalize();}).catch(function(){personalize();});}
  if(type){var ft=$('#f-type');if(ft&&!ft.value)ft.value=clean(q.get('type'),40);}
  if(cat){document.querySelectorAll('.who[data-cat="'+cat+'"]').forEach(function(n){n.classList.add('hl')});}

  // contact form -> mailto (user sends it themselves)
  var f=$('#cform');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var v=function(n){return clean(f.elements[n].value,600)};
    var name=v('name'),b=v('business');
    if(!b){f.elements.business.focus();f.elements.business.setAttribute('aria-invalid','true');return;}
    var meet=(f.querySelector('input[name=meet]:checked')||{}).value||'Phone';
    var lines=['Hi Joseph,','','I\u2019d like a free demo website.','','Name: '+name,'Business: '+b,'Phone: '+v('phone'),'Type of business: '+v('type'),'Best way to talk: '+meet,'',v('message')];
    location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Free demo request: '+b)+'&body='+encodeURIComponent(lines.join('\n'));
  });
  $('#yr').textContent=new Date().getFullYear();
})();
