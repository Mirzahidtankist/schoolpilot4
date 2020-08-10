const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();

app.use(express.static('.'));
app.use(bodyParser.json());



app.post("/dejinscrit",  (req, res) =>{
  let info = req.body
  let a = 1
  fs.readFile("./jsonfiles/allstudentsname.json" , 'utf-8' , (err , data) => {
    data = JSON.parse(data)
    let all = []
    let names = info
    for (var i = 0; i < data.length; i++) {      
      if (data[i].name === info[0]) {
        if (data[i].password === info[1]) {
          console.log("true")
          let classe = data[i].classe
          let name = data[i].name;
          fs.readFile("./jsonfiles/notes.json" , "utf-8" , (err , data) => {
            data = JSON.parse(data)
            let a = 0 
            all[a] = "true"
            a++
            all[a] = info[0]
            a++
            for (var i = 0; i < data.length; i++) {
              if (data[i].name === info[0]) {
                all[a] = data[i]
                a++
              }
            }
            fs.readFile("./jsonfiles/homeworks.json" , "utf-8" , (err , data) => {
              data = JSON.parse(data)
              for (var i = 0; i < data.length; i++) {
                if (data[i].class === classe) {
                  all[a] = data[i]
                  a++
                }
              }
              fs.readFile("./jsonfiles/allcourses.json" , "utf-8" , (err , data) => {
                data = JSON.parse(data)
                for (var i = 0; i < data.length; i++) {
                  if (data[i].class = classe) {
                    all[a] = data[i]
                    let le = data.length
                    a++
                  }
                }
                fs.readFile("./jsonfiles/messages.json" , "utf-8" , (err , data) => {
                  data = JSON.parse(data)
                  for (var i = 0; i < data.length; i++) {
                    if (data[i].destinateur === info[0] || data[i].destinateur === "tout" || data[i].destinateur === classe) {
                      all[a] = data[i]
                      a++
                    }
                  }
                  fs.readFile("./jsonfiles/retards.json" , "utf-8" , (err , data) => {
                    data = JSON.parse(data)
                    for (var i = 0; i < data.length; i++) {
                      if (data[i].nom === info[0]) {
                        all[a] = data[i]
                        a++
                      }
                    }
                    fs.readFile("./jsonfiles/allclases.json" , "utf-8" , (err , data) => {
                      data = JSON.parse(data)
                      for (var i = 0; i < data.length; i++) {
                        for (var b = 0; b < data[i].students.length; b++) {
                          if (data[i].students[b] === info[0]) {
                            all[a] = data[i]
                            a++
                          }
                        }
                      }
                      fs.readFile("./jsonfiles/emploi.json" , "utf-8" , (err , data) => {
                        data = JSON.parse(data)
                        for (var i = 0; i < data.length; i++) {
                          if (data[i].name === info[0]) {
                            all[a] = data[i]
                            a++
                          }
                        }
                        fs.readFile("./jsonfiles/messages.json" , 'utf-8' , (err , data) => {
                          data = JSON.parse(data);
                          for (var i = 0; i < data.length; i++) {
                            if (data[i].name === info[0]) {
                              data[i].type = "env";
                              console.log("true3");
                              all[a] = data[i];
                              a++
                            }
                          }
                          res.send(all);
                        })
                      })
                    })
                  })
                })
              })
            })            
          })
        }else{
          console.log("false")
          res.send("false")
        }
      }
    }
  })
})

