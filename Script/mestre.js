getData = async () => {
    try{
        let dataFetch =  await fetch("https://2-batatas-humanas.github.io/Html/market.html");
        let actualData = await dataFetch.json();
        console.log(actualData);
        let div = document.querySelector("#fetchSpace");
        let p = document.createElement("p");
        p.innerHTML = actualData;
        div.appendChild(p);
    } catch (err) {
        console.log(err);
    }
}
