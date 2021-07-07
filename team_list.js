document.getElementById("motivation").innerHTML = "Sup world";
var index = 0;

const teamList = [{ name: "Vic", study: "Biotechnology - Systems Biology", responsibilities: "Team Captain", motivation: "power", imgUrl: "Pictures/victoria.jpg" }, {
    name: "Andrea", study: "Biotechnology", responsibilities: "Sponsors", motivation: "money", imgUrl: "Pictures/andrea.jpg"
}]

const updateFields = (index) => {
    // Update all the fields with the info of teamList[index]:
    document.getElementById("study").innerHTML = teamList[index].study;
    document.getElementById("responsibilities").innerHTML = teamList[index].responsibilities;
    document.getElementById("motivation").innerHTML = teamList[index].motivation;
    document.getElementById("name_pic").setAttribute("src", teamList[index].imgUrl);
}

updateFields(index);

document.getElementById("button_prev").onclick = () => {
    console.log("hehe");

    if (index <= 0) return;

    index--;
    updateFields(index);
}

document.getElementById("button_next").onclick = () => {
    console.log("hehe");

    if (index >= (teamList.length - 1)) return;

    index++;
    updateFields(index);
}