app.post("/dejinscritprof" , (req , res) => {
  let info = req.body
  let a = 1
  fs.readFile("./jsonfiles/allprofname.json" , 'utf-8' , (err , data) => {
    data = JSON.parse(data)
    let all = []
    let names = info
    for (var i = 0; i < data.length; i++) {      
      if (data[i].prof === info[0]) {
        if (data[i].password === info[1]) {
          //let classe = data[i].classe
          let a = 0 
            all[a] = "true"
            a++
            all[a] = info[0]
            a++
            all[a] = data[i].matiere
            a++
          fs.readFile("./jsonfiles/notes.json" , "utf-8" , (err , data) => {
            data = JSON.parse(data)
            for (var i = 0; i < data.length; i++) {
              if (data[i].nomprof === info[0]) {
                all[a] = data[i]
                a++
                console.log(data[i]);
              }
            }
            fs.readFile("./jsonfiles/homeworks.json" , "utf-8" , (err , data) => {
              data = JSON.parse(data)
              for (var i = 0; i < data.length; i++) {
                if (data[i].prof === info[0]) {
                  all[a] = data[i];
                  a++
                }
              }
              fs.readFile("./jsonfiles/allcourses.json" , "utf-8" , (err , data) => {
                data = JSON.parse(data)
                for (var i = 0; i < data.length; i++) {
                  if (data[i].nomprof = info[0]) {
                    all[a] = data[i]
                    let le = data.length
                    a++
                  }
                }
                fs.readFile("./jsonfiles/messages.json" , "utf-8" , (err , data) => {
                  data = JSON.parse(data)
                  for (var i = 0; i < data.length; i++) {
                    if (data[i].destinateur === info[0] || data[i].destinateur === "tout") {
                      all[a] = data[i] 
                      a++
                    }
                  }
                  fs.readFile("./jsonfiles/retards.json" , "utf-8" , (err , data) => {
                    data = JSON.parse(data)
                    for (var i = 0; i < data.length; i++) {
                      if (data[i].nom === info[0]) {
                        all[a] = data[i]
                        a++
                      }
                    }
                    fs.readFile("./jsonfiles/allclases.json" , "utf-8" , (err , data) => {
                      data = JSON.parse(data)
                      for (var i = 0; i < data.length; i++) {
                        for (var c = 0; c < data[i].profs.length; c++) {
                          if (data[i].profs[c] === info[0]) {
                            all[a] = data[i]
                            a++
                          }
                        }
                      }
                      fs.readFile("./jsonfiles/emploi.json" , "utf-8" , (err , data) => {
                        data = JSON.parse(data)
                        for (var i = 0; i < data.length; i++) {
                          if (data[i].nomprof === info[0]) {
                            all[a] = data[i]
                            a++
                          }
                        }
                        fs.readFile("./jsonfiles/allsaisie.json" , "utf-8" , (err , data) => {
                        	data = JSON.parse(data)
                        	for (var i = 0; i < data.length; i++) {
                        		if (data[i].profname === info[0]) {
                        			all[a] = data[i]
                        			a++
                        		}
                        	}
                          fs.readFile("./jsonfiles/messages.json" , 'utf-8' , (err , data) => {
                            data = JSON.parse(data);
                            for (var i = 0; i < data.length; i++) {
                             if (data[i].name === info[0]) {
                                data[i].type = "env";
                                all[a] = data[i];
                                a++
                              }
                            }
                            res.send(all);
                          })
                        })
                      })
                    })
                  })
                })
              })
            })           
          })
        }else{
          console.log("false")
          res.send("false")
        }
      }
    }
  })
})

app.post('/dejinscritbvs' , (req , res) => {
	let info = req.body;
	let all = {};
	fs.readFile("./jsonfiles/allbvs.json" , 'utf-8' , (err , data) => {
		data = JSON.parse(data);
		let a = 0;
		all[a] = "true";
		a++;
		all[a] = info[0];
		a++;
    all[a] = 0;
    a++;
		for (var i = 0; i < data.length; i++) {
			if (info[0] === data[i].name && info[1] === data[i].password) {
				console.log("true");
				fs.readFile("./jsonfiles/allclases.json" , 'utf-8' , (err , data) => {
					data = JSON.parse(data);
					for (var i = 0; i < data.length; i++) {
						all[a] = data[i];
						a++;
					}
					fs.readFile("./jsonfiles/allprofname.json" , 'utf-8' , (err , data) => {
						data = JSON.parse(data);
						for (var i = 0; i < data.length; i++) {
							all[a] = data[i];
							a++;
						}
						fs.readFile("./jsonfiles/allstudentsname.json" , 'utf-8' , (err , data) => {
							data = JSON.parse(data);
							for (var i = 0; i < data.length; i++) {
								all[a] = data[i];
								a++;
							}
							fs.readFile("./jsonfiles/emploi.json" , 'utf-8' , (err , data) => {
								data = JSON.parse(data);
								for (var i = 0; i < data.length; i++) {
									all[a] = data[i];
									a++;
								}
								fs.readFile("./jsonfiles/retards.json" , 'utf-8' , (err , data) => {
									data = JSON.parse(data);
									for (var i = 0; i < data.length; i++) {
										all[a] = data[i];
										a++;
									}
									fs.readFile("./jsonfiles/messages.json" , "utf-8" , (err , data) => {
										data = JSON.parse(data);
										for (var i = 0; i < data.length; i++) {
											all[a] = data[i];
											a++;
										}
                    all[2] = a;
										res.send(all);
									})
								})
							})
						})
					})
				})
			}
		}
	})
})

