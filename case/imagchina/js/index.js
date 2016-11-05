$(function() {

  window.act00 = {
    els :{

    },
    views : {

    },
    outTime : 1200,
    structView : Backbone.View.extend({
      tagName : 'div',
      className : 'loading',
      initialize : function() {
        _.bindAll(this, 'render', 'removeView');
        this.render();
      },
      events : {
        
      },
      removeView : function(){
        act00.views.act00View.remove();
      },
      render : function() {
        $(this.el).append(_.template($("#act00-template").html()));
        $('#acts-wrap div.acts-list').append(this.el);
        var temp = [];
        for(var i = 0; i < reRoadImg.length; i++){
          var img = new Image();
          $(img).load(function(){
            temp.push(1);
          });
          img.src = reRoadImg[i];
        }
        //return;
        var checkTemp = setInterval(function(){
          if(temp.length == reRoadImg.length){
            clearInterval(checkTemp);
            //return;
            act0.views.act0View = new act0.structView();
            //$('#acts-wrap div.acts-list').children().eq(1).hide();
            //setTimeout(function(){

              $('#acts-wrap div.acts-list').animate({
                //'marginLeft' : - $('#acts-wrap').width()
                'opacity' : 0
              }, 300, function(){
                act00.views.act00View.removeView();
                // $(this).css({
                //   'marginLeft' : 0
                // });
                $(this).animate({
                  'opacity' : 1
                }, 300, function(){
                  if(Modernizr.csstransitions){
                    $('#menu').css({
                      'transitionTimingFunction' : 'ease-out',
                      'left' : '2.85%'
                    });
                  }else{
                    $('#menu').animate({
                      'left' : '2.85%'
                    }, 500);
                    $(this).css('filter', 'none');
                  }
                  act0.actions.inAct();
                });
              });
            //}, 1000);
            
          }
        }, 100);
      }
    })
  };

  

  //act0
  window.act0 = {
    els : {

    },
    views : {

    },
    outTime : 1200,
    structView : Backbone.View.extend({
      tagName : 'div',
      className : 'view-wrap',
      initialize : function() {
        _.bindAll(this, 'render', 'removeView');
        this.render();
      },
      events : {
        
      },
      removeView : function(){
        act0.views.act0View.remove();
      },
      render : function() {
        $(this.el).append(_.template($("#act0-template").html())).css({
          'width' : $('#acts-wrap').width()
        });
        $('#acts-wrap div.acts-list').append(this.el);
        act0.els = {
          $act0Body : $('#act0'),
          $act0Hand1 : $('#act0 div.hand1'),
          $act0Hand2 : $('#act0 div.hand2'),
          $act0Hand3 : $('#act0 div.hand3'),
          $act0Logo : $('#act0 div.logo-part'),
          $act0Title : $('#act0 div.title-part')
        };
      }
    }),
    actions : {
      inAct : function(){
        setTimeout(function(){
          if(Modernizr.csstransitions){
            act0.els.$act0Hand1.css({
              'transitionTimingFunction' : 'ease-out',
              'top' : '0'
            });
            setTimeout(function(){
              act0.els.$act0Hand2.css({
                'transitionTimingFunction' : 'ease-out',
                'bottom' : 0
              });
              act0.els.$act0Hand3.css({
                'transitionTimingFunction' : 'ease-out',
                'bottom' : 0
              });
              setTimeout(function(){
                act0.els.$act0Logo.css({
                  'opacity' : 1
                });
                act0.els.$act0Title.css({
                  'opacity' : 1
                });
              }, 500);//css make hand2 and 3 .5s
            }, 300);//css make act0 hand .5s, but need some faster.
          }else{
            act0.els.$act0Hand1.animate({
              'top' : '0'
            }, 500);
            setTimeout(function(){
              act0.els.$act0Hand2.animate({
                'bottom' : '0'
              }, 500);
              act0.els.$act0Hand3.animate({
                'bottom' : 0
              }), 500;
              setTimeout(function(){
                act0.els.$act0Logo.animate({
                  'opacity' : 1
                }, 500, function(){
                  $(this).css('filter', 'none');
                });
                act0.els.$act0Title.animate({
                  'opacity' : 1
                }, 500, function(){
                  $(this).css('filter', 'none');
                });
              }, 500);//css make hand2 and 3 .5s
            }, 300);//css make act0 hand .5s, but need some faster.
          }
          
        }, 500);//make some dalay
        
      },
      outAct : function(){
        if(Modernizr.csstransitions){
          act0.els.$act0Logo.css({
            'opacity' : 0
          });
          act0.els.$act0Title.css({
            'opacity' : 0
          });
          setTimeout(function(){
            act0.els.$act0Hand2.css({
              'transitionTimingFunction' : 'ease-in',
              'bottom' : '-1000px'
            });
            act0.els.$act0Hand3.css({
              'transitionTimingFunction' : 'ease-in',
              'bottom' : '-1000px'
            });
            setTimeout(function(){
              act0.els.$act0Hand1.css({
                'transitionTimingFunction' : 'ease-in',
                'top' : '-800px'
              });
            }, 300);//css make hand2 and 3 .5s, but need some faster
          }, 300);//css make logo and title .5s, but need some faster
        }else{
          act0.els.$act0Logo.animate({
            'opacity' : 0
          }, 500);
          act0.els.$act0Title.animate({
            'opacity' : 0
          }, 500);
          setTimeout(function(){
            act0.els.$act0Hand2.animate({
              'bottom' : '-1000px'
            }, 500);
            act0.els.$act0Hand3.animate({
              'bottom' : '-1000px'
            }, 500);
            setTimeout(function(){
              act0.els.$act0Hand1.animate({
                'top' : '-800px'
              }, 500);
            }, 300);//css make hand2 and 3 .5s, but need some faster
          }, 300);//css make logo and title .5s, but need some faster
        }
      }
    },
    init : function(){
      act0.views.act0View = new act0.structView();
      act0.actions.inAct();
    }
  }

  

  //act1
  window.act1 = {
    els : {

    },
    views : {

    },
    outTime : 1200,
    structView : Backbone.View.extend({
      tagName : 'div',
      className : 'view-wrap',
      initialize : function() {
        _.bindAll(this, 'render', 'removeView');
        this.render();
      },
      events : {
        
      },
      removeView : function(){
        act1.views.act1View.remove();
      },
      render : function() {
        $(this.el).append(_.template($("#act1-template").html())).css({
          'width' : $('#acts-wrap').width()
        });
        $('#acts-wrap div.acts-list').append(this.el);
        act1.els = {
          $act1Body : $('#act1'),
          $act1Title : $('#act1 div.main-title'),
          $act1Hand1 : $('#act1 div.hand1'),
          $act1Hand2 : $('#act1 div.hand2')
        };
      }
    }),
    actions : {
      inAct : function(){
        setTimeout(function(){
          if(Modernizr.csstransitions){
            var l1 = $(window).width() / 2 - act1.els.$act1Hand1.width() + 20;
            var r2 = $(window).width() / 2 - act1.els.$act1Hand2.width() + 20;
            
            act1.els.$act1Title.css({
              'transitionTimingFunction' : 'ease-out',
              'top' : '12.5%'
            });
            setTimeout(function(){
              act1.els.$act1Hand1.css({
                'transitionTimingFunction' : 'ease-out',
                'left' : l1,
                'bottom' : 0,
                'transform' : 'rotate(0deg)'
              });
              act1.els.$act1Hand2.css({
                'transitionTimingFunction' : 'ease-out',
                'right' : r2,
                'bottom' : 0,
                'transform' : 'rotate(0deg)'
              });
            }, 300);//css make act1 title .5s, but need half time to do next animation.
          }else{
            var l1 = $(window).width() / 2 - act1.els.$act1Hand1.width() + 20;
            var r2 = $(window).width() / 2 - act1.els.$act1Hand2.width() + 20;
            act1.els.$act1Hand1.css({
              'left' : l1,
              'transform' : 'none'
            });
            act1.els.$act1Hand2.css({
              'right' : r2,
              'transform' : 'none'
            });
            act1.els.$act1Title.animate({
              'top' : '12.5%'
            }, 500);
            setTimeout(function(){
              act1.els.$act1Hand1.animate({
                'bottom' : 0
              }, 500);
              act1.els.$act1Hand2.animate({
                'bottom' : 0
              }, 500);
            }, 300);//css make act1 title .5s, but need half time to do next animation.
          }
        }, 500);//make some dalay
        
      },
      outAct : function(){
        if(Modernizr.csstransitions){
          act1.els.$act1Hand1.css({
            'transitionTimingFunction' : 'ease-in',
            'left' : '-800px',
            'bottom' : '-1000px',
            'transform' : 'rotate(-20deg)'
          });
          act1.els.$act1Hand2.css({
            'transitionTimingFunction' : 'ease-in',
            'right' : '-800px',
            'bottom' : '-1000px',
            'transform' : 'rotate(20deg)'
          });
          setTimeout(function(){
            act1.els.$act1Title.css({
              'transitionTimingFunction' : 'ease-in',
              'top' : '-800px'
            });
          }, 300);
        }else{
          act1.els.$act1Hand1.animate({
            'bottom' : '-1000px'
          }, 500);
          act1.els.$act1Hand2.animate({
            'bottom' : '-1000px'
          }, 500);
          setTimeout(function(){
            act1.els.$act1Title.animate({
              'top' : '-800px'
            }, 500);
          }, 300);
        }

      }
    },
    init : function(){
      act1.views.act1View = new act1.structView();
      act1.actions.inAct();
    }
  }

  window.act2 = {
    els : {

    },
    views : {

    },
    outTime : 1200,
    structView : Backbone.View.extend({
      tagName : 'div',
      className : 'view-wrap',
      initialize : function() {
        _.bindAll(this, 'render', 'removeView');
        this.render();
      },
      events : {
        'click .client' : 'goAct2a'
      },
      goAct2a : function(e){
        act2a.nowClient = $(e.currentTarget).index();
        act2.actions.outAct();
        if(Modernizr.csstransitions){
          $('#menu').css({
            'transitionTimingFunction' : 'ease-in',
            'left' : '-500px'
          });
        }else{
          $('#menu').animate({
            'left' : '-500px'
          }, 500);
        }
        setTimeout(function(){
          act2a.views.act2aView = new act2a.structView();
          act2.views.act2View.removeView();
          act2a.actions.inAct();
        }, 1000);
      },
      removeView : function(){
        act2.views.act2View.undelegateEvents();
        act2.views.act2View.remove();
      },
      render : function() {
        $(this.el).append(_.template($("#act2-template").html())).css({
          'width' : $('#acts-wrap').width()
        });
        $('#acts-wrap div.acts-list').append(this.el);
        act2.els = {
          $act2Body : $('#act2'),
          $act2Title : $('#act2 div.title'),
          $act2Platform : $('#act2 div.platform'),
          $act2Clients : $('#act2 div.client')
        };
        act2.els.$act2Clients.hover(function(){
          var $img = $(this).find('img');
          $img.data('old-src', $img.attr('src'));
          $img.attr('src', $img.data('hover-img'));
        }, function(){
          var $img = $(this).find('img');
          $img.attr('src', $img.data('old-src'));
        });
      }
    }),
    actions : {
      inAct : function(){
        setTimeout(function(){
          if(Modernizr.csstransitions){
            var l = ($(window).width() - act2.els.$act2Platform.width()) / 2;
            for(var n in act2.els){
              if(n == '$act2Body' || n == '$act2Clients'){
                continue;
              }
              act2.els[n].css('left', l);
            }

            act2.els.$act2Platform.css({
              'transitionTimingFunction' : 'ease-out',
              'bottom' : '0'
            });
            setTimeout(function(){
              act2.els.$act2Title.css({
                'opacity' : '1'
              });
            }, 500);//css make platform .5s
          }else{
            var l = ($(window).width() - act2.els.$act2Platform.width()) / 2;
            for(var n in act2.els){
              if(n == '$act2Body' || n == '$act2Clients'){
                continue;
              }
              act2.els[n].css('left', l);
            }

            act2.els.$act2Platform.animate({
              'bottom' : '0'
            }, 500);
            setTimeout(function(){
              act2.els.$act2Title.animate({
                'opacity' : '1'
              }, 500, function(){
                $(this).css('filter', 'none');
              });
            }, 500);//css make platform .5s
          }
        }, 500);//make some dalay
      },
      outAct : function(){
        if(Modernizr.csstransitions){
          act2.els.$act2Title.css({
            'opacity' : 0
          });
          setTimeout(function(){
            act2.els.$act2Platform.css({
              'transitionTimingFunction' : 'ease-in',
              'bottom' : '-1000px'
            });
          }, 500);//css make title .5s
        }else{
          act2.els.$act2Title.animate({
            'opacity' : 0
          }, 500);
          setTimeout(function(){
            act2.els.$act2Platform.animate({
              'bottom' : '-1000px'
            });
          }, 500);//css make title .5s
        }
      }
    },
    init : function(){
      act2.views.act2View = new act2.structView();
      act2.actions.inAct();
    }
  }

  window.act2a = {
    nowClient : '0',
    strModel : Backbone.Model.extend({
      
    }),
    els : {

    },
    views : {

    },
    models : {

    },
    outTime : 1000,
    structView : Backbone.View.extend({
      tagName : 'div',
      className : 'view-wrap',
      initialize : function() {
        _.bindAll(this, 'render', 'removeView');
        this.render();
      },
      events : {
        'click .back-wrap' : 'goAct2'
      },
      goAct2 : function(){
        act2a.actions.outAct();
        setTimeout(function(){
          act2.views.act2View = new act2.structView();
          act2a.views.act2aView.removeView();
          act2.actions.inAct();
          if(Modernizr.csstransitions){
            $('#menu').css({
              'transitionTimingFunction' : 'ease-out',
              'left' : '2.85%'
            });
          }else{
            $('#menu').animate({
              'left' : '2.85%'
            }, 500);
          }
        }, 800);
      },
      removeView : function(){
        act2a.views.act2aView.undelegateEvents();
        act2a.views.act2aView.remove();
      },
      render : function() {
        $(this.el).append(_.template($("#act2a-template").html())).css({
          'width' : $('#acts-wrap').width()
        });
        $('#acts-wrap div.acts-list').append(this.el);
        act2a.models.model1 = new act2a.strModel({
          'icon' : dataClients['client' + act2a.nowClient].icon1,
          'text' : dataClients['client' + act2a.nowClient].text1
        });
        act2a.views.leftView = new act2a.leftPartView({
          model : act2a.models.model1
        });
        $('#act2a div.left-part-wrap').append(act2a.views.leftView.render());

        act2a.els = {
          $act2aBody : $('#act2a'),
          $act2aLeftPart : $('#act2a div.left-wrap'),
          $act2aTvWrap : $('#act2a div.tv-wrap'),
          $act2Bottom : $('#act2a div.bottom'),
          $act2aBack : $('#act2a div.back-wrap')
        };
      }
    }),
    leftPartView : Backbone.View.extend({
      tagName : 'div',
      initialize : function() {
        var self = this;
        _.bindAll(this, 'render', 'removeView');
        this.model.on('change icon', function(){
          $('#act2a div.left-part-wrap > div').html(_.template($("#act2a-left-template").html(), {
            'icon' : this.get('icon'),
            'text' : this.get('text')
          }));
          act2a.els.$act2aLeftPart = $('#act2a div.left-wrap');
        });
        //this.render();
      },
      events : {
        
      },
      removeView : function(){
        act2a.views.leftView.remove();
      },
      render : function() {
        $(this.el).append(_.template($("#act2a-left-template").html(), {
          'icon' : this.model.get('icon'),
          'text' : this.model.get('text')
        }));
        return this.el;
      }
    }),
    actions : {
      inAct : function(){

        //first level slide
        var $slideWrap = act2a.els.$act2aTvWrap.find('div.slide-wrap');
        var $slideList = $slideWrap.children('ul');
        var $slideItem = $slideList.children('li');

        setTimeout(function(){
          $slideItem.css({
            'width' : $slideWrap.width()
          });
          var slide = dSlide({
            'slideWrap' : $slideWrap,
            'slideList' : $slideList,
            'slideItems' : $slideItem,
            'horizontal' : true,
            'synchronousFunction' : function(num){
              if(0){
                act2a.els.$act2aLeftPart.css({
                  'transitionTimingFunction' : 'ease-in',
                  'bottom' : '-1000px' 
                });
              }else{
                act2a.els.$act2aLeftPart.animate({
                  'bottom' : '-1000px' 
                }, 500);
              }
              setTimeout(function(){
                act2a.models.model1.set({
                  'icon' : dataClients['client' + num].icon1,
                  'text' : dataClients['client' + num].text1
                });
                if(0){
                  act2a.els.$act2aLeftPart.css({
                    'transitionTimingFunction' : 'ease-out',
                    'bottom' : 0
                  });
                }else{
                  act2a.els.$act2aLeftPart.animate({
                    'bottom' : 0
                  }, 500);
                }
              }, 600);//css make left part .5s, but need some slower
            }
          });
          slide.goNextByNum(act2a.nowClient);
          //next client information
          act2a.els.$act2aTvWrap.find('div.nclient').on('click', function(){
            slide.goNext();
            act2a.nowClient = slide.nowPage - 1;
          });
          //prev client information
          act2a.els.$act2aTvWrap.find('div.pclient').on('click', function(){
            slide.goPrev();
            act2a.nowClient = slide.nowPage - 1;
          });

          //second level slide
          var subSlides = [];
          for(var i = 0; i < $slideItem.length; i ++){
            var $subSlideWrap = $slideItem.eq(i).find('div.sub-slide-wrap');
            var $subSlideList = $subSlideWrap.children('ul');
            var $subSlideItem = $subSlideList.children('li');

            var subSlide = dSlide({
              'slideWrap' : $subSlideWrap,
              'slideList' : $subSlideList,
              'slideItems' : $subSlideItem
            });

            subSlides.push(subSlide);
          }
          
          //next page information
          act2a.els.$act2aTvWrap.find('div.npage').on('click', function(){
            subSlides[act2a.nowClient].goNext();
          });

          //prev page information
          act2a.els.$act2aTvWrap.find('div.ppage').on('click', function(){
            subSlides[act2a.nowClient].goPrev();
          });
        }, 500);

        setTimeout(function(){
          if(Modernizr.csstransitions){
            // act2a.els.$act2aLeftPart.css({
            //   'transitionTimingFunction' : 'ease-out',
            //   'bottom' : '0'
            // });
            act2a.els.$act2aLeftPart.animate({
              'bottom' : '0'
            }, 500);
            act2a.els.$act2aBack.css({
              'transitionTimingFunction' : 'ease-out',
              'left' : 0
            });
            setTimeout(function(){
              act2a.els.$act2aTvWrap.css({
                'transitionTimingFunction' : 'ease-out',
                'top' : '12.5%'
              });
              setTimeout(function(){
                act2a.els.$act2Bottom.css({
                  'transitionTimingFunction' : 'ease-out',
                  'bottom' : '0'
                });
              }, 200);//css make tv wrap .5s but need some faster
            }, 200);//css make left part .5s
          }else{
            if($(window).width() >= 768 && $(window).width() <= 1024){
              $('#act2a .left-wrap').css('left', 0);
            }
            act2a.els.$act2aLeftPart.animate({
              'bottom' : '0'
            }, 500);
            act2a.els.$act2aBack.animate({
              'left' : 0
            }, 500);
            setTimeout(function(){
              act2a.els.$act2aTvWrap.animate({
                'top' : '12.5%'
              }, 500);
              setTimeout(function(){
                act2a.els.$act2Bottom.animate({
                  'bottom' : '0'
                }, 500);
              }, 200);//css make tv wrap .5s but need some faster
            }, 200);//css make left part .5s
          }
        }, 500);//make some dalay

      },
      outAct : function(){
        if(Modernizr.csstransitions){
          act2a.els.$act2Bottom.css({
            'transitionTimingFunction' : 'ease-in',
            'bottom' : '-1000px'
          });
          act2a.els.$act2aBack.css({
            'transitionTimingFunction' : 'ease-in',
            'left' : '-500px'
          });
          setTimeout(function(){
            act2a.els.$act2aTvWrap.css({
              'transitionTimingFunction' : 'ease-in',
              'top' : '-800px'
            });
            setTimeout(function(){
              // act2a.els.$act2aLeftPart.css({
              //   'transitionTimingFunction' : 'ease-in',
              //   'bottom' : '-1000px'
              // });
              act2a.els.$act2aLeftPart.animate({
                'bottom' : '-1000px'
              }, 500);
            }, 200);//css make act2aTvWrap .5s, but need some faster
          }, 200);//css make act2Bottom .5s, but need some faster
        }else{
          act2a.els.$act2Bottom.animate({
            'bottom' : '-1000px'
          }, 500);
          act2a.els.$act2aBack.animate({
            'left' : '-500px'
          }, 500);
          setTimeout(function(){
            act2a.els.$act2aTvWrap.animate({
              'top' : '-800px'
            }, 500);
            setTimeout(function(){
              act2a.els.$act2aLeftPart.animate({
                'bottom' : '-1000px'
              }, 500);
            }, 200);//css make act2aTvWrap .5s, but need some faster
          }, 200);//css make act2Bottom .5s, but need some faster
        }
      }
    },
    init : function(){
      act2a.actions.inAct();
    }
  }



  window.act3 = {
    els : {

    },
    views : {

    },
    outTime : 1200,
    structView : Backbone.View.extend({
      tagName : 'div',
      className : 'view-wrap',
      initialize : function() {
        _.bindAll(this, 'render', 'removeView');
        this.render();
      },
      events : {
        
      },
      removeView : function(){
        act3.views.act3View.remove();
      },
      render : function() {
        $(this.el).append(_.template($("#act3-template").html())).css({
          'width' : $('#acts-wrap').width()
        });
        $('#acts-wrap div.acts-list').append(this.el);
        act3.els = {
          $act3Body : $('#act3'),
          $act3Title : $('#act3 div.title'),
          $act3FilmBg : $('#act3 div.film'),
          $act3Hand : $('#act3 div.hand')
        };
      }
    }),
    actions : {
      inAct : function(){
        setTimeout(function(){
          if(Modernizr.csstransitions){
            var l = ($(window).width() - act3.els.$act3Hand.width()) / 2;
            for(var n in act3.els){
              if(n == '$act3Body'){
                continue;
              }
              if(n == '$act3Title'){
                act3.els[n].css('left', l);
              }else{
                act3.els[n].css('left', l + 62);
              }
              
            }
            act3.els.$act3FilmBg.css({
              'transitionTimingFunction' : 'ease-out',
              'top' : '0'
            });
            setTimeout(function(){
              act3.els.$act3Hand.css({
                'transitionTimingFunction' : 'ease-out',
                'bottom' : 0
              });
              setTimeout(function(){
                act3.els.$act3Title.css({
                  'opacity' : 1
                });
              }, 500);//css make hand .5s
            }, 300);//css make act3 film .5s, but need some faster
          }else{
            var l = ($(window).width() - act3.els.$act3Hand.width()) / 2;
            for(var n in act3.els){
              if(n == '$act3Body'){
                continue;
              }
              act3.els[n].css('left', l);
            }
            act3.els.$act3FilmBg.animate({
              'top' : '0'
            }, 500);
            setTimeout(function(){
              act3.els.$act3Hand.animate({
                'bottom' : 0
              }, 500);
              setTimeout(function(){
                act3.els.$act3Title.animate({
                  'opacity' : 1
                }, 500, function(){
                  $(this).css('filter', 'none');
                });
              }, 500);//css make hand .5s
            }, 300);//css make act3 film .5s, but need some faster
          }
        }, 500);//make some delay
        
      },
      outAct : function(){
        if(Modernizr.csstransitions){
          act3.els.$act3Title.css({
            'opacity' : 0
          });
          setTimeout(function(){
            act3.els.$act3Hand.css({
              'transitionTimingFunction' : 'ease-in',
              'bottom' : '-1000px'
            });
            setTimeout(function(){
              act3.els.$act3FilmBg.css({
                'transitionTimingFunction' : 'ease-in',
                'top' : '-800px'
              });
            }, 300);//css make hand .5s, but need some faster
          }, 300);//css make title .5s, but need some faster
        }else{
          act3.els.$act3Title.animate({
            'opacity' : 0
          });
          setTimeout(function(){
            act3.els.$act3Hand.animate({
              'bottom' : '-1000px'
            });
            setTimeout(function(){
              act3.els.$act3FilmBg.animate({
                'top' : '-800px'
              });
            }, 300);//css make hand .5s, but need some faster
          }, 300);//css make title .5s, but need some faster
        }
          
      }
    },
    init : function(){
      act3.views.act3View = new act3.structView();
      act3.actions.inAct();
    }
  }
  
  window.act4 = {
    els : {

    },
    views : {

    },
    timer : [],
    autoPlay : function(){
      var time = setInterval(function(){
        var arrow = $('#act4 div.press-button div.inner');
        if(arrow.hasClass('swing')){
          arrow.removeClass('swing');
        }else{
          arrow.addClass('swing');
        }
      }, 1500);
      act4.timer.push(time);
    },
    stopAutoPlay : function(){
      for(var i = 0; i< act4.timer; i++){
        clearInterval(act4.timer[i]);
      }
      act4.timer.length = 0;
    },
    outTime : 1000,
    structView : Backbone.View.extend({
      tagName : 'div',
      className : 'view-wrap',
      initialize : function() {
        _.bindAll(this, 'render', 'removeView', 'goAct4a');
        this.render();
      },
      events : {
        'click .press-button' : 'goAct4a'
      },
      goAct4a : function(){
        menuDisable = true;
        
        var start = 0, stop = 44,cur=start, ind, imgArr=[];

        var loadroop = function loadroop (){
          if(cur > stop){

            cur = 0;
            if(Modernizr.canvas){
              var $canvas = $('#canvas1');
              var cWidth = $canvas.width();
              var cHeight = $canvas.height();
              var ctx = $canvas[0].getContext('2d');

              var timer = setInterval(function() {
                ctx.clearRect(0, 0, cWidth, cHeight);
                ctx.drawImage(imgArr[cur], 0, 0 , cWidth, cHeight);
                cur ++
                if(cur > stop){
                  clearInterval(timer);
                  setTimeout(function(){
                    act4.actions.outAct();
                    if(Modernizr.csstransitions){
                      $('#menu').css({
                        'transitionTimingFunction' : 'ease-in',
                        'left' : '-500px'
                      });
                    }else{
                      $('#menu').animate({
                        'left' : '-500px'
                      }, 500);
                    }
                    setTimeout(function(){
                      act4a.views.act4aView = new act4a.structView();
                      act4.views.act4View.removeView();
                      act4a.actions.inAct();
                    }, 500);
                  }, 500);
                }
              },1000/15);
            }else{
              
              var timer1 = setInterval(function() {
                $('#act4 div.canvas-wrap > img').replaceWith(imgArr[cur]);
                cur ++;
                if(cur > stop){
                  clearInterval(timer1);
                  setTimeout(function(){
                    act4.actions.outAct();
                    if(Modernizr.csstransitions){
                      $('#menu').css({
                        'transitionTimingFunction' : 'ease-in',
                        'left' : '-500px'
                      });
                    }else{
                      $('#menu').animate({
                        'left' : '-500px'
                      }, 500);
                    }
                    setTimeout(function(){
                      act4a.views.act4aView = new act4a.structView();
                      act4.views.act4View.removeView();
                      act4a.actions.inAct();
                    }, 500);
                  }, 500);
                }
              },1000/15);
            }
          }else{
            if(cur < 10){
              ind = '0' + cur;
            }else{
              ind = cur;
            }
            var img = new Image();

            $(img).load(function(){
              imgArr.push(this);
              cur ++;
              setTimeout(function(){
                loadroop();
              },0);
            });

            img.src = 'img/Comp/Comp_1_000' + ind + '.png';

          }
        }

        loadroop();
        
        act4.stopAutoPlay();
      },
      removeView : function(){
        act4.views.act4View.undelegateEvents();
        act4.views.act4View.remove();
        act4.stopAutoPlay();
      },
      render : function() {
        $(this.el).append(_.template($("#act4-template").html())).css({
          'width' : $('#acts-wrap').width()
        });
        $('#acts-wrap div.acts-list').append(this.el);
        if(Modernizr.canvas){
          $('#act4 div.canvas-wrap').prepend($('<canvas id="canvas1" width="647" height="300"></canvas>'));
          setTimeout(function(){
            var ctx = $('#canvas1')[0].getContext('2d');
            var img = new Image();
            $(img).load(function(){
              ctx.drawImage(img, 0, 0 , $('#canvas1').width(), $('#canvas1').height());
            });
            img.src = 'img/Comp/Comp_1_00000.png';

          }, 500);
        }else{
          $('#act4 div.canvas-wrap').prepend($('<img id="canvas-preimage" class="main-image" src="img/Comp/Comp_1_00000.png" />'));
        }
        act4.els = {
          $act4Body : $('#act4'),
          $act4Title : $('#act4 div.title'),
          $act4Canvas : $('#act4 div.canvas-wrap')
        };
      }
    }),
    actions : {
      inAct : function(){
        setTimeout(function(){
          if(Modernizr.csstransitions){
            for(var n in act4.els){
              if(n == '$act4Body'){
                continue;
              }
              var l = ($(window).width() - act4.els[n].width()) / 2;
              act4.els[n].css('left', l);
            }
            
            act4.els.$act4Title.css({
              'transitionTimingFunction' : 'ease-out',
              'top' : '6%'
            });
            setTimeout(function(){
              act4.els.$act4Canvas.css({
                'transitionTimingFunction' : 'ease-out',
                'bottom' : 0
              });
              act4.autoPlay();
            }, 300);//css make title .5s, but need some faster
          }else{
            for(var n in act4.els){
              if(n == '$act4Body'){
                continue;
              }
              var l = ($(window).width() - act4.els[n].width()) / 2;
              act4.els[n].css('left', l);
            }
            
            act4.els.$act4Title.animate({
              'top' : '6%'
            }, 500);
            setTimeout(function(){
              act4.els.$act4Canvas.animate({
                'bottom' : 0
              }, 500);
            }, 300);//css make title .5s, but need some faster
          }
            
        }, 500);//make some delay
        
      },
      outAct : function(){
        if(Modernizr.csstransitions){
          act4.els.$act4Canvas.css({
            'transitionTimingFunction' : 'ease-in',
            'bottom' : '-1000px'
          });
          setTimeout(function(){
            act4.els.$act4Title.css({
              'transitionTimingFunction' : 'ease-in',
              'top' : '-800px'
            });
          }, 300);//css make act4Canvas .5s, but need some faster
        }else{
          act4.els.$act4Canvas.animate({
            'bottom' : '-1000px'
          }, 500);
          setTimeout(function(){
            act4.els.$act4Title.animate({
              'top' : '-800px'
            }, 500);
          }, 300);//css make act4Canvas .5s, but need some faster
        }
          
      }
    },
    init : function(){
      act4.views.act4View = new act4.structView();
      act4.actions.inAct();
    }
  }

  window.act4a = {
    els : {

    },
    views : {

    },
    outTime : 1000,
    structView : Backbone.View.extend({
      tagName : 'div',
      className : 'view-wrap',
      initialize : function() {
        _.bindAll(this, 'render', 'removeView');
        this.render();
      },
      events : {
        'click .back-wrap' : 'goAct4'
      },
      goAct4 : function(){
        menuDisable = false;
        act4a.actions.outAct();
        setTimeout(function(){
          act4.views.act4View = new act4.structView();
          act4a.views.act4aView.removeView();
          act4.actions.inAct();
          if(Modernizr.csstransitions){
            $('#menu').css({
              'transitionTimingFunction' : 'ease-out',
              'left' : '2.85%'
            });
          }else{
            $('#menu').animate({
              'left' : '2.85%'
            }, 500);
          }
            
        }, 500);
      },
      removeView : function(){
        act4a.views.act4aView.undelegateEvents();
        act4a.views.act4aView.remove();
      },
      render : function() {
        $(this.el).append(_.template($("#act4a-template").html())).css({
          'width' : $('#acts-wrap').width()
        });
        $('#acts-wrap div.acts-list').append(this.el);
        act4a.els = {
          $act4aBody : $('#act4a'),
          $act4aTitle : $('#act4a div.title'),
          $act4aQr : $('#act4a div.qr-wrap'),
          $act4aBack : $('#act4a div.back-wrap')
        };
      }
    }),
    actions : {
      inAct : function(){
        setTimeout(function(){
          if(Modernizr.csstransitions){
            for(var n in act4a.els){
              if(n == '$act4aBody' || n == '$act4aBack'){
                continue;
              }
              var l = ($(window).width() - act4a.els[n].width()) / 2;
              act4a.els[n].css('left', l);
            }
            
            act4a.els.$act4aTitle.css({
              'transitionTimingFunction' : 'ease-out',
              'top' : '7.5%'
            });
            setTimeout(function(){
              act4a.els.$act4aQr.css({
                'transitionTimingFunction' : 'ease-out',
                'bottom' : 0
              });
              act4a.els.$act4aBack.css({
                'transitionTimingFunction' : 'ease-out',
                'left' : 0
              });
            }, 300);//css make title .5s, but need some faster
          }else{
            for(var n in act4a.els){
              if(n == '$act4aBody' || n == '$act4aBack'){
                continue;
              }
              var l = ($(window).width() - act4a.els[n].width()) / 2;
              act4a.els[n].css('left', l);
            }
            
            act4a.els.$act4aTitle.animate({
              'top' : '7.5%'
            }, 500);
            setTimeout(function(){
              act4a.els.$act4aQr.animate({
                'bottom' : 0
              }, 500);
              act4a.els.$act4aBack.animate({
                'left' : 0
              }, 500);
            }, 300);//css make title .5s, but need some faster
          }
        }, 500);//make some delay
        
      },
      outAct : function(){
        if(Modernizr.csstransitions){
          act4a.els.$act4aQr.css({
            'transitionTimingFunction' : 'ease-in',
            'bottom' : '-1000px'
          });
          act4a.els.$act4aBack.css({
            'transitionTimingFunction' : 'ease-in',
            'left' : '-500px'
          });
          setTimeout(function(){
            act4a.els.$act4aTitle.css({
              'transitionTimingFunction' : 'ease-in',
              'top' : '-800px'
            });
          }, 300);//css make act4aCanvas .5s, but need some faster
        }else{
          act4a.els.$act4aQr.animate({
            'bottom' : '-1000px'
          }, 500);
          act4a.els.$act4aBack.animate({
            'left' : '-500px'
          }, 500);
          setTimeout(function(){
            act4a.els.$act4aTitle.animate({
              'top' : '-800px'
            }, 500);
          }, 300);//css make act4aCanvas .5s, but need some faster
        }
      }
    },
    init : function(){
      act4a.actions.inAct();
    }
  }

  var nowAct = 0;
  var navIsAni = false;
  //act0.init();


  var navAnimate = function(num, first){
    navIsAni = true;
    var $li = $('#menu ul.menu-list li').eq(num);
    var top = $li.position().top - 15;
    if(first){
      $('#menu div.trigger').animate({
        'top' : top
      }, 500, function(){
        $(this).animate({
          'left' : '-45px'
        });
        $li.animate({
          'marginLeft' : '51px'
        });
      });
      return;
    }
    $('#menu ul.menu-list li').eq(nowAct).animate({
      'marginLeft' : 0
    }, 500);
    $('#menu div.trigger').animate({
      'left' : '-95px'
    }, 500);
    setTimeout(function(){
      $('#menu div.trigger').animate({
        'top' : top
      }, 500, function(){
        $(this).animate({
          'left' : '-45px'
        }, 500);
        $li.animate({
          'marginLeft' : '51px'
        }, 500, function(){
          navIsAni = false;
        });
      });
    }, 500);
  }
  
  //navAnimate(0, true);
  act00.views.act00View = new act00.structView();
  var menuDisable = false;
  $('#menu ul.menu-list a').on('click', function(){
    var tarAct = $(this).data('act');
    if(tarAct == nowAct || navIsAni || menuDisable){
      return false;
    }
    $('#menu ul.menu-list li').removeClass("active");
    $(this).parents("li").addClass("active");
    navAnimate(tarAct);
    //return;
    window['act' + nowAct].actions.outAct();
    setTimeout(function(){
      window['act' + tarAct].views['act' + tarAct + 'View'] = new window['act' + tarAct].structView();
      if(tarAct > nowAct){
        $('#acts-wrap div.acts-list').animate({
          'marginLeft' : - $('#acts-wrap').width()
        }, 500, function(){
          window['act' + nowAct].views['act' + nowAct + 'View'].removeView();
          $(this).css({
            'marginLeft' : 0
          });
          window['act' + tarAct].actions.inAct();
          nowAct = tarAct;
        });
      }else{
        $('#acts-wrap div.acts-list').append($('#acts-wrap div.acts-list').children().eq(0)).css({
          'marginLeft' : - $('#acts-wrap').width()
        });
        $('#acts-wrap div.acts-list').animate({
          'marginLeft' : 0
        }, 500, function(){
          window['act' + nowAct].views['act' + nowAct + 'View'].removeView();
          window['act' + tarAct].actions.inAct();
          nowAct = tarAct;
        });
      };
    }, window['act' + nowAct].outTime);
    return false;
  });

  

});
