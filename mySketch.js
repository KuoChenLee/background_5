var colors="d496a7-9d695a-78e0dc-8eedf7-2f2504-594e36-7e846b-a5ae9e-d0ddd7-d496a7--dbf9f4-e6fdff-d9d7dd-b07bac-5f7367-564787-dbcbd8-f2fdff-9ad4d6-101935-c1aba6-533b4d-f564a9-faa4bd-fae3c6-bbdbb4-fcf0cc-4392f1-ece8ef-e3ebff-e7f0ff-dc493a".split("-").map(a=>"#"+a)

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	background(100);
	changeLightColor()

}


function draw() {
	
	translate(width/2,height/2);
	rectMode(CENTER);
	
	background("#f2e9e4")
	
	fill(colors[25])
	//head
	rect(0,-140,120,100,20);
	//eyes
	fill(0)
	rect(0,-145,80,25,5)
	if(frameCount%100==0){
		fill(200)
		rect(-20,-145,20,5,5)
		rect(20,-145,20,5,5)
	}else{
		fill(200)
		rect(-20,-145,20,20,5)
		rect(20,-145,20,20,5)
	}
// 	fill(0)
// 	rect(-30,-140,30,20)
// 	rect(30,-140,30,20)
// 	push()
// 	drawingContext.shadowColor=lightColor;
// 	drawingContext.shadowBlur=30;
// 	fill(lightColor)
	
// 	rect(-30,-140,25,15)
// 	rect(30,-140,25,15)
// 	pop()
// 	rect(0,-150,120,2)
	// circle(-30,-200,25)
	// circle(30,-200,25)
	// fill(255)
	// circle(-30,-200,15)
	// circle(30,-200,15)
	//眉毛

	push()
			fill(colors[16])
		rotate(0.3+sin(frameCount/30)/10)
		rect(-30,-180,40,8);
	pop()
	push()
			fill(colors[17])
		rotate(-0.25+sin(frameCount/50)/10)
		rect(30,-180,40,8);
	pop()
	//mouth
	// fill(colors[3])
	// rect(0,-150,50,20)
	//ears
	fill(colors[18])
	rect(-65,-140,10,25,5)
	rect(65,-140,10,25,5)
	fill(255)
	rect(-75,-140,8,15,5)
	rect(75,-140,8,15,5)
	//neck
	fill(colors[5])
	rect(0,-85,15,10)
	
	fill(colors[6])
	
	rect(0,-75,15,10)
	
	
	
	//body
	fill(colors[7])
	rect(0,-5,120,130,20)
	fill(colors[8])
	rect(-30,-50,10,40,5)
	rect(30,-50,10,40,5)
	rect(0,5,120,110,0,0,20,20)
	rect(0,25,80,50,0,0,20,20)
		//leg
	fill(colors[16])
	rect(-25,70,10,20)
	rect(25,70,10,20)
	fill(colors[25])
	rect(-25,150,30,140,5)
	rect(25,150,30,140,5)
	fill(colors[18])
	rect(-25,225,20,10)
	rect(25,225,20,10)
	fill(colors[19])
	rect(-25,245,40,30,5)
	rect(25,245,40,30,5)
	//equipment
	fill("#bc6c25")
	rect(0,70,250,10)
	rect(125,70,10,60,10)
	rect(145,50,30,10)
	rect(145,90,30,10)
	rect(160,70,15,60,10)
	fill("#d9d9d9")
	rect(-155,70,60,50,5)
	//shoulder
	
	fill(colors[8])
	rect(-70,-50,20,10)
	rect(70,-50,20,10)
	fill(colors[9])
	circle(-90,-50,25)
	circle(90,-50,25)
	fill(colors[10])
	circle(-90,-50,10)
	circle(90,-50,10)
	fill(colors[11])
	rect(-90,-30,10,20)
	rect(90,-30,10,20)
	fill(colors[12])
	rect(-90,15,20,80,5)
	rect(90,15,20,80,5)
	fill(colors[13])
	rect(-90,60,10,10)
	rect(90,60,10,10)
	fill(colors[14])
	rect(-80,70,10,10)
	rect(-100,70,10,10)
	fill(colors[15])
	rect(-80,80,10,20)
	rect(-100,80,10,20)
	fill(colors[14])
	rect(80,70,10,10)
	rect(100,70,10,10)
	fill(colors[15])
	rect(80,80,10,20)
	rect(100,80,10,20)

	
	//mouth
	stroke(0)
	strokeWeight(5);
	fill(100)
	rect(0,-110,60,25,0,0,10,10)
	fill("red")
	arc(0,-100,30,20,PI,0,OPEN)
	fill(255)
	rect(-10,-115,10,10)
	push()
	noStroke()
	circle(5,-103,5)
	pop()
	// arc(0, -115, 60, 40, 0, PI, CHORD)
	// curve(-80,-150,-30,-120,-30,-90,-80,-60)
	// stroke(0)
	// strokeWeight(5);
	// curve(-80,-130,-20,-100,30,-100,80,-130)
	//equipment
	fill(150)
	rect(25,-205,30,30,15,15,0,0)
	rect(-25,-205,30,30,15,15,0,0)
	push()
	fill(255)
	noStroke()
	rect(25,-200,15,15,15,15,0,0)
	rect(-25,-200,15,15,15,15,0,0)
	pop()
	// arc(20,-190,30,40, PI,0, CHORD)
	//heart
	
	fill(lightColor)
	circle(0,-20,20)
	
	
	
	//text
	fill(lightColor)
	textSize(20)
	let text1='Different Colors';
	text(text1,150,-150)
	push()
	strokeWeight(2)
	fill(0)
	line(145,-155,50,-150)
	line(145,-155,90,-5)
	line(145,-155,30,90)
	line(145,-155,50,-60)
	line(145,-155,30,250)
	pop()
	
	fill(lightColor)
	textSize(20)
	let text2='Different Emoticon';
	text(text2,-200,-250)
	push()
	strokeWeight(2)
	fill(0)
	line(-100,-230,-30,-120)
	pop()
	
	fill(lightColor)
	textSize(20)
	let text3='Different Clothes';
	text(text3,150,0)
	push()
	strokeWeight(2)
	fill(0)
	line(140,-5,50,-5)
	pop()
	
	fill(lightColor)
	textSize(20)
	let text4='Different Equipments';
	text(text4,1-300,-50)
	push()
	strokeWeight(2)
	fill(0)
	line(-200,-40,-150,30)
	line(-200,-90,-50,-190)
	pop()
	
	fill(lightColor)
	textSize(20)
	let text5='Different Effect';
	text(text5,120,-220)
	
	push()
	strokeWeight(2)
	fill(0)
	line(110,-225,50,-180)
	line(110,-225,50,-160)
	line(110,-225,15,-30)
	pop()
	
	
	
	
	if(frameCount%20==0){
		changeLightColor()
	}
}


function mousePressed(){
	changeLightColor()
}
function changeLightColor(){
	lightColor=color(random([
		"#7FFFD4",
		"#7FFF00",
		"#008B8B",
		"#9932CC",
		"#FFB6C1",
		"#000080",
		"#8B4513"
	]))
}
