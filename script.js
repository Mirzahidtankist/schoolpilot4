function getXhr(){
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else if(window.ActiveXObject){
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

function makeGETRequest(url) {
      return new Promise((resolve, reject) => {
        const xhr = getXhr();
        xhr.onreadystatechange = function () {
          if (xhr.readyState !== 4) return;

          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject("Request error")
          }
        };

        xhr.open("GET", url);
        xhr.send();
      })
    }

function makePOSTRequest(url, data) {
      return new Promise((resolve, reject) => {
        const xhr = getXhr();
        xhr.onreadystatechange = function () {
          if (xhr.readyState !== 4) return;

          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject("Request error")
          }
        };

        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

        xhr.send(data);
    })
}



function dejinscrit(){
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let data = [email , password];
	sessionStorage.setItem("data" , JSON.stringify(data));
	let info = "student";
	sessionStorage.setItem("type" , JSON.stringify(info));
	data = JSON.stringify(data);
	let a = "true";
	if (email === "" || password === "") {
		a = "false";
	}
	if (a === "true") {
		makePOSTRequest('/dejinscrit' , data).then((goods) =>{
			var goods = goods;
			if (goods[0] === "true") {
				goods = JSON.stringify(goods);
				inner(goods);
			}
		})
	}
}

function dejinscritprof(){
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let data = [email , password];
	sessionStorage.setItem("data" , JSON.stringify(data));
	let info = "prof";
	sessionStorage.setItem("type" , JSON.stringify(info));
	data = JSON.stringify(data);
	let a = "true";
	if (email === "" || password === "") {
		a = "false";
	}
	if (a === "true") {
	makePOSTRequest('/dejinscritprof' , data).then((goods) =>{
		var goods = goods;
		console.log(goods[0]);
		if (goods[0] === "true") {
			goods = JSON.stringify(goods);
			innerprof(goods);
		}
	}).catch((err) => {
		console.log("error");
	})
	}
}

function dejinscritbvs(){
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let data = [email , password];
	data = JSON.stringify(data);
	let a = "true";
	if (email === "" || password === "") {
		a = "false";
	}
	if (a === "true") {
	makePOSTRequest('/dejinscritbvs' , data).then((goods) => {
		var goods = goods;
		if (goods[0] === "true") {
			goods = JSON.stringify(goods);
			toinnerbvs(goods);
		}
	})
}
}

function inscript(){
	let email = document.getElementById('email').value;
	let password1 = document.getElementById('password').value;
	let password2 = document.getElementById('password2').value;
	let school = document.getElementById('school').value;
	let name = document.getElementById('name3').value;
	if (password2 !== password1) {
		console.log("false1");
	}
		let info = {"id" : 0 , "email" : email , "password" : password1 , "school" : school , "name" : name};
		info = JSON.stringify(info);
		makePOSTRequest('/create' , info).then((goods) => {
			console.log(goods);
		}).catch((err) => {
			console.log("error");
		})
	
}


function envmessages(){
	let nom = sessionStorage.getItem("name");
	let dest = document.getElementById('dest').value;
	let text = document.getElementById('text').value;
	let name = document.getElementById('name').value;
	let data = {"name" : nom , "nommessage" : name , "destinateur" : dest , "text" : text , "aim" : "toadd" , "index" : 0 , "type" : "message"};
	data = JSON.stringify(data);
	makePOSTRequest('/messages' , data).then((news) => {
		let info = JSON.parse(sessionStorage.getItem("info"));
		sessionStorage.setItem("env" , JSON.stringify("data"));
	}).catch((err) => {
		console.log("error2");
	})
}

function inner(data){
	data = JSON.parse(data);
	sessionStorage.setItem("datalenght" , data.length);
	let name = data[1];
	sessionStorage.setItem("name" , name);
	const notes = {};
	const courses = {};
	const messages = {};
	const absences = {};
	const retards = {};
	const sanctions = {};
	const homeworks = {};
	const emploi = {};
	const classes = {};
	const noteslist = {};
	const env = {};
	let a = 0;
	let b = 0;
	let c = 0;
	let d = 0;
	let e = 0;
	let f = 0;
	let g = 0;
	let h = 0;
	let j = 0;
	let k = 0;
	let l = 0;
	for (var i = 0; i < data.length; i++) {
	  	if (data[i].type === "note") {
	  		notes[a] = data[i];
	  		a++;
	  	}else if (data[i].type === "course") {
	  		courses[b] = data[i];
	  		b++;
	  	}else if (data[i].type === "message") {
	  		messages[c] = data[i];
	  		c++;
	  	}else if (data[i].type === "absence") {
	  		absences[e] = data[i];
	  		e++;
	  	}else if (data[i].type === "retard") {
	  		retards[f] = data[i];
	  		f++;
	  	}else if (data[i].type === "sanction") {
	  		sanctions[g] = data[i];
	  		g++;
	  	}else if (data[i].type === "homework") {
	  		homeworks[h] = data[i];
	  		h++; 
	  	}else if(data[i].type === "emploi"){
	  		emploi[j] = data[i];
	  	}else if(data[i].type === "noteslist") {
	  		noteslist[k] = data[i];
	  		k++;
	  	}else if (data[i].type === "env") {
	  		env[l] = data[i];
	  		l++;
	  	}
	}  
	document.location.href = "tableaudebord.html";
	sessionStorage.setItem("notes", JSON.stringify(notes));
	sessionStorage.setItem("noteslenght", JSON.stringify(a));
	sessionStorage.setItem("courses", JSON.stringify(courses));
	sessionStorage.setItem("courseslenght", JSON.stringify(b));
	sessionStorage.setItem("messages", JSON.stringify(messages));
	sessionStorage.setItem("messageslenght", JSON.stringify(c));
	sessionStorage.setItem("absenceslenght", JSON.stringify(e));
	sessionStorage.setItem("absences", JSON.stringify(absences));
	sessionStorage.setItem("retards", JSON.stringify(retards));
	sessionStorage.setItem("retardslenght", JSON.stringify(f));
	sessionStorage.setItem("sanctions", JSON.stringify(sanctions));
	sessionStorage.setItem("sanctionslenght", JSON.stringify(g));
	sessionStorage.setItem("homeworks", JSON.stringify(homeworks));
	sessionStorage.setItem("homeworkslenght", JSON.stringify(h));
	sessionStorage.setItem("emploi" , JSON.stringify(emploi));
	sessionStorage.setItem("emploilenght" , JSON.stringify(j));
	sessionStorage.setItem("classes" , JSON.stringify(classes));
	sessionStorage.setItem("env" , JSON.stringify(env));
	sessionStorage.setItem("envlenght" , JSON.stringify(l));
}

function innerprof(data){
	data = JSON.parse(data);
	let name = data[1];
	sessionStorage.setItem("name" , name);
	let mat = data[2];
	sessionStorage.setItem("mat" , mat);
	console.log(mat);
	const notes = {};
	const courses = {};
	const messages = {};
	const absences = {};
	const retards = {};
	const sanctions = {};
	const homeworks = {};
	const emploi = {};
	const classes = {};
	const noteslist = {};
	const env = {};
	let a = 0;
	let b = 0;
	let c = 0;
	let d = 0;
	let e = 0;
	let f = 0;
	let g = 0;
	let h = 0;
	let j = 0;
	let z = 0;
	let k = 0;
	let l = 0;
	for (var i = 0; i < data.length; i++) {
	  	if (data[i].type === "note") {
	  		notes[a] = data[i];
	  		a++;
	  	}else if (data[i].type === "course") {
	  		courses[b] = data[i];
	  		b++;
	  	}else if (data[i].type === "message") {
	  		messages[c] = data[i];
	  		c++;
	  	}else if (data[i].type === "absence") {
	  		absences[e] = data[i];
	  		e++;
	  	}else if (data[i].type === "retard") {
	  		retards[f] = data[i];
	  		f++;
	  	}else if (data[i].type === "sanction") {
	  		sanctions[g] = data[i];
	  		g++;
	  	}else if (data[i].type === "homework") {
	  		homeworks[h] = data[i];
	  		h++; 
	  	}else if(data[i].type === "emploi"){
	  		emploi[z] = data[i];
	  		z++;
	  	}else if(data[i].type === "classe"){
	  		classes[j] = data[i];
	  		j++;
	  	}else if (data[i].type === "noteslist") {
	  		noteslist[k] = data[i];
	  		k++;
	  	}else if (data[i].type === "env") {
	  		env[l] = data[i];
	  		l++;
	  	}
	}
	sessionStorage.setItem("notes", JSON.stringify(notes));
	sessionStorage.setItem("noteslenght", JSON.stringify(a));
	sessionStorage.setItem("courses", JSON.stringify(courses));
	sessionStorage.setItem("courseslenght", JSON.stringify(b));
	sessionStorage.setItem("messages", JSON.stringify(messages));
	sessionStorage.setItem("messageslenght", JSON.stringify(c));
	sessionStorage.setItem("absenceslenght", JSON.stringify(e));
	sessionStorage.setItem("absences", JSON.stringify(absences));
	sessionStorage.setItem("retards", JSON.stringify(retards));
	sessionStorage.setItem("retardslenght", JSON.stringify(f));
	sessionStorage.setItem("sanctions", JSON.stringify(sanctions));
	sessionStorage.setItem("sanctionslenght", JSON.stringify(g));
	sessionStorage.setItem("homeworks", JSON.stringify(homeworks));
	sessionStorage.setItem("homeworkslenght", JSON.stringify(h));
	sessionStorage.setItem("emploi" , JSON.stringify(emploi));
	sessionStorage.setItem("classeslenght" , JSON.stringify(j));
	sessionStorage.setItem("classes" , JSON.stringify(classes));
	sessionStorage.setItem("noteslist" , JSON.stringify(noteslist));
	sessionStorage.setItem("noteslistlength" , JSON.stringify(k));
	sessionStorage.setItem("env" , JSON.stringify(env));
	sessionStorage.setItem("envlenght" , JSON.stringify(l));
	let per = [];
	sessionStorage.setItem("alladds" , JSON.stringify(per));
	document.location.href = "tableaudebordprof.html";
}

