function Camic() {

}

Camic.prototype.open = function(path){
    browser.url('http://snake.bmi.emory.edu:1337/camicroscope/osdCamicroscope.php?tissueId=CMUz');
};

module.exports = new Camic();
