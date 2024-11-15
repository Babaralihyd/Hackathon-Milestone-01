const showhide = document.getElementById ('button') as HTMLButtonElement 
const skill = document.getElementById('Skill') as HTMLElement


showhide.addEventListener('click', () =>{
    if(skill.style.display === 'none'){
        skill.style.display = 'block'

    }else{
        skill.style.display = 'none'
    }
}
);


