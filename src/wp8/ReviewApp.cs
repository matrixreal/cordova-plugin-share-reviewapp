//Copyright (c) 2014 Sang Ki Kwon (Cranberrygame)
//Email: cranberrygame@yahoo.com
//Homepage: http://www.github.com/cranberrygame
//License: MIT (http://opensource.org/licenses/MIT)
using System;
using System.Windows;
using System.Runtime.Serialization;
using WPCordovaClassLib.Cordova;
using WPCordovaClassLib.Cordova.Commands;
using WPCordovaClassLib.Cordova.JSON;
using Microsoft.Phone.Tasks;//MarketplaceDetailTask,MarketplaceReviewTask

using System.Diagnostics; //Debug.WriteLine

namespace Cordova.Extension.Commands
{
    public class ReviewApp : BaseCommand
    {

        public void openReviewAppUrlDirectly(string args)
        {
			Debug.WriteLine("test");
  
			//JsonHelper.Deserialize<string[]>(args)[0];

			string rateUrl=JsonHelper.Deserialize<string[]>(args)[0];
			
			//http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh394030(v=vs.105).aspx
			MarketplaceReviewTask marketplaceReviewTask = new MarketplaceReviewTask();
			//marketplaceReviewTask.ContentIdentifier = appid; //compile error
			//marketplaceReviewTask.ContentType = MarketplaceContentType.Applications; //compile error
			marketplaceReviewTask.Show();
				
			DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "ok"));			
        }        

	}
}