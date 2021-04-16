const lists=document.querySelectorAll('.alternate-style');
const totalLinks=lists.length;

function setActiveStyle(color){
	console.log(color);
	for(let i=0;i<totalLinks;i++){
		console.log(lists[i]);
		if(color === lists[i].getAttribute('title')){
			lists[i].removeAttribute('disabled');
		}
		else {
			lists[i].setAttribute('disabled','true');
		}
	}
}

/* Body Skin*/

const bodySkin=document.querySelectorAll('.body-skin');
const totalBodySkins=bodySkin.length;
for(i=0;i<totalBodySkins;i++){
	bodySkin[i].addEventListener('change',function(){
		if(this.value==='dark'){
			document.body.className='dark';
		}
		else {
			document.body.className='';
		}
	})
}

document.querySelector('.toggle-style-switcher').addEventListener('click', ()=>{
	document.querySelector('.style-switcher').classList.toggle('open');
})