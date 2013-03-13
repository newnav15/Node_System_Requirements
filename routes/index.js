
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Application To Obtain System Requirements' });
};


var os = require('os')
  , fs = require('fs')
  , mycache = require('memory-cache');

exports.getInfo = function (req, res) {
    var sysInfo = {
        'NodeVersion': process.version,
        'Platform': os.platform(),
        'Host': os.hostname(),
        'Path': process.execPath
    };

    var modules = {};
    var packageDotJsonObject = JSON.parse(fs.readFileSync(mycache.get("rootFolder") + "/package.json"));
    for (var xModule in packageDotJsonObject.dependencies) {
        modules[xModule] = packageDotJsonObject.dependencies[xModule];
    }

    res.render('sysinfo', {title: 'System Information', "sysInfo": sysInfo, "modules": modules });
};
