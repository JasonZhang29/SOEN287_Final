function selectCountry() {
    let sel = document.getElementById("countryList");
    let country = sel.value
    if (country == 'Canada') {
        let imgCountry = document.getElementById("countryFlag");
        imgCountry.src = "/static/Canada.jpg";
        let lnkCountry = document.getElementById("countryLink");
        lnkCountry.href = "https://www.google.com/maps/place/Canada";
    }
    if (country == 'Brazil') {
        let imgCountry = document.getElementById("countryFlag");
        imgCountry.src = "/static/Brazil.jpg";
        let lnkCountry = document.getElementById("countryLink");
        lnkCountry.href = "https://www.google.com/maps/place/Brazil";
    }
    if (country == 'United Kingdom') {
        let imgCountry = document.getElementById("countryFlag");
        imgCountry.src = "/static/UK.jpg";
        let lnkCountry = document.getElementById("countryLink");
        lnkCountry.href = "https://www.google.com/maps/place/UK";
    }
    if (country == 'China') {
        let imgCountry = document.getElementById("countryFlag");
        imgCountry.src = "/static/China.jpg";
        let lnkCountry = document.getElementById("countryLink");
        lnkCountry.href = "https://www.google.com/maps/place/China";
    }
    if (country == 'Thailand') {
        let imgCountry = document.getElementById("countryFlag");
        imgCountry.src = "/static/Thailand.jpg";
        let lnkCountry = document.getElementById("countryLink");
        lnkCountry.href = "https://www.google.com/maps/place/Thailand";
    }
}

function validatePostalCode() {
    let input = document.getElementById("postalCode");
    let sel = document.getElementById("countryList");
    let country = sel.value;
    let postalCode = input.value;
    if (country == "Canada") {
        if(validate(postalCode,'CA')) {
            input.value = postalCode.toUpperCase();
            alert('Right format!');
        } else {
            alert('Wrong format! ' + postalCode);
        }
    }
    if (country == "China") {
        if(validate(postalCode,'CN')) {
            //input.value = postalCode.toUpperCase();
            alert('Right format!');
        } else {
            alert('Wrong format! ' + postalCode);
        }
    }
    if (country == "Thailand") {
        if(validate(postalCode,'TH')) {
            //input.value = postalCode.toUpperCase();
            alert('Right format!');
        } else {
            alert('Wrong format! ' + postalCode);
        }
    }
    if (country == "United Kingdom") {
        if(validate(postalCode,'UK')) {
            input.value = postalCode.toUpperCase();
            alert('Right format!');
        } else {
            alert('Wrong format! ' + postalCode);
        }
    }
    if (country == "Brazil") {
        if(validate(postalCode,'BR')) {
            //input.value = postalCode.toUpperCase();
            alert('Right format!');
        } else {
            alert('Wrong format! ' + postalCode);
        }
    }
}
function validate(postalCode, countryCode) {
    if (countryCode == "BR") {
        let pattern = /^[0-9]{8}$/;
        return pattern.test(postalCode);
    }
    if (countryCode == "CA") {
        let pattern = /^[a-z][0-9][a-z] [0-9][a-z][0-9]$/i;
        return pattern.test(postalCode);
    }
    if (countryCode == "CN") {
        let pattern = /^[0-9]{6}$/;
        return pattern.test(postalCode);
    }
    //let pattern = /^((([a-z]{2})|([a-z]))(([0-9]{2})|([0-9]{3}))[a-z]{2})|(([a-z]|[a-z]{2})[0-9][a-z][0-9][a-z]{2})$/
    if (countryCode == "UK") {
        let pattern = new RegExp('^(([a-z]{2}|[a-z])([0-9]{2}|[0-9]{3})[a-z]{2})'
            + '|(([a-z]|[a-z]{2})[0-9][a-z][0-9][a-z]{2})$', "i");
        return pattern.test(postalCode);
    }
    if (countryCode = "TH") {
        let pattern = /^[0-9]{5}$/;
        return pattern.test(postalCode);
    }
}