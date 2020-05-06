//Buscando os elementos do html
var canvas = document.getElementById('canvas');
 
//representando uma  renderização bidimensional
var context = canvas.getContext('2d'); 

//Lindando com o pincel
var radius = 5; //Grossura do pincel
var start = 1; 
var end = Math.PI * 2; 
var dragging = false; //Para o pincel não começar já desenhando, e sim pressionado antes

//Deixando o canvas com a largura da tela que esta em exibição(100%)
canvas.width = window.innerWidth; //Largura da tela
canvas.height = window.innerHeight; //Altura da tela

context.lineWidth = radius * 2; 

var putPoint = function(e){
	if(dragging){ //Se estiver pressionando o mouse para desenhar
		context.lineTo(e.offsetX, e.offsetY); //Colocando linhas no desenho
		context.stroke(); //Usado para desenhar todos os caminhos feitos por lineTo e moveTo
		context.beginPath(); //Iniciando um caminho novo
		context.arc(e.offsetX, e.offsetY, radius, start, end); //Colocando todos os elementos para funcionar
		context.fill(); //Preenchendo a matriz context com valores estaticus
		context.beginPath(); //Iniciando um caminho novo
		context.moveTo(e.offsetX, e.offsetY); //Caminhando o lineTo (linha do desenho) até o final da borda
	}
}

//Quando o pincel estiver funcionando, poder desenhar avontade
var engage = function(e){
	dragging = true;
	putPoint(e);
}

//Quando parado de clicar, ele para de desenhar e cria um novo caminho
var disengage = function(){
	dragging = false;
	context.beginPath();
}

//Adicionando eventos do mouse para as variaveis
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);