function toinnerbvs(data){
	data = JSON.parse(data);
	sessionStorage.setItem("name" , JSON.stringify(data[1]));
	let length = data[2];
	let classes = {};
	let profs = {};
	let students = {};
	let emplois = {};
	let absences = {};
	let retards = {};
	let sanctions = {};
	let messages = {};
	let a = 0;
	let b = 0;
	let c = 0;
	let d = 0;
	let e = 0;
	let f = 0;
	let g = 0;
	let h = 0;
	console.log(length);
	for (var i = 0; i < length - 1; i++) {
		if (data[i].type === "classe"){
			classes[a] = data[i];
			a++;
		}else if (data[i].type === "prof") {
			profs[b] = data[i];
			b++;
		}else if (data[i].type === "student") {
			students[c] = data[i];
			c++;
		}else if (data[i].type === "emploi") {
			emplois[d] = data[i];
			d++;
		}else if (data[i].type === "absence") {
			absences[e] = data[i];
			e++;
		}else if (data[i].type === "retards") {
			sanctions[g] = data[i];
			g++;
		}else if (data[i].type === "message") {
			messages[h] = data[i];
			h++;
		}
	}
	sessionStorage.setItem("classes" , JSON.stringify(classes));
	sessionStorage.setItem("classeslenght" , JSON.stringify(a));
	sessionStorage.setItem("profs" , JSON.stringify(profs));
	sessionStorage.setItem("profslenght" , JSON.stringify(b));
	sessionStorage.setItem("students" , JSON.stringify(students));
	sessionStorage.setItem("studentslenght" , JSON.stringify(c));
	sessionStorage.setItem("emploi" , JSON.stringify(emplois));
	sessionStorage.setItem("emploislenght" , JSON.stringify(d));
	sessionStorage.setItem("absences" , JSON.stringify(absences));
	sessionStorage.setItem("absenceslenght" , JSON.stringify(e));
	sessionStorage.setItem("retards" , JSON.stringify(retards));
	sessionStorage.setItem("retardslenght" , JSON.stringify(g));
	sessionStorage.setItem("messages" , JSON.stringify(messages));
	sessionStorage.setItem("messageslenght" , JSON.stringify(h));
	document.location.href = "tableaudecontrole.html"
}

function toinnerhomeworkintb(date){
	var loc = window.location.pathname;
	let homeworks = sessionStorage.getItem("homeworks");
	homeworks = JSON.parse(homeworks);
	let length = sessionStorage.getItem("homeworkslenght");
	let a = 0 ;
	let forinner = {};
	let tofilter = {};
	let tosee = {};
	let date2 = date;
	if (date2[0] === 1) {
		date2[1] = date2[1] - 1;
		date2[0] = 31;
	}else if(date2[0] !== 1){
		date2[0] - 1;
	}

	for (var i = 0; i < 365; i++) {
		for (var n = 0; n < length; n++) {
		let day = '"'+date2[0]+'"';
		let day2 = '"'+homeworks[n].for[0]+'"';
		let month = '"'+date2[1]+'"';
		let month2 = '"'+homeworks[n].for[1]+'"';
		let year = '"'+date2[2]+'"';
		let year2 = '"'+homeworks[n].for[2]+'"';
		if (day === day2 && month === month2 && year === year2) {
			console.log("true");
				forinner[a] = `<li><button class="home" onclick="showhomework2('${homeworks[n].nomdudevoir}')" ><p>${homeworks[n].nomdudevoir}</p><p>${homeworks[n].date}</p></button></li>`;
				a++;
			
		}
	}
		if (date2[0] < 31) {
			date2[0]++;
		}else if (date2[0] === 31 && date2[1] < 12) {
			date2[0] = 1;
			date2[1]++;
		}else if (date2[0] === 31 && date2[1] === 12) {
			date2[1] = 1;
			date2[0] = 1;
			date2[2] = date2[2] + 1;
		}
	}
	let b = 0;
	console.log(forinner);

	for (var c = 0; c < a; c++) {
		if (loc === "/tableaudebord.html") {
			let div = document.createElement('div');
			div.id = "child" + c;
			document.getElementById('homeworklist').appendChild(div);
		}else if (loc === "/devoireleves.html") {
			let div = document.createElement('div');
			div.id = "child" + c;
			document.getElementById('homeworklist').appendChild(div);
		}
	}
	let nm = 0;
	if (a > 0) {
		if (loc === "/tableaudebord.html") {
			let id2 = "child" + b;
			console.log(id2);
			document.getElementById(id2).innerHTML = forinner[b];
			b++;
		}else if(loc === "/devoireleves.html"){
			let id2 = "child" + b;
			console.log(id2);
			document.getElementById(id2).innerHTML = forinner[b];
			b++;
		} 
	  }
	}

function showhomework2(data){
	sessionStorage.setItem("homeworktosee" , JSON.stringify(data));
	document.location.href = "/toseehomework.html";
}

function innerhomework(){
	let tosee = JSON.parse(sessionStorage.getItem("homeworktosee"));
	let homework = JSON.parse(sessionStorage.getItem("homeworks"));
	let number = sessionStorage.getItem("homeworkslenght");
	let forinner;
	for (var i = 0; i < number; i++) {
		if (homework[i].nomdudevoir === tosee) {
			forinner = homework[i];
		}
	}
	console.log(forinner);
	document.getElementById('title5').innerHTML = forinner.nomdudevoir;
	document.getElementById('prof3').innerHTML = forinner.prof;
	document.getElementById('date5').innerHTML = forinner.date;
	document.getElementById('text5').innerHTML = forinner.text;
}

function toinnercourses(date){
	var loc = window.location.pathname;
	let homeworks = sessionStorage.getItem("courses");
	homeworks = JSON.parse(homeworks);
	let length = sessionStorage.getItem("courseslenght");
	let a = 0 ;
	let forinner = {}
	for (var i = 0; i < length; i++) {
		if (true) {
			forinner[a] = `<li><a><button onclick="toseecourse('${homeworks[i].nomcour}')" ><p class="formoveleft2">${homeworks[i].text}${homeworks[i].nomprof}${homeworks[i].nomcour}</p></button></a></li>`;
			a++;
		}else{
			console.log("false");
		}
	}
	let b = 0;
	for (var e = 0; e < a; e++) {
		let div = document.createElement('div');
		div.id = "child" + e;
		console.log(div);
		document.getElementById('listeofalllistenotes').appendChild(div);
	}
	while(b < a){
		if (loc = "/courseleve.html") {
			let id2 = "child" + b;
			document.getElementById(id2).innerHTML = forinner[b];
			b++;
		}
	}
}

function changedate(){
	let day = document.getElementById("day");
	let month = document.getElementById("month");
	let year = document.getElementById("year");
	console.log(day.value , month.value , year.value);
	sessionStorage.setItem("day" , day.value);
	sessionStorage.setItem("month" , month.value);
	sessionStorage.setItem("year" , year.value);
	let date = [day.value , month.value , year.value];
	toinnerhomeworkintb(date);
}