app.post("/create" , (req , res) => {
  fs.readFile("./jsonfiles/allbvs.json" , "utf-8" , (err , data) => {
    const cart = JSON.parse(data);
    const item = req.body;
    let a = 0
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].email === item.email) {
        res.send("false")
        i = cart.length
        a++
      }
    }
    cart.push(item);
    
      fs.writeFile("./jsonfiles/allbvs.json" , JSON.stringify(cart) , (err , data) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      })
    
 })
})

app.post("/messages" , (req , res) => {
  fs.readFile("./jsonfiles/messages.json" , "utf-8" ,(err , data) => {
    data = JSON.parse(data)
    let info = req.body
    let all = {};
    let nu = 0;
    for (var a = 0; a < data.length; a++) {
      if (data[a].name === info.name) {
        all[nu] = data[a];
        nu++
      }
    }
    let ifi = "true";
    for (var c = 0; c < nu; c++) {
      if (all[c].nommessage === info.nommessage) {
        ifi = "false";
      }
    }
    if (info.aim === "toadd") {
      info.index = data.length
      data.push(info)
      if (ifi === "true") {
         fs.writeFile("./jsonfiles/messages.json" , JSON.stringify(data) , (err , data) => { 
           if (err) {
              res.send('{"result": 0}');
          } else {
              res.send(all);
           }
          })
      }
    }else if(info.aim === "todelete"){
      for (var i = 0; i < data.length; i++) {
        if (data[i].index === info.index) {
          data[i] = "delete"
          fs.writeFile("./jsonfiles/messages.json" , JSON.stringify(data) , (err , data) => {
            if (err) {
              res.send('{"result": 0}');
            } else {
              res.send('{"result": 1}');
            }
          })
        }
      }
    }else if(info.aim === "tochange"){
      for (var i = 0; i < data.length; i++) {
        if (data[i].index === info.index) {
          data[i].text === info.text
          fs.writeFile("./jsonfiles/messages.json" , JSON.stringify(data) , (err , data) => {
            if (err) {
              res.send('{"result": 0}');
            } else {
              res.send('{"result": 1}');
            }
          })
        }
      }
    }
  })
})

app.post('/saisie' , (req , res) => {
	let info = req.body;
  let num2;
  fs.readFile('./jsonfiles/allsaisie.json' , 'utf-8' , (err , data) => {
    data = JSON.parse(data)
    let num = data.length;
    info.type = "noteslist";
    info.index = num;
    num2 = num;
    data.push(info)
    console.log(data);
    console.log("true")
    let all;
    let nu = 0;
    for (var a = 0; a < data.length; a++) {
     if (data[a].profname === info.profname) {
           all[nu] = data[a];
           nu++;
      }    
    }
    let ifi = "true";
    for (var c = 0; c < nu; c++) {
      if (all[c].nomdudevoir === info.nomdudevoir) {
        ifi = "false";
      }
    }
    if (ifi === "true") {
    fs.writeFile('./jsonfiles/allsaisie.json' , JSON.stringify(data) , (err , data) => {
      if (err) {
              console.log("true");
            } else {

            }
    })
    }
  })
	fs.readFile('./jsonfiles/notes.json' , 'utf-8' , (err , data) => {
		data = JSON.parse(data);
		for (var i = 0; i < info.number; i++) {
			for (var a = 0; a < data.length; a++) {
				if (data[a].name === info[1][i].name) {
					for (var c = 0; c < data[a].notes.length; c++) {
						if (data[a].notes[c].mat === info.mat) {
							let number = data[a].notes[c].note.length
							data[a].notes[c].note[number] = { "note" : info[1][i].note , "bar" : info.bar , "coef" : info.nomdudevoir , "nomdudevoir" : info.coef , "index" : num2};
						}
					}
				}
			}
		}

    fs.writeFile("./jsonfiles/notes.json" , JSON.stringify(data) , (err , data) => {
      if (err) {
        console.log("error");
      } 
    })
	})
	
  res.send(all);
})

app.post('/ajdev' , (req , res) => {
	let info = req.body;
	console.log(info);
	fs.readFile("./jsonfiles/homeworks.json" , 'utf-8' , (err , data) => {
		data = JSON.parse(data);
		let a = "true";
		a = "true";
    let all = {};
    let num = 0;
    for (var i = 0; i < data.length; i++) {
      if (info.prof === data[i].prof) {
        all[num] = data[i];
        num++
      }
    }
    let ifi = "true";
    for (var c = 0; c < num; c++) {
      if (all[c].nomdudevoir === info.nomdudevoir) {
        ifi = "false";
      }
    }
    info.index = data.length + 1;
    console.log(info);
		data.push(info);
		if (ifi === "true") {
			fs.writeFile("./jsonfiles/homeworks.json" , JSON.stringify(data) , (err , data) => {
        console.log(data);
			})
		}else{
      console.log(data);
    }
    res.send(all);
	})
})

