
function donate(){
	wrapper = document.getElementById("donatewrapper")
	$("#donatewrapper").fadeIn("fast");
	wrapper.style.display = "flex";
}


$('#signupForm').submit(function (e) {
	e.preventDefault();
	    $.ajax({
        // url:'/login',
        url:'/register',
        type:'post',
				csrfmiddlewaretoken: '{{ csrf_token }}',
        data:$('#signupForm').serialize(),
        success:function(data){
					console.log(data)
					window.location.href=window.location.href;
        }
    });
});

$('#loginForm').submit(function (e) {
	e.preventDefault();
	    $.ajax({
        // url:'/login',
        url:'/login',
        type:'post',
				csrfmiddlewaretoken: '{{ csrf_token }}',
        data:$('#loginForm').serialize(),
        success:function(data){
					console.log(data);
					if (data == "fail"){

					}else{
						window.location.href=window.location.href;
					}
        }
    });
});
$('#logoutForm').submit(function (e) { e.preventDefault();
	    $.ajax({
        // url:'/login',
        url:'/logout',
        type:'post',
				csrfmiddlewaretoken: '{{ csrf_token }}',
        success:function(data){
					console.log(data);
					window.location.reload(true);
        }
    });
});

function setHomeText(object, content){
	if(content == "DONATE"){
		object.onclick = () => {$("#donatewrapper").fadeIn("fast");$("#donatewrapper")[0].style.display = "flex";}
	}else{
		dick = {
			'ABOUT':'about',
			'CONTACT':'contact',
			'PROJECTS':'stuff'
		}
		if(dick[content] != undefined){
			object.onclick = () => {window.location.href = '/'+dick[content]};
		}
	}
	object.innerHTML = content;
}

function mouseOutText(object, content){
	object.innerHTML = content;
}


