//The file contains pageproperties function and the tracking script
//Find out what page calls getheader function
var selfurl = self.location.href; // The URL of the page itself, not matter it's in a frame or not
var urlstring = selfurl.substring(7);
var url_arr = urlstring.split("/");
var num = url_arr[0].indexOf(":");
if (num > 0) {
	var fintst = url_arr[0].substring(num, -1);
}
var arr_length = url_arr.length;
//last part of the URL -- it is for static pages URL
var page1 = url_arr[arr_length-1];
//last part of the URL -- it is for dynamic pages URL
var page_dot = page1.indexOf(".");
if (page_dot > 0) {
	var page = page1.substring(page_dot, -1);
}
var page_dir = url_arr[arr_length-2];
var redirstring;
// Variables for page header
var orgid;
var lang;
var ccyes; //have change country link
var prot1;
var hostname1;
var port1;
var redir_page; 
var redir_type; 
var calling_cat;
var country_dir;

//Get OU cookie
function getOUCookie (labelName){
	var labelLen = labelName.length
	var cookieData = document.cookie
	var cLen = cookieData.length
	var i = 0
	var cEnd
	while (i < cLen) {
		var j = i + labelLen
		if (cookieData.substring(i,j) == labelName) {
			cEnd = cookieData.indexOf(";",j)
			if (cEnd == -1 ) {
				cEnd = cookieData.length
			}
			return unescape(cookieData.substring(j+1, cEnd))
		}
		i++
	}
	return ""
}

function main_global() {
	// /education/lang/  -- cms language pages
	//No change country
	//Shows main country's phone number
	switch (url_arr[3]){
		case "cn":
			orgid = "1243197";
			lang = "ZHS";
		break;
        case "cz": 
        	orgid = "9";
        	lang = "CS";
        break;
		case "de":
			orgid = "34";
			lang = "D";
		break;
		case "dk":
			orgid = "36";
			lang = "DK";
		break;
		case "es":
			orgid = "51";
			lang = "E";
		break;
		case "fi":
			orgid = "39";
			lang = "SF";
		break;
		case "fr":
			orgid = "38";
			lang = "F";
		break;
		case "frc":
			orgid = "46777";
			lang = "FRC";
		break;
		case "sk":
			orgid ="11";
			lang="SK";
		break;
		case "it":
			orgid = "32";
			lang = "I";
		break;
		case "jp":
			orgid = "70";
			lang = "JA";
		break;
		case "kr":
			orgid = "15";
			lang = "KO";
		break;
		case "me":
			orgid = "44";
			lang = "US";
		break;
		case "nl":
			orgid = "41";
			lang = "NL";
		break;	
		case "no":
			orgid = "37";
			lang = "N";
		break;	
		case "pt":
			orgid = "35";
			lang = "PT";
		break;
		case "pl":
			orgid = "10";
			lang = "PL";
		break;
		case "ptb":
			orgid = "378219";
			lang ="PTB";
		break;
		case "ro":
			orgid = "54";
			lang = "RO";
		break;	
		case "se":
			orgid = "40";
			lang = "S";
		break;	
		case "tw":
			orgid = "17";
			lang = "ZHT";
		break;
		case "hu":
			orgid = "8";
			lang = "HU";
		break;

	}
//if(orgid != 70){
	document.write('<script language="Javascript" src="'+dynamic_base+'/admin/jscripts/rd_temp_config/'+orgid+lang+'_rd_temp_config.js"><\/script>');
//	}
	//document.write('<script language="Javascript" src="'+dynamic_base+'/admin/jscripts/get_data.js"><\/script>');
}

