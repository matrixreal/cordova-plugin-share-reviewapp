
module.exports = {
	openRateAppUrlDirectly : function (rateUrl) {
		//Cordova.exec(null,null,"RateApp","openRateAppUrlDirectly",['']);//success,fail,class,method,params
		Cordova.exec(null,null,"RateApp","openRateAppUrlDirectly",[rateUrl]);//success,fail,class,method,params
		//alert("test");
	}
};
