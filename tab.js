let tabHeader = document.querySelectorAll('.tabHeader');


tabHeader.forEach((button) => {
    button.onclick = changeTabHeader;
});

function changeTabHeader(){
    //console.log('click');
    let tabNumber = parseInt(this.dataset.tab);
    //console.log(tabNumber);

    document.querySelector('.active-tab').classList.remove('active-tab');
    this.classList.add('active-tab');

    switch(tabNumber){
        case 1:
            changeTabSection(tabNumber);
            break;
        case 2:
            changeTabSection(tabNumber);
            break;
        case 3:
            changeTabSection(tabNumber);
            break;
        case 4:
            changeTabSection(tabNumber);
            break;
        case 5:
            changeTabSection(tabNumber);
            break;
        case 6:
            changeTabSection(tabNumber);
            break;
        case 7:
            changeTabSection(tabNumber);
            break;
        case 8:
            changeTabSection(tabNumber);
            break;
        case 9:
            changeTabSection(tabNumber);
            break;
        default: 
        break
    }
}

function changeTabSection(tabNumber){
    let currentTab = document.querySelector('.show-tab');
    currentTab.classList.remove('show-tab');
    currentTab.classList.add('hide-tab');


    let NewSection = document.getElementById('tabsection-' + tabNumber);
    
    NewSection.classList.remove('hide-tab');
    NewSection.classList.add('show-tab');
}
