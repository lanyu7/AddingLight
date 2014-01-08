define(function(require, exports, module){
    exports.dataMapping = {
         '0': {pk:  '0', name: '胎囊',             alias: '孕囊',                          en: 'GS',   dis: 0, ref: '', pic: ''},
         '1': {pk:  '1', name: '胎芽',             alias: '',                             en: 'FE',   dis: 1, ref: '', pic: ''},
         '2': {pk:  '2', name: '胎头',             alias: '',                             en: 'FH',   dis: 2, ref: '', pic: ''},
         '3': {pk:  '3', name: '头臀长',           alias: '',                             en: 'CRL',  dis: 3, ref: '', pic: ''},
         '4': {pk:  '4', name: '胎儿颈项透明层厚度',  alias: '',                             en: 'NT',   dis: 4, ref: '', pic: ''},
         '5': {pk:  '5', name: '胎心',             alias: '',                             en: 'H',    dis: 5, ref: '', pic: ''},
         '6': {pk:  '6', name: '胎动',             alias: '',                             en: 'FM',   dis: 6, ref: '', pic: ''},
         '7': {pk:  '7', name: '双顶径',           alias: '',                             en: 'BPD',  dis: 7, ref: '', pic: ''},
         '8': {pk:  '8', name: '头围',             alias: '',                             en: 'HC',   dis: 8, ref: '', pic: ''},
         '9': {pk:  '9', name: '腹围',             alias: '',                             en: 'AC',   dis: 9, ref: '', pic: ''},
        '10': {pk: '10', name: '股骨长',           alias: '',                             en: 'FL',   dis: 10, ref: '', pic: ''},
        '11': {pk: '11', name: '小脑横径',          alias: '',                             en: 'TCD',  dis: 11, ref: '', pic: ''},
        '12': {pk: '12', name: '羊水深度',          alias: '最大羊水深度',                   en: 'AFV',  dis: 12, ref: '', pic: ''},
        '13': {pk: '13', name: '宫颈长度',          alias: '',                             en: '',     dis: 13, ref: '', pic: ''},
        '14': {pk: '14', name: '胎儿体重',          alias: '',                             en: 'EFW',  dis: 14, ref: '', pic: ''},
        '15': {pk: '15', name: '羊水指数',          alias: '',                             en: 'AFI',  dis: 15, ref: '', pic: ''},
        '16': {pk: '16', name: '脐动脉血流值',       alias: '脐动脉、脐动脉值',                en: 'S/D',  dis: 16, ref: '', pic: ''},
        '17': {pk: '17', name: '阻力指数',          alias: '',                             en: 'RI',   dis: 17, ref: '', pic: ''},
        '18': {pk: '18', name: '搏动指数',          alias: '',                             en: 'PI',   dis: 18, ref: '', pic: ''},
        '19': {pk: '19', name: '胎盘',             alias: '',                             en: 'PL',   dis: 19, ref: '', pic: ''},
        '20': {pk: '20', name: '胎盘位置',          alias: '前壁，后壁，侧壁，前置胎盘、胎盘前置', en: '',     dis: 20, ref: '', pic: ''},
        '21': {pk: '11', name: '胎盘分级',          alias: '胎盘成熟度',                     en: 'GP',   dis: 21, ref: '', pic: ''},
        '22': {pk: '12', name: '脊椎',             alias: '脊柱',                          en: 'SP',    dis: 22, ref: '', pic: ''},
        '23': {pk: '13', name: '左枕前',           alias: '胎位',                          en: 'LOA',   dis: 23, ref: '', pic: ''},
        '24': {pk: '14', name: '左枕横',           alias: '',                              en: 'LOT',  dis: 23, ref: '', pic: ''},
        '25': {pk: '15', name: '左枕后',           alias: '',                              en: 'LOP',  dis: 23, ref: '', pic: ''},
        '26': {pk: '16', name: '右枕前',           alias: '',                              en: 'ROA',  dis: 23, ref: '', pic: ''},
        '27': {pk: '17', name: '右枕横',           alias: '',                              en: 'ROT',  dis: 23, ref: '', pic: ''},
        '28': {pk: '18', name: '右枕后',           alias: '',                              en: 'ROP',  dis: 23, ref: '', pic: ''},
        '29': {pk: '19', name: '左骶前',           alias: '',                              en: 'LSA',  dis: 23, ref: '', pic: ''},
        '30': {pk: '20', name: '左骶横',           alias: '',                              en: 'LST',  dis: 23, ref: '', pic: ''},
        '31': {pk: '11', name: '左骶后',           alias: '',                              en: 'LSP',  dis: 23, ref: '', pic: ''},
        '32': {pk: '12', name: '右骶横',           alias: '',                              en: 'RST',  dis: 23, ref: '', pic: ''},
        '33': {pk: '13', name: '右骶前',           alias: '',                              en: 'RSA',  dis: 23, ref: '', pic: ''},
        '34': {pk: '14', name: '右骶后',           alias: '',                              en: 'RSP',  dis: 23, ref: '', pic: ''},
        '35': {pk: '15', name: '左肩前',           alias: '',                              en: 'LScA', dis: 23, ref: '', pic: ''},
        '36': {pk: '16', name: '左肩后',           alias: '',                              en: 'LScP', dis: 23, ref: '', pic: ''},
        '37': {pk: '17', name: '右肩前',           alias: '',                              en: 'RScA', dis: 23, ref: '', pic: ''},
        '38': {pk: '18', name: '右肩后',           alias: '',                              en: 'RScP', dis: 23, ref: '', pic: ''},
        '39': {pk: '19', name: '脐带绕颈',          alias: '',                             en: '',     dis: 24, ref: '', pic: ''},
        '40': {pk: '20', name: '颅后窝液体',        alias: '',                              en: '',     dis: 25, ref: '', pic: ''},
        '41': {pk: '20', name: '侧脑室增宽',         alias: '',                             en: '',     dis: 26, ref: '', pic: ''},
        '42': {pk: '20', name: '胎儿腿部皮下脂肪厚度', alias: '',                             en: 'FTH',  dis: 27, ref: '', pic: ''},
        '43': {pk: '20', name: '枕额径',            alias: '前后径',                        en: 'OFD',  dis: 28, ref: '', pic: ''},
        '44': {pk: '20', name: '腹横径',            alias: '',                             en: '',     dis: 29, ref: '', pic: ''}
    };
});