$('#front').fadeIn(2000);

// event handler function
function handler(e) {
    e = e || window.event;

    var pageX = e.pageX;
    var pageY = e.pageY;

    // IE 8
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    console.log(pageX, pageY);
}

// attach handler to the click event of the document
if (document.attachEvent) document.attachEvent('onclick', handler);
else document.addEventListener('click', handler);

function createButton(name, top, left, onClick){
	$('body').append("<button id="+name+"/>");
	$('#'+name).css({"top":top+'%',"left":left+'%'}).show().click(function () {
		new Audio('./click.mp3').play();
		console.log(name+" was clicked");
		this.remove();
		$('#'+name.substring(3)).show();
		if(onClick != null){
			onClick();
		}
	})
}

//jigsaw gif button
createButton("btnsaw", 914, 458, ()=>{

	//open modal with jigsaw img

});

function openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
  }

//button 1a
$('body').append("<button id='btn1a'/>")
$('#btn1a').css({"top":"25%","left":"75%"}).delay(1500).show().click(function () {
	new Audio('./click.mp3').play();
	this.remove(); $('#1a').fadeIn(500);

	//button 2a
	createButton("btn2a", 15, 67, ()=>{

		//button 3f
		createButton("btn3f", 12, 85, ()=>{

			//button 4g
			createButton("btn4g", 5, 90, ()=>{

				openInNewTab("JigsawMask.gif");
			});

			//button 4l
			createButton("btn4l", 19, 82, ()=>{

				//button 5i
				createButton("btn5i", 25, 80, ()=>{

					//button 6i
					createButton("btn6i", 34, 82, ()=>{

						//button 7d
						createButton("btn7d", 39, 83, ()=>{


						});
					});
				});
			});
		});

		//button 3h
		createButton("btn3h", 25, 65, ()=>{

			//button 4m
			createButton("btn4m", 55, 65, ()=>{

				//button 5h
				createButton("btn5h", 47, 67, ()=>{

					//button 6h
					createButton("btn6h", 40, 69, ()=>{

						//button 7f
						createButton("btn7f", 34, 70, ()=>{
              openInNewTab("chwallpaper.jpg")

						});
					});
				});
			});

			//button 4n
			createButton("btn4n", 30, 55, ()=>{

				//button 5e
				createButton("btn5e", 8, 62, ()=>{

					//button 6l
					createButton("btn6l", 15, 61, ()=>{

						//button 7h
						createButton("btn7h", 21, 62, ()=>{

							//button
						});
					});
				});

				//button 5g
				createButton("btn5g", 20, 46, ()=>{

					//button 6g
					createButton("btn6g", 19, 41, ()=>{

						//button 7k
						createButton("btn7k", 10, 47, ()=>{
              openInNewTab("dramatic2.jpg")
							//button
						});

						//button 7n
						createButton("btn7n", 15, 33, ()=>{

							//button 8a
							createButton("btn8a", 10, 30, ()=>{

								//button 9a
								createButton("btn9a", 10, 24, ()=>{

									//button 10a
									createButton("btn10a", 10, 23, ()=>{
                    openInNewTab("https://startupiu.soic.indiana.edu")

									});
								});
							});
						});
					});

					//button 6k
					createButton("btn6k", 39, 50, ()=>{

						//button 7j
						createButton("btn7j", 32, 51, ()=>{

							//button
						});
					});
				});
			});
		});
	});

	//button 2b
	createButton("btn2b", 73, 90, ()=>{

		//button 3b
		createButton("btn3b", 83, 95, ()=>{

			//button 4b
			createButton("btn4b", 83, 92, ()=>{
        openInNewTab("https://www.arup.com/")
				//button
			});
		});

		//button 3d
		createButton("btn3d", 65, 90, ()=>{

			//button 4d
			createButton("btn4d", 65, 80, ()=>{

				//button
			});

			//button 4j
			createButton("btn4j", 55, 90, ()=>{

				//button 5j
				createButton("btn5j", 47, 91, ()=>{

					//button 6j
					createButton("btn6j", 40, 93, ()=>{

						//buttton 7b
						createButton("btn7b", 34, 94, ()=>{
              openInNewTab("http://rickandmorty.wikia.com/wiki/Rickipedia")
							//button
						});
					});
				});
			});
		});
	});
});

//button 1b
$('body').append("<button id='btn1b'/>")
$('#btn1b').css({"top":"75%","left":"25%"}).delay(1500).show().click(function () {
	new Audio('./click.mp3').play();
	this.remove(); $('#1b').fadeIn(500);

	//button 2c
	createButton("btn2c", 70, 25, ()=>{

		//button 3e
		createButton("btn3e", 85, 15, ()=>{

			//button 4f
			createButton("btn4f", 90, 5, ()=>{

				//button
			});

			//button 4i
			createButton("btn4i", 80, 16, ()=>{

				//button 5b
				createButton("btn5b", 70, 18, ()=>{

					//button 6a
					createButton("btn6a", 65, 18, ()=>{

						//button 7c
						createButton("btn7c", 60, 19, ()=>{
              openInNewTab("5SG_side.jpg")
							//button
						});
					});
				});
			});
		});

		//button 3g
		createButton("btn3g", 75, 35, ()=>{

			//button 4e
			createButton("btn4e", 75, 43, ()=>{

				//button 5d
				createButton("btn5d", 88, 35, ()=>{

					//button 6d
					createButton("btn6d", 83, 35, ()=>{

						//button 7g
						createButton("btn7g", 78, 37, ()=>{

							//button
						});
					});
				});

				//button 5f
				createButton("btn5f", 78, 52, ()=>{

					//button 6e
					createButton("btn6e", 57, 49, ()=>{

						//button 7i
						createButton("btn7i", 63, 48, ()=>{

							//button
						});
					});

					//button 6f
					createButton("btn6f", 85, 56, ()=>{

						//button 7l
						createButton("btn7l", 89, 51, ()=>{

							//button
						});

						//button 7m
						createButton("btn7m", 85, 65, ()=>{

							//button 8b
							createButton("btn8b", 90, 70, ()=>{

								//button 9b
								createButton("btn9b", 90, 75, ()=>{

									//button 10b
									createButton("btn10b", 90, 80, ()=>{
                    openInNewTab("IUB Map.pdf")

									});
								});
							});
						});
					});
				});

			});
			//button 4k
			createButton("btn4k", 43, 30, ()=>{

				//button 5c
				createButton("btn5c", 50, 30, ()=>{

					//button 6c
					createButton("btn6c", 57, 30, ()=>{

						//button 7e
						createButton("btn7e", 62, 31, ()=>{
              openInNewTab("breakthrough.png")
							//button
						});
					});
				});
			});
		});
	});

	//button 2d
	createButton("btn2d", 26, 10, ()=>{

		//button 3a
		createButton("btn3a", 15, 4, ()=>{

			//button 4a
			createButton("btn4a", 18, 5, ()=>{
        openInNewTab("https://www.tesla.com")
				//button
			});
		});

		//button 3c
		createButton("btn3c", 40, 10, ()=>{

			//button 4c
			createButton("btn4c", 30, 16, ()=>{

				//button
			});

			//button 4h
			createButton("btn4h", 43, 5, ()=>{

				//button 5a
				createButton("btn5a", 52, 5, ()=>{

					//button 6b
					createButton("btn6b", 58, 5, ()=>{

						//button 7a
						createButton("btn7a", 63, 4, ()=>{
              openInNewTab("Arduino SIK guide.pdf")
							//button
						});
					});
				});
			});
		});
	});
});
