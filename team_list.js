document.getElementById("superpower").innerHTML = "Sup world";
var index = 0;

const teamList = [{
    name: "Adrian Thorsplass", study: "Msc. in Systems Biology, 4th Year", responsibilities: "Heme-approach, Lab on a Chip", superpower: "I would probably have chosen time travel, but to be more original, I'll go with time freezing. If you could freeze time you have practically infinite time on your exams, so no more anxiety watching the seconds tick. Also you'd be really good at dodgeball or something, I dunno.", imgUrl: "Pictures/adrian.jpg",
    funfact: "The fact that character actress Margo Martindale hasn't won an Oscar. It's more than Justified."
}, {
    name: "Andrea Stallvik", study: "Msc. in Systems Biology, 3rd Year", responsibilities: "Sponsors, SqR-approach", superpower: "Cloning, so I could be in many places at once!", imgUrl: "Pictures/andrea.jpg", funfact: "Did you know that you are more likely to die from eating shark, than being eaten by one?"
},
{ name: "Anine H. Olafsen", study: "Msc. in Systems Biology, 4th Year", responsibilities: "Multimedia, SqR-approach", superpower: "Teleportation, because I am always in a hurry.", imgUrl: "Pictures/anine.jpg", funfact: "It would take one hour to drive to space, if you only take distance into account." }
    , { name: "Eline Wålen Østerhaug", study: "Msc. in Molecular Biology, 4th Year", responsibilities: "Heme-approach, Social Media", superpower: "Flying, because transportation would be so much easier!", imgUrl: "Pictures/eline.jpg", funfact: "Dogs wag their tail differently depending on their mood. They wag to the right when they are happy and to the left when they are stressed." },
{ name: "Elise Damlien", study: "Msc. in Molecular Biology, 4th Year", responsibilities: "Heme-approach", superpower: "Teleportation, so I could travel all over the world!", imgUrl: "Pictures/elise.jpg", funfact: "Ketchup was once sold as a medicine." },
{ name: "Fanny Olivia Johannessen Berstad", study: "Msc. in Industrial Mathematics, 3rd Year", responsibilities: "Wiki, multimedia, Lab on a Chip", superpower: "Immortality, that way I could have infinite time to explore every little nook and cranny of wisdom that has ever existed.", imgUrl: "Pictures/fanny.jpg", funfact: "Sir Isaac Newton might be one of the brightest people to have ever lived on this planet, but he also stared at the sun for as long as he managed just to see what would happen. He had to lay in a dark room for a few days after that. I think about that alot when I do something profoundly stupid." },
{ name: "Kristine Lippestad", study: "Msc. in Systems Biology, 4th Year", responsibilities: "SqR-approach, Social Media", superpower: "Travel in time to see where the technological revolution will be in 200 years.", imgUrl: "Pictures/kristine.jpg", funfact: "It is impossible to sneeze with your eyes open." },
{ name: "Leik Lima-Eriksen", study: "Msc. in Signal Processing and Communication, 5th Year", responsibilities: "Wiki, Multimedia, Lab on a Chip", superpower: "Being able to fly! Hate being stuck in a traffic jam, plus you get a really nice view from above.", imgUrl: "Pictures/leik.jpg", funfact: "Dolphins sleep with one eye open so that they can be constantly on the lookout for predators." },
{ name: "Martin Eide Lien", study: "Msc. in Systems Biology, 5th Year", responsibilities: "SqR-approach, Multimedia, Lab on a Chip", superpower: "To be able to absorb everyone's superpower and take them for my own.", imgUrl: "Pictures/martin.jpg", funfact: "Two roman emperors are the reason why the year is divided into 12 months and not 10." },
{ name: "Tina Dahlgren", study: "Msc. in Biotechnology, 4th Year", responsibilities: "SqR-approach, Social Media", superpower: "My preferred  superpower is to be able to teleport", imgUrl: "Pictures/tina.jpg", funfact: "A human could swim through a blue whale's veins." },
{ name: "Victoria Nilsen Gjøvaag", study: "Msc. in Systems Biology, 4th Year", responsibilities: "Team Captain, Social Media", superpower: "Must be flying or teleportation - think of all the time saved on travelling", imgUrl: "Pictures/victoria.jpg", funfact: "In average, humans spend 80 000 hours working over a lifetime." }];

const updateFields = (newIndex) => {
    console.log({ newIndex })
    // Update all the fields with the info of teamList[index]:
    document.getElementById("name").innerHTML = teamList[newIndex].name;
    document.getElementById("study").innerHTML = teamList[newIndex].study;
    document.getElementById("responsibilities").innerHTML = teamList[newIndex].responsibilities;
    document.getElementById("superpower").innerHTML = teamList[newIndex].superpower;
    document.getElementById("funfact").innerHTML = teamList[newIndex].funfact;
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
    const i = parseInt(iString);
    const member = teamList[i];

    const element = document.getElementById("team_list");
    const button = document.createElement("button");
    button.setAttribute("class", "team_member_button");
    button.setAttribute("id", "member_button_" + i);
    button.setAttribute("data-tooltip", member.name.split(" ")[0]) // First name

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