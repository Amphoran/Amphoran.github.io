				let rotation1 = 0;
				function rotateImg1() 
				{
					rotation1 += 180; // add 90 degrees, you can change this as you want
					if (rotation1 === 360) 
					{ 
						// 360 means rotate back to 0
						rotation1 = 0;
					}
					document.querySelector(".exampleboxheadercursoricon1").style.transform = `rotate(${rotation1}deg)`;
				}
				let transitionIsHappening1 = false;
				$("#examplebutton1").click(function() 
				{
					if (transitionIsHappening1) return;
					transitionIsHappening1 = true;
					setTimeout(() => transitionIsHappening1 = false, 500);
					$("#examplecontent1").slideToggle(500);
					rotateImg1();
				});
				let rotation2 = 0;
				function rotateImg2() 
				{
					rotation2 += 180; // add 90 degrees, you can change this as you want
					if (rotation2 === 360) 
					{ 
						// 360 means rotate back to 0
						rotation2 = 0;
					}
					document.querySelector(".exampleboxheadercursoricon2").style.transform = `rotate(${rotation2}deg)`;
				}
				let transitionIsHappening2 = false;
				$("#examplebutton2").click(function() 
				{
					if (transitionIsHappening2) return;
					transitionIsHappening2 = true;
					setTimeout(() => transitionIsHappening2 = false, 500);
					$("#examplecontent2").slideToggle(500);
					rotateImg2();
				});
				let rotation3 = 0;
				function rotateImg3() 
				{
					rotation3 += 180; // add 90 degrees, you can change this as you want
					if (rotation3 === 360) 
					{ 
						// 360 means rotate back to 0
						rotation3 = 0;
					}
					document.querySelector(".exampleboxheadercursoricon3").style.transform = `rotate(${rotation3}deg)`;
				}
				let transitionIsHappening3 = false;
				$("#examplebutton3").click(function() 
				{
					if (transitionIsHappening3) return;
					transitionIsHappening3 = true;
					setTimeout(() => transitionIsHappening3 = false, 500);
					$("#examplecontent3").slideToggle(500);
					rotateImg3();
				});
				let rotation4 = 0;
				function rotateImg4() 
				{
					rotation4 += 180; // add 90 degrees, you can change this as you want
					if (rotation4 === 360) 
					{ 
						// 360 means rotate back to 0
						rotation4 = 0;
					}
					document.querySelector(".exampleboxheadercursoricon4").style.transform = `rotate(${rotation4}deg)`;
				}
				let transitionIsHappening4 = false;
				$("#examplebutton4").click(function() 
				{
					if (transitionIsHappening4) return;
					transitionIsHappening4 = true;
					setTimeout(() => transitionIsHappening4 = false, 500);
					$("#examplecontent4").slideToggle(500);
					rotateImg4();
				});
				let rotation5 = 0;
				function rotateImg5() 
				{
					rotation5 += 180; // add 90 degrees, you can change this as you want
					if (rotation5 === 360) 
					{ 
						// 360 means rotate back to 0
						rotation5 = 0;
					}
					document.querySelector(".exampleboxheadercursoricon5").style.transform = `rotate(${rotation5}deg)`;
				}
				let transitionIsHappening5 = false;
				$("#examplebutton5").click(function() 
				{
					if (transitionIsHappening5) return;
					transitionIsHappening5 = true;
					setTimeout(() => transitionIsHappening5 = false, 500);
					$("#examplecontent5").slideToggle(500);
					rotateImg5();
				});
				let rotation6 = 0;
				function rotateImg6() 
				{
					rotation6 += 180; // add 90 degrees, you can change this as you want
					if (rotation6 === 360) 
					{ 
						// 360 means rotate back to 0
						rotation6 = 0;
					}
					document.querySelector(".exampleboxheadercursoricon6").style.transform = `rotate(${rotation6}deg)`;
				}
				let transitionIsHappening6 = false;
				$("#examplebutton6").click(function() 
				{
					if (transitionIsHappening6) return;
					transitionIsHappening6 = true;
					setTimeout(() => transitionIsHappening6 = false, 500);
					$("#examplecontent6").slideToggle(500);
					rotateImg6();
				});