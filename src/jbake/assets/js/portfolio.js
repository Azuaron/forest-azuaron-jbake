/*
* Menu functions
*/
var latch_origin = 0;
function setup_menu()
{
	if(!($('#latch').length > 0))
	{
		$('#menu > ul').prepend("<li class='menu-item page_item' id='firstmenuitem'>" +
				'<div id="latch">' +
					"<img id='downlatch' src='http://www.azuarondesign.com/wp-content/themes/azdes/images/10/downlatch.png' alt='Top clamp (you are here)' />" +
					"<img id='uplatch' src='http://www.azuarondesign.com/wp-content/themes/azdes/images/10/uplatch.png' alt='Bottom clamp (you are here)' />" +
				"</div>" +
			"</li>");
	}
	latch_origin = $('#latch').parent();
	$('#latch').insertBefore('#menu > ul');
	$('#latch').css({'position' : 'absolute', 'top' : '0'});
	menu_go_to(latch_origin, true);
}

function menu_go_to(menu_item, appear)
{
	if(menu_item == false)
	{
		menu_item = latch_origin;
	}
	if(appear)
	{
		var left_o = menu_item.offset().left + (menu_item.width() / 2) + 12;
		$('#latch').offset({ left: left_o });
	}else
	{
		var start_loc = $('#latch').offset().left;
		var left_o = menu_item.offset().left + (menu_item.width() / 2) - 12;
		var speed = 600 + Math.pow(Math.abs(start_loc - left_o), 1.2);
		$('#latch').animate( {left : left_o}, speed, 'swing' );
	}
}
/*
 * jQuery autoResize (textarea auto-resizer)
 * @copyright James Padolsey http://james.padolsey.com
 * @version 1.04
 */
(function(a){a.fn.autoResize=function(j){var b=a.extend({onResize:function(){},animate:true,animateDuration:150,animateCallback:function(){},extraSpace:20,limit:1000},j);this.filter('textarea').each(function(){var c=a(this).css({resize:'none','overflow-y':'hidden'}),k=c.height(),f=(function(){var l=['height','width','lineHeight','textDecoration','letterSpacing'],h={};a.each(l,function(d,e){h[e]=c.css(e)});return c.clone().removeAttr('id').removeAttr('name').css({position:'absolute',top:0,left:-9999}).css(h).attr('tabIndex','-1').insertBefore(c)})(),i=null,g=function(){f.height(0).val(a(this).val()).scrollTop(10000);var d=Math.max(f.scrollTop(),k)+b.extraSpace,e=a(this).add(f);if(i===d){return}i=d;if(d>=b.limit){a(this).css('overflow-y','');return}b.onResize.call(this);b.animate&&c.css('display')==='block'?e.stop().animate({height:d},b.animateDuration,b.animateCallback):e.height(d)};c.unbind('.dynSiz').bind('keyup.dynSiz',g).bind('keydown.dynSiz',g).bind('change.dynSiz',g)});return this}})(jQuery);
/*
* Dynamically sized boxes for the resume
*/
var GROW_BOTH = 1;
var SHRINK_BOTH = -1;
var GROW_HEIGHT = -2;
var GROW_WIDTH = 2;

/*
*	Hides the text in the specified box.
*	-1 means hide the text in all the boxes.
*/
function hide_text(box)
{
	if(box == -1)
	{
		$('.resumebox').children(':not(h3)').fadeOut();
	}else
	{
		$('.resumebox:eq(' + box + ')').children(':not(h3)').fadeOut();
	}
}

function show_text(box)
{
	$('.resumebox:eq(' + box + ')').children(':not(h3)').stop();
	$('.resumebox:eq(' + box + ')').children(':not(h3)').show(0,function()
		{
			$(this).css('opacity','1');
		});
}

