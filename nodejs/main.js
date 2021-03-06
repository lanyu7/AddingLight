void function(){
    var output = '../js/modules/data',
        util = require('util'),
        path = require('path'),
        fs = require('fs'),
        html;

    //create dataList start
    var strArray = fs.readFileSync('./dataList.txt', {encoding: 'UTF-8'}).split(/\r?\n/),
        tmpl = '{name: "%s", en: "%s", alias: "%s", dis: %s, ref: "%s", pic: "%s"}',
        code = [],
        disMapping = {'28': 28, '29': 28,'30': 28,'31': 28,'32': 28,'33': 28,'34': 28,'35': 28,'36': 28,'37': 28,'38': 28,'39': 28,'40': 28,'41': 28,'42': 28,'43': 28},
        refMapping = {7: 'BPD', 8: 'HC', 9: 'AC', 10: 'FL', 13: 'TCD'},
        picMapping = {6: 'data-crl.png', 7: 'data-bpd.png', 8: 'data-hc.png', 9: 'data-ac.png', 10: 'data-fl.png', 12: 'data-ofd.png', 14: 'data-fhj.png'},
        count = 0,
        disValue;
    strArray.forEach(function(item, index){
        item = item.split(/\t/);
        if(disMapping[index]){
            disValue = disMapping[index];
            count >= disValue && (count = disValue + 1);
        }else{
            disValue = count++;
        }
        code.push(util.format(tmpl, item[0], item[1] || '', item[2] || '', disValue, refMapping[index] || '', picMapping[index] || ''));
    });
    //fs.writeFileSync(path.join(output, 'dataList.js'), util.format('define(function(require, exports, modules){\nexports.dataList = [%s];\n});', code.join(',\n')));
    //create dataList end

    //create discription start
    strArray = fs.readFileSync('./dis.txt', {encoding: 'UTF-8'}).split(/\r?\n/);
    tmpl = 'define(function(require, exports, modules){\n    exports.dis = \'%s\';\n});';
    strArray.forEach(function(item, index){
        //fs.writeFileSync(path.join(output, 'discription' + index + '.js'), util.format(tmpl, item));
    });
    //create discription end

    //create rrs start
    var fileName, rrs;
    tmpl = 'define(function(require, exports, modules){\n    exports.rrs = %s;\n});';
    for(var i = 0; i < 5; i++){
        strArray = fs.readFileSync('./rrs'+ i +'.txt', {encoding: 'UTF-8'}).split(/\r?\n/);
        fileName = 'rrs-' + strArray.shift().split(/\t+/)[1] + '.js';
        rrs = {
            captain: [],
            rows: []
        };
        rrs.captain = strArray.shift().split(/\t+/);
        rrs.captain.forEach(function(item, index){
            rrs.captain[index] = item.replace('（单位：cm）', '<br/>（单位：cm）');//单位换行
        });
        strArray.forEach(function(item, index){
            item = item.split(/[\s\t]+/);
            item[0] = item[0].match(/\d+/);//孕X周只取出数字
            rrs.rows.push(item);
        });
        //fs.writeFileSync(path.join(output, fileName), util.format(tmpl, JSON.stringify(rrs)));
    }
    /*
    captain: []
    rows: [[], []]
    */
    //create rrs end

    //create forecast start
    var table = {captain: [], rows: []};
    tmpl = 'define(function(require, exports, module){\n    exports.table = %s;\n});';
    strArray = fs.readFileSync('./forecast.txt', {encoding: 'UTF-8'}).split(/\r?\n/);
    table.captain = strArray.shift().split(/\t+/);
    strArray.forEach(function(item, index){
        item = item.split(/[\s\t]+/);
        item.forEach(function(value, key){
            value = value === '男' ? 'b' : (value === '女' ? 'g' : value);
            item[key] = value;
        });
        table.rows.push(item);
    });
    //fs.writeFileSync(path.join(output, 'forecastList.js'), util.format(tmpl, JSON.stringify(table)));
    //create forecast end

    //create gest
    var strArr, entity;
    tmpl = 'define(function(require, exports, module){\n    exports.gest = %s;\n});';
    strArray = fs.readFileSync('./gest.txt', {encoding: 'UTF-8'}).split(/\r?\n/);
    strArr = fs.readFileSync('./mother.txt', {encoding: 'UTF-8'}).split(/\r?\n/);
    strArray.forEach(function(item, index){
        entity = {};
        item = item.split(/\t+/);
        entity.babyMsg = item[1];
        item = strArr[index].split(/\t+/);
        entity.motherMsg = item[1];
        //fs.writeFileSync(path.join(output, 'gest' + index + '.js'), util.format(tmpl, JSON.stringify(entity)));
    });

    //create evaluation
    function accMul(arg1, arg2){//解决js乘法误差
        var m=0,s1=arg1.toString(),s2=arg2.toString();
        try{m+=s1.split(".")[1].length}catch(e){}
        try{m+=s2.split(".")[1].length}catch(e){}
        return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
    }
    tmpl = 'define(function(require, exports, module){\n    exports.evaluation = %s;\n});';
    //var evaluationList = ['bpd', 'hc', 'ac', 'fl', 'hl', 'ofd'];
    var mapping = {'bpd': [], 'hc': [], 'ac': [], 'fl': [], 'hl': [], 'ofd': []};
    Object.keys(mapping).forEach(function(val){
        var is = !!~'bpd,hc,ac,fl'.indexOf(val);
        strArray = fs.readFileSync('./evaluation-'+ val +'.txt', {encoding: 'UTF-8'}).split(/\r?\n/);
        strArray.forEach(function(item, index){
            if(index < 2){return;}//去掉头部
            item = item.split(/\t+/);
            entity = {min: parseFloat(item[1]), ave: parseFloat(item[2]), max: parseFloat(item[3])};
            if(is){
                entity.min = accMul(entity.min, 10);
                entity.ave = accMul(entity.ave, 10);
                entity.max = accMul(entity.max, 10);
            }
            mapping[val].push(entity);
        });
    });
    fs.writeFileSync(path.join(output, 'evaluation-mapping.js'), util.format(tmpl, JSON.stringify(mapping)));
}();