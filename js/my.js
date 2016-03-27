$(function(){
	var moveLeft=function(){
		move('.firstpage').delay('.6s').set('visibility','visible').translate(-200,10).end();
		move('#fp-nav').delay('.6s').translate(0,-10).end();
	}
	var moveRight=function(){
		move('.firstpage').translate(0,0).set('visibility','hidden').delay('.5s').end();
		move('#fp-nav').translate(0,0).end();
	}
	
	$('#fullpage').fullpage({
		anchors:['firstPage','secondPage','thridPage','fourthPage','lastPage'],
		scrollingSpeed:1000,
		verticalCentered:true,
		easing:'easeInExpo',
		navigation:true,
		navigationPosition:'left',
		slidesNavigation:true,
		controlArrows:true,
		loopHorizontal:true,
		autoScrolling:true,
		scrollBar:false,
		slidesNavigation:true,
		afterLoad:function(link,index){
			if(index==1){
				moveLeft();
			}else{
				move('.section:nth-child('+index+') .grid .mobile-one-half .graphic-content')
				.set('opacity',1)
				.set('visibility','visible')
				.x(0)
				.end();
				
				move('.section:nth-child('+index+') .grid .mobile-one-half .text-content')
				.set('opacity',1)
				.set('visibility','visible')
				.x(0)
				.end();
			}
			
		},
		onLeave:function(index,toindex){
			if(index==1){
				moveRight();
			}else{
				move('.section:nth-child('+index+') .grid .mobile-one-half .graphic-content')
				.delay('.5s')
				.set('opacity',0)
				.set('visibility','hidden')
				.x(-200)
				.end();
				move('.section:nth-child('+index+') .grid .mobile-one-half .text-content')
				.delay('.5s')
				.set('opacity',0)
				.set('visibility','hidden')
				.x(200)
				.end();
			}
			

		},
		afterSlideLoad:function(se,findex,index){
			if(se=='first' || se == 'fourth' || se == 'last'){return;}
			var el = $('.section:nth-child('+findex+') .grid .mobile-one-half .graphic-content').get(index);
			var els = $('.section:nth-child('+findex+') .grid .mobile-one-half .text-content').get(index);
			move(el)
			.set('opacity',1)
			.set('visibility','visible')
			.x(0)
			.end();
			move(els)
			.set('opacity',1)
			.set('visibility','visible')
			.x(0)
			.end();
		},
		onSlideLeave:function(se,findex,index){
			if(se=='first' || se == 'fourth' || se == 'last'){return;}
			var el = $('.section:nth-child('+findex+') .grid .mobile-one-half .graphic-content').get(index);
			var els = $('.section:nth-child('+findex+') .grid .mobile-one-half .text-content').get(index);
			move(el)
			.set('opacity',0)
			.set('visibility','hidden')
			.x(-200)
			.end();
			move(els)
			.set('opacity',0)
			.set('visibility','hidden')
			.x(200)
			.end();
		}
	})
})