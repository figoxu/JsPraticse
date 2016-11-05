(function($) {
	window.dSlide = function(options) {
		if(!options.slideItems.length){
			return false;
		}
		return new slideInitialization(options);
	}
	var slideInitialization = function(options) {
		this.$slideWrap = options.slideWrap;
		this.$slideList = options.slideList;
		this.$slideItems = options.slideItems;
		this.nowPage = 1;
		this.maxPage = this.$slideItems.length;
		this.$control_bar = {};
		this.$control_prev = {};
		this.$control_next = {};
		this.autoPlay = options.autoPlay;
		this.autoPlayInterval = null;
		this.needControlBar = options.needControlBar;
		this.flag = options.flag;
		this.isAnimating = false;
		this.horizontal = options.horizontal;
		this.beforeFunction = options.beforeFunction;
		this.afterFunction = options.afterFunction;
		this.synchronousFunction = options.synchronousFunction;
		C_initializ(this);
	}

	slideInitialization.prototype.goPrev = function() {
		var self = this;
		if(this.isAnimating){
			return;
		}
		var tarNum = this.nowPage - 1;
		if (tarNum < 1) {
			tarNum = this.maxPage;
		}
		if(this.beforeFunction){
			this.beforeFunction(function(){
				V_animateSlide(self, tarNum);
			});
		}else{
			V_animateSlide(self, tarNum);
		}
		
		self.nowPage = tarNum;
		if(self.$control_bar.length){
			self.$control_bar.children().removeClass('on').eq(tarNum - 1).addClass('on');
		}

		return;
	}// last page

	slideInitialization.prototype.goNext = function() {
		var self = this;
		if(this.isAnimating){
			return;
		}
		var tarNum = this.nowPage + 1;
		if (tarNum > this.maxPage) {
			tarNum = 1;
		}
		if(this.beforeFunction){
			this.beforeFunction(function(){
				V_animateSlide(self, tarNum);
			});
		}else{
			V_animateSlide(self, tarNum);
		}
		
		self.nowPage = tarNum;
		if(self.$control_bar.length){
			self.$control_bar.children().removeClass('on').eq(tarNum - 1).addClass('on');
		}

		return;
	}// next page

	slideInitialization.prototype.goNextByNum = function(num) {
		//num start at 0
		var self = this;
		if(this.isAnimating){
			return;
		}
		if (this.nowPage - 1 != num) {
			if(!self.$slideItems.eq(num).length){
				return;
			}
			if(this.beforeFunction){
				this.beforeFunction(function(){
					V_animateSlide(self, num + 1);
				});
			}else{
				V_animateSlide(self, num + 1);
			}
			
			
			this.nowPage = num + 1;
			if(self.$control_bar.length){
				this.$control_bar.children().removeClass('on').eq(num).addClass('on');
			}
		}

	}
	var C_initializ = function(mainObject) {
		if (mainObject.maxPage > 1) {
			if(mainObject.$slideWrap[0].getAttribute('dslide')){
				return;
			}
			V_initializSlideItems(mainObject);
			if(mainObject.needControlBar){
				mainObject.$control_bar = M_createControlBar(mainObject);
				V_ControlBarBindEventAndShow(mainObject);
			}
			if (mainObject.flag) {
				mainObject.$control_prev = M_createArrowLeft(mainObject);
				mainObject.$control_next = M_createArrowRight(mainObject);
				//console.log(mainObject.$control_next)
				V_ArrowBarBindEventAndShow(mainObject);
			}

			if (mainObject.autoPlay && typeof mainObject.autoPlay == 'number') {
				V_autoPlayInitializ(mainObject);
			}
			
			V_windowResize(mainObject);
			mainObject.$slideWrap[0].setAttribute('dslide','true');
		}
	}
	var M_createControlBar = function(mainObject) {
		var $control_bar_wrap = $('<ul class="d-control-bar-wrap"></ul>');
		for (var i = 0; i < mainObject.maxPage; i++) {
			if (i == 0) {
				$control_bar_wrap.append('<li class="d-control-bar-item on"></li>');
			} else {
				$control_bar_wrap.append('<li class="d-control-bar-item"></li>');
			}
		}
		return $control_bar_wrap;
	}
	var M_createArrowLeft = function(mainObject) {
		var $icon_arrow_left = $('<div class="icon_arrow icon_arrow_left"></div>')
		return $icon_arrow_left;
	}
	var M_createArrowRight = function(mainObject) {
		var $icon_arrow_right = $('<div class="icon_arrow icon_arrow_right"></div>')
		return $icon_arrow_right;
	}
	var V_ControlBarBindEventAndShow = function(mainObject) {

		mainObject.$control_bar.children().bind('click', function() {
			var index = $(this).index();
			mainObject.goNextByNum(index);
		});
		mainObject.$slideWrap.append(mainObject.$control_bar);
	}
	var V_ArrowBarBindEventAndShow = function(mainObject) {
		mainObject.$control_prev.bind('click', function() {
			mainObject.goPrev();
		});
		mainObject.$slideWrap.append(mainObject.$control_prev);

		mainObject.$control_next.bind('click', function() {
			mainObject.goNext();
		});
		mainObject.$slideWrap.append(mainObject.$control_next);
	}
	var V_initializSlideItems = function(mainObject) {
		if(!mainObject.horizontal){
			mainObject.$slideItems.eq(0).show().siblings().hide();
		}else{
			mainObject.$slideList.width(mainObject.$slideItems.eq(0).outerWidth(true) * mainObject.$slideItems.length);
		}
	}
	var V_autoPlayInitializ = function(mainObject) {

		var goAutoPlay = function() {
			clearInterval(mainObject.autoPlayInterval);
			mainObject.autoPlayInterval = setInterval(function() {
				var tarIndex = mainObject.nowPage + 1;
				if (tarIndex > mainObject.maxPage) {
					tarIndex = 1;
				}
				if(mainObject.$control_bar.length){
					mainObject.$control_bar.children().eq(tarIndex - 1).click();
				}
			}, mainObject.autoPlay);
		}
		goAutoPlay();

		mainObject.$slideWrap.hover(function() {
			clearInterval(mainObject.autoPlayInterval);
		}, function() {
			goAutoPlay();
		});

	}
	
	var V_animateSlide = function(mainObject, tarNum){
		//tarNum start at 1
		if(mainObject.horizontal){
				mainObject.isAnimating = true;
				mainObject.$slideList.stop(true).animate({
					'marginLeft' : - (tarNum - 1) * mainObject.$slideItems.eq(0).outerWidth()
				}, 800, function(){
					mainObject.isAnimating = false;
					if(mainObject.afterFunction){
						mainObject.afterFunction(tarNum - 1);
					}
				});
			}else{
				mainObject.isAnimating = true;
				mainObject.$slideWrap.css('height', mainObject.$slideItems.eq(mainObject.nowPage - 1).height());
				mainObject.$slideItems.eq(mainObject.nowPage - 1).stop(true).fadeOut(500, function() {
					mainObject.$slideItems.eq(tarNum - 1).fadeIn(500, function(){
						mainObject.isAnimating = false;
						if(mainObject.afterFunction){
							mainObject.afterFunction(tarNum - 1);
						}
						mainObject.$slideWrap.css('height', 'auto');
					});
				});
			}
			if(mainObject.synchronousFunction){
				mainObject.synchronousFunction(tarNum - 1);
			}
	}
	
	var V_windowResize = function(mainObject){
		$(window).bind('resize', function(){
			if(mainObject.horizontal){
				mainObject.$slideList.css({
					'marginLeft' : - (mainObject.nowPage - 1) * mainObject.$slideItems.eq(0).outerWidth()
				});
			}
		})
	}
	
	
	
	
})(jQuery);
