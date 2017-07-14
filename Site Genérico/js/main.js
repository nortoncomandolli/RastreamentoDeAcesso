
function getButton(){
	var email = document.getElementById("email").value;
	setAcesso(getIDCookie(), email,  getUrl());
}

function getIDCookie(){
	var cookieID = document.cookie;
	if ((cookieID.split("ID=").length <= 0) || (cookieID == "")) {
		deleteAllCookies();
		setID();
	}
    cookieID = document.cookie.split("ID=");
	return cookieID[0];
}

function setID(){
	document.cookie = "ID=" + getGuid();
}

function getToday() {
	var d = new Date();
	var a = d.getDate() +"/"+ d.getMonth() + "/" + d.getFullYear() + " " + d.getHours() + ":"+ d.getMinutes()+":" + d.getSeconds();
	return  a;
}

function getUrl() {
	var url = document.location.pathname;
	return  url;
}

function getGuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function setAcesso(ID, email, url) {
	var data = montaJson(ID, email, url, getToday());
		
	$.ajax({  
      type: "POST",  
      url: "localhost:3000/ideas",  
      data: data,  
      dataType: "json",  
      success: function(){
					console.log("Sucesso!");  
				},  
      error: function(){
					console.log("Erro!");  
			}   
	});
}

function montaJson(ID, email, url, data){
	var v =
	{
		"Acesso" : {
			"ID" : ID,
			"email" : email,
			"url" : url,
			"Data" : data
		}
	};
	return JSON.stringify(v);
} 

function setAcessoEmail(){
	var email = $("#email").val;
	setAcesso(getIDCookie(), email,  getUrl());
	
}


setAcesso(getIDCookie(), '',  getUrl());