function toinnerabsences(date){
	var loc = window.location.pathname;
	let absences = sessionStorage.getItem("absences");
	let absenceslenght = +sessionStorage.getItem("absenceslenght");
	let retards = sessionStorage.getItem("retards");
	let retardslenght = +sessionStorage.getItem("retardslenght");
	let sanctions = sessionStorage.getItem("sanctions");
	let sanctionslenght = +sessionStorage.getItem("sanctionslenght");
	let totalnumber = absenceslenght + retardslenght + sanctionslenght;
	absences = JSON.parse(absences);
	retards = JSON.parse(retards);
	sanctions = JSON.parse(sanctions);
	for (var d = 0; d < totalnumber; d++) {
		let div = document.createElement('div');
		div.id = "child" + d;
		console.log(div);
		document.getElementById('menuabs').appendChild(div);
	}
	let e = 0;
	for (var i = 0; i < absenceslenght; i++) {
		let id2 = "child" + e;
		document.getElementById(id2).innerHTML = 
		`<li class="forline">
			<div class="absences">
				<div class="abs">
					<p class="type">Absences</p>
					<p class="datadate">${absences[i].date} </p>
					<p class="motif">${absences[i].reason}</p>
						<ul class="menuopen">
							<form>
								<li><input type="text" class="just" placeholder="motif" id="first"></li>
								<li><input type="submit" class="just" value="envoyer" id="second"></li>
							</form>
					</ul>
				</div>
			</div>
		</li>`
		e++;
	}
	for (var a = 0; a < sanctionslenght; a++) {
		let id2 = "child" + e;
		document.getElementById(id2).innerHTML = 
		`<li class="forline">
				<div class="sanctions">
					<div class="abs">
						<p class="type">Sanction</p>
						<p class="datadate">${sanctions[a].date}</p>
						<p class="motif">${sanctions[a].reason}</p>
						<ul class="menuopen">
							<form>
								<li><input type="text" class="just" placeholder="motif" id="first"></li>
								<li><input type="submit" class="just" value="envoyer" id="second"></li>
							</form>
						</ul>
				</div>
			</div>
		</li>`
		e++;
	}
	for (var b = 0; b < retardslenght; b++) {
		let id2 = "child" + e;
		document.getElementById(id2).innerHTML = 
		`<li class="forline">
			<div class="retards">
				<div class="abs">
					<p class="type">Retards</p>
					<p class="datadate">${retards[b].date}</p>
					<p class="motif">${retards[b].reason}</p>
					<ul class="menuopen">
						<form>
							<li><input type="text" class="just" placeholder="motif" id="first"></li>
							<li><input type="submit" class="just" value="envoyer" id="second"></li>
						</form>
					</ul>
				</div>
			</div>
		</li>`
		e++;
	}
}

function toinnernotes(data){
	let notes = sessionStorage.getItem("notes");
	let noteslenght = sessionStorage.getItem("noteslenght");
	let name = sessionStorage.getItem("name");
	notes = JSON.parse(notes);
	noteslenght = JSON.parse(noteslenght);
	console.log(notes);
	let forinner = {};
	let mg = 0;
	let z = 0;
	let div2 = document.createElement('tr');
	div2.id = "child";
	document.getElementById('tableau').appendChild(div2);
	for (var i = 0; i < notes[0].notes.length; i++) {
		let div = document.createElement('tr');
		div.id = "child" + i;
		document.getElementById('tableau').appendChild(div);
		let id = "child" + i;
		let forinner = [];
		let number = 0;
		let number2 = 0;
		for (var a = 0; a < notes[0].notes[i].note.length; a++) {
			forinner[a] = notes[0].notes[i].note[a].note;
			number = +number + +notes[0].notes[i].note[a].note;
			number2 = +number2 + +notes[0].notes[i].note[a].coef;
		}
		console.log(number);
		document.getElementById(id).innerHTML =  `<tr>
			<td class="firstclass"><h2>${notes[0].notes[i].mat}</h2></td>
			<td class="secondclass"><h2>${(number / number2).toFixed(1)}</h2></td>
			<td class="thirdclass">${forinner}</td>
		</tr>`;
		mg = +number/number2 + +mg;
		z++;
		console.log(z);
		console.log(mg / z);
	}
	let moyenne = mg / z;
	document.getElementById('child').innerHTML = `<tr>
			<td class="firstclass"><h2>Moyenne générale</h2></td>
			<td class="secondclass"><h2>${moyenne.toFixed(1)}</h2></td>
			<td class="thirdclass">Notes</td>
		</tr>`;
}

function getdate(){
	let day = new Date();
	let date = day.getDate();
	let month = day.getMonth() + 1;
	let year = day.getFullYear();
	if (document.location.href === "/tableaudebord.html") {
		document.getElementById("day").value = date;
		document.getElementById("month").value = month;
		document.getElementById("year").value = year;
	}
	let fulldate = [date , month , year];
	toinnerhomeworkintb(fulldate);
	return fulldate;
}

function toinneremploidutempseleve(){
	let emploi = sessionStorage.getItem("emploi");
	emploi = JSON.parse(emploi);
	for (var i = 0; i < 7; i++) {
		let div = document.createElement('tr');
		div.id = "child" + i;
		document.getElementById('emploi2').appendChild(div);
		let id = "child" + i;
		document.getElementById(id).innerHTML = 
		`<tr>
					<td><h2>heures</h2></td>
					<td><p>${emploi[0].emploi[i][0]}</p></td>
					<td><p>${emploi[0].emploi[i][1]}</p></td>
					<td><p>${emploi[0].emploi[i][2]}</p></td>
					<td><p>${emploi[0].emploi[i][3]}</p></td>
					<td><p>${emploi[0].emploi[i][4]}</p></td>
		</tr>`
	}
}

function toseecourse(data){
	sessionStorage.setItem("coursetosee" , JSON.stringify(data));
	document.location.href = "/toseecourse.html";
}

function toinnermessages(){
	let messages = sessionStorage.getItem("messages");
	messages = JSON.parse(messages);
	let number = sessionStorage.getItem("messageslenght");
	let forinner = {};
	let id = "forinner";
	for(var a = 0; a < number; a++){
		let div = document.createElement('div');
		div.id = "child" + a;
		document.getElementById('messagesrecus').appendChild(div);
	}
	for (var i = 0; i < number; i++) {
		let id2 = "child" + i;
		console.log(id2);
		document.getElementById(id2).innerHTML = 
		`<button class="style" onclick="showmoremess('${messages[i].nommessage}')" ><li class="style"><p>${messages[i].nom} , ${messages[i].nommessage} , ${messages[i].text}</p></li></button>`
	}
}

function toinnerdevoirsprof(){
	let devoirs = JSON.parse(sessionStorage.getItem("homeworks"));
	let number = sessionStorage.getItem("homeworkslenght");
	for (var i = 0; i < number; i++) {
		let div = document.createElement('div');
		div.id = "child" + i;
		document.getElementById('listeofalllistenotes').appendChild(div);
	}
	for (var a = 0; a < number; a++) {
		let id2 = "child" + a;
		let data = devoirs[a];
		console.log(devoirs[a]);
		document.getElementById(id2).innerHTML =
		`<li><a><button onclick="showhomework('${devoirs[a].nomdudevoir}')"><p class="formoveleft2"> ${devoirs[a].nomdudevoir}&nbsp;&nbsp;&nbsp;&nbsp;${devoirs[a].date}&nbsp;&nbsp;&nbsp;&nbsp;${devoirs[a].file}&nbsp;&nbsp;&nbsp;&nbsp;${devoirs[a].class}&nbsp;&nbsp;&nbsp;&nbsp;</p></button></a></li>`
	}
}

function toinnernoteslist(){
	let noteslist = JSON.parse(sessionStorage.getItem("notes"));
	let number = sessionStorage.getItem("noteslenght");
	for (var i = 0; i < number; i++) {
		let div = document.createElement('div');
		div.id = "child" + i;
		let id2 = "child" + i;
		document.getElementById('listeofalllistenotes').appendChild(div);
		document.getElementById(id2).innerHTML = 
		`<li><a href="noteslist.html"><button><p class="formoveleft2">${noteslist[i].nomdudevoir} &nbsp;&nbsp;&nbsp;&nbsp;${noteslist[i].date}&nbsp;&nbsp;&nbsp;&nbsp;${noteslist[i].coef}&nbsp;&nbsp;&nbsp;&nbsp;${noteslist[i].bar}&nbsp;&nbsp;&nbsp;&nbsp;</p></button></a></li>`
	}
}

function toinnercoures(){
	let courses = sessionStorage.getItem("courses");
	let number = sessionStorage.getItem("courseslenght");
	courses = JSON.parse(courses);
	console.log(courses[i]);
	for (var i = 0; i < number; i++) {
		let div = document.createElement('div');
		div.id = "child" + i;
		let id2 = "child" + i;
		document.getElementById('listeofalllistenotes').appendChild(div);
		let data = courses[i];
		console.log(courses[i]);
		document.getElementById(id2).innerHTML = 
		`<li><a href="#"><button onclick="showcourse('${data.nomcour}')" ><p class="formoveleft2">${courses[i].nomcour} &nbsp;&nbsp;&nbsp;&nbsp;${courses[i].for}&nbsp;&nbsp;&nbsp;&nbsp;file&nbsp;&nbsp;&nbsp;&nbsp;${courses[i].class}&nbsp;&nbsp;&nbsp;&nbsp;</p></button></a></li>`
	}
}

