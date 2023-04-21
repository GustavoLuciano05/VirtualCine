 // função pra ler querystring
        
 function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;   
    }   
    else {   
        return undefined;   
    }   
}
var variavel = queryString("usuario");

function VerificaBotoes() {
  if(variavel == undefined){
      document.getElementById('entrar').style.display = 'inline-block';
      document.getElementById('cadastro').style.display = 'inline-block';
      document.getElementById('assinar').style.display = 'none';
  }
  else{
      document.getElementById('entrar').style.display = 'none';
      document.getElementById('cadastro').style.display = 'none';
      document.getElementById('assinar').style.display = 'inline-block';
  }
}

function telafilme(i){

    if (variavel == undefined) {
      alert('Precisa logar-se antes!');
    }  
    else {
      window.location.href= '../telasFilmes/telaFilmes'+i+'.html';
    }
}

j = 0

function mostrarMenu(id,val){

    j++;
    if (j == 1)  {
        $('#'+id).animate({top: val },1000);
        $('#'+id).siblings().animate({top: '0%'},500);
    }
    else { 
        $('#'+id).animate({top: '0%'},500);
        j = 0;
    } 
}
function abrirTela(pasta,arquivo){
    let str = '../'+pasta+'/'+arquivo;
    location.href = str;
}