app.post('/createaclass' , (req , res) => {
	let info = req.body;
	fs.readFile("./jsonfiles/allclases.json" , 'utf-8' , (err , data) => {
		data = JSON.parse(data);
		data.push(info);
    let fo = "true";
    for (var i = 0; i < data.length; i++) {
      if (data[i].classe !== info.classe) {
        fo = "false";
        console.log("false");
      }
      console.log(data[i].classe , info.classe);
    }
    if (fo === "true") {
      fs.writeFile("./jsonfiles/allclases.json" , JSON.stringify(data) , (err , data) => {
       console.log("true");
      })
    }
    data = "false";
		res.send(data);
	})
})

app.post('/addprof' , (req , res) => {
	let info = req.body;
	fs.readFile("./jsonfiles/allprofname.json" , 'utf-8' , (err , data) => {
		data = JSON.parse(data);
		let a = "true";
    console.log("True");
		for (var i = 0; i < data.length; i++) {
			if(info.prof === data[i].prof){
				a = "false";
			}
		}
    data.push(info);
		if(a === "true") {
			fs.writeFile("./jsonfiles/allprofname.json" , JSON.stringify(data) , (err , data) => {
				console.log("true");
			})
		}
		res.send(data);
	})
})

app.post('/createstudent' , (req , res) => {
	let info = req.body;
	fs.readFile("./jsonfiles/allstudentsname.json" , 'utf-8' , (err , data) => {
		data = JSON.parse(data);
		data.push(info);
		let a = "true";
		for (var i = 0; i < data.length; i++) {
			if (info.name === data[i].name) {
				a = "false";
			}
		}
		if (a === "true") {
			fs.writeFile("./jsonfiles/allstudentsname.json" , JSON.stringify(data) , (err , data) => {
				console.log("true"); 
			})
      let toinner = fs.readFile("jsonfiles/shema/notes.json" , 'utf-8' , (err , data) => {

      })
      fs.writeFile("/jsonfiles/notes.json" , JSON.stringify(toinner) , (err , data) => {

      })
		}
		res.send(data);
	})
})

app.post('/ajdev2' , (req , res) => {
	let info = req.body;
	fs.readFile("./jsonfiles/homeworks.json" , 'utf-8' , (err , data) => {
		data = JSON.parse(data);
    let n = info.index -1;
    console.log(data[n]);
    data[n] = info;
    let all = {};
    let num = 0;
    for (var i = 0; i < data.length; i++) {
      if (info.prof === data[i].prof) {
        all[num] = data[i];
        num++;
      }
    }
    console.log("truwe");
		fs.writeFile("./jsonfiles/homeworks.json" , JSON.stringify(data) , (err , data) => {
			console.log("true");
		})
		res.send(all);
	})
})

app.post('/ajcours' , (req , res) => {
	let info = req.body;
	fs.readFile("./jsonfiles/allcourses.json", 'utf-8' , (err , data) => {
		data = JSON.parse(data);
		let a = "true";
		let num = data.length;
    info.index = num - 1;
		data.push(info);
    let all = {};
    let nu = 0;
    for (var i = 0; i < num; i++) {
      if (info.prof === data[i].prof) {
        all[nu] = data[i];
        nu++
      }
    }
    let ifi = "true";
    for (var c = 0; c < nu; c++) {
      if (all[c].nomcour === info.nomcour) {
        ifi = "false";
      }
    }
		if (ifi === "true") {
			fs.writeFile("./jsonfiles/allcourses.json" , JSON.stringify(data) , (err , data) => {
				console.log("true");
			})
		
		}else if (a === "false") {
			
		}
    res.send(all);
	})
})

app.post('/ajcours2' , (req , res) => {
	let info = req.body;
	fs.readFile("./jsonfiles/allcourses.json" , 'utf-8' , (err , data) => {
		data = JSON.parse(data);
		let number = info.index
    let all = {};
    let num = 0;
    for (var i = 0; i < num; i++) {
      if (info.prof === data[i].prof) {
        all[num] = data[i];
        num++
      }
    }
				data[number + 1] = info;
				fs.writeFile("./jsonfiles/allcourses.json" , JSON.stringify(data) , (err , data) => {
					console.log("true");
				})
			
		
		res.send(all);
	})
})