function toinnerprofnoteslist(){
	let notelist = sessionStorage.getItem("noteslist");
	let number = sessionStorage.getItem("noteslistlength");
	notelist = JSON.parse(notelist);
	console.log(notelist);
	for (var i = 0; i < number; i++) {
		let div = document.createElement('div');
		div.id = "child" + i;
		let id2 = "child" + i;
		let data = notelist[i];
		document.getElementById('listeofalllistenotes').appendChild(div);
		document.getElementById(id2).innerHTML = 
		`<li><a><button onclick="shownotelist('${data.coef}')" ><p class="formoveleft2">${notelist[i].coef} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file&nbsp;&nbsp;&nbsp;&nbsp;${notelist[i].classe}&nbsp;&nbsp;&nbsp;&nbsp;</p></button></a></li>`
	}
}

function toinnerprofs(){
	let profs = sessionStorage.getItem("profs");
	let number = sessionStorage.getItem("profslenght");
	profs = JSON.parse(profs);
	console.log(profs.length)
	for (var i = 0; i < profs.length; i++) {
		let div = document.createElement('div');
		div.id = "child" + i;
		let id2 = "child" + i;
		document.getElementById('list5').appendChild(div);
		document.getElementById(id2).innerHTML = 
		`<li><button class="prof" onclick="showmore()"><p>${profs[i].prof}</p><div class="hide"></div></button></li>`;
	}
}

function toinnerstudents(){
	let students = JSON.parse(sessionStorage.getItem('students'));
	let studentslenght = JSON.parse(sessionStorage.getItem('studentslenght'));
	for (var i = 0; i < studentslenght; i++) {
		let div = document.createElement('div');
		div.id = "child" + i;
		let id2 = "child" + i;
		document.getElementById('list5').appendChild(div);
		document.getElementById(id2).innerHTML =
		`<li><button onclick="showmorestudent('${students[i].name}')" id="student"><p>${students[i].name}</p></button></li>`;
	}
}

function innerhomeworkinaj(){
	let data = sessionStorage.getItem("devoirtochange");
	console.log(data);
	let homeworks = sessionStorage.getItem("homeworks");
	homeworks = JSON.parse(homeworks);
	data = JSON.parse(data);
	let number = sessionStorage.getItem("homeworkslenght");
	let main;
	console.log(homeworks);
	for (var i = 0; i < number; i++) {
		if (homeworks[i].nomdudevoir === data) {
			main = homeworks[i];
		}
	}
	console.log(main);
	document.getElementById('date').value = main.date;
	document.getElementById('hour').value = main.hour ;
	document.getElementById('theme').value = main.nomdudevoir;
	document.getElementById('classe').value = main.classe;
	document.getElementById('day').value = main.for[0];
	document.getElementById('month').value = main.for[1];
	document.getElementById('year').value = main.for[2];
	document.getElementById('text').value = main.text;
}

function innercoursinaj(){
	let data = sessionStorage.getItem("coursestochange");
	let courses = sessionStorage.getItem("courses");
	courses = JSON.parse(courses);
	data = JSON.parse(data);
	let number = sessionStorage.getItem("courseslenght");
	let main;
	for (var i = 0; i < number; i++) {
		if (courses[i].nomcour === data) {
			main = courses[i];
			console.log(main);
		}
	}
	document.getElementById('date').value = main.date;
	document.getElementById('hour').value = main.hour;
	document.getElementById('theme').value = main.nomcour;
	document.getElementById('classe').value = main.class;
	document.getElementById('text').value = main.text;
}

function savecourses(){
	let courses = sessionStorage.getItem("courses");
	let number = sessionStorage.getItem("courseslenght");
	let theme = document.getElementById('theme').value;
	let classe = document.getElementById('classe').value;
	let date = document.getElementById('date').value;
	let hour = document.getElementById('hour').value;
	let text = document.getElementById('text').value;
	let day = document.getElementById('day').value;
	let month = document.getElementById('month').value;
	let year = document.getElementById("year").value;
	let data = {"nomcour" : theme , "class" : classe , "date" : date , "hour" : hour , "text" : text , "type" : "course" , "for" : [day , month , year]};
	data = JSON.stringify(data);
	makePOSTRequest("/ajcours" , data).then((goods) => {
		console.log(goods);
		sessionStorage.setItem("courses" , JSON.stringify(goods));
		sessionStorage.setItem("courseslenght" , JSON.stringify(goods.length));
	}).catch((err) => {
		console.log("error");
	})
}

function savecourses2(){
	let theme = sessionStorage.getItem("coursestochange");
	theme = JSON.parse(theme);
	let classe = document.getElementById('classe').value;
	let date = document.getElementById('date').value;
	let hour = document.getElementById('hour').value;
	let text = document.getElementById('text').value;
	let cours = JSON.parse(sessionStorage.getItem("courses"));
	let number = sessionStorage.getItem("courseslenght");
	let prof = sessionStorage.getItem("name");
	let day = document.getElementById('day').value;
	let month = document.getElementById('month').value;
	let year = document.getElementById("year").value;
	let ini;
	for (var i = 0; i < number; i++) {
		console.log(cours[i].nomcour , theme);
		if (theme === cours[i].nomcour) {
			ini = cours[i].index;
			console.log("true");
		}
	}
	let data = {"nomcour" : theme , "prof" : prof , "class" : classe , "date" : date , "hour" : hour , "text" : text , "type" : "course" , "index" : ini , "for" : [day , month , year]};
	data = JSON.stringify(data);
	makePOSTRequest('/ajcours2' , data).then((goods) => {
		console.log(goods);
		sessionStorage.setItem("homeworks" , JSON.stringify(goods));
		sessionStorage.setItem("homeworkslenght" , JSON.stringify(goods.length));
	}).catch((err) => {
		console.log("error");
	})
}

function innersaisie2() {
	let notelist = sessionStorage.getItem("noteslist");
	notelist = JSON.parse(notelist);
	let data = sessionStorage.getItem("notelisttochange");
	data = JSON.parse(data);
	let number = sessionStorage.getItem("noteslistlength");
	let main;
	for (var i = 0; i < number; i++) {
		if (notelist[i].coef === data) {
			main = notelist[i];
		}
	}
	document.getElementById('coef2').value = main.coef;
	document.getElementById('coef3').value = main.classe;
	document.getElementById('bar').value = main.bar;
	document.getElementById('nom2').value = main.coef;
	let classe = document.getElementById('coef3').value;
	let classes = sessionStorage.getItem("classes");
	classes = JSON.parse(classes);
	let number2 = sessionStorage.getItem("classeslenght");
	let toinner = {};
	for (var a = 0; a < number2; a++) {
		if (classes[a].classe === classe) {
			toinner = classes[a];
		}
	}
	for (var c = 0; c < classes[0].students.length; c++) {
		let div = document.createElement('div');
		div.id = "child" + c;
		let id2 = "child" + c;
		let note = "note" + c;
		document.getElementById('forinner3').appendChild(div);
		document.getElementById(id2).innerHTML = 
		`<li class="saisies">
				<p class="nompren">${classes[0].students[c]}</p>
				<input type="text" class="note" id="${note}" placeholder="Note">
		</li>`
		let the = 0;
		for (var b = 0; b < classes[0].students.length; b++) {
			if (main[1][c].name === classes[0].students[c]) {
				the = main[1][c].note;
			}	
		}
		document.getElementById(note).value = the;
	}
}

function toinnerenvmessages(){
	let name = sessionStorage.getItem("name");
	let data = JSON.stringify(name);
	/*makePOSTRequest("/messages" , data).then((goods) => {
		console.log(goods);
		sessionStorage.setItem("envmessages" , JSON.stringify(goods));
		sessionStorage.setItem("envmessageslenght" , JSON.stringify(goods.length));
	}).catch((err) => {
		console.log("error");
	})*/
}

function finalfunction() {
	let envmessages = sessionStorage.getItem("envmessages");
	let number = sessionStorage.getItem("envmessageslenght");
	console.log(envmessages);
	for (var i = 0; i < number; i++) {
		console.log(envmessages[i]);
	}
}

function innerclasses(){
	let classes = JSON.parse(sessionStorage.getItem("classes"));
	let classeslenght = JSON.parse(sessionStorage.getItem("classeslenght"));
	for (var i = 0; i < classeslenght; i++) {
		let div = document.createElement('div');
		div.id = "child" + i;
		let id2 = "child" + i;
		let note = "note" + i;
		document.getElementById('list5').appendChild(div);
		document.getElementById(id2).innerHTML = 
		`<li><button id="button7" onclick="showclasse('${classes[i].classe}')"><p>${classes[i].classe}</p></button></li>`
	}
}

