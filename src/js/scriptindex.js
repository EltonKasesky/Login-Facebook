const titleH1 = document.getElementById('title_facebook');

const toLowerCaseTitle = () => {
    titleH1.textContent = titleH1.textContent.toLowerCase();
}

document.addEventListener('DOMContentLoaded', () => {
    toLowerCaseTitle();
})