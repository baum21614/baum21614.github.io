function baum21614SetCookie(name,value,days){var expires="";if(days){var date=new Date;date.setTime(date.getTime()+24*days*60*60*1e3),expires="; expires="+date.toUTCString()}document.cookie=name+"="+(value||"")+expires+"; path=/"}function baum21614GetCookie(name){for(var nameEQ=name+"=",ca=document.cookie.split(";"),i=0;i<ca.length;i++){for(var c=ca[i];" "==c.charAt(0);)c=c.substring(1,c.length);if(0==c.indexOf(nameEQ))return c.substring(nameEQ.length,c.length)}return null}function baum21614DeleteCookie(name){document.cookie=name+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}String.prototype.hashCode=function(){var hashValue=0,i,chr;if(0===this.length)return hashValue;for(i=0;i<this.length;i++)hashValue=(hashValue<<5)-hashValue+(chr=this.charCodeAt(i)),hashValue|=0;return hashValue};const ccf_client="grovider".hashCode();window.onload=()=>{baum21614GetCookie("baum21614_clientconnect")||baum21614SetCookie("baum21614_clientconnect",ccf_client,365)};