function innerprofs(){
	let profs = JSON.parse(sessionStorage.getItem("profs"));
	let length = JSON.parse(sessionStorage.getItem("profslenght"));
	for (var i = 0; i < length; i++) {
		let div = document.createElement('div');
		div.id = "child" + i;
		let id2 = "child" + i;
		let note = "note" + i;
		document.getElementById('list5').appendChild(div);
		document.getElementById(id2).innerHTML = 
		`<li><button class="prof" onclick="showmore('${profs[i].prof}')"><p>${profs[i].prof}</p><div class="hide"></div></button></li>`;
	}
}

function saveperson(){
	let name = document.getElementById('name2').value;
	let data = {"name" : name , "password" : "123456789"};
	data = JSON.stringify(data);
	makePOSTRequest('/addpersonel' , data).then((goods) => {
		if (goods !== "false") {
			sessionStorage.setItem("personel" , JSON.stringify(goods));
			sessionStorage.setItem("personellength" , JSON.stringify(goods.length));
		}else if (goods === "false") {
			console.log("change the name");
		}
	}).catch((err) => {
		console.log("Error");
	})
}

function innermembers(){
	//let members = JSON.parse(sessionStorage.getItem())
}

function innerenv(){
	let env = JSON.parse(sessionStorage.getItem("env"));
	let number = JSON.parse(sessionStorage.getItem("envlenght"));
	for (var i = 0; i < number; i++) {
		let div = document.createElement('div');
		div.id = "childt" + i;
		let id2 = "childt" + i;
		document.getElementById('forinner3').appendChild(div);
		console.log(id2);
		document.getElementById(id2).innerHTML = 
		`<button class="style" onclick="showmoreenv('${env[i].nommessage}')"><li class="style"><p>${env[i].nommessage} , ${env[i].text} , ${env[i].destinateur}</p></li></button>`
	}
	console.log(env);
}

function showmoreenv(data){
	sessionStorage.setItem("tochangeenv" , JSON.stringify(data));
	document.location.href = "/messages2.html";
}

function showmoremess(data){
	sessionStorage.setItem("tochangemess" , JSON.stringify(data));
	document.location.href = "/messages3.html";
}

function innermes(){
	let to = JSON.parse(sessionStorage.getItem("tochangeenv"));
	let allenv = JSON.parse(sessionStorage.getItem("env"));
	let number = JSON.parse(sessionStorage.getItem("envlenght"));
	let forinner;
	for (var i = 0; i < number; i++) {
		if(to === allenv[i].nommessage){
			forinner = allenv[i];
		}
	}
	console.log(forinner);
	document.getElementById('dest').value = forinner.destinateur;
	document.getElementById('text').value = forinner.text;
}

function changemess(){
	let nom = sessionStorage.getItem("name");
	let dest = document.getElementById('dest').value;
	let text = document.getElementById('text').value;
	let name = JSON.parse(sessionStorage.getItem("tochangeenv"));
	let env = JSON.parse(sessionStorage.getItem("env"));
	let number = sessionStorage.getItem("envlenght");
	let ini;
	for (var i = 0; i < number; i++) {
		if (env[i].nommessage === name) {
			ini = env[i].index;
		}
	}
	let data = {"name" : nom , "nommessage" : name , "destinateur" : dest , "text" : text , "aim" : "toadd" , "index" : ini};
	console.log(data);
	makePOSTRequest('/messages2.html' , JSON.stringify(data)).then((goods) => {
		if (goods !== "false") {
			sessionStorage.setItem("env" , JSON.stringify(goods));
			//sessionStorage.setItem("envlenght" , JSON.stringify(goods.length));
		}else{
			alert(error);
		}
	}).catch((err) => {
		console.log("Error");
		alert("error");
	})
}

function innermess(){
	let name = JSON.parse(sessionStorage.getItem("tochangemess"));
	let allmess = JSON.parse(sessionStorage.getItem("messages"));
	let number = JSON.parse(sessionStorage.getItem("messageslenght"));
	let toinner;
	for (var i = 0; i < number; i++) {
		if (allmess[i].nommessage === name) {
			toinner = allmess[i];
		}
	}
	document.getElementById("title5").innerHTML = toinner.nommessage;
	document.getElementById('prof3').innerHTML = toinner.nom;
	document.getElementById('text5').innerHTML = toinner.text
}

var loc2 = window.location.pathname;
let lang = sessionStorage.getItem("language");

if (loc2 === "/tableaudebord.html") {
	console.log(loc2);
	getdate();
	if (lang === "russian") {
		document.getElementById("time-change").innerHTML = `<li><button onclick="changedate()"><p>поменять дату</p></button></li><li><button onclick="getdate()"><p>этот день</p></button></li>`;
		document.getElementById("time").innerHTML = `<li><input type="text" id="day" placeholder="&nbsp;&nbsp; день"></li>
													<li><input type="text" id="month" placeholder="&nbsp;&nbsp; месяц"></li>
													<li><input type="text" id="year" placeholder="&nbsp;&nbsp;год"></li>`
		document.getElementById("fortranslate").innerHTML = `<p>отсоядинится</p>`
		document.getElementById("bigmenu").innerHTML = `<ul id="bigmenulist">
															<li><a href="devoireleves.html"><button class="buts"><p>задания</p></button></a></li>
															<li><a href="notes.html"><button class="buts"><p>оценки</p></button></a></li>
															<li><a href="courseleve.html"><button class="buts"><p>уроки</p></button></a></li>
															<li><a href="messages.html"><button class="buts"><p>сообщения</p></button></a></li>
															<li><a href="absret.html"><button class="buts"><p>отсуствие</p></button></a></li>
														</ul>`
	}
}

if (loc2 === "/devoireleves.html") {
	getdate();
	if (lang === "russian") {
		document.getElementById("bigmenu").innerHTML = `<ul id="bigmenulist">
															<li><a href="devoireleves.html"><button class="buts"><p>задания</p></button></a></li>
															<li><a href="notes.html"><button class="buts"><p>оценки</p></button></a></li>
															<li><a href="courseleve.html"><button class="buts"><p>уроки</p></button></a></li>
															<li><a href="messages.html"><button class="buts"><p>сообщения</p></button></a></li>
															<li><a href="absret.html"><button class="buts"><p>отсуствие</p></button></a></li>
														</ul>`;
		document.getElementById("config").innerHTML = `<button id="button-date"><p>упорядочить по датам</p></button>
													   <select id="selects">
															<option selected>Выберите тему</option>
															<option><p>Математика</p></option>
													   </select>
		                                               <select id="selects2">
															<option selected>Выбрать неделя</option>
															<option><p>неделя</p></option>
		         								 		</select>
														<button id="back2"><p>прошлая неделя</p></button>
														<button id="up"><p>следуйшия неделя</p></button>
														<button id="obnulit"><p>без фильров</p></button>`
		document.getElementById("title7").innerHTML = `Задания`;
	}
}

if(loc2 === "/courseleve.html"){
	let day = new Date();
	let date = day.getDate();
	let month = day.getMonth() + 1;
	let year = day.getFullYear();
	let fulldate = [date , month , year];
	toinnercourses(fulldate);
	if (lang === "russian") {
		document.getElementById("bigmenu").innerHTML = `<ul id="bigmenulist">
															<li><a href="devoireleves.html"><button class="buts"><p>задания</p></button></a></li>
															<li><a href="notes.html"><button class="buts"><p>оценки</p></button></a></li>
															<li><a href="courseleve.html"><button class="buts"><p>уроки</p></button></a></li>
															<li><a href="messages.html"><button class="buts"><p>сообщения</p></button></a></li>
															<li><a href="absret.html"><button class="buts"><p>отсуствие</p></button></a></li>
														</ul>`;
	document.getElementById("config").innerHTML = `<button id="button-date"><p>упорядочить по датам</p></button>
													   <select id="selects">
															<option selected>Выберите тему</option>
															<option><p>Математика</p></option>
													   </select>
		                                               <select id="selects2">
															<option selected>Выбрать неделя</option>
															<option><p>неделя</p></option>
		         								 		</select>
														<button id="back2"><p>прошлая неделя</p></button>
														<button id="up"><p>следуйшия неделя</p></button>
														<button id="obnulit"><p>без фильров</p></button>`
	document.getElementById("title7").innerHTML = `Уроки`;
	}
}

if (loc2 === "/absret.html") {
	toinnerabsences();
	makeGETRequest('/absret').then((goods) => {
		console.log(goods);
	}).catch((err) => {
		console.log("error");
	})
	if (lang === "russian") {
		document.getElementById("bigmenu").innerHTML = `<ul id="bigmenulist">
															<li><a href="devoireleves.html"><button class="buts"><p>задания</p></button></a></li>
															<li><a href="notes.html"><button class="buts"><p>оценки</p></button></a></li>
															<li><a href="courseleve.html"><button class="buts"><p>уроки</p></button></a></li>
															<li><a href="messages.html"><button class="buts"><p>сообщения</p></button></a></li>
															<li><a href="absret.html"><button class="buts"><p>отсуствие</p></button></a></li>
														</ul>`;
	    document.getElementById("menu3").innerHTML = `<li class="tr1"><h2>отсуствие</h2></li> 
													  <li class="tr2"><h2>опоздания</h2></li> 
													  <li class="tr3"><h2>наказания</h2></li> `
	}
}

