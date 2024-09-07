"use strict";
const toggleSkillsBtn = document.getElementById("toggle-skills-btn");
const skillsList = document.getElementById("skills-list");
toggleSkillsBtn.addEventListener("click", () => {
    if (skillsList.style.display === "none") {
        skillsList.style.display = "block";
        toggleSkillsBtn.innerHTML = "Hide Skills";
    }
    else {
        skillsList.style.display = "none";
        toggleSkillsBtn.innerHTML = "Show Skills";
    }
});