/*
*	Morphs the box
*	type based on constants
*/
function morph(tomorph, type)
{
	switch(type)
	{
		case GROW_HEIGHT:	$('.resumebox:eq(' + tomorph + ')').animate({
									width:'50px',
									height:'400px',
									fontSize:'8px'
								}, 1000, function(){
									//animation complete
								}
							);
							break;
		case SHRINK_BOTH:	$('.resumebox::eq(' + tomorph + ')').animate({
									width:'50px',
									height:'50px',
									fontSize:'8px'
								}, 1000, function(){
									//animation complete
								}
							);
							break;
		case GROW_BOTH:		$('.resumebox:eq(' + tomorph + ')').animate({
									width:'470px',
									height:'400px',
									fontSize:'24px'
								}, 1000, function(){
									//animation complete
								}
							);
							break;
		case GROW_WIDTH:	$('.resumebox:eq(' + tomorph + ')').animate({
									width:'470px',
									height:'50px',
									fontSize:'18px'
								}, 1000, function(){
									//animation complete
								}
							);
								break;
		default:break;
	}
}

/*
*	Shrinks all boxes except the specified box
*/
function morph_all(grow)
{
	morph(grow,GROW_BOTH);
	switch(grow)
	{
		case 0:	morph(1,GROW_HEIGHT);
				morph(2,GROW_HEIGHT);
				morph(3,GROW_WIDTH);
				morph(4,SHRINK_BOTH);
				morph(5,SHRINK_BOTH);
				morph(6,GROW_WIDTH);
				morph(7,SHRINK_BOTH);
				morph(8,SHRINK_BOTH);
				break;
		case 1:	morph(0,GROW_HEIGHT);
				morph(2,GROW_HEIGHT);
				morph(3,SHRINK_BOTH);
				morph(4,GROW_WIDTH);
				morph(5,SHRINK_BOTH);
				morph(6,SHRINK_BOTH);
				morph(7,GROW_WIDTH);
				morph(8,SHRINK_BOTH);
				break;
		case 2:	morph(0,GROW_HEIGHT);
				morph(1,GROW_HEIGHT);
				morph(3,SHRINK_BOTH);
				morph(4,SHRINK_BOTH);
				morph(5,GROW_WIDTH);
				morph(6,SHRINK_BOTH);
				morph(7,SHRINK_BOTH);
				morph(8,GROW_WIDTH);
				break;
		case 3:	morph(0,GROW_WIDTH);
				morph(1,SHRINK_BOTH);
				morph(2,SHRINK_BOTH);
				morph(4,GROW_HEIGHT);
				morph(5,GROW_HEIGHT);
				morph(6,GROW_WIDTH);
				morph(7,SHRINK_BOTH);
				morph(8,SHRINK_BOTH);
				break;
		case 4:	morph(0,SHRINK_BOTH);
				morph(1,GROW_WIDTH);
				morph(2,SHRINK_BOTH);
				morph(3,GROW_HEIGHT);
				morph(5,GROW_HEIGHT);
				morph(6,SHRINK_BOTH);
				morph(7,GROW_WIDTH);
				morph(8,SHRINK_BOTH);
				break;
		case 5:	morph(0,SHRINK_BOTH);
				morph(1,SHRINK_BOTH);
				morph(2,GROW_WIDTH);
				morph(3,GROW_HEIGHT);
				morph(4,GROW_HEIGHT);
				morph(6,SHRINK_BOTH);
				morph(7,SHRINK_BOTH);
				morph(8,GROW_WIDTH);
				break;
		case 6:	morph(0,GROW_WIDTH);
				morph(1,SHRINK_BOTH);
				morph(2,SHRINK_BOTH);
				morph(3,GROW_WIDTH);
				morph(4,SHRINK_BOTH);
				morph(5,SHRINK_BOTH);
				morph(7,GROW_HEIGHT);
				morph(8,GROW_HEIGHT);
				break;
		case 7:	morph(0,SHRINK_BOTH);
				morph(1,GROW_WIDTH);
				morph(2,SHRINK_BOTH);
				morph(3,SHRINK_BOTH);
				morph(4,GROW_WIDTH);
				morph(5,SHRINK_BOTH);
				morph(6,GROW_HEIGHT);
				morph(8,GROW_HEIGHT);
				break;
		case 8:	morph(0,SHRINK_BOTH);
				morph(1,SHRINK_BOTH);
				morph(2,GROW_WIDTH);
				morph(3,SHRINK_BOTH);
				morph(4,SHRINK_BOTH);
				morph(5,GROW_WIDTH);
				morph(6,GROW_HEIGHT);
				morph(7,GROW_HEIGHT);
				break;
		default: break;
	}
}

