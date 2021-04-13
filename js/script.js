

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
			console.log(filterVal);
		})
	}


/**lightbox */

const lightbox=document.querySelector('.lightbox'),
	lightboxImg=document.querySelector('.lightbox-img'),
	lightboxText=document.querySelector('.caption-text'),
	lightboxCounter=document.querySelector('.caption-counter');

let itemIndex=0;

for(i=0; i<totalPortfolioItems; i++){
	portfolioItems[i].addEventListener('click',function(){
		itemIndex=i;
		changeItem();
	})
}