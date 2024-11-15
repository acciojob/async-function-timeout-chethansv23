//your JS code here. If required.

document.getElementById("btn").addEventListener("click", () => {
	
  const text = document.getElementById("text").value;
  const delay = document.getElementById("delay").value;
	
  const output = document.getElementById("output");
 
  setTimeout(()=> output.innerHTML = text, delay)

});
