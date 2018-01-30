// JavaScript Document

$(function(){
	//切换
	var _HistoryStoreDataMeunulli=$(".HistoryStoreData .Meunul li");
	var _HistoryStoreDataulli=$(".HistoryStoreData .nrul .li_01");
	_HistoryStoreDataulli.hide();
	_HistoryStoreDataMeunulli.eq(0).addClass("check");
	_HistoryStoreDataulli.eq(0).fadeIn();
	_HistoryStoreDataMeunulli.click(function(){
		$(this).addClass("check");
		$(this).siblings().removeClass("check");	
		var _thisindex=$(this).index();
		_HistoryStoreDataulli.eq(_thisindex).fadeIn();
		_HistoryStoreDataulli.eq(_thisindex).show();
		_HistoryStoreDataulli.eq(_thisindex).siblings().fadeOut();
		_HistoryStoreDataulli.eq(_thisindex).siblings().hide();
	});
	
	//表格
	//基数背景颜色
	$(".CommoditySalestab tr:even").addClass("even");
	//偶数背景颜色
	$(".CommoditySalestab tr:odd").addClass("odd");
	
		
});