if (loc2 === "/notes.html") {
	let day = new Date();
	let date = day.getDate();
	let month = day.getMonth() + 1;
	let year = day.getFullYear();
	let fulldate = [date , month , year];
	toinnernotes(fulldate);
	if (lang === "russian") {
		document.getElementById("bigmenu").innerHTML = `<ul id="bigmenulist">
															<li><a href="devoireleves.html"><button class="buts"><p>задания</p></button></a></li>
															<li><a href="notes.html"><button class="buts"><p>оценки</p></button></a></li>
															<li><a href="courseleve.html"><button class="buts"><p>уроки</p></button></a></li>
															<li><a href="messages.html"><button class="buts"><p>сообщения</p></button></a></li>
															<li><a href="absret.html"><button class="buts"><p>отсуствие</p></button></a></li>
														</ul>`;
		document.getElementById("title4").innerHTML = `Оценки`;
	}
}

if (loc2 === "/emploidutempseleve.html") {
	toinneremploidutempseleve();
	if (lang === "russian") {
		document.getElementById("bigmenu").innerHTML = `<ul id="bigmenulist">
															<li><a href="devoireleves.html"><button class="buts"><p>задания</p></button></a></li>
															<li><a href="notes.html"><button class="buts"><p>оценки</p></button></a></li>
															<li><a href="courseleve.html"><button class="buts"><p>уроки</p></button></a></li>
															<li><a href="messages.html"><button class="buts"><p>сообщения</p></button></a></li>
															<li><a href="absret.html"><button class="buts"><p>отсуствие</p></button></a></li>
														</ul>`;
	}
}

if (loc2 === "/messages.html") {
	toinnermessages();
	toinnerenvmessages();
	finalfunction();
	innerenv();
	document.getElementById("config2").innerHTML = `<button id="button-date"><p>упорядочить по датам</p></button>
													   <select id="selects">
															<option selected>Выберите тему</option>
															<option><p>Математика</p></option>
													   </select>
		                                               <select id="selects2">
															<option selected>Выбрать неделя</option>
															<option><p>неделя</p></option>
		         								 		</select>
														<button id="back2"><p>прошлая неделя</p></button>
														<button id="up"><p>следуйшия неделя</p></button>
														<button id="obnulit"><p>без фильров</p></button>`
	document.getElementById("config3").innerHTML = `<button id="button-date"><p>упорядочить по датам</p></button>
													   <select id="selects">
															<option selected>Выберите тему</option>
															<option><p>Математика</p></option>
													   </select>
		                                               <select id="selects2">
															<option selected>Выбрать неделя</option>
															<option><p>неделя</p></option>
		         								 		</select>
														<button id="back2"><p>прошлая неделя</p></button>
														<button id="up"><p>следуйшия неделя</p></button>
														<button id="obnulit"><p>без фильров</p></button>`
}

if (loc2 === "/devoirs.html") {
	toinnerdevoirsprof();
	if (lang === "russian") {
		document.getElementById("bigmenu").innerHTML = `<ul id="bigmenulist">
															<li><a href="devoireleves.html"><button class="buts"><p>задания</p></button></a></li>
															<li><a href="notes.html"><button class="buts"><p>оценки</p></button></a></li>
															<li><a href="courseleve.html"><button class="buts"><p>уроки</p></button></a></li>
															<li><a href="messages.html"><button class="buts"><p>сообщения</p></button></a></li>
															<li><a href="absret.html"><button class="buts"><p>отсуствие</p></button></a></li>
														</ul>`;
		document.getElementById("config").innerHTML = `<button id="button-date"><p>упорядочить по датам</p></button>
													   <select id="selects">
															<option selected>Выберите тему</option>
															<option><p>Математика</p></option>
													   </select>
		                                               <select id="selects2">
															<option selected>Выбрать неделя</option>
															<option><p>неделя</p></option>
		         								 		</select>
														<button id="back2"><p>прошлая неделя</p></button>
														<button id="up"><p>следуйшия неделя</p></button>
														<button id="obnulit"><p>без фильров</p></button>`
	}
}

if (loc2 === "/listofnoteprof.html") {
	toinnernoteslist();
	if (lang === "russian") {
		document.getElementById("bigmenu").innerHTML = `<ul id="bigmenulist">
															<li><a href="devoireleves.html"><button class="buts"><p>задания</p></button></a></li>
															<li><a href="notes.html"><button class="buts"><p>оценки</p></button></a></li>
															<li><a href="courseleve.html"><button class="buts"><p>уроки</p></button></a></li>
															<li><a href="messages.html"><button class="buts"><p>сообщения</p></button></a></li>
															<li><a href="absret.html"><button class="buts"><p>отсуствие</p></button></a></li>
														</ul>`;
		document.getElementById("config").innerHTML = `<button id="button-date"><p>упорядочить по датам</p></button>
													   <select id="selects">
															<option selected>Выберите тему</option>
															<option><p>Математика</p></option>
													   </select>
		                                               <select id="selects2">
															<option selected>Выбрать неделя</option>
															<option><p>неделя</p></option>
		         								 		</select>
														<button id="back2"><p>прошлая неделя</p></button>
														<button id="up"><p>следуйшия неделя</p></button>
														<button id="obnulit"><p>без фильров</p></button>`
	}
}

if (loc2 === "/cours.html") {
	toinnercoures();
	if (lang === "russian") {
		document.getElementById("bigmenu").innerHTML = `<ul id="bigmenulist">
															<li><a href="devoireleves.html"><button class="buts"><p>задания</p></button></a></li>
															<li><a href="notes.html"><button class="buts"><p>оценки</p></button></a></li>
															<li><a href="courseleve.html"><button class="buts"><p>уроки</p></button></a></li>
															<li><a href="messages.html"><button class="buts"><p>сообщения</p></button></a></li>
															<li><a href="absret.html"><button class="buts"><p>отсуствие</p></button></a></li>
														</ul>`;
		document.getElementById("config").innerHTML = `<button id="button-date"><p>упорядочить по датам</p></button>
													   <select id="selects">
															<option selected>Выберите тему</option>
															<option><p>Математика</p></option>
													   </select>
		                                               <select id="selects2">
															<option selected>Выбрать неделя</option>
															<option><p>неделя</p></option>
		         								 		</select>
														<button id="back2"><p>прошлая неделя</p></button>
														<button id="up"><p>следуйшия неделя</p></button>
														<button id="obnulit"><p>без фильров</p></button>`
	}
}

if (loc2 === "/listofnoteprof.html") {
	toinnerprofnoteslist();
	if (lang === "russian") {
		document.getElementById("bigmenu").innerHTML = `<ul id="bigmenulist">
															<li><a href="devoireleves.html"><button class="buts"><p>задания</p></button></a></li>
															<li><a href="notes.html"><button class="buts"><p>оценки</p></button></a></li>
															<li><a href="courseleve.html"><button class="buts"><p>уроки</p></button></a></li>
															<li><a href="messages.html"><button class="buts"><p>сообщения</p></button></a></li>
															<li><a href="absret.html"><button class="buts"><p>отсуствие</p></button></a></li>
														</ul>`;
		document.getElementById("config").innerHTML = `<button id="button-date"><p>упорядочить по датам</p></button>
													   <select id="selects">
															<option selected>Выберите тему</option>
															<option><p>Математика</p></option>
													   </select>
		                                               <select id="selects2">
															<option selected>Выбрать неделя</option>
															<option><p>неделя</p></option>
		         								 		</select>
														<button id="back2"><p>прошлая неделя</p></button>
														<button id="up"><p>следуйшия неделя</p></button>
														<button id="obnulit"><p>без фильров</p></button>`
	}
}

if (loc2 === "/createprof.html") {
	toinnerprofs();
}

if (loc2 === "/studentslist.html") {
	toinnerstudents();
}

if (loc2 === "/ajdev2.html") {
	innerhomeworkinaj();
}

if (loc2 === "/ajcours2.html") {
	innercoursinaj();
}

if (loc2 === "/saisie2.html") {
	innersaisie2();
}

if (loc2 === "/createaclass.html") {
	innerclasses();
}

if (loc2 === "/createprof.html") {
	innerprofs();
}

if (loc2 === "/addpersonel.html") {
	innermembers();
}

if (loc2 === "/addprof2.html") {
	innerproflist();
}

