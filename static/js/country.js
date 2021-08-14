const countries = {
    ar:'Argentina', au:'Australia', br:'Brazil',
    ca:'Canada', cn:'China', fr:'France',
    gr:'Greece', in:'India', id:'Indonesia',
    il:'Israel', it:'Italy', jp:'Japan',
    nl:'Netherland', nz:'New Zealand', gb:'United Kingdom',
    sa:'Saudi Arabia', sg:'Singapore', za:'South Africa',
    kr:'South Korea', se:'Sweden', ae:'UAE',
    us:'United States',
};
const countriesArr = Object.entries(countries);

countriesArr.forEach(country => {
    const [code, name] = country;
    c_button = document.createElement("button");
    c_button.type="button";
    c_button.className = "btn btn-primary m-2 country-btn";
    c_btn_text = document.createTextNode(name);
    c_button.appendChild(c_btn_text);
    c_button.setAttribute("data-code", code);
    country_container = document.getElementById('country');
    country_container.getElementsByClassName("container")[0].appendChild(c_button);
})