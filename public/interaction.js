
            var currResult;
            var numResult;
            var myObj;
           
            var quotes = [
                ["'So many books, so little time'","Frank Zappa"],
                ["'A room without books is like a body without a soul'","Marcus Tullis Cicero"],
                ["'I have always imagined that Paradise will be a kind of library'", "Jorge Luis Borges"],
                ["'Never trust anyone who has not brought a book with them'","Haruki Murakami, Norwegian Wood"],
                ["'Good friends, good books, and a sleepy conscience: this is the ideal life'","Mark Twain"],
                ["'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten'","Neil Gaiman, Coraline"],
                ["'There is no friend as loyal as a book'","Ernest Hemingway"],
                ["'Books are a uniquely portable magic'","Stephen King"],
                ["'Sleep is good, he said, and books are better'","George R. R. Martin"],
                ["'Think before you speak. Read before you think'","Fran Lebowitz"],
                ["'Books may well be the only true magic'","Alice Hoffman"],
                ["'Books are the mirrors of the soul'","Virginia Woolf"]
            
                   
            ];    
            
            
            function showResult(currResult, numResult, myObj, resultTable){
                resultTable.children[0].textContent = currResult+1 + "/" + numResult;
                resultTable.children[2].textContent = myObj[currResult].title;
                resultTable.children[4].textContent = myObj[currResult].author;
                resultTable.children[6].textContent = myObj[currResult].genre;
                resultTable.children[8].textContent = myObj[currResult].price+"€";
                resultTable.children[10].textContent = myObj[currResult].id;
                
                
            }
            



           
            
            window.onload = function(){
               
                var searchBtn = document.getElementById("Search");
                var addBtn = document.getElementById("Add");
                 var submitBtn = document.getElementById("submitBtn");
                var titleFld = document.getElementById("titleField");
                var authorFld = document.getElementById("authorField");
                var genreFld = document.getElementById("GenreField");
                var priceFld = document.getElementById("priceField");
                var mainBtn = document.getElementById("BookHub");  
                var notification = document.getElementById("notification");
                var loadingScreen = document.getElementById("loadingScreen");
            
                loadingScreen.style.backgroundColor = "rgba(0,0,0,0)";
                loadingScreen.style.opacity = "0";
                setTimeout(function(){
                    loadingScreen.remove()
                },1000);
                setTimeout(quoteTrans,3000);
                setInterval(quoteTrans, 10000);
                
                
                document.onclick = function(evt){
                    if(evt.target.id != 'searchBar'){
                            searchBar.classList.add("hide");
                    }
                }
                
                
                notification.onmouseover = function(){
                    if(this.style.visibility == "visible"){
                        this.style.opacity = "1";
                    }
                }
                
                notification.onmouseout = function(){
                    if(this.style.visibility == "visible"){
                        this.style.opacity = "0.7";
                    }
                }
                
        
                submitBtn.onclick = function(){
                    var tmp = genreFld.options[genreFld.selectedIndex].value;
                    
                    if(titleFld.value == ""){
                        notification.children[2].textContent = "Please add a title";     
                            notification.style.visibility = "visible";
                            notification.style.opacity = ".7";
                            
                            var timer = setTimeout(function(){
                                    
                            notification.style.visibility = "hidden";
                            notification.style.opacity = "0";                
                            
                            },3000);
                        return false;
                    }
                    
                    if(authorFld.value == ""){
                        notification.children[2].textContent = "Please add an author";     
                            notification.style.visibility = "visible";
                            notification.style.opacity = ".7";
                            
                            var timer = setTimeout(function(){
                                    
                            notification.style.visibility = "hidden";
                            notification.style.opacity = "0";                
                            
                            },3000);
                        return false;
                    }
                    
                    
                    
                    if(tmp.localeCompare("Choose Here")==0){
                        
                            notification.children[2].textContent = "Please Choose a Genre";     
                            notification.style.visibility = "visible";
                            notification.style.opacity = ".7";
                            
                            var timer = setTimeout(function(){
                                    
                            notification.style.visibility = "hidden";
                            notification.style.opacity = "0";                
                            
                            },3000);
                        
                        return false;
                    }
                    
                    
                    if(isNaN(priceFld.value) || priceFld.value == ""){
                        notification.children[2].textContent = "Please enter a valid price";     
                            notification.style.visibility = "visible";
                            notification.style.opacity = ".7";
                            
                            var timer = setTimeout(function(){
                                    
                            notification.style.visibility = "hidden";
                            notification.style.opacity = "0";                
                            
                            },3000);
                        return false;
                    }
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    this.preventDefault;
                    
                    var http = new XMLHttpRequest();
		    if("withCredentials" in http){
		   	http.open("POST","",true);
		    }else if(typeof XDomainRequest != "undefined"){
		    	http = new XDomainRequest();
			http.open("POST","",true);
		    
		    }
                   
                    
                    http.onreadystatechange = function(){
                          var notification = document.getElementById("notification");
                        if(http.readyState === 4 && http.status === 200){
                    
                                notification.children[2].textContent = http.response;   
                            
                                notification.style.visibility = "visible";
                                notification.style.opacity = ".7";
                            
                                var timer = setTimeout(function(){
                                    
                                    notification.style.visibility = "hidden";
                                    notification.style.opacity = "0";
                                    
                                    
                                    
                                },5000);
                                
                            
                        }
                    }
                    
                    
                    
                    http.setRequestHeader('Content-Type','application/json');
                    
                   
                    
                    
                    var message = JSON.stringify({
                        "title": titleFld.value,
                        "author": authorFld.value,
                        "genre": genreFld.options[genreFld.selectedIndex].value,
                        "price": priceFld.value
                    })
                    
                   
                    http.send(message);
                                 
                    
                    return false;
                          
                }
                
                
              
                
                
                searchBtn.onclick = function(){
                    
                    var mainPage = document.getElementById("mainBody");
                    var searchPage = document.getElementById("searchPage");
                    var addPage = document.getElementById("addPage");
                  
                    
                    document.getElementById("secondImg").style.opacity = "1";
                    document.getElementById("firstImg").style.opacity = "0";
                    document.getElementById("thirdImg").style.opacity = "0";
                    
                    mainPage.style.opacity = "0";
                    addPage.style.opacity = "0";
                    
                    setTimeout(function(){
                        mainPage.style.visibility = "hidden";
                        addPage.style.visibility = "hidden";
                    },1500);
                    searchPage.style.visibility = "visible";
                    searchPage.style.opacity = "1";
                    
                    
                }
                
               
                
                
                addBtn.onclick = function(){
                    
                    var mainPage = document.getElementById("mainBody");
                    var searchPage = document.getElementById("searchPage");
                    var addPage = document.getElementById("addPage");
                
                    document.getElementById("thirdImg").style.opacity = "1";
                    document.getElementById("firstImg").style.opacity = "0";
                    document.getElementById("secondImg").style.opacity = "0";
                    
                
                    searchPage.style.opacity = "0";
                    mainPage.style.opacity = "0";
                    setTimeout(function(){
                        searchPage.style.visibility = "hidden";
                        mainPage.style.visibility = "hidden";
                    },1500);
                    addPage.style.visibility = "visible";
                    addPage.style.opacity = "1";
                    
                    
                    
                }
                
                
                
                
                
                
                mainBtn.onclick = function(){
                    
                    var mainPage = document.getElementById("mainBody");
                    var searchPage = document.getElementById("searchPage");
                    var addPage = document.getElementById("addPage");
                 
                    document.getElementById("firstImg").style.opacity = "1";
                    document.getElementById("thirdImg").style.opacity = "0";
                    document.getElementById("secondImg").style.opacity = "0";
                    
                
                    searchPage.style.opacity = "0";
                    addPage.style.opacity = "0";
                    setTimeout(function(){
                        searchPage.style.visibility = "hidden";
                        addPage.style.visibility = "hidden";
                    },1500);
                    mainPage.style.visibility = "visible";
                    mainPage.style.opacity = "1";
                    
                    
                    
                }
                
                
                
                
               
                var previousBtn = document.getElementById("previousNav");
                var nextBtn = document.getElementById("nextNav");
                
                
                
                
                
                    previousBtn.onclick = function(){
                    var tmp = currResult;
                    var resultArea = document.getElementById("results");
                    currResult -= 1;
                    
                    if(currResult==0){
                        previousBtn.style.visibility = "hidden";
                        previousBtn.style.opacity = "0";
                    }
                    if(tmp==numResult-1){
                        nextBtn.style.visibility = "visible";
                        nextBtn.style.opacity = "1";
                    }
                    this.style.backgroundColor = "rgba(255,255,255,1)";
                    showResult(currResult,numResult,myObj,resultArea);
                        
                    setTimeout(function(){
                        previousBtn.style.backgroundColor = "rgba(255,255,255,.7)"
                    },100);
                }
                
                
                
                
                
               nextBtn.onclick = function(){
                    this.style.backgroundColor = "rgba(255,255,255,1)";
                   
                   
                   var tmp = currResult;
                   var resultArea = document.getElementById("results");
                    currResult += 1;
             
                   if(currResult == numResult-1){
                       nextBtn.style.visibility = "hidden";
                        nextBtn.style.opacity = "0";
                   }
                   if(tmp == 0){
                        previousBtn.style.visibility = "visible";
                        previousBtn.style.opacity = "1";
                   }
                    showResult(currResult,numResult,myObj,resultArea);
                   
                    setTimeout(function(){
                        nextBtn.style.backgroundColor = "rgba(255,255,255,.7)"
                    },100);
                }
                
                
               
               
               
                
                var searchBar = document.getElementById("searchBar");
                searchBar.addEventListener("keydown", function(e){
                    if(e.keyCode === 13){
                        var previousBtn = document.getElementById("previousNav");
                        var nextBtn = document.getElementById("nextNav");
                        var resultArea = document.getElementById("results");
                      
                        
			var http = new XMLHttpRequest();
                       
			if("withCredentials" in http){	
		     		http.open("GET","" + searchBar.value);
			}else if (typeof XDomainRequest != "undefined"){	
			       	http =  new XDomainRequest();
	                        http.open("GET","" + searchBar.value);
			}												                             
			     
                    
                        
                        
                        http.onreadystatechange = function(){
				nextBtn.style.opacity = "0";
				nextBtn.style.visibility = "hidden";
				previousBtn.style.opacity = "1";
				previousBtn.style.visibility = "hidden";
				resultArea.style.opacity = "0";
				resultArea.style.visibility ="hidden";
				
                        if (this.readyState == 4 && this.status == 200) {
                            var result = document.getElementById("results");
                            myObj = JSON.parse(this.responseText);
                            numResult = myObj.length;
                            currResult = 0;
                            if(numResult > 1){
                                searchBar.classList.add("hide");
                               
                                nextBtn.style.opacity = "1";
                       
                                nextBtn.style.visibility = "visible";
                           	 resultArea.style.opacity = "1";
                           	 resultArea.style.visibility = "visible";  
			   	 showResult(currResult,numResult,myObj,result);
                    
			    }else if(numResult == 1){
                    searchBar.classList.add("hide");
				resultArea.style.visibility = "visible";
				resultArea.style.opacity = "1";
				showResult(currResult,numResult,myObj,result);
			    
			    
			    }else{
				notification.children[2].textContent = "There are no books matching your criteria";
				notification.style.visibility = "visible";
				notification.style.opacity = ".7";
				var timer = setTimeout(function(){
					
					notification.style.opacity = "0";
					notification.style.visibility = "hidden";
				},3000);
			}	    
                               
                            
                            
                              }
                        }
                        
                        
                        
                    
                        http.setRequestHeader('Content-Type','application/json'); 
                        
                        http.send(null);
                        
                        
                        
                        
                        
                            
                    }                           
                                           
                });
                
                searchBar.onmouseover = function(){
                    
                    this.classList.remove("hide");
              
                }
                
               
                
                
            }
            
            
            
            
            function quoteTrans(){
                var tmp,tmp2,i,rand;
                var d = document.getElementById("quotes");
                var c = document.getElementById("creator");
                tmp = d.innerHTML;
                d.classList.add("disappear");
                c.classList.add("disappear");
                setTimeout(function(){
                    
                    
                    rand = Math.floor(Math.random()*12);
                    tmp2 = quotes[rand];
                    
                    for(i=0;i<quotes.length;i++){
                        if(tmp.localeCompare(tmp2)==0){
                            rand = Math.floor(Math.random()*12);
                            tmp2 = quotes[rand];
                        }
                        d.innerHTML = tmp2[0,0];
                        c.innerHTML = tmp2[0,1];
                    }
                    
                    
                    
                    
                },1000);
                setTimeout(function(){
                    d.classList.remove("disappear");
                    c.classList.remove("disappear");
                },3000);
                
                
            }
        
     