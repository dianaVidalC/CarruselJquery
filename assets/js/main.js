$(document).ready(function(){

var tiempo=setInterval(function(){
  avanzar();
},3000);

	$('#btnAnt').click(function()
	{
		var size = $('.carousel-list').find('.carousel-imagen').size();
		$('.carousel-list').find('.carousel-imagen').each(
			function(index,value){
				if($(value).hasClass('visible'))
				{
					$(value).slideUp();
					$(value).removeClass('visible');

					if(index==0)
					{
						$($('.carousel-list').find('.carousel-imagen').get(size-1)).slideDown();
						$($('.carousel-list').find('.carousel-imagen').get(size-1)).addClass('visible');
						return false;
					}
					else
					{
						$($('.carousel-list').find('.carousel-imagen').get(index-1)).slideDown();
						$($('.carousel-list').find('.carousel-imagen').get(index-1)).addClass('visible');
						return false;
					}
				}
		});
	});
	$('#btnSig').click(function()
	{
		var size = $('.carousel-list').find('.carousel-imagen').size();
		$('.carousel-list').find('.carousel-imagen').each(
			function(index,value){
				if($(value).hasClass('visible'))
				{
					$(value).slideUp();
					$(value).removeClass('visible');

					if(index+1<size)
					{
						$($('.carousel-list').find('.carousel-imagen').get(index+1)).slideDown();
						$($('.carousel-list').find('.carousel-imagen').get(index+1)).addClass('visible');
						return false;
					}
					else
					{
						$($('.carousel-list').find('.carousel-imagen').get(0)).slideDown();
						$($('.carousel-list').find('.carousel-imagen').get(0)).addClass('visible');
						return false;
					}
				}
		});
	});
});


function avanzar()
{
	var size = $('.carousel-list').find('.carousel-imagen').size();
		$('.carousel-list').find('.carousel-imagen').each(
			function(index,value){
				if($(value).hasClass('visible'))
				{
					$(value).slideUp();
					$(value).removeClass('visible');

					if(index+1<size)
					{
						$($('.carousel-list').find('.carousel-imagen').get(index+1)).slideDown();
						$($('.carousel-list').find('.carousel-imagen').get(index+1)).addClass('visible');
						return false;
					}
					else
					{
						$($('.carousel-list').find('.carousel-imagen').get(0)).slideDown();
						$($('.carousel-list').find('.carousel-imagen').get(0)).addClass('visible');
						return false;
					}
				}
		});
}