function cookie_global() {
	// /education/  -- cms global education pages; for example, "/education/certification/"
	// No change country
	// Shows phone number based on user's cookie
	aorgid = getOUCookie ("org_id");  // read ou cookie
	alang = getOUCookie ("lang"); //read ou cookie
	getUCMCookies(); // get o.com cookie 
	readInfoCookie(); //read o.com cookie
	//Check for o.com country cookie first
	if (isUCMRegistered()) {
		var countrycookie = ORA_UCM_INFO.country;
		switch (countrycookie) {
			case "CHN":
				orgid = "1243197";
				lang = "ZHS";
			break;
			case "AUS":
				orgid = "15947";
				lang = "US";
			break;
			case "BEL":
				orgid = "52";
				lang = "US";
			break;
			case "CAN":
				orgid = "46777";
				lang = "US";
			break;
			case "GBR":
				orgid = "28";
				lang = "US";
			break;
			case "IRL":
				orgid = "27";
				lang = "US";
			break;
			case "IDN":
				orgid = "15942";
				lang = "US";
			break;
			case "IND":
				orgid = "1080544";
				lang = "US";
			break;
			case "HKG":
				orgid = "15941";
				lang = "US";
			break;
			case "ESP":
				orgid = "51";
				lang = "E";
			break;
			case "PRT":
				orgid = "35";
				lang = "PT";
			break;
			case "JPN":
				orgid = "70";
				lang = "JA";
			break;
			case "LUX":
				orgid = "53";
				lang = "US";
			break;
			case "ARE":
				orgid = "44";
				lang = "US";
			break;
			case "NZL":
				orgid = "15944";
				lang = "US";
			break;
			case "PHL":
				orgid = "15945";
				lang = "US";
			break;
			case "POL":
				orgid = "10";
				lang = "PL";
			break;
			case "SGP":
				orgid = "15946";
				lang = "US";
			break;
			case "USA":
				orgid = "1001";
				lang = "US";
			break;
			case "ZAF":
				orgid = "30";
				lang = "US";
			break;
			case "ARG":
				orgid = "14515";
				lang = "ESA";
			break;
			case "AUT":
				orgid = "1295";
				lang = "D";
			break;
			case "CRI":
				orgid = "1000257";
				lang = "ESA";
			break;
			case "MEX":
				orgid = "189915";
				lang = "ESA";
			break;
			case "FRA":
				orgid = "38";
				lang = "F";
			break;
			case "DEU":
				orgid = "34";
				lang = "D";
			break;
			case "NLD":
				orgid = "41";
				lang = "NL";
			break;
			case "PRI":
				orgid = "1000254";
				lang = "ESA";
			break;
			case "VEN":
				orgid = "1000255";
				lang = "ESA";
			break;
			case "CHE":
				orgid = "29";
				lang = "US";
			break;
			case "TWN":
				orgid = "17";
				lang = "ZHT";
			break;
			case "THA":
				orgid = "15949";
				lang = "US";
			break;
			case "MYS":
				orgid = "15943";
				lang = "US";
			break;
			case "NOR":
				orgid = "37";
				lang = "N";
			break;
			case "ITA":
				orgid = "32";
				lang = "I";
			break;
			case "FIN":
				orgid = "39";
				lang = "SF";
			break;
			case "DNK":
				orgid = "36";
				lang = "DK";
			break;
			case "SWE":
				orgid = "40";
				lang = "S";
			break;
			case "HUN":
				orgid = "8";
				lang = "HU";
			break;
		}
//if(orgid != 70){
		document.write('<script language="Javascript" src="'+dynamic_base+'/admin/jscripts/rd_temp_config/'+orgid+lang+'_rd_temp_config.js"><\/script>');
//		}
	} else if ((aorgid != "") && (alang != "")) { 
	//If o.com cookie is not found, check for ou cookie
	document.write('<script language="Javascript" src="'+dynamic_base+'/admin/jscripts/rd_temp_config/'+aorgid+alang+'_rd_temp_config.js"><\/script>');
	orgid = aorgid;
	lang = alang;
	} else {
	//If both o.com and ou cookie are not found, default to US.
	document.write('<script language="Javascript" src="'+dynamic_base+'/admin/jscripts/rd_temp_config/1001US_rd_temp_config.js"><\/script>');
	orgid = "1001";
	lang = "US";
	}
}

