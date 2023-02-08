// 九华山推荐列表
const isTestStatus = false // true 为测试， false 为正式
const weaInfoChanel = '43803' // 渠道号
const zmWeaWechat = 'MzU2NzY2NDM2NQ=='
const jiuhuaBaseUrl = isTestStatus ? 'http://yydbtest.youliaokk.com:7631/new/activity/weafile/sene' : 'https://jq.zuimeitianqi.com/seneImg/jiuhuashan' // http://yydbtest.youliaokk.com:7631/new/activity/weafile/sene/

const reportUrl = isTestStatus ? 'http://61.152.66.114:11060' : 'https://attribute.zuimeitianqi.com' // 线上
// const countryUrl = isTestStatus ? "http://192.168.140.166:9090" : "http://124.70.209.190:9100"; // 本地

const h5LandLink = 'https://app.zuimeitianqi.com/#/?source=h5'
const getUserInfoUrl = 'https://xmb.zuimeitianqi.com/zmXmbServer/4.2/'

// isTestStatus
// const mapUrl = isTestStatus ? "http://61.152.66.114:11090" : "https://bs.zuimeitianqi.com"; // 外网
const mapUrl = isTestStatus ? 'http://192.168.0.122:90' : 'https://bs.zuimeitianqi.com' // 上海本地
// const mapUrl = isTestStatus ? "https://bs.zuimeitianqi.com" : "https://bs.zuimeitianqi.com";

// 天气城市码
let cityListDatas = {
  c: [
    {
      cityCode: '0101260120',
      cityname: '徐汇区',
      cid: '01012601'
    },
    {
      cityCode: '0101260118',
      cityname: '杨浦区',
      cid: '01012601'
    },
    {
      cityCode: '0101260108',
      cityname: '金山区',
      cid: '01012601'
    },
    {
      cityCode: '0101260104',
      cityname: '奉贤区',
      cid: '01012601'
    },
    {
      cityCode: '0101260113',
      cityname: '浦东新区',
      cid: '01012601'
    },
    {
      cityCode: '0101260114',
      cityname: '普陀区',
      cid: '01012601'
    },
    {
      cityCode: '0101260109',
      cityname: '静安区',
      cid: '01012601'
    },
    {
      cityCode: '0101260112',
      cityname: '南汇新城镇',
      cid: '01012601'
    },
    {
      cityCode: '0101260106',
      cityname: '黄浦区',
      cid: '01012601'
    },
    {
      cityCode: '0101260105',
      cityname: '虹口区',
      cid: '01012601'
    },
    {
      cityCode: '0101260102',
      cityname: '长宁区',
      cid: '01012601'
    },
    {
      cityCode: '01012601',
      cityname: '上海市',
      cid: '01012601'
    },
    {
      cityCode: '0101260101',
      cityname: '宝山区',
      cid: '01012601'
    },
    {
      cityCode: '0101260111',
      cityname: '闵行区',
      cid: '01012601'
    },
    {
      cityCode: '0101260107',
      cityname: '嘉定区',
      cid: '01012601'
    },
    {
      cityCode: '0101260103',
      cityname: '崇明区',
      cid: '01012601'
    },
    {
      cityCode: '0101260116',
      cityname: '松江区',
      cid: '01012601'
    },
    {
      cityCode: '0101260115',
      cityname: '青浦区',
      cid: '01012601'
    },
    {
      cityCode: '0101330906',
      cityname: '永德县',
      cid: '01013309'
    },
    {
      cityCode: '0101330907',
      cityname: '云县',
      cid: '01013309'
    },
    {
      cityCode: '0101330903',
      cityname: '耿马县',
      cid: '01013309'
    },
    {
      cityCode: '0101330904',
      cityname: '临翔区',
      cid: '01013309'
    },
    {
      cityCode: '0101330901',
      cityname: '沧源县',
      cid: '01013309'
    },
    {
      cityCode: '0101330908',
      cityname: '镇康县',
      cid: '01013309'
    },
    {
      cityCode: '0101330902',
      cityname: '凤庆县',
      cid: '01013309'
    },
    {
      cityCode: '0101330905',
      cityname: '双江县',
      cid: '01013309'
    },
    {
      cityCode: '01013309',
      cityname: '临沧市',
      cid: '01013309'
    },
    {
      cityCode: '0101330805',
      cityname: '玉龙县',
      cid: '01013308'
    },
    {
      cityCode: '0101330801',
      cityname: '古城区',
      cid: '01013308'
    },
    {
      cityCode: '0101330803',
      cityname: '宁蒗县',
      cid: '01013308'
    },
    {
      cityCode: '01013308',
      cityname: '丽江市',
      cid: '01013308'
    },
    {
      cityCode: '0101330802',
      cityname: '华坪县',
      cid: '01013308'
    },
    {
      cityCode: '0101330804',
      cityname: '永胜县',
      cid: '01013308'
    },
    {
      cityCode: '0101330104',
      cityname: '施甸县',
      cid: '01013301'
    },
    {
      cityCode: '01013301',
      cityname: '保山市',
      cid: '01013301'
    },
    {
      cityCode: '0101330101',
      cityname: '昌宁县',
      cid: '01013301'
    },
    {
      cityCode: '0101330102',
      cityname: '龙陵县',
      cid: '01013301'
    },
    {
      cityCode: '0101330103',
      cityname: '隆阳区',
      cid: '01013301'
    },
    {
      cityCode: '0101330105',
      cityname: '腾冲市',
      cid: '01013301'
    },
    {
      cityCode: '01013303',
      cityname: '大理州',
      cid: '01013303'
    },
    {
      cityCode: '0101330309',
      cityname: '祥云县',
      cid: '01013303'
    },
    {
      cityCode: '0101330307',
      cityname: '南涧县',
      cid: '01013303'
    },
    {
      cityCode: '0101330310',
      cityname: '漾濞县',
      cid: '01013303'
    },
    {
      cityCode: '0101330303',
      cityname: '洱源县',
      cid: '01013303'
    },
    {
      cityCode: '0101330312',
      cityname: '云龙县',
      cid: '01013303'
    },
    {
      cityCode: '0101330311',
      cityname: '永平县',
      cid: '01013303'
    },
    {
      cityCode: '0101330306',
      cityname: '弥渡县',
      cid: '01013303'
    },
    {
      cityCode: '0101330301',
      cityname: '宾川县',
      cid: '01013303'
    },
    {
      cityCode: '0101330305',
      cityname: '剑川县',
      cid: '01013303'
    },
    {
      cityCode: '0101330308',
      cityname: '巍山县',
      cid: '01013303'
    },
    {
      cityCode: '0101330304',
      cityname: '鹤庆县',
      cid: '01013303'
    },
    {
      cityCode: '0101330313',
      cityname: '大理市',
      cid: '01013303'
    },
    {
      cityCode: '0101330405',
      cityname: '盈江县',
      cid: '01013304'
    },
    {
      cityCode: '0101330402',
      cityname: '陇川县',
      cid: '01013304'
    },
    {
      cityCode: '0101330401',
      cityname: '梁河县',
      cid: '01013304'
    },
    {
      cityCode: '0101330404',
      cityname: '瑞丽市',
      cid: '01013304'
    },
    {
      cityCode: '0101330403',
      cityname: '芒市',
      cid: '01013304'
    },
    {
      cityCode: '01013304',
      cityname: '德宏州',
      cid: '01013304'
    },
    {
      cityCode: '0101331003',
      cityname: '兰坪县',
      cid: '01013310'
    },
    {
      cityCode: '0101331005',
      cityname: '六库镇',
      cid: '01013310'
    },
    {
      cityCode: '0101331004',
      cityname: '泸水市',
      cid: '01013310'
    },
    {
      cityCode: '0101331002',
      cityname: '贡山县',
      cid: '01013310'
    },
    {
      cityCode: '01013310',
      cityname: '怒江州',
      cid: '01013310'
    },
    {
      cityCode: '0101331001',
      cityname: '福贡县',
      cid: '01013310'
    },
    {
      cityCode: '0101331301',
      cityname: '富宁县',
      cid: '01013313'
    },
    {
      cityCode: '0101331309',
      cityname: '文山市',
      cid: '01013313'
    },
    {
      cityCode: '0101331307',
      cityname: '西畴县',
      cid: '01013313'
    },
    {
      cityCode: '0101331305',
      cityname: '丘北县',
      cid: '01013313'
    },
    {
      cityCode: '0101331303',
      cityname: '麻栗坡县',
      cid: '01013313'
    },
    {
      cityCode: '0101331308',
      cityname: '砚山县',
      cid: '01013313'
    },
    {
      cityCode: '01013313',
      cityname: '文山州',
      cid: '01013313'
    },
    {
      cityCode: '0101331304',
      cityname: '马关县',
      cid: '01013313'
    },
    {
      cityCode: '0101331302',
      cityname: '广南县',
      cid: '01013313'
    },
    {
      cityCode: '0101330706',
      cityname: '禄劝县',
      cid: '01013307'
    },
    {
      cityCode: '0101330703',
      cityname: '东川区',
      cid: '01013307'
    },
    {
      cityCode: '01013307',
      cityname: '昆明市',
      cid: '01013307'
    },
    {
      cityCode: '0101330708',
      cityname: '晋宁区',
      cid: '01013307'
    },
    {
      cityCode: '0101330704',
      cityname: '富民县',
      cid: '01013307'
    },
    {
      cityCode: '0101330712',
      cityname: '西山区',
      cid: '01013307'
    },
    {
      cityCode: '0101330702',
      cityname: '呈贡区',
      cid: '01013307'
    },
    {
      cityCode: '0101330701',
      cityname: '安宁市',
      cid: '01013307'
    },
    {
      cityCode: '0101330711',
      cityname: '五华区',
      cid: '01013307'
    },
    {
      cityCode: '0101330707',
      cityname: '盘龙区',
      cid: '01013307'
    },
    {
      cityCode: '0101330705',
      cityname: '官渡区',
      cid: '01013307'
    },
    {
      cityCode: '0101330713',
      cityname: '寻甸县',
      cid: '01013307'
    },
    {
      cityCode: '0101330709',
      cityname: '石林县',
      cid: '01013307'
    },
    {
      cityCode: '0101330714',
      cityname: '宜良县',
      cid: '01013307'
    },
    {
      cityCode: '0101330710',
      cityname: '嵩明县',
      cid: '01013307'
    },
    {
      cityCode: '0101331604',
      cityname: '水富市',
      cid: '01013316'
    },
    {
      cityCode: '0101331603',
      cityname: '巧家县',
      cid: '01013316'
    },
    {
      cityCode: '0101331601',
      cityname: '大关县',
      cid: '01013316'
    },
    {
      cityCode: '01013316',
      cityname: '昭通市',
      cid: '01013316'
    },
    {
      cityCode: '0101331606',
      cityname: '威信县',
      cid: '01013316'
    },
    {
      cityCode: '0101331607',
      cityname: '盐津县',
      cid: '01013316'
    },
    {
      cityCode: '0101331608',
      cityname: '彝良县',
      cid: '01013316'
    },
    {
      cityCode: '0101331602',
      cityname: '鲁甸县',
      cid: '01013316'
    },
    {
      cityCode: '0101331605',
      cityname: '绥江县',
      cid: '01013316'
    },
    {
      cityCode: '0101331610',
      cityname: '昭阳区',
      cid: '01013316'
    },
    {
      cityCode: '0101331611',
      cityname: '镇雄县',
      cid: '01013316'
    },
    {
      cityCode: '0101331609',
      cityname: '永善县',
      cid: '01013316'
    },
    {
      cityCode: '0101331103',
      cityname: '景谷县',
      cid: '01013311'
    },
    {
      cityCode: '0101331108',
      cityname: '思茅区',
      cid: '01013311'
    },
    {
      cityCode: '01013311',
      cityname: '普洱市',
      cid: '01013311'
    },
    {
      cityCode: '0101331104',
      cityname: '澜沧县',
      cid: '01013311'
    },
    {
      cityCode: '0101331110',
      cityname: '镇沅县',
      cid: '01013311'
    },
    {
      cityCode: '0101331101',
      cityname: '江城县',
      cid: '01013311'
    },
    {
      cityCode: '0101331106',
      cityname: '墨江县',
      cid: '01013311'
    },
    {
      cityCode: '0101331102',
      cityname: '景东县',
      cid: '01013311'
    },
    {
      cityCode: '0101331109',
      cityname: '西盟县',
      cid: '01013311'
    },
    {
      cityCode: '0101331107',
      cityname: '宁洱县',
      cid: '01013311'
    },
    {
      cityCode: '0101331105',
      cityname: '孟连县',
      cid: '01013311'
    },
    {
      cityCode: '0101331206',
      cityname: '麒麟区',
      cid: '01013312'
    },
    {
      cityCode: '0101331207',
      cityname: '师宗县',
      cid: '01013312'
    },
    {
      cityCode: '0101331205',
      cityname: '马龙区',
      cid: '01013312'
    },
    {
      cityCode: '0101331208',
      cityname: '宣威市',
      cid: '01013312'
    },
    {
      cityCode: '0101331202',
      cityname: '会泽县',
      cid: '01013312'
    },
    {
      cityCode: '0101331201',
      cityname: '富源县',
      cid: '01013312'
    },
    {
      cityCode: '0101331209',
      cityname: '沾益区',
      cid: '01013312'
    },
    {
      cityCode: '0101331203',
      cityname: '陆良县',
      cid: '01013312'
    },
    {
      cityCode: '01013312',
      cityname: '曲靖市',
      cid: '01013312'
    },
    {
      cityCode: '0101331204',
      cityname: '罗平县',
      cid: '01013312'
    },
    {
      cityCode: '0101330211',
      cityname: '楚雄市',
      cid: '01013302'
    },
    {
      cityCode: '0101330204',
      cityname: '牟定县',
      cid: '01013302'
    },
    {
      cityCode: '0101330202',
      cityname: '大姚县',
      cid: '01013302'
    },
    {
      cityCode: '0101330208',
      cityname: '姚安县',
      cid: '01013302'
    },
    {
      cityCode: '0101330205',
      cityname: '南华县',
      cid: '01013302'
    },
    {
      cityCode: '0101330209',
      cityname: '永仁县',
      cid: '01013302'
    },
    {
      cityCode: '0101330206',
      cityname: '双柏县',
      cid: '01013302'
    },
    {
      cityCode: '01013302',
      cityname: '楚雄州',
      cid: '01013302'
    },
    {
      cityCode: '0101330207',
      cityname: '武定县',
      cid: '01013302'
    },
    {
      cityCode: '0101330210',
      cityname: '元谋县',
      cid: '01013302'
    },
    {
      cityCode: '0101330203',
      cityname: '禄丰市',
      cid: '01013302'
    },
    {
      cityCode: '0101331508',
      cityname: '易门县',
      cid: '01013315'
    },
    {
      cityCode: '0101331504',
      cityname: '华宁县',
      cid: '01013315'
    },
    {
      cityCode: '0101331505',
      cityname: '江川区',
      cid: '01013315'
    },
    {
      cityCode: '0101331502',
      cityname: '峨山县',
      cid: '01013315'
    },
    {
      cityCode: '0101331509',
      cityname: '元江县',
      cid: '01013315'
    },
    {
      cityCode: '0101331506',
      cityname: '通海县',
      cid: '01013315'
    },
    {
      cityCode: '0101331501',
      cityname: '澄江市',
      cid: '01013315'
    },
    {
      cityCode: '0101331507',
      cityname: '新平县',
      cid: '01013315'
    },
    {
      cityCode: '0101331503',
      cityname: '红塔区',
      cid: '01013315'
    },
    {
      cityCode: '01013315',
      cityname: '玉溪市',
      cid: '01013315'
    },
    {
      cityCode: '0101330609',
      cityname: '蒙自市',
      cid: '01013306'
    },
    {
      cityCode: '0101330606',
      cityname: '开远市',
      cid: '01013306'
    },
    {
      cityCode: '0101330607',
      cityname: '泸西县',
      cid: '01013306'
    },
    {
      cityCode: '0101330608',
      cityname: '绿春县',
      cid: '01013306'
    },
    {
      cityCode: '0101330614',
      cityname: '红河县',
      cid: '01013306'
    },
    {
      cityCode: '0101330601',
      cityname: '个旧市',
      cid: '01013306'
    },
    {
      cityCode: '0101330604',
      cityname: '建水县',
      cid: '01013306'
    },
    {
      cityCode: '01013306',
      cityname: '红河州',
      cid: '01013306'
    },
    {
      cityCode: '0101330602',
      cityname: '河口县',
      cid: '01013306'
    },
    {
      cityCode: '0101330611',
      cityname: '屏边县',
      cid: '01013306'
    },
    {
      cityCode: '0101330613',
      cityname: '元阳县',
      cid: '01013306'
    },
    {
      cityCode: '0101330612',
      cityname: '石屏县',
      cid: '01013306'
    },
    {
      cityCode: '0101330610',
      cityname: '弥勒市',
      cid: '01013306'
    },
    {
      cityCode: '0101330605',
      cityname: '金平县',
      cid: '01013306'
    },
    {
      cityCode: '0101331403',
      cityname: '勐腊县',
      cid: '01013314'
    },
    {
      cityCode: '0101331402',
      cityname: '勐海县',
      cid: '01013314'
    },
    {
      cityCode: '0101331401',
      cityname: '景洪市',
      cid: '01013314'
    },
    {
      cityCode: '01013314',
      cityname: '西双版纳',
      cid: '01013314'
    },
    {
      cityCode: '0101330504',
      cityname: '中甸镇',
      cid: '01013305'
    },
    {
      cityCode: '0101330501',
      cityname: '德钦县',
      cid: '01013305'
    },
    {
      cityCode: '01013305',
      cityname: '迪庆州',
      cid: '01013305'
    },
    {
      cityCode: '0101330503',
      cityname: '香格里拉市',
      cid: '01013305'
    },
    {
      cityCode: '0101330502',
      cityname: '维西县',
      cid: '01013305'
    },
    {
      cityCode: '0101201205',
      cityname: '商都县',
      cid: '01012012'
    },
    {
      cityCode: '0101201204',
      cityname: '化德县',
      cid: '01012012'
    },
    {
      cityCode: '0101201209',
      cityname: '察哈尔右翼中旗',
      cid: '01012012'
    },
    {
      cityCode: '0101201201',
      cityname: '集宁区',
      cid: '01012012'
    },
    {
      cityCode: '0101201211',
      cityname: '四子王旗',
      cid: '01012012'
    },
    {
      cityCode: '0101201208',
      cityname: '察哈尔右翼前旗',
      cid: '01012012'
    },
    {
      cityCode: '0101201210',
      cityname: '察哈尔右翼后旗',
      cid: '01012012'
    },
    {
      cityCode: '01012012',
      cityname: '乌兰察布',
      cid: '01012012'
    },
    {
      cityCode: '0101201203',
      cityname: '卓资县',
      cid: '01012012'
    },
    {
      cityCode: '0101201206',
      cityname: '兴和县',
      cid: '01012012'
    },
    {
      cityCode: '0101201202',
      cityname: '丰镇市',
      cid: '01012012'
    },
    {
      cityCode: '0101201207',
      cityname: '凉城县',
      cid: '01012012'
    },
    {
      cityCode: '01012007',
      cityname: '乌海市',
      cid: '01012007'
    },
    {
      cityCode: '0101200703',
      cityname: '乌达区',
      cid: '01012007'
    },
    {
      cityCode: '0101200701',
      cityname: '海勃湾区',
      cid: '01012007'
    },
    {
      cityCode: '0101200702',
      cityname: '海南区',
      cid: '01012007'
    },
    {
      cityCode: '0101201007',
      cityname: '胡尔勒镇',
      cid: '01012010'
    },
    {
      cityCode: '0101201006',
      cityname: '扎赉特旗',
      cid: '01012010'
    },
    {
      cityCode: '0101201005',
      cityname: '科尔沁右翼中旗',
      cid: '01012010'
    },
    {
      cityCode: '0101201003',
      cityname: '突泉县',
      cid: '01012010'
    },
    {
      cityCode: '0101201002',
      cityname: '阿尔山市',
      cid: '01012010'
    },
    {
      cityCode: '01012010',
      cityname: '兴安盟',
      cid: '01012010'
    },
    {
      cityCode: '0101201004',
      cityname: '科尔沁右翼前旗',
      cid: '01012010'
    },
    {
      cityCode: '0101201001',
      cityname: '乌兰浩特市',
      cid: '01012010'
    },
    {
      cityCode: '0101200101',
      cityname: '白云鄂博矿区',
      cid: '01012001'
    },
    {
      cityCode: '0101200110',
      cityname: '满都拉图镇',
      cid: '01012001'
    },
    {
      cityCode: '01012001',
      cityname: '包头市',
      cid: '01012001'
    },
    {
      cityCode: '0101200108',
      cityname: '石拐区',
      cid: '01012001'
    },
    {
      cityCode: '0101200107',
      cityname: '青山区',
      cid: '01012001'
    },
    {
      cityCode: '0101200111',
      cityname: '希拉穆仁镇',
      cid: '01012001'
    },
    {
      cityCode: '0101200104',
      cityname: '固阳县',
      cid: '01012001'
    },
    {
      cityCode: '0101200106',
      cityname: '昆都仑区',
      cid: '01012001'
    },
    {
      cityCode: '0101200105',
      cityname: '九原区',
      cid: '01012001'
    },
    {
      cityCode: '0101200103',
      cityname: '东河区',
      cid: '01012001'
    },
    {
      cityCode: '0101200102',
      cityname: '达尔罕茂明安联合旗',
      cid: '01012001'
    },
    {
      cityCode: '0101200109',
      cityname: '土默特右旗',
      cid: '01012001'
    },
    {
      cityCode: '0101200505',
      cityname: '鄂温克族自治旗',
      cid: '01012005'
    },
    {
      cityCode: '0101200507',
      cityname: '海拉尔区',
      cid: '01012005'
    },
    {
      cityCode: '0101200513',
      cityname: '扎兰屯市',
      cid: '01012005'
    },
    {
      cityCode: '0101200509',
      cityname: '莫力达瓦达斡尔族自治旗',
      cid: '01012005'
    },
    {
      cityCode: '01012005',
      cityname: '呼伦贝尔',
      cid: '01012005'
    },
    {
      cityCode: '0101200511',
      cityname: '新巴尔虎左旗',
      cid: '01012005'
    },
    {
      cityCode: '0101200506',
      cityname: '根河市',
      cid: '01012005'
    },
    {
      cityCode: '0101200510',
      cityname: '新巴尔虎右旗',
      cid: '01012005'
    },
    {
      cityCode: '0101200517',
      cityname: '扎赉诺尔区',
      cid: '01012005'
    },
    {
      cityCode: '0101200504',
      cityname: '鄂伦春自治旗',
      cid: '01012005'
    },
    {
      cityCode: '0101200503',
      cityname: '额尔古纳市',
      cid: '01012005'
    },
    {
      cityCode: '0101200508',
      cityname: '满洲里市',
      cid: '01012005'
    },
    {
      cityCode: '0101200502',
      cityname: '陈巴尔虎旗',
      cid: '01012005'
    },
    {
      cityCode: '0101200514',
      cityname: '图里河镇',
      cid: '01012005'
    },
    {
      cityCode: '0101200512',
      cityname: '牙克石市',
      cid: '01012005'
    },
    {
      cityCode: '0101200501',
      cityname: '阿荣旗',
      cid: '01012005'
    },
    {
      cityCode: '0101200408',
      cityname: '新城区',
      cid: '01012004'
    },
    {
      cityCode: '0101200401',
      cityname: '和林格尔县',
      cid: '01012004'
    },
    {
      cityCode: '0101200404',
      cityname: '赛罕区',
      cid: '01012004'
    },
    {
      cityCode: '0101200407',
      cityname: '武川县',
      cid: '01012004'
    },
    {
      cityCode: '0101200409',
      cityname: '玉泉区',
      cid: '01012004'
    },
    {
      cityCode: '0101200403',
      cityname: '清水河县',
      cid: '01012004'
    },
    {
      cityCode: '01012004',
      cityname: '呼和浩特',
      cid: '01012004'
    },
    {
      cityCode: '0101200412',
      cityname: '回民区',
      cid: '01012004'
    },
    {
      cityCode: '0101200406',
      cityname: '托克托县',
      cid: '01012004'
    },
    {
      cityCode: '0101200405',
      cityname: '土默特左旗',
      cid: '01012004'
    },
    {
      cityCode: '0101201103',
      cityname: '磴口县',
      cid: '01012011'
    },
    {
      cityCode: '0101201110',
      cityname: '那仁宝力格',
      cid: '01012011'
    },
    {
      cityCode: '0101201102',
      cityname: '五原县',
      cid: '01012011'
    },
    {
      cityCode: '0101201101',
      cityname: '临河区',
      cid: '01012011'
    },
    {
      cityCode: '0101201107',
      cityname: '杭锦后旗',
      cid: '01012011'
    },
    {
      cityCode: '0101201105',
      cityname: '乌拉特中旗',
      cid: '01012011'
    },
    {
      cityCode: '0101201104',
      cityname: '乌拉特前旗',
      cid: '01012011'
    },
    {
      cityCode: '0101201106',
      cityname: '乌拉特后旗',
      cid: '01012011'
    },
    {
      cityCode: '01012011',
      cityname: '巴彦淖尔',
      cid: '01012011'
    },
    {
      cityCode: '0101201108',
      cityname: '大佘太镇',
      cid: '01012011'
    },
    {
      cityCode: '0101200215',
      cityname: '浩尔吐乡',
      cid: '01012002'
    },
    {
      cityCode: '0101200216',
      cityname: '岗子乡',
      cid: '01012002'
    },
    {
      cityCode: '0101200209',
      cityname: '宁城县',
      cid: '01012002'
    },
    {
      cityCode: '0101200206',
      cityname: '喀喇沁旗',
      cid: '01012002'
    },
    {
      cityCode: '0101200202',
      cityname: '敖汉旗',
      cid: '01012002'
    },
    {
      cityCode: '0101200217',
      cityname: '高力板镇',
      cid: '01012002'
    },
    {
      cityCode: '0101200212',
      cityname: '元宝山区',
      cid: '01012002'
    },
    {
      cityCode: '0101200210',
      cityname: '松山区',
      cid: '01012002'
    },
    {
      cityCode: '0101200211',
      cityname: '翁牛特旗',
      cid: '01012002'
    },
    {
      cityCode: '0101200205',
      cityname: '红山区',
      cid: '01012002'
    },
    {
      cityCode: '0101200204',
      cityname: '巴林左旗',
      cid: '01012002'
    },
    {
      cityCode: '0101200207',
      cityname: '克什克腾旗',
      cid: '01012002'
    },
    {
      cityCode: '0101200203',
      cityname: '巴林右旗',
      cid: '01012002'
    },
    {
      cityCode: '01012002',
      cityname: '赤峰市',
      cid: '01012002'
    },
    {
      cityCode: '0101200214',
      cityname: '八里罕镇',
      cid: '01012002'
    },
    {
      cityCode: '0101200201',
      cityname: '阿鲁科尔沁旗',
      cid: '01012002'
    },
    {
      cityCode: '0101200208',
      cityname: '林西县',
      cid: '01012002'
    },
    {
      cityCode: '0101200213',
      cityname: '宝国吐',
      cid: '01012002'
    },
    {
      cityCode: '0101200607',
      cityname: '奈曼旗',
      cid: '01012006'
    },
    {
      cityCode: '0101200605',
      cityname: '科尔沁左翼中旗',
      cid: '01012006'
    },
    {
      cityCode: '0101200601',
      cityname: '霍林郭勒市',
      cid: '01012006'
    },
    {
      cityCode: '0101200604',
      cityname: '科尔沁左翼后旗',
      cid: '01012006'
    },
    {
      cityCode: '0101200603',
      cityname: '科尔沁区',
      cid: '01012006'
    },
    {
      cityCode: '0101200608',
      cityname: '扎鲁特旗',
      cid: '01012006'
    },
    {
      cityCode: '0101200606',
      cityname: '库伦旗',
      cid: '01012006'
    },
    {
      cityCode: '01012006',
      cityname: '通辽市',
      cid: '01012006'
    },
    {
      cityCode: '0101200610',
      cityname: '舍伯吐镇',
      cid: '01012006'
    },
    {
      cityCode: '0101200602',
      cityname: '开鲁县',
      cid: '01012006'
    },
    {
      cityCode: '0101200609',
      cityname: '巴雅尔图胡硕镇',
      cid: '01012006'
    },
    {
      cityCode: '0101200303',
      cityname: '准格尔旗',
      cid: '01012003'
    },
    {
      cityCode: '0101200308',
      cityname: '伊金霍洛旗',
      cid: '01012003'
    },
    {
      cityCode: '0101200301',
      cityname: '东胜区',
      cid: '01012003'
    },
    {
      cityCode: '0101200305',
      cityname: '鄂托克旗',
      cid: '01012003'
    },
    {
      cityCode: '0101200304',
      cityname: '鄂托克前旗',
      cid: '01012003'
    },
    {
      cityCode: '0101200302',
      cityname: '达拉特旗',
      cid: '01012003'
    },
    {
      cityCode: '0101200306',
      cityname: '杭锦旗',
      cid: '01012003'
    },
    {
      cityCode: '0101200311',
      cityname: '康巴什区',
      cid: '01012003'
    },
    {
      cityCode: '01012003',
      cityname: '鄂尔多斯',
      cid: '01012003'
    },
    {
      cityCode: '0101200309',
      cityname: '乌审召镇',
      cid: '01012003'
    },
    {
      cityCode: '0101200307',
      cityname: '乌审旗',
      cid: '01012003'
    },
    {
      cityCode: '0101200906',
      cityname: '苏尼特右旗',
      cid: '01012009'
    },
    {
      cityCode: '0101200913',
      cityname: '博克图镇',
      cid: '01012009'
    },
    {
      cityCode: '0101200912',
      cityname: '正蓝旗',
      cid: '01012009'
    },
    {
      cityCode: '0101200909',
      cityname: '太仆寺旗',
      cid: '01012009'
    },
    {
      cityCode: '0101200902',
      cityname: '二连浩特市',
      cid: '01012009'
    },
    {
      cityCode: '0101200908',
      cityname: '西乌珠穆沁旗',
      cid: '01012009'
    },
    {
      cityCode: '0101200911',
      cityname: '正镶白旗',
      cid: '01012009'
    },
    {
      cityCode: '0101200901',
      cityname: '锡林浩特市',
      cid: '01012009'
    },
    {
      cityCode: '0101200910',
      cityname: '镶黄旗',
      cid: '01012009'
    },
    {
      cityCode: '0101200907',
      cityname: '东乌珠穆沁旗',
      cid: '01012009'
    },
    {
      cityCode: '0101200903',
      cityname: '多伦县',
      cid: '01012009'
    },
    {
      cityCode: '0101200904',
      cityname: '阿巴嘎旗',
      cid: '01012009'
    },
    {
      cityCode: '0101200914',
      cityname: '朱日和镇',
      cid: '01012009'
    },
    {
      cityCode: '01012009',
      cityname: '锡林郭勒',
      cid: '01012009'
    },
    {
      cityCode: '0101200915',
      cityname: '乌拉盖牧场',
      cid: '01012009'
    },
    {
      cityCode: '0101200905',
      cityname: '苏尼特左旗',
      cid: '01012009'
    },
    {
      cityCode: '0101200807',
      cityname: '吉兰泰镇',
      cid: '01012008'
    },
    {
      cityCode: '0101200801',
      cityname: '阿拉善左旗',
      cid: '01012008'
    },
    {
      cityCode: '0101200802',
      cityname: '阿拉善右旗',
      cid: '01012008'
    },
    {
      cityCode: '0101200803',
      cityname: '额济纳旗',
      cid: '01012008'
    },
    {
      cityCode: '0101200806',
      cityname: '乌斯太镇',
      cid: '01012008'
    },
    {
      cityCode: '0101200805',
      cityname: '雅布赖镇',
      cid: '01012008'
    },
    {
      cityCode: '01012008',
      cityname: '阿拉善盟',
      cid: '01012008'
    },
    {
      cityCode: '0101010110',
      cityname: '平谷区',
      cid: '01010101'
    },
    {
      cityCode: '0101010108',
      cityname: '门头沟区',
      cid: '01010101'
    },
    {
      cityCode: '0101010117',
      cityname: '西城区',
      cid: '01010101'
    },
    {
      cityCode: '0101010116',
      cityname: '东城区',
      cid: '01010101'
    },
    {
      cityCode: '0101010113',
      cityname: '通州区',
      cid: '01010101'
    },
    {
      cityCode: '0101010109',
      cityname: '密云区',
      cid: '01010101'
    },
    {
      cityCode: '01010101',
      cityname: '北京市',
      cid: '01010101'
    },
    {
      cityCode: '0101010104',
      cityname: '房山区',
      cid: '01010101'
    },
    {
      cityCode: '0101010101',
      cityname: '昌平区',
      cid: '01010101'
    },
    {
      cityCode: '0101010112',
      cityname: '顺义区',
      cid: '01010101'
    },
    {
      cityCode: '0101010107',
      cityname: '怀柔区',
      cid: '01010101'
    },
    {
      cityCode: '0101010111',
      cityname: '石景山区',
      cid: '01010101'
    },
    {
      cityCode: '0101010105',
      cityname: '丰台区',
      cid: '01010101'
    },
    {
      cityCode: '0101010106',
      cityname: '海淀区',
      cid: '01010101'
    },
    {
      cityCode: '0101010103',
      cityname: '大兴区',
      cid: '01010101'
    },
    {
      cityCode: '0101010115',
      cityname: '延庆区',
      cid: '01010101'
    },
    {
      cityCode: '0101010102',
      cityname: '朝阳区',
      cid: '01010101'
    },
    {
      cityCode: '0101280302',
      cityname: '云林县',
      cid: '0101280302'
    },
    {
      cityCode: '0101280306',
      cityname: '南投县',
      cid: '0101280306'
    },
    {
      cityCode: '0101280307',
      cityname: '台东市',
      cid: '0101280307'
    },
    {
      cityCode: '01012803',
      cityname: '台中市',
      cid: '01012803'
    },
    {
      cityCode: '01012801',
      cityname: '台北市',
      cid: '01012801'
    },
    {
      cityCode: '0101280202',
      cityname: '台南市',
      cid: '0101280202'
    },
    {
      cityCode: '0101280304_1',
      cityname: '嘉义县',
      cid: '0101280304_1'
    },
    {
      cityCode: '0101280304',
      cityname: '嘉义市',
      cid: '0101280304'
    },
    {
      cityCode: '01012801_2',
      cityname: '基隆市',
      cid: '01012801_2'
    },
    {
      cityCode: '0101280103',
      cityname: '宜兰县',
      cid: '0101280103'
    },
    {
      cityCode: '0101280201',
      cityname: '屏东县',
      cid: '0101280201'
    },
    {
      cityCode: '0101280301',
      cityname: '彰化县',
      cid: '0101280301'
    },
    {
      cityCode: '01012801_1',
      cityname: '新北市',
      cid: '01012801_1'
    },
    {
      cityCode: '0101280102',
      cityname: '新竹县',
      cid: '0101280102'
    },
    {
      cityCode: '0101280101_1',
      cityname: '新竹市',
      cid: '0101280101_1'
    },
    {
      cityCode: '0101280101',
      cityname: '桃园市',
      cid: '0101280101'
    },
    {
      cityCode: '0101280202_1',
      cityname: '澎湖县',
      cid: '0101280202_1'
    },
    {
      cityCode: '0101280303',
      cityname: '花莲县',
      cid: '0101280303'
    },
    {
      cityCode: '0101280305',
      cityname: '苗栗县',
      cid: '0101280305'
    },
    {
      cityCode: '01012801_3',
      cityname: '连江县',
      cid: '01012801_3'
    },
    {
      cityCode: '01012802',
      cityname: '高雄市',
      cid: '01012802'
    },
    {
      cityCode: '0101160408',
      cityname: '舒兰市',
      cid: '01011604'
    },
    {
      cityCode: '0101160407',
      cityname: '磐石市',
      cid: '01011604'
    },
    {
      cityCode: '0101160409',
      cityname: '永吉县',
      cid: '01011604'
    },
    {
      cityCode: '0101160405',
      cityname: '蛟河市',
      cid: '01011604'
    },
    {
      cityCode: '0101160404',
      cityname: '桦甸市',
      cid: '01011604'
    },
    {
      cityCode: '0101160406',
      cityname: '龙潭区',
      cid: '01011604'
    },
    {
      cityCode: '0101160403',
      cityname: '丰满区',
      cid: '01011604'
    },
    {
      cityCode: '0101160402',
      cityname: '船营区',
      cid: '01011604'
    },
    {
      cityCode: '0101160401',
      cityname: '昌邑区',
      cid: '01011604'
    },
    {
      cityCode: '01011604',
      cityname: '吉林市',
      cid: '01011604'
    },
    {
      cityCode: '0101160606',
      cityname: '伊通县',
      cid: '01011606'
    },
    {
      cityCode: '0101160602',
      cityname: '梨树县',
      cid: '01011606'
    },
    {
      cityCode: '0101160603',
      cityname: '双辽市',
      cid: '01011606'
    },
    {
      cityCode: '0101160605',
      cityname: '铁西区',
      cid: '01011606'
    },
    {
      cityCode: '0101160604',
      cityname: '铁东区',
      cid: '01011606'
    },
    {
      cityCode: '01011606',
      cityname: '四平市',
      cid: '01011606'
    },
    {
      cityCode: '0101160904',
      cityname: '珲春市',
      cid: '01011609'
    },
    {
      cityCode: '0101160907',
      cityname: '汪清县',
      cid: '01011609'
    },
    {
      cityCode: '01011609',
      cityname: '延边州',
      cid: '01011609'
    },
    {
      cityCode: '0101160905',
      cityname: '龙井市',
      cid: '01011609'
    },
    {
      cityCode: '0101160903',
      cityname: '和龙市',
      cid: '01011609'
    },
    {
      cityCode: '0101160902',
      cityname: '敦化市',
      cid: '01011609'
    },
    {
      cityCode: '0101160908',
      cityname: '延吉市',
      cid: '01011609'
    },
    {
      cityCode: '0101160906',
      cityname: '图们市',
      cid: '01011609'
    },
    {
      cityCode: '0101160901',
      cityname: '安图县',
      cid: '01011609'
    },
    {
      cityCode: '01011607',
      cityname: '松原市',
      cid: '01011607'
    },
    {
      cityCode: '0101160702',
      cityname: '扶余市',
      cid: '01011607'
    },
    {
      cityCode: '0101160703',
      cityname: '宁江区',
      cid: '01011607'
    },
    {
      cityCode: '0101160704',
      cityname: '乾安县',
      cid: '01011607'
    },
    {
      cityCode: '0101160705',
      cityname: '前郭尔罗斯县',
      cid: '01011607'
    },
    {
      cityCode: '0101160701',
      cityname: '长岭县',
      cid: '01011607'
    },
    {
      cityCode: '0101160102',
      cityname: '洮北区',
      cid: '01011601'
    },
    {
      cityCode: '0101160105',
      cityname: '镇赉县',
      cid: '01011601'
    },
    {
      cityCode: '0101160103',
      cityname: '洮南市',
      cid: '01011601'
    },
    {
      cityCode: '01011601',
      cityname: '白城市',
      cid: '01011601'
    },
    {
      cityCode: '0101160104',
      cityname: '通榆县',
      cid: '01011601'
    },
    {
      cityCode: '0101160101',
      cityname: '大安市',
      cid: '01011601'
    },
    {
      cityCode: '0101160201',
      cityname: '浑江区',
      cid: '01011602'
    },
    {
      cityCode: '0101160207',
      cityname: '东岗镇',
      cid: '01011602'
    },
    {
      cityCode: '0101160204',
      cityname: '江源区',
      cid: '01011602'
    },
    {
      cityCode: '0101160206',
      cityname: '临江市',
      cid: '01011602'
    },
    {
      cityCode: '0101160205',
      cityname: '靖宇县',
      cid: '01011602'
    },
    {
      cityCode: '0101160202',
      cityname: '长白县',
      cid: '01011602'
    },
    {
      cityCode: '01011602',
      cityname: '白山市',
      cid: '01011602'
    },
    {
      cityCode: '0101160203',
      cityname: '抚松县',
      cid: '01011602'
    },
    {
      cityCode: '01011605',
      cityname: '辽源市',
      cid: '01011605'
    },
    {
      cityCode: '0101160501',
      cityname: '东丰县',
      cid: '01011605'
    },
    {
      cityCode: '0101160504',
      cityname: '西安区',
      cid: '01011605'
    },
    {
      cityCode: '0101160502',
      cityname: '东辽县',
      cid: '01011605'
    },
    {
      cityCode: '0101160503',
      cityname: '龙山区',
      cid: '01011605'
    },
    {
      cityCode: '0101160805',
      cityname: '柳河县',
      cid: '01011608'
    },
    {
      cityCode: '0101160803',
      cityname: '辉南县',
      cid: '01011608'
    },
    {
      cityCode: '0101160802',
      cityname: '二道江区',
      cid: '01011608'
    },
    {
      cityCode: '0101160801',
      cityname: '东昌区',
      cid: '01011608'
    },
    {
      cityCode: '0101160807',
      cityname: '通化县',
      cid: '01011608'
    },
    {
      cityCode: '01011608',
      cityname: '通化市',
      cid: '01011608'
    },
    {
      cityCode: '0101160806',
      cityname: '梅河口市',
      cid: '01011608'
    },
    {
      cityCode: '0101160804',
      cityname: '集安市',
      cid: '01011608'
    },
    {
      cityCode: '01011603',
      cityname: '长春市',
      cid: '01011603'
    },
    {
      cityCode: '0101160301',
      cityname: '朝阳区',
      cid: '01011603'
    },
    {
      cityCode: '0101160308',
      cityname: '农安县',
      cid: '01011603'
    },
    {
      cityCode: '0101160304',
      cityname: '九台区',
      cid: '01011603'
    },
    {
      cityCode: '0101160601',
      cityname: '公主岭市',
      cid: '01011603'
    },
    {
      cityCode: '0101160302',
      cityname: '德惠市',
      cid: '01011603'
    },
    {
      cityCode: '0101160310',
      cityname: '榆树市',
      cid: '01011603'
    },
    {
      cityCode: '0101160309',
      cityname: '双阳区',
      cid: '01011603'
    },
    {
      cityCode: '0101160307',
      cityname: '南关区',
      cid: '01011603'
    },
    {
      cityCode: '0101160306',
      cityname: '绿园区',
      cid: '01011603'
    },
    {
      cityCode: '0101160305',
      cityname: '宽城区',
      cid: '01011603'
    },
    {
      cityCode: '0101160303',
      cityname: '二道区',
      cid: '01011603'
    },
    {
      cityCode: '0101270903',
      cityname: '夹江县',
      cid: '01012709'
    },
    {
      cityCode: '0101270911',
      cityname: '五通桥区',
      cid: '01012709'
    },
    {
      cityCode: '0101270912',
      cityname: '峨眉山市',
      cid: '01012709'
    },
    {
      cityCode: '0101270909',
      cityname: '沙湾区',
      cid: '01012709'
    },
    {
      cityCode: '0101270904',
      cityname: '犍为县',
      cid: '01012709'
    },
    {
      cityCode: '0101270905',
      cityname: '金口河区',
      cid: '01012709'
    },
    {
      cityCode: '0101270908',
      cityname: '沐川县',
      cid: '01012709'
    },
    {
      cityCode: '0101270913',
      cityname: '市中区',
      cid: '01012709'
    },
    {
      cityCode: '01012709',
      cityname: '乐山市',
      cid: '01012709'
    },
    {
      cityCode: '0101270901',
      cityname: '峨边县',
      cid: '01012709'
    },
    {
      cityCode: '0101270907',
      cityname: '马边县',
      cid: '01012709'
    },
    {
      cityCode: '0101270906',
      cityname: '井研县',
      cid: '01012709'
    },
    {
      cityCode: '0101271506',
      cityname: '市中区',
      cid: '01012715'
    },
    {
      cityCode: '0101271502',
      cityname: '隆昌市',
      cid: '01012715'
    },
    {
      cityCode: '01012715',
      cityname: '内江市',
      cid: '01012715'
    },
    {
      cityCode: '0101271504',
      cityname: '威远县',
      cid: '01012715'
    },
    {
      cityCode: '0101271501',
      cityname: '东兴区',
      cid: '01012715'
    },
    {
      cityCode: '0101271505',
      cityname: '资中县',
      cid: '01012715'
    },
    {
      cityCode: '0101271001',
      cityname: '布拖县',
      cid: '01012710'
    },
    {
      cityCode: '0101271016',
      cityname: '越西县',
      cid: '01012710'
    },
    {
      cityCode: '0101271002',
      cityname: '德昌县',
      cid: '01012710'
    },
    {
      cityCode: '0101271009',
      cityname: '冕宁县',
      cid: '01012710'
    },
    {
      cityCode: '0101271013',
      cityname: '西昌市',
      cid: '01012710'
    },
    {
      cityCode: '0101271015',
      cityname: '盐源县',
      cid: '01012710'
    },
    {
      cityCode: '0101271017',
      cityname: '昭觉县',
      cid: '01012710'
    },
    {
      cityCode: '0101271004',
      cityname: '会东县',
      cid: '01012710'
    },
    {
      cityCode: '0101271007',
      cityname: '雷波县',
      cid: '01012710'
    },
    {
      cityCode: '01012710',
      cityname: '凉山州',
      cid: '01012710'
    },
    {
      cityCode: '0101271010',
      cityname: '木里县',
      cid: '01012710'
    },
    {
      cityCode: '0101271014',
      cityname: '喜德县',
      cid: '01012710'
    },
    {
      cityCode: '0101271011',
      cityname: '宁南县',
      cid: '01012710'
    },
    {
      cityCode: '0101271005',
      cityname: '会理县',
      cid: '01012710'
    },
    {
      cityCode: '0101271006',
      cityname: '金阳县',
      cid: '01012710'
    },
    {
      cityCode: '0101271003',
      cityname: '甘洛县',
      cid: '01012710'
    },
    {
      cityCode: '0101271008',
      cityname: '美姑县',
      cid: '01012710'
    },
    {
      cityCode: '0101271012',
      cityname: '普格县',
      cid: '01012710'
    },
    {
      cityCode: '0101271403',
      cityname: '阆中市',
      cid: '01012714'
    },
    {
      cityCode: '0101271407',
      cityname: '西充县',
      cid: '01012714'
    },
    {
      cityCode: '0101271409',
      cityname: '营山县',
      cid: '01012714'
    },
    {
      cityCode: '01012714',
      cityname: '南充市',
      cid: '01012714'
    },
    {
      cityCode: '0101271404',
      cityname: '南部县',
      cid: '01012714'
    },
    {
      cityCode: '0101271408',
      cityname: '仪陇县',
      cid: '01012714'
    },
    {
      cityCode: '0101271406',
      cityname: '顺庆区',
      cid: '01012714'
    },
    {
      cityCode: '0101271405',
      cityname: '蓬安县',
      cid: '01012714'
    },
    {
      cityCode: '0101271402',
      cityname: '嘉陵区',
      cid: '01012714'
    },
    {
      cityCode: '0101271401',
      cityname: '高坪区',
      cid: '01012714'
    },
    {
      cityCode: '01012719',
      cityname: '宜宾市',
      cid: '01012719'
    },
    {
      cityCode: '0101271908',
      cityname: '筠连县',
      cid: '01012719'
    },
    {
      cityCode: '0101271905',
      cityname: '屏山县',
      cid: '01012719'
    },
    {
      cityCode: '0101271906',
      cityname: '兴文县',
      cid: '01012719'
    },
    {
      cityCode: '0101271902',
      cityname: '翠屏区',
      cid: '01012719'
    },
    {
      cityCode: '0101271901',
      cityname: '长宁县',
      cid: '01012719'
    },
    {
      cityCode: '0101271904',
      cityname: '珙县',
      cid: '01012719'
    },
    {
      cityCode: '0101271910',
      cityname: '江安县',
      cid: '01012719'
    },
    {
      cityCode: '0101271903',
      cityname: '高县',
      cid: '01012719'
    },
    {
      cityCode: '0101271907',
      cityname: '叙州区',
      cid: '01012719'
    },
    {
      cityCode: '0101271909',
      cityname: '南溪区',
      cid: '01012719'
    },
    {
      cityCode: '0101270204',
      cityname: '通江县',
      cid: '01012702'
    },
    {
      cityCode: '0101270201',
      cityname: '巴州区',
      cid: '01012702'
    },
    {
      cityCode: '0101270203',
      cityname: '平昌县',
      cid: '01012702'
    },
    {
      cityCode: '0101270205',
      cityname: '恩阳区',
      cid: '01012702'
    },
    {
      cityCode: '01012702',
      cityname: '巴中市',
      cid: '01012702'
    },
    {
      cityCode: '0101270202',
      cityname: '南江县',
      cid: '01012702'
    },
    {
      cityCode: '0101270804',
      cityname: '剑阁县',
      cid: '01012708'
    },
    {
      cityCode: '0101270806',
      cityname: '青川县',
      cid: '01012708'
    },
    {
      cityCode: '0101270801',
      cityname: '苍溪县',
      cid: '01012708'
    },
    {
      cityCode: '0101270805',
      cityname: '利州区',
      cid: '01012708'
    },
    {
      cityCode: '0101270803',
      cityname: '昭化区',
      cid: '01012708'
    },
    {
      cityCode: '0101270802',
      cityname: '朝天区',
      cid: '01012708'
    },
    {
      cityCode: '0101270807',
      cityname: '旺苍县',
      cid: '01012708'
    },
    {
      cityCode: '01012708',
      cityname: '广元市',
      cid: '01012708'
    },
    {
      cityCode: '0101270704',
      cityname: '武胜县',
      cid: '01012707'
    },
    {
      cityCode: '0101270707',
      cityname: '前锋区',
      cid: '01012707'
    },
    {
      cityCode: '0101270706',
      cityname: '广安区',
      cid: '01012707'
    },
    {
      cityCode: '0101270702',
      cityname: '华蓥市',
      cid: '01012707'
    },
    {
      cityCode: '0101270705',
      cityname: '岳池县',
      cid: '01012707'
    },
    {
      cityCode: '01012707',
      cityname: '广安市',
      cid: '01012707'
    },
    {
      cityCode: '0101270703',
      cityname: '邻水县',
      cid: '01012707'
    },
    {
      cityCode: '0101270506',
      cityname: '中江县',
      cid: '01012705'
    },
    {
      cityCode: '0101270505',
      cityname: '什邡市',
      cid: '01012705'
    },
    {
      cityCode: '01012705',
      cityname: '德阳市',
      cid: '01012705'
    },
    {
      cityCode: '0101270501',
      cityname: '广汉市',
      cid: '01012705'
    },
    {
      cityCode: '0101270503',
      cityname: '罗江区',
      cid: '01012705'
    },
    {
      cityCode: '0101270502',
      cityname: '旌阳区',
      cid: '01012705'
    },
    {
      cityCode: '0101270504',
      cityname: '绵竹市',
      cid: '01012705'
    },
    {
      cityCode: '0101270304',
      cityname: '金牛区',
      cid: '01012703'
    },
    {
      cityCode: '0101272002',
      cityname: '简阳市',
      cid: '01012703'
    },
    {
      cityCode: '0101270303',
      cityname: '都江堰市',
      cid: '01012703'
    },
    {
      cityCode: '0101270318',
      cityname: '新津区',
      cid: '01012703'
    },
    {
      cityCode: '0101270313',
      cityname: '邛崃市',
      cid: '01012703'
    },
    {
      cityCode: '0101270302',
      cityname: '大邑县',
      cid: '01012703'
    },
    {
      cityCode: '0101270314',
      cityname: '双流区',
      cid: '01012703'
    },
    {
      cityCode: '0101270301',
      cityname: '崇州市',
      cid: '01012703'
    },
    {
      cityCode: '0101270309',
      cityname: '郫都区',
      cid: '01012703'
    },
    {
      cityCode: '0101270310',
      cityname: '蒲江县',
      cid: '01012703'
    },
    {
      cityCode: '0101270308',
      cityname: '彭州市',
      cid: '01012703'
    },
    {
      cityCode: '0101270305',
      cityname: '金堂县',
      cid: '01012703'
    },
    {
      cityCode: '0101270317',
      cityname: '新都区',
      cid: '01012703'
    },
    {
      cityCode: '0101270315',
      cityname: '温江区',
      cid: '01012703'
    },
    {
      cityCode: '0101270316',
      cityname: '武侯区',
      cid: '01012703'
    },
    {
      cityCode: '0101270319',
      cityname: '成华区',
      cid: '01012703'
    },
    {
      cityCode: '0101270312',
      cityname: '青羊区',
      cid: '01012703'
    },
    {
      cityCode: '01012703',
      cityname: '成都市',
      cid: '01012703'
    },
    {
      cityCode: '0101270311',
      cityname: '青白江区',
      cid: '01012703'
    },
    {
      cityCode: '0101270307',
      cityname: '龙泉驿区',
      cid: '01012703'
    },
    {
      cityCode: '0101270306',
      cityname: '锦江区',
      cid: '01012703'
    },
    {
      cityCode: '0101271603',
      cityname: '仁和区',
      cid: '01012716'
    },
    {
      cityCode: '0101271605',
      cityname: '盐边县',
      cid: '01012716'
    },
    {
      cityCode: '01012716',
      cityname: '攀枝花市',
      cid: '01012716'
    },
    {
      cityCode: '0101271602',
      cityname: '米易县',
      cid: '01012716'
    },
    {
      cityCode: '0101271607',
      cityname: '西区',
      cid: '01012716'
    },
    {
      cityCode: '0101271606',
      cityname: '东区',
      cid: '01012716'
    },
    {
      cityCode: '0101271102',
      cityname: '合江县',
      cid: '01012711'
    },
    {
      cityCode: '01012711',
      cityname: '泸州市',
      cid: '01012711'
    },
    {
      cityCode: '0101271104',
      cityname: '龙马潭区',
      cid: '01012711'
    },
    {
      cityCode: '0101271107',
      cityname: '叙永县',
      cid: '01012711'
    },
    {
      cityCode: '0101271103',
      cityname: '江阳区',
      cid: '01012711'
    },
    {
      cityCode: '0101271101',
      cityname: '古蔺县',
      cid: '01012711'
    },
    {
      cityCode: '0101271106',
      cityname: '纳溪区',
      cid: '01012711'
    },
    {
      cityCode: '0101271105',
      cityname: '泸县',
      cid: '01012711'
    },
    {
      cityCode: '01012706',
      cityname: '甘孜州',
      cid: '01012706'
    },
    {
      cityCode: '0101270610',
      cityname: '康定市',
      cid: '01012706'
    },
    {
      cityCode: '0101270601',
      cityname: '巴塘县',
      cid: '01012706'
    },
    {
      cityCode: '0101270606',
      cityname: '德格县',
      cid: '01012706'
    },
    {
      cityCode: '0101270604',
      cityname: '稻城县',
      cid: '01012706'
    },
    {
      cityCode: '0101270613',
      cityname: '炉霍县',
      cid: '01012706'
    },
    {
      cityCode: '0101270615',
      cityname: '石渠县',
      cid: '01012706'
    },
    {
      cityCode: '0101270619',
      cityname: '甘孜县',
      cid: '01012706'
    },
    {
      cityCode: '0101270611',
      cityname: '理塘县',
      cid: '01012706'
    },
    {
      cityCode: '0101270616',
      cityname: '乡城县',
      cid: '01012706'
    },
    {
      cityCode: '0101270602',
      cityname: '白玉县',
      cid: '01012706'
    },
    {
      cityCode: '0101270607',
      cityname: '得荣县',
      cid: '01012706'
    },
    {
      cityCode: '0101270605',
      cityname: '道孚县',
      cid: '01012706'
    },
    {
      cityCode: '0101270612',
      cityname: '泸定县',
      cid: '01012706'
    },
    {
      cityCode: '0101270609',
      cityname: '九龙县',
      cid: '01012706'
    },
    {
      cityCode: '0101270614',
      cityname: '色达县',
      cid: '01012706'
    },
    {
      cityCode: '0101270617',
      cityname: '新龙县',
      cid: '01012706'
    },
    {
      cityCode: '0101270618',
      cityname: '雅江县',
      cid: '01012706'
    },
    {
      cityCode: '0101270603',
      cityname: '丹巴县',
      cid: '01012706'
    },
    {
      cityCode: '0101271202',
      cityname: '东坡区',
      cid: '01012712'
    },
    {
      cityCode: '0101271206',
      cityname: '仁寿县',
      cid: '01012712'
    },
    {
      cityCode: '0101271204',
      cityname: '彭山区',
      cid: '01012712'
    },
    {
      cityCode: '01012712',
      cityname: '眉山市',
      cid: '01012712'
    },
    {
      cityCode: '0101271205',
      cityname: '青神县',
      cid: '01012712'
    },
    {
      cityCode: '0101271201',
      cityname: '丹棱县',
      cid: '01012712'
    },
    {
      cityCode: '0101271203',
      cityname: '洪雅县',
      cid: '01012712'
    },
    {
      cityCode: '0101271308',
      cityname: '游仙区',
      cid: '01012713'
    },
    {
      cityCode: '0101271303',
      cityname: '涪城区',
      cid: '01012713'
    },
    {
      cityCode: '0101271306',
      cityname: '三台县',
      cid: '01012713'
    },
    {
      cityCode: '0101271304',
      cityname: '江油市',
      cid: '01012713'
    },
    {
      cityCode: '0101271309',
      cityname: '梓潼县',
      cid: '01012713'
    },
    {
      cityCode: '0101271302',
      cityname: '北川县',
      cid: '01012713'
    },
    {
      cityCode: '0101271307',
      cityname: '盐亭县',
      cid: '01012713'
    },
    {
      cityCode: '0101271301',
      cityname: '安州区',
      cid: '01012713'
    },
    {
      cityCode: '01012713',
      cityname: '绵阳市',
      cid: '01012713'
    },
    {
      cityCode: '0101271305',
      cityname: '平武县',
      cid: '01012713'
    },
    {
      cityCode: '0101272104',
      cityname: '荣县',
      cid: '01012721'
    },
    {
      cityCode: '0101272106',
      cityname: '自流井区',
      cid: '01012721'
    },
    {
      cityCode: '01012721',
      cityname: '自贡市',
      cid: '01012721'
    },
    {
      cityCode: '0101272105',
      cityname: '沿滩区',
      cid: '01012721'
    },
    {
      cityCode: '0101272103',
      cityname: '贡井区',
      cid: '01012721'
    },
    {
      cityCode: '0101272101',
      cityname: '大安区',
      cid: '01012721'
    },
    {
      cityCode: '0101272102',
      cityname: '富顺县',
      cid: '01012721'
    },
    {
      cityCode: '01012720',
      cityname: '资阳市',
      cid: '01012720'
    },
    {
      cityCode: '0101272001',
      cityname: '安岳县',
      cid: '01012720'
    },
    {
      cityCode: '0101272004',
      cityname: '雁江区',
      cid: '01012720'
    },
    {
      cityCode: '0101272003',
      cityname: '乐至县',
      cid: '01012720'
    },
    {
      cityCode: '0101270404',
      cityname: '渠县',
      cid: '01012704'
    },
    {
      cityCode: '0101270407',
      cityname: '宣汉县',
      cid: '01012704'
    },
    {
      cityCode: '0101270402',
      cityname: '大竹县',
      cid: '01012704'
    },
    {
      cityCode: '01012704',
      cityname: '达州市',
      cid: '01012704'
    },
    {
      cityCode: '0101270405',
      cityname: '通川区',
      cid: '01012704'
    },
    {
      cityCode: '0101270403',
      cityname: '开江县',
      cid: '01012704'
    },
    {
      cityCode: '0101270406',
      cityname: '万源市',
      cid: '01012704'
    },
    {
      cityCode: '0101270401',
      cityname: '达川区',
      cid: '01012704'
    },
    {
      cityCode: '01012717',
      cityname: '遂宁市',
      cid: '01012717'
    },
    {
      cityCode: '0101271705',
      cityname: '射洪市',
      cid: '01012717'
    },
    {
      cityCode: '0101271703',
      cityname: '大英县',
      cid: '01012717'
    },
    {
      cityCode: '0101271702',
      cityname: '船山区',
      cid: '01012717'
    },
    {
      cityCode: '0101271704',
      cityname: '蓬溪县',
      cid: '01012717'
    },
    {
      cityCode: '0101271701',
      cityname: '安居区',
      cid: '01012717'
    },
    {
      cityCode: '0101270108',
      cityname: '茂县',
      cid: '01012701'
    },
    {
      cityCode: '0101270110',
      cityname: '若尔盖县',
      cid: '01012701'
    },
    {
      cityCode: '0101270107',
      cityname: '马尔康市',
      cid: '01012701'
    },
    {
      cityCode: '0101270104',
      cityname: '金川县',
      cid: '01012701'
    },
    {
      cityCode: '0101270109',
      cityname: '壤塘县',
      cid: '01012701'
    },
    {
      cityCode: '01012701',
      cityname: '阿坝州',
      cid: '01012701'
    },
    {
      cityCode: '0101270105',
      cityname: '九寨沟县',
      cid: '01012701'
    },
    {
      cityCode: '0101270102',
      cityname: '黑水县',
      cid: '01012701'
    },
    {
      cityCode: '0101270114',
      cityname: '阿坝县',
      cid: '01012701'
    },
    {
      cityCode: '0101270106',
      cityname: '理县',
      cid: '01012701'
    },
    {
      cityCode: '0101270112',
      cityname: '汶川县',
      cid: '01012701'
    },
    {
      cityCode: '0101270113',
      cityname: '小金县',
      cid: '01012701'
    },
    {
      cityCode: '0101270111',
      cityname: '松潘县',
      cid: '01012701'
    },
    {
      cityCode: '0101270103',
      cityname: '红原县',
      cid: '01012701'
    },
    {
      cityCode: '0101271802',
      cityname: '汉源县',
      cid: '01012718'
    },
    {
      cityCode: '0101271806',
      cityname: '天全县',
      cid: '01012718'
    },
    {
      cityCode: '0101271807',
      cityname: '荥经县',
      cid: '01012718'
    },
    {
      cityCode: '0101271804',
      cityname: '名山区',
      cid: '01012718'
    },
    {
      cityCode: '0101271803',
      cityname: '芦山县',
      cid: '01012718'
    },
    {
      cityCode: '0101271808',
      cityname: '雨城区',
      cid: '01012718'
    },
    {
      cityCode: '01012718',
      cityname: '雅安市',
      cid: '01012718'
    },
    {
      cityCode: '0101271805',
      cityname: '石棉县',
      cid: '01012718'
    },
    {
      cityCode: '0101271801',
      cityname: '宝兴县',
      cid: '01012718'
    },
    {
      cityCode: '0101290103',
      cityname: '大港街道',
      cid: '01012901'
    },
    {
      cityCode: '0101290101',
      cityname: '宝坻区',
      cid: '01012901'
    },
    {
      cityCode: '0101290115',
      cityname: '宁河区',
      cid: '01012901'
    },
    {
      cityCode: '0101290112',
      cityname: '津南区',
      cid: '01012901'
    },
    {
      cityCode: '0101290102',
      cityname: '北辰区',
      cid: '01012901'
    },
    {
      cityCode: '01012901',
      cityname: '天津市',
      cid: '01012901'
    },
    {
      cityCode: '0101290111',
      cityname: '蓟州区',
      cid: '01012901'
    },
    {
      cityCode: '0101290113',
      cityname: '静海区',
      cid: '01012901'
    },
    {
      cityCode: '0101290119',
      cityname: '滨海新区',
      cid: '01012901'
    },
    {
      cityCode: '0101290114',
      cityname: '南开区',
      cid: '01012901'
    },
    {
      cityCode: '0101290110',
      cityname: '红桥区',
      cid: '01012901'
    },
    {
      cityCode: '0101290104',
      cityname: '东丽区',
      cid: '01012901'
    },
    {
      cityCode: '0101290109',
      cityname: '河西区',
      cid: '01012901'
    },
    {
      cityCode: '0101290105',
      cityname: '汉沽街道',
      cid: '01012901'
    },
    {
      cityCode: '0101290107',
      cityname: '河东区',
      cid: '01012901'
    },
    {
      cityCode: '0101290118',
      cityname: '西青区',
      cid: '01012901'
    },
    {
      cityCode: '0101290106',
      cityname: '河北区',
      cid: '01012901'
    },
    {
      cityCode: '0101290117',
      cityname: '武清区',
      cid: '01012901'
    },
    {
      cityCode: '0101290116',
      cityname: '塘沽街道',
      cid: '01012901'
    },
    {
      cityCode: '0101290108',
      cityname: '和平区',
      cid: '01012901'
    },
    {
      cityCode: '0101210502',
      cityname: '沙坡头区',
      cid: '01012105'
    },
    {
      cityCode: '01012105',
      cityname: '中卫市',
      cid: '01012105'
    },
    {
      cityCode: '0101210501',
      cityname: '海原县',
      cid: '01012105'
    },
    {
      cityCode: '0101210503',
      cityname: '中宁县',
      cid: '01012105'
    },
    {
      cityCode: '0101210303',
      cityname: '同心县',
      cid: '01012103'
    },
    {
      cityCode: '0101210305',
      cityname: '红寺堡区',
      cid: '01012103'
    },
    {
      cityCode: '0101210304',
      cityname: '盐池县',
      cid: '01012103'
    },
    {
      cityCode: '0101210301',
      cityname: '利通区',
      cid: '01012103'
    },
    {
      cityCode: '01012103',
      cityname: '吴忠市',
      cid: '01012103'
    },
    {
      cityCode: '0101210302',
      cityname: '青铜峡市',
      cid: '01012103'
    },
    {
      cityCode: '0101210104',
      cityname: '西吉县',
      cid: '01012101'
    },
    {
      cityCode: '0101210101',
      cityname: '泾源县',
      cid: '01012101'
    },
    {
      cityCode: '0101210102',
      cityname: '隆德县',
      cid: '01012101'
    },
    {
      cityCode: '01012101',
      cityname: '固原市',
      cid: '01012101'
    },
    {
      cityCode: '0101210103',
      cityname: '彭阳县',
      cid: '01012101'
    },
    {
      cityCode: '0101210105',
      cityname: '原州区',
      cid: '01012101'
    },
    {
      cityCode: '0101210202',
      cityname: '惠农区',
      cid: '01012102'
    },
    {
      cityCode: '01012102',
      cityname: '石嘴山市',
      cid: '01012102'
    },
    {
      cityCode: '0101210201',
      cityname: '大武口区',
      cid: '01012102'
    },
    {
      cityCode: '0101210203',
      cityname: '平罗县',
      cid: '01012102'
    },
    {
      cityCode: '0101210204',
      cityname: '陶乐镇',
      cid: '01012102'
    },
    {
      cityCode: '01012104',
      cityname: '银川市',
      cid: '01012104'
    },
    {
      cityCode: '0101210405',
      cityname: '兴庆区',
      cid: '01012104'
    },
    {
      cityCode: '0101210403',
      cityname: '灵武市',
      cid: '01012104'
    },
    {
      cityCode: '0101210404',
      cityname: '西夏区',
      cid: '01012104'
    },
    {
      cityCode: '0101210406',
      cityname: '永宁县',
      cid: '01012104'
    },
    {
      cityCode: '0101210402',
      cityname: '金凤区',
      cid: '01012104'
    },
    {
      cityCode: '0101210401',
      cityname: '贺兰县',
      cid: '01012104'
    },
    {
      cityCode: '0101020302',
      cityname: '利辛县',
      cid: '01010203'
    },
    {
      cityCode: '0101020304',
      cityname: '谯城区',
      cid: '01010203'
    },
    {
      cityCode: '0101020301',
      cityname: '涡阳县',
      cid: '01010203'
    },
    {
      cityCode: '0101020303',
      cityname: '蒙城县',
      cid: '01010203'
    },
    {
      cityCode: '01010203',
      cityname: '亳州市',
      cid: '01010203'
    },
    {
      cityCode: '0101021206',
      cityname: '舒城县',
      cid: '01010212'
    },
    {
      cityCode: '0101021204',
      cityname: '金寨县',
      cid: '01010212'
    },
    {
      cityCode: '0101021203',
      cityname: '金安区',
      cid: '01010212'
    },
    {
      cityCode: '0101021202',
      cityname: '霍山县',
      cid: '01010212'
    },
    {
      cityCode: '0101021201',
      cityname: '霍邱县',
      cid: '01010212'
    },
    {
      cityCode: '01010212',
      cityname: '六安市',
      cid: '01010212'
    },
    {
      cityCode: '0101021208',
      cityname: '叶集区',
      cid: '01010212'
    },
    {
      cityCode: '0101021209',
      cityname: '六安市裕安区经济开发区',
      cid: '01010212'
    },
    {
      cityCode: '0101021207',
      cityname: '裕安区',
      cid: '01010212'
    },
    {
      cityCode: '0101020805',
      cityname: '庐阳区',
      cid: '01010208'
    },
    {
      cityCode: '01010204',
      cityname: '巢湖市',
      cid: '01010208'
    },
    {
      cityCode: '0101020801',
      cityname: '包河区',
      cid: '01010208'
    },
    {
      cityCode: '0101020803',
      cityname: '肥东县',
      cid: '01010208'
    },
    {
      cityCode: '0101020404',
      cityname: '庐江县',
      cid: '01010208'
    },
    {
      cityCode: '0101020804',
      cityname: '肥西县',
      cid: '01010208'
    },
    {
      cityCode: '0101020802',
      cityname: '长丰县',
      cid: '01010208'
    },
    {
      cityCode: '0101020807',
      cityname: '瑶海区',
      cid: '01010208'
    },
    {
      cityCode: '01010208',
      cityname: '合肥市',
      cid: '01010208'
    },
    {
      cityCode: '0101020806',
      cityname: '蜀山区',
      cid: '01010208'
    },
    {
      cityCode: '0101020110',
      cityname: '岳西县',
      cid: '01010201'
    },
    {
      cityCode: '01010201',
      cityname: '安庆市',
      cid: '01010201'
    },
    {
      cityCode: '0101020102',
      cityname: '怀宁县',
      cid: '01010201'
    },
    {
      cityCode: '0101020104',
      cityname: '宿松县',
      cid: '01010201'
    },
    {
      cityCode: '0101020107',
      cityname: '望江县',
      cid: '01010201'
    },
    {
      cityCode: '0101020105',
      cityname: '太湖县',
      cid: '01010201'
    },
    {
      cityCode: '0101020106',
      cityname: '桐城市',
      cid: '01010201'
    },
    {
      cityCode: '0101020103',
      cityname: '潜山市',
      cid: '01010201'
    },
    {
      cityCode: '0101020109',
      cityname: '迎江区',
      cid: '01010201'
    },
    {
      cityCode: '0101020108',
      cityname: '宜秀区',
      cid: '01010201'
    },
    {
      cityCode: '0101020101',
      cityname: '大观区',
      cid: '01010201'
    },
    {
      cityCode: '0101021705',
      cityname: '郎溪县',
      cid: '01010217'
    },
    {
      cityCode: '0101021703',
      cityname: '旌德县',
      cid: '01010217'
    },
    {
      cityCode: '0101021702',
      cityname: '绩溪县',
      cid: '01010217'
    },
    {
      cityCode: '0101021707',
      cityname: '宣州区',
      cid: '01010217'
    },
    {
      cityCode: '0101021706',
      cityname: '宁国市',
      cid: '01010217'
    },
    {
      cityCode: '0101021704',
      cityname: '泾县',
      cid: '01010217'
    },
    {
      cityCode: '01010217',
      cityname: '宣城市',
      cid: '01010217'
    },
    {
      cityCode: '0101021701',
      cityname: '广德市',
      cid: '01010217'
    },
    {
      cityCode: '0101021401',
      cityname: '砀山县',
      cid: '01010214'
    },
    {
      cityCode: '0101021402',
      cityname: '灵璧县',
      cid: '01010214'
    },
    {
      cityCode: '0101021403',
      cityname: '泗县',
      cid: '01010214'
    },
    {
      cityCode: '01010214',
      cityname: '宿州市',
      cid: '01010214'
    },
    {
      cityCode: '0101021405',
      cityname: '埇桥区',
      cid: '01010214'
    },
    {
      cityCode: '0101021404',
      cityname: '萧县',
      cid: '01010214'
    },
    {
      cityCode: '0101020501',
      cityname: '东至县',
      cid: '01010205'
    },
    {
      cityCode: '0101020504',
      cityname: '石台县',
      cid: '01010205'
    },
    {
      cityCode: '0101020502',
      cityname: '贵池区',
      cid: '01010205'
    },
    {
      cityCode: '01010205',
      cityname: '池州市',
      cid: '01010205'
    },
    {
      cityCode: '0101020503',
      cityname: '青阳县',
      cid: '01010205'
    },
    {
      cityCode: '0101020903',
      cityname: '濉溪县',
      cid: '01010209'
    },
    {
      cityCode: '0101020904',
      cityname: '相山区',
      cid: '01010209'
    },
    {
      cityCode: '0101020902',
      cityname: '烈山区',
      cid: '01010209'
    },
    {
      cityCode: '0101020901',
      cityname: '杜集区',
      cid: '01010209'
    },
    {
      cityCode: '01010209',
      cityname: '淮北市',
      cid: '01010209'
    },
    {
      cityCode: '0101021205',
      cityname: '寿县',
      cid: '01010210'
    },
    {
      cityCode: '01010210',
      cityname: '淮南市',
      cid: '01010210'
    },
    {
      cityCode: '0101021006',
      cityname: '谢家集区',
      cid: '01010210'
    },
    {
      cityCode: '0101021005',
      cityname: '田家庵区',
      cid: '01010210'
    },
    {
      cityCode: '0101021002',
      cityname: '大通区',
      cid: '01010210'
    },
    {
      cityCode: '0101021003',
      cityname: '凤台县',
      cid: '01010210'
    },
    {
      cityCode: '0101021001',
      cityname: '八公山区',
      cid: '01010210'
    },
    {
      cityCode: '0101021004',
      cityname: '潘集区',
      cid: '01010210'
    },
    {
      cityCode: '0101020607',
      cityname: '全椒县',
      cid: '01010206'
    },
    {
      cityCode: '0101020601',
      cityname: '定远县',
      cid: '01010206'
    },
    {
      cityCode: '01010206',
      cityname: '滁州市',
      cid: '01010206'
    },
    {
      cityCode: '0101020606',
      cityname: '南谯区',
      cid: '01010206'
    },
    {
      cityCode: '0101020604',
      cityname: '琅琊区',
      cid: '01010206'
    },
    {
      cityCode: '0101020608',
      cityname: '天长市',
      cid: '01010206'
    },
    {
      cityCode: '0101020602',
      cityname: '凤阳县',
      cid: '01010206'
    },
    {
      cityCode: '0101020605',
      cityname: '明光市',
      cid: '01010206'
    },
    {
      cityCode: '0101020603',
      cityname: '来安县',
      cid: '01010206'
    },
    {
      cityCode: '0101021604',
      cityname: '南陵县',
      cid: '01010216'
    },
    {
      cityCode: '0101021607',
      cityname: '弋江区',
      cid: '01010216'
    },
    {
      cityCode: '0101021605',
      cityname: '三山区',
      cid: '01010216'
    },
    {
      cityCode: '0101021603',
      cityname: '鸠江区',
      cid: '01010216'
    },
    {
      cityCode: '0101021608',
      cityname: '湾沚区',
      cid: '01010216'
    },
    {
      cityCode: '0101020405',
      cityname: '无为市',
      cid: '01010216'
    },
    {
      cityCode: '0101021602',
      cityname: '镜湖区',
      cid: '01010216'
    },
    {
      cityCode: '01010216',
      cityname: '芜湖市',
      cid: '01010216'
    },
    {
      cityCode: '0101021601',
      cityname: '繁昌区',
      cid: '01010216'
    },
    {
      cityCode: '0101020207',
      cityname: '禹会区',
      cid: '01010202'
    },
    {
      cityCode: '0101020202',
      cityname: '固镇县',
      cid: '01010202'
    },
    {
      cityCode: '0101020205',
      cityname: '龙子湖区',
      cid: '01010202'
    },
    {
      cityCode: '0101020203',
      cityname: '淮上区',
      cid: '01010202'
    },
    {
      cityCode: '01010202',
      cityname: '蚌埠市',
      cid: '01010202'
    },
    {
      cityCode: '0101020204',
      cityname: '怀远县',
      cid: '01010202'
    },
    {
      cityCode: '0101020201',
      cityname: '蚌山区',
      cid: '01010202'
    },
    {
      cityCode: '0101020206',
      cityname: '五河县',
      cid: '01010202'
    },
    {
      cityCode: '0101021504',
      cityname: '义安区',
      cid: '01010215'
    },
    {
      cityCode: '01010215',
      cityname: '铜陵市',
      cid: '01010215'
    },
    {
      cityCode: '0101020111',
      cityname: '枞阳县',
      cid: '01010215'
    },
    {
      cityCode: '0101021503',
      cityname: '铜官区',
      cid: '01010215'
    },
    {
      cityCode: '0101021502',
      cityname: '狮子山区虚镇',
      cid: '01010215'
    },
    {
      cityCode: '0101021505',
      cityname: '郊区',
      cid: '01010215'
    },
    {
      cityCode: '0101020707',
      cityname: '颍上县',
      cid: '01010207'
    },
    {
      cityCode: '0101020708',
      cityname: '颍州区',
      cid: '01010207'
    },
    {
      cityCode: '0101020701',
      cityname: '阜南县',
      cid: '01010207'
    },
    {
      cityCode: '0101020706',
      cityname: '颍泉区',
      cid: '01010207'
    },
    {
      cityCode: '0101020705',
      cityname: '颍东区',
      cid: '01010207'
    },
    {
      cityCode: '0101020703',
      cityname: '临泉县',
      cid: '01010207'
    },
    {
      cityCode: '0101020702',
      cityname: '界首市',
      cid: '01010207'
    },
    {
      cityCode: '01010207',
      cityname: '阜阳市',
      cid: '01010207'
    },
    {
      cityCode: '0101020704',
      cityname: '太和县',
      cid: '01010207'
    },
    {
      cityCode: '0101021303',
      cityname: '金家庄街道',
      cid: '01010213'
    },
    {
      cityCode: '0101021302',
      cityname: '花山区',
      cid: '01010213'
    },
    {
      cityCode: '0101020401',
      cityname: '含山县',
      cid: '01010213'
    },
    {
      cityCode: '0101021301',
      cityname: '当涂县',
      cid: '01010213'
    },
    {
      cityCode: '0101021305',
      cityname: '博望区',
      cid: '01010213'
    },
    {
      cityCode: '01010213',
      cityname: '马鞍山市',
      cid: '01010213'
    },
    {
      cityCode: '0101020402',
      cityname: '和县',
      cid: '01010213'
    },
    {
      cityCode: '0101021304',
      cityname: '雨山区',
      cid: '01010213'
    },
    {
      cityCode: '0101021105',
      cityname: '屯溪区',
      cid: '01010211'
    },
    {
      cityCode: '0101021103',
      cityname: '祁门县',
      cid: '01010211'
    },
    {
      cityCode: '0101021104',
      cityname: '歙县',
      cid: '01010211'
    },
    {
      cityCode: '0101021102',
      cityname: '徽州区',
      cid: '01010211'
    },
    {
      cityCode: '0101021107',
      cityname: '黟县',
      cid: '01010211'
    },
    {
      cityCode: '01010211',
      cityname: '黄山市',
      cid: '01010211'
    },
    {
      cityCode: '0101021101',
      cityname: '黄山区',
      cid: '01010211'
    },
    {
      cityCode: '0101021106',
      cityname: '休宁县',
      cid: '01010211'
    },
    {
      cityCode: '01012303',
      cityname: '东营市',
      cid: '01012303'
    },
    {
      cityCode: '0101230303',
      cityname: '河口区',
      cid: '01012303'
    },
    {
      cityCode: '0101230304',
      cityname: '垦利区',
      cid: '01012303'
    },
    {
      cityCode: '0101230302',
      cityname: '广饶县',
      cid: '01012303'
    },
    {
      cityCode: '0101230306',
      cityname: '东营区',
      cid: '01012303'
    },
    {
      cityCode: '0101230305',
      cityname: '利津县',
      cid: '01012303'
    },
    {
      cityCode: '0101230909',
      cityname: '平邑县',
      cid: '01012309'
    },
    {
      cityCode: '0101230906',
      cityname: '临沭县',
      cid: '01012309'
    },
    {
      cityCode: '0101230912',
      cityname: '沂水县',
      cid: '01012309'
    },
    {
      cityCode: '01012309',
      cityname: '临沂市',
      cid: '01012309'
    },
    {
      cityCode: '0101230904',
      cityname: '莒南县',
      cid: '01012309'
    },
    {
      cityCode: '0101230907',
      cityname: '罗庄区',
      cid: '01012309'
    },
    {
      cityCode: '0101230905',
      cityname: '兰山区',
      cid: '01012309'
    },
    {
      cityCode: '0101230903',
      cityname: '河东区',
      cid: '01012309'
    },
    {
      cityCode: '0101230902',
      cityname: '费县',
      cid: '01012309'
    },
    {
      cityCode: '0101230908',
      cityname: '蒙阴县',
      cid: '01012309'
    },
    {
      cityCode: '0101230911',
      cityname: '沂南县',
      cid: '01012309'
    },
    {
      cityCode: '0101230910',
      cityname: '郯城县',
      cid: '01012309'
    },
    {
      cityCode: '0101230901',
      cityname: '兰陵县',
      cid: '01012309'
    },
    {
      cityCode: '01012313',
      cityname: '威海市',
      cid: '01012313'
    },
    {
      cityCode: '0101231303',
      cityname: '乳山市',
      cid: '01012313'
    },
    {
      cityCode: '0101231302',
      cityname: '荣成市',
      cid: '01012313'
    },
    {
      cityCode: '0101231301',
      cityname: '环翠区',
      cid: '01012313'
    },
    {
      cityCode: '0101231304',
      cityname: '文登区',
      cid: '01012313'
    },
    {
      cityCode: '01012302',
      cityname: '德州市',
      cid: '01012302'
    },
    {
      cityCode: '0101230209',
      cityname: '武城县',
      cid: '01012302'
    },
    {
      cityCode: '0101230212',
      cityname: '德城区',
      cid: '01012302'
    },
    {
      cityCode: '0101230208',
      cityname: '庆云县',
      cid: '01012302'
    },
    {
      cityCode: '0101230207',
      cityname: '齐河县',
      cid: '01012302'
    },
    {
      cityCode: '0101230210',
      cityname: '夏津县',
      cid: '01012302'
    },
    {
      cityCode: '0101230205',
      cityname: '宁津县',
      cid: '01012302'
    },
    {
      cityCode: '0101230211',
      cityname: '禹城市',
      cid: '01012302'
    },
    {
      cityCode: '0101230206',
      cityname: '平原县',
      cid: '01012302'
    },
    {
      cityCode: '0101230204',
      cityname: '陵城区',
      cid: '01012302'
    },
    {
      cityCode: '0101230202',
      cityname: '乐陵市',
      cid: '01012302'
    },
    {
      cityCode: '0101230203',
      cityname: '临邑县',
      cid: '01012302'
    },
    {
      cityCode: '0101231104',
      cityname: '五莲县',
      cid: '01012311'
    },
    {
      cityCode: '0101231102',
      cityname: '莒县',
      cid: '01012311'
    },
    {
      cityCode: '0101231105',
      cityname: '东港区',
      cid: '01012311'
    },
    {
      cityCode: '01012311',
      cityname: '日照市',
      cid: '01012311'
    },
    {
      cityCode: '0101231103',
      cityname: '岚山区',
      cid: '01012311'
    },
    {
      cityCode: '0101231603',
      cityname: '台儿庄区',
      cid: '01012316'
    },
    {
      cityCode: '01012316',
      cityname: '枣庄市',
      cid: '01012316'
    },
    {
      cityCode: '0101231601',
      cityname: '山亭区',
      cid: '01012316'
    },
    {
      cityCode: '0101231604',
      cityname: '滕州市',
      cid: '01012316'
    },
    {
      cityCode: '0101231606',
      cityname: '峄城区',
      cid: '01012316'
    },
    {
      cityCode: '0101231607',
      cityname: '市中区',
      cid: '01012316'
    },
    {
      cityCode: '0101231605',
      cityname: '薛城区',
      cid: '01012316'
    },
    {
      cityCode: '0101231204',
      cityname: '宁阳县',
      cid: '01012312'
    },
    {
      cityCode: '01012312',
      cityname: '泰安市',
      cid: '01012312'
    },
    {
      cityCode: '0101231206',
      cityname: '新泰市',
      cid: '01012312'
    },
    {
      cityCode: '0101231203',
      cityname: '肥城市',
      cid: '01012312'
    },
    {
      cityCode: '0101231205',
      cityname: '泰山区',
      cid: '01012312'
    },
    {
      cityCode: '0101231201',
      cityname: '岱岳区',
      cid: '01012312'
    },
    {
      cityCode: '0101231202',
      cityname: '东平县',
      cid: '01012312'
    },
    {
      cityCode: '0101230501',
      cityname: '长清区',
      cid: '01012305'
    },
    {
      cityCode: '0101230510',
      cityname: '章丘区',
      cid: '01012305'
    },
    {
      cityCode: '0101230507',
      cityname: '商河县',
      cid: '01012305'
    },
    {
      cityCode: '0101230702',
      cityname: '莱芜区',
      cid: '01012305'
    },
    {
      cityCode: '0101230701',
      cityname: '钢城区',
      cid: '01012305'
    },
    {
      cityCode: '01012305',
      cityname: '济南市',
      cid: '01012305'
    },
    {
      cityCode: '0101230503',
      cityname: '济阳区',
      cid: '01012305'
    },
    {
      cityCode: '0101230511',
      cityname: '市中区',
      cid: '01012305'
    },
    {
      cityCode: '0101230509',
      cityname: '天桥区',
      cid: '01012305'
    },
    {
      cityCode: '0101230505',
      cityname: '历下区',
      cid: '01012305'
    },
    {
      cityCode: '0101230504',
      cityname: '历城区',
      cid: '01012305'
    },
    {
      cityCode: '0101230502',
      cityname: '槐荫区',
      cid: '01012305'
    },
    {
      cityCode: '0101230506',
      cityname: '平阴县',
      cid: '01012305'
    },
    {
      cityCode: '0101230601',
      cityname: '嘉祥县',
      cid: '01012306'
    },
    {
      cityCode: '0101230610',
      cityname: '兖州区',
      cid: '01012306'
    },
    {
      cityCode: '0101230611',
      cityname: '鱼台县',
      cid: '01012306'
    },
    {
      cityCode: '01012306',
      cityname: '济宁市',
      cid: '01012306'
    },
    {
      cityCode: '0101230609',
      cityname: '汶上县',
      cid: '01012306'
    },
    {
      cityCode: '0101230603',
      cityname: '梁山县',
      cid: '01012306'
    },
    {
      cityCode: '0101230607',
      cityname: '泗水县',
      cid: '01012306'
    },
    {
      cityCode: '0101230602',
      cityname: '金乡县',
      cid: '01012306'
    },
    {
      cityCode: '0101230605',
      cityname: '任城区',
      cid: '01012306'
    },
    {
      cityCode: '0101230608',
      cityname: '微山县',
      cid: '01012306'
    },
    {
      cityCode: '0101230604',
      cityname: '曲阜市',
      cid: '01012306'
    },
    {
      cityCode: '0101230612',
      cityname: '邹城市',
      cid: '01012306'
    },
    {
      cityCode: '0101231708',
      cityname: '淄川区',
      cid: '01012317'
    },
    {
      cityCode: '0101231705',
      cityname: '沂源县',
      cid: '01012317'
    },
    {
      cityCode: '0101231707',
      cityname: '周村区',
      cid: '01012317'
    },
    {
      cityCode: '0101231706',
      cityname: '张店区',
      cid: '01012317'
    },
    {
      cityCode: '0101231703',
      cityname: '桓台县',
      cid: '01012317'
    },
    {
      cityCode: '01012317',
      cityname: '淄博市',
      cid: '01012317'
    },
    {
      cityCode: '0101231704',
      cityname: '临淄区',
      cid: '01012317'
    },
    {
      cityCode: '0101231702',
      cityname: '高青县',
      cid: '01012317'
    },
    {
      cityCode: '0101231701',
      cityname: '博山区',
      cid: '01012317'
    },
    {
      cityCode: '0101230108',
      cityname: '滨城区',
      cid: '01012301'
    },
    {
      cityCode: '0101230107',
      cityname: '邹平市',
      cid: '01012301'
    },
    {
      cityCode: '0101230102',
      cityname: '博兴县',
      cid: '01012301'
    },
    {
      cityCode: '0101230105',
      cityname: '阳信县',
      cid: '01012301'
    },
    {
      cityCode: '0101230104',
      cityname: '无棣县',
      cid: '01012301'
    },
    {
      cityCode: '01012301',
      cityname: '滨州市',
      cid: '01012301'
    },
    {
      cityCode: '0101230106',
      cityname: '沾化区',
      cid: '01012301'
    },
    {
      cityCode: '0101230103',
      cityname: '惠民县',
      cid: '01012301'
    },
    {
      cityCode: '0101231412',
      cityname: '诸城市',
      cid: '01012314'
    },
    {
      cityCode: '0101231409',
      cityname: '青州市',
      cid: '01012314'
    },
    {
      cityCode: '0101231401',
      cityname: '安丘市',
      cid: '01012314'
    },
    {
      cityCode: '0101231405',
      cityname: '高密市',
      cid: '01012314'
    },
    {
      cityCode: '0101231402',
      cityname: '昌乐县',
      cid: '01012314'
    },
    {
      cityCode: '0101231408',
      cityname: '临朐县',
      cid: '01012314'
    },
    {
      cityCode: '0101231403',
      cityname: '昌邑市',
      cid: '01012314'
    },
    {
      cityCode: '0101231513',
      cityname: '潍城区',
      cid: '01012314'
    },
    {
      cityCode: '01012314',
      cityname: '潍坊市',
      cid: '01012314'
    },
    {
      cityCode: '0101231407',
      cityname: '奎文区',
      cid: '01012314'
    },
    {
      cityCode: '0101231406',
      cityname: '寒亭区',
      cid: '01012314'
    },
    {
      cityCode: '0101231404',
      cityname: '坊子区',
      cid: '01012314'
    },
    {
      cityCode: '0101231410',
      cityname: '寿光市',
      cid: '01012314'
    },
    {
      cityCode: '0101231508',
      cityname: '牟平区',
      cid: '01012315'
    },
    {
      cityCode: '0101231502',
      cityname: '福山区',
      cid: '01012315'
    },
    {
      cityCode: '0101231507',
      cityname: '龙口市',
      cid: '01012315'
    },
    {
      cityCode: '0101231506',
      cityname: '莱州市',
      cid: '01012315'
    },
    {
      cityCode: '0101231509',
      cityname: '蓬莱区',
      cid: '01012315'
    },
    {
      cityCode: '0101231510',
      cityname: '栖霞市',
      cid: '01012315'
    },
    {
      cityCode: '0101231503',
      cityname: '海阳市',
      cid: '01012315'
    },
    {
      cityCode: '0101231511',
      cityname: '招远市',
      cid: '01012315'
    },
    {
      cityCode: '01012315',
      cityname: '烟台市',
      cid: '01012315'
    },
    {
      cityCode: '0101231512',
      cityname: '芝罘区',
      cid: '01012315'
    },
    {
      cityCode: '0101231504',
      cityname: '莱山区',
      cid: '01012315'
    },
    {
      cityCode: '0101231505',
      cityname: '莱阳市',
      cid: '01012315'
    },
    {
      cityCode: '0101230804',
      cityname: '高唐县',
      cid: '01012308'
    },
    {
      cityCode: '0101230803',
      cityname: '东阿县',
      cid: '01012308'
    },
    {
      cityCode: '0101230801',
      cityname: '茌平区',
      cid: '01012308'
    },
    {
      cityCode: '0101230808',
      cityname: '阳谷县',
      cid: '01012308'
    },
    {
      cityCode: '0101230802',
      cityname: '东昌府区',
      cid: '01012308'
    },
    {
      cityCode: '0101230806',
      cityname: '临清市',
      cid: '01012308'
    },
    {
      cityCode: '0101230805',
      cityname: '冠县',
      cid: '01012308'
    },
    {
      cityCode: '0101230807',
      cityname: '莘县',
      cid: '01012308'
    },
    {
      cityCode: '01012308',
      cityname: '聊城市',
      cid: '01012308'
    },
    {
      cityCode: '0101230408',
      cityname: '单县',
      cid: '01012304'
    },
    {
      cityCode: '0101230401',
      cityname: '曹县',
      cid: '01012304'
    },
    {
      cityCode: '0101230404',
      cityname: '东明县',
      cid: '01012304'
    },
    {
      cityCode: '0101230402',
      cityname: '成武县',
      cid: '01012304'
    },
    {
      cityCode: '0101230405',
      cityname: '巨野县',
      cid: '01012304'
    },
    {
      cityCode: '0101230409',
      cityname: '郓城县',
      cid: '01012304'
    },
    {
      cityCode: '0101230403',
      cityname: '定陶区',
      cid: '01012304'
    },
    {
      cityCode: '01012304',
      cityname: '菏泽市',
      cid: '01012304'
    },
    {
      cityCode: '0101230406',
      cityname: '鄄城县',
      cid: '01012304'
    },
    {
      cityCode: '0101230407',
      cityname: '牡丹区',
      cid: '01012304'
    },
    {
      cityCode: '0101231003',
      cityname: '即墨区',
      cid: '01012310'
    },
    {
      cityCode: '0101231012',
      cityname: '市北区',
      cid: '01012310'
    },
    {
      cityCode: '0101231008',
      cityname: '李沧区',
      cid: '01012310'
    },
    {
      cityCode: '0101231006',
      cityname: '莱西市',
      cid: '01012310'
    },
    {
      cityCode: '0101231002',
      cityname: '黄岛区',
      cid: '01012310'
    },
    {
      cityCode: '0101231001',
      cityname: '城阳区',
      cid: '01012310'
    },
    {
      cityCode: '0101231009',
      cityname: '平度市',
      cid: '01012310'
    },
    {
      cityCode: '0101231013',
      cityname: '市南区',
      cid: '01012310'
    },
    {
      cityCode: '0101231007',
      cityname: '崂山区',
      cid: '01012310'
    },
    {
      cityCode: '01012310',
      cityname: '青岛市',
      cid: '01012310'
    },
    {
      cityCode: '0101231005',
      cityname: '胶州市',
      cid: '01012310'
    },
    {
      cityCode: '0101240507',
      cityname: '侯马市',
      cid: '01012405'
    },
    {
      cityCode: '0101240515',
      cityname: '尧都区',
      cid: '01012405'
    },
    {
      cityCode: '0101240504',
      cityname: '浮山县',
      cid: '01012405'
    },
    {
      cityCode: '0101240517',
      cityname: '永和县',
      cid: '01012405'
    },
    {
      cityCode: '0101240508',
      cityname: '霍州市',
      cid: '01012405'
    },
    {
      cityCode: '0101240502',
      cityname: '大宁县',
      cid: '01012405'
    },
    {
      cityCode: '0101240503',
      cityname: '汾西县',
      cid: '01012405'
    },
    {
      cityCode: '01012405',
      cityname: '临汾市',
      cid: '01012405'
    },
    {
      cityCode: '0101240513',
      cityname: '襄汾县',
      cid: '01012405'
    },
    {
      cityCode: '0101240512',
      cityname: '隰县',
      cid: '01012405'
    },
    {
      cityCode: '0101240514',
      cityname: '乡宁县',
      cid: '01012405'
    },
    {
      cityCode: '0101240509',
      cityname: '吉县',
      cid: '01012405'
    },
    {
      cityCode: '0101240510',
      cityname: '蒲县',
      cid: '01012405'
    },
    {
      cityCode: '0101240516',
      cityname: '翼城县',
      cid: '01012405'
    },
    {
      cityCode: '0101240506',
      cityname: '洪洞县',
      cid: '01012405'
    },
    {
      cityCode: '0101240505',
      cityname: '古县',
      cid: '01012405'
    },
    {
      cityCode: '0101240511',
      cityname: '曲沃县',
      cid: '01012405'
    },
    {
      cityCode: '0101240501',
      cityname: '安泽县',
      cid: '01012405'
    },
    {
      cityCode: '0101240613',
      cityname: '中阳县',
      cid: '01012406'
    },
    {
      cityCode: '0101240603',
      cityname: '交城县',
      cid: '01012406'
    },
    {
      cityCode: '0101240601',
      cityname: '方山县',
      cid: '01012406'
    },
    {
      cityCode: '0101240610',
      cityname: '文水县',
      cid: '01012406'
    },
    {
      cityCode: '0101240609',
      cityname: '石楼县',
      cid: '01012406'
    },
    {
      cityCode: '0101240607',
      cityname: '临县',
      cid: '01012406'
    },
    {
      cityCode: '01012406',
      cityname: '吕梁市',
      cid: '01012406'
    },
    {
      cityCode: '0101240602',
      cityname: '汾阳市',
      cid: '01012406'
    },
    {
      cityCode: '0101240608',
      cityname: '柳林县',
      cid: '01012406'
    },
    {
      cityCode: '0101240612',
      cityname: '兴县',
      cid: '01012406'
    },
    {
      cityCode: '0101240604',
      cityname: '交口县',
      cid: '01012406'
    },
    {
      cityCode: '0101240611',
      cityname: '孝义市',
      cid: '01012406'
    },
    {
      cityCode: '0101240605',
      cityname: '岚县',
      cid: '01012406'
    },
    {
      cityCode: '0101240606',
      cityname: '离石区',
      cid: '01012406'
    },
    {
      cityCode: '0101240209',
      cityname: '新荣区',
      cid: '01012402'
    },
    {
      cityCode: '0101240207',
      cityname: '平城区',
      cid: '01012402'
    },
    {
      cityCode: '0101240205',
      cityname: '云冈区',
      cid: '01012402'
    },
    {
      cityCode: '0101240204',
      cityname: '浑源县',
      cid: '01012402'
    },
    {
      cityCode: '0101240212',
      cityname: '云州区',
      cid: '01012402'
    },
    {
      cityCode: '0101240208',
      cityname: '天镇县',
      cid: '01012402'
    },
    {
      cityCode: '0101240210',
      cityname: '阳高县',
      cid: '01012402'
    },
    {
      cityCode: '0101240206',
      cityname: '灵丘县',
      cid: '01012402'
    },
    {
      cityCode: '0101240211',
      cityname: '左云县',
      cid: '01012402'
    },
    {
      cityCode: '01012402',
      cityname: '大同市',
      cid: '01012402'
    },
    {
      cityCode: '0101240203',
      cityname: '广灵县',
      cid: '01012402'
    },
    {
      cityCode: '0101240809',
      cityname: '阳曲县',
      cid: '01012408'
    },
    {
      cityCode: '0101240801',
      cityname: '古交市',
      cid: '01012408'
    },
    {
      cityCode: '0101240804',
      cityname: '娄烦县',
      cid: '01012408'
    },
    {
      cityCode: '0101240807',
      cityname: '小店区',
      cid: '01012408'
    },
    {
      cityCode: '0101240805',
      cityname: '清徐县',
      cid: '01012408'
    },
    {
      cityCode: '0101240810',
      cityname: '迎泽区',
      cid: '01012408'
    },
    {
      cityCode: '0101240802',
      cityname: '尖草坪区',
      cid: '01012408'
    },
    {
      cityCode: '0101240808',
      cityname: '杏花岭区',
      cid: '01012408'
    },
    {
      cityCode: '0101240806',
      cityname: '万柏林区',
      cid: '01012408'
    },
    {
      cityCode: '0101240803',
      cityname: '晋源区',
      cid: '01012408'
    },
    {
      cityCode: '01012408',
      cityname: '太原市',
      cid: '01012408'
    },
    {
      cityCode: '0101240904',
      cityname: '繁峙县',
      cid: '01012409'
    },
    {
      cityCode: '0101240912',
      cityname: '五寨县',
      cid: '01012409'
    },
    {
      cityCode: '0101240901',
      cityname: '保德县',
      cid: '01012409'
    },
    {
      cityCode: '0101240909',
      cityname: '偏关县',
      cid: '01012409'
    },
    {
      cityCode: '0101240910',
      cityname: '神池县',
      cid: '01012409'
    },
    {
      cityCode: '0101240902',
      cityname: '代县',
      cid: '01012409'
    },
    {
      cityCode: '0101240914',
      cityname: '原平市',
      cid: '01012409'
    },
    {
      cityCode: '0101240907',
      cityname: '岢岚县',
      cid: '01012409'
    },
    {
      cityCode: '0101240913',
      cityname: '忻府区',
      cid: '01012409'
    },
    {
      cityCode: '0101240905',
      cityname: '河曲县',
      cid: '01012409'
    },
    {
      cityCode: '0101240911',
      cityname: '五台县',
      cid: '01012409'
    },
    {
      cityCode: '0101240906',
      cityname: '静乐县',
      cid: '01012409'
    },
    {
      cityCode: '01012409',
      cityname: '忻州市',
      cid: '01012409'
    },
    {
      cityCode: '0101240903',
      cityname: '定襄县',
      cid: '01012409'
    },
    {
      cityCode: '0101240908',
      cityname: '宁武县',
      cid: '01012409'
    },
    {
      cityCode: '0101240404',
      cityname: '平遥县',
      cid: '01012404'
    },
    {
      cityCode: '0101240411',
      cityname: '左权县',
      cid: '01012404'
    },
    {
      cityCode: '0101240407',
      cityname: '太谷区',
      cid: '01012404'
    },
    {
      cityCode: '0101240403',
      cityname: '灵石县',
      cid: '01012404'
    },
    {
      cityCode: '0101240405',
      cityname: '祁县',
      cid: '01012404'
    },
    {
      cityCode: '0101240408',
      cityname: '昔阳县',
      cid: '01012404'
    },
    {
      cityCode: '0101240406',
      cityname: '寿阳县',
      cid: '01012404'
    },
    {
      cityCode: '0101240409',
      cityname: '榆次区',
      cid: '01012404'
    },
    {
      cityCode: '01012404',
      cityname: '晋中市',
      cid: '01012404'
    },
    {
      cityCode: '0101240401',
      cityname: '和顺县',
      cid: '01012404'
    },
    {
      cityCode: '0101240410',
      cityname: '榆社县',
      cid: '01012404'
    },
    {
      cityCode: '0101240402',
      cityname: '介休市',
      cid: '01012404'
    },
    {
      cityCode: '01012403',
      cityname: '晋城市',
      cid: '01012403'
    },
    {
      cityCode: '0101240306',
      cityname: '泽州县',
      cid: '01012403'
    },
    {
      cityCode: '0101240307',
      cityname: '城区',
      cid: '01012403'
    },
    {
      cityCode: '0101240305',
      cityname: '阳城县',
      cid: '01012403'
    },
    {
      cityCode: '0101240304',
      cityname: '沁水县',
      cid: '01012403'
    },
    {
      cityCode: '0101240302',
      cityname: '高平市',
      cid: '01012403'
    },
    {
      cityCode: '0101240303',
      cityname: '陵川县',
      cid: '01012403'
    },
    {
      cityCode: '0101240702',
      cityname: '平鲁区',
      cid: '01012407'
    },
    {
      cityCode: '0101240701',
      cityname: '怀仁市',
      cid: '01012407'
    },
    {
      cityCode: '0101240705',
      cityname: '应县',
      cid: '01012407'
    },
    {
      cityCode: '0101240703',
      cityname: '山阴县',
      cid: '01012407'
    },
    {
      cityCode: '0101240706',
      cityname: '右玉县',
      cid: '01012407'
    },
    {
      cityCode: '0101240704',
      cityname: '朔城区',
      cid: '01012407'
    },
    {
      cityCode: '01012407',
      cityname: '朔州市',
      cid: '01012407'
    },
    {
      cityCode: '0101241101',
      cityname: '河津市',
      cid: '01012411'
    },
    {
      cityCode: '0101241104',
      cityname: '临猗县',
      cid: '01012411'
    },
    {
      cityCode: '0101241102',
      cityname: '稷山县',
      cid: '01012411'
    },
    {
      cityCode: '0101241103',
      cityname: '绛县',
      cid: '01012411'
    },
    {
      cityCode: '0101241110',
      cityname: '新绛县',
      cid: '01012411'
    },
    {
      cityCode: '0101241112',
      cityname: '永济市',
      cid: '01012411'
    },
    {
      cityCode: '0101241106',
      cityname: '芮城县',
      cid: '01012411'
    },
    {
      cityCode: '0101241108',
      cityname: '闻喜县',
      cid: '01012411'
    },
    {
      cityCode: '0101241111',
      cityname: '盐湖区',
      cid: '01012411'
    },
    {
      cityCode: '01012411',
      cityname: '运城市',
      cid: '01012411'
    },
    {
      cityCode: '0101241113',
      cityname: '垣曲县',
      cid: '01012411'
    },
    {
      cityCode: '0101241107',
      cityname: '万荣县',
      cid: '01012411'
    },
    {
      cityCode: '0101241109',
      cityname: '夏县',
      cid: '01012411'
    },
    {
      cityCode: '0101241105',
      cityname: '平陆县',
      cid: '01012411'
    },
    {
      cityCode: '0101240113',
      cityname: '襄垣县',
      cid: '01012401'
    },
    {
      cityCode: '0101240111',
      cityname: '屯留区',
      cid: '01012401'
    },
    {
      cityCode: '0101240112',
      cityname: '武乡县',
      cid: '01012401'
    },
    {
      cityCode: '0101240108',
      cityname: '平顺县',
      cid: '01012401'
    },
    {
      cityCode: '0101240105',
      cityname: '潞州区',
      cid: '01012401'
    },
    {
      cityCode: '0101240107',
      cityname: '潞城区',
      cid: '01012401'
    },
    {
      cityCode: '0101240109',
      cityname: '沁县',
      cid: '01012401'
    },
    {
      cityCode: '0101240110',
      cityname: '沁源县',
      cid: '01012401'
    },
    {
      cityCode: '0101240102',
      cityname: '长子县',
      cid: '01012401'
    },
    {
      cityCode: '0101240104',
      cityname: '壶关县',
      cid: '01012401'
    },
    {
      cityCode: '0101240114',
      cityname: '上党区',
      cid: '01012401'
    },
    {
      cityCode: '01012401',
      cityname: '长治市',
      cid: '01012401'
    },
    {
      cityCode: '0101240106',
      cityname: '黎城县',
      cid: '01012401'
    },
    {
      cityCode: '0101241005',
      cityname: '平定县',
      cid: '01012410'
    },
    {
      cityCode: '0101241008',
      cityname: '郊区',
      cid: '01012410'
    },
    {
      cityCode: '0101241004',
      cityname: '盂县',
      cid: '01012410'
    },
    {
      cityCode: '0101241007',
      cityname: '矿区',
      cid: '01012410'
    },
    {
      cityCode: '0101241006',
      cityname: '城区',
      cid: '01012410'
    },
    {
      cityCode: '01012410',
      cityname: '阳泉市',
      cid: '01012410'
    },
    {
      cityCode: '01010702',
      cityname: '东莞市',
      cid: '01010702'
    },
    {
      cityCode: '01010720',
      cityname: '中山市',
      cid: '01010720'
    },
    {
      cityCode: '0101071704',
      cityname: '云安区',
      cid: '01010717'
    },
    {
      cityCode: '0101071701',
      cityname: '罗定市',
      cid: '01010717'
    },
    {
      cityCode: '0101071703',
      cityname: '郁南县',
      cid: '01010717'
    },
    {
      cityCode: '0101071702',
      cityname: '新兴县',
      cid: '01010717'
    },
    {
      cityCode: '01010717',
      cityname: '云浮市',
      cid: '01010717'
    },
    {
      cityCode: '0101071705',
      cityname: '云城区',
      cid: '01010717'
    },
    {
      cityCode: '01010703',
      cityname: '佛山市',
      cid: '01010703'
    },
    {
      cityCode: '0101070302',
      cityname: '高明区',
      cid: '01010703'
    },
    {
      cityCode: '0101070305',
      cityname: '顺德区',
      cid: '01010703'
    },
    {
      cityCode: '0101070303',
      cityname: '南海区',
      cid: '01010703'
    },
    {
      cityCode: '0101070304',
      cityname: '三水区',
      cid: '01010703'
    },
    {
      cityCode: '0101070301',
      cityname: '禅城区',
      cid: '01010703'
    },
    {
      cityCode: '0101070412',
      cityname: '增城区',
      cid: '01010704'
    },
    {
      cityCode: '0101070411',
      cityname: '越秀区',
      cid: '01010704'
    },
    {
      cityCode: '0101070404',
      cityname: '花都区',
      cid: '01010704'
    },
    {
      cityCode: '0101070410',
      cityname: '天河区',
      cid: '01010704'
    },
    {
      cityCode: '0101070407',
      cityname: '萝岗街道',
      cid: '01010704'
    },
    {
      cityCode: '0101070406',
      cityname: '荔湾区',
      cid: '01010704'
    },
    {
      cityCode: '0101070405',
      cityname: '黄埔区',
      cid: '01010704'
    },
    {
      cityCode: '0101070409',
      cityname: '番禺区',
      cid: '01010704'
    },
    {
      cityCode: '0101070403',
      cityname: '海珠区',
      cid: '01010704'
    },
    {
      cityCode: '0101070413',
      cityname: '南沙区',
      cid: '01010704'
    },
    {
      cityCode: '01010704',
      cityname: '广州市',
      cid: '01010704'
    },
    {
      cityCode: '0101070402',
      cityname: '从化区',
      cid: '01010704'
    },
    {
      cityCode: '0101070401',
      cityname: '白云区',
      cid: '01010704'
    },
    {
      cityCode: '01010706',
      cityname: '惠州市',
      cid: '01010706'
    },
    {
      cityCode: '0101070602',
      cityname: '惠城区',
      cid: '01010706'
    },
    {
      cityCode: '0101070605',
      cityname: '龙门县',
      cid: '01010706'
    },
    {
      cityCode: '0101070604',
      cityname: '惠阳区',
      cid: '01010706'
    },
    {
      cityCode: '0101070603',
      cityname: '惠东县',
      cid: '01010706'
    },
    {
      cityCode: '0101070601',
      cityname: '博罗县',
      cid: '01010706'
    },
    {
      cityCode: '0101070805',
      cityname: '榕城区',
      cid: '01010708'
    },
    {
      cityCode: '0101070802',
      cityname: '揭东区',
      cid: '01010708'
    },
    {
      cityCode: '0101070804',
      cityname: '普宁市',
      cid: '01010708'
    },
    {
      cityCode: '0101070801',
      cityname: '惠来县',
      cid: '01010708'
    },
    {
      cityCode: '01010708',
      cityname: '揭阳市',
      cid: '01010708'
    },
    {
      cityCode: '0101070803',
      cityname: '揭西县',
      cid: '01010708'
    },
    {
      cityCode: '01010710',
      cityname: '梅州市',
      cid: '01010710'
    },
    {
      cityCode: '0101071005',
      cityname: '梅江区',
      cid: '01010710'
    },
    {
      cityCode: '0101071008',
      cityname: '兴宁市',
      cid: '01010710'
    },
    {
      cityCode: '0101071002',
      cityname: '丰顺县',
      cid: '01010710'
    },
    {
      cityCode: '0101071003',
      cityname: '蕉岭县',
      cid: '01010710'
    },
    {
      cityCode: '0101071006',
      cityname: '平远县',
      cid: '01010710'
    },
    {
      cityCode: '0101071007',
      cityname: '五华县',
      cid: '01010710'
    },
    {
      cityCode: '0101071004',
      cityname: '梅县区',
      cid: '01010710'
    },
    {
      cityCode: '0101071001',
      cityname: '大埔县',
      cid: '01010710'
    },
    {
      cityCode: '0101071201',
      cityname: '潮南区',
      cid: '01010712'
    },
    {
      cityCode: '0101071205',
      cityname: '金平区',
      cid: '01010712'
    },
    {
      cityCode: '01010712',
      cityname: '汕头市',
      cid: '01010712'
    },
    {
      cityCode: '0101071202',
      cityname: '潮阳区',
      cid: '01010712'
    },
    {
      cityCode: '0101071207',
      cityname: '南澳县',
      cid: '01010712'
    },
    {
      cityCode: '0101071206',
      cityname: '龙湖区',
      cid: '01010712'
    },
    {
      cityCode: '0101071203',
      cityname: '澄海区',
      cid: '01010712'
    },
    {
      cityCode: '0101071204',
      cityname: '濠江区',
      cid: '01010712'
    },
    {
      cityCode: '0101071303',
      cityname: '陆丰市',
      cid: '01010713'
    },
    {
      cityCode: '0101071304',
      cityname: '陆河县',
      cid: '01010713'
    },
    {
      cityCode: '0101071305',
      cityname: '城区',
      cid: '01010713'
    },
    {
      cityCode: '01010713',
      cityname: '汕尾市',
      cid: '01010713'
    },
    {
      cityCode: '0101071302',
      cityname: '海丰县',
      cid: '01010713'
    },
    {
      cityCode: '0101070706',
      cityname: '台山市',
      cid: '01010707'
    },
    {
      cityCode: '01010707',
      cityname: '江门市',
      cid: '01010707'
    },
    {
      cityCode: '0101070707',
      cityname: '新会区',
      cid: '01010707'
    },
    {
      cityCode: '0101070701',
      cityname: '恩平市',
      cid: '01010707'
    },
    {
      cityCode: '0101070705',
      cityname: '蓬江区',
      cid: '01010707'
    },
    {
      cityCode: '0101070703',
      cityname: '江海区',
      cid: '01010707'
    },
    {
      cityCode: '0101070704',
      cityname: '开平市',
      cid: '01010707'
    },
    {
      cityCode: '0101070702',
      cityname: '鹤山市',
      cid: '01010707'
    },
    {
      cityCode: '0101070506',
      cityname: '紫金县',
      cid: '01010705'
    },
    {
      cityCode: '01010705',
      cityname: '河源市',
      cid: '01010705'
    },
    {
      cityCode: '0101070505',
      cityname: '源城区',
      cid: '01010705'
    },
    {
      cityCode: '0101070502',
      cityname: '和平县',
      cid: '01010705'
    },
    {
      cityCode: '0101070504',
      cityname: '龙川县',
      cid: '01010705'
    },
    {
      cityCode: '0101070501',
      cityname: '东源县',
      cid: '01010705'
    },
    {
      cityCode: '0101070503',
      cityname: '连平县',
      cid: '01010705'
    },
    {
      cityCode: '01010715',
      cityname: '深圳市',
      cid: '01010715'
    },
    {
      cityCode: '0101071508',
      cityname: '坪山区',
      cid: '01010715'
    },
    {
      cityCode: '0101071507',
      cityname: '龙华区',
      cid: '01010715'
    },
    {
      cityCode: '0101071504',
      cityname: '罗湖区',
      cid: '01010715'
    },
    {
      cityCode: '0101071503',
      cityname: '龙岗区',
      cid: '01010715'
    },
    {
      cityCode: '0101071506',
      cityname: '盐田区',
      cid: '01010715'
    },
    {
      cityCode: '0101071502',
      cityname: '福田区',
      cid: '01010715'
    },
    {
      cityCode: '0101071505',
      cityname: '南山区',
      cid: '01010715'
    },
    {
      cityCode: '0101071501',
      cityname: '宝安区',
      cid: '01010715'
    },
    {
      cityCode: '0101071509',
      cityname: '光明区',
      cid: '01010715'
    },
    {
      cityCode: '0101071108',
      cityname: '英德市',
      cid: '01010711'
    },
    {
      cityCode: '0101071105',
      cityname: '清城区',
      cid: '01010711'
    },
    {
      cityCode: '0101071102',
      cityname: '连南县',
      cid: '01010711'
    },
    {
      cityCode: '0101071103',
      cityname: '连山县',
      cid: '01010711'
    },
    {
      cityCode: '0101071107',
      cityname: '阳山县',
      cid: '01010711'
    },
    {
      cityCode: '0101071106',
      cityname: '清新区',
      cid: '01010711'
    },
    {
      cityCode: '01010711',
      cityname: '清远市',
      cid: '01010711'
    },
    {
      cityCode: '0101071104',
      cityname: '连州市',
      cid: '01010711'
    },
    {
      cityCode: '0101071101',
      cityname: '佛冈县',
      cid: '01010711'
    },
    {
      cityCode: '0101071809',
      cityname: '徐闻县',
      cid: '01010718'
    },
    {
      cityCode: '0101071804',
      cityname: '麻章区',
      cid: '01010718'
    },
    {
      cityCode: '0101071806',
      cityname: '遂溪县',
      cid: '01010718'
    },
    {
      cityCode: '0101071807',
      cityname: '吴川市',
      cid: '01010718'
    },
    {
      cityCode: '0101071801',
      cityname: '赤坎区',
      cid: '01010718'
    },
    {
      cityCode: '0101071808',
      cityname: '霞山区',
      cid: '01010718'
    },
    {
      cityCode: '01010718',
      cityname: '湛江市',
      cid: '01010718'
    },
    {
      cityCode: '0101071803',
      cityname: '廉江市',
      cid: '01010718'
    },
    {
      cityCode: '0101071802',
      cityname: '雷州市',
      cid: '01010718'
    },
    {
      cityCode: '0101071805',
      cityname: '坡头区',
      cid: '01010718'
    },
    {
      cityCode: '0101070103',
      cityname: '湘桥区',
      cid: '01010701'
    },
    {
      cityCode: '01010701',
      cityname: '潮州市',
      cid: '01010701'
    },
    {
      cityCode: '0101070102',
      cityname: '饶平县',
      cid: '01010701'
    },
    {
      cityCode: '0101070101',
      cityname: '潮安区',
      cid: '01010701'
    },
    {
      cityCode: '0101072101',
      cityname: '斗门区',
      cid: '01010721'
    },
    {
      cityCode: '0101072102',
      cityname: '金湾区',
      cid: '01010721'
    },
    {
      cityCode: '0101072103',
      cityname: '香洲区',
      cid: '01010721'
    },
    {
      cityCode: '01010721',
      cityname: '珠海市',
      cid: '01010721'
    },
    {
      cityCode: '0101071905',
      cityname: '高要区',
      cid: '01010719'
    },
    {
      cityCode: '01010719',
      cityname: '肇庆市',
      cid: '01010719'
    },
    {
      cityCode: '0101071908',
      cityname: '四会市',
      cid: '01010719'
    },
    {
      cityCode: '0101071904',
      cityname: '封开县',
      cid: '01010719'
    },
    {
      cityCode: '0101071903',
      cityname: '端州区',
      cid: '01010719'
    },
    {
      cityCode: '0101071902',
      cityname: '鼎湖区',
      cid: '01010719'
    },
    {
      cityCode: '0101071901',
      cityname: '德庆县',
      cid: '01010719'
    },
    {
      cityCode: '0101071907',
      cityname: '怀集县',
      cid: '01010719'
    },
    {
      cityCode: '0101071906',
      cityname: '广宁县',
      cid: '01010719'
    },
    {
      cityCode: '01010709',
      cityname: '茂名市',
      cid: '01010709'
    },
    {
      cityCode: '0101070905',
      cityname: '茂南区',
      cid: '01010709'
    },
    {
      cityCode: '0101070903',
      cityname: '化州市',
      cid: '01010709'
    },
    {
      cityCode: '0101070906',
      cityname: '信宜市',
      cid: '01010709'
    },
    {
      cityCode: '0101070901',
      cityname: '电白区',
      cid: '01010709'
    },
    {
      cityCode: '0101070902',
      cityname: '高州市',
      cid: '01010709'
    },
    {
      cityCode: '0101071604',
      cityname: '阳东区',
      cid: '01010716'
    },
    {
      cityCode: '0101071601',
      cityname: '江城区',
      cid: '01010716'
    },
    {
      cityCode: '0101071603',
      cityname: '阳春市',
      cid: '01010716'
    },
    {
      cityCode: '01010716',
      cityname: '阳江市',
      cid: '01010716'
    },
    {
      cityCode: '0101071602',
      cityname: '阳西县',
      cid: '01010716'
    },
    {
      cityCode: '0101071404',
      cityname: '仁化县',
      cid: '01010714'
    },
    {
      cityCode: '0101071401',
      cityname: '乐昌市',
      cid: '01010714'
    },
    {
      cityCode: '0101071406',
      cityname: '始兴县',
      cid: '01010714'
    },
    {
      cityCode: '0101071410',
      cityname: '浈江区',
      cid: '01010714'
    },
    {
      cityCode: '0101071408',
      cityname: '武江区',
      cid: '01010714'
    },
    {
      cityCode: '0101071407',
      cityname: '翁源县',
      cid: '01010714'
    },
    {
      cityCode: '0101071405',
      cityname: '乳源县',
      cid: '01010714'
    },
    {
      cityCode: '0101071402',
      cityname: '南雄市',
      cid: '01010714'
    },
    {
      cityCode: '01010714',
      cityname: '韶关市',
      cid: '01010714'
    },
    {
      cityCode: '0101071403',
      cityname: '曲江区',
      cid: '01010714'
    },
    {
      cityCode: '0101071409',
      cityname: '新丰县',
      cid: '01010714'
    },
    {
      cityCode: '0101080204',
      cityname: '银海区',
      cid: '01010802'
    },
    {
      cityCode: '0101080203',
      cityname: '铁山港区',
      cid: '01010802'
    },
    {
      cityCode: '01010802',
      cityname: '北海市',
      cid: '01010802'
    },
    {
      cityCode: '0101080201',
      cityname: '海城区',
      cid: '01010802'
    },
    {
      cityCode: '0101080202',
      cityname: '合浦县',
      cid: '01010802'
    },
    {
      cityCode: '0101081102',
      cityname: '横县',
      cid: '01010811'
    },
    {
      cityCode: '0101081111',
      cityname: '西乡塘区',
      cid: '01010811'
    },
    {
      cityCode: '0101081108',
      cityname: '青秀区',
      cid: '01010811'
    },
    {
      cityCode: '0101081104',
      cityname: '良庆区',
      cid: '01010811'
    },
    {
      cityCode: '0101081103',
      cityname: '江南区',
      cid: '01010811'
    },
    {
      cityCode: '0101081101',
      cityname: '宾阳县',
      cid: '01010811'
    },
    {
      cityCode: '0101081113',
      cityname: '邕宁区',
      cid: '01010811'
    },
    {
      cityCode: '0101081110',
      cityname: '武鸣区',
      cid: '01010811'
    },
    {
      cityCode: '0101081107',
      cityname: '马山县',
      cid: '01010811'
    },
    {
      cityCode: '0101081109',
      cityname: '上林县',
      cid: '01010811'
    },
    {
      cityCode: '01010811',
      cityname: '南宁市',
      cid: '01010811'
    },
    {
      cityCode: '0101081105',
      cityname: '隆安县',
      cid: '01010811'
    },
    {
      cityCode: '0101081112',
      cityname: '兴宁区',
      cid: '01010811'
    },
    {
      cityCode: '0101081106',
      cityname: '龙州县',
      cid: '01010803'
    },
    {
      cityCode: '0101080303',
      cityname: '江州区',
      cid: '01010803'
    },
    {
      cityCode: '01010803',
      cityname: '崇左市',
      cid: '01010803'
    },
    {
      cityCode: '0101080306',
      cityname: '天等县',
      cid: '01010803'
    },
    {
      cityCode: '0101080305',
      cityname: '凭祥市',
      cid: '01010803'
    },
    {
      cityCode: '0101080302',
      cityname: '扶绥县',
      cid: '01010803'
    },
    {
      cityCode: '0101080301',
      cityname: '大新县',
      cid: '01010803'
    },
    {
      cityCode: '0101080304',
      cityname: '宁明县',
      cid: '01010803'
    },
    {
      cityCode: '0101080901',
      cityname: '合山市',
      cid: '01010809'
    },
    {
      cityCode: '0101080905',
      cityname: '忻城县',
      cid: '01010809'
    },
    {
      cityCode: '0101080903',
      cityname: '武宣县',
      cid: '01010809'
    },
    {
      cityCode: '0101080906',
      cityname: '兴宾区',
      cid: '01010809'
    },
    {
      cityCode: '0101080902',
      cityname: '金秀县',
      cid: '01010809'
    },
    {
      cityCode: '01010809',
      cityname: '来宾市',
      cid: '01010809'
    },
    {
      cityCode: '0101080904',
      cityname: '象州县',
      cid: '01010809'
    },
    {
      cityCode: '0101081009',
      cityname: '三江县',
      cid: '01010810'
    },
    {
      cityCode: '0101081006',
      cityname: '鹿寨县',
      cid: '01010810'
    },
    {
      cityCode: '0101081010',
      cityname: '鱼峰区',
      cid: '01010810'
    },
    {
      cityCode: '0101081005',
      cityname: '柳南区',
      cid: '01010810'
    },
    {
      cityCode: '0101081008',
      cityname: '融水县',
      cid: '01010810'
    },
    {
      cityCode: '01010810',
      cityname: '柳州市',
      cid: '01010810'
    },
    {
      cityCode: '0101081002',
      cityname: '柳北区',
      cid: '01010810'
    },
    {
      cityCode: '0101081001',
      cityname: '城中区',
      cid: '01010810'
    },
    {
      cityCode: '0101081004',
      cityname: '柳江区',
      cid: '01010810'
    },
    {
      cityCode: '0101081003',
      cityname: '柳城县',
      cid: '01010810'
    },
    {
      cityCode: '0101081007',
      cityname: '融安县',
      cid: '01010810'
    },
    {
      cityCode: '0101080608',
      cityname: '平乐县',
      cid: '01010806'
    },
    {
      cityCode: '0101080602',
      cityname: '恭城县',
      cid: '01010806'
    },
    {
      cityCode: '0101080615',
      cityname: '阳朔县',
      cid: '01010806'
    },
    {
      cityCode: '0101080612',
      cityname: '兴安县',
      cid: '01010806'
    },
    {
      cityCode: '01010806',
      cityname: '桂林市',
      cid: '01010806'
    },
    {
      cityCode: '0101080616',
      cityname: '永福县',
      cid: '01010806'
    },
    {
      cityCode: '0101080607',
      cityname: '龙胜县',
      cid: '01010806'
    },
    {
      cityCode: '0101080614',
      cityname: '雁山区',
      cid: '01010806'
    },
    {
      cityCode: '0101080606',
      cityname: '临桂区',
      cid: '01010806'
    },
    {
      cityCode: '0101080603',
      cityname: '灌阳县',
      cid: '01010806'
    },
    {
      cityCode: '0101080613',
      cityname: '秀峰区',
      cid: '01010806'
    },
    {
      cityCode: '0101080605',
      cityname: '灵川县',
      cid: '01010806'
    },
    {
      cityCode: '0101080611',
      cityname: '象山区',
      cid: '01010806'
    },
    {
      cityCode: '0101080609',
      cityname: '七星区',
      cid: '01010806'
    },
    {
      cityCode: '0101080604',
      cityname: '荔浦市',
      cid: '01010806'
    },
    {
      cityCode: '0101080617',
      cityname: '资源县',
      cid: '01010806'
    },
    {
      cityCode: '0101080601',
      cityname: '叠彩区',
      cid: '01010806'
    },
    {
      cityCode: '0101080610',
      cityname: '全州县',
      cid: '01010806'
    },
    {
      cityCode: '0101081302',
      cityname: '岑溪市',
      cid: '01010813'
    },
    {
      cityCode: '0101081306',
      cityname: '藤县',
      cid: '01010813'
    },
    {
      cityCode: '0101081305',
      cityname: '蒙山县',
      cid: '01010813'
    },
    {
      cityCode: '0101081301',
      cityname: '苍梧县',
      cid: '01010813'
    },
    {
      cityCode: '0101081308',
      cityname: '龙圩区',
      cid: '01010813'
    },
    {
      cityCode: '0101081303',
      cityname: '长洲区',
      cid: '01010813'
    },
    {
      cityCode: '0101081307',
      cityname: '万秀区',
      cid: '01010813'
    },
    {
      cityCode: '01010813',
      cityname: '梧州市',
      cid: '01010813'
    },
    {
      cityCode: '0101080710',
      cityname: '天峨县',
      cid: '01010807'
    },
    {
      cityCode: '0101080708',
      cityname: '罗城县',
      cid: '01010807'
    },
    {
      cityCode: '0101080705',
      cityname: '凤山县',
      cid: '01010807'
    },
    {
      cityCode: '0101080701',
      cityname: '巴马县',
      cid: '01010807'
    },
    {
      cityCode: '01010807',
      cityname: '河池市',
      cid: '01010807'
    },
    {
      cityCode: '0101080707',
      cityname: '金城江区',
      cid: '01010807'
    },
    {
      cityCode: '0101080703',
      cityname: '东兰县',
      cid: '01010807'
    },
    {
      cityCode: '0101080706',
      cityname: '环江县',
      cid: '01010807'
    },
    {
      cityCode: '0101080711',
      cityname: '宜州区',
      cid: '01010807'
    },
    {
      cityCode: '0101080709',
      cityname: '南丹县',
      cid: '01010807'
    },
    {
      cityCode: '0101080702',
      cityname: '大化县',
      cid: '01010807'
    },
    {
      cityCode: '0101080704',
      cityname: '都安县',
      cid: '01010807'
    },
    {
      cityCode: '0101081401',
      cityname: '北流市',
      cid: '01010814'
    },
    {
      cityCode: '0101081405',
      cityname: '兴业县',
      cid: '01010814'
    },
    {
      cityCode: '0101081403',
      cityname: '陆川县',
      cid: '01010814'
    },
    {
      cityCode: '01010814',
      cityname: '玉林市',
      cid: '01010814'
    },
    {
      cityCode: '0101081407',
      cityname: '福绵区',
      cid: '01010814'
    },
    {
      cityCode: '0101081402',
      cityname: '博白县',
      cid: '01010814'
    },
    {
      cityCode: '0101081406',
      cityname: '玉州区',
      cid: '01010814'
    },
    {
      cityCode: '0101081404',
      cityname: '容县',
      cid: '01010814'
    },
    {
      cityCode: '0101080104',
      cityname: '凌云县',
      cid: '01010801'
    },
    {
      cityCode: '0101080108',
      cityname: '田东县',
      cid: '01010801'
    },
    {
      cityCode: '0101080112',
      cityname: '右江区',
      cid: '01010801'
    },
    {
      cityCode: '0101080106',
      cityname: '那坡县',
      cid: '01010801'
    },
    {
      cityCode: '0101080109',
      cityname: '田林县',
      cid: '01010801'
    },
    {
      cityCode: '0101080105',
      cityname: '隆林县',
      cid: '01010801'
    },
    {
      cityCode: '0101080103',
      cityname: '乐业县',
      cid: '01010801'
    },
    {
      cityCode: '0101080101',
      cityname: '德保县',
      cid: '01010801'
    },
    {
      cityCode: '0101080110',
      cityname: '田阳区',
      cid: '01010801'
    },
    {
      cityCode: '0101080102',
      cityname: '靖西市',
      cid: '01010801'
    },
    {
      cityCode: '01010801',
      cityname: '百色市',
      cid: '01010801'
    },
    {
      cityCode: '0101080111',
      cityname: '西林县',
      cid: '01010801'
    },
    {
      cityCode: '0101080107',
      cityname: '平果市',
      cid: '01010801'
    },
    {
      cityCode: '0101080505',
      cityname: '覃塘区',
      cid: '01010805'
    },
    {
      cityCode: '0101080502',
      cityname: '港南区',
      cid: '01010805'
    },
    {
      cityCode: '0101080501',
      cityname: '港北区',
      cid: '01010805'
    },
    {
      cityCode: '01010805',
      cityname: '贵港市',
      cid: '01010805'
    },
    {
      cityCode: '0101080503',
      cityname: '桂平市',
      cid: '01010805'
    },
    {
      cityCode: '0101080504',
      cityname: '平南县',
      cid: '01010805'
    },
    {
      cityCode: '0101080802',
      cityname: '富川县',
      cid: '01010808'
    },
    {
      cityCode: '01010808',
      cityname: '贺州市',
      cid: '01010808'
    },
    {
      cityCode: '0101080805',
      cityname: '平桂区',
      cid: '01010808'
    },
    {
      cityCode: '0101080801',
      cityname: '八步区',
      cid: '01010808'
    },
    {
      cityCode: '0101080803',
      cityname: '昭平县',
      cid: '01010808'
    },
    {
      cityCode: '0101080804',
      cityname: '钟山县',
      cid: '01010808'
    },
    {
      cityCode: '01010812',
      cityname: '钦州市',
      cid: '01010812'
    },
    {
      cityCode: '0101081201',
      cityname: '灵山县',
      cid: '01010812'
    },
    {
      cityCode: '0101081202',
      cityname: '浦北县',
      cid: '01010812'
    },
    {
      cityCode: '0101081204',
      cityname: '钦南区',
      cid: '01010812'
    },
    {
      cityCode: '0101081203',
      cityname: '钦北区',
      cid: '01010812'
    },
    {
      cityCode: '0101080403',
      cityname: '港口区',
      cid: '01010804'
    },
    {
      cityCode: '01010804',
      cityname: '防城港市',
      cid: '01010804'
    },
    {
      cityCode: '0101080401',
      cityname: '东兴市',
      cid: '01010804'
    },
    {
      cityCode: '0101080404',
      cityname: '上思县',
      cid: '01010804'
    },
    {
      cityCode: '0101080402',
      cityname: '防城区',
      cid: '01010804'
    },
    {
      cityCode: '0101321305',
      cityname: '天山区',
      cid: '01013213'
    },
    {
      cityCode: '0101321304',
      cityname: '水磨沟区',
      cid: '01013213'
    },
    {
      cityCode: '0101321303',
      cityname: '沙依巴克区',
      cid: '01013213'
    },
    {
      cityCode: '0101321302',
      cityname: '米东区',
      cid: '01013213'
    },
    {
      cityCode: '0101321314',
      cityname: '乌鲁木齐县',
      cid: '01013213'
    },
    {
      cityCode: '0101321301',
      cityname: '达坂城区',
      cid: '01013213'
    },
    {
      cityCode: '01013213',
      cityname: '乌鲁木齐',
      cid: '01013213'
    },
    {
      cityCode: '0101321309',
      cityname: '白杨沟镇',
      cid: '01013213'
    },
    {
      cityCode: '0101321308',
      cityname: '新市区',
      cid: '01013213'
    },
    {
      cityCode: '0101321306',
      cityname: '头屯河区',
      cid: '01013213'
    },
    {
      cityCode: '101131801',
      cityname: '五家渠市',
      cid: '101131801'
    },
    {
      cityCode: '0101321403',
      cityname: '霍城县',
      cid: '01013214'
    },
    {
      cityCode: '0101321405',
      cityname: '尼勒克县',
      cid: '01013214'
    },
    {
      cityCode: '0101321411',
      cityname: '霍尔果斯市',
      cid: '01013214'
    },
    {
      cityCode: '0101321407',
      cityname: '新源县',
      cid: '01013214'
    },
    {
      cityCode: '0101321401',
      cityname: '察布查尔县',
      cid: '01013214'
    },
    {
      cityCode: '0101321404',
      cityname: '奎屯市',
      cid: '01013214'
    },
    {
      cityCode: '0101321402',
      cityname: '巩留县',
      cid: '01013214'
    },
    {
      cityCode: '0101321409',
      cityname: '伊宁县',
      cid: '01013214'
    },
    {
      cityCode: '0101321410',
      cityname: '昭苏县',
      cid: '01013214'
    },
    {
      cityCode: '0101321408',
      cityname: '伊宁市',
      cid: '01013214'
    },
    {
      cityCode: '0101321406',
      cityname: '特克斯县',
      cid: '01013214'
    },
    {
      cityCode: '01013214',
      cityname: '伊犁州',
      cid: '01013214'
    },
    {
      cityCode: '0101321001',
      cityname: '阿合奇县',
      cid: '01013210'
    },
    {
      cityCode: '01013210',
      cityname: '克孜勒苏',
      cid: '01013210'
    },
    {
      cityCode: '0101321003',
      cityname: '阿图什市',
      cid: '01013210'
    },
    {
      cityCode: '0101321002',
      cityname: '阿克陶县',
      cid: '01013210'
    },
    {
      cityCode: '0101321004',
      cityname: '乌恰县',
      cid: '01013210'
    },
    {
      cityCode: '0101320901',
      cityname: '白碱滩区',
      cid: '01013209'
    },
    {
      cityCode: '0101320905',
      cityname: '克拉玛依区',
      cid: '01013209'
    },
    {
      cityCode: '01013209',
      cityname: '克拉玛依',
      cid: '01013209'
    },
    {
      cityCode: '0101320902',
      cityname: '独山子区',
      cid: '01013209'
    },
    {
      cityCode: '0101320904',
      cityname: '乌尔禾区',
      cid: '01013209'
    },
    {
      cityCode: '0101320208',
      cityname: '北屯市',
      cid: '0101320208'
    },
    {
      cityCode: '01013204',
      cityname: '博尔塔拉',
      cid: '01013204'
    },
    {
      cityCode: '0101320404',
      cityname: '阿拉山口市',
      cid: '01013204'
    },
    {
      cityCode: '0101320403',
      cityname: '温泉县',
      cid: '01013204'
    },
    {
      cityCode: '0101320402',
      cityname: '精河县',
      cid: '01013204'
    },
    {
      cityCode: '0101320401',
      cityname: '博乐市',
      cid: '01013204'
    },
    {
      cityCode: '0101320405',
      cityname: '双河市',
      cid: '0101320405'
    },
    {
      cityCode: '0101321412',
      cityname: '可克达拉',
      cid: '0101321412'
    },
    {
      cityCode: '0101321204',
      cityname: '高昌区',
      cid: '01013212'
    },
    {
      cityCode: '0101321201',
      cityname: '鄯善县',
      cid: '01013212'
    },
    {
      cityCode: '0101321203',
      cityname: '托克逊县',
      cid: '01013212'
    },
    {
      cityCode: '01013212',
      cityname: '吐鲁番市',
      cid: '01013212'
    },
    {
      cityCode: '0101320710',
      cityname: '和田市',
      cid: '01013207'
    },
    {
      cityCode: '0101320705',
      cityname: '民丰县',
      cid: '01013207'
    },
    {
      cityCode: '0101320708',
      cityname: '于田县',
      cid: '01013207'
    },
    {
      cityCode: '0101320707',
      cityname: '皮山县',
      cid: '01013207'
    },
    {
      cityCode: '0101320704',
      cityname: '洛浦县',
      cid: '01013207'
    },
    {
      cityCode: '0101320706',
      cityname: '墨玉县',
      cid: '01013207'
    },
    {
      cityCode: '01013207',
      cityname: '和田地区',
      cid: '01013207'
    },
    {
      cityCode: '0101320701',
      cityname: '策勒县',
      cid: '01013207'
    },
    {
      cityCode: '0101320711',
      cityname: '和田县',
      cid: '01013207'
    },
    {
      cityCode: '01013206',
      cityname: '哈密市',
      cid: '01013206'
    },
    {
      cityCode: '0101320601',
      cityname: '巴里坤哈萨克自治县',
      cid: '01013206'
    },
    {
      cityCode: '0101320604',
      cityname: '伊州区',
      cid: '01013206'
    },
    {
      cityCode: '0101320603',
      cityname: '伊吾县',
      cid: '01013206'
    },
    {
      cityCode: '0101320806',
      cityname: '疏附县',
      cid: '01013208'
    },
    {
      cityCode: '0101320811',
      cityname: '岳普湖县',
      cid: '01013208'
    },
    {
      cityCode: '0101320807',
      cityname: '疏勒县',
      cid: '01013208'
    },
    {
      cityCode: '0101320801',
      cityname: '巴楚县',
      cid: '01013208'
    },
    {
      cityCode: '0101320812',
      cityname: '泽普县',
      cid: '01013208'
    },
    {
      cityCode: '0101320809',
      cityname: '叶城县',
      cid: '01013208'
    },
    {
      cityCode: '0101320808',
      cityname: '塔县',
      cid: '01013208'
    },
    {
      cityCode: '01013208',
      cityname: '喀什地区',
      cid: '01013208'
    },
    {
      cityCode: '0101320803',
      cityname: '喀什市',
      cid: '01013208'
    },
    {
      cityCode: '0101320805',
      cityname: '莎车县',
      cid: '01013208'
    },
    {
      cityCode: '0101320804',
      cityname: '麦盖提县',
      cid: '01013208'
    },
    {
      cityCode: '0101320802',
      cityname: '伽师县',
      cid: '01013208'
    },
    {
      cityCode: '0101320810',
      cityname: '英吉沙县',
      cid: '01013208'
    },
    {
      cityCode: '101131701',
      cityname: '图木舒克',
      cid: '101131701'
    },
    {
      cityCode: '0101321105',
      cityname: '乌苏市',
      cid: '01013211'
    },
    {
      cityCode: '0101321104',
      cityname: '托里县',
      cid: '01013211'
    },
    {
      cityCode: '0101321101',
      cityname: '额敏县',
      cid: '01013211'
    },
    {
      cityCode: '0101321102',
      cityname: '沙湾县',
      cid: '01013211'
    },
    {
      cityCode: '0101321107',
      cityname: '和布克赛尔县',
      cid: '01013211'
    },
    {
      cityCode: '0101321106',
      cityname: '裕民县',
      cid: '01013211'
    },
    {
      cityCode: '0101321108',
      cityname: '塔城市',
      cid: '01013211'
    },
    {
      cityCode: '01013211',
      cityname: '塔城地区',
      cid: '01013211'
    },
    {
      cityCode: '0101320308',
      cityname: '尉犁县',
      cid: '01013203'
    },
    {
      cityCode: '0101320311',
      cityname: '巴音布鲁克镇',
      cid: '01013203'
    },
    {
      cityCode: '0101320306',
      cityname: '且末县',
      cid: '01013203'
    },
    {
      cityCode: '0101320305',
      cityname: '轮台县',
      cid: '01013203'
    },
    {
      cityCode: '01013203',
      cityname: '巴音郭楞',
      cid: '01013203'
    },
    {
      cityCode: '0101320307',
      cityname: '若羌县',
      cid: '01013203'
    },
    {
      cityCode: '0101320301',
      cityname: '博湖县',
      cid: '01013203'
    },
    {
      cityCode: '0101320310',
      cityname: '巴仑台镇',
      cid: '01013203'
    },
    {
      cityCode: '0101320309',
      cityname: '焉耆县',
      cid: '01013203'
    },
    {
      cityCode: '0101320303',
      cityname: '和硕县',
      cid: '01013203'
    },
    {
      cityCode: '0101320302',
      cityname: '和静县',
      cid: '01013203'
    },
    {
      cityCode: '0101320312',
      cityname: '铁干里克乡',
      cid: '01013203'
    },
    {
      cityCode: '0101320304',
      cityname: '库尔勒市',
      cid: '01013203'
    },
    {
      cityCode: '0101320709',
      cityname: '昆玉市',
      cid: '0101320709'
    },
    {
      cityCode: '0101320505',
      cityname: '玛纳斯县',
      cid: '01013205'
    },
    {
      cityCode: '0101320507',
      cityname: '奇台县',
      cid: '01013205'
    },
    {
      cityCode: '0101320509',
      cityname: '昌吉市',
      cid: '01013205'
    },
    {
      cityCode: '0101320503',
      cityname: '呼图壁县',
      cid: '01013205'
    },
    {
      cityCode: '0101320506',
      cityname: '木垒县',
      cid: '01013205'
    },
    {
      cityCode: '0101320502',
      cityname: '阜康市',
      cid: '01013205'
    },
    {
      cityCode: '0101320504',
      cityname: '吉木萨尔县',
      cid: '01013205'
    },
    {
      cityCode: '01013205',
      cityname: '昌吉州',
      cid: '01013205'
    },
    {
      cityCode: '0101321501',
      cityname: '石河子市',
      cid: '0101321501'
    },
    {
      cityCode: '0101320314',
      cityname: '铁门关市',
      cid: '0101320314'
    },
    {
      cityCode: '0101320110',
      cityname: '阿克苏市',
      cid: '01013201'
    },
    {
      cityCode: '0101320107',
      cityname: '温宿县',
      cid: '01013201'
    },
    {
      cityCode: '0101320105',
      cityname: '库车市',
      cid: '01013201'
    },
    {
      cityCode: '0101320108',
      cityname: '乌什县',
      cid: '01013201'
    },
    {
      cityCode: '0101320103',
      cityname: '拜城县',
      cid: '01013201'
    },
    {
      cityCode: '0101320102',
      cityname: '阿瓦提县',
      cid: '01013201'
    },
    {
      cityCode: '0101320104',
      cityname: '柯坪县',
      cid: '01013201'
    },
    {
      cityCode: '0101320109',
      cityname: '新和县',
      cid: '01013201'
    },
    {
      cityCode: '01013201',
      cityname: '阿克苏',
      cid: '01013201'
    },
    {
      cityCode: '0101320106',
      cityname: '沙雅县',
      cid: '01013201'
    },
    {
      cityCode: '0101320204',
      cityname: '富蕴县',
      cid: '01013202'
    },
    {
      cityCode: '0101320207',
      cityname: '青河县',
      cid: '01013202'
    },
    {
      cityCode: '01013202',
      cityname: '阿勒泰',
      cid: '01013202'
    },
    {
      cityCode: '0101320203',
      cityname: '福海县',
      cid: '01013202'
    },
    {
      cityCode: '0101320205',
      cityname: '哈巴河县',
      cid: '01013202'
    },
    {
      cityCode: '0101320206',
      cityname: '吉木乃县',
      cid: '01013202'
    },
    {
      cityCode: '0101320209',
      cityname: '阿勒泰市',
      cid: '01013202'
    },
    {
      cityCode: '0101320202',
      cityname: '布尔津县',
      cid: '01013202'
    },
    {
      cityCode: '0101321502',
      cityname: '阿拉尔市',
      cid: '0101321502'
    },
    {
      cityCode: '0101170402',
      cityname: '高淳区',
      cid: '01011704'
    },
    {
      cityCode: '0101170413',
      cityname: '雨花台区',
      cid: '01011704'
    },
    {
      cityCode: '0101170412',
      cityname: '玄武区',
      cid: '01011704'
    },
    {
      cityCode: '0101170408',
      cityname: '浦口区',
      cid: '01011704'
    },
    {
      cityCode: '0101170410',
      cityname: '秦淮区',
      cid: '01011704'
    },
    {
      cityCode: '0101170409',
      cityname: '栖霞区',
      cid: '01011704'
    },
    {
      cityCode: '0101170404',
      cityname: '建邺区',
      cid: '01011704'
    },
    {
      cityCode: '0101170403',
      cityname: '鼓楼区',
      cid: '01011704'
    },
    {
      cityCode: '0101170405',
      cityname: '江宁区',
      cid: '01011704'
    },
    {
      cityCode: '0101170414',
      cityname: '江浦街道',
      cid: '01011704'
    },
    {
      cityCode: '01011704',
      cityname: '南京市',
      cid: '01011704'
    },
    {
      cityCode: '0101170407',
      cityname: '六合区',
      cid: '01011704'
    },
    {
      cityCode: '0101170406',
      cityname: '溧水区',
      cid: '01011704'
    },
    {
      cityCode: '0101170507',
      cityname: '如皋市',
      cid: '01011705'
    },
    {
      cityCode: '01011705',
      cityname: '南通市',
      cid: '01011705'
    },
    {
      cityCode: '0101170503',
      cityname: '海安市',
      cid: '01011705'
    },
    {
      cityCode: '0101170502',
      cityname: '港闸区',
      cid: '01011705'
    },
    {
      cityCode: '0101170506',
      cityname: '如东县',
      cid: '01011705'
    },
    {
      cityCode: '0101170508',
      cityname: '通州区',
      cid: '01011705'
    },
    {
      cityCode: '0101170501',
      cityname: '崇川区',
      cid: '01011705'
    },
    {
      cityCode: '0101170504',
      cityname: '海门区',
      cid: '01011705'
    },
    {
      cityCode: '0101170505',
      cityname: '启东市',
      cid: '01011705'
    },
    {
      cityCode: '0101170702',
      cityname: '泗洪县',
      cid: '01011707'
    },
    {
      cityCode: '01011707',
      cityname: '宿迁市',
      cid: '01011707'
    },
    {
      cityCode: '0101170705',
      cityname: '宿豫区',
      cid: '01011707'
    },
    {
      cityCode: '0101170704',
      cityname: '宿城区',
      cid: '01011707'
    },
    {
      cityCode: '0101170703',
      cityname: '泗阳县',
      cid: '01011707'
    },
    {
      cityCode: '0101170701',
      cityname: '沭阳县',
      cid: '01011707'
    },
    {
      cityCode: '0101170103',
      cityname: '戚墅堰街道',
      cid: '01011701'
    },
    {
      cityCode: '0101170102',
      cityname: '溧阳市',
      cid: '01011701'
    },
    {
      cityCode: '0101170105',
      cityname: '武进区',
      cid: '01011701'
    },
    {
      cityCode: '0101170101',
      cityname: '金坛区',
      cid: '01011701'
    },
    {
      cityCode: '01011701',
      cityname: '常州市',
      cid: '01011701'
    },
    {
      cityCode: '0101170107',
      cityname: '钟楼区',
      cid: '01011701'
    },
    {
      cityCode: '0101170106',
      cityname: '新北区',
      cid: '01011701'
    },
    {
      cityCode: '0101170104',
      cityname: '天宁区',
      cid: '01011701'
    },
    {
      cityCode: '0101171008',
      cityname: '睢宁县',
      cid: '01011710'
    },
    {
      cityCode: '0101171011',
      cityname: '云龙区',
      cid: '01011710'
    },
    {
      cityCode: '0101171007',
      cityname: '泉山区',
      cid: '01011710'
    },
    {
      cityCode: '0101171004',
      cityname: '九里街道',
      cid: '01011710'
    },
    {
      cityCode: '0101171005',
      cityname: '沛县',
      cid: '01011710'
    },
    {
      cityCode: '0101171003',
      cityname: '贾汪区',
      cid: '01011710'
    },
    {
      cityCode: '0101171002',
      cityname: '鼓楼区',
      cid: '01011710'
    },
    {
      cityCode: '0101171006',
      cityname: '邳州市',
      cid: '01011710'
    },
    {
      cityCode: '01011710',
      cityname: '徐州市',
      cid: '01011710'
    },
    {
      cityCode: '0101171009',
      cityname: '铜山区',
      cid: '01011710'
    },
    {
      cityCode: '0101171001',
      cityname: '丰县',
      cid: '01011710'
    },
    {
      cityCode: '0101171010',
      cityname: '新沂市',
      cid: '01011710'
    },
    {
      cityCode: '0101171203',
      cityname: '广陵区',
      cid: '01011712'
    },
    {
      cityCode: '0101171201',
      cityname: '宝应县',
      cid: '01011712'
    },
    {
      cityCode: '0101171205',
      cityname: '江都区',
      cid: '01011712'
    },
    {
      cityCode: '01011712',
      cityname: '扬州市',
      cid: '01011712'
    },
    {
      cityCode: '0101171202',
      cityname: '高邮市',
      cid: '01011712'
    },
    {
      cityCode: '0101171207',
      cityname: '仪征市',
      cid: '01011712'
    },
    {
      cityCode: '0101171204',
      cityname: '邗江区',
      cid: '01011712'
    },
    {
      cityCode: '0101170907',
      cityname: '锡山区',
      cid: '01011709'
    },
    {
      cityCode: '0101170905',
      cityname: '江阴市',
      cid: '01011709'
    },
    {
      cityCode: '01011709',
      cityname: '无锡市',
      cid: '01011709'
    },
    {
      cityCode: '0101170908',
      cityname: '宜兴市',
      cid: '01011709'
    },
    {
      cityCode: '0101170904',
      cityname: '惠山区',
      cid: '01011709'
    },
    {
      cityCode: '0101170903',
      cityname: '崇安寺街道',
      cid: '01011709'
    },
    {
      cityCode: '0101170902',
      cityname: '滨湖区',
      cid: '01011709'
    },
    {
      cityCode: '0101170910',
      cityname: '梁溪区',
      cid: '01011709'
    },
    {
      cityCode: '0101170909',
      cityname: '新吴区',
      cid: '01011709'
    },
    {
      cityCode: '0101170803',
      cityname: '姜堰区',
      cid: '01011708'
    },
    {
      cityCode: '01011708',
      cityname: '泰州市',
      cid: '01011708'
    },
    {
      cityCode: '0101170802',
      cityname: '海陵区',
      cid: '01011708'
    },
    {
      cityCode: '0101170801',
      cityname: '高港区',
      cid: '01011708'
    },
    {
      cityCode: '0101170806',
      cityname: '兴化市',
      cid: '01011708'
    },
    {
      cityCode: '0101170805',
      cityname: '泰兴市',
      cid: '01011708'
    },
    {
      cityCode: '0101170804',
      cityname: '靖江市',
      cid: '01011708'
    },
    {
      cityCode: '0101170205',
      cityname: '涟水县',
      cid: '01011702'
    },
    {
      cityCode: '0101170208',
      cityname: '盱眙县',
      cid: '01011702'
    },
    {
      cityCode: '0101170201',
      cityname: '淮安区',
      cid: '01011702'
    },
    {
      cityCode: '01011702',
      cityname: '淮安市',
      cid: '01011702'
    },
    {
      cityCode: '0101170204',
      cityname: '金湖县',
      cid: '01011702'
    },
    {
      cityCode: '0101170207',
      cityname: '清江浦区',
      cid: '01011702'
    },
    {
      cityCode: '0101170202',
      cityname: '洪泽区',
      cid: '01011702'
    },
    {
      cityCode: '0101170203',
      cityname: '淮阴区',
      cid: '01011702'
    },
    {
      cityCode: '0101171107',
      cityname: '亭湖区',
      cid: '01011711'
    },
    {
      cityCode: '0101171108',
      cityname: '响水县',
      cid: '01011711'
    },
    {
      cityCode: '0101171102',
      cityname: '大丰区',
      cid: '01011711'
    },
    {
      cityCode: '0101171103',
      cityname: '东台市',
      cid: '01011711'
    },
    {
      cityCode: '0101171105',
      cityname: '建湖县',
      cid: '01011711'
    },
    {
      cityCode: '0101171101',
      cityname: '滨海县',
      cid: '01011711'
    },
    {
      cityCode: '0101171109',
      cityname: '盐都区',
      cid: '01011711'
    },
    {
      cityCode: '01011711',
      cityname: '盐城市',
      cid: '01011711'
    },
    {
      cityCode: '0101171104',
      cityname: '阜宁县',
      cid: '01011711'
    },
    {
      cityCode: '0101171106',
      cityname: '射阳县',
      cid: '01011711'
    },
    {
      cityCode: '0101170601',
      cityname: '姑苏区',
      cid: '01011706'
    },
    {
      cityCode: '0101170608',
      cityname: '吴江区',
      cid: '01011706'
    },
    {
      cityCode: '0101170605',
      cityname: '昆山市',
      cid: '01011706'
    },
    {
      cityCode: '0101170607',
      cityname: '太仓市',
      cid: '01011706'
    },
    {
      cityCode: '0101170602',
      cityname: '常熟市',
      cid: '01011706'
    },
    {
      cityCode: '01011706',
      cityname: '苏州市',
      cid: '01011706'
    },
    {
      cityCode: '0101170609',
      cityname: '吴中区',
      cid: '01011706'
    },
    {
      cityCode: '0101170611',
      cityname: '张家港市',
      cid: '01011706'
    },
    {
      cityCode: '0101170610',
      cityname: '相城区',
      cid: '01011706'
    },
    {
      cityCode: '0101170604',
      cityname: '金阊街道',
      cid: '01011706'
    },
    {
      cityCode: '0101170603',
      cityname: '虎丘区',
      cid: '01011706'
    },
    {
      cityCode: '01011703',
      cityname: '连云港市',
      cid: '01011703'
    },
    {
      cityCode: '0101170302',
      cityname: '赣榆区',
      cid: '01011703'
    },
    {
      cityCode: '0101170304',
      cityname: '灌云县',
      cid: '01011703'
    },
    {
      cityCode: '0101170307',
      cityname: '新浦经济开发区',
      cid: '01011703'
    },
    {
      cityCode: '0101170306',
      cityname: '连云区',
      cid: '01011703'
    },
    {
      cityCode: '0101170301',
      cityname: '东海县',
      cid: '01011703'
    },
    {
      cityCode: '0101170305',
      cityname: '海州区',
      cid: '01011703'
    },
    {
      cityCode: '0101170303',
      cityname: '灌南县',
      cid: '01011703'
    },
    {
      cityCode: '01011713',
      cityname: '镇江市',
      cid: '01011713'
    },
    {
      cityCode: '0101171301',
      cityname: '丹徒区',
      cid: '01011713'
    },
    {
      cityCode: '0101171302',
      cityname: '丹阳市',
      cid: '01011713'
    },
    {
      cityCode: '0101171306',
      cityname: '扬中市',
      cid: '01011713'
    },
    {
      cityCode: '0101171304',
      cityname: '句容市',
      cid: '01011713'
    },
    {
      cityCode: '0101171305',
      cityname: '润州区',
      cid: '01011713'
    },
    {
      cityCode: '0101171303',
      cityname: '京口区',
      cid: '01011713'
    },
    {
      cityCode: '01011808',
      cityname: '上饶市',
      cid: '01011808'
    },
    {
      cityCode: '0101180811',
      cityname: '余干县',
      cid: '01011808'
    },
    {
      cityCode: '0101180809',
      cityname: '信州区',
      cid: '01011808'
    },
    {
      cityCode: '0101180808',
      cityname: '婺源县',
      cid: '01011808'
    },
    {
      cityCode: '0101180805',
      cityname: '铅山县',
      cid: '01011808'
    },
    {
      cityCode: '0101180810',
      cityname: '弋阳县',
      cid: '01011808'
    },
    {
      cityCode: '0101180807',
      cityname: '万年县',
      cid: '01011808'
    },
    {
      cityCode: '0101180801',
      cityname: '德兴市',
      cid: '01011808'
    },
    {
      cityCode: '0101180804',
      cityname: '鄱阳县',
      cid: '01011808'
    },
    {
      cityCode: '0101180802',
      cityname: '广丰区',
      cid: '01011808'
    },
    {
      cityCode: '0101180812',
      cityname: '玉山县',
      cid: '01011808'
    },
    {
      cityCode: '0101180803',
      cityname: '横峰县',
      cid: '01011808'
    },
    {
      cityCode: '0101180813',
      cityname: '广信区',
      cid: '01011808'
    },
    {
      cityCode: '0101180502',
      cityname: '都昌县',
      cid: '01011805'
    },
    {
      cityCode: '01011805',
      cityname: '九江市',
      cid: '01011805'
    },
    {
      cityCode: '01011812',
      cityname: '共青城市',
      cid: '01011805'
    },
    {
      cityCode: '0101180507',
      cityname: '瑞昌市',
      cid: '01011805'
    },
    {
      cityCode: '0101180510',
      cityname: '修水县',
      cid: '01011805'
    },
    {
      cityCode: '0101180503',
      cityname: '湖口县',
      cid: '01011805'
    },
    {
      cityCode: '0101180508',
      cityname: '武宁县',
      cid: '01011805'
    },
    {
      cityCode: '0101180506',
      cityname: '彭泽县',
      cid: '01011805'
    },
    {
      cityCode: '0101180511',
      cityname: '浔阳区',
      cid: '01011805'
    },
    {
      cityCode: '0101180512',
      cityname: '永修县',
      cid: '01011805'
    },
    {
      cityCode: '0101180514',
      cityname: '柴桑区',
      cid: '01011805'
    },
    {
      cityCode: '0101180513',
      cityname: '濂溪区',
      cid: '01011805'
    },
    {
      cityCode: '0101180505',
      cityname: '庐山市',
      cid: '01011805'
    },
    {
      cityCode: '0101180501',
      cityname: '德安县',
      cid: '01011805'
    },
    {
      cityCode: '0101180601',
      cityname: '安义县',
      cid: '01011806'
    },
    {
      cityCode: '0101180609',
      cityname: '新建区',
      cid: '01011806'
    },
    {
      cityCode: '0101180603',
      cityname: '进贤县',
      cid: '01011806'
    },
    {
      cityCode: '01011806',
      cityname: '南昌市',
      cid: '01011806'
    },
    {
      cityCode: '0101180608',
      cityname: '西湖区',
      cid: '01011806'
    },
    {
      cityCode: '0101180602',
      cityname: '东湖区',
      cid: '01011806'
    },
    {
      cityCode: '0101180607',
      cityname: '红谷滩区',
      cid: '01011806'
    },
    {
      cityCode: '0101180606',
      cityname: '青云谱区',
      cid: '01011806'
    },
    {
      cityCode: '0101180605',
      cityname: '青山湖区',
      cid: '01011806'
    },
    {
      cityCode: '0101180610',
      cityname: '南昌县',
      cid: '01011806'
    },
    {
      cityCode: '0101180310',
      cityname: '峡江县',
      cid: '01011803'
    },
    {
      cityCode: '0101180308',
      cityname: '泰和县',
      cid: '01011803'
    },
    {
      cityCode: '0101180301',
      cityname: '安福县',
      cid: '01011803'
    },
    {
      cityCode: '0101180312',
      cityname: '永丰县',
      cid: '01011803'
    },
    {
      cityCode: '0101180313',
      cityname: '永新县',
      cid: '01011803'
    },
    {
      cityCode: '0101180314',
      cityname: '吉安县',
      cid: '01011803'
    },
    {
      cityCode: '0101180306',
      cityname: '青原区',
      cid: '01011803'
    },
    {
      cityCode: '0101180304',
      cityname: '吉州区',
      cid: '01011803'
    },
    {
      cityCode: '0101180311',
      cityname: '新干县',
      cid: '01011803'
    },
    {
      cityCode: '0101180307',
      cityname: '遂川县',
      cid: '01011803'
    },
    {
      cityCode: '01011803',
      cityname: '吉安市',
      cid: '01011803'
    },
    {
      cityCode: '0101180309',
      cityname: '万安县',
      cid: '01011803'
    },
    {
      cityCode: '0101180305',
      cityname: '井冈山市',
      cid: '01011803'
    },
    {
      cityCode: '0101180303',
      cityname: '吉水县',
      cid: '01011803'
    },
    {
      cityCode: '0101181006',
      cityname: '铜鼓县',
      cid: '01011810'
    },
    {
      cityCode: '01011810',
      cityname: '宜春市',
      cid: '01011810'
    },
    {
      cityCode: '0101181009',
      cityname: '袁州区',
      cid: '01011810'
    },
    {
      cityCode: '0101181008',
      cityname: '宜丰县',
      cid: '01011810'
    },
    {
      cityCode: '0101181001',
      cityname: '丰城市',
      cid: '01011810'
    },
    {
      cityCode: '0101181010',
      cityname: '樟树市',
      cid: '01011810'
    },
    {
      cityCode: '0101181003',
      cityname: '高安市',
      cid: '01011810'
    },
    {
      cityCode: '0101181004',
      cityname: '靖安县',
      cid: '01011810'
    },
    {
      cityCode: '0101181005',
      cityname: '上高县',
      cid: '01011810'
    },
    {
      cityCode: '0101181007',
      cityname: '万载县',
      cid: '01011810'
    },
    {
      cityCode: '0101181002',
      cityname: '奉新县',
      cid: '01011810'
    },
    {
      cityCode: '0101180101',
      cityname: '崇仁县',
      cid: '01011801'
    },
    {
      cityCode: '0101180106',
      cityname: '黎川县',
      cid: '01011801'
    },
    {
      cityCode: '0101180108',
      cityname: '南城县',
      cid: '01011801'
    },
    {
      cityCode: '0101180103',
      cityname: '广昌县',
      cid: '01011801'
    },
    {
      cityCode: '0101180104',
      cityname: '金溪县',
      cid: '01011801'
    },
    {
      cityCode: '0101180102',
      cityname: '东乡区',
      cid: '01011801'
    },
    {
      cityCode: '0101180105',
      cityname: '乐安县',
      cid: '01011801'
    },
    {
      cityCode: '0101180111',
      cityname: '资溪县',
      cid: '01011801'
    },
    {
      cityCode: '0101180109',
      cityname: '南丰县',
      cid: '01011801'
    },
    {
      cityCode: '0101180107',
      cityname: '临川区',
      cid: '01011801'
    },
    {
      cityCode: '0101180110',
      cityname: '宜黄县',
      cid: '01011801'
    },
    {
      cityCode: '01011801',
      cityname: '抚州市',
      cid: '01011801'
    },
    {
      cityCode: '0101180901',
      cityname: '分宜县',
      cid: '01011809'
    },
    {
      cityCode: '0101180902',
      cityname: '渝水区',
      cid: '01011809'
    },
    {
      cityCode: '01011809',
      cityname: '新余市',
      cid: '01011809'
    },
    {
      cityCode: '01011804',
      cityname: '景德镇市',
      cid: '01011804'
    },
    {
      cityCode: '0101180402',
      cityname: '浮梁县',
      cid: '01011804'
    },
    {
      cityCode: '0101180404',
      cityname: '珠山区',
      cid: '01011804'
    },
    {
      cityCode: '0101180403',
      cityname: '乐平市',
      cid: '01011804'
    },
    {
      cityCode: '0101180401',
      cityname: '昌江区',
      cid: '01011804'
    },
    {
      cityCode: '0101180702',
      cityname: '莲花县',
      cid: '01011807'
    },
    {
      cityCode: '0101180704',
      cityname: '上栗县',
      cid: '01011807'
    },
    {
      cityCode: '0101180705',
      cityname: '湘东区',
      cid: '01011807'
    },
    {
      cityCode: '01011807',
      cityname: '萍乡市',
      cid: '01011807'
    },
    {
      cityCode: '0101180703',
      cityname: '芦溪县',
      cid: '01011807'
    },
    {
      cityCode: '0101180701',
      cityname: '安源区',
      cid: '01011807'
    },
    {
      cityCode: '0101180202',
      cityname: '崇义县',
      cid: '01011802'
    },
    {
      cityCode: '0101180210',
      cityname: '全南县',
      cid: '01011802'
    },
    {
      cityCode: '0101180204',
      cityname: '定南县',
      cid: '01011802'
    },
    {
      cityCode: '0101180212',
      cityname: '上犹县',
      cid: '01011802'
    },
    {
      cityCode: '0101180207',
      cityname: '龙南市',
      cid: '01011802'
    },
    {
      cityCode: '0101180201',
      cityname: '安远县',
      cid: '01011802'
    },
    {
      cityCode: '01011802',
      cityname: '赣州市',
      cid: '01011802'
    },
    {
      cityCode: '0101180216',
      cityname: '寻乌县',
      cid: '01011802'
    },
    {
      cityCode: '0101180206',
      cityname: '会昌县',
      cid: '01011802'
    },
    {
      cityCode: '0101180208',
      cityname: '南康区',
      cid: '01011802'
    },
    {
      cityCode: '0101180203',
      cityname: '大余县',
      cid: '01011802'
    },
    {
      cityCode: '0101180218',
      cityname: '章贡区',
      cid: '01011802'
    },
    {
      cityCode: '0101180215',
      cityname: '兴国县',
      cid: '01011802'
    },
    {
      cityCode: '0101180205',
      cityname: '赣县区',
      cid: '01011802'
    },
    {
      cityCode: '0101180217',
      cityname: '于都县',
      cid: '01011802'
    },
    {
      cityCode: '0101180211',
      cityname: '瑞金市',
      cid: '01011802'
    },
    {
      cityCode: '0101180213',
      cityname: '石城县',
      cid: '01011802'
    },
    {
      cityCode: '0101180214',
      cityname: '信丰县',
      cid: '01011802'
    },
    {
      cityCode: '0101180209',
      cityname: '宁都县',
      cid: '01011802'
    },
    {
      cityCode: '0101181102',
      cityname: '余江区',
      cid: '01011811'
    },
    {
      cityCode: '0101181103',
      cityname: '月湖区',
      cid: '01011811'
    },
    {
      cityCode: '01011811',
      cityname: '鹰潭市',
      cid: '01011811'
    },
    {
      cityCode: '0101181101',
      cityname: '贵溪市',
      cid: '01011811'
    },
    {
      cityCode: '01011101',
      cityname: '保定市',
      cid: '01011101'
    },
    {
      cityCode: '0101110120',
      cityname: '望都县',
      cid: '01011101'
    },
    {
      cityCode: '0101110106',
      cityname: '定州市',
      cid: '01011101'
    },
    {
      cityCode: '0101110125',
      cityname: '涿州市',
      cid: '01011101'
    },
    {
      cityCode: '0101110109',
      cityname: '高阳县',
      cid: '01011101'
    },
    {
      cityCode: '0101110104',
      cityname: '博野县',
      cid: '01011101'
    },
    {
      cityCode: '0101110116',
      cityname: '曲阳县',
      cid: '01011101'
    },
    {
      cityCode: '0101110102',
      cityname: '安新县',
      cid: '01011101'
    },
    {
      cityCode: '0101110123',
      cityname: '徐水区',
      cid: '01011101'
    },
    {
      cityCode: '0101110119',
      cityname: '唐县',
      cid: '01011101'
    },
    {
      cityCode: '0101110124',
      cityname: '易县',
      cid: '01011101'
    },
    {
      cityCode: '0101110101',
      cityname: '安国市',
      cid: '01011101'
    },
    {
      cityCode: '0101110117',
      cityname: '容城县',
      cid: '01011101'
    },
    {
      cityCode: '0101110122',
      cityname: '雄县',
      cid: '01011101'
    },
    {
      cityCode: '0101110112',
      cityname: '蠡县',
      cid: '01011101'
    },
    {
      cityCode: '0101110108',
      cityname: '高碑店市',
      cid: '01011101'
    },
    {
      cityCode: '0101110111',
      cityname: '涞源县',
      cid: '01011101'
    },
    {
      cityCode: '0101110115',
      cityname: '清苑区',
      cid: '01011101'
    },
    {
      cityCode: '0101110113',
      cityname: '满城区',
      cid: '01011101'
    },
    {
      cityCode: '0101110118',
      cityname: '顺平县',
      cid: '01011101'
    },
    {
      cityCode: '0101110105',
      cityname: '定兴县',
      cid: '01011101'
    },
    {
      cityCode: '0101110110',
      cityname: '涞水县',
      cid: '01011101'
    },
    {
      cityCode: '0101110107',
      cityname: '阜平县',
      cid: '01011101'
    },
    {
      cityCode: '0101110121',
      cityname: '竞秀区',
      cid: '01011101'
    },
    {
      cityCode: '0101110126',
      cityname: '莲池区',
      cid: '01011101'
    },
    {
      cityCode: '0101110909',
      cityname: '滦州市',
      cid: '01011109'
    },
    {
      cityCode: '0101110913',
      cityname: '玉田县',
      cid: '01011109'
    },
    {
      cityCode: '0101110901',
      cityname: '丰南区',
      cid: '01011109'
    },
    {
      cityCode: '0101110908',
      cityname: '滦南县',
      cid: '01011109'
    },
    {
      cityCode: '0101110910',
      cityname: '迁安市',
      cid: '01011109'
    },
    {
      cityCode: '0101110903',
      cityname: '古冶区',
      cid: '01011109'
    },
    {
      cityCode: '0101110907',
      cityname: '路南区',
      cid: '01011109'
    },
    {
      cityCode: '0101110902',
      cityname: '丰润区',
      cid: '01011109'
    },
    {
      cityCode: '0101110915',
      cityname: '曹妃甸区',
      cid: '01011109'
    },
    {
      cityCode: '0101110906',
      cityname: '路北区',
      cid: '01011109'
    },
    {
      cityCode: '0101110914',
      cityname: '遵化市',
      cid: '01011109'
    },
    {
      cityCode: '0101110912',
      cityname: '唐海镇',
      cid: '01011109'
    },
    {
      cityCode: '0101110905',
      cityname: '乐亭县',
      cid: '01011109'
    },
    {
      cityCode: '0101110911',
      cityname: '迁西县',
      cid: '01011109'
    },
    {
      cityCode: '0101110904',
      cityname: '开平区',
      cid: '01011109'
    },
    {
      cityCode: '01011109',
      cityname: '唐山市',
      cid: '01011109'
    },
    {
      cityCode: '01011106',
      cityname: '廊坊市',
      cid: '01011106'
    },
    {
      cityCode: '0101110604',
      cityname: '大城县',
      cid: '01011106'
    },
    {
      cityCode: '0101110603',
      cityname: '大厂县',
      cid: '01011106'
    },
    {
      cityCode: '0101110609',
      cityname: '香河县',
      cid: '01011106'
    },
    {
      cityCode: '0101110607',
      cityname: '三河市',
      cid: '01011106'
    },
    {
      cityCode: '0101110606',
      cityname: '广阳区',
      cid: '01011106'
    },
    {
      cityCode: '0101110605',
      cityname: '固安县',
      cid: '01011106'
    },
    {
      cityCode: '0101110601',
      cityname: '安次区',
      cid: '01011106'
    },
    {
      cityCode: '0101110602',
      cityname: '霸州市',
      cid: '01011106'
    },
    {
      cityCode: '0101110610',
      cityname: '永清县',
      cid: '01011106'
    },
    {
      cityCode: '0101110608',
      cityname: '文安县',
      cid: '01011106'
    },
    {
      cityCode: '0101111101',
      cityname: '赤城县',
      cid: '01011111'
    },
    {
      cityCode: '0101111105',
      cityname: '怀来县',
      cid: '01011111'
    },
    {
      cityCode: '0101111113',
      cityname: '宣化区',
      cid: '01011111'
    },
    {
      cityCode: '0101111102',
      cityname: '崇礼区',
      cid: '01011111'
    },
    {
      cityCode: '0101111106',
      cityname: '康保县',
      cid: '01011111'
    },
    {
      cityCode: '0101111112',
      cityname: '下花园区',
      cid: '01011111'
    },
    {
      cityCode: '0101111110',
      cityname: '万全区',
      cid: '01011111'
    },
    {
      cityCode: '0101111115',
      cityname: '阳原县',
      cid: '01011111'
    },
    {
      cityCode: '0101111104',
      cityname: '怀安县',
      cid: '01011111'
    },
    {
      cityCode: '0101111117',
      cityname: '涿鹿县',
      cid: '01011111'
    },
    {
      cityCode: '0101111103',
      cityname: '沽源县',
      cid: '01011111'
    },
    {
      cityCode: '0101111116',
      cityname: '张北县',
      cid: '01011111'
    },
    {
      cityCode: '01011111',
      cityname: '张家口市',
      cid: '01011111'
    },
    {
      cityCode: '0101111111',
      cityname: '蔚县',
      cid: '01011111'
    },
    {
      cityCode: '0101111109',
      cityname: '尚义县',
      cid: '01011111'
    },
    {
      cityCode: '0101111119',
      cityname: '桥西区',
      cid: '01011111'
    },
    {
      cityCode: '0101111118',
      cityname: '桥东区',
      cid: '01011111'
    },
    {
      cityCode: '0101110312',
      cityname: '承德县',
      cid: '01011103'
    },
    {
      cityCode: '0101110311',
      cityname: '鹰手营子矿区',
      cid: '01011103'
    },
    {
      cityCode: '0101110310',
      cityname: '兴隆县',
      cid: '01011103'
    },
    {
      cityCode: '0101110309',
      cityname: '围场县',
      cid: '01011103'
    },
    {
      cityCode: '0101110308',
      cityname: '双桥区',
      cid: '01011103'
    },
    {
      cityCode: '0101110307',
      cityname: '双滦区',
      cid: '01011103'
    },
    {
      cityCode: '0101110306',
      cityname: '平泉市',
      cid: '01011103'
    },
    {
      cityCode: '0101110305',
      cityname: '滦平县',
      cid: '01011103'
    },
    {
      cityCode: '0101110304',
      cityname: '隆化县',
      cid: '01011103'
    },
    {
      cityCode: '0101110303',
      cityname: '宽城县',
      cid: '01011103'
    },
    {
      cityCode: '01011103',
      cityname: '承德市',
      cid: '01011103'
    },
    {
      cityCode: '0101110302',
      cityname: '丰宁县',
      cid: '01011103'
    },
    {
      cityCode: '0101110211',
      cityname: '肃宁县',
      cid: '01011102'
    },
    {
      cityCode: '0101110201',
      cityname: '泊头市',
      cid: '01011102'
    },
    {
      cityCode: '0101110212',
      cityname: '吴桥县',
      cid: '01011102'
    },
    {
      cityCode: '0101110204',
      cityname: '海兴县',
      cid: '01011102'
    },
    {
      cityCode: '0101110205',
      cityname: '河间市',
      cid: '01011102'
    },
    {
      cityCode: '0101110203',
      cityname: '东光县',
      cid: '01011102'
    },
    {
      cityCode: '0101110202',
      cityname: '沧县',
      cid: '01011102'
    },
    {
      cityCode: '0101110215',
      cityname: '盐山县',
      cid: '01011102'
    },
    {
      cityCode: '0101110206',
      cityname: '黄骅市',
      cid: '01011102'
    },
    {
      cityCode: '0101110210',
      cityname: '任丘市',
      cid: '01011102'
    },
    {
      cityCode: '0101110209',
      cityname: '青县',
      cid: '01011102'
    },
    {
      cityCode: '0101110208',
      cityname: '南皮县',
      cid: '01011102'
    },
    {
      cityCode: '0101110207',
      cityname: '孟村县',
      cid: '01011102'
    },
    {
      cityCode: '0101110216',
      cityname: '运河区',
      cid: '01011102'
    },
    {
      cityCode: '0101110815',
      cityname: '新华区',
      cid: '01011102'
    },
    {
      cityCode: '01011102',
      cityname: '沧州市',
      cid: '01011102'
    },
    {
      cityCode: '0101110213',
      cityname: '献县',
      cid: '01011102'
    },
    {
      cityCode: '0101110822',
      cityname: '赵县',
      cid: '01011108'
    },
    {
      cityCode: '0101110808',
      cityname: '鹿泉区',
      cid: '01011108'
    },
    {
      cityCode: '0101110807',
      cityname: '灵寿县',
      cid: '01011108'
    },
    {
      cityCode: '0101110824',
      cityname: '新华区',
      cid: '01011108'
    },
    {
      cityCode: '0101110813',
      cityname: '深泽县',
      cid: '01011108'
    },
    {
      cityCode: '0101110803',
      cityname: '藁城区',
      cid: '01011108'
    },
    {
      cityCode: '0101110812',
      cityname: '桥西区',
      cid: '01011108'
    },
    {
      cityCode: '0101110816',
      cityname: '辛集市',
      cid: '01011108'
    },
    {
      cityCode: '0101110810',
      cityname: '平山县',
      cid: '01011108'
    },
    {
      cityCode: '0101110819',
      cityname: '裕华区',
      cid: '01011108'
    },
    {
      cityCode: '0101110809',
      cityname: '栾城区',
      cid: '01011108'
    },
    {
      cityCode: '0101110805',
      cityname: '井陉矿区',
      cid: '01011108'
    },
    {
      cityCode: '0101110801',
      cityname: '长安区',
      cid: '01011108'
    },
    {
      cityCode: '0101110814',
      cityname: '无极县',
      cid: '01011108'
    },
    {
      cityCode: '0101110804',
      cityname: '晋州市',
      cid: '01011108'
    },
    {
      cityCode: '0101110806',
      cityname: '井陉县',
      cid: '01011108'
    },
    {
      cityCode: '0101110818',
      cityname: '行唐县',
      cid: '01011108'
    },
    {
      cityCode: '0101110823',
      cityname: '正定县',
      cid: '01011108'
    },
    {
      cityCode: '01011108',
      cityname: '石家庄市',
      cid: '01011108'
    },
    {
      cityCode: '0101110817',
      cityname: '新乐市',
      cid: '01011108'
    },
    {
      cityCode: '0101110820',
      cityname: '元氏县',
      cid: '01011108'
    },
    {
      cityCode: '0101110821',
      cityname: '赞皇县',
      cid: '01011108'
    },
    {
      cityCode: '0101110802',
      cityname: '高邑县',
      cid: '01011108'
    },
    {
      cityCode: '0101110701',
      cityname: '北戴河区',
      cid: '01011107'
    },
    {
      cityCode: '0101110703',
      cityname: '抚宁区',
      cid: '01011107'
    },
    {
      cityCode: '0101110702',
      cityname: '昌黎县',
      cid: '01011107'
    },
    {
      cityCode: '01011107',
      cityname: '秦皇岛市',
      cid: '01011107'
    },
    {
      cityCode: '0101110706',
      cityname: '青龙县',
      cid: '01011107'
    },
    {
      cityCode: '0101110707',
      cityname: '山海关区',
      cid: '01011107'
    },
    {
      cityCode: '0101110704',
      cityname: '海港区',
      cid: '01011107'
    },
    {
      cityCode: '0101110705',
      cityname: '卢龙县',
      cid: '01011107'
    },
    {
      cityCode: '01011105',
      cityname: '衡水市',
      cid: '01011105'
    },
    {
      cityCode: '0101110507',
      cityname: '深州市',
      cid: '01011105'
    },
    {
      cityCode: '0101110509',
      cityname: '武强县',
      cid: '01011105'
    },
    {
      cityCode: '0101110503',
      cityname: '故城县',
      cid: '01011105'
    },
    {
      cityCode: '0101110511',
      cityname: '枣强县',
      cid: '01011105'
    },
    {
      cityCode: '0101110501',
      cityname: '安平县',
      cid: '01011105'
    },
    {
      cityCode: '0101110504',
      cityname: '冀州区',
      cid: '01011105'
    },
    {
      cityCode: '0101110510',
      cityname: '武邑县',
      cid: '01011105'
    },
    {
      cityCode: '0101110502',
      cityname: '阜城县',
      cid: '01011105'
    },
    {
      cityCode: '0101110505',
      cityname: '景县',
      cid: '01011105'
    },
    {
      cityCode: '0101110508',
      cityname: '桃城区',
      cid: '01011105'
    },
    {
      cityCode: '0101110506',
      cityname: '饶阳县',
      cid: '01011105'
    },
    {
      cityCode: '0101111020',
      cityname: '信都区',
      cid: '01011110'
    },
    {
      cityCode: '0101111019',
      cityname: '襄都区',
      cid: '01011110'
    },
    {
      cityCode: '0101111015',
      cityname: '任泽区',
      cid: '01011110'
    },
    {
      cityCode: '0101111009',
      cityname: '内丘县',
      cid: '01011110'
    },
    {
      cityCode: '0101111014',
      cityname: '清河县',
      cid: '01011110'
    },
    {
      cityCode: '0101111018',
      cityname: '新河县',
      cid: '01011110'
    },
    {
      cityCode: '0101111003',
      cityname: '巨鹿县',
      cid: '01011110'
    },
    {
      cityCode: '0101111008',
      cityname: '南和区',
      cid: '01011110'
    },
    {
      cityCode: '0101111017',
      cityname: '威县',
      cid: '01011110'
    },
    {
      cityCode: '0101111010',
      cityname: '宁晋县',
      cid: '01011110'
    },
    {
      cityCode: '0101111011',
      cityname: '平乡县',
      cid: '01011110'
    },
    {
      cityCode: '0101111016',
      cityname: '沙河市',
      cid: '01011110'
    },
    {
      cityCode: '0101111006',
      cityname: '隆尧县',
      cid: '01011110'
    },
    {
      cityCode: '0101111005',
      cityname: '临西县',
      cid: '01011110'
    },
    {
      cityCode: '0101111001',
      cityname: '柏乡县',
      cid: '01011110'
    },
    {
      cityCode: '01011110',
      cityname: '邢台市',
      cid: '01011110'
    },
    {
      cityCode: '0101111007',
      cityname: '南宫市',
      cid: '01011110'
    },
    {
      cityCode: '0101111002',
      cityname: '广宗县',
      cid: '01011110'
    },
    {
      cityCode: '0101111004',
      cityname: '临城县',
      cid: '01011110'
    },
    {
      cityCode: '0101110402',
      cityname: '丛台区',
      cid: '01011104'
    },
    {
      cityCode: '0101110405',
      cityname: '峰峰矿区',
      cid: '01011104'
    },
    {
      cityCode: '0101110411',
      cityname: '邱县',
      cid: '01011104'
    },
    {
      cityCode: '0101110403',
      cityname: '大名县',
      cid: '01011104'
    },
    {
      cityCode: '0101110404',
      cityname: '肥乡区',
      cid: '01011104'
    },
    {
      cityCode: '0101110413',
      cityname: '涉县',
      cid: '01011104'
    },
    {
      cityCode: '0101110410',
      cityname: '鸡泽县',
      cid: '01011104'
    },
    {
      cityCode: '0101110414',
      cityname: '魏县',
      cid: '01011104'
    },
    {
      cityCode: '0101110418',
      cityname: '临漳县',
      cid: '01011104'
    },
    {
      cityCode: '0101110416',
      cityname: '永年区',
      cid: '01011104'
    },
    {
      cityCode: '0101110417',
      cityname: '成安县',
      cid: '01011104'
    },
    {
      cityCode: '0101110401',
      cityname: '磁县',
      cid: '01011104'
    },
    {
      cityCode: '0101110408',
      cityname: '广平县',
      cid: '01011104'
    },
    {
      cityCode: '01011104',
      cityname: '邯郸市',
      cid: '01011104'
    },
    {
      cityCode: '0101110412',
      cityname: '曲周县',
      cid: '01011104'
    },
    {
      cityCode: '0101110409',
      cityname: '邯山区',
      cid: '01011104'
    },
    {
      cityCode: '0101110415',
      cityname: '武安市',
      cid: '01011104'
    },
    {
      cityCode: '0101110406',
      cityname: '复兴区',
      cid: '01011104'
    },
    {
      cityCode: '0101110407',
      cityname: '馆陶县',
      cid: '01011104'
    },
    {
      cityCode: '0101121006',
      cityname: '义马市',
      cid: '01011210'
    },
    {
      cityCode: '0101121001',
      cityname: '湖滨区',
      cid: '01011210'
    },
    {
      cityCode: '0101121003',
      cityname: '卢氏县',
      cid: '01011210'
    },
    {
      cityCode: '0101121002',
      cityname: '灵宝市',
      cid: '01011210'
    },
    {
      cityCode: '0101121004',
      cityname: '渑池县',
      cid: '01011210'
    },
    {
      cityCode: '01011210',
      cityname: '三门峡市',
      cid: '01011210'
    },
    {
      cityCode: '0101121005',
      cityname: '陕州区',
      cid: '01011210'
    },
    {
      cityCode: '0101121407',
      cityname: '商城县',
      cid: '01011214'
    },
    {
      cityCode: '0101121401',
      cityname: '固始县',
      cid: '01011214'
    },
    {
      cityCode: '0101121404',
      cityname: '潢川县',
      cid: '01011214'
    },
    {
      cityCode: '0101121402',
      cityname: '光山县',
      cid: '01011214'
    },
    {
      cityCode: '0101121409',
      cityname: '息县',
      cid: '01011214'
    },
    {
      cityCode: '0101121405',
      cityname: '罗山县',
      cid: '01011214'
    },
    {
      cityCode: '0101121410',
      cityname: '新县',
      cid: '01011214'
    },
    {
      cityCode: '01011214',
      cityname: '信阳市',
      cid: '01011214'
    },
    {
      cityCode: '0101121408',
      cityname: '浉河区',
      cid: '01011214'
    },
    {
      cityCode: '0101121406',
      cityname: '平桥区',
      cid: '01011214'
    },
    {
      cityCode: '0101121403',
      cityname: '淮滨县',
      cid: '01011214'
    },
    {
      cityCode: '0101120707',
      cityname: '桐柏县',
      cid: '01011207'
    },
    {
      cityCode: '0101120703',
      cityname: '南召县',
      cid: '01011207'
    },
    {
      cityCode: '0101120710',
      cityname: '淅川县',
      cid: '01011207'
    },
    {
      cityCode: '0101120701',
      cityname: '邓州市',
      cid: '01011207'
    },
    {
      cityCode: '0101120711',
      cityname: '西峡县',
      cid: '01011207'
    },
    {
      cityCode: '0101120705',
      cityname: '社旗县',
      cid: '01011207'
    },
    {
      cityCode: '01011207',
      cityname: '南阳市',
      cid: '01011207'
    },
    {
      cityCode: '0101120713',
      cityname: '镇平县',
      cid: '01011207'
    },
    {
      cityCode: '0101120706',
      cityname: '唐河县',
      cid: '01011207'
    },
    {
      cityCode: '0101120712',
      cityname: '新野县',
      cid: '01011207'
    },
    {
      cityCode: '0101120709',
      cityname: '卧龙区',
      cid: '01011207'
    },
    {
      cityCode: '0101120704',
      cityname: '内乡县',
      cid: '01011207'
    },
    {
      cityCode: '0101120708',
      cityname: '宛城区',
      cid: '01011207'
    },
    {
      cityCode: '0101120702',
      cityname: '方城县',
      cid: '01011207'
    },
    {
      cityCode: '0101121710',
      cityname: '项城市',
      cid: '01011217'
    },
    {
      cityCode: '0101121702',
      cityname: '郸城县',
      cid: '01011217'
    },
    {
      cityCode: '0101121701',
      cityname: '川汇区',
      cid: '01011217'
    },
    {
      cityCode: '0101121705',
      cityname: '鹿邑县',
      cid: '01011217'
    },
    {
      cityCode: '0101121707',
      cityname: '沈丘县',
      cid: '01011217'
    },
    {
      cityCode: '01011217',
      cityname: '周口市',
      cid: '01011217'
    },
    {
      cityCode: '0101121709',
      cityname: '西华县',
      cid: '01011217'
    },
    {
      cityCode: '0101121703',
      cityname: '扶沟县',
      cid: '01011217'
    },
    {
      cityCode: '0101121706',
      cityname: '商水县',
      cid: '01011217'
    },
    {
      cityCode: '0101121708',
      cityname: '太康县',
      cid: '01011217'
    },
    {
      cityCode: '0101121704',
      cityname: '淮阳区',
      cid: '01011217'
    },
    {
      cityCode: '0101121104',
      cityname: '睢县',
      cid: '01011211'
    },
    {
      cityCode: '0101121103',
      cityname: '宁陵县',
      cid: '01011211'
    },
    {
      cityCode: '0101121109',
      cityname: '柘城县',
      cid: '01011211'
    },
    {
      cityCode: '0101121105',
      cityname: '睢阳区',
      cid: '01011211'
    },
    {
      cityCode: '0101121101',
      cityname: '梁园区',
      cid: '01011211'
    },
    {
      cityCode: '01011211',
      cityname: '商丘市',
      cid: '01011211'
    },
    {
      cityCode: '0101121102',
      cityname: '民权县',
      cid: '01011211'
    },
    {
      cityCode: '0101121106',
      cityname: '夏邑县',
      cid: '01011211'
    },
    {
      cityCode: '0101121108',
      cityname: '虞城县',
      cid: '01011211'
    },
    {
      cityCode: '0101121107',
      cityname: '永城市',
      cid: '01011211'
    },
    {
      cityCode: '0101120108',
      cityname: '文峰区',
      cid: '01011201'
    },
    {
      cityCode: '0101120105',
      cityname: '龙安区',
      cid: '01011201'
    },
    {
      cityCode: '0101120102',
      cityname: '北关区',
      cid: '01011201'
    },
    {
      cityCode: '01011201',
      cityname: '安阳市',
      cid: '01011201'
    },
    {
      cityCode: '0101120101',
      cityname: '安阳县',
      cid: '01011201'
    },
    {
      cityCode: '0101120106',
      cityname: '内黄县',
      cid: '01011201'
    },
    {
      cityCode: '0101120104',
      cityname: '林州市',
      cid: '01011201'
    },
    {
      cityCode: '0101120103',
      cityname: '滑县',
      cid: '01011201'
    },
    {
      cityCode: '0101120107',
      cityname: '汤阴县',
      cid: '01011201'
    },
    {
      cityCode: '0101120109',
      cityname: '殷都区',
      cid: '01011201'
    },
    {
      cityCode: '0101120810',
      cityname: '郏县',
      cid: '01011208'
    },
    {
      cityCode: '01011208',
      cityname: '平顶山市',
      cid: '01011208'
    },
    {
      cityCode: '0101120806',
      cityname: '舞钢市',
      cid: '01011208'
    },
    {
      cityCode: '0101120802',
      cityname: '鲁山县',
      cid: '01011208'
    },
    {
      cityCode: '0101120809',
      cityname: '湛河区',
      cid: '01011208'
    },
    {
      cityCode: '0101120804',
      cityname: '石龙区',
      cid: '01011208'
    },
    {
      cityCode: '0101120807',
      cityname: '新华区',
      cid: '01011208'
    },
    {
      cityCode: '0101120805',
      cityname: '卫东区',
      cid: '01011208'
    },
    {
      cityCode: '0101120808',
      cityname: '叶县',
      cid: '01011208'
    },
    {
      cityCode: '0101120803',
      cityname: '汝州市',
      cid: '01011208'
    },
    {
      cityCode: '0101120801',
      cityname: '宝丰县',
      cid: '01011208'
    },
    {
      cityCode: '0101120406',
      cityname: '杞县',
      cid: '01011204'
    },
    {
      cityCode: '0101120408',
      cityname: '通许县',
      cid: '01011204'
    },
    {
      cityCode: '0101120404',
      cityname: '兰考县',
      cid: '01011204'
    },
    {
      cityCode: '0101120410',
      cityname: '禹王台区',
      cid: '01011204'
    },
    {
      cityCode: '0101120407',
      cityname: '顺河回族区',
      cid: '01011204'
    },
    {
      cityCode: '0101120405',
      cityname: '龙亭区',
      cid: '01011204'
    },
    {
      cityCode: '0101120401',
      cityname: '鼓楼区',
      cid: '01011204'
    },
    {
      cityCode: '0101120409',
      cityname: '尉氏县',
      cid: '01011204'
    },
    {
      cityCode: '01011204',
      cityname: '开封市',
      cid: '01011204'
    },
    {
      cityCode: '0101120403',
      cityname: '祥符区',
      cid: '01011204'
    },
    {
      cityCode: '0101121307',
      cityname: '牧野区',
      cid: '01011213'
    },
    {
      cityCode: '0101121309',
      cityname: '卫辉市',
      cid: '01011213'
    },
    {
      cityCode: '0101121304',
      cityname: '红旗区',
      cid: '01011213'
    },
    {
      cityCode: '0101121303',
      cityname: '凤泉区',
      cid: '01011213'
    },
    {
      cityCode: '0101121301',
      cityname: '长垣市',
      cid: '01011213'
    },
    {
      cityCode: '01011213',
      cityname: '新乡市',
      cid: '01011213'
    },
    {
      cityCode: '0101121311',
      cityname: '延津县',
      cid: '01011213'
    },
    {
      cityCode: '0101121305',
      cityname: '辉县市',
      cid: '01011213'
    },
    {
      cityCode: '0101121302',
      cityname: '封丘县',
      cid: '01011213'
    },
    {
      cityCode: '0101121306',
      cityname: '获嘉县',
      cid: '01011213'
    },
    {
      cityCode: '0101121312',
      cityname: '原阳县',
      cid: '01011213'
    },
    {
      cityCode: '0101121310',
      cityname: '新乡县',
      cid: '01011213'
    },
    {
      cityCode: '0101121308',
      cityname: '卫滨区',
      cid: '01011213'
    },
    {
      cityCode: '0101120601',
      cityname: '瀍河回族区',
      cid: '01011206'
    },
    {
      cityCode: '0101120607',
      cityname: '洛宁县',
      cid: '01011206'
    },
    {
      cityCode: '0101120615',
      cityname: '宜阳县',
      cid: '01011206'
    },
    {
      cityCode: '0101120613',
      cityname: '偃师市',
      cid: '01011206'
    },
    {
      cityCode: '0101120610',
      cityname: '嵩县',
      cid: '01011206'
    },
    {
      cityCode: '0101120614',
      cityname: '伊川县',
      cid: '01011206'
    },
    {
      cityCode: '0101120608',
      cityname: '孟津区',
      cid: '01011206'
    },
    {
      cityCode: '0101120605',
      cityname: '栾川县',
      cid: '01011206'
    },
    {
      cityCode: '01011206',
      cityname: '洛阳市',
      cid: '01011206'
    },
    {
      cityCode: '0101120612',
      cityname: '新安县',
      cid: '01011206'
    },
    {
      cityCode: '0101120611',
      cityname: '西工区',
      cid: '01011206'
    },
    {
      cityCode: '0101120602',
      cityname: '吉利区',
      cid: '01011206'
    },
    {
      cityCode: '0101120606',
      cityname: '洛龙区',
      cid: '01011206'
    },
    {
      cityCode: '0101120609',
      cityname: '汝阳县',
      cid: '01011206'
    },
    {
      cityCode: '0101120604',
      cityname: '老城区',
      cid: '01011206'
    },
    {
      cityCode: '0101120603',
      cityname: '涧西区',
      cid: '01011206'
    },
    {
      cityCode: '0101121201',
      cityname: '济源市',
      cid: '0101121201'
    },
    {
      cityCode: '0101120505',
      cityname: '召陵区',
      cid: '01011205'
    },
    {
      cityCode: '01011205',
      cityname: '漯河市',
      cid: '01011205'
    },
    {
      cityCode: '0101120504',
      cityname: '源汇区',
      cid: '01011205'
    },
    {
      cityCode: '0101120503',
      cityname: '郾城区',
      cid: '01011205'
    },
    {
      cityCode: '0101120502',
      cityname: '舞阳县',
      cid: '01011205'
    },
    {
      cityCode: '0101120501',
      cityname: '临颍县',
      cid: '01011205'
    },
    {
      cityCode: '0101120907',
      cityname: '濮阳县',
      cid: '01011209'
    },
    {
      cityCode: '0101120906',
      cityname: '台前县',
      cid: '01011209'
    },
    {
      cityCode: '0101120903',
      cityname: '南乐县',
      cid: '01011209'
    },
    {
      cityCode: '0101120902',
      cityname: '华龙区',
      cid: '01011209'
    },
    {
      cityCode: '0101120901',
      cityname: '范县',
      cid: '01011209'
    },
    {
      cityCode: '01011209',
      cityname: '濮阳市',
      cid: '01011209'
    },
    {
      cityCode: '0101120905',
      cityname: '清丰县',
      cid: '01011209'
    },
    {
      cityCode: '0101120308',
      cityname: '武陟县',
      cid: '01011203'
    },
    {
      cityCode: '0101120304',
      cityname: '孟州市',
      cid: '01011203'
    },
    {
      cityCode: '01011203',
      cityname: '焦作市',
      cid: '01011203'
    },
    {
      cityCode: '0101120309',
      cityname: '修武县',
      cid: '01011203'
    },
    {
      cityCode: '0101120307',
      cityname: '温县',
      cid: '01011203'
    },
    {
      cityCode: '0101120305',
      cityname: '沁阳市',
      cid: '01011203'
    },
    {
      cityCode: '0101120310',
      cityname: '中站区',
      cid: '01011203'
    },
    {
      cityCode: '0101120306',
      cityname: '山阳区',
      cid: '01011203'
    },
    {
      cityCode: '0101120303',
      cityname: '马村区',
      cid: '01011203'
    },
    {
      cityCode: '0101120302',
      cityname: '解放区',
      cid: '01011203'
    },
    {
      cityCode: '0101120301',
      cityname: '博爱县',
      cid: '01011203'
    },
    {
      cityCode: '0101121507',
      cityname: '建安区',
      cid: '01011215'
    },
    {
      cityCode: '0101121503',
      cityname: '襄城县',
      cid: '01011215'
    },
    {
      cityCode: '0101121501',
      cityname: '长葛市',
      cid: '01011215'
    },
    {
      cityCode: '0101121506',
      cityname: '禹州市',
      cid: '01011215'
    },
    {
      cityCode: '0101121502',
      cityname: '魏都区',
      cid: '01011215'
    },
    {
      cityCode: '0101121505',
      cityname: '鄢陵县',
      cid: '01011215'
    },
    {
      cityCode: '01011215',
      cityname: '许昌市',
      cid: '01011215'
    },
    {
      cityCode: '0101121611',
      cityname: '中牟县',
      cid: '01011216'
    },
    {
      cityCode: '0101121610',
      cityname: '荥阳市',
      cid: '01011216'
    },
    {
      cityCode: '01011216',
      cityname: '郑州市',
      cid: '01011216'
    },
    {
      cityCode: '0101121612',
      cityname: '中原区',
      cid: '01011216'
    },
    {
      cityCode: '0101121608',
      cityname: '新密市',
      cid: '01011216'
    },
    {
      cityCode: '0101121606',
      cityname: '金水区',
      cid: '01011216'
    },
    {
      cityCode: '0101121601',
      cityname: '登封市',
      cid: '01011216'
    },
    {
      cityCode: '0101121605',
      cityname: '惠济区',
      cid: '01011216'
    },
    {
      cityCode: '0101121604',
      cityname: '管城回族区',
      cid: '01011216'
    },
    {
      cityCode: '0101121602',
      cityname: '二七区',
      cid: '01011216'
    },
    {
      cityCode: '0101121609',
      cityname: '新郑市',
      cid: '01011216'
    },
    {
      cityCode: '0101121603',
      cityname: '巩义市',
      cid: '01011216'
    },
    {
      cityCode: '0101121607',
      cityname: '上街区',
      cid: '01011216'
    },
    {
      cityCode: '01011218',
      cityname: '驻马店市',
      cid: '01011218'
    },
    {
      cityCode: '0101121808',
      cityname: '新蔡县',
      cid: '01011218'
    },
    {
      cityCode: '0101121805',
      cityname: '上蔡县',
      cid: '01011218'
    },
    {
      cityCode: '0101121809',
      cityname: '驿城区',
      cid: '01011218'
    },
    {
      cityCode: '0101121810',
      cityname: '正阳县',
      cid: '01011218'
    },
    {
      cityCode: '0101121803',
      cityname: '确山县',
      cid: '01011218'
    },
    {
      cityCode: '0101121801',
      cityname: '泌阳县',
      cid: '01011218'
    },
    {
      cityCode: '0101121806',
      cityname: '遂平县',
      cid: '01011218'
    },
    {
      cityCode: '0101121804',
      cityname: '汝南县',
      cid: '01011218'
    },
    {
      cityCode: '0101121807',
      cityname: '西平县',
      cid: '01011218'
    },
    {
      cityCode: '0101121802',
      cityname: '平舆县',
      cid: '01011218'
    },
    {
      cityCode: '0101120204',
      cityname: '淇县',
      cid: '01011202'
    },
    {
      cityCode: '0101120202',
      cityname: '浚县',
      cid: '01011202'
    },
    {
      cityCode: '0101120205',
      cityname: '山城区',
      cid: '01011202'
    },
    {
      cityCode: '0101120203',
      cityname: '淇滨区',
      cid: '01011202'
    },
    {
      cityCode: '0101120201',
      cityname: '鹤山区',
      cid: '01011202'
    },
    {
      cityCode: '01011202',
      cityname: '鹤壁市',
      cid: '01011202'
    },
    {
      cityCode: '0101340503',
      cityname: '莲都区',
      cid: '01013405'
    },
    {
      cityCode: '0101340505',
      cityname: '青田县',
      cid: '01013405'
    },
    {
      cityCode: '0101340504',
      cityname: '龙泉市',
      cid: '01013405'
    },
    {
      cityCode: '0101340507',
      cityname: '松阳县',
      cid: '01013405'
    },
    {
      cityCode: '0101340502',
      cityname: '景宁县',
      cid: '01013405'
    },
    {
      cityCode: '0101340506',
      cityname: '庆元县',
      cid: '01013405'
    },
    {
      cityCode: '0101340501',
      cityname: '缙云县',
      cid: '01013405'
    },
    {
      cityCode: '01013405',
      cityname: '丽水市',
      cid: '01013405'
    },
    {
      cityCode: '0101340509',
      cityname: '云和县',
      cid: '01013405'
    },
    {
      cityCode: '0101340508',
      cityname: '遂昌县',
      cid: '01013405'
    },
    {
      cityCode: '0101340905',
      cityname: '三门县',
      cid: '01013409'
    },
    {
      cityCode: '0101340902',
      cityname: '椒江区',
      cid: '01013409'
    },
    {
      cityCode: '0101340904',
      cityname: '路桥区',
      cid: '01013409'
    },
    {
      cityCode: '0101340907',
      cityname: '温岭市',
      cid: '01013409'
    },
    {
      cityCode: '0101340906',
      cityname: '天台县',
      cid: '01013409'
    },
    {
      cityCode: '0101340903',
      cityname: '临海市',
      cid: '01013409'
    },
    {
      cityCode: '0101340908',
      cityname: '仙居县',
      cid: '01013409'
    },
    {
      cityCode: '01013409',
      cityname: '台州市',
      cid: '01013409'
    },
    {
      cityCode: '0101340901',
      cityname: '黄岩区',
      cid: '01013409'
    },
    {
      cityCode: '0101340910',
      cityname: '洪家街道',
      cid: '01013409'
    },
    {
      cityCode: '0101340909',
      cityname: '玉环市',
      cid: '01013409'
    },
    {
      cityCode: '01013403',
      cityname: '嘉兴市',
      cid: '01013403'
    },
    {
      cityCode: '0101340307',
      cityname: '秀洲区',
      cid: '01013403'
    },
    {
      cityCode: '0101340306',
      cityname: '桐乡市',
      cid: '01013403'
    },
    {
      cityCode: '0101340304',
      cityname: '南湖区',
      cid: '01013403'
    },
    {
      cityCode: '0101340302',
      cityname: '海盐县',
      cid: '01013403'
    },
    {
      cityCode: '0101340303',
      cityname: '嘉善县',
      cid: '01013403'
    },
    {
      cityCode: '0101340301',
      cityname: '海宁市',
      cid: '01013403'
    },
    {
      cityCode: '0101340305',
      cityname: '平湖市',
      cid: '01013403'
    },
    {
      cityCode: '0101340611',
      cityname: '鄞州区',
      cid: '01013406'
    },
    {
      cityCode: '0101340607',
      cityname: '宁海县',
      cid: '01013406'
    },
    {
      cityCode: '01013406',
      cityname: '宁波市',
      cid: '01013406'
    },
    {
      cityCode: '0101340609',
      cityname: '余姚市',
      cid: '01013406'
    },
    {
      cityCode: '0101340608',
      cityname: '象山县',
      cid: '01013406'
    },
    {
      cityCode: '0101340602',
      cityname: '慈溪市',
      cid: '01013406'
    },
    {
      cityCode: '0101340603',
      cityname: '奉化区',
      cid: '01013406'
    },
    {
      cityCode: '0101340610',
      cityname: '镇海区',
      cid: '01013406'
    },
    {
      cityCode: '0101340606',
      cityname: '江东街道',
      cid: '01013406'
    },
    {
      cityCode: '0101340605',
      cityname: '江北区',
      cid: '01013406'
    },
    {
      cityCode: '0101340601',
      cityname: '北仑区',
      cid: '01013406'
    },
    {
      cityCode: '0101340604',
      cityname: '海曙区',
      cid: '01013406'
    },
    {
      cityCode: '0101340113',
      cityname: '余杭区',
      cid: '01013401'
    },
    {
      cityCode: '0101340109',
      cityname: '桐庐县',
      cid: '01013401'
    },
    {
      cityCode: '0101340111',
      cityname: '下城区',
      cid: '01013401'
    },
    {
      cityCode: '0101340115',
      cityname: '临平区',
      cid: '01013401'
    },
    {
      cityCode: '0101340110',
      cityname: '西湖区',
      cid: '01013401'
    },
    {
      cityCode: '0101340114',
      cityname: '钱塘区',
      cid: '01013401'
    },
    {
      cityCode: '0101340102',
      cityname: '淳安县',
      cid: '01013401'
    },
    {
      cityCode: '0101340103',
      cityname: '富阳区',
      cid: '01013401'
    },
    {
      cityCode: '0101340112',
      cityname: '萧山区',
      cid: '01013401'
    },
    {
      cityCode: '0101340108',
      cityname: '上城区',
      cid: '01013401'
    },
    {
      cityCode: '0101340105',
      cityname: '建德市',
      cid: '01013401'
    },
    {
      cityCode: '0101340106',
      cityname: '江干区',
      cid: '01013401'
    },
    {
      cityCode: '0101340104',
      cityname: '拱墅区',
      cid: '01013401'
    },
    {
      cityCode: '0101340101',
      cityname: '滨江区',
      cid: '01013401'
    },
    {
      cityCode: '0101340107',
      cityname: '临安区',
      cid: '01013401'
    },
    {
      cityCode: '01013401',
      cityname: '杭州市',
      cid: '01013401'
    },
    {
      cityCode: '0101341007',
      cityname: '平阳县',
      cid: '01013410'
    },
    {
      cityCode: '01013410',
      cityname: '温州市',
      cid: '01013410'
    },
    {
      cityCode: '0101341011',
      cityname: '永嘉县',
      cid: '01013410'
    },
    {
      cityCode: '0101341010',
      cityname: '文成县',
      cid: '01013410'
    },
    {
      cityCode: '0101341002',
      cityname: '洞头区',
      cid: '01013410'
    },
    {
      cityCode: '0101341006',
      cityname: '瓯海区',
      cid: '01013410'
    },
    {
      cityCode: '0101341005',
      cityname: '鹿城区',
      cid: '01013410'
    },
    {
      cityCode: '0101341001',
      cityname: '苍南县',
      cid: '01013410'
    },
    {
      cityCode: '0101341004',
      cityname: '龙湾区',
      cid: '01013410'
    },
    {
      cityCode: '0101341008',
      cityname: '瑞安市',
      cid: '01013410'
    },
    {
      cityCode: '0101341003',
      cityname: '乐清市',
      cid: '01013410'
    },
    {
      cityCode: '0101341009',
      cityname: '泰顺县',
      cid: '01013410'
    },
    {
      cityCode: '01013402',
      cityname: '湖州市',
      cid: '01013402'
    },
    {
      cityCode: '0101340202',
      cityname: '长兴县',
      cid: '01013402'
    },
    {
      cityCode: '0101340201',
      cityname: '安吉县',
      cid: '01013402'
    },
    {
      cityCode: '0101340205',
      cityname: '吴兴区',
      cid: '01013402'
    },
    {
      cityCode: '0101340204',
      cityname: '南浔区',
      cid: '01013402'
    },
    {
      cityCode: '0101340203',
      cityname: '德清县',
      cid: '01013402'
    },
    {
      cityCode: '0101340804',
      cityname: '新昌县',
      cid: '01013408'
    },
    {
      cityCode: '0101340806',
      cityname: '诸暨市',
      cid: '01013408'
    },
    {
      cityCode: '0101340803',
      cityname: '嵊州市',
      cid: '01013408'
    },
    {
      cityCode: '0101340807',
      cityname: '柯桥区',
      cid: '01013408'
    },
    {
      cityCode: '01013408',
      cityname: '绍兴市',
      cid: '01013408'
    },
    {
      cityCode: '0101340805',
      cityname: '越城区',
      cid: '01013408'
    },
    {
      cityCode: '0101340801',
      cityname: '上虞区',
      cid: '01013408'
    },
    {
      cityCode: '0101341101',
      cityname: '岱山县',
      cid: '01013411'
    },
    {
      cityCode: '0101341104',
      cityname: '嵊泗县',
      cid: '01013411'
    },
    {
      cityCode: '01013411',
      cityname: '舟山市',
      cid: '01013411'
    },
    {
      cityCode: '0101341102',
      cityname: '定海区',
      cid: '01013411'
    },
    {
      cityCode: '0101341103',
      cityname: '普陀区',
      cid: '01013411'
    },
    {
      cityCode: '0101340706',
      cityname: '衢江区',
      cid: '01013407'
    },
    {
      cityCode: '0101340705',
      cityname: '龙游县',
      cid: '01013407'
    },
    {
      cityCode: '0101340702',
      cityname: '江山市',
      cid: '01013407'
    },
    {
      cityCode: '0101340703',
      cityname: '开化县',
      cid: '01013407'
    },
    {
      cityCode: '0101340704',
      cityname: '柯城区',
      cid: '01013407'
    },
    {
      cityCode: '01013407',
      cityname: '衢州市',
      cid: '01013407'
    },
    {
      cityCode: '0101340701',
      cityname: '常山县',
      cid: '01013407'
    },
    {
      cityCode: '0101340407',
      cityname: '婺城区',
      cid: '01013404'
    },
    {
      cityCode: '0101340401',
      cityname: '东阳市',
      cid: '01013404'
    },
    {
      cityCode: '0101340402',
      cityname: '金东区',
      cid: '01013404'
    },
    {
      cityCode: '0101340405',
      cityname: '浦江县',
      cid: '01013404'
    },
    {
      cityCode: '0101340406',
      cityname: '武义县',
      cid: '01013404'
    },
    {
      cityCode: '01013404',
      cityname: '金华市',
      cid: '01013404'
    },
    {
      cityCode: '0101340409',
      cityname: '永康市',
      cid: '01013404'
    },
    {
      cityCode: '0101340403',
      cityname: '兰溪市',
      cid: '01013404'
    },
    {
      cityCode: '0101340404',
      cityname: '磐安县',
      cid: '01013404'
    },
    {
      cityCode: '0101340408',
      cityname: '义乌市',
      cid: '01013404'
    },
    {
      cityCode: '01011016',
      cityname: '万宁市',
      cid: '01011016'
    },
    {
      cityCode: '0101101406',
      cityname: '崖州区',
      cid: '01011014'
    },
    {
      cityCode: '0101101405',
      cityname: '天涯区',
      cid: '01011014'
    },
    {
      cityCode: '0101101404',
      cityname: '吉阳区',
      cid: '01011014'
    },
    {
      cityCode: '0101101403',
      cityname: '海棠区',
      cid: '01011014'
    },
    {
      cityCode: '01011014',
      cityname: '三亚市',
      cid: '01011014'
    },
    {
      cityCode: '101310301',
      cityname: '三沙市',
      cid: '101310301'
    },
    {
      cityCode: '01011007',
      cityname: '东方市',
      cid: '01011007'
    },
    {
      cityCode: '01011010',
      cityname: '临高县',
      cid: '01011010'
    },
    {
      cityCode: '01011009',
      cityname: '乐东县',
      cid: '01011009'
    },
    {
      cityCode: '01011018',
      cityname: '五指山市',
      cid: '01011018'
    },
    {
      cityCode: '01011002',
      cityname: '保亭县',
      cid: '01011002'
    },
    {
      cityCode: '01011005',
      cityname: '儋州市',
      cid: '01011005'
    },
    {
      cityCode: '01011006',
      cityname: '定安县',
      cid: '01011006'
    },
    {
      cityCode: '01011015',
      cityname: '屯昌县',
      cid: '01011015'
    },
    {
      cityCode: '0101101701',
      cityname: '文昌市',
      cid: '0101101701'
    },
    {
      cityCode: '01011003',
      cityname: '昌江县',
      cid: '01011003'
    },
    {
      cityCode: '0101100802',
      cityname: '美兰区',
      cid: '01011008'
    },
    {
      cityCode: '0101100801',
      cityname: '龙华区',
      cid: '01011008'
    },
    {
      cityCode: '01011008',
      cityname: '海口市',
      cid: '01011008'
    },
    {
      cityCode: '0101100803',
      cityname: '琼山区',
      cid: '01011008'
    },
    {
      cityCode: '0101100804',
      cityname: '秀英区',
      cid: '01011008'
    },
    {
      cityCode: '01011004',
      cityname: '澄迈县',
      cid: '01011004'
    },
    {
      cityCode: '01011013',
      cityname: '琼中县',
      cid: '01011013'
    },
    {
      cityCode: '01011012',
      cityname: '琼海市',
      cid: '01011012'
    },
    {
      cityCode: '01011001',
      cityname: '白沙县',
      cid: '01011001'
    },
    {
      cityCode: '01011011',
      cityname: '陵水县',
      cid: '01011011'
    },
    {
      cityCode: '0101140704',
      cityname: '仙桃市',
      cid: '0101140704'
    },
    {
      cityCode: '0101140803',
      cityname: '茅箭区',
      cid: '01011408'
    },
    {
      cityCode: '0101140806',
      cityname: '张湾区',
      cid: '01011408'
    },
    {
      cityCode: '0101140801',
      cityname: '丹江口市',
      cid: '01011408'
    },
    {
      cityCode: '0101140804',
      cityname: '郧西县',
      cid: '01011408'
    },
    {
      cityCode: '01011408',
      cityname: '十堰市',
      cid: '01011408'
    },
    {
      cityCode: '0101140807',
      cityname: '竹山县',
      cid: '01011408'
    },
    {
      cityCode: '0101140805',
      cityname: '郧阳区',
      cid: '01011408'
    },
    {
      cityCode: '0101140808',
      cityname: '竹溪县',
      cid: '01011408'
    },
    {
      cityCode: '0101140802',
      cityname: '房县',
      cid: '01011408'
    },
    {
      cityCode: '0101141102',
      cityname: '崇阳县',
      cid: '01011411'
    },
    {
      cityCode: '01011411',
      cityname: '咸宁市',
      cid: '01011411'
    },
    {
      cityCode: '0101141106',
      cityname: '咸安区',
      cid: '01011411'
    },
    {
      cityCode: '0101141103',
      cityname: '嘉鱼县',
      cid: '01011411'
    },
    {
      cityCode: '0101141101',
      cityname: '赤壁市',
      cid: '01011411'
    },
    {
      cityCode: '0101141104',
      cityname: '通城县',
      cid: '01011411'
    },
    {
      cityCode: '0101141105',
      cityname: '通山县',
      cid: '01011411'
    },
    {
      cityCode: '0101140703',
      cityname: '天门市',
      cid: '0101140703'
    },
    {
      cityCode: '0101141305',
      cityname: '孝南区',
      cid: '01011413'
    },
    {
      cityCode: '0101141302',
      cityname: '大悟县',
      cid: '01011413'
    },
    {
      cityCode: '0101141306',
      cityname: '应城市',
      cid: '01011413'
    },
    {
      cityCode: '0101141301',
      cityname: '安陆市',
      cid: '01011413'
    },
    {
      cityCode: '0101141304',
      cityname: '孝昌县',
      cid: '01011413'
    },
    {
      cityCode: '0101141307',
      cityname: '云梦县',
      cid: '01011413'
    },
    {
      cityCode: '01011413',
      cityname: '孝感市',
      cid: '01011413'
    },
    {
      cityCode: '0101141303',
      cityname: '汉川市',
      cid: '01011413'
    },
    {
      cityCode: '0101141405',
      cityname: '伍家岗区',
      cid: '01011414'
    },
    {
      cityCode: '0101141403',
      cityname: '点军区',
      cid: '01011414'
    },
    {
      cityCode: '0101141413',
      cityname: '秭归县',
      cid: '01011414'
    },
    {
      cityCode: '0101141410',
      cityname: '夷陵区',
      cid: '01011414'
    },
    {
      cityCode: '0101141408',
      cityname: '兴山县',
      cid: '01011414'
    },
    {
      cityCode: '0101141411',
      cityname: '远安县',
      cid: '01011414'
    },
    {
      cityCode: '0101141404',
      cityname: '五峰县',
      cid: '01011414'
    },
    {
      cityCode: '0101141402',
      cityname: '当阳市',
      cid: '01011414'
    },
    {
      cityCode: '01011414',
      cityname: '宜昌市',
      cid: '01011414'
    },
    {
      cityCode: '0101141409',
      cityname: '宜都市',
      cid: '01011414'
    },
    {
      cityCode: '0101141407',
      cityname: '猇亭区',
      cid: '01011414'
    },
    {
      cityCode: '0101141401',
      cityname: '长阳县',
      cid: '01011414'
    },
    {
      cityCode: '0101141406',
      cityname: '西陵区',
      cid: '01011414'
    },
    {
      cityCode: '0101141412',
      cityname: '枝江市',
      cid: '01011414'
    },
    {
      cityCode: '0101140209',
      cityname: '恩施市',
      cid: '01011402'
    },
    {
      cityCode: '0101140201',
      cityname: '巴东县',
      cid: '01011402'
    },
    {
      cityCode: '01011402',
      cityname: '恩施州',
      cid: '01011402'
    },
    {
      cityCode: '0101140208',
      cityname: '宣恩县',
      cid: '01011402'
    },
    {
      cityCode: '0101140203',
      cityname: '鹤峰县',
      cid: '01011402'
    },
    {
      cityCode: '0101140204',
      cityname: '建始县',
      cid: '01011402'
    },
    {
      cityCode: '0101140207',
      cityname: '咸丰县',
      cid: '01011402'
    },
    {
      cityCode: '0101140206',
      cityname: '利川市',
      cid: '01011402'
    },
    {
      cityCode: '0101140205',
      cityname: '来凤县',
      cid: '01011402'
    },
    {
      cityCode: '0101141009',
      cityname: '江夏区',
      cid: '01011410'
    },
    {
      cityCode: '0101141002',
      cityname: '东西湖区',
      cid: '01011410'
    },
    {
      cityCode: '0101141012',
      cityname: '武昌区',
      cid: '01011410'
    },
    {
      cityCode: '0101141011',
      cityname: '青山区',
      cid: '01011410'
    },
    {
      cityCode: '0101141010',
      cityname: '硚口区',
      cid: '01011410'
    },
    {
      cityCode: '0101141008',
      cityname: '江汉区',
      cid: '01011410'
    },
    {
      cityCode: '0101141013',
      cityname: '新洲区',
      cid: '01011410'
    },
    {
      cityCode: '0101141007',
      cityname: '江岸区',
      cid: '01011410'
    },
    {
      cityCode: '0101141001',
      cityname: '蔡甸区',
      cid: '01011410'
    },
    {
      cityCode: '0101141006',
      cityname: '黄陂区',
      cid: '01011410'
    },
    {
      cityCode: '0101141005',
      cityname: '洪山区',
      cid: '01011410'
    },
    {
      cityCode: '0101141004',
      cityname: '汉阳区',
      cid: '01011410'
    },
    {
      cityCode: '0101141003',
      cityname: '汉南区',
      cid: '01011410'
    },
    {
      cityCode: '01011410',
      cityname: '武汉市',
      cid: '01011410'
    },
    {
      cityCode: '0101140701',
      cityname: '潜江市',
      cid: '0101140701'
    },
    {
      cityCode: '0101140702',
      cityname: '神农架',
      cid: '0101140702'
    },
    {
      cityCode: '01011406',
      cityname: '荆州市',
      cid: '01011406'
    },
    {
      cityCode: '0101140609',
      cityname: '荆州区',
      cid: '01011406'
    },
    {
      cityCode: '0101140604',
      cityname: '江陵县',
      cid: '01011406'
    },
    {
      cityCode: '0101140606',
      cityname: '沙市区',
      cid: '01011406'
    },
    {
      cityCode: '0101140603',
      cityname: '监利市',
      cid: '01011406'
    },
    {
      cityCode: '0101140607',
      cityname: '石首市',
      cid: '01011406'
    },
    {
      cityCode: '0101140602',
      cityname: '洪湖市',
      cid: '01011406'
    },
    {
      cityCode: '0101140608',
      cityname: '松滋市',
      cid: '01011406'
    },
    {
      cityCode: '0101140601',
      cityname: '公安县',
      cid: '01011406'
    },
    {
      cityCode: '0101140503',
      cityname: '京山市',
      cid: '01011405'
    },
    {
      cityCode: '0101140504',
      cityname: '沙洋县',
      cid: '01011405'
    },
    {
      cityCode: '0101140505',
      cityname: '钟祥市',
      cid: '01011405'
    },
    {
      cityCode: '0101140502',
      cityname: '掇刀区',
      cid: '01011405'
    },
    {
      cityCode: '01011405',
      cityname: '荆门市',
      cid: '01011405'
    },
    {
      cityCode: '0101140501',
      cityname: '东宝区',
      cid: '01011405'
    },
    {
      cityCode: '0101141205',
      cityname: '南漳县',
      cid: '01011412'
    },
    {
      cityCode: '0101141201',
      cityname: '保康县',
      cid: '01011412'
    },
    {
      cityCode: '0101141206',
      cityname: '襄城区',
      cid: '01011412'
    },
    {
      cityCode: '01011412',
      cityname: '襄阳市',
      cid: '01011412'
    },
    {
      cityCode: '0101141203',
      cityname: '谷城县',
      cid: '01011412'
    },
    {
      cityCode: '0101141202',
      cityname: '樊城区',
      cid: '01011412'
    },
    {
      cityCode: '0101141208',
      cityname: '宜城市',
      cid: '01011412'
    },
    {
      cityCode: '0101141209',
      cityname: '枣阳市',
      cid: '01011412'
    },
    {
      cityCode: '0101141210',
      cityname: '襄州区',
      cid: '01011412'
    },
    {
      cityCode: '0101141204',
      cityname: '老河口市',
      cid: '01011412'
    },
    {
      cityCode: '01011401',
      cityname: '鄂州市',
      cid: '01011401'
    },
    {
      cityCode: '0101140102',
      cityname: '华容区',
      cid: '01011401'
    },
    {
      cityCode: '0101140101',
      cityname: '鄂城区',
      cid: '01011401'
    },
    {
      cityCode: '0101140103',
      cityname: '梁子湖区',
      cid: '01011401'
    },
    {
      cityCode: '0101140901',
      cityname: '广水市',
      cid: '01011409'
    },
    {
      cityCode: '0101140903',
      cityname: '随县',
      cid: '01011409'
    },
    {
      cityCode: '01011409',
      cityname: '随州市',
      cid: '01011409'
    },
    {
      cityCode: '0101140902',
      cityname: '曾都区',
      cid: '01011409'
    },
    {
      cityCode: '0101140307',
      cityname: '团风县',
      cid: '01011403'
    },
    {
      cityCode: '0101140306',
      cityname: '蕲春县',
      cid: '01011403'
    },
    {
      cityCode: '0101140309',
      cityname: '浠水县',
      cid: '01011403'
    },
    {
      cityCode: '0101140303',
      cityname: '黄州区',
      cid: '01011403'
    },
    {
      cityCode: '0101140301',
      cityname: '红安县',
      cid: '01011403'
    },
    {
      cityCode: '0101140304',
      cityname: '罗田县',
      cid: '01011403'
    },
    {
      cityCode: '0101140305',
      cityname: '麻城市',
      cid: '01011403'
    },
    {
      cityCode: '0101140310',
      cityname: '英山县',
      cid: '01011403'
    },
    {
      cityCode: '01011403',
      cityname: '黄冈市',
      cid: '01011403'
    },
    {
      cityCode: '0101140302',
      cityname: '黄梅县',
      cid: '01011403'
    },
    {
      cityCode: '0101140308',
      cityname: '武穴市',
      cid: '01011403'
    },
    {
      cityCode: '0101140404',
      cityname: '西塞山区',
      cid: '01011404'
    },
    {
      cityCode: '0101140402',
      cityname: '黄石港区',
      cid: '01011404'
    },
    {
      cityCode: '0101140403',
      cityname: '铁山区',
      cid: '01011404'
    },
    {
      cityCode: '0101140401',
      cityname: '大冶市',
      cid: '01011404'
    },
    {
      cityCode: '0101140406',
      cityname: '阳新县',
      cid: '01011404'
    },
    {
      cityCode: '0101140405',
      cityname: '下陆区',
      cid: '01011404'
    },
    {
      cityCode: '01011404',
      cityname: '黄石市',
      cid: '01011404'
    },
    {
      cityCode: '0101150603',
      cityname: '娄星区',
      cid: '01011506'
    },
    {
      cityCode: '0101150604',
      cityname: '双峰县',
      cid: '01011506'
    },
    {
      cityCode: '0101150605',
      cityname: '新化县',
      cid: '01011506'
    },
    {
      cityCode: '0101150602',
      cityname: '涟源市',
      cid: '01011506'
    },
    {
      cityCode: '01011506',
      cityname: '娄底市',
      cid: '01011506'
    },
    {
      cityCode: '0101150601',
      cityname: '冷水江市',
      cid: '01011506'
    },
    {
      cityCode: '0101151206',
      cityname: '湘阴县',
      cid: '01011512'
    },
    {
      cityCode: '0101151201',
      cityname: '华容县',
      cid: '01011512'
    },
    {
      cityCode: '0101151209',
      cityname: '云溪区',
      cid: '01011512'
    },
    {
      cityCode: '0101151203',
      cityname: '临湘市',
      cid: '01011512'
    },
    {
      cityCode: '0101151207',
      cityname: '岳阳楼区',
      cid: '01011512'
    },
    {
      cityCode: '0101151205',
      cityname: '平江县',
      cid: '01011512'
    },
    {
      cityCode: '0101151202',
      cityname: '君山区',
      cid: '01011512'
    },
    {
      cityCode: '01011512',
      cityname: '岳阳市',
      cid: '01011512'
    },
    {
      cityCode: '0101151204',
      cityname: '汨罗市',
      cid: '01011512'
    },
    {
      cityCode: '0101151211',
      cityname: '岳阳县',
      cid: '01011512'
    },
    {
      cityCode: '0101150105',
      cityname: '澧县',
      cid: '01011501'
    },
    {
      cityCode: '0101150101',
      cityname: '安乡县',
      cid: '01011501'
    },
    {
      cityCode: '0101150103',
      cityname: '汉寿县',
      cid: '01011501'
    },
    {
      cityCode: '0101150109',
      cityname: '武陵区',
      cid: '01011501'
    },
    {
      cityCode: '0101150107',
      cityname: '石门县',
      cid: '01011501'
    },
    {
      cityCode: '0101150106',
      cityname: '临澧县',
      cid: '01011501'
    },
    {
      cityCode: '0101150102',
      cityname: '鼎城区',
      cid: '01011501'
    },
    {
      cityCode: '0101150108',
      cityname: '桃源县',
      cid: '01011501'
    },
    {
      cityCode: '0101150104',
      cityname: '津市市',
      cid: '01011501'
    },
    {
      cityCode: '01011501',
      cityname: '常德市',
      cid: '01011501'
    },
    {
      cityCode: '0101151301',
      cityname: '慈利县',
      cid: '01011513'
    },
    {
      cityCode: '0101151304',
      cityname: '永定区',
      cid: '01011513'
    },
    {
      cityCode: '0101151302',
      cityname: '桑植县',
      cid: '01011513'
    },
    {
      cityCode: '0101151303',
      cityname: '武陵源区',
      cid: '01011513'
    },
    {
      cityCode: '01011513',
      cityname: '张家界市',
      cid: '01011513'
    },
    {
      cityCode: '0101150502',
      cityname: '鹤城区',
      cid: '01011505'
    },
    {
      cityCode: '0101150512',
      cityname: '中方县',
      cid: '01011505'
    },
    {
      cityCode: '0101150507',
      cityname: '通道县',
      cid: '01011505'
    },
    {
      cityCode: '0101150504',
      cityname: '会同县',
      cid: '01011505'
    },
    {
      cityCode: '0101150511',
      cityname: '芷江县',
      cid: '01011505'
    },
    {
      cityCode: '0101150508',
      cityname: '新晃县',
      cid: '01011505'
    },
    {
      cityCode: '0101150510',
      cityname: '沅陵县',
      cid: '01011505'
    },
    {
      cityCode: '01011505',
      cityname: '怀化市',
      cid: '01011505'
    },
    {
      cityCode: '0101150506',
      cityname: '麻阳县',
      cid: '01011505'
    },
    {
      cityCode: '0101150509',
      cityname: '溆浦县',
      cid: '01011505'
    },
    {
      cityCode: '0101150503',
      cityname: '洪江市',
      cid: '01011505'
    },
    {
      cityCode: '0101150501',
      cityname: '辰溪县',
      cid: '01011505'
    },
    {
      cityCode: '0101150505',
      cityname: '靖州县',
      cid: '01011505'
    },
    {
      cityCode: '01011514',
      cityname: '株洲市',
      cid: '01011514'
    },
    {
      cityCode: '0101151406',
      cityname: '天元区',
      cid: '01011514'
    },
    {
      cityCode: '0101151408',
      cityname: '攸县',
      cid: '01011514'
    },
    {
      cityCode: '0101151405',
      cityname: '石峰区',
      cid: '01011514'
    },
    {
      cityCode: '0101151404',
      cityname: '芦淞区',
      cid: '01011514'
    },
    {
      cityCode: '0101151401',
      cityname: '茶陵县',
      cid: '01011514'
    },
    {
      cityCode: '0101151402',
      cityname: '荷塘区',
      cid: '01011514'
    },
    {
      cityCode: '0101151407',
      cityname: '炎陵县',
      cid: '01011514'
    },
    {
      cityCode: '0101151403',
      cityname: '醴陵市',
      cid: '01011514'
    },
    {
      cityCode: '0101151409',
      cityname: '渌口区',
      cid: '01011514'
    },
    {
      cityCode: '0101151101',
      cityname: '道县',
      cid: '01011511'
    },
    {
      cityCode: '0101151102',
      cityname: '东安县',
      cid: '01011511'
    },
    {
      cityCode: '0101151104',
      cityname: '江永县',
      cid: '01011511'
    },
    {
      cityCode: '0101151108',
      cityname: '宁远县',
      cid: '01011511'
    },
    {
      cityCode: '0101151109',
      cityname: '祁阳市',
      cid: '01011511'
    },
    {
      cityCode: '0101151111',
      cityname: '新田县',
      cid: '01011511'
    },
    {
      cityCode: '0101151107',
      cityname: '零陵区',
      cid: '01011511'
    },
    {
      cityCode: '0101151103',
      cityname: '江华县',
      cid: '01011511'
    },
    {
      cityCode: '0101151106',
      cityname: '冷水滩区',
      cid: '01011511'
    },
    {
      cityCode: '0101151105',
      cityname: '蓝山县',
      cid: '01011511'
    },
    {
      cityCode: '0101151110',
      cityname: '双牌县',
      cid: '01011511'
    },
    {
      cityCode: '01011511',
      cityname: '永州市',
      cid: '01011511'
    },
    {
      cityCode: '0101150803',
      cityname: '湘乡市',
      cid: '01011508'
    },
    {
      cityCode: '0101150801',
      cityname: '韶山市',
      cid: '01011508'
    },
    {
      cityCode: '0101150805',
      cityname: '岳塘区',
      cid: '01011508'
    },
    {
      cityCode: '0101150804',
      cityname: '雨湖区',
      cid: '01011508'
    },
    {
      cityCode: '01011508',
      cityname: '湘潭市',
      cid: '01011508'
    },
    {
      cityCode: '0101150802',
      cityname: '湘潭县',
      cid: '01011508'
    },
    {
      cityCode: '0101150905',
      cityname: '吉首市',
      cid: '01011509'
    },
    {
      cityCode: '0101150901',
      cityname: '保靖县',
      cid: '01011509'
    },
    {
      cityCode: '0101150904',
      cityname: '花垣县',
      cid: '01011509'
    },
    {
      cityCode: '0101150902',
      cityname: '凤凰县',
      cid: '01011509'
    },
    {
      cityCode: '0101150903',
      cityname: '古丈县',
      cid: '01011509'
    },
    {
      cityCode: '0101150906',
      cityname: '龙山县',
      cid: '01011509'
    },
    {
      cityCode: '01011509',
      cityname: '湘西州',
      cid: '01011509'
    },
    {
      cityCode: '0101150908',
      cityname: '永顺县',
      cid: '01011509'
    },
    {
      cityCode: '0101150907',
      cityname: '泸溪县',
      cid: '01011509'
    },
    {
      cityCode: '01011510',
      cityname: '益阳市',
      cid: '01011510'
    },
    {
      cityCode: '0101151005',
      cityname: '沅江市',
      cid: '01011510'
    },
    {
      cityCode: '0101151004',
      cityname: '桃江县',
      cid: '01011510'
    },
    {
      cityCode: '0101151001',
      cityname: '安化县',
      cid: '01011510'
    },
    {
      cityCode: '0101151006',
      cityname: '资阳区',
      cid: '01011510'
    },
    {
      cityCode: '0101151002',
      cityname: '赫山区',
      cid: '01011510'
    },
    {
      cityCode: '0101151003',
      cityname: '南县',
      cid: '01011510'
    },
    {
      cityCode: '0101150412',
      cityname: '珠晖区',
      cid: '01011504'
    },
    {
      cityCode: '01011504',
      cityname: '衡阳市',
      cid: '01011504'
    },
    {
      cityCode: '0101150404',
      cityname: '衡山县',
      cid: '01011504'
    },
    {
      cityCode: '0101150411',
      cityname: '蒸湘区',
      cid: '01011504'
    },
    {
      cityCode: '0101150410',
      cityname: '雁峰区',
      cid: '01011504'
    },
    {
      cityCode: '0101150409',
      cityname: '石鼓区',
      cid: '01011504'
    },
    {
      cityCode: '0101150407',
      cityname: '南岳区',
      cid: '01011504'
    },
    {
      cityCode: '0101150401',
      cityname: '常宁市',
      cid: '01011504'
    },
    {
      cityCode: '0101150406',
      cityname: '耒阳市',
      cid: '01011504'
    },
    {
      cityCode: '0101150403',
      cityname: '衡南县',
      cid: '01011504'
    },
    {
      cityCode: '0101150402',
      cityname: '衡东县',
      cid: '01011504'
    },
    {
      cityCode: '0101150413',
      cityname: '衡阳县',
      cid: '01011504'
    },
    {
      cityCode: '0101150408',
      cityname: '祁东县',
      cid: '01011504'
    },
    {
      cityCode: '0101150711',
      cityname: '新宁县',
      cid: '01011507'
    },
    {
      cityCode: '0101150704',
      cityname: '洞口县',
      cid: '01011507'
    },
    {
      cityCode: '0101150709',
      cityname: '绥宁县',
      cid: '01011507'
    },
    {
      cityCode: '0101150705',
      cityname: '隆回县',
      cid: '01011507'
    },
    {
      cityCode: '0101150710',
      cityname: '武冈市',
      cid: '01011507'
    },
    {
      cityCode: '0101150712',
      cityname: '新邵县',
      cid: '01011507'
    },
    {
      cityCode: '0101150702',
      cityname: '城步县',
      cid: '01011507'
    },
    {
      cityCode: '0101150713',
      cityname: '邵阳县',
      cid: '01011507'
    },
    {
      cityCode: '0101150706',
      cityname: '邵东市',
      cid: '01011507'
    },
    {
      cityCode: '01011507',
      cityname: '邵阳市',
      cid: '01011507'
    },
    {
      cityCode: '0101150708',
      cityname: '双清区',
      cid: '01011507'
    },
    {
      cityCode: '0101150703',
      cityname: '大祥区',
      cid: '01011507'
    },
    {
      cityCode: '0101150701',
      cityname: '北塔区',
      cid: '01011507'
    },
    {
      cityCode: '0101150308',
      cityname: '苏仙区',
      cid: '01011503'
    },
    {
      cityCode: '0101150301',
      cityname: '安仁县',
      cid: '01011503'
    },
    {
      cityCode: '0101150310',
      cityname: '永兴县',
      cid: '01011503'
    },
    {
      cityCode: '0101150306',
      cityname: '临武县',
      cid: '01011503'
    },
    {
      cityCode: '0101150307',
      cityname: '汝城县',
      cid: '01011503'
    },
    {
      cityCode: '0101150302',
      cityname: '北湖区',
      cid: '01011503'
    },
    {
      cityCode: '01011503',
      cityname: '郴州市',
      cid: '01011503'
    },
    {
      cityCode: '0101150304',
      cityname: '桂阳县',
      cid: '01011503'
    },
    {
      cityCode: '0101150305',
      cityname: '嘉禾县',
      cid: '01011503'
    },
    {
      cityCode: '0101150303',
      cityname: '桂东县',
      cid: '01011503'
    },
    {
      cityCode: '0101150311',
      cityname: '资兴市',
      cid: '01011503'
    },
    {
      cityCode: '0101150309',
      cityname: '宜章县',
      cid: '01011503'
    },
    {
      cityCode: '0101150211',
      cityname: '长沙县',
      cid: '01011502'
    },
    {
      cityCode: '0101150209',
      cityname: '岳麓区',
      cid: '01011502'
    },
    {
      cityCode: '0101150205',
      cityname: '宁乡市',
      cid: '01011502'
    },
    {
      cityCode: '0101150208',
      cityname: '雨花区',
      cid: '01011502'
    },
    {
      cityCode: '0101150206',
      cityname: '天心区',
      cid: '01011502'
    },
    {
      cityCode: '0101150207',
      cityname: '望城区',
      cid: '01011502'
    },
    {
      cityCode: '0101150203',
      cityname: '开福区',
      cid: '01011502'
    },
    {
      cityCode: '0101150202',
      cityname: '芙蓉区',
      cid: '01011502'
    },
    {
      cityCode: '0101150204',
      cityname: '浏阳市',
      cid: '01011502'
    },
    {
      cityCode: '01011502',
      cityname: '长沙市',
      cid: '01011502'
    },
    {
      cityCode: '0101150210',
      cityname: '马坡岭街道',
      cid: '01011502'
    },
    {
      cityCode: '01010301_5',
      cityname: '风顺堂区',
      cid: '01010301'
    },
    {
      cityCode: '01010301_4',
      cityname: '望德堂区',
      cid: '01010301'
    },
    {
      cityCode: '01010301_3',
      cityname: '大堂区',
      cid: '01010301'
    },
    {
      cityCode: '01010301_1',
      cityname: '花地玛堂区',
      cid: '01010301'
    },
    {
      cityCode: '01010301_7',
      cityname: '圣方济各堂区',
      cid: '01010301'
    },
    {
      cityCode: '01010301_6',
      cityname: '嘉模堂区',
      cid: '01010301'
    },
    {
      cityCode: '0101060808',
      cityname: '永靖县',
      cid: '01010608'
    },
    {
      cityCode: '0101060802',
      cityname: '广河县',
      cid: '01010608'
    },
    {
      cityCode: '0101060805',
      cityname: '康乐县',
      cid: '01010608'
    },
    {
      cityCode: '0101060803',
      cityname: '和政县',
      cid: '01010608'
    },
    {
      cityCode: '0101060810',
      cityname: '临夏县',
      cid: '01010608'
    },
    {
      cityCode: '01010608',
      cityname: '临夏州',
      cid: '01010608'
    },
    {
      cityCode: '0101060809',
      cityname: '临夏市',
      cid: '01010608'
    },
    {
      cityCode: '0101060804',
      cityname: '积石山县',
      cid: '01010608'
    },
    {
      cityCode: '0101060801',
      cityname: '东乡县',
      cid: '01010608'
    },
    {
      cityCode: '0101060706',
      cityname: '西固区',
      cid: '01010607'
    },
    {
      cityCode: '0101060701',
      cityname: '安宁区',
      cid: '01010607'
    },
    {
      cityCode: '0101060705',
      cityname: '七里河区',
      cid: '01010607'
    },
    {
      cityCode: '0101060704',
      cityname: '红古区',
      cid: '01010607'
    },
    {
      cityCode: '0101060708',
      cityname: '榆中县',
      cid: '01010607'
    },
    {
      cityCode: '0101060703',
      cityname: '皋兰县',
      cid: '01010607'
    },
    {
      cityCode: '0101060709',
      cityname: '城关区',
      cid: '01010607'
    },
    {
      cityCode: '0101060707',
      cityname: '永登县',
      cid: '01010607'
    },
    {
      cityCode: '01010607',
      cityname: '兰州市',
      cid: '01010607'
    },
    {
      cityCode: '01010604',
      cityname: '嘉峪关市',
      cid: '01010604'
    },
    {
      cityCode: '0101061204',
      cityname: '秦州区',
      cid: '01010612'
    },
    {
      cityCode: '0101061203',
      cityname: '秦安县',
      cid: '01010612'
    },
    {
      cityCode: '0101061206',
      cityname: '武山县',
      cid: '01010612'
    },
    {
      cityCode: '0101061202',
      cityname: '麦积区',
      cid: '01010612'
    },
    {
      cityCode: '0101061201',
      cityname: '甘谷县',
      cid: '01010612'
    },
    {
      cityCode: '0101061205',
      cityname: '清水县',
      cid: '01010612'
    },
    {
      cityCode: '01010612',
      cityname: '天水市',
      cid: '01010612'
    },
    {
      cityCode: '0101061207',
      cityname: '张家川县',
      cid: '01010612'
    },
    {
      cityCode: '0101060207',
      cityname: '漳县',
      cid: '01010602'
    },
    {
      cityCode: '0101060203',
      cityname: '陇西县',
      cid: '01010602'
    },
    {
      cityCode: '0101060205',
      cityname: '通渭县',
      cid: '01010602'
    },
    {
      cityCode: '0101060202',
      cityname: '临洮县',
      cid: '01010602'
    },
    {
      cityCode: '0101060201',
      cityname: '安定区',
      cid: '01010602'
    },
    {
      cityCode: '0101060206',
      cityname: '渭源县',
      cid: '01010602'
    },
    {
      cityCode: '0101060204',
      cityname: '岷县',
      cid: '01010602'
    },
    {
      cityCode: '01010602',
      cityname: '定西市',
      cid: '01010602'
    },
    {
      cityCode: '01010610',
      cityname: '平凉市',
      cid: '01010610'
    },
    {
      cityCode: '0101061002',
      cityname: '华亭市',
      cid: '01010610'
    },
    {
      cityCode: '0101061005',
      cityname: '崆峒区',
      cid: '01010610'
    },
    {
      cityCode: '0101061004',
      cityname: '静宁县',
      cid: '01010610'
    },
    {
      cityCode: '0101061007',
      cityname: '庄浪县',
      cid: '01010610'
    },
    {
      cityCode: '0101061006',
      cityname: '灵台县',
      cid: '01010610'
    },
    {
      cityCode: '0101061001',
      cityname: '崇信县',
      cid: '01010610'
    },
    {
      cityCode: '0101061003',
      cityname: '泾川县',
      cid: '01010610'
    },
    {
      cityCode: '0101061106',
      cityname: '西峰区',
      cid: '01010611'
    },
    {
      cityCode: '0101061107',
      cityname: '镇原县',
      cid: '01010611'
    },
    {
      cityCode: '0101061105',
      cityname: '庆城县',
      cid: '01010611'
    },
    {
      cityCode: '0101061102',
      cityname: '华池县',
      cid: '01010611'
    },
    {
      cityCode: '0101061104',
      cityname: '宁县',
      cid: '01010611'
    },
    {
      cityCode: '01010611',
      cityname: '庆阳市',
      cid: '01010611'
    },
    {
      cityCode: '0101061101',
      cityname: '合水县',
      cid: '01010611'
    },
    {
      cityCode: '0101061103',
      cityname: '环县',
      cid: '01010611'
    },
    {
      cityCode: '0101061108',
      cityname: '正宁县',
      cid: '01010611'
    },
    {
      cityCode: '0101061401',
      cityname: '甘州区',
      cid: '01010614'
    },
    {
      cityCode: '0101061402',
      cityname: '高台县',
      cid: '01010614'
    },
    {
      cityCode: '0101061406',
      cityname: '肃南县',
      cid: '01010614'
    },
    {
      cityCode: '01010614',
      cityname: '张掖市',
      cid: '01010614'
    },
    {
      cityCode: '0101061405',
      cityname: '山丹县',
      cid: '01010614'
    },
    {
      cityCode: '0101061403',
      cityname: '临泽县',
      cid: '01010614'
    },
    {
      cityCode: '0101061404',
      cityname: '民乐县',
      cid: '01010614'
    },
    {
      cityCode: '0101061302',
      cityname: '凉州区',
      cid: '01010613'
    },
    {
      cityCode: '0101061304',
      cityname: '天祝县',
      cid: '01010613'
    },
    {
      cityCode: '0101061301',
      cityname: '古浪县',
      cid: '01010613'
    },
    {
      cityCode: '01010613',
      cityname: '武威市',
      cid: '01010613'
    },
    {
      cityCode: '0101061303',
      cityname: '民勤县',
      cid: '01010613'
    },
    {
      cityCode: '0101060307',
      cityname: '舟曲县',
      cid: '01010603'
    },
    {
      cityCode: '0101060303',
      cityname: '临潭县',
      cid: '01010603'
    },
    {
      cityCode: '0101060302',
      cityname: '合作市',
      cid: '01010603'
    },
    {
      cityCode: '0101060301',
      cityname: '迭部县',
      cid: '01010603'
    },
    {
      cityCode: '0101060305',
      cityname: '玛曲县',
      cid: '01010603'
    },
    {
      cityCode: '01010603',
      cityname: '甘南州',
      cid: '01010603'
    },
    {
      cityCode: '0101060308',
      cityname: '卓尼县',
      cid: '01010603'
    },
    {
      cityCode: '0101060306',
      cityname: '夏河县',
      cid: '01010603'
    },
    {
      cityCode: '0101060304',
      cityname: '碌曲县',
      cid: '01010603'
    },
    {
      cityCode: '0101060102',
      cityname: '会宁县',
      cid: '01010601'
    },
    {
      cityCode: '01010601',
      cityname: '白银市',
      cid: '01010601'
    },
    {
      cityCode: '0101060105',
      cityname: '平川区',
      cid: '01010601'
    },
    {
      cityCode: '0101060103',
      cityname: '景泰县',
      cid: '01010601'
    },
    {
      cityCode: '0101060104',
      cityname: '靖远县',
      cid: '01010601'
    },
    {
      cityCode: '0101060106',
      cityname: '白银区',
      cid: '01010601'
    },
    {
      cityCode: '0101060605',
      cityname: '肃北县',
      cid: '01010606'
    },
    {
      cityCode: '0101060606',
      cityname: '肃州区',
      cid: '01010606'
    },
    {
      cityCode: '0101060604',
      cityname: '金塔县',
      cid: '01010606'
    },
    {
      cityCode: '0101060603',
      cityname: '瓜州县',
      cid: '01010606'
    },
    {
      cityCode: '01010606',
      cityname: '酒泉市',
      cid: '01010606'
    },
    {
      cityCode: '0101060602',
      cityname: '敦煌市',
      cid: '01010606'
    },
    {
      cityCode: '0101060607',
      cityname: '玉门市',
      cid: '01010606'
    },
    {
      cityCode: '0101060601',
      cityname: '阿克塞县',
      cid: '01010606'
    },
    {
      cityCode: '0101060502',
      cityname: '永昌县',
      cid: '01010605'
    },
    {
      cityCode: '01010605',
      cityname: '金昌市',
      cid: '01010605'
    },
    {
      cityCode: '0101060501',
      cityname: '金川区',
      cid: '01010605'
    },
    {
      cityCode: '0101060907',
      cityname: '文县',
      cid: '01010609'
    },
    {
      cityCode: '0101060904',
      cityname: '康县',
      cid: '01010609'
    },
    {
      cityCode: '01010609',
      cityname: '陇南市',
      cid: '01010609'
    },
    {
      cityCode: '0101060906',
      cityname: '两当县',
      cid: '01010609'
    },
    {
      cityCode: '0101060903',
      cityname: '徽县',
      cid: '01010609'
    },
    {
      cityCode: '0101060901',
      cityname: '成县',
      cid: '01010609'
    },
    {
      cityCode: '0101060908',
      cityname: '武都区',
      cid: '01010609'
    },
    {
      cityCode: '0101060905',
      cityname: '礼县',
      cid: '01010609'
    },
    {
      cityCode: '0101060909',
      cityname: '西和县',
      cid: '01010609'
    },
    {
      cityCode: '0101060902',
      cityname: '宕昌县',
      cid: '01010609'
    },
    {
      cityCode: '0101050708',
      cityname: '三元区',
      cid: '01010507'
    },
    {
      cityCode: '0101050706',
      cityname: '宁化县',
      cid: '01010507'
    },
    {
      cityCode: '0101050704',
      cityname: '梅列区',
      cid: '01010507'
    },
    {
      cityCode: '0101050712',
      cityname: '尤溪县',
      cid: '01010507'
    },
    {
      cityCode: '0101050707',
      cityname: '清流县',
      cid: '01010507'
    },
    {
      cityCode: '0101050711',
      cityname: '永安市',
      cid: '01010507'
    },
    {
      cityCode: '0101050709',
      cityname: '沙县区',
      cid: '01010507'
    },
    {
      cityCode: '0101050710',
      cityname: '泰宁县',
      cid: '01010507'
    },
    {
      cityCode: '0101050702',
      cityname: '建宁县',
      cid: '01010507'
    },
    {
      cityCode: '0101050703',
      cityname: '将乐县',
      cid: '01010507'
    },
    {
      cityCode: '0101050705',
      cityname: '明溪县',
      cid: '01010507'
    },
    {
      cityCode: '0101050701',
      cityname: '大田县',
      cid: '01010507'
    },
    {
      cityCode: '01010507',
      cityname: '三明市',
      cid: '01010507'
    },
    {
      cityCode: '0101050306',
      cityname: '顺昌县',
      cid: '01010503'
    },
    {
      cityCode: '0101050303',
      cityname: '建阳区',
      cid: '01010503'
    },
    {
      cityCode: '0101050302',
      cityname: '建瓯市',
      cid: '01010503'
    },
    {
      cityCode: '0101050308',
      cityname: '武夷山市',
      cid: '01010503'
    },
    {
      cityCode: '0101050307',
      cityname: '松溪县',
      cid: '01010503'
    },
    {
      cityCode: '0101050304',
      cityname: '浦城县',
      cid: '01010503'
    },
    {
      cityCode: '01010503',
      cityname: '南平市',
      cid: '01010503'
    },
    {
      cityCode: '0101050309',
      cityname: '延平区',
      cid: '01010503'
    },
    {
      cityCode: '0101050305',
      cityname: '邵武市',
      cid: '01010503'
    },
    {
      cityCode: '0101050310',
      cityname: '政和县',
      cid: '01010503'
    },
    {
      cityCode: '0101050301',
      cityname: '光泽县',
      cid: '01010503'
    },
    {
      cityCode: '0101050802',
      cityname: '湖里区',
      cid: '01010508'
    },
    {
      cityCode: '0101050801',
      cityname: '海沧区',
      cid: '01010508'
    },
    {
      cityCode: '0101050805',
      cityname: '同安区',
      cid: '01010508'
    },
    {
      cityCode: '0101050806',
      cityname: '翔安区',
      cid: '01010508'
    },
    {
      cityCode: '01010508',
      cityname: '厦门市',
      cid: '01010508'
    },
    {
      cityCode: '0101050804',
      cityname: '思明区',
      cid: '01010508'
    },
    {
      cityCode: '0101050803',
      cityname: '集美区',
      cid: '01010508'
    },
    {
      cityCode: '0101050402',
      cityname: '福鼎市',
      cid: '01010504'
    },
    {
      cityCode: '0101050406',
      cityname: '寿宁县',
      cid: '01010504'
    },
    {
      cityCode: '0101050404',
      cityname: '蕉城区',
      cid: '01010504'
    },
    {
      cityCode: '0101050405',
      cityname: '屏南县',
      cid: '01010504'
    },
    {
      cityCode: '0101050409',
      cityname: '周宁县',
      cid: '01010504'
    },
    {
      cityCode: '01010504',
      cityname: '宁德市',
      cid: '01010504'
    },
    {
      cityCode: '0101050407',
      cityname: '霞浦县',
      cid: '01010504'
    },
    {
      cityCode: '0101050403',
      cityname: '古田县',
      cid: '01010504'
    },
    {
      cityCode: '0101050408',
      cityname: '柘荣县',
      cid: '01010504'
    },
    {
      cityCode: '0101050401',
      cityname: '福安市',
      cid: '01010504'
    },
    {
      cityCode: '0101050606',
      cityname: '晋江市',
      cid: '01010506'
    },
    {
      cityCode: '0101050604',
      cityname: '惠安县',
      cid: '01010506'
    },
    {
      cityCode: '0101050610',
      cityname: '泉港区',
      cid: '01010506'
    },
    {
      cityCode: '0101050608',
      cityname: '洛江区',
      cid: '01010506'
    },
    {
      cityCode: '0101050613',
      cityname: '崇武镇',
      cid: '01010506'
    },
    {
      cityCode: '0101050607',
      cityname: '鲤城区',
      cid: '01010506'
    },
    {
      cityCode: '0101050605',
      cityname: '金门县',
      cid: '01010506'
    },
    {
      cityCode: '0101050601',
      cityname: '安溪县',
      cid: '01010506'
    },
    {
      cityCode: '0101050603',
      cityname: '丰泽区',
      cid: '01010506'
    },
    {
      cityCode: '0101050611',
      cityname: '石狮市',
      cid: '01010506'
    },
    {
      cityCode: '0101050609',
      cityname: '南安市',
      cid: '01010506'
    },
    {
      cityCode: '0101050602',
      cityname: '德化县',
      cid: '01010506'
    },
    {
      cityCode: '0101050612',
      cityname: '永春县',
      cid: '01010506'
    },
    {
      cityCode: '01010506',
      cityname: '泉州市',
      cid: '01010506'
    },
    {
      cityCode: '0101050902',
      cityname: '东山县',
      cid: '01010509'
    },
    {
      cityCode: '01010509',
      cityname: '漳州市',
      cid: '01010509'
    },
    {
      cityCode: '0101050904',
      cityname: '龙海市',
      cid: '01010509'
    },
    {
      cityCode: '0101050903',
      cityname: '华安县',
      cid: '01010509'
    },
    {
      cityCode: '0101050901',
      cityname: '长泰县',
      cid: '01010509'
    },
    {
      cityCode: '0101050910',
      cityname: '漳浦县',
      cid: '01010509'
    },
    {
      cityCode: '0101050911',
      cityname: '诏安县',
      cid: '01010509'
    },
    {
      cityCode: '0101050908',
      cityname: '芗城区',
      cid: '01010509'
    },
    {
      cityCode: '0101050905',
      cityname: '龙文区',
      cid: '01010509'
    },
    {
      cityCode: '0101050906',
      cityname: '南靖县',
      cid: '01010509'
    },
    {
      cityCode: '0101050907',
      cityname: '平和县',
      cid: '01010509'
    },
    {
      cityCode: '0101050909',
      cityname: '云霄县',
      cid: '01010509'
    },
    {
      cityCode: '0101050101',
      cityname: '仓山区',
      cid: '01010501'
    },
    {
      cityCode: '0101050111',
      cityname: '平潭县',
      cid: '01010501'
    },
    {
      cityCode: '0101050102',
      cityname: '长乐区',
      cid: '01010501'
    },
    {
      cityCode: '0101050113',
      cityname: '永泰县',
      cid: '01010501'
    },
    {
      cityCode: '0101050107',
      cityname: '罗源县',
      cid: '01010501'
    },
    {
      cityCode: '0101050103',
      cityname: '福清市',
      cid: '01010501'
    },
    {
      cityCode: '0101050109',
      cityname: '闽侯县',
      cid: '01010501'
    },
    {
      cityCode: '0101050110',
      cityname: '闽清县',
      cid: '01010501'
    },
    {
      cityCode: '0101050112',
      cityname: '台江区',
      cid: '01010501'
    },
    {
      cityCode: '0101050108',
      cityname: '马尾区',
      cid: '01010501'
    },
    {
      cityCode: '0101050106',
      cityname: '连江县',
      cid: '01010501'
    },
    {
      cityCode: '0101050105',
      cityname: '晋安区',
      cid: '01010501'
    },
    {
      cityCode: '01010501',
      cityname: '福州市',
      cid: '01010501'
    },
    {
      cityCode: '0101050104',
      cityname: '鼓楼区',
      cid: '01010501'
    },
    {
      cityCode: '0101050502',
      cityname: '涵江区',
      cid: '01010505'
    },
    {
      cityCode: '0101050503',
      cityname: '荔城区',
      cid: '01010505'
    },
    {
      cityCode: '0101050504',
      cityname: '仙游县',
      cid: '01010505'
    },
    {
      cityCode: '01010505',
      cityname: '莆田市',
      cid: '01010505'
    },
    {
      cityCode: '0101050505',
      cityname: '秀屿区',
      cid: '01010505'
    },
    {
      cityCode: '0101050501',
      cityname: '城厢区',
      cid: '01010505'
    },
    {
      cityCode: '0101351001',
      cityname: '钓鱼岛',
      cid: '0101351001'
    },
    {
      cityCode: '0101050202',
      cityname: '连城县',
      cid: '01010502'
    },
    {
      cityCode: '0101050204',
      cityname: '武平县',
      cid: '01010502'
    },
    {
      cityCode: '0101050201',
      cityname: '长汀县',
      cid: '01010502'
    },
    {
      cityCode: '0101050203',
      cityname: '上杭县',
      cid: '01010502'
    },
    {
      cityCode: '0101050207',
      cityname: '漳平市',
      cid: '01010502'
    },
    {
      cityCode: '01010502',
      cityname: '龙岩市',
      cid: '01010502'
    },
    {
      cityCode: '0101050205',
      cityname: '新罗区',
      cid: '01010502'
    },
    {
      cityCode: '0101050206',
      cityname: '永定区',
      cid: '01010502'
    },
    {
      cityCode: '0101300711',
      cityname: '桑日县',
      cid: '01013007'
    },
    {
      cityCode: '0101300710',
      cityname: '曲松县',
      cid: '01013007'
    },
    {
      cityCode: '0101300712',
      cityname: '扎囊县',
      cid: '01013007'
    },
    {
      cityCode: '0101300702',
      cityname: '错那县',
      cid: '01013007'
    },
    {
      cityCode: '0101300713',
      cityname: '泽当镇',
      cid: '01013007'
    },
    {
      cityCode: '0101300709',
      cityname: '琼结县',
      cid: '01013007'
    },
    {
      cityCode: '01013007',
      cityname: '山南市',
      cid: '01013007'
    },
    {
      cityCode: '0101300703',
      cityname: '贡嘎县',
      cid: '01013007'
    },
    {
      cityCode: '0101300701',
      cityname: '措美县',
      cid: '01013007'
    },
    {
      cityCode: '0101300704',
      cityname: '加查县',
      cid: '01013007'
    },
    {
      cityCode: '0101300708',
      cityname: '乃东区',
      cid: '01013007'
    },
    {
      cityCode: '0101300707',
      cityname: '洛扎县',
      cid: '01013007'
    },
    {
      cityCode: '0101300705',
      cityname: '浪卡子县',
      cid: '01013007'
    },
    {
      cityCode: '0101300706',
      cityname: '隆子县',
      cid: '01013007'
    },
    {
      cityCode: '0101300305',
      cityname: '林周县',
      cid: '01013003'
    },
    {
      cityCode: '0101300308',
      cityname: '曲水县',
      cid: '01013003'
    },
    {
      cityCode: '0101300301',
      cityname: '城关区',
      cid: '01013003'
    },
    {
      cityCode: '0101300304',
      cityname: '堆龙德庆区',
      cid: '01013003'
    },
    {
      cityCode: '0101300303',
      cityname: '当雄县',
      cid: '01013003'
    },
    {
      cityCode: '01013003',
      cityname: '拉萨市',
      cid: '01013003'
    },
    {
      cityCode: '0101300306',
      cityname: '墨竹工卡县',
      cid: '01013003'
    },
    {
      cityCode: '0101300307',
      cityname: '尼木县',
      cid: '01013003'
    },
    {
      cityCode: '0101300302',
      cityname: '达孜区',
      cid: '01013003'
    },
    {
      cityCode: '0101300618',
      cityname: '康马县',
      cid: '01013006'
    },
    {
      cityCode: '0101300608',
      cityname: '拉孜县',
      cid: '01013006'
    },
    {
      cityCode: '0101300601',
      cityname: '昂仁县',
      cid: '01013006'
    },
    {
      cityCode: '0101300610',
      cityname: '聂拉木县',
      cid: '01013006'
    },
    {
      cityCode: '0101300619',
      cityname: '桑珠孜区',
      cid: '01013006'
    },
    {
      cityCode: '0101300606',
      cityname: '吉隆县',
      cid: '01013006'
    },
    {
      cityCode: '0101300607',
      cityname: '江孜县',
      cid: '01013006'
    },
    {
      cityCode: '0101300617',
      cityname: '仲巴县',
      cid: '01013006'
    },
    {
      cityCode: '0101300603',
      cityname: '定结县',
      cid: '01013006'
    },
    {
      cityCode: '0101300604',
      cityname: '定日县',
      cid: '01013006'
    },
    {
      cityCode: '0101300615',
      cityname: '谢通门县',
      cid: '01013006'
    },
    {
      cityCode: '0101300605',
      cityname: '岗巴县',
      cid: '01013006'
    },
    {
      cityCode: '0101300611',
      cityname: '仁布县',
      cid: '01013006'
    },
    {
      cityCode: '0101300614',
      cityname: '萨迦县',
      cid: '01013006'
    },
    {
      cityCode: '0101300602',
      cityname: '白朗县',
      cid: '01013006'
    },
    {
      cityCode: '0101300613',
      cityname: '萨嘎县',
      cid: '01013006'
    },
    {
      cityCode: '0101300616',
      cityname: '亚东县',
      cid: '01013006'
    },
    {
      cityCode: '01013006',
      cityname: '日喀则市',
      cid: '01013006'
    },
    {
      cityCode: '0101300609',
      cityname: '南木林县',
      cid: '01013006'
    },
    {
      cityCode: '0101300206',
      cityname: '贡觉县',
      cid: '01013002'
    },
    {
      cityCode: '0101300210',
      cityname: '芒康县',
      cid: '01013002'
    },
    {
      cityCode: '0101300211',
      cityname: '左贡县',
      cid: '01013002'
    },
    {
      cityCode: '0101300212',
      cityname: '卡若区',
      cid: '01013002'
    },
    {
      cityCode: '0101300203',
      cityname: '察雅县',
      cid: '01013002'
    },
    {
      cityCode: '0101300208',
      cityname: '类乌齐县',
      cid: '01013002'
    },
    {
      cityCode: '0101300207',
      cityname: '江达县',
      cid: '01013002'
    },
    {
      cityCode: '0101300201',
      cityname: '八宿县',
      cid: '01013002'
    },
    {
      cityCode: '0101300209',
      cityname: '洛隆县',
      cid: '01013002'
    },
    {
      cityCode: '0101300202',
      cityname: '边坝县',
      cid: '01013002'
    },
    {
      cityCode: '0101300205',
      cityname: '丁青县',
      cid: '01013002'
    },
    {
      cityCode: '01013002',
      cityname: '昌都市',
      cid: '01013002'
    },
    {
      cityCode: '0101300408',
      cityname: '巴宜区',
      cid: '01013004'
    },
    {
      cityCode: '0101300402',
      cityname: '察隅县',
      cid: '01013004'
    },
    {
      cityCode: '0101300407',
      cityname: '墨脱县',
      cid: '01013004'
    },
    {
      cityCode: '0101300401',
      cityname: '波密县',
      cid: '01013004'
    },
    {
      cityCode: '0101300403',
      cityname: '工布江达县',
      cid: '01013004'
    },
    {
      cityCode: '01013004',
      cityname: '林芝市',
      cid: '01013004'
    },
    {
      cityCode: '0101300406',
      cityname: '米林县',
      cid: '01013004'
    },
    {
      cityCode: '0101300404',
      cityname: '朗县',
      cid: '01013004'
    },
    {
      cityCode: '0101300510',
      cityname: '索县',
      cid: '01013005'
    },
    {
      cityCode: '0101300508',
      cityname: '聂荣县',
      cid: '01013005'
    },
    {
      cityCode: '01013005',
      cityname: '那曲市',
      cid: '01013005'
    },
    {
      cityCode: '0101300505',
      cityname: '嘉黎县',
      cid: '01013005'
    },
    {
      cityCode: '0101300501',
      cityname: '安多县',
      cid: '01013005'
    },
    {
      cityCode: '0101300509',
      cityname: '申扎县',
      cid: '01013005'
    },
    {
      cityCode: '0101300511',
      cityname: '双湖县',
      cid: '01013005'
    },
    {
      cityCode: '0101300503',
      cityname: '班戈县',
      cid: '01013005'
    },
    {
      cityCode: '0101300507',
      cityname: '尼玛县',
      cid: '01013005'
    },
    {
      cityCode: '0101300504',
      cityname: '比如县',
      cid: '01013005'
    },
    {
      cityCode: '0101300512',
      cityname: '色尼区',
      cid: '01013005'
    },
    {
      cityCode: '0101300502',
      cityname: '巴青县',
      cid: '01013005'
    },
    {
      cityCode: '0101300101',
      cityname: '措勤县',
      cid: '01013001'
    },
    {
      cityCode: '0101300106',
      cityname: '日土县',
      cid: '01013001'
    },
    {
      cityCode: '0101300107',
      cityname: '札达县',
      cid: '01013001'
    },
    {
      cityCode: '0101300103',
      cityname: '改则县',
      cid: '01013001'
    },
    {
      cityCode: '0101300102',
      cityname: '噶尔县',
      cid: '01013001'
    },
    {
      cityCode: '01013001',
      cityname: '阿里地区',
      cid: '01013001'
    },
    {
      cityCode: '0101300105',
      cityname: '普兰县',
      cid: '01013001'
    },
    {
      cityCode: '0101300104',
      cityname: '革吉县',
      cid: '01013001'
    },
    {
      cityCode: '0101090401',
      cityname: '六枝特区',
      cid: '01010904'
    },
    {
      cityCode: '0101090402',
      cityname: '盘州市',
      cid: '01010904'
    },
    {
      cityCode: '0101090404',
      cityname: '钟山区',
      cid: '01010904'
    },
    {
      cityCode: '0101090403',
      cityname: '水城区',
      cid: '01010904'
    },
    {
      cityCode: '01010904',
      cityname: '六盘水市',
      cid: '01010904'
    },
    {
      cityCode: '0101090103',
      cityname: '普定县',
      cid: '01010901'
    },
    {
      cityCode: '0101090101',
      cityname: '关岭县',
      cid: '01010901'
    },
    {
      cityCode: '0101090104',
      cityname: '西秀区',
      cid: '01010901'
    },
    {
      cityCode: '0101090102',
      cityname: '平坝区',
      cid: '01010901'
    },
    {
      cityCode: '01010901',
      cityname: '安顺市',
      cid: '01010901'
    },
    {
      cityCode: '0101090106',
      cityname: '紫云县',
      cid: '01010901'
    },
    {
      cityCode: '0101090105',
      cityname: '镇宁县',
      cid: '01010901'
    },
    {
      cityCode: '0101090209',
      cityname: '织金县',
      cid: '01010902'
    },
    {
      cityCode: '0101090210',
      cityname: '七星关区',
      cid: '01010902'
    },
    {
      cityCode: '01010902',
      cityname: '毕节市',
      cid: '01010902'
    },
    {
      cityCode: '0101090206',
      cityname: '纳雍县',
      cid: '01010902'
    },
    {
      cityCode: '0101090205',
      cityname: '金沙县',
      cid: '01010902'
    },
    {
      cityCode: '0101090208',
      cityname: '威宁县',
      cid: '01010902'
    },
    {
      cityCode: '0101090204',
      cityname: '赫章县',
      cid: '01010902'
    },
    {
      cityCode: '0101090203',
      cityname: '大方县',
      cid: '01010902'
    },
    {
      cityCode: '0101090207',
      cityname: '黔西市',
      cid: '01010902'
    },
    {
      cityCode: '0101090307',
      cityname: '息烽县',
      cid: '01010903'
    },
    {
      cityCode: '0101090303',
      cityname: '开阳县',
      cid: '01010903'
    },
    {
      cityCode: '0101090305',
      cityname: '清镇市',
      cid: '01010903'
    },
    {
      cityCode: '0101090309',
      cityname: '修文县',
      cid: '01010903'
    },
    {
      cityCode: '0101090301',
      cityname: '白云区',
      cid: '01010903'
    },
    {
      cityCode: '0101090310',
      cityname: '云岩区',
      cid: '01010903'
    },
    {
      cityCode: '0101090304',
      cityname: '南明区',
      cid: '01010903'
    },
    {
      cityCode: '01010903',
      cityname: '贵阳市',
      cid: '01010903'
    },
    {
      cityCode: '0101090311',
      cityname: '观山湖区',
      cid: '01010903'
    },
    {
      cityCode: '0101090302',
      cityname: '花溪区',
      cid: '01010903'
    },
    {
      cityCode: '0101090306',
      cityname: '乌当区',
      cid: '01010903'
    },
    {
      cityCode: '0101090903',
      cityname: '凤冈县',
      cid: '01010909'
    },
    {
      cityCode: '0101090909',
      cityname: '桐梓县',
      cid: '01010909'
    },
    {
      cityCode: '0101090910',
      cityname: '务川县',
      cid: '01010909'
    },
    {
      cityCode: '0101090908',
      cityname: '绥阳县',
      cid: '01010909'
    },
    {
      cityCode: '0101090905',
      cityname: '汇川区',
      cid: '01010909'
    },
    {
      cityCode: '0101090906',
      cityname: '湄潭县',
      cid: '01010909'
    },
    {
      cityCode: '0101090904',
      cityname: '红花岗区',
      cid: '01010909'
    },
    {
      cityCode: '0101090902',
      cityname: '道真县',
      cid: '01010909'
    },
    {
      cityCode: '0101090911',
      cityname: '习水县',
      cid: '01010909'
    },
    {
      cityCode: '0101090914',
      cityname: '播州区',
      cid: '01010909'
    },
    {
      cityCode: '0101090913',
      cityname: '正安县',
      cid: '01010909'
    },
    {
      cityCode: '0101090912',
      cityname: '余庆县',
      cid: '01010909'
    },
    {
      cityCode: '01010909',
      cityname: '遵义市',
      cid: '01010909'
    },
    {
      cityCode: '0101090901',
      cityname: '赤水市',
      cid: '01010909'
    },
    {
      cityCode: '0101090907',
      cityname: '仁怀市',
      cid: '01010909'
    },
    {
      cityCode: '0101090811',
      cityname: '碧江区',
      cid: '01010908'
    },
    {
      cityCode: '01010908',
      cityname: '铜仁市',
      cid: '01010908'
    },
    {
      cityCode: '0101090810',
      cityname: '沿河县',
      cid: '01010908'
    },
    {
      cityCode: '0101090809',
      cityname: '玉屏县',
      cid: '01010908'
    },
    {
      cityCode: '0101090803',
      cityname: '石阡县',
      cid: '01010908'
    },
    {
      cityCode: '0101090808',
      cityname: '印江县',
      cid: '01010908'
    },
    {
      cityCode: '0101090804',
      cityname: '思南县',
      cid: '01010908'
    },
    {
      cityCode: '0101090801',
      cityname: '德江县',
      cid: '01010908'
    },
    {
      cityCode: '0101090807',
      cityname: '万山区',
      cid: '01010908'
    },
    {
      cityCode: '0101090802',
      cityname: '江口县',
      cid: '01010908'
    },
    {
      cityCode: '0101090805',
      cityname: '松桃县',
      cid: '01010908'
    },
    {
      cityCode: '0101090515',
      cityname: '天柱县',
      cid: '01010905'
    },
    {
      cityCode: '0101090508',
      cityname: '雷山县',
      cid: '01010905'
    },
    {
      cityCode: '0101090501',
      cityname: '岑巩县',
      cid: '01010905'
    },
    {
      cityCode: '0101090510',
      cityname: '麻江县',
      cid: '01010905'
    },
    {
      cityCode: '0101090512',
      cityname: '三穗县',
      cid: '01010905'
    },
    {
      cityCode: '01010905',
      cityname: '黔东南州',
      cid: '01010905'
    },
    {
      cityCode: '0101090513',
      cityname: '施秉县',
      cid: '01010905'
    },
    {
      cityCode: '0101090505',
      cityname: '剑河县',
      cid: '01010905'
    },
    {
      cityCode: '0101090502',
      cityname: '从江县',
      cid: '01010905'
    },
    {
      cityCode: '0101090516',
      cityname: '镇远县',
      cid: '01010905'
    },
    {
      cityCode: '0101090507',
      cityname: '凯里市',
      cid: '01010905'
    },
    {
      cityCode: '0101090509',
      cityname: '黎平县',
      cid: '01010905'
    },
    {
      cityCode: '0101090504',
      cityname: '黄平县',
      cid: '01010905'
    },
    {
      cityCode: '0101090511',
      cityname: '榕江县',
      cid: '01010905'
    },
    {
      cityCode: '0101090503',
      cityname: '丹寨县',
      cid: '01010905'
    },
    {
      cityCode: '0101090506',
      cityname: '锦屏县',
      cid: '01010905'
    },
    {
      cityCode: '0101090514',
      cityname: '台江县',
      cid: '01010905'
    },
    {
      cityCode: '0101090602',
      cityname: '独山县',
      cid: '01010906'
    },
    {
      cityCode: '0101090607',
      cityname: '荔波县',
      cid: '01010906'
    },
    {
      cityCode: '0101090611',
      cityname: '三都县',
      cid: '01010906'
    },
    {
      cityCode: '01010906',
      cityname: '黔南州',
      cid: '01010906'
    },
    {
      cityCode: '0101090609',
      cityname: '罗甸县',
      cid: '01010906'
    },
    {
      cityCode: '0101090608',
      cityname: '龙里县',
      cid: '01010906'
    },
    {
      cityCode: '0101090604',
      cityname: '福泉市',
      cid: '01010906'
    },
    {
      cityCode: '0101090606',
      cityname: '惠水县',
      cid: '01010906'
    },
    {
      cityCode: '0101090601',
      cityname: '长顺县',
      cid: '01010906'
    },
    {
      cityCode: '0101090612',
      cityname: '瓮安县',
      cid: '01010906'
    },
    {
      cityCode: '0101090610',
      cityname: '平塘县',
      cid: '01010906'
    },
    {
      cityCode: '0101090605',
      cityname: '贵定县',
      cid: '01010906'
    },
    {
      cityCode: '0101090603',
      cityname: '都匀市',
      cid: '01010906'
    },
    {
      cityCode: '0101090702',
      cityname: '册亨县',
      cid: '01010907'
    },
    {
      cityCode: '0101090707',
      cityname: '兴义市',
      cid: '01010907'
    },
    {
      cityCode: '0101090704',
      cityname: '晴隆县',
      cid: '01010907'
    },
    {
      cityCode: '0101090708',
      cityname: '贞丰县',
      cid: '01010907'
    },
    {
      cityCode: '0101090705',
      cityname: '望谟县',
      cid: '01010907'
    },
    {
      cityCode: '01010907',
      cityname: '黔西南州',
      cid: '01010907'
    },
    {
      cityCode: '0101090706',
      cityname: '兴仁市',
      cid: '01010907'
    },
    {
      cityCode: '0101090701',
      cityname: '安龙县',
      cid: '01010907'
    },
    {
      cityCode: '0101090703',
      cityname: '普安县',
      cid: '01010907'
    },
    {
      cityCode: '0101190506',
      cityname: '振兴区',
      cid: '01011905'
    },
    {
      cityCode: '0101190505',
      cityname: '振安区',
      cid: '01011905'
    },
    {
      cityCode: '0101190501',
      cityname: '东港市',
      cid: '01011905'
    },
    {
      cityCode: '0101190504',
      cityname: '元宝区',
      cid: '01011905'
    },
    {
      cityCode: '0101190502',
      cityname: '凤城市',
      cid: '01011905'
    },
    {
      cityCode: '01011905',
      cityname: '丹东市',
      cid: '01011905'
    },
    {
      cityCode: '0101190503',
      cityname: '宽甸县',
      cid: '01011905'
    },
    {
      cityCode: '0101190401',
      cityname: '长海县',
      cid: '01011904'
    },
    {
      cityCode: '0101190409',
      cityname: '中山区',
      cid: '01011904'
    },
    {
      cityCode: '0101190408',
      cityname: '西岗区',
      cid: '01011904'
    },
    {
      cityCode: '0101190404',
      cityname: '旅顺口区',
      cid: '01011904'
    },
    {
      cityCode: '0101190406',
      cityname: '沙河口区',
      cid: '01011904'
    },
    {
      cityCode: '0101190402',
      cityname: '甘井子区',
      cid: '01011904'
    },
    {
      cityCode: '0101190407',
      cityname: '瓦房店市',
      cid: '01011904'
    },
    {
      cityCode: '0101190410',
      cityname: '庄河市',
      cid: '01011904'
    },
    {
      cityCode: '0101190403',
      cityname: '金州区',
      cid: '01011904'
    },
    {
      cityCode: '0101190405',
      cityname: '普兰店区',
      cid: '01011904'
    },
    {
      cityCode: '01011904',
      cityname: '大连市',
      cid: '01011904'
    },
    {
      cityCode: '0101190609',
      cityname: '抚顺县',
      cid: '01011906'
    },
    {
      cityCode: '0101190606',
      cityname: '新宾县',
      cid: '01011906'
    },
    {
      cityCode: '0101190607',
      cityname: '新抚区',
      cid: '01011906'
    },
    {
      cityCode: '0101190603',
      cityname: '清原县',
      cid: '01011906'
    },
    {
      cityCode: '0101190605',
      cityname: '望花区',
      cid: '01011906'
    },
    {
      cityCode: '0101190608',
      cityname: '章党街道',
      cid: '01011906'
    },
    {
      cityCode: '0101190604',
      cityname: '顺城区',
      cid: '01011906'
    },
    {
      cityCode: '01011906',
      cityname: '抚顺市',
      cid: '01011906'
    },
    {
      cityCode: '0101190601',
      cityname: '东洲区',
      cid: '01011906'
    },
    {
      cityCode: '0101190301',
      cityname: '北票市',
      cid: '01011903'
    },
    {
      cityCode: '0101190305',
      cityname: '凌源市',
      cid: '01011903'
    },
    {
      cityCode: '01011903',
      cityname: '朝阳市',
      cid: '01011903'
    },
    {
      cityCode: '0101190307',
      cityname: '双塔区',
      cid: '01011903'
    },
    {
      cityCode: '0101190306',
      cityname: '龙城区',
      cid: '01011903'
    },
    {
      cityCode: '0101190302',
      cityname: '朝阳县',
      cid: '01011903'
    },
    {
      cityCode: '0101190303',
      cityname: '建平县',
      cid: '01011903'
    },
    {
      cityCode: '0101190304',
      cityname: '喀喇沁左翼县',
      cid: '01011903'
    },
    {
      cityCode: '0101190205',
      cityname: '平山区',
      cid: '01011902'
    },
    {
      cityCode: '0101190202',
      cityname: '桓仁县',
      cid: '01011902'
    },
    {
      cityCode: '0101190207',
      cityname: '本溪县',
      cid: '01011902'
    },
    {
      cityCode: '0101190206',
      cityname: '溪湖区',
      cid: '01011902'
    },
    {
      cityCode: '0101190204',
      cityname: '南芬区',
      cid: '01011902'
    },
    {
      cityCode: '0101190203',
      cityname: '明山区',
      cid: '01011902'
    },
    {
      cityCode: '01011902',
      cityname: '本溪市',
      cid: '01011902'
    },
    {
      cityCode: '0101191213',
      cityname: '于洪区',
      cid: '01011912'
    },
    {
      cityCode: '0101191211',
      cityname: '铁西区',
      cid: '01011912'
    },
    {
      cityCode: '0101191210',
      cityname: '苏家屯区',
      cid: '01011912'
    },
    {
      cityCode: '0101191212',
      cityname: '新民市',
      cid: '01011912'
    },
    {
      cityCode: '0101191209',
      cityname: '沈河区',
      cid: '01011912'
    },
    {
      cityCode: '0101191208',
      cityname: '沈北新区',
      cid: '01011912'
    },
    {
      cityCode: '01011912',
      cityname: '沈阳市',
      cid: '01011912'
    },
    {
      cityCode: '0101191205',
      cityname: '皇姑区',
      cid: '01011912'
    },
    {
      cityCode: '0101191203',
      cityname: '法库县',
      cid: '01011912'
    },
    {
      cityCode: '0101191204',
      cityname: '和平区',
      cid: '01011912'
    },
    {
      cityCode: '0101191202',
      cityname: '浑南区',
      cid: '01011912'
    },
    {
      cityCode: '0101191207',
      cityname: '辽中区',
      cid: '01011912'
    },
    {
      cityCode: '0101191201',
      cityname: '大东区',
      cid: '01011912'
    },
    {
      cityCode: '0101191206',
      cityname: '康平县',
      cid: '01011912'
    },
    {
      cityCode: '0101191101',
      cityname: '大洼区',
      cid: '01011911'
    },
    {
      cityCode: '0101191102',
      cityname: '盘山县',
      cid: '01011911'
    },
    {
      cityCode: '01011911',
      cityname: '盘锦市',
      cid: '01011911'
    },
    {
      cityCode: '0101191104',
      cityname: '兴隆台区',
      cid: '01011911'
    },
    {
      cityCode: '0101191103',
      cityname: '双台子区',
      cid: '01011911'
    },
    {
      cityCode: '0101191402',
      cityname: '大石桥市',
      cid: '01011914'
    },
    {
      cityCode: '0101191403',
      cityname: '盖州市',
      cid: '01011914'
    },
    {
      cityCode: '0101191406',
      cityname: '站前区',
      cid: '01011914'
    },
    {
      cityCode: '0101191405',
      cityname: '西市区',
      cid: '01011914'
    },
    {
      cityCode: '01011914',
      cityname: '营口市',
      cid: '01011914'
    },
    {
      cityCode: '0101191404',
      cityname: '老边区',
      cid: '01011914'
    },
    {
      cityCode: '0101191401',
      cityname: '鲅鱼圈区',
      cid: '01011914'
    },
    {
      cityCode: '01011908',
      cityname: '葫芦岛市',
      cid: '01011908'
    },
    {
      cityCode: '0101190804',
      cityname: '南票区',
      cid: '01011908'
    },
    {
      cityCode: '0101190802',
      cityname: '连山区',
      cid: '01011908'
    },
    {
      cityCode: '0101190803',
      cityname: '龙港区',
      cid: '01011908'
    },
    {
      cityCode: '0101190801',
      cityname: '建昌县',
      cid: '01011908'
    },
    {
      cityCode: '0101190805',
      cityname: '绥中县',
      cid: '01011908'
    },
    {
      cityCode: '0101190806',
      cityname: '兴城市',
      cid: '01011908'
    },
    {
      cityCode: '0101191004',
      cityname: '宏伟区',
      cid: '01011910'
    },
    {
      cityCode: '0101191003',
      cityname: '弓长岭区',
      cid: '01011910'
    },
    {
      cityCode: '0101191001',
      cityname: '白塔区',
      cid: '01011910'
    },
    {
      cityCode: '0101191008',
      cityname: '辽阳县',
      cid: '01011910'
    },
    {
      cityCode: '01011910',
      cityname: '辽阳市',
      cid: '01011910'
    },
    {
      cityCode: '0101191002',
      cityname: '灯塔市',
      cid: '01011910'
    },
    {
      cityCode: '0101191007',
      cityname: '文圣区',
      cid: '01011910'
    },
    {
      cityCode: '0101191006',
      cityname: '太子河区',
      cid: '01011910'
    },
    {
      cityCode: '0101191307',
      cityname: '银州区',
      cid: '01011913'
    },
    {
      cityCode: '0101191304',
      cityname: '清河区',
      cid: '01011913'
    },
    {
      cityCode: '0101191303',
      cityname: '开原市',
      cid: '01011913'
    },
    {
      cityCode: '0101191302',
      cityname: '调兵山市',
      cid: '01011913'
    },
    {
      cityCode: '0101191306',
      cityname: '西丰县',
      cid: '01011913'
    },
    {
      cityCode: '0101191308',
      cityname: '铁岭县',
      cid: '01011913'
    },
    {
      cityCode: '0101191301',
      cityname: '昌图县',
      cid: '01011913'
    },
    {
      cityCode: '01011913',
      cityname: '铁岭市',
      cid: '01011913'
    },
    {
      cityCode: '0101190906',
      cityname: '太和区',
      cid: '01011909'
    },
    {
      cityCode: '0101190905',
      cityname: '凌河区',
      cid: '01011909'
    },
    {
      cityCode: '0101190902',
      cityname: '古塔区',
      cid: '01011909'
    },
    {
      cityCode: '0101190903',
      cityname: '黑山县',
      cid: '01011909'
    },
    {
      cityCode: '0101190907',
      cityname: '义县',
      cid: '01011909'
    },
    {
      cityCode: '0101190904',
      cityname: '凌海市',
      cid: '01011909'
    },
    {
      cityCode: '01011909',
      cityname: '锦州市',
      cid: '01011909'
    },
    {
      cityCode: '0101190901',
      cityname: '北镇市',
      cid: '01011909'
    },
    {
      cityCode: '01011907',
      cityname: '阜新市',
      cid: '01011907'
    },
    {
      cityCode: '0101190707',
      cityname: '彰武县',
      cid: '01011907'
    },
    {
      cityCode: '0101190708',
      cityname: '阜新县',
      cid: '01011907'
    },
    {
      cityCode: '0101190706',
      cityname: '新邱区',
      cid: '01011907'
    },
    {
      cityCode: '0101190705',
      cityname: '细河区',
      cid: '01011907'
    },
    {
      cityCode: '0101190704',
      cityname: '太平区',
      cid: '01011907'
    },
    {
      cityCode: '0101190703',
      cityname: '清河门区',
      cid: '01011907'
    },
    {
      cityCode: '0101190702',
      cityname: '海州区',
      cid: '01011907'
    },
    {
      cityCode: '0101190102',
      cityname: '立山区',
      cid: '01011901'
    },
    {
      cityCode: '0101190104',
      cityname: '台安县',
      cid: '01011901'
    },
    {
      cityCode: '0101190107',
      cityname: '岫岩县',
      cid: '01011901'
    },
    {
      cityCode: '0101190101',
      cityname: '海城市',
      cid: '01011901'
    },
    {
      cityCode: '0101190106',
      cityname: '铁西区',
      cid: '01011901'
    },
    {
      cityCode: '01011901',
      cityname: '鞍山市',
      cid: '01011901'
    },
    {
      cityCode: '0101190105',
      cityname: '铁东区',
      cid: '01011901'
    },
    {
      cityCode: '0101190103',
      cityname: '千山区',
      cid: '01011901'
    },
    {
      cityCode: '0101040127',
      cityname: '铜梁区',
      cid: '01010401'
    },
    {
      cityCode: '0101040132',
      cityname: '巫溪县',
      cid: '01010401'
    },
    {
      cityCode: '0101040119',
      cityname: '南川区',
      cid: '01010401'
    },
    {
      cityCode: '0101040138',
      cityname: '渝中区',
      cid: '01010401'
    },
    {
      cityCode: '0101040124',
      cityname: '沙坪坝区',
      cid: '01010401'
    },
    {
      cityCode: '01010401',
      cityname: '重庆市',
      cid: '01010401'
    },
    {
      cityCode: '0101040118',
      cityname: '南岸区',
      cid: '01010401'
    },
    {
      cityCode: '0101040135',
      cityname: '永川区',
      cid: '01010401'
    },
    {
      cityCode: '0101040120',
      cityname: '彭水县',
      cid: '01010401'
    },
    {
      cityCode: '0101040109',
      cityname: '丰都县',
      cid: '01010401'
    },
    {
      cityCode: '0101040131',
      cityname: '巫山县',
      cid: '01010401'
    },
    {
      cityCode: '0101040123',
      cityname: '荣昌区',
      cid: '01010401'
    },
    {
      cityCode: '0101040113',
      cityname: '江北区',
      cid: '01010401'
    },
    {
      cityCode: '0101040116',
      cityname: '开州区',
      cid: '01010401'
    },
    {
      cityCode: '0101040136',
      cityname: '酉阳县',
      cid: '01010401'
    },
    {
      cityCode: '0101040108',
      cityname: '垫江县',
      cid: '01010401'
    },
    {
      cityCode: '0101040106',
      cityname: '大渡口区',
      cid: '01010401'
    },
    {
      cityCode: '0101040111',
      cityname: '涪陵区',
      cid: '01010401'
    },
    {
      cityCode: '0101040103',
      cityname: '璧山区',
      cid: '01010401'
    },
    {
      cityCode: '0101040101',
      cityname: '巴南区',
      cid: '01010401'
    },
    {
      cityCode: '0101040122',
      cityname: '黔江区',
      cid: '01010401'
    },
    {
      cityCode: '0101040105',
      cityname: '城口县',
      cid: '01010401'
    },
    {
      cityCode: '0101040139',
      cityname: '云阳县',
      cid: '01010401'
    },
    {
      cityCode: '0101040110',
      cityname: '奉节县',
      cid: '01010401'
    },
    {
      cityCode: '0101040121',
      cityname: '綦江区',
      cid: '01010401'
    },
    {
      cityCode: '0101040128',
      cityname: '潼南区',
      cid: '01010401'
    },
    {
      cityCode: '0101040102',
      cityname: '北碚区',
      cid: '01010401'
    },
    {
      cityCode: '0101040125',
      cityname: '石柱县',
      cid: '01010401'
    },
    {
      cityCode: '0101040104',
      cityname: '长寿区',
      cid: '01010401'
    },
    {
      cityCode: '0101040115',
      cityname: '九龙坡区',
      cid: '01010401'
    },
    {
      cityCode: '0101040117',
      cityname: '梁平区',
      cid: '01010401'
    },
    {
      cityCode: '0101040130',
      cityname: '万州区',
      cid: '01010401'
    },
    {
      cityCode: '0101040140',
      cityname: '忠县',
      cid: '01010401'
    },
    {
      cityCode: '0101040112',
      cityname: '合川区',
      cid: '01010401'
    },
    {
      cityCode: '0101040114',
      cityname: '江津区',
      cid: '01010401'
    },
    {
      cityCode: '0101040137',
      cityname: '渝北区',
      cid: '01010401'
    },
    {
      cityCode: '0101040107',
      cityname: '大足区',
      cid: '01010401'
    },
    {
      cityCode: '0101040134',
      cityname: '秀山县',
      cid: '01010401'
    },
    {
      cityCode: '0101040129',
      cityname: '万盛街道',
      cid: '01010401'
    },
    {
      cityCode: '0101040133',
      cityname: '武隆区',
      cid: '01010401'
    },
    {
      cityCode: '0101250817',
      cityname: '永寿县',
      cid: '01012508'
    },
    {
      cityCode: '0101250813',
      cityname: '武功县',
      cid: '01012508'
    },
    {
      cityCode: '0101250808',
      cityname: '礼泉县',
      cid: '01012508'
    },
    {
      cityCode: '0101250815',
      cityname: '旬邑县',
      cid: '01012508'
    },
    {
      cityCode: '0101250802',
      cityname: '长武县',
      cid: '01012508'
    },
    {
      cityCode: '0101250809',
      cityname: '乾县',
      cid: '01012508'
    },
    {
      cityCode: '0101250816',
      cityname: '杨陵区',
      cid: '01012508'
    },
    {
      cityCode: '0101250812',
      cityname: '渭城区',
      cid: '01012508'
    },
    {
      cityCode: '0101250801',
      cityname: '彬州市',
      cid: '01012508'
    },
    {
      cityCode: '0101250810',
      cityname: '秦都区',
      cid: '01012508'
    },
    {
      cityCode: '0101250814',
      cityname: '兴平市',
      cid: '01012508'
    },
    {
      cityCode: '0101250807',
      cityname: '泾阳县',
      cid: '01012508'
    },
    {
      cityCode: '0101250811',
      cityname: '三原县',
      cid: '01012508'
    },
    {
      cityCode: '0101250803',
      cityname: '淳化县',
      cid: '01012508'
    },
    {
      cityCode: '01012508',
      cityname: '咸阳市',
      cid: '01012508'
    },
    {
      cityCode: '0101250402',
      cityname: '洛南县',
      cid: '01012504'
    },
    {
      cityCode: '0101250405',
      cityname: '商州区',
      cid: '01012504'
    },
    {
      cityCode: '0101250404',
      cityname: '商南县',
      cid: '01012504'
    },
    {
      cityCode: '0101250401',
      cityname: '丹凤县',
      cid: '01012504'
    },
    {
      cityCode: '01012504',
      cityname: '商洛市',
      cid: '01012504'
    },
    {
      cityCode: '0101250407',
      cityname: '镇安县',
      cid: '01012504'
    },
    {
      cityCode: '0101250406',
      cityname: '柞水县',
      cid: '01012504'
    },
    {
      cityCode: '0101250403',
      cityname: '山阳县',
      cid: '01012504'
    },
    {
      cityCode: '01012501',
      cityname: '安康市',
      cid: '01012501'
    },
    {
      cityCode: '0101250105',
      cityname: '宁陕县',
      cid: '01012501'
    },
    {
      cityCode: '0101250106',
      cityname: '平利县',
      cid: '01012501'
    },
    {
      cityCode: '0101250107',
      cityname: '石泉县',
      cid: '01012501'
    },
    {
      cityCode: '0101250103',
      cityname: '汉阴县',
      cid: '01012501'
    },
    {
      cityCode: '0101250108',
      cityname: '旬阳市',
      cid: '01012501'
    },
    {
      cityCode: '0101250102',
      cityname: '汉滨区',
      cid: '01012501'
    },
    {
      cityCode: '0101250109',
      cityname: '镇坪县',
      cid: '01012501'
    },
    {
      cityCode: '0101250101',
      cityname: '白河县',
      cid: '01012501'
    },
    {
      cityCode: '0101250104',
      cityname: '岚皋县',
      cid: '01012501'
    },
    {
      cityCode: '0101250110',
      cityname: '紫阳县',
      cid: '01012501'
    },
    {
      cityCode: '0101250204',
      cityname: '扶风县',
      cid: '01012502'
    },
    {
      cityCode: '0101250201',
      cityname: '陈仓区',
      cid: '01012502'
    },
    {
      cityCode: '0101250207',
      cityname: '陇县',
      cid: '01012502'
    },
    {
      cityCode: '0101250211',
      cityname: '太白县',
      cid: '01012502'
    },
    {
      cityCode: '0101250203',
      cityname: '凤翔区',
      cid: '01012502'
    },
    {
      cityCode: '0101250212',
      cityname: '渭滨区',
      cid: '01012502'
    },
    {
      cityCode: '0101250202',
      cityname: '凤县',
      cid: '01012502'
    },
    {
      cityCode: '0101250205',
      cityname: '金台区',
      cid: '01012502'
    },
    {
      cityCode: '01012502',
      cityname: '宝鸡市',
      cid: '01012502'
    },
    {
      cityCode: '0101250209',
      cityname: '岐山县',
      cid: '01012502'
    },
    {
      cityCode: '0101250206',
      cityname: '麟游县',
      cid: '01012502'
    },
    {
      cityCode: '0101250210',
      cityname: '千阳县',
      cid: '01012502'
    },
    {
      cityCode: '0101250208',
      cityname: '眉县',
      cid: '01012502'
    },
    {
      cityCode: '0101250913',
      cityname: '子长市',
      cid: '01012509'
    },
    {
      cityCode: '0101250903',
      cityname: '富县',
      cid: '01012509'
    },
    {
      cityCode: '0101250907',
      cityname: '洛川县',
      cid: '01012509'
    },
    {
      cityCode: '0101250909',
      cityname: '延长县',
      cid: '01012509'
    },
    {
      cityCode: '0101250908',
      cityname: '吴起县',
      cid: '01012509'
    },
    {
      cityCode: '0101250911',
      cityname: '宜川县',
      cid: '01012509'
    },
    {
      cityCode: '01012509',
      cityname: '延安市',
      cid: '01012509'
    },
    {
      cityCode: '0101250904',
      cityname: '甘泉县',
      cid: '01012509'
    },
    {
      cityCode: '0101250902',
      cityname: '宝塔区',
      cid: '01012509'
    },
    {
      cityCode: '0101250912',
      cityname: '志丹县',
      cid: '01012509'
    },
    {
      cityCode: '0101250910',
      cityname: '延川县',
      cid: '01012509'
    },
    {
      cityCode: '0101250906',
      cityname: '黄龙县',
      cid: '01012509'
    },
    {
      cityCode: '0101250905',
      cityname: '黄陵县',
      cid: '01012509'
    },
    {
      cityCode: '0101250901',
      cityname: '安塞区',
      cid: '01012509'
    },
    {
      cityCode: '0101251007',
      cityname: '清涧县',
      cid: '01012510'
    },
    {
      cityCode: '0101251004',
      cityname: '佳县',
      cid: '01012510'
    },
    {
      cityCode: '0101251003',
      cityname: '横山区',
      cid: '01012510'
    },
    {
      cityCode: '01012510',
      cityname: '榆林市',
      cid: '01012510'
    },
    {
      cityCode: '0101251009',
      cityname: '绥德县',
      cid: '01012510'
    },
    {
      cityCode: '0101251005',
      cityname: '靖边县',
      cid: '01012510'
    },
    {
      cityCode: '0101251011',
      cityname: '榆阳区',
      cid: '01012510'
    },
    {
      cityCode: '0101251001',
      cityname: '定边县',
      cid: '01012510'
    },
    {
      cityCode: '0101251010',
      cityname: '吴堡县',
      cid: '01012510'
    },
    {
      cityCode: '0101251002',
      cityname: '府谷县',
      cid: '01012510'
    },
    {
      cityCode: '0101251008',
      cityname: '神木市',
      cid: '01012510'
    },
    {
      cityCode: '0101251012',
      cityname: '子洲县',
      cid: '01012510'
    },
    {
      cityCode: '0101251006',
      cityname: '米脂县',
      cid: '01012510'
    },
    {
      cityCode: '0101250307',
      cityname: '南郑区',
      cid: '01012503'
    },
    {
      cityCode: '0101250309',
      cityname: '西乡县',
      cid: '01012503'
    },
    {
      cityCode: '0101250303',
      cityname: '汉台区',
      cid: '01012503'
    },
    {
      cityCode: '0101250301',
      cityname: '城固县',
      cid: '01012503'
    },
    {
      cityCode: '0101250308',
      cityname: '宁强县',
      cid: '01012503'
    },
    {
      cityCode: '0101250305',
      cityname: '略阳县',
      cid: '01012503'
    },
    {
      cityCode: '0101250304',
      cityname: '留坝县',
      cid: '01012503'
    },
    {
      cityCode: '0101250311',
      cityname: '镇巴县',
      cid: '01012503'
    },
    {
      cityCode: '0101250310',
      cityname: '洋县',
      cid: '01012503'
    },
    {
      cityCode: '01012503',
      cityname: '汉中市',
      cid: '01012503'
    },
    {
      cityCode: '0101250306',
      cityname: '勉县',
      cid: '01012503'
    },
    {
      cityCode: '0101250302',
      cityname: '佛坪县',
      cid: '01012503'
    },
    {
      cityCode: '0101250602',
      cityname: '澄城县',
      cid: '01012506'
    },
    {
      cityCode: '0101250608',
      cityname: '潼关县',
      cid: '01012506'
    },
    {
      cityCode: '0101250606',
      cityname: '临渭区',
      cid: '01012506'
    },
    {
      cityCode: '0101250604',
      cityname: '合阳县',
      cid: '01012506'
    },
    {
      cityCode: '01012506',
      cityname: '渭南市',
      cid: '01012506'
    },
    {
      cityCode: '0101250805',
      cityname: '韩城市',
      cid: '01012506'
    },
    {
      cityCode: '0101250806',
      cityname: '华阴市',
      cid: '01012506'
    },
    {
      cityCode: '0101250607',
      cityname: '蒲城县',
      cid: '01012506'
    },
    {
      cityCode: '0101250601',
      cityname: '白水县',
      cid: '01012506'
    },
    {
      cityCode: '0101250605',
      cityname: '华州区',
      cid: '01012506'
    },
    {
      cityCode: '0101250804',
      cityname: '富平县',
      cid: '01012506'
    },
    {
      cityCode: '0101250603',
      cityname: '大荔县',
      cid: '01012506'
    },
    {
      cityCode: '0101250701',
      cityname: '灞桥区',
      cid: '01012507'
    },
    {
      cityCode: '0101250713',
      cityname: '周至县',
      cid: '01012507'
    },
    {
      cityCode: '0101250708',
      cityname: '临潼区',
      cid: '01012507'
    },
    {
      cityCode: '0101250705',
      cityname: '鄠邑区',
      cid: '01012507'
    },
    {
      cityCode: '01012507',
      cityname: '西安市',
      cid: '01012507'
    },
    {
      cityCode: '0101250706',
      cityname: '蓝田县',
      cid: '01012507'
    },
    {
      cityCode: '0101250703',
      cityname: '长安区',
      cid: '01012507'
    },
    {
      cityCode: '0101250704',
      cityname: '高陵区',
      cid: '01012507'
    },
    {
      cityCode: '0101250710',
      cityname: '新城区',
      cid: '01012507'
    },
    {
      cityCode: '0101250709',
      cityname: '未央区',
      cid: '01012507'
    },
    {
      cityCode: '0101250712',
      cityname: '雁塔区',
      cid: '01012507'
    },
    {
      cityCode: '0101250707',
      cityname: '莲湖区',
      cid: '01012507'
    },
    {
      cityCode: '0101250711',
      cityname: '阎良区',
      cid: '01012507'
    },
    {
      cityCode: '0101250702',
      cityname: '碑林区',
      cid: '01012507'
    },
    {
      cityCode: '0101250502',
      cityname: '耀州区',
      cid: '01012505'
    },
    {
      cityCode: '0101250504',
      cityname: '印台区',
      cid: '01012505'
    },
    {
      cityCode: '0101250501',
      cityname: '王益区',
      cid: '01012505'
    },
    {
      cityCode: '0101250503',
      cityname: '宜君县',
      cid: '01012505'
    },
    {
      cityCode: '01012505',
      cityname: '铜川市',
      cid: '01012505'
    },
    {
      cityCode: '0101220103',
      cityname: '甘德县',
      cid: '01012201'
    },
    {
      cityCode: '0101220101',
      cityname: '班玛县',
      cid: '01012201'
    },
    {
      cityCode: '0101220105',
      cityname: '玛多县',
      cid: '01012201'
    },
    {
      cityCode: '01012201',
      cityname: '果洛州',
      cid: '01012201'
    },
    {
      cityCode: '0101220104',
      cityname: '久治县',
      cid: '01012201'
    },
    {
      cityCode: '0101220102',
      cityname: '达日县',
      cid: '01012201'
    },
    {
      cityCode: '0101220106',
      cityname: '玛沁县',
      cid: '01012201'
    },
    {
      cityCode: '0101220206',
      cityname: '循化县',
      cid: '01012202'
    },
    {
      cityCode: '0101220204',
      cityname: '民和县',
      cid: '01012202'
    },
    {
      cityCode: '01012202',
      cityname: '海东市',
      cid: '01012202'
    },
    {
      cityCode: '0101220203',
      cityname: '乐都区',
      cid: '01012202'
    },
    {
      cityCode: '0101220205',
      cityname: '平安区',
      cid: '01012202'
    },
    {
      cityCode: '0101220202',
      cityname: '化隆县',
      cid: '01012202'
    },
    {
      cityCode: '0101220201',
      cityname: '互助县',
      cid: '01012202'
    },
    {
      cityCode: '01012204',
      cityname: '海北州',
      cid: '01012204'
    },
    {
      cityCode: '0101220404',
      cityname: '祁连县',
      cid: '01012204'
    },
    {
      cityCode: '0101220401',
      cityname: '刚察县',
      cid: '01012204'
    },
    {
      cityCode: '0101220402',
      cityname: '海晏县',
      cid: '01012204'
    },
    {
      cityCode: '0101220403',
      cityname: '门源县',
      cid: '01012204'
    },
    {
      cityCode: '0101220504',
      cityname: '同德县',
      cid: '01012205'
    },
    {
      cityCode: '0101220501',
      cityname: '共和县',
      cid: '01012205'
    },
    {
      cityCode: '0101220505',
      cityname: '兴海县',
      cid: '01012205'
    },
    {
      cityCode: '01012205',
      cityname: '海南州',
      cid: '01012205'
    },
    {
      cityCode: '0101220503',
      cityname: '贵南县',
      cid: '01012205'
    },
    {
      cityCode: '0101220502',
      cityname: '贵德县',
      cid: '01012205'
    },
    {
      cityCode: '0101220303',
      cityname: '格尔木市',
      cid: '01012203'
    },
    {
      cityCode: '0101220304',
      cityname: '天峻县',
      cid: '01012203'
    },
    {
      cityCode: '0101220302',
      cityname: '都兰县',
      cid: '01012203'
    },
    {
      cityCode: '01012203',
      cityname: '海西州',
      cid: '01012203'
    },
    {
      cityCode: '0101220305',
      cityname: '乌兰县',
      cid: '01012203'
    },
    {
      cityCode: '0101220301',
      cityname: '德令哈市',
      cid: '01012203'
    },
    {
      cityCode: '0101220308',
      cityname: '茫崖市',
      cid: '01012203'
    },
    {
      cityCode: '0101220306',
      cityname: '大柴旦行政区',
      cid: '01012203'
    },
    {
      cityCode: '0101220803',
      cityname: '曲麻莱县',
      cid: '01012208'
    },
    {
      cityCode: '0101220807',
      cityname: '玉树市',
      cid: '01012208'
    },
    {
      cityCode: '0101220802',
      cityname: '囊谦县',
      cid: '01012208'
    },
    {
      cityCode: '0101220806',
      cityname: '治多县',
      cid: '01012208'
    },
    {
      cityCode: '0101220801',
      cityname: '称多县',
      cid: '01012208'
    },
    {
      cityCode: '01012208',
      cityname: '玉树州',
      cid: '01012208'
    },
    {
      cityCode: '0101220805',
      cityname: '杂多县',
      cid: '01012208'
    },
    {
      cityCode: '01012207',
      cityname: '西宁市',
      cid: '01012207'
    },
    {
      cityCode: '0101220707',
      cityname: '湟中区',
      cid: '01012207'
    },
    {
      cityCode: '0101220711',
      cityname: '城北区',
      cid: '01012207'
    },
    {
      cityCode: '0101220710',
      cityname: '城西区',
      cid: '01012207'
    },
    {
      cityCode: '0101220709',
      cityname: '城中区',
      cid: '01012207'
    },
    {
      cityCode: '0101220708',
      cityname: '城东区',
      cid: '01012207'
    },
    {
      cityCode: '0101220706',
      cityname: '湟源县',
      cid: '01012207'
    },
    {
      cityCode: '0101220705',
      cityname: '大通县',
      cid: '01012207'
    },
    {
      cityCode: '0101220601',
      cityname: '河南县',
      cid: '01012206'
    },
    {
      cityCode: '0101220602',
      cityname: '尖扎县',
      cid: '01012206'
    },
    {
      cityCode: '0101220603',
      cityname: '同仁市',
      cid: '01012206'
    },
    {
      cityCode: '01012206',
      cityname: '黄南州',
      cid: '01012206'
    },
    {
      cityCode: '0101220604',
      cityname: '泽库县',
      cid: '01012206'
    },
    {
      cityCode: '01013111',
      cityname: '荃湾',
      cid: '01013101'
    },
    {
      cityCode: '01013109',
      cityname: '离岛区',
      cid: '01013101'
    },
    {
      cityCode: '01013108',
      cityname: '葵青',
      cid: '01013101'
    },
    {
      cityCode: '01013106',
      cityname: '黄大仙',
      cid: '01013101'
    },
    {
      cityCode: '01013105',
      cityname: '观塘',
      cid: '01013101'
    },
    {
      cityCode: '01013103',
      cityname: '大埔',
      cid: '01013101'
    },
    {
      cityCode: '01013103_1',
      cityname: '北区',
      cid: '01013101'
    },
    {
      cityCode: '01013113_1',
      cityname: '九龙城',
      cid: '01013101'
    },
    {
      cityCode: '01013117_2',
      cityname: '南区',
      cid: '01013101'
    },
    {
      cityCode: '01013117_1',
      cityname: '东区',
      cid: '01013101'
    },
    {
      cityCode: '01013119',
      cityname: '中西区',
      cid: '01013101'
    },
    {
      cityCode: '01013118',
      cityname: '元朗',
      cid: '01013101'
    },
    {
      cityCode: '01013117',
      cityname: '油尖旺',
      cid: '01013101'
    },
    {
      cityCode: '01013116',
      cityname: '西贡',
      cid: '01013101'
    },
    {
      cityCode: '01013115',
      cityname: '湾仔',
      cid: '01013101'
    },
    {
      cityCode: '01013114',
      cityname: '屯门',
      cid: '01013101'
    },
    {
      cityCode: '01013113',
      cityname: '深水埗',
      cid: '01013101'
    },
    {
      cityCode: '01013112',
      cityname: '沙田',
      cid: '01013101'
    },
    {
      cityCode: '01011310',
      cityname: '七台河市',
      cid: '01011310'
    },
    {
      cityCode: '0101131004',
      cityname: '新兴区',
      cid: '01011310'
    },
    {
      cityCode: '0101131003',
      cityname: '桃山区',
      cid: '01011310'
    },
    {
      cityCode: '0101131002',
      cityname: '茄子河区',
      cid: '01011310'
    },
    {
      cityCode: '0101131001',
      cityname: '勃利县',
      cid: '01011310'
    },
    {
      cityCode: '0101131304',
      cityname: '嘉荫县',
      cid: '01011313'
    },
    {
      cityCode: '01011313',
      cityname: '伊春市',
      cid: '01011313'
    },
    {
      cityCode: '0101131318',
      cityname: '伊美区',
      cid: '01011313'
    },
    {
      cityCode: '0101131305',
      cityname: '金林区',
      cid: '01011313'
    },
    {
      cityCode: '0101131317',
      cityname: '友好区',
      cid: '01011313'
    },
    {
      cityCode: '0101131315',
      cityname: '丰林县',
      cid: '01011313'
    },
    {
      cityCode: '0101131310',
      cityname: '铁力市',
      cid: '01011313'
    },
    {
      cityCode: '0101131309',
      cityname: '汤旺县',
      cid: '01011313'
    },
    {
      cityCode: '0101131307',
      cityname: '南岔县',
      cid: '01011313'
    },
    {
      cityCode: '0101131302',
      cityname: '大箐山县',
      cid: '01011313'
    },
    {
      cityCode: '0101131301',
      cityname: '乌翠区',
      cid: '01011313'
    },
    {
      cityCode: '0101130701',
      cityname: '东风区',
      cid: '01011307'
    },
    {
      cityCode: '0101130711',
      cityname: '郊区',
      cid: '01011307'
    },
    {
      cityCode: '0101130712',
      cityname: '向阳区',
      cid: '01011307'
    },
    {
      cityCode: '0101130704',
      cityname: '桦川县',
      cid: '01011307'
    },
    {
      cityCode: '0101130705',
      cityname: '桦南县',
      cid: '01011307'
    },
    {
      cityCode: '0101130702',
      cityname: '抚远市',
      cid: '01011307'
    },
    {
      cityCode: '0101130703',
      cityname: '富锦市',
      cid: '01011307'
    },
    {
      cityCode: '0101130708',
      cityname: '汤原县',
      cid: '01011307'
    },
    {
      cityCode: '01011307',
      cityname: '佳木斯市',
      cid: '01011307'
    },
    {
      cityCode: '0101130709',
      cityname: '同江市',
      cid: '01011307'
    },
    {
      cityCode: '0101130707',
      cityname: '前进区',
      cid: '01011307'
    },
    {
      cityCode: '0101131102',
      cityname: '宝山区',
      cid: '01011311'
    },
    {
      cityCode: '0101131101',
      cityname: '宝清县',
      cid: '01011311'
    },
    {
      cityCode: '0101131103',
      cityname: '集贤县',
      cid: '01011311'
    },
    {
      cityCode: '01011311',
      cityname: '双鸭山市',
      cid: '01011311'
    },
    {
      cityCode: '0101131107',
      cityname: '四方台区',
      cid: '01011311'
    },
    {
      cityCode: '0101131105',
      cityname: '岭东区',
      cid: '01011311'
    },
    {
      cityCode: '0101131104',
      cityname: '尖山区',
      cid: '01011311'
    },
    {
      cityCode: '0101131106',
      cityname: '饶河县',
      cid: '01011311'
    },
    {
      cityCode: '0101131108',
      cityname: '友谊县',
      cid: '01011311'
    },
    {
      cityCode: '0101200516',
      cityname: '加格达奇区',
      cid: '01012005'
    },
    {
      cityCode: '0101130306',
      cityname: '方正县',
      cid: '01011303'
    },
    {
      cityCode: '0101130312',
      cityname: '双城区',
      cid: '01011303'
    },
    {
      cityCode: '0101130317',
      cityname: '延寿县',
      cid: '01011303'
    },
    {
      cityCode: '01011303',
      cityname: '哈尔滨市',
      cid: '01011303'
    },
    {
      cityCode: '0101130302',
      cityname: '巴彦县',
      cid: '01011303'
    },
    {
      cityCode: '0101130318',
      cityname: '依兰县',
      cid: '01011303'
    },
    {
      cityCode: '0101130315',
      cityname: '五常市',
      cid: '01011303'
    },
    {
      cityCode: '0101130311',
      cityname: '尚志市',
      cid: '01011303'
    },
    {
      cityCode: '0101130314',
      cityname: '通河县',
      cid: '01011303'
    },
    {
      cityCode: '0101130316',
      cityname: '香坊区',
      cid: '01011303'
    },
    {
      cityCode: '0101130307',
      cityname: '呼兰区',
      cid: '01011303'
    },
    {
      cityCode: '0101130313',
      cityname: '松北区',
      cid: '01011303'
    },
    {
      cityCode: '0101130310',
      cityname: '平房区',
      cid: '01011303'
    },
    {
      cityCode: '0101130308',
      cityname: '木兰县',
      cid: '01011303'
    },
    {
      cityCode: '0101130309',
      cityname: '南岗区',
      cid: '01011303'
    },
    {
      cityCode: '0101130301',
      cityname: '阿城区',
      cid: '01011303'
    },
    {
      cityCode: '0101130303',
      cityname: '宾县',
      cid: '01011303'
    },
    {
      cityCode: '0101130305',
      cityname: '道外区',
      cid: '01011303'
    },
    {
      cityCode: '0101130304',
      cityname: '道里区',
      cid: '01011303'
    },
    {
      cityCode: '0101130204',
      cityname: '呼中区',
      cid: '01011302'
    },
    {
      cityCode: '01011302',
      cityname: '大兴安岭',
      cid: '01011302'
    },
    {
      cityCode: '0101130202',
      cityname: '漠河市',
      cid: '01011302'
    },
    {
      cityCode: '0101130205',
      cityname: '新林区',
      cid: '01011302'
    },
    {
      cityCode: '0101130203',
      cityname: '塔河县',
      cid: '01011302'
    },
    {
      cityCode: '0101130201',
      cityname: '呼玛县',
      cid: '01011302'
    },
    {
      cityCode: '0101130106',
      cityname: '让胡路区',
      cid: '01011301'
    },
    {
      cityCode: '0101130105',
      cityname: '龙凤区',
      cid: '01011301'
    },
    {
      cityCode: '0101130103',
      cityname: '红岗区',
      cid: '01011301'
    },
    {
      cityCode: '0101130101',
      cityname: '大同区',
      cid: '01011301'
    },
    {
      cityCode: '0101130108',
      cityname: '肇源县',
      cid: '01011301'
    },
    {
      cityCode: '0101130109',
      cityname: '肇州县',
      cid: '01011301'
    },
    {
      cityCode: '0101130102',
      cityname: '杜尔伯特县',
      cid: '01011301'
    },
    {
      cityCode: '0101130104',
      cityname: '林甸县',
      cid: '01011301'
    },
    {
      cityCode: '01011301',
      cityname: '大庆市',
      cid: '01011301'
    },
    {
      cityCode: '0101130107',
      cityname: '萨尔图区',
      cid: '01011301'
    },
    {
      cityCode: '0101130803',
      cityname: '东宁市',
      cid: '01011308'
    },
    {
      cityCode: '0101130805',
      cityname: '林口县',
      cid: '01011308'
    },
    {
      cityCode: '01011308',
      cityname: '牡丹江市',
      cid: '01011308'
    },
    {
      cityCode: '0101130804',
      cityname: '海林市',
      cid: '01011308'
    },
    {
      cityCode: '0101130807',
      cityname: '宁安市',
      cid: '01011308'
    },
    {
      cityCode: '0101130806',
      cityname: '穆棱市',
      cid: '01011308'
    },
    {
      cityCode: '0101130810',
      cityname: '阳明区',
      cid: '01011308'
    },
    {
      cityCode: '0101130809',
      cityname: '西安区',
      cid: '01011308'
    },
    {
      cityCode: '0101130802',
      cityname: '东安区',
      cid: '01011308'
    },
    {
      cityCode: '0101130801',
      cityname: '爱民区',
      cid: '01011308'
    },
    {
      cityCode: '0101130808',
      cityname: '绥芬河市',
      cid: '01011308'
    },
    {
      cityCode: '0101131204',
      cityname: '兰西县',
      cid: '01011312'
    },
    {
      cityCode: '0101131203',
      cityname: '海伦市',
      cid: '01011312'
    },
    {
      cityCode: '01011312',
      cityname: '绥化市',
      cid: '01011312'
    },
    {
      cityCode: '0101131209',
      cityname: '望奎县',
      cid: '01011312'
    },
    {
      cityCode: '0101131207',
      cityname: '庆安县',
      cid: '01011312'
    },
    {
      cityCode: '0101131208',
      cityname: '绥棱县',
      cid: '01011312'
    },
    {
      cityCode: '0101131205',
      cityname: '明水县',
      cid: '01011312'
    },
    {
      cityCode: '0101131206',
      cityname: '青冈县',
      cid: '01011312'
    },
    {
      cityCode: '0101131201',
      cityname: '安达市',
      cid: '01011312'
    },
    {
      cityCode: '0101131202',
      cityname: '北林区',
      cid: '01011312'
    },
    {
      cityCode: '0101131210',
      cityname: '肇东市',
      cid: '01011312'
    },
    {
      cityCode: '0101130603',
      cityname: '恒山区',
      cid: '01011306'
    },
    {
      cityCode: '0101130602',
      cityname: '滴道区',
      cid: '01011306'
    },
    {
      cityCode: '0101130608',
      cityname: '麻山区',
      cid: '01011306'
    },
    {
      cityCode: '0101130601',
      cityname: '城子河区',
      cid: '01011306'
    },
    {
      cityCode: '0101130606',
      cityname: '鸡冠区',
      cid: '01011306'
    },
    {
      cityCode: '0101130607',
      cityname: '梨树区',
      cid: '01011306'
    },
    {
      cityCode: '0101130609',
      cityname: '密山市',
      cid: '01011306'
    },
    {
      cityCode: '01011306',
      cityname: '鸡西市',
      cid: '01011306'
    },
    {
      cityCode: '0101130604',
      cityname: '虎林市',
      cid: '01011306'
    },
    {
      cityCode: '0101130605',
      cityname: '鸡东县',
      cid: '01011306'
    },
    {
      cityCode: '0101130408',
      cityname: '兴山区',
      cid: '01011304'
    },
    {
      cityCode: '0101130403',
      cityname: '萝北县',
      cid: '01011304'
    },
    {
      cityCode: '0101130407',
      cityname: '兴安区',
      cid: '01011304'
    },
    {
      cityCode: '0101130404',
      cityname: '南山区',
      cid: '01011304'
    },
    {
      cityCode: '0101130405',
      cityname: '绥滨县',
      cid: '01011304'
    },
    {
      cityCode: '0101130402',
      cityname: '工农区',
      cid: '01011304'
    },
    {
      cityCode: '0101130401',
      cityname: '东山区',
      cid: '01011304'
    },
    {
      cityCode: '0101130406',
      cityname: '向阳区',
      cid: '01011304'
    },
    {
      cityCode: '01011304',
      cityname: '鹤岗市',
      cid: '01011304'
    },
    {
      cityCode: '0101130501',
      cityname: '爱辉区',
      cid: '01011305'
    },
    {
      cityCode: '0101130505',
      cityname: '五大连池市',
      cid: '01011305'
    },
    {
      cityCode: '01011305',
      cityname: '黑河市',
      cid: '01011305'
    },
    {
      cityCode: '0101130503',
      cityname: '嫩江市',
      cid: '01011305'
    },
    {
      cityCode: '0101130504',
      cityname: '孙吴县',
      cid: '01011305'
    },
    {
      cityCode: '0101130502',
      cityname: '北安市',
      cid: '01011305'
    },
    {
      cityCode: '0101130506',
      cityname: '逊克县',
      cid: '01011305'
    },
    {
      cityCode: '0101130905',
      cityname: '甘南县',
      cid: '01011309'
    },
    {
      cityCode: '0101130916',
      cityname: '克东县',
      cid: '01011309'
    },
    {
      cityCode: '0101130902',
      cityname: '拜泉县',
      cid: '01011309'
    },
    {
      cityCode: '0101130914',
      cityname: '铁锋区',
      cid: '01011309'
    },
    {
      cityCode: '0101130912',
      cityname: '碾子山区',
      cid: '01011309'
    },
    {
      cityCode: '0101130911',
      cityname: '讷河市',
      cid: '01011309'
    },
    {
      cityCode: '0101130910',
      cityname: '梅里斯达斡尔族区',
      cid: '01011309'
    },
    {
      cityCode: '0101130915',
      cityname: '依安县',
      cid: '01011309'
    },
    {
      cityCode: '0101130909',
      cityname: '龙沙区',
      cid: '01011309'
    },
    {
      cityCode: '0101130904',
      cityname: '富裕县',
      cid: '01011309'
    },
    {
      cityCode: '0101130908',
      cityname: '龙江县',
      cid: '01011309'
    },
    {
      cityCode: '0101130906',
      cityname: '建华区',
      cid: '01011309'
    },
    {
      cityCode: '0101130907',
      cityname: '克山县',
      cid: '01011309'
    },
    {
      cityCode: '0101130913',
      cityname: '泰来县',
      cid: '01011309'
    },
    {
      cityCode: '0101130903',
      cityname: '富拉尔基区',
      cid: '01011309'
    },
    {
      cityCode: '0101130901',
      cityname: '昂昂溪区',
      cid: '01011309'
    },
    {
      cityCode: '01011309',
      cityname: '齐齐哈尔',
      cid: '01011309'
    }
  ],
  province: [
    {
      id: 1,
      province: '上海市'
    },
    {
      id: 2,
      province: '云南省'
    },
    {
      id: 3,
      province: '内蒙古自治区'
    },
    {
      id: 4,
      province: '北京市'
    },
    {
      id: 5,
      province: '台湾'
    },
    {
      id: 6,
      province: '吉林省'
    },
    {
      id: 7,
      province: '四川省'
    },
    {
      id: 8,
      province: '天津市'
    },
    {
      id: 9,
      province: '宁夏回族自治区'
    },
    {
      id: 10,
      province: '安徽省'
    },
    {
      id: 11,
      province: '山东省'
    },
    {
      id: 12,
      province: '山西省'
    },
    {
      id: 13,
      province: '广东省'
    },
    {
      id: 14,
      province: '广西壮族自治区'
    },
    {
      id: 15,
      province: '新疆维吾尔自治区'
    },
    {
      id: 16,
      province: '江苏省'
    },
    {
      id: 17,
      province: '江西省'
    },
    {
      id: 18,
      province: '河北省'
    },
    {
      id: 19,
      province: '河南省'
    },
    {
      id: 20,
      province: '浙江省'
    },
    {
      id: 21,
      province: '海南省'
    },
    {
      id: 22,
      province: '湖北省'
    },
    {
      id: 23,
      province: '湖南省'
    },
    {
      id: 24,
      province: '澳门'
    },
    {
      id: 25,
      province: '甘肃省'
    },
    {
      id: 26,
      province: '福建省'
    },
    {
      id: 27,
      province: '西藏自治区'
    },
    {
      id: 28,
      province: '贵州省'
    },
    {
      id: 29,
      province: '辽宁省'
    },
    {
      id: 30,
      province: '重庆市'
    },
    {
      id: 31,
      province: '陕西省'
    },
    {
      id: 32,
      province: '青海省'
    },
    {
      id: 33,
      province: '香港'
    },
    {
      id: 34,
      province: '黑龙江省'
    }
  ],
  city: [
    {
      cityname: '上海市',
      parentCode: '01012601',
      cid: 1
    },
    {
      cityname: '临沧市',
      parentCode: '01013309',
      cid: 2
    },
    {
      cityname: '丽江市',
      parentCode: '01013308',
      cid: 2
    },
    {
      cityname: '保山市',
      parentCode: '01013301',
      cid: 2
    },
    {
      cityname: '大理州',
      parentCode: '01013303',
      cid: 2
    },
    {
      cityname: '德宏州',
      parentCode: '01013304',
      cid: 2
    },
    {
      cityname: '怒江州',
      parentCode: '01013310',
      cid: 2
    },
    {
      cityname: '文山州',
      parentCode: '01013313',
      cid: 2
    },
    {
      cityname: '昆明市',
      parentCode: '01013307',
      cid: 2
    },
    {
      cityname: '昭通市',
      parentCode: '01013316',
      cid: 2
    },
    {
      cityname: '普洱市',
      parentCode: '01013311',
      cid: 2
    },
    {
      cityname: '曲靖市',
      parentCode: '01013312',
      cid: 2
    },
    {
      cityname: '楚雄州',
      parentCode: '01013302',
      cid: 2
    },
    {
      cityname: '玉溪市',
      parentCode: '01013315',
      cid: 2
    },
    {
      cityname: '红河州',
      parentCode: '01013306',
      cid: 2
    },
    {
      cityname: '西双版纳',
      parentCode: '01013314',
      cid: 2
    },
    {
      cityname: '迪庆州',
      parentCode: '01013305',
      cid: 2
    },
    {
      cityname: '乌兰察布',
      parentCode: '01012012',
      cid: 3
    },
    {
      cityname: '乌海市',
      parentCode: '01012007',
      cid: 3
    },
    {
      cityname: '兴安盟',
      parentCode: '01012010',
      cid: 3
    },
    {
      cityname: '包头市',
      parentCode: '01012001',
      cid: 3
    },
    {
      cityname: '呼伦贝尔',
      parentCode: '01012005',
      cid: 3
    },
    {
      cityname: '呼和浩特',
      parentCode: '01012004',
      cid: 3
    },
    {
      cityname: '巴彦淖尔',
      parentCode: '01012011',
      cid: 3
    },
    {
      cityname: '赤峰市',
      parentCode: '01012002',
      cid: 3
    },
    {
      cityname: '通辽市',
      parentCode: '01012006',
      cid: 3
    },
    {
      cityname: '鄂尔多斯',
      parentCode: '01012003',
      cid: 3
    },
    {
      cityname: '锡林郭勒',
      parentCode: '01012009',
      cid: 3
    },
    {
      cityname: '阿拉善盟',
      parentCode: '01012008',
      cid: 3
    },
    {
      cityname: '北京市',
      parentCode: '01010101',
      cid: 4
    },
    {
      cityname: '云林县',
      parentCode: '0101280302',
      cid: 5
    },
    {
      cityname: '南投县',
      parentCode: '0101280306',
      cid: 5
    },
    {
      cityname: '台东市',
      parentCode: '0101280307',
      cid: 5
    },
    {
      cityname: '台中市',
      parentCode: '01012803',
      cid: 5
    },
    {
      cityname: '台北市',
      parentCode: '01012801',
      cid: 5
    },
    {
      cityname: '台南市',
      parentCode: '0101280202',
      cid: 5
    },
    {
      cityname: '嘉义县',
      parentCode: '0101280304_1',
      cid: 5
    },
    {
      cityname: '嘉义市',
      parentCode: '0101280304',
      cid: 5
    },
    {
      cityname: '基隆市',
      parentCode: '01012801_2',
      cid: 5
    },
    {
      cityname: '宜兰县',
      parentCode: '0101280103',
      cid: 5
    },
    {
      cityname: '屏东县',
      parentCode: '0101280201',
      cid: 5
    },
    {
      cityname: '彰化县',
      parentCode: '0101280301',
      cid: 5
    },
    {
      cityname: '新北市',
      parentCode: '01012801_1',
      cid: 5
    },
    {
      cityname: '新竹县',
      parentCode: '0101280102',
      cid: 5
    },
    {
      cityname: '新竹市',
      parentCode: '0101280101_1',
      cid: 5
    },
    {
      cityname: '桃园市',
      parentCode: '0101280101',
      cid: 5
    },
    {
      cityname: '澎湖县',
      parentCode: '0101280202_1',
      cid: 5
    },
    {
      cityname: '花莲县',
      parentCode: '0101280303',
      cid: 5
    },
    {
      cityname: '苗栗县',
      parentCode: '0101280305',
      cid: 5
    },
    {
      cityname: '连江县',
      parentCode: '01012801_3',
      cid: 5
    },
    {
      cityname: '高雄市',
      parentCode: '01012802',
      cid: 5
    },
    {
      cityname: '吉林市',
      parentCode: '01011604',
      cid: 6
    },
    {
      cityname: '四平市',
      parentCode: '01011606',
      cid: 6
    },
    {
      cityname: '延边州',
      parentCode: '01011609',
      cid: 6
    },
    {
      cityname: '松原市',
      parentCode: '01011607',
      cid: 6
    },
    {
      cityname: '白城市',
      parentCode: '01011601',
      cid: 6
    },
    {
      cityname: '白山市',
      parentCode: '01011602',
      cid: 6
    },
    {
      cityname: '辽源市',
      parentCode: '01011605',
      cid: 6
    },
    {
      cityname: '通化市',
      parentCode: '01011608',
      cid: 6
    },
    {
      cityname: '长春市',
      parentCode: '01011603',
      cid: 6
    },
    {
      cityname: '乐山市',
      parentCode: '01012709',
      cid: 7
    },
    {
      cityname: '内江市',
      parentCode: '01012715',
      cid: 7
    },
    {
      cityname: '凉山州',
      parentCode: '01012710',
      cid: 7
    },
    {
      cityname: '南充市',
      parentCode: '01012714',
      cid: 7
    },
    {
      cityname: '宜宾市',
      parentCode: '01012719',
      cid: 7
    },
    {
      cityname: '巴中市',
      parentCode: '01012702',
      cid: 7
    },
    {
      cityname: '广元市',
      parentCode: '01012708',
      cid: 7
    },
    {
      cityname: '广安市',
      parentCode: '01012707',
      cid: 7
    },
    {
      cityname: '德阳市',
      parentCode: '01012705',
      cid: 7
    },
    {
      cityname: '成都市',
      parentCode: '01012703',
      cid: 7
    },
    {
      cityname: '攀枝花市',
      parentCode: '01012716',
      cid: 7
    },
    {
      cityname: '泸州市',
      parentCode: '01012711',
      cid: 7
    },
    {
      cityname: '甘孜州',
      parentCode: '01012706',
      cid: 7
    },
    {
      cityname: '眉山市',
      parentCode: '01012712',
      cid: 7
    },
    {
      cityname: '绵阳市',
      parentCode: '01012713',
      cid: 7
    },
    {
      cityname: '自贡市',
      parentCode: '01012721',
      cid: 7
    },
    {
      cityname: '资阳市',
      parentCode: '01012720',
      cid: 7
    },
    {
      cityname: '达州市',
      parentCode: '01012704',
      cid: 7
    },
    {
      cityname: '遂宁市',
      parentCode: '01012717',
      cid: 7
    },
    {
      cityname: '阿坝州',
      parentCode: '01012701',
      cid: 7
    },
    {
      cityname: '雅安市',
      parentCode: '01012718',
      cid: 7
    },
    {
      cityname: '天津市',
      parentCode: '01012901',
      cid: 8
    },
    {
      cityname: '中卫市',
      parentCode: '01012105',
      cid: 9
    },
    {
      cityname: '吴忠市',
      parentCode: '01012103',
      cid: 9
    },
    {
      cityname: '固原市',
      parentCode: '01012101',
      cid: 9
    },
    {
      cityname: '石嘴山市',
      parentCode: '01012102',
      cid: 9
    },
    {
      cityname: '银川市',
      parentCode: '01012104',
      cid: 9
    },
    {
      cityname: '亳州市',
      parentCode: '01010203',
      cid: 10
    },
    {
      cityname: '六安市',
      parentCode: '01010212',
      cid: 10
    },
    {
      cityname: '合肥市',
      parentCode: '01010208',
      cid: 10
    },
    {
      cityname: '安庆市',
      parentCode: '01010201',
      cid: 10
    },
    {
      cityname: '宣城市',
      parentCode: '01010217',
      cid: 10
    },
    {
      cityname: '宿州市',
      parentCode: '01010214',
      cid: 10
    },
    {
      cityname: '池州市',
      parentCode: '01010205',
      cid: 10
    },
    {
      cityname: '淮北市',
      parentCode: '01010209',
      cid: 10
    },
    {
      cityname: '淮南市',
      parentCode: '01010210',
      cid: 10
    },
    {
      cityname: '滁州市',
      parentCode: '01010206',
      cid: 10
    },
    {
      cityname: '芜湖市',
      parentCode: '01010216',
      cid: 10
    },
    {
      cityname: '蚌埠市',
      parentCode: '01010202',
      cid: 10
    },
    {
      cityname: '铜陵市',
      parentCode: '01010215',
      cid: 10
    },
    {
      cityname: '阜阳市',
      parentCode: '01010207',
      cid: 10
    },
    {
      cityname: '马鞍山市',
      parentCode: '01010213',
      cid: 10
    },
    {
      cityname: '黄山市',
      parentCode: '01010211',
      cid: 10
    },
    {
      cityname: '东营市',
      parentCode: '01012303',
      cid: 11
    },
    {
      cityname: '临沂市',
      parentCode: '01012309',
      cid: 11
    },
    {
      cityname: '威海市',
      parentCode: '01012313',
      cid: 11
    },
    {
      cityname: '德州市',
      parentCode: '01012302',
      cid: 11
    },
    {
      cityname: '日照市',
      parentCode: '01012311',
      cid: 11
    },
    {
      cityname: '枣庄市',
      parentCode: '01012316',
      cid: 11
    },
    {
      cityname: '泰安市',
      parentCode: '01012312',
      cid: 11
    },
    {
      cityname: '济南市',
      parentCode: '01012305',
      cid: 11
    },
    {
      cityname: '济宁市',
      parentCode: '01012306',
      cid: 11
    },
    {
      cityname: '淄博市',
      parentCode: '01012317',
      cid: 11
    },
    {
      cityname: '滨州市',
      parentCode: '01012301',
      cid: 11
    },
    {
      cityname: '潍坊市',
      parentCode: '01012314',
      cid: 11
    },
    {
      cityname: '烟台市',
      parentCode: '01012315',
      cid: 11
    },
    {
      cityname: '聊城市',
      parentCode: '01012308',
      cid: 11
    },
    {
      cityname: '菏泽市',
      parentCode: '01012304',
      cid: 11
    },
    {
      cityname: '青岛市',
      parentCode: '01012310',
      cid: 11
    },
    {
      cityname: '临汾市',
      parentCode: '01012405',
      cid: 12
    },
    {
      cityname: '吕梁市',
      parentCode: '01012406',
      cid: 12
    },
    {
      cityname: '大同市',
      parentCode: '01012402',
      cid: 12
    },
    {
      cityname: '太原市',
      parentCode: '01012408',
      cid: 12
    },
    {
      cityname: '忻州市',
      parentCode: '01012409',
      cid: 12
    },
    {
      cityname: '晋中市',
      parentCode: '01012404',
      cid: 12
    },
    {
      cityname: '晋城市',
      parentCode: '01012403',
      cid: 12
    },
    {
      cityname: '朔州市',
      parentCode: '01012407',
      cid: 12
    },
    {
      cityname: '运城市',
      parentCode: '01012411',
      cid: 12
    },
    {
      cityname: '长治市',
      parentCode: '01012401',
      cid: 12
    },
    {
      cityname: '阳泉市',
      parentCode: '01012410',
      cid: 12
    },
    {
      cityname: '东莞市',
      parentCode: '01010702',
      cid: 13
    },
    {
      cityname: '中山市',
      parentCode: '01010720',
      cid: 13
    },
    {
      cityname: '云浮市',
      parentCode: '01010717',
      cid: 13
    },
    {
      cityname: '佛山市',
      parentCode: '01010703',
      cid: 13
    },
    {
      cityname: '广州市',
      parentCode: '01010704',
      cid: 13
    },
    {
      cityname: '惠州市',
      parentCode: '01010706',
      cid: 13
    },
    {
      cityname: '揭阳市',
      parentCode: '01010708',
      cid: 13
    },
    {
      cityname: '梅州市',
      parentCode: '01010710',
      cid: 13
    },
    {
      cityname: '汕头市',
      parentCode: '01010712',
      cid: 13
    },
    {
      cityname: '汕尾市',
      parentCode: '01010713',
      cid: 13
    },
    {
      cityname: '江门市',
      parentCode: '01010707',
      cid: 13
    },
    {
      cityname: '河源市',
      parentCode: '01010705',
      cid: 13
    },
    {
      cityname: '深圳市',
      parentCode: '01010715',
      cid: 13
    },
    {
      cityname: '清远市',
      parentCode: '01010711',
      cid: 13
    },
    {
      cityname: '湛江市',
      parentCode: '01010718',
      cid: 13
    },
    {
      cityname: '潮州市',
      parentCode: '01010701',
      cid: 13
    },
    {
      cityname: '珠海市',
      parentCode: '01010721',
      cid: 13
    },
    {
      cityname: '肇庆市',
      parentCode: '01010719',
      cid: 13
    },
    {
      cityname: '茂名市',
      parentCode: '01010709',
      cid: 13
    },
    {
      cityname: '阳江市',
      parentCode: '01010716',
      cid: 13
    },
    {
      cityname: '韶关市',
      parentCode: '01010714',
      cid: 13
    },
    {
      cityname: '北海市',
      parentCode: '01010802',
      cid: 14
    },
    {
      cityname: '南宁市',
      parentCode: '01010811',
      cid: 14
    },
    {
      cityname: '崇左市',
      parentCode: '01010803',
      cid: 14
    },
    {
      cityname: '来宾市',
      parentCode: '01010809',
      cid: 14
    },
    {
      cityname: '柳州市',
      parentCode: '01010810',
      cid: 14
    },
    {
      cityname: '桂林市',
      parentCode: '01010806',
      cid: 14
    },
    {
      cityname: '梧州市',
      parentCode: '01010813',
      cid: 14
    },
    {
      cityname: '河池市',
      parentCode: '01010807',
      cid: 14
    },
    {
      cityname: '玉林市',
      parentCode: '01010814',
      cid: 14
    },
    {
      cityname: '百色市',
      parentCode: '01010801',
      cid: 14
    },
    {
      cityname: '贵港市',
      parentCode: '01010805',
      cid: 14
    },
    {
      cityname: '贺州市',
      parentCode: '01010808',
      cid: 14
    },
    {
      cityname: '钦州市',
      parentCode: '01010812',
      cid: 14
    },
    {
      cityname: '防城港市',
      parentCode: '01010804',
      cid: 14
    },
    {
      cityname: '乌鲁木齐',
      parentCode: '01013213',
      cid: 15
    },
    {
      cityname: '五家渠市',
      parentCode: '101131801',
      cid: 15
    },
    {
      cityname: '伊犁州',
      parentCode: '01013214',
      cid: 15
    },
    {
      cityname: '克孜勒苏',
      parentCode: '01013210',
      cid: 15
    },
    {
      cityname: '克拉玛依',
      parentCode: '01013209',
      cid: 15
    },
    {
      cityname: '北屯市',
      parentCode: '0101320208',
      cid: 15
    },
    {
      cityname: '博尔塔拉',
      parentCode: '01013204',
      cid: 15
    },
    {
      cityname: '双河市',
      parentCode: '0101320405',
      cid: 15
    },
    {
      cityname: '可克达拉',
      parentCode: '0101321412',
      cid: 15
    },
    {
      cityname: '吐鲁番市',
      parentCode: '01013212',
      cid: 15
    },
    {
      cityname: '和田地区',
      parentCode: '01013207',
      cid: 15
    },
    {
      cityname: '哈密市',
      parentCode: '01013206',
      cid: 15
    },
    {
      cityname: '喀什地区',
      parentCode: '01013208',
      cid: 15
    },
    {
      cityname: '图木舒克',
      parentCode: '101131701',
      cid: 15
    },
    {
      cityname: '塔城地区',
      parentCode: '01013211',
      cid: 15
    },
    {
      cityname: '巴音郭楞',
      parentCode: '01013203',
      cid: 15
    },
    {
      cityname: '昆玉市',
      parentCode: '0101320709',
      cid: 15
    },
    {
      cityname: '昌吉州',
      parentCode: '01013205',
      cid: 15
    },
    {
      cityname: '石河子市',
      parentCode: '0101321501',
      cid: 15
    },
    {
      cityname: '铁门关市',
      parentCode: '0101320314',
      cid: 15
    },
    {
      cityname: '阿克苏',
      parentCode: '01013201',
      cid: 15
    },
    {
      cityname: '阿勒泰',
      parentCode: '01013202',
      cid: 15
    },
    {
      cityname: '阿拉尔市',
      parentCode: '0101321502',
      cid: 15
    },
    {
      cityname: '南京市',
      parentCode: '01011704',
      cid: 16
    },
    {
      cityname: '南通市',
      parentCode: '01011705',
      cid: 16
    },
    {
      cityname: '宿迁市',
      parentCode: '01011707',
      cid: 16
    },
    {
      cityname: '常州市',
      parentCode: '01011701',
      cid: 16
    },
    {
      cityname: '徐州市',
      parentCode: '01011710',
      cid: 16
    },
    {
      cityname: '扬州市',
      parentCode: '01011712',
      cid: 16
    },
    {
      cityname: '无锡市',
      parentCode: '01011709',
      cid: 16
    },
    {
      cityname: '泰州市',
      parentCode: '01011708',
      cid: 16
    },
    {
      cityname: '淮安市',
      parentCode: '01011702',
      cid: 16
    },
    {
      cityname: '盐城市',
      parentCode: '01011711',
      cid: 16
    },
    {
      cityname: '苏州市',
      parentCode: '01011706',
      cid: 16
    },
    {
      cityname: '连云港市',
      parentCode: '01011703',
      cid: 16
    },
    {
      cityname: '镇江市',
      parentCode: '01011713',
      cid: 16
    },
    {
      cityname: '上饶市',
      parentCode: '01011808',
      cid: 17
    },
    {
      cityname: '九江市',
      parentCode: '01011805',
      cid: 17
    },
    {
      cityname: '南昌市',
      parentCode: '01011806',
      cid: 17
    },
    {
      cityname: '吉安市',
      parentCode: '01011803',
      cid: 17
    },
    {
      cityname: '宜春市',
      parentCode: '01011810',
      cid: 17
    },
    {
      cityname: '抚州市',
      parentCode: '01011801',
      cid: 17
    },
    {
      cityname: '新余市',
      parentCode: '01011809',
      cid: 17
    },
    {
      cityname: '景德镇市',
      parentCode: '01011804',
      cid: 17
    },
    {
      cityname: '萍乡市',
      parentCode: '01011807',
      cid: 17
    },
    {
      cityname: '赣州市',
      parentCode: '01011802',
      cid: 17
    },
    {
      cityname: '鹰潭市',
      parentCode: '01011811',
      cid: 17
    },
    {
      cityname: '保定市',
      parentCode: '01011101',
      cid: 18
    },
    {
      cityname: '唐山市',
      parentCode: '01011109',
      cid: 18
    },
    {
      cityname: '廊坊市',
      parentCode: '01011106',
      cid: 18
    },
    {
      cityname: '张家口市',
      parentCode: '01011111',
      cid: 18
    },
    {
      cityname: '承德市',
      parentCode: '01011103',
      cid: 18
    },
    {
      cityname: '沧州市',
      parentCode: '01011102',
      cid: 18
    },
    {
      cityname: '石家庄市',
      parentCode: '01011108',
      cid: 18
    },
    {
      cityname: '秦皇岛市',
      parentCode: '01011107',
      cid: 18
    },
    {
      cityname: '衡水市',
      parentCode: '01011105',
      cid: 18
    },
    {
      cityname: '邢台市',
      parentCode: '01011110',
      cid: 18
    },
    {
      cityname: '邯郸市',
      parentCode: '01011104',
      cid: 18
    },
    {
      cityname: '三门峡市',
      parentCode: '01011210',
      cid: 19
    },
    {
      cityname: '信阳市',
      parentCode: '01011214',
      cid: 19
    },
    {
      cityname: '南阳市',
      parentCode: '01011207',
      cid: 19
    },
    {
      cityname: '周口市',
      parentCode: '01011217',
      cid: 19
    },
    {
      cityname: '商丘市',
      parentCode: '01011211',
      cid: 19
    },
    {
      cityname: '安阳市',
      parentCode: '01011201',
      cid: 19
    },
    {
      cityname: '平顶山市',
      parentCode: '01011208',
      cid: 19
    },
    {
      cityname: '开封市',
      parentCode: '01011204',
      cid: 19
    },
    {
      cityname: '新乡市',
      parentCode: '01011213',
      cid: 19
    },
    {
      cityname: '洛阳市',
      parentCode: '01011206',
      cid: 19
    },
    {
      cityname: '济源市',
      parentCode: '0101121201',
      cid: 19
    },
    {
      cityname: '漯河市',
      parentCode: '01011205',
      cid: 19
    },
    {
      cityname: '濮阳市',
      parentCode: '01011209',
      cid: 19
    },
    {
      cityname: '焦作市',
      parentCode: '01011203',
      cid: 19
    },
    {
      cityname: '许昌市',
      parentCode: '01011215',
      cid: 19
    },
    {
      cityname: '郑州市',
      parentCode: '01011216',
      cid: 19
    },
    {
      cityname: '驻马店市',
      parentCode: '01011218',
      cid: 19
    },
    {
      cityname: '鹤壁市',
      parentCode: '01011202',
      cid: 19
    },
    {
      cityname: '丽水市',
      parentCode: '01013405',
      cid: 20
    },
    {
      cityname: '台州市',
      parentCode: '01013409',
      cid: 20
    },
    {
      cityname: '嘉兴市',
      parentCode: '01013403',
      cid: 20
    },
    {
      cityname: '宁波市',
      parentCode: '01013406',
      cid: 20
    },
    {
      cityname: '杭州市',
      parentCode: '01013401',
      cid: 20
    },
    {
      cityname: '温州市',
      parentCode: '01013410',
      cid: 20
    },
    {
      cityname: '湖州市',
      parentCode: '01013402',
      cid: 20
    },
    {
      cityname: '绍兴市',
      parentCode: '01013408',
      cid: 20
    },
    {
      cityname: '舟山市',
      parentCode: '01013411',
      cid: 20
    },
    {
      cityname: '衢州市',
      parentCode: '01013407',
      cid: 20
    },
    {
      cityname: '金华市',
      parentCode: '01013404',
      cid: 20
    },
    {
      cityname: '万宁市',
      parentCode: '01011016',
      cid: 21
    },
    {
      cityname: '三亚市',
      parentCode: '01011014',
      cid: 21
    },
    {
      cityname: '三沙市',
      parentCode: '101310301',
      cid: 21
    },
    {
      cityname: '东方市',
      parentCode: '01011007',
      cid: 21
    },
    {
      cityname: '临高县',
      parentCode: '01011010',
      cid: 21
    },
    {
      cityname: '乐东县',
      parentCode: '01011009',
      cid: 21
    },
    {
      cityname: '五指山市',
      parentCode: '01011018',
      cid: 21
    },
    {
      cityname: '保亭县',
      parentCode: '01011002',
      cid: 21
    },
    {
      cityname: '儋州市',
      parentCode: '01011005',
      cid: 21
    },
    {
      cityname: '定安县',
      parentCode: '01011006',
      cid: 21
    },
    {
      cityname: '屯昌县',
      parentCode: '01011015',
      cid: 21
    },
    {
      cityname: '文昌市',
      parentCode: '0101101701',
      cid: 21
    },
    {
      cityname: '昌江县',
      parentCode: '01011003',
      cid: 21
    },
    {
      cityname: '海口市',
      parentCode: '01011008',
      cid: 21
    },
    {
      cityname: '澄迈县',
      parentCode: '01011004',
      cid: 21
    },
    {
      cityname: '琼中县',
      parentCode: '01011013',
      cid: 21
    },
    {
      cityname: '琼海市',
      parentCode: '01011012',
      cid: 21
    },
    {
      cityname: '白沙县',
      parentCode: '01011001',
      cid: 21
    },
    {
      cityname: '陵水县',
      parentCode: '01011011',
      cid: 21
    },
    {
      cityname: '仙桃市',
      parentCode: '0101140704',
      cid: 22
    },
    {
      cityname: '十堰市',
      parentCode: '01011408',
      cid: 22
    },
    {
      cityname: '咸宁市',
      parentCode: '01011411',
      cid: 22
    },
    {
      cityname: '天门市',
      parentCode: '0101140703',
      cid: 22
    },
    {
      cityname: '孝感市',
      parentCode: '01011413',
      cid: 22
    },
    {
      cityname: '宜昌市',
      parentCode: '01011414',
      cid: 22
    },
    {
      cityname: '恩施州',
      parentCode: '01011402',
      cid: 22
    },
    {
      cityname: '武汉市',
      parentCode: '01011410',
      cid: 22
    },
    {
      cityname: '潜江市',
      parentCode: '0101140701',
      cid: 22
    },
    {
      cityname: '神农架',
      parentCode: '0101140702',
      cid: 22
    },
    {
      cityname: '荆州市',
      parentCode: '01011406',
      cid: 22
    },
    {
      cityname: '荆门市',
      parentCode: '01011405',
      cid: 22
    },
    {
      cityname: '襄阳市',
      parentCode: '01011412',
      cid: 22
    },
    {
      cityname: '鄂州市',
      parentCode: '01011401',
      cid: 22
    },
    {
      cityname: '随州市',
      parentCode: '01011409',
      cid: 22
    },
    {
      cityname: '黄冈市',
      parentCode: '01011403',
      cid: 22
    },
    {
      cityname: '黄石市',
      parentCode: '01011404',
      cid: 22
    },
    {
      cityname: '娄底市',
      parentCode: '01011506',
      cid: 23
    },
    {
      cityname: '岳阳市',
      parentCode: '01011512',
      cid: 23
    },
    {
      cityname: '常德市',
      parentCode: '01011501',
      cid: 23
    },
    {
      cityname: '张家界市',
      parentCode: '01011513',
      cid: 23
    },
    {
      cityname: '怀化市',
      parentCode: '01011505',
      cid: 23
    },
    {
      cityname: '株洲市',
      parentCode: '01011514',
      cid: 23
    },
    {
      cityname: '永州市',
      parentCode: '01011511',
      cid: 23
    },
    {
      cityname: '湘潭市',
      parentCode: '01011508',
      cid: 23
    },
    {
      cityname: '湘西州',
      parentCode: '01011509',
      cid: 23
    },
    {
      cityname: '益阳市',
      parentCode: '01011510',
      cid: 23
    },
    {
      cityname: '衡阳市',
      parentCode: '01011504',
      cid: 23
    },
    {
      cityname: '邵阳市',
      parentCode: '01011507',
      cid: 23
    },
    {
      cityname: '郴州市',
      parentCode: '01011503',
      cid: 23
    },
    {
      cityname: '长沙市',
      parentCode: '01011502',
      cid: 23
    },
    {
      cityname: '澳门',
      parentCode: '01010301',
      cid: 24
    },
    {
      cityname: '临夏州',
      parentCode: '01010608',
      cid: 25
    },
    {
      cityname: '兰州市',
      parentCode: '01010607',
      cid: 25
    },
    {
      cityname: '嘉峪关市',
      parentCode: '01010604',
      cid: 25
    },
    {
      cityname: '天水市',
      parentCode: '01010612',
      cid: 25
    },
    {
      cityname: '定西市',
      parentCode: '01010602',
      cid: 25
    },
    {
      cityname: '平凉市',
      parentCode: '01010610',
      cid: 25
    },
    {
      cityname: '庆阳市',
      parentCode: '01010611',
      cid: 25
    },
    {
      cityname: '张掖市',
      parentCode: '01010614',
      cid: 25
    },
    {
      cityname: '武威市',
      parentCode: '01010613',
      cid: 25
    },
    {
      cityname: '甘南州',
      parentCode: '01010603',
      cid: 25
    },
    {
      cityname: '白银市',
      parentCode: '01010601',
      cid: 25
    },
    {
      cityname: '酒泉市',
      parentCode: '01010606',
      cid: 25
    },
    {
      cityname: '金昌市',
      parentCode: '01010605',
      cid: 25
    },
    {
      cityname: '陇南市',
      parentCode: '01010609',
      cid: 25
    },
    {
      cityname: '三明市',
      parentCode: '01010507',
      cid: 26
    },
    {
      cityname: '南平市',
      parentCode: '01010503',
      cid: 26
    },
    {
      cityname: '厦门市',
      parentCode: '01010508',
      cid: 26
    },
    {
      cityname: '宁德市',
      parentCode: '01010504',
      cid: 26
    },
    {
      cityname: '泉州市',
      parentCode: '01010506',
      cid: 26
    },
    {
      cityname: '漳州市',
      parentCode: '01010509',
      cid: 26
    },
    {
      cityname: '福州市',
      parentCode: '01010501',
      cid: 26
    },
    {
      cityname: '莆田市',
      parentCode: '01010505',
      cid: 26
    },
    {
      cityname: '钓鱼岛',
      parentCode: '0101351001',
      cid: 26
    },
    {
      cityname: '龙岩市',
      parentCode: '01010502',
      cid: 26
    },
    {
      cityname: '山南市',
      parentCode: '01013007',
      cid: 27
    },
    {
      cityname: '拉萨市',
      parentCode: '01013003',
      cid: 27
    },
    {
      cityname: '日喀则市',
      parentCode: '01013006',
      cid: 27
    },
    {
      cityname: '昌都市',
      parentCode: '01013002',
      cid: 27
    },
    {
      cityname: '林芝市',
      parentCode: '01013004',
      cid: 27
    },
    {
      cityname: '那曲市',
      parentCode: '01013005',
      cid: 27
    },
    {
      cityname: '阿里地区',
      parentCode: '01013001',
      cid: 27
    },
    {
      cityname: '六盘水市',
      parentCode: '01010904',
      cid: 28
    },
    {
      cityname: '安顺市',
      parentCode: '01010901',
      cid: 28
    },
    {
      cityname: '毕节市',
      parentCode: '01010902',
      cid: 28
    },
    {
      cityname: '贵阳市',
      parentCode: '01010903',
      cid: 28
    },
    {
      cityname: '遵义市',
      parentCode: '01010909',
      cid: 28
    },
    {
      cityname: '铜仁市',
      parentCode: '01010908',
      cid: 28
    },
    {
      cityname: '黔东南州',
      parentCode: '01010905',
      cid: 28
    },
    {
      cityname: '黔南州',
      parentCode: '01010906',
      cid: 28
    },
    {
      cityname: '黔西南州',
      parentCode: '01010907',
      cid: 28
    },
    {
      cityname: '丹东市',
      parentCode: '01011905',
      cid: 29
    },
    {
      cityname: '大连市',
      parentCode: '01011904',
      cid: 29
    },
    {
      cityname: '抚顺市',
      parentCode: '01011906',
      cid: 29
    },
    {
      cityname: '朝阳市',
      parentCode: '01011903',
      cid: 29
    },
    {
      cityname: '本溪市',
      parentCode: '01011902',
      cid: 29
    },
    {
      cityname: '沈阳市',
      parentCode: '01011912',
      cid: 29
    },
    {
      cityname: '盘锦市',
      parentCode: '01011911',
      cid: 29
    },
    {
      cityname: '营口市',
      parentCode: '01011914',
      cid: 29
    },
    {
      cityname: '葫芦岛市',
      parentCode: '01011908',
      cid: 29
    },
    {
      cityname: '辽阳市',
      parentCode: '01011910',
      cid: 29
    },
    {
      cityname: '铁岭市',
      parentCode: '01011913',
      cid: 29
    },
    {
      cityname: '锦州市',
      parentCode: '01011909',
      cid: 29
    },
    {
      cityname: '阜新市',
      parentCode: '01011907',
      cid: 29
    },
    {
      cityname: '鞍山市',
      parentCode: '01011901',
      cid: 29
    },
    {
      cityname: '重庆市',
      parentCode: '01010401',
      cid: 30
    },
    {
      cityname: '咸阳市',
      parentCode: '01012508',
      cid: 31
    },
    {
      cityname: '商洛市',
      parentCode: '01012504',
      cid: 31
    },
    {
      cityname: '安康市',
      parentCode: '01012501',
      cid: 31
    },
    {
      cityname: '宝鸡市',
      parentCode: '01012502',
      cid: 31
    },
    {
      cityname: '延安市',
      parentCode: '01012509',
      cid: 31
    },
    {
      cityname: '榆林市',
      parentCode: '01012510',
      cid: 31
    },
    {
      cityname: '汉中市',
      parentCode: '01012503',
      cid: 31
    },
    {
      cityname: '渭南市',
      parentCode: '01012506',
      cid: 31
    },
    {
      cityname: '西安市',
      parentCode: '01012507',
      cid: 31
    },
    {
      cityname: '铜川市',
      parentCode: '01012505',
      cid: 31
    },
    {
      cityname: '果洛州',
      parentCode: '01012201',
      cid: 32
    },
    {
      cityname: '海东市',
      parentCode: '01012202',
      cid: 32
    },
    {
      cityname: '海北州',
      parentCode: '01012204',
      cid: 32
    },
    {
      cityname: '海南州',
      parentCode: '01012205',
      cid: 32
    },
    {
      cityname: '海西州',
      parentCode: '01012203',
      cid: 32
    },
    {
      cityname: '玉树州',
      parentCode: '01012208',
      cid: 32
    },
    {
      cityname: '西宁市',
      parentCode: '01012207',
      cid: 32
    },
    {
      cityname: '黄南州',
      parentCode: '01012206',
      cid: 32
    },
    {
      cityname: '香港',
      parentCode: '01013101',
      cid: 33
    },
    {
      cityname: '七台河市',
      parentCode: '01011310',
      cid: 34
    },
    {
      cityname: '伊春市',
      parentCode: '01011313',
      cid: 34
    },
    {
      cityname: '佳木斯市',
      parentCode: '01011307',
      cid: 34
    },
    {
      cityname: '双鸭山市',
      parentCode: '01011311',
      cid: 34
    },
    {
      cityname: '呼伦贝尔',
      parentCode: '01012005',
      cid: 34
    },
    {
      cityname: '哈尔滨市',
      parentCode: '01011303',
      cid: 34
    },
    {
      cityname: '大兴安岭',
      parentCode: '01011302',
      cid: 34
    },
    {
      cityname: '大庆市',
      parentCode: '01011301',
      cid: 34
    },
    {
      cityname: '牡丹江市',
      parentCode: '01011308',
      cid: 34
    },
    {
      cityname: '绥化市',
      parentCode: '01011312',
      cid: 34
    },
    {
      cityname: '鸡西市',
      parentCode: '01011306',
      cid: 34
    },
    {
      cityname: '鹤岗市',
      parentCode: '01011304',
      cid: 34
    },
    {
      cityname: '黑河市',
      parentCode: '01011305',
      cid: 34
    },
    {
      cityname: '齐齐哈尔',
      parentCode: '01011309',
      cid: 34
    }
  ]
}

const cityList = cityListDatas.province.map((item: any) => {
  item['cityList'] = cityListDatas.city.filter((i) => i.cid == item.id)
  return item
})
export { weaInfoChanel, zmWeaWechat, jiuhuaBaseUrl, reportUrl, h5LandLink, getUserInfoUrl, mapUrl, cityList }
