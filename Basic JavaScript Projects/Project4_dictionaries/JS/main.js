function myDictionary() {
    var US_City = {
        State:"Utah",
        City:"Salt Lake City",
        Elevation:4226,
        Population:197756,
    };
    delete US_City.State
    document.getElementById("Dictionary").innerHTML = US_City.State;
}