function cms_country() {
	// http://www.oracle.com/xx/education/  -- cms country pages
	// Have change country
	// Shows country's phone number
	//alert ("cms_country function");
	
	if (url_arr[3] == "education") {
		country_dir = url_arr[2];
	}
	if (url_arr[2] == "education") {
		country_dir = url_arr[1];
	}
	switch (country_dir) {
		case "au":
			orgid = "15947";
			lang = "US";
		break;
		case "be":
			if ( url_arr.length >= 5) {
			   if ((url_arr[3] == "lu") || (url_arr[4] == "lu")) {
				   orgid = "53";
				   lang = "US";
				   country_dir = "lu";
			   } else {
				   orgid = "52";
				   lang = "US";
			   }
			} else {
				orgid = "52";
				lang = "US";
			}
		break;
		case "ca-en":
			orgid = "46777";
			lang = "US";
		break;
		case "ca-fr":
			orgid = "46777";
			lang = "FRC";
		break;
		case "uk":
			orgid = "28"
			lang = "US";
		break;
		case "ie":
			orgid = "27";
			lang = "US";
		break;
		case "sk":
			orgid = "11";
			lang = "SK";
		break;
		case "in":
			orgid = "1080544";
			lang = "US";
		break;
		case "id":
			orgid = "15942";
			lang = "US";
		break;
		case "hk":
			orgid = "15941";
			lang = "US";
		break;
		case "jp":
			orgid = "70";
			lang = "JA";
		break;
		case "nz":
			orgid = "15944";
			lang = "US";
		break;
		case "pl":
			orgid = "10";
			lang = "PL";
		break;
		case "ph":
			orgid = "15945";
			lang = "US";
		break;
		case "sg":
			orgid = "15946";
			lang = "US";
		break;
		case "us":
			orgid = "1001";
			lang = "US";
		break;
		case "za":
			orgid = "30";
			lang = "US";
		break;
		case "ar":
			orgid = "14515";
			lang = "ESA";
		break;
		case "at":
			orgid = "1295";
			lang = "D";
		break;
		case "cr":
			orgid = "1000257";
			lang = "ESA";
		break;
		case "mx":
			orgid = "189915";
			lang = "ESA";
		break;
		case "fr":
			if ( url_arr.length >= 5) {
			   if ((url_arr[3] == "ch") || (url_arr[4] == "ch")) {
				   orgid = "29";
				   lang = "F";
				   country_dir = "ch-fr"
			   } else {
				   orgid = "38";
				   lang = "F";
			   }
			} else {
				orgid = "38";
				lang = "F";
			}
		break;
		case "es":
			orgid = "51";
			lang = "E";
		break;
		case "pt":
			orgid = "35";
			lang = "PT";
		break; 
        case "ptb":
	        orgid = "378219";
            lang = "PTB";
        break;
		case "de":
			if ( url_arr.length >= 5) {
			   if ((url_arr[3] == "ch") || (url_arr[4] == "ch")) {
				   orgid = "29";
				   lang = "D";
				   country_dir = "ch-de"
			   } else {
				   orgid = "34";
				   lang = "D";
			   }
			} else {
				orgid = "34";
				lang = "D";
			}
		break;
		case "nl":
			orgid = "41";
			lang = "NL";
		break;
		case "pr":
			orgid = "1000254";
			lang = "ESA";
		break;
		case "ve":
			orgid = "1000255";
			lang = "ESA";
		break;
		case "tw":
			orgid = "17";
			lang = "ZHT";
		break;
		case "cn":
			orgid = "1243197";
			lang = "ZHS";
		break;
		case "th":
			orgid = "15949";
			lang = "US";
		break;
		case "me":
			orgid = "44";
			lang = "US";
		break;
		case "my":
			orgid = "15943";
			lang = "US";
		break;
		case "no":
			orgid = "37";
			lang = "N";
		break;
		case "it":
			orgid = "32";
			lang = "I";
		break;
		case "fi":
			orgid = "39";
			lang = "SF";
		break;
		case "dk":
			orgid = "36";
			lang = "DK";
		break;
		case "se":
			orgid = "40";
			lang = "S";
		break;
		case "br":
			orgid = "378219";
			lang = "PTB";
		break;	
		case "hu":
			orgid = "8";
			lang = "HU";
		break;

	}
//if(orgid != 70){
	document.write('<script language="Javascript" src="'+dynamic_base+'/admin/jscripts/rd_temp_config/'+orgid+lang+'_rd_temp_config.js"><\/script>');
//		}
}

