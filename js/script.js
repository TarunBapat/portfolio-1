

const filterContainer=document.querySelector(".portfolio-filter");
	filterBtns=filterContainer.children;
	totalFilterBtns=filterBtns.length;

	portfolioItems=document.querySelectorAll('.portfolio-item');
	totalPortfolioItems=portfolioItems.length;
	

	for(i=0; i<totalFilterBtns; i++){
		filterBtns[i].addEventListener('click',function(){
			filterContainer.querySelector('.active').classList.remove('active');
			this.classList.add('active');

			const filterVal=this.getAttribute('data-filter');
			for(k=0; k<totalPortfolioItems; k++){
				if(filterVal===portfolioItems[k].getAttribute('data-category')){
					portfolioItems[k].classList.remove('hide');
					portfolioItems[k].classList.add('show');
				}
				else{
					portfolioItems[k].classList.remove('show');
					portfolioItems[k].classList.add('hide');
				}
				if(filterVal==='all'){
					portfolioItems[k].classList.remove('hide');
					portfolioItems[k].classList.add('show');
				}
			}
			
		})
	}


/**lightbox */

const lightbox=document.querySelector('.lightbox'),
	lightboxImg=document.querySelector('.lightbox-img'),
	lightboxText=document.querySelector('.caption-text'),
	lightboxCounter=document.querySelector('.caption-counter');

let itemIndex=0;

for(i=0;i<totalPortfolioItems;i++){
	portfolioItems[i].addEventListener('click',function(){
		itemIndex=i;
		changeItem();
	})

}

function changeItem(){
	imgSrc=portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
	console.log(imgSrc);
}


//aside bar

const nav=document.querySelector('.nav');

const navList=nav.querySelectorAll('li');
const totalNavList=navList.length;
const allSection=document.querySelectorAll('.section');
const totalSection=allSection.length;
console.log(allSection);

for(i=0;i<totalNavList;i++){
	const a=navList[i].querySelector('a');
	a.addEventListener('click',function(){
		//remove back-section
		for(i=0;i<totalSection;i++){
			allSection[i].classList.remove('back-section');
		}
		for(j=0;j<totalNavList; j++){
			if(navList[j].querySelector('a').classList.contains('active')){
				allSection[j].classList.add('back-section');
			}
			navList[j].querySelector('a').classList.remove('active');
		}
		
		this.classList.add('active');
		showSection(this);
	})
}

function showSection(element){
	for(i=0;i<totalSection;i++){
		allSection[i].classList.remove('active');
	}
	const target=element.getAttribute('href').split('#')[1];

	console.log(target);
	document.querySelector('#'+target).classList.add('active');
}


const navToggleBtn=document.querySelector('.nav-toggler');
const aside=document.querySelector('.aside');

navToggleBtn.addEventListener('click',()=>{
	asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
	aside.classList.toggle('open');
	navToggleBtn.classList.toggle('open');
	for(i=0;i<totalSection;i++){
		allSection[i].classList.toggle('open');
	}
}

function Message() {
	alert('Thanks for your Message');
}