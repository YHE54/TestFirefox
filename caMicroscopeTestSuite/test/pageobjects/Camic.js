function Camic() {

}

Camic.prototype.open = function(path){
    browser.url('http://localhost:1337/camicroscope2/osdCamicroscope.php?tissueId=CMU1');
};

module.exports = new Camic();
