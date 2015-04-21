
module.exports = {
	reviewAppCount: 0,
	tag: '',	
	openReviewAppUrlDirectly : function (reviewAppUrl) {
		//Cordova.exec(null,null,"RateApp","openReviewAppUrlDirectly",['']);//success,fail,class,method,params
		Cordova.exec(null,null,"RateApp","openReviewAppUrlDirectly",[reviewAppUrl]);//success,fail,class,method,params
		//alert("test");
	},	
	//ex) getReviewAppCount("kr.co.hot.some");
	//<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
	getReviewAppCount : function (reviewAppUrl, tag) {
				
		//market://details?
		//https://play.google.com/store/apps/details?
		//market://details?id=com.cranberrygame.slidepuzzle&write_review=true
		//https://play.google.com/store/apps/details?id=com.cranberrygame.slidepuzzle&write_review=true
		reviewAppUrl = reviewAppUrl.replace("market://details?", "https://play.google.com/store/apps/details?");
	
		var self = this;

		self.tag = tag;	
		
		//
		var request = new XMLHttpRequest();
		//var request = new ActiveXObject("Microsoft.XMLHTTP");//windowsphone8
		
		request.open("GET", reviewAppUrl);
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				//alert(request.responseText);
				var num = parse_review_app_count(request.responseText);
				self.reviewAppCount = num;
				if (self.onGetReviewAppCount)			
					self.onGetReviewAppCount();				
			}
		}
		request.send();
		
		function parse_review_app_count(str) {
			var result = 0;
			
			try {
				//str = "<span class=\"reviews-num\">58</span>";		
				var before = "<span class=\"reviews-num\">";
				var after = "</span>";
				var result = 0;
				str = str.substring(str.indexOf(before) + before.length);//58</span>
				//alert(str);
				str = str.substring(0, str.indexOf(after));
				//alert("|"+str+"|");
				result = parseInt(str);
				
				if (isNaN(result))
					result = 0;				
			}
			catch(e) {
				result = 0;			
			}
			
			return result;
		}		
	},
	onGetReviewAppCount: null
};
