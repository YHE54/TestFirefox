function Camic() {

}

Camic.prototype.open = function(path){
    browser.url('http://localhost:1337/camicroscope2/osdCamicroscope.php?tissueId=CMU-1-Small-Region');
};

module.exports = new Camic();
