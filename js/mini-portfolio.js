var miniPortfolio = [
    {
        path: "assets/images/image_miniPortfolio1.png",
        alt: "image_portfolio_1.png",
        link: "",
        text: "Link 1",
    },
    {
        path: "assets/images/image_miniPortfolio2.png",
        alt: "image_portfolio_2.png",
        link: "",
        text: "Link 2",
    },
    {
        path: "assets/images/image_miniPortfolio3.png",
        alt: "image_portfolio_3.png",
        link: "",
        text: "Link 3",
    },
    {
        path: "assets/images/image_miniPortfolio4.png",
        alt: "image_portfolio_4.png",
        link: "",
        text: "Link 4",
    },
    
];

const getMiniPortfolio = (elMiniPortfolio) => {
    miniPortfolio.forEach(function(item){
        elMiniPortfolio.insertAdjacentHTML("beforeend",
            `
            <div class="link-wrapper">
                <div style="background-image: url(${item.path});" class="icon-portfolio"></div>                        
                <a href="${item.link}" class="link-portfolio">${item.text}</a>
            </div>
            `
        )
    });
}

$(document).ready(function(){
    var elMiniPortfolio = document.getElementById("links-portfolio");
    getMiniPortfolio(elMiniPortfolio)
});