function gethost(){

	prot1 = self.location.protocol;
	hostname1 = self.location.hostname;
	port1 = self.location.port;
	if (port1 == "") {port1 = "80"};
	//var base1 = prot1+"//"+hostname1+":"+port1;

	if (hostname1 == "fintst2.us.oracle.com") {
    	dynamic_base = prot1+"//"+hostname1+":"+port1;
    	cms_base = "http://www-stage.us.oracle.com";
		dad_pathname = "/webprod/plsql"
	} else if (hostname1 == "education.oracle.com") {
		dynamic_base = prot1+"//"+hostname1;
    	cms_base = prot1+"//"+"www.oracle.com";
		dad_pathname = "/web_prod-plq-dad/plsql"
	} else if ((hostname1 == "oracle.com") || (hostname1 == "www.oracle.com")) {
		dynamic_base = prot1+"//"+"education.oracle.com";
    	cms_base = prot1+"//"+hostname1;
		dad_pathname = "/web_prod-plq-dad/plsql"
	} else if (hostname1 == "www-stage.us.oracle.com") {
		dynamic_base = prot1+"//"+"fintst2.us.oracle.com:3350";
    	cms_base = prot1+"//"+hostname1;
		dad_pathname = "/webprod/plsql"
	} else {
		dynamic_base = "http://education.oracle.com";
  		cms_base = "http://www.oracle.com";
		dad_pathname = "/web_prod-plq-dad/plsql"
 	}
}

//Four scenarios
function getpageproperties () {
	gethost();
	if ((url_arr[0] == "www-portal.oracle.com") || (url_arr[0] == "www.oracle.com") || (url_arr[0] == "oracle.com") || (url_arr[0] == "www-stage.us.oracle.com")){
  		if ((url_arr[1] == "education") && (url_arr[2] == "lang")){
  			// /education/lang/  -- cms language pages
    		ccyes = false;
			calling_cat = "main_global";
			main_global();
		}  
		else if ((url_arr[1] == "education") && (url_arr[2] !== "lang")) {
  			// /education/  -- cms global education pages
    			ccyes = false;
			calling_cat = "cookie_global";
			cookie_global();
  		}
  		else if ((url_arr[2] == "education") || (url_arr[3] == "education")){
			// /xx/education/  -- cms country pages
    		ccyes = true;
			calling_cat = "cms_country";
			cms_country ();
			    		
		}
	}
}

