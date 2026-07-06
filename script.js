const slider=document.getElementById('slider');
const images=[
'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&auto=format&fit=crop&q=80',
'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&auto=format&fit=crop&q=80',
'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=80'
];
let i=0;
setInterval(()=>{
 if(!slider)return;
 slider.style.opacity='0';
 setTimeout(()=>{
   i=(i+1)%images.length;
   slider.src=images[i];
   slider.style.opacity='1';
 },300);
},3000);
