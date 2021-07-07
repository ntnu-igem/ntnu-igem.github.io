document.getElementById("motivation").innerHTML = "Sup world";
var index = 0;

const teamList = [{ name: "Vic", study: "Biotechnology - Systems Biology", responsibilities: "Team Captain", motivation: "power", imgUrl: "Pictures/victoria.jpg" }, {
    name: "Andrea", study: "Biotechnology", responsibilities: "Sponsors", motivation: "money", imgUrl: "Pictures/andrea.jpg"
}]

const updateFields = (newIndex) => {
    console.log({ newIndex })
    // Update all the fields with the info of teamList[index]:
    document.getElementById("name").innerHTML = teamList[newIndex].name;
    document.getElementById("study").innerHTML = teamList[newIndex].study;
    document.getElementById("responsibilities").innerHTML = teamList[newIndex].responsibilities;
    document.getElementById("motivation").innerHTML = teamList[newIndex].motivation;
    document.getElementById("name_pic").setAttribute("src", teamList[newIndex].imgUrl);

    //Remove and add classes to active and unactive buttons
    document.getElementById("member_button_" + index).setAttribute("class", "team_member_button");
    document.getElementById("member_button_" + newIndex).setAttribute("class", "team_member_button team_member_button_active");
    index = newIndex;

}

document.getElementById("button_prev").onclick = () => {
    console.log("hehe");

    if (index <= 0) return;

    updateFields(index - 1);
}

document.getElementById("button_next").onclick = () => {
    console.log("hehe");

    if (index >= (teamList.length - 1)) return;

    updateFields(index + 1);
}


for (const iString in teamList) {
    const i = parseInt(iString) // JS = Ugly 
    const member = teamList[i];

    const element = document.getElementById("team_list");
    const button = document.createElement("button");

    button.setAttribute("class", "team_member_button");
    button.setAttribute("id", "member_button_" + i);
    const img = document.createElement("img");

    img.setAttribute("src", member.imgUrl);

    button.appendChild(img);

    button.onclick = () => {
        updateFields(i)
    };
    element.appendChild(button);

}

updateFields(index);