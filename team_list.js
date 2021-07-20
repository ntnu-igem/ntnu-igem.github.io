document.getElementById("motivation").innerHTML = "Sup world";
var index = 0;

const teamList = [{ name: "Adrian Thorsplass", study: "Msc. in Systems Biology, 4th Year", responsibilities: "Heme-approach, Lab on a Chip", motivation: "To build skills and experience with working as a team, while at the same time being part of something bigger that contributes to the world.", imgUrl: "Pictures/adrian.jpg" }, {
    name: "Andrea Stallvik", study: "Msc. in Systems Biology, 3rd Year", responsibilities: "Sponsors, SqR-approach", motivation: "Putting theory into practice by using synthetic biology to solve real-world problems, and meeting people around the world with a similar passion.", imgUrl: "Pictures/andrea.jpg"
},
{ name: "Anine H. Olafsen", study: "Msc. in Systems Biology, 4th Year", responsibilities: "Multimedia, SqR-approach", motivation: "I look forward to use my theoretical knowledge in innovative and multidisciplinary teamwork that has a practical application. I want to gain experience with working independently and to further develop my technical skills.", imgUrl: "Pictures/anine.jpg" }
    , { name: "Eline Wålen Østerhaug", study: "Msc. in Molecular Biology, 4th Year", responsibilities: "Heme-approach, Social Media", motivation: "To gain valuable experiences, develop new skills and put theory into practice while being part of a great team of dedicated students!", imgUrl: "Pictures/eline.jpg" },
{ name: "Elise Damlien", study: "Msc. in Molecular Biology, 4th Year", responsibilities: "Heme-approach", motivation: "Work with a multidisciplinary team, build friendships and gain new experiences while putting my theoretical knowledge into practice.", imgUrl: "Pictures/elise.jpg" },
{ name: "Fanny Olivia Johannessen Berstad", study: "Msc. in Industrial Mathematics, 3rd Year", responsibilities: "Wiki, multimedia, Lab on a Chip", motivation: "Be a part of the green revolution, contribute to sustainable food production, challenge myself to use theoretical knowlegde for more practical applications.", imgUrl: "Pictures/fanny.jpg" },
{ name: "Kristine Lippestad", study: "Msc. in Systems Biology, 4th Year", responsibilities: "SqR-approach, Social Media", motivation: "Work with a multidisciplinary team, build friendships and gain new experiences while putting my theoretical knowledge into practice.", imgUrl: "Pictures/kristine.jpg" },
{ name: "Leik Lima-Eriksen", study: "Msc. in Signal Processing and Communication, 5th Year", responsibilities: "Wiki, Multimedia, Lab on a Chip", motivation: "Contribute to technology promoting sustainability and animal welfare, use signal processing to solve real-world problems, and gain experience from working in a multidisciplinary team", imgUrl: "Pictures/leik.jpg" },
{ name: "Martin Eide Lien", study: "Msc. in Systems Biology, 5th Year", responsibilities: "SqR-approach, Multimedia, Lab on a Chip", motivation: "Beside the fact that iGEM is a unique opportunity to apply theory from molecular biology and create something completely new that has a real world application via synthetic biology, I also look forward to working with friends over the summer.", imgUrl: "Pictures/martin.jpg" },
{ name: "Tina Dahlgren", study: "Msc. in Biotechnology, 4th Year", responsibilities: "SqR-approach, Social Media", motivation: "Igem is a great opportunity to gain experience in several fields while building new friendships!", imgUrl: "Pictures/tina.jpg" },
{ name: "Victoria Nilsen Gjøvaag", study: "Msc. in Systems Biology, 4th Year", responsibilities: "Team Captain, Social Media", motivation: "To learn and develop new skills, build freiendships and contribute to a more sustainable world.", imgUrl: "Pictures/victoria.jpg" }];

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
    button.setAttribute("data-tooltip", member.name.split(" ")[ 0]) // Fist name

    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", "team_member_button_image");
    
    const img = document.createElement("img");
    img.setAttribute("src", member.imgUrl);
    imgContainer.appendChild(img)
    button.appendChild(imgContainer);

    button.onclick = () => {
        updateFields(i)
    };
    element.appendChild(button);

}

updateFields(index);