app.post('/saisie2' , (req , res) => {
	let info = req.body;
	fs.readFile('./jsonfiles/notes.json' , 'utf-8' , (err , data) => {
		data = JSON.parse(data);
		for (var i = 0; i < info.number; i++) {
			for (var a = 0; a < data.length; a++) {
				if (data[a].name === info[1][i].name) {
					for (var c = 0; c < data[a].notes.length; c++) {
						if (data[a].notes[c].mat === info.mat) {
							let number = data[a].notes[c].note.length
            			 for (var z = 0; z < number; z++) {
                			if (data[a].notes[c].note[z].index === info.index) {
                  				data[a].notes[c].note[z].note = info[1][i].note;
                  				console.log("true");
                			}
          				  }
						}
					}
				}
			}
		}
    fs.writeFile("./jsonfiles/notes.json" , JSON.stringify(data) , (err , data) => {
      if (err) {
        console.log("error");
      } 
    })
	})
	fs.readFile('./jsonfiles/allsaisie.json' , 'utf-8' , (err , data) => {
		data = JSON.parse(data)
    let num = info.index;
    data[num] = info;
    console.log(data);
		fs.writeFile('./jsonfiles/allsaisie.json' , JSON.stringify(data) , (err , data) => {
			if (err) {
        console.log("error");
      } 
		})
    /*for (var a = 0; a < data.length; a++) {
      console.log(data[a].coef,info.coef)
      if (data[a].coef === info.coef) {
       // all.push(data[a]);
      } 
    }
    //res.send(all);*/
    let all = {};
  let nu = 0;
  for (var a = 0; a < data.length; a++) {
    if (data[a].profname === info.profname) {
           all[nu] = data[a];
           nu++;
     }    
  }
  res.send(all);
	})
})

app.post('/addpersonel' , (req  , res) => {
  let info = req.body;
  fs.readFile('./jsonfiles/allbvs.json' , 'utf-8' , (err , data) => {
    data = JSON.parse(data);
    let fo = "true";
    for (var i = 0; i < data.length; i++) {
      if (data[i].name === info.name) {
        fo = "false";
        i = data.length;
        res.send(fo);
      }
    }
    data.push(info);
    if (fo === "true") {
      fs.writeFile('./jsonfiles/allbvs.json' , JSON.stringify(data) , (err , data) => {
        res.send(data);
      })
    }
  })
})

app.post('/addprof2' , (req , res) => {
  let info = req.body;
  fs.readFile("./jsonfiles/allprofname.json" , 'utf-8' , (err , data) => {
    data = JSON.parse(data);
    for (var i = 0; i < data.length; i++) {
      if (data[i].prof === info.prof) {
        data[i] = info;
      }
    }
    fs.writeFile("./jsonfiles/allprofname.json" , JSON.stringify(data) , (err , data) => {
      if (err) {
        res.send('{"result": 1}');
      }else{
        res.send(data);
      }
    })
  })
})

app.post('/messages2.html' , (req , res) => {
  let info = req.body;
  fs.readFile("./jsonfiles/messages.json" , "utf-8" , (err , data) => {
    data = JSON.parse(data);
    for (var i = 0; i < data.length; i++) {
      if (data[i].nommessage === info.nommessage) {
        data[i] = info;
      }
    }
    let all = {};
    let nu = 0;
    for (var a = 0; a < data.length; a++) {
      if (data[a].name === info.name) {
        all[nu] = data[a];
        nu++
      }
    }
    fs.writeFile("./jsonfiles/messages.json" , JSON.stringify(data) , (err , data) => {
      
    })
    res.send(all);
  })
})

app.post('/abshour.html' , (req , res) => {
  let info = req.body;
  fs.readFile("./jsonfiles/retards.json" , "utf-8" , (err , data) => {
    data = JSON.parse(data);
    let towrite = {};
    let a = 0;
    let type = "retard";
    if (info.hour === "3S") {
      type = "absence;"
    }
    for (var i = 0; i < info.absents.length; i++) {
      towrite[a] = {"hour" : info.hour , "absents" : info.absents[i] , "date" : info.date , "type" : type};
      a++;
    }
    data.push(towrite);
    fs.writeFile("./jsonfiles/retards.json" , JSON.stringify(data) , (err , data) => {

    })
  })
  res.send(info);
})

app.listen((process.env.PORT || 5000) , function() {
  console.log('server is running on port 5000!');
});














