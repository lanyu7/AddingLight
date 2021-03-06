define(function(require, exports, module){
    var $ = require('./libs/zepto.min'),
        Mustache = require('mustache'),
        util = require('util').util,
        progress = require('EvaluativeProgress'),
        data = util.parseQueryString(location.search),
        keys = {bpd: '双顶径', hc: '头围', ac: '腹围', fl: '股骨长', hl: '肱骨长', ofd: '枕额径'},
        mapping = require('data/evaluation-mapping').evaluation,
        Mustache = require('mustache'),
        tmpl = '<div class="desc">{{key}}：<span class="red">{{status}}</span></div><div class="progress"></div>',
        ul, keys;
    delete data['from'];
    function analyse(val, def){
        var dis = def.max - def.min;
        if(val < def.min){return '偏小';}
        if(val > def.max){return '偏大';}
        if(val < def.min + dis * .3){return '正常偏小';}// < 30%
        if(val > def.min + dis * .7){return '正常偏大';}// > 70%
        return '标准';
    }
    //加入超级链接
    $('.evalret_main').append(require('hyperlink').html);
    var foet = $('.evalret_main .re-foet');
    foet.prop('href', foet.attr('href') + '&week='+ data.week +'&day='+ data.day +'&bpd='+ data.bpd +'&ac='+ data.ac +'&fl=' + data.fl);
    //更改返回评测链接
    $('.evalret_main .count').prop('href', 'evaluation.html?from=evalret&' + $.param(data));
    //解除loading
    $('.evalret_mark').hide();
    if(!data.week){return;}//如果不存在孕周，下面就不用再算了
    //记录日志
    require('log').send($.extend({p: 'evalret'}, data));
    //
    ul = $('<ul></ul>').insertBefore('.evalret_main .count').addClass('retlist');
    $('<div></div>').insertBefore('.evalret_main .count')
        .addClass('ref').html('以上结果仅供参考');
    $('<li></li>').appendTo(ul).html('孕周：'+ data.week +'周'+ data.day +'天');
    //
    var week = Math.min(Math.ceil(parseFloat(data.week + '.' + data.day)), 40),//最大40周
        item, entity;
    $.each(data, function(key, val){
        if(!val || !keys[key]){return;}
        entity = mapping[key][week - 13];
        item = $('<li>'+ Mustache.render(tmpl, {
            key: keys[key],
            status: analyse(val, entity)
        }) +'</li>');
        ul.append(item);
        //生成progress
        progress.getInstance(item.find('.progress'), {
            range: [entity.min, entity.max],
            value: val,
            average: entity.ave
        });
    });
});