function volume_sphere(e) {
	e.preventDefault();
	
	btn.addEventListener("click", ()=>{

		const radius = rad.value;

		if(isNaN(radius) || radius <0){
			vol.value = "NaN";
			return;
		}

		 const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
		
		 vol.value = volume.toFixed(4);
	})
	
	  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
const rad = document.querySelector("#radius");
const vol = document.querySelector("#volume");
const btn = document.querySelector("#submit");