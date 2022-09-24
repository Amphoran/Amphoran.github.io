/* from https://sebhastian.com/javascript-rotate-images/ */
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
				$("#examplebutton1").click(function()
				{
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
				$("#examplebutton2").click(function()
				{
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
				$("#examplebutton3").click(function()
				{
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
				$("#examplebutton4").click(function()
				{
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
				$("#examplebutton5").click(function()
				{
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
				$("#examplebutton6").click(function()
				{
					$("#examplecontent6").slideToggle(500);
					rotateImg6();
					
					
				});