function reset_boxes()
{
	hide_text(-1);
	$('.resumebox').stop(true,false);
	$('.resumebox').animate({
			width:'190px',
			height:'150px',
			fontSize:'18px'
		}, 1000, function(){
			//animation complete
		}
	);
}

function setup_sam_qual()
{
	$('#nojs').text('Hover over any section you want to know about');
	$('.resumebox').children(':not(h3)').hide();
	$('.resumebox').css('height','150px');
}
/*
* Portfolio functions
*/
function get_port_src(portitem)
{
	var small_src = $(portitem).find('img').attr('src');
	return small_src.replace('sml_','lrg_');
}

function swap_images(portitem)
{
	$('img#portii').remove();
	$('#portipic').prepend('<img id="portii" src="' + get_port_src(portitem) + '" alt="Website example" />');
}
/*
* Accordian functions
*/
function add_downup(accordian)
{
	accordian.find('.accordiantab').append('<div class="accordiandownup">' +
			"<img src='http://www.azuarondesign.com/wp-content/themes/azdes/images/10/upchevrons.png' alt='Click to contract (up chevrons)' />" +
		'</div>');
}

function scroll_to(id)
{
	$('html').animate({scrollTop: $("#"+id).offset().top},'slow');
}

function close_tabs(accordian)
{
	accordian.find('.accordiancontent').slideUp('slow');
	accordian.find('.accordiancontent').removeClass('open_content');
	accordian.find('.accordiandownup').children('img').attr('src', "http://www.azuarondesign.com/wp-content/themes/azdes/images/10/downchevrons.png");
}

function close_tab(content)
{
	content.slideUp('slow');
	scroll_to(content.parent().parent().parent().find('h2.accordianhead > a').first().attr('name'));
	content.removeClass('open_content');
	content.siblings('.accordiandownup').children('img').attr('src', "http://www.azuarondesign.com/wp-content/themes/azdes/images/10/downchevrons.png");
}