function getheader() {
// Page Header code
//if ((orgid != 70) && (orgid != 1243197)) {
document.write('      <table width="100%" border="0" cellspacing="0" cellpadding="0">');
document.write('        <tr> ');
document.write('          <td><span class="topstoryhead">'+rd_temp_config.rd_outitle+'</span></td>');
document.write('          <td> ');
document.write('            <table border="0" cellspacing="0" cellpadding="0" align="right">');
document.write('              <tr> ');
document.write('                <td><a href="'+cms_base+rd_temp_config.rd_contactusurl+'" target="_top" class="navlink"><u>');
document.write(rd_temp_config.rd_contactus+'</u></a><span class="bodycopy"> : </span>');
document.write('<span class="bodycopy">'+rd_temp_config.rd_phonenumber+'</span> <span class="boldbodycopy">|</span> ');
//Enable and Disable training cart
if (rd_temp_config.rd_viewcart != "")
{
document.write('                  <a href="'+dynamic_base+dad_pathname+rd_temp_config.rd_viewcarturl+'" class="navlink"><u>');
document.write(rd_temp_config.rd_viewcart+'</u></a> <span class="boldbodycopy">|</span>');
}
//Beginning of Change country
if (ccyes == true){
	document.write('        <A href="#"');
	document.write('onClick="NewWindow(\''+dynamic_base+dad_pathname+'/choose_country?p_org_id='+orgid+'&p_lang='+lang+'\',\'pick_country\',\'400\',\'200\',true);return false;"');
	document.write(' class="navlink"> <u>'+rd_temp_config.rd_changecountry+'</u></a>');
	document.write('<span class="bodycopy"> : </span> <span class="legalese">'+rd_temp_config.rd_oucountryname);
	document.write('              </span>');
	document.write('          </td>');
} else {
	document.write('          </td>');
}
//End of change country
document.write('              </tr>');
document.write('            </table>');
document.write('          </td>');
document.write('        </tr>');
document.write('      </table>');
document.write('      <table width="100%" border="0" cellpadding="0" cellspacing="0">');
document.write('        <tr> ');
document.write('          <td><img src="http://oracleimg.com/admin/images/stretch.gif" width="1" height="3"></td>');
document.write('        </tr>');
document.write('      </table>');
document.write('      <table width="100%" border="0" cellspacing="0" cellpadding="1">');
document.write('        <tr> ');
document.write('          <td bgcolor="#A5A5A5"> ');
document.write('            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF">');
document.write('              <tr> ');
document.write('                <td bgcolor="#ebebeb"> ');
document.write('                  <table border="0" cellspacing="1" cellpadding="2">');
document.write('                    <tr> ');
document.write('                      <td><img src="http://oracleimg.com/admin/images/stretch.gif" width="1" height="1"></td>');
document.write('                      <td><span class="boldbodycopy">'+rd_temp_config.rd_findacourse+'</span></td>');
	document.write('                            <FORM name="SearchForm" method="post" action="'+dynamic_base+dad_pathname+rd_temp_config.rd_searchformurl+'">');
	document.write('<input type="hidden" name="p_org_id" value="'+orgid+'">');
	document.write('<input type="hidden" name="p_lang" value="'+lang+'">');
	if (calling_cat == "main_global") {
	document.write('<input type="hidden" name="p_calling_procedure" value="Language Page ('+url_arr[3].toUpperCase()+'): '+page_dir+'/'+page+'">');
	} else if (calling_cat == "cookie_global") {
	document.write('<input type="hidden" name="p_calling_procedure" value="Global Page: '+page_dir+'/'+page+'">');
	} else if (calling_cat == "cms_country") {
	document.write('<input type="hidden" name="p_calling_procedure" value="Country Page ('+country_dir.toUpperCase()+'): '+page_dir+'/'+page+'">');
	}
document.write('                        <td> <span class="legalese"> ');
	document.write('                              <TD> <input type="text" name="p_search_keyword" value="" size="15" maxlength="43">');
document.write('                          </span> </td>');
document.write('                      </form>');
document.write('');
document.write('                        <td> ');
//Begin of "Go" button html code -- duplicate of getbutton function
document.write("<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" height=\"14\">");
document.write("<tr>");
document.write("<td><img src=\"http://education.oracle.com/images/button_curve_top_left.gif\"></td>");
document.write("<td bgcolor=\"#336699\"><img src=\"http://education.oracle.com/images/dot_clear.gif\"></td>");
document.write("<td><img src=\"http://education.oracle.com/images/button_curve_top_right.gif\"></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td bgcolor=\"#336699\"><img src=\"http://education.oracle.com/images/dot_clear.gif\"></td>");
document.write('<td bgcolor="#336699">');
document.write('<a href="javascript:document.SearchForm.submit()" style="font-family : Arial, Helvetica, Sans-serif; font-size : 10pt; font-weight : 700; color : white; text-decoration : none; "> ');
document.write(rd_temp_config.rd_searchgobutton);
document.write('</a>');
document.write("</td>");
document.write("<td bgcolor=\"#336699\"><img src=\"http://education.oracle.com/images/dot_clear.gif\"></td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td><img src=\"http://education.oracle.com/images/button_curve_bottom_left.gif\"></td>");
document.write("<td bgcolor=\"#336699\"><img src=\"http://education.oracle.com/images/dot_clear.gif\"></td>");
document.write("<td><img src=\"http://education.oracle.com/images/button_curve_bottom_right.gif\"></td>");
document.write("</tr>");
document.write("</table>");
//End of "Go" button html code -- duplicate of getbutton function
document.write('                        </td>');
document.write('                      </form>');
document.write('                      <td>&nbsp;<span class="bodycopy">|</span> <a href="'+dynamic_base+dad_pathname+rd_temp_config.rd_advancedsearchurl+'" class="navlink" target="_top"> ');
document.write('   <u>'+rd_temp_config.rd_advancedsearch+'</u></a></td>');
document.write('                    </tr>');
document.write('                  </table>');
document.write('                </td>');
document.write('              </tr>');
document.write('            </table>');
document.write('          </td>');
document.write('        </tr>');
document.write('      </table>');
}
//}