if (loc2 === "/messages2.html") {
	innermes();
}

if (loc2 === "/toseehomework.html") {
	innerhomework();
}

if (loc2 === "/toseecourse.html") {
	innercourse2();
}

if (loc2 === "/messages3.html") {
	innermess();
	if (lang === "russian") {
		document.getElementById("bigmenu").innerHTML = `<ul id="bigmenulist">
															<li><a href="devoireleves.html"><button class="buts"><p>задания</p></button></a></li>
															<li><a href="notes.html"><button class="buts"><p>оценки</p></button></a></li>
															<li><a href="courseleve.html"><button class="buts"><p>уроки</p></button></a></li>
															<li><a href="messages.html"><button class="buts"><p>сообщения</p></button></a></li>
															<li><a href="absret.html"><button class="buts"><p>отсуствие</p></button></a></li>
														</ul>`;
	}
}

if (loc2 === "/createstudent2.html") {
	innerstudent();
}

if (loc2 === "/index.html") {
	if (lang === "russian") {
	document.getElementById("list").innerHTML = `<li><div><a href="dejinscrit.html"><button><p>аккаунт ученика</p></button></a></div></li>
	 											<li><div><a href="dejinscritprof.html"><button><p>аккаунт учителя</p></button></a></div></li>
	 											<li><div><a href="dejinscritbvs.html"><button><p>аккаунт контроля</p></button></a></div></li>
	 											<li><div><a href="create.html"><button><p>создать аккаунт</p></button></a></div></li>`
	}
}

if (loc2 === "/dejinscrit.html") {
	document.getElementById("trname").innerHTML = "ваше имя :";
	document.getElementById("trpass").innerHTML = "ваш пароль :";
}

if (loc2 === "/dejinscritprof.html") {
	document.getElementById("trname").innerHTML = "ваше имя :";
	document.getElementById("trpass").innerHTML = "ваш пароль :";
}

if (loc2 === "/tableaudebordprof.html") {
		document.getElementById("bigmenu").innerHTML = `<ul id="bigmenulist">
															<li><a href="devoirs.html"><button class="buts"><p>задания</p></button></a></li>
															<li><a href="listofnoteprof.html"><button class="buts"><p>оценки</p></button></a></li>
															<li><a href="cours.html"><button class="buts"><p>уроки</p></button></a></li>
															<li><a href="messages.html"><button class="buts"><p>сообщения</p></button></a></li>
															<li><a href="abshour.html"><button class="buts"><p>отсуствие учеников</p></button></a></li>
														</ul>`
}

function findclass(){
	let allclasses = sessionStorage.getItem("classes");
	allclasses = JSON.parse(allclasses);
	let number = sessionStorage.getItem("classeslenght");
	let classe = document.getElementById('coef3').value;
	let forinner = {};
	let the;
	for (var i = 0; i < number; i++) {
		if (allclasses[i].classe === classe) {
			console.log("true");
			the = allclasses[i];
		}
	}
	for (var a = 0; a < the.students.length; a++) {
		let div = document.createElement('div');
		div.id = "child" + a;
		let id2 = "child" + a;
		document.getElementById('forinner3').appendChild(div);
		document.getElementById(id2).innerHTML = 
		`<li class="saisies">
				<p class="nompren">${the.students[a]}</p>
				<input type="text" class="note" placeholder="Note">
		</li>`
	}
}

function savenotes(){
	let names = document.getElementsByClassName('nompren');
	let notes = document.getElementsByClassName('note');
	let mat = sessionStorage.getItem("mat");
	let profname = sessionStorage.getItem("name");
	let bar = document.getElementById('bar').value;
	let classe = document.getElementById('coef3').value;
	let coef = document.getElementById('nom2').value;
	let ndd = document.getElementById('coef2').value;
	let data = {"nomdudevoir" : ndd , "coef" : coef , "classe" : classe , "bar" : bar , "number" : names.length , "mat" : mat , "profname" : profname};
	let info  = {};
	for (var i = 0; i < names.length; i++) {
		if (notes[i].value > bar) {
			return false;
		}
		info[i] = {"name" : names[i].innerText , "note" : notes[i].value};
	}
	data[1] = info;
	data = JSON.stringify(data);
	console.log(data);
	makePOSTRequest("/saisie" , data).then((goods) => {
		console.log(goods);
		sessionStorage.setItem("noteslist" , JSON.stringify(goods));
	}).catch((err) => {
		console.log("error");
	})
}

function savecours(){
	let date = document.getElementById('date').value;
	let hour = document.getElementById('hour').value;
	let theme = document.getElementById('theme').value;
	let classe = document.getElementById('classe').value;
	let text = document.getElementById('text').value;
	let profname = sessionStorage.getItem('name');
	profname = JSON.stringify(profname);
	let day = document.getElementById('day').value;
	let month = document.getElementById('month').value;
	let year = document.getElementById('year').value;
	let data = {"prof" : JSON.parse(profname) , "date" : date , "hour" : hour , "nomdudevoir" : theme , "class" : classe , "text" : text , "for" : [day , month , year] , "type" : "homework"};
	data = JSON.stringify(data);
	makePOSTRequest("/ajdev" , data).then((goods) => {
		console.log(goods);
		sessionStorage.setItem("homeworks" , JSON.stringify(goods));
		sessionStorage.setItem("homeworkslenght" , JSON.stringify(ni));
	}).catch((err) => {
		console.log("false");
	})
}

function saveclass(){
	let type = document.getElementById('classtype').value;
	let classname = document.getElementById('classname').value;
	let classes = sessionStorage.getItem('classes');
	console.log(classname);
	let classeslenght = sessionStorage.getItem('classeslenght');
	console.log(type);
	for (var i = 0; i < classeslenght; i++) {
		if (classes[i].classe === "classname") {
			break;
		}
	}
	let data = {"classe" : classname , "classtype" : type , "type" : "classe"};
	data = JSON.stringify(data);
	makePOSTRequest('/createaclass' , data).then((goods) => {
		console.log(goods);
		if (goods !== "false") {
			sessionStorage.setItem("classes" , JSON.stringify(goods));
			sessionStorage.setItem("classeslenght" , JSON.stringify(goods.length));
		}
	}).catch((err) => {
		alert("error");
	})
}

function addprof(){
	let profname = document.getElementById('profname').value;
	let mat = document.getElementById('mat').value;
	let salle = document.getElementById('salle').value;
	let data = {"prof" : profname , "password" : "1234567890" , "matiere" : mat , "salle" : salle , "type" : "prof"};
	data = JSON.stringify(data);
	makePOSTRequest('/addprof' , data).then((goods) => {
		console.log(goods);
		sessionStorage.setItem("profs" , JSON.stringify(goods));
	}).catch((err) => {
		console.log("false");
	})
}

function addstudent(){
	let name = document.getElementById('student').value;
	let classe = document.getElementById('classe').value;
	let students = sessionStorage.getItem('students');
	let number = sessionStorage.getItem('studentslenght');
	let a = "true";
	console.log("what?");
	for (var i = 0; i < number; i++) {
		if (students[i].name === name) {
			a = "false";
		}
	}
	if (a = "true") {
		data = {"name" : name , "classe" : classe , "type" : "student" , "password" : "1234567890"};
		data = JSON.stringify(data);
		makePOSTRequest('/createstudent' , data).then((goods) => {
			console.log("true");
			sessionStorage.setItem("students" , JSON.stringify(goods));  
		}).catch((err) => {
			console.log("false");
		})
	}
}

function showhomework(data){
	document.location.href = "ajdev2.html";
	sessionStorage.setItem("devoirtochange" , JSON.stringify(data));
}


function savecours2() {
	let nomdudevoir = document.getElementById('theme').value;
	let prof = sessionStorage.getItem("name");
	let classe = document.getElementById('classe').value;
	let date = document.getElementById('date').value;
	let hour = document.getElementById('hour').value;
	let day = document.getElementById('day').value;
	let month = document.getElementById('month').value;
	let year = document.getElementById('year').value;
	let text = document.getElementById('text').value;
	let homeworks = JSON.parse(sessionStorage.getItem("homeworks"));
	let number = JSON.parse(sessionStorage.getItem("homeworkslenght"));
	let ini;
	for (var i = 0; i < number; i++) {
		if (homeworks[i].nomdudevoir === nomdudevoir) {
			ini = homeworks[i].index;
			console.log(ini);
		}
	}
	console.log(ini);
	let data = {"nomdudevoir" : nomdudevoir ,"prof" : prof , "class" : classe , "date" : date , "type" : "homework" , "for" : [day , month , year] , "index" : ini , "text" : text};
	data = JSON.stringify(data);
	console.log(data);
	makePOSTRequest('/ajdev2' , data).then((goods) => {
		console.log(goods);
		let fori = sessionStorage.getItem("data");
		//document.location.href = "dejinscritprof.html";
		/*makePOSTRequest('/dejinscritprof' , fori).then((goods) =>{
		var goods = goods;
		console.log(goods[0]);
		if (goods[0] === "true") {
			goods = JSON.stringify(goods);
			console.log(goods);
			innerprof(goods);
			console.log("true");
		}
	})*/
	}).catch((err) => {
		console.log("error");
	})
}