function open_tab(content)
{
	content.stop();
	content.slideDown('slow');
	
	var over = content.parent().parent();
	var offset = 560;
	var counter = $('#accordian > .accordianover').length + 1;
	
	while(!over.next().hasClass('clear'))
	{
		over = over.next();
		offset-= 140;
		if(counter > 0)
		{
			counter--;
		}else
		{
			//How are we at greater than the number of accordianovers?
			break;
		}
	}
	$('html').animate({scrollTop: offset},'500');
	content.addClass('open_content');
	content.siblings('.accordiandownup').children('img').attr('src', "http://www.azuarondesign.com/wp-content/themes/azdes/images/10/upchevrons.png");
}
/*
* jQuery document start function
*/
$(document).ready(function() 
{
	/*
	* Start menu
	*/
	setup_menu();
	
	$('li.menu-item, li.page_item').mouseenter(function(event)
	{
		$('#latch').stop();
		menu_go_to($(this), false);
	});
	$('#menu').mouseleave(function(event)
	{
		$('#latch').stop();
		menu_go_to(false, false);
	});
	/*
	* Setup resize
	*/
	$('textarea').attr('rows','5')
	/*
	*	Using autoResize by James Padolsey
	*	http://james.padolsey.com/javascript/jquery-plugin-autoresize/
	*	July 26, 2010
	*/
	$('textarea').autoResize({
		// On resize:
		onResize : function() {
			$(this).css({opacity:0.8});
		},
		// After resize:
		animateCallback : function() {
			$(this).css({opacity:1});
		},
		// Quite slow animation:
		animateDuration : 300,
		// More extra space:
		extraSpace : 20
	});
	/*
	* Form functions
	*/
	$('input:not(.checkbox), textarea').parents('label').addClass('tofocus');
	$('input:not(.checkbox), textarea').focusin(function(event)
	{
		$(this).parents('label').addClass('focused').height($(this).parents('label').height() - 2);
	});
	$('input, textarea').focusout(function(event)
	{
		$(this).parents('label').removeClass('focused').height($(this).parents('label').height() + 2);
	});
	/*
	* Start resume box-resizing functions
	*/
	setup_sam_qual();
	$('.resumebox').mouseenter(function(event){
		$('#nojs').slideUp('slow',function(){$('#nojs').remove();});
		$('.resumebox').stop(true,false);
		
		var boxnum = 8 - $('#' + $(this).attr('id') + ' ~ .resumebox').length;
		
		morph_all(boxnum);
		for(var i = 0; i < 9; i++)
		{
			if(i != boxnum)
			{
				hide_text(i);
			}
		}
		show_text(boxnum);
	});
	/*
	* Start portfolio Javascripting
	*/
	$('.portitem').css('cursor','pointer');
	$('body').append('<div id="mask"></div>');
	$('#mask').css({
		position:'absolute',
		height:$(document).height(),
		width:$(window).width(),
		zIndex:'9000',
		top:'0',
		left:'0',
		display:'none',
		background:"transparent url('http://www.azuarondesign.com/wp-content/themes/azdes/images/10/screen.png') repeat top left"
	});
	$('body').append('<div id="window">' +
						'<h2 id="portih"></h2>' +
						'<div id="portitem">' +
						'<div id="portipic">' +
						'<img id="portii" src="" alt="Website example" />' +
						'<p id="portidesby"></p>' +
						'</div>' +
						'<p class="portidescr"></p>' +
						'<p class="portidescr"></p>' +
						'<p class="portidescr"></p>' +
						'</div>' +
						'<img id="portix" src="http://www.azuarondesign.com/wp-content/themes/azdes/images/10/x.gif" alt="Close window" />' +
						'</div>');
	$('#portix').css({
		position:'absolute',
		right:'-12px',
		top:'-12px',
		cursor:'pointer'
	});
	$('#window').css({
		position:'absolute',
		width:'768px',
		zIndex:'9999',
		top:'250px',
		left:'51px',
		backgroundColor:'#F2F2F2',
		border:'1px solid black',
		padding:'5px 15px',
		display:'none'
	});
	$('#portih').css('padding-top','0');
	
	$('.portitem').click(function(event)
	{
		event.preventDefault();
		
		$('#mask').css('display','block');
		$('h2#portih').text($(this).children('h3').first().text());
		swap_images(this);
		$('.portidescr:first').text($(this).find('p.portdescr').first().text());
		$('.portidescr:eq(1)').text($(this).find('p.portdescr').eq(1).text());
		$('.portidescr:last').text($(this).find('p.portdescr').last().text());
		$('#window').css('display','block');
		$('html,body').animate({scrollTop:'250px'},1000);
		
		return false;
	});
	
	$('#portix').click(function(event)
	{
		$('#window').css('display','none');
		$('#mask').css('display','none');
	});
	/*
	* Start accordianing for the services
	*/
	add_downup($('#accordian'));
	close_tabs($('#accordian'));
	$('#tabmenu').remove();
	/*
	*	Modified version of rmurphey's code to get the anchor to open
	*	the appropriate panel. Originally found on Aug. 26, 2010 here:
	*	http://blog.rebeccamurphey.com/2007/12/04/anchor-based-url-navigation-with-jquery
	*/
	var myFile = document.location.toString();
	if (myFile.match('#'))
	{ // the URL contains an anchor
	  // click the navigation item corresponding to the anchor
	  var myAnchor = myFile.split('#')[1];
	  
	  open_tab($('a[name="' + myAnchor + '"]').parent().siblings('.accordiantab').children('.accordiancontent'));
	}
	//End modified version of rmurphey's code
	$('.accordiandownup').click(function(event)
	{
		if($(this).siblings('.accordiancontent').hasClass('open_content'))
		{
			close_tab($(this).siblings('.accordiancontent'));
		}else
		{
			close_tabs($('#accordian'));
			open_tab($(this).siblings('.accordiancontent'));
		}
	});
	$('a[href="services/#design"], a[href="services/#enhance"], a[href="services/#usability"]').click(function(event)
	{
		var goingTo = $(this).attr('href').split('#')[1];
		var goingToContent = $('a[name="' + goingTo + '"]').parent().siblings('.accordiantab').children('.accordiancontent');
		if(goingToContent.hasClass('open_content'))
		{
			close_tab(goingToContent);
		}else
		{
			close_tabs($('#accordian'));
			open_tab(goingToContent);
		}
	});
});