function gettracking () {

	if (calling_cat == "main_global") {
		document.write ('<IMG SRC="'+dynamic_base+dad_pathname+'/ougbs_webreg_utils.track_user?p_module=Global%20Web%20Site&p_stype='+page_dir+'/'+page+'%20page&p_keyword=CMS%20Language%20Page:%20'+url_arr[3].toUpperCase()+'&p_org_id='+orgid+'&p_lang='+lang+'" HEIGHT="1" WIDTH="1">');
	} else if (calling_cat == "cookie_global") {
	document.write ('<IMG SRC="'+dynamic_base+dad_pathname+'/ougbs_webreg_utils.track_user?p_module=Global%20Web%20Site&p_stype='+page_dir+'/'+page+'%20page&p_keyword=CMS%20Global%20Page&p_org_id='+orgid+'&p_lang='+lang+'" HEIGHT="1" WIDTH="1">');
	} else if (calling_cat == "cms_country") {
	document.write ('<IMG SRC="'+dynamic_base+dad_pathname+'/ougbs_webreg_utils.track_user?p_module=Global%20Web%20Site:%20'+country_dir.toUpperCase()+'&p_stype='+page_dir+'/'+page+'%20page&p_keyword=CMS%20Country%20Page&p_org_id='+orgid+'&p_lang='+lang+'" HEIGHT="1" WIDTH="1">');
	}
}

//Change country functions
function NewWindow(mypage, myname, w, h, scroll) {
	document.domain = "oracle.com";
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',resizable'
	win = window.open(mypage, myname, winprops)
	if (parseInt(navigator.appVersion) >= 4) { 
		win.window.focus(); 
	}
}


function restart() { 

		if (page_dir == "selfstudy") {
		redir_page = page_dir
		} else {
		redir_page = page;
		}
	
		switch (redir_page) {
			case "bestsellers":
				redirstring = '/show_desc.redirect?redir_type=7&p_org_id='+org_id+'&lang='+lang;
			break;
			case "promotions":
				redirstring = '/show_desc.redirect?redir_type=9&p_org_id='+org_id+'&lang='+lang;
			break;
			case "introductoryclasses":
				redirstring = '/show_desc.redirect?redir_type=8&p_org_id='+org_id+'&lang='+lang;
			break;
			case "selfstudy":
				redirstring = '/show_desc.redirect?redir_type=12&p_org_id='+org_id+'&lang='+lang;
			break;
		}
		if (org_id == 'other') {
			parent.location = '/education/index.html?select_country.html'
		} else {
			parent.location = dynamic_base+dad_pathname+redirstring
  		}
		win.close();
}

