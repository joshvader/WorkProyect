const d = document;

export defualt function draw(selector){
    const getWinner = (selector)=> {
    const players =d.querySelectorAll(selector)
    }

    d.addAEventListerner("click", e=> {
        if(e.target.matches(btn)){
            let result = getWinner(selector;
                console.log(result);
        }
    });
}