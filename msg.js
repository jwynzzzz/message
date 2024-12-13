function greetUser() {
    var name = document.getElementById("name").value;
    
    if (name.trim() !== "") {
        alert("Hello " + name + "! I just wanted to express my gratitudes for the dedication and support this semester. Initially, I was intimidated, but as time went on, I realized that you're just pushing us to be best versions of ourselves. I really appreciate everything, especially the constructive criticisms, which helped me improve and strive for the better.");
    } else {
        alert("Please enter your name.");
    }
}