function showcourse(data){
	document.location.href = "ajcours2.html";
	sessionStorage.setItem("coursestochange" , JSON.stringify(data));
}

function shownotelist(data){
	document.location.href = "saisie2.html"
	sessionStorage.setItem("notelisttochange" , JSON.stringify(data));
}

function savenotes2(){
	let names = document.getElementsByClassName('nompren');
	let notes = document.getElementsByClassName('note');
	let mat = sessionStorage.getItem("mat");
	let profname = sessionStorage.getItem("name");
	let bar = document.getElementById('bar').value;
	let classe = document.getElementById('coef3').value;
	let coef = document.getElementById('nom2').value;
	let ndd = document.getElementById('coef2').value;
	let list = JSON.parse(sessionStorage.getItem("noteslist"));
	let number = sessionStorage.getItem("noteslistlength");
	let ini;
	for (var a = 0; a < number; a++) {
		if (list[a].coef === ndd) {
			ini = list[a].index;
			console.log("true");
		}
	}
	let data = {"nomdudevoir" : ndd , "coef" : coef , "classe" : classe , "bar" : bar , "number" : names.length , "mat" : mat , "profname" : profname , "index" : ini};
	let info  = {};
	for (var i = 0; i < names.length; i++) {
		if (notes[i].value > bar) {
			return false;
		}
		info[i] = {"name" : names[i].innerText , "note" : notes[i].value};
	}
	data[1] = info;
	console.log(data);
	data = JSON.stringify(data);
	makePOSTRequest('/saisie2' , data).then((goods) => {
		let fori = sessionStorage.getItem("data");
		sessionStorage.setItem("noteslist" , JSON.stringify(goods));
	}).catch((err) => {
		console.log("error");
	})
}

function showmore(data){
	sessionStorage.setItem("tochangeprof" , JSON.stringify(data));
	document.location.href = "/addprof2.html";
}

function innercourse2(){
	let tosee = JSON.parse(sessionStorage.getItem("coursetosee"));
	let homework = JSON.parse(sessionStorage.getItem("courses"));
	let number = sessionStorage.getItem("courseslenght");
	let forinner;
	for (var i = 0; i < number; i++) {
		if (homework[i].nomcour === tosee) {
			forinner = homework[i];
		}
	}
	console.log(forinner);
	document.getElementById('title5').innerHTML = forinner.nomcour;
	document.getElementById('prof3').innerHTML = forinner.prof;
	document.getElementById('date5').innerHTML = forinner.date;
	document.getElementById('text5').innerHTML = forinner.text;
}

function innerproflist(){
	let prof = JSON.parse(sessionStorage.getItem("tochangeprof"));
	let allprofs = JSON.parse(sessionStorage.getItem("profs"));
	let number = JSON.parse(sessionStorage.getItem("profslenght"));
	let forinner;
	for (var i = 0; i < number; i++) {
		if (allprofs[i].prof === prof) {
			forinner = allprofs[i];
		}
	}
	document.getElementById('profname').value = forinner.prof;
	document.getElementById('mat').value = forinner.matiere;
	document.getElementById('salle').value = forinner.salle;
}

function changeprof(){
	let name = document.getElementById('profname').value;
	let mat = document.getElementById('mat').value;
	let salle = document.getElementById('salle').value;
	let prof = JSON.parse(sessionStorage.getItem("tochangeprof"));
	let allprofs = JSON.parse(sessionStorage.getItem("profs"));
	let number = JSON.parse(sessionStorage.getItem("profslenght"));
	let forinner;
	for (var i = 0; i < number; i++) {
		if (allprofs[i].prof === prof) {
			forinner = allprofs[i];
		}
	}
	let data = {"prof" : name ,"password" : forinner.password ,"matiere" : mat , "salle" : salle , "type" : "prof"};
	makePOSTRequest('/addprof2' , JSON.stringify(data)).then((goods) => {
		if (data !== "false") {
			sessionStorage.setItem("profs" , JSON.stringify(goods));
			sessionStorage.setItem("profslenght" , JSON.stringify(goods.length));
		}else if(data === "false"){
			alert("Error");
		}             
	}).catch((err) => {
		console.log("error"); 
	})
}

function showmorestudent(data){
	sessionStorage.setItem('tochangestudent' , JSON.stringify(data));
	document.location.href = "/createstudent2.html";
}

function deconexion(){
	sessionStorage.setItem("notes", 0);
	sessionStorage.setItem("noteslenght", 0);
	sessionStorage.setItem("courses", 0);
	sessionStorage.setItem("courseslenght", 0);
	sessionStorage.setItem("messages", 0);
	sessionStorage.setItem("messageslenght", 0);
	sessionStorage.setItem("absenceslenght", 0);
	sessionStorage.setItem("absences", 0);
	sessionStorage.setItem("retards", 0);
	sessionStorage.setItem("retardslenght", 0);
	sessionStorage.setItem("sanctions", 0);
	sessionStorage.setItem("sanctionslenght", 0);
	sessionStorage.setItem("homeworks", 0);
	sessionStorage.setItem("homeworkslenght", 0);
	sessionStorage.setItem("emploi" , 0);
	sessionStorage.setItem("emploilenght" , 0);
	sessionStorage.setItem("classes" , 0);
	sessionStorage.setItem("env" , 0);
	sessionStorage.setItem("envlenght" , 0);
	sessionStorage.setItem("noteslist" , 0);
	sessionStorage.setItem("noteslistlength" , 0);
	document.location.href = "index.html";
}

function showclasse(data){
	sessionStorage.setItem("classetochange" , JSON.stringify(data));
	document.location.href = "";
}	

function innerstudent(){
	let nam = sessionStorage.getItem("tochangestudent");
	let all = JSON.parse(sessionStorage.getItem("students"));
	let num = sessionStorage.getItem("studentslenght");
	for (var i = 0; i < num; i++) {
		Things[i]
	}
}

function findclass2(){
	let allclasses = sessionStorage.getItem("classes");
	allclasses = JSON.parse(allclasses);
	let number = sessionStorage.getItem("classeslenght");
	let classename = document.getElementById("classe2").value;
	let classe = {};
	for (var i = 0; i < number; i++) {
		if (allclasses[i].classe === classename) {
			classe = allclasses[i];
		}
	}
	for (var i = 0; i < classe.students.length; i++) {
		let div = document.createElement('div');
		div.id = "child" + i;
		div.class = "el";
		let id2 = "child" + i;
		document.getElementById('classelist').appendChild(div);
		document.getElementById(id2).innerHTML = `<button class="wide" onclick="addhim('${classe.students[i]}' , '${i}')" ><p class="formoveleft">${classe.students[i]}</p></button>`;
	}
}

function addhim(data , a){
	let data1 = JSON.parse(sessionStorage.getItem("alladds"));
	let n = data1.length;
	data1[n] = data;
	sessionStorage.setItem("alladds" , JSON.stringify(data1));
	let id2 = "child" + a;
	document.getElementById(id2).innerHTML = `<button class="wide2" onclick="addhim2('${data}' , '${a}')" ><p class="formoveleft">${data}</p></button>`
}

function addhim2(data , a){
	let data1 = JSON.parse(sessionStorage.getItem("alladds"));
	let n = data1.length;
	for (var i = 0; i < n; i++) {
		console.log(data1[i]);
		if (data1[i] === data) {
			data1[i] = "";
		}
	}
	let id2 = "child" + a;
	document.getElementById(id2).innerHTML = `<button class="wide" onclick="addhim('${data}' , '${a}')" ><p class="formoveleft">${data}</p></button>`
	sessionStorage.setItem("alladds" , JSON.stringify(data1));
}

function envabsences(){
	let data1 = JSON.parse(sessionStorage.getItem("alladds"));
	let hour = document.getElementById("heure");
	let per = [];
	let day = new Date();
	let date = day.getDate();
	let month = day.getMonth() + 1;
	let year = day.getFullYear();
	let fulldate = [date , month , year];
	sessionStorage.setItem("alladds" , JSON.stringify(per));
	let data = {"hour" : hour , "absents" : data1 , "date" : fulldate};
	makePOSTRequest("/abshour.html" , JSON.stringify(data)).then((goods) => {
		console.log("Mission Acomplished");
	}).catch((err) => {
		console.log("error")
	})
}

function changetorussian(){
	sessionStorage.setItem("language" , "russian");
	document.location.href = "index.html";
}

function changetofrench(){
	sessionStorage.setItem("language" , "french");
	document.location.href = "index.html";
}






















































