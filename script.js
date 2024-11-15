var showhide = document.getElementById('button');
var skill = document.getElementById('Skill');
showhide.addEventListener('click', function () {
    if (skill.style.display === 'none') {
        skill.style.display = 'block';
    }
    else {
        skill.style.display = 'none';
    }
});
