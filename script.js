let potatoes = prompt("Hey mon ami ! Tu aimes ça les patates ?");
arrOui = ["oui", "yes", "oue", "ok"];
arrNon = ["non", "no", "nope"];
if (arrOui.includes(potatoes.toLowerCase())) {
    string = "";
    for (let i = 1; i < 8; i++) {
        string += "#";
        console.log(string);
    }
} else if (arrNon.includes(potatoes.toLowerCase())) {
    alert(":( *cry*");
} else {
    alert("Je vous sens comme tiraillé");
}