
module.exports = {
	openRateUrlDirectly : function (rateUrl) {
		//Cordova.exec(null,null,"Rate","openRateUrlDirectly",['']);//success,fail,class,method,params
		Cordova.exec(null,null,"Rate","openRateUrlDirectly",[rateUrl]);//success,fail,class,method,params
		//alert("test");
	}
};
