import { Observable } from 'rxjs/Observable';
import { VariantReportComparisonData } from '../patient-variant-report-oa/variant-report-comparison-data';

export class PatientApiServiceStub {
    static makeParsedVcftData = () => {
        return [
            {
                'values':
                [{
                    'position': '25',
                    'cn': '0.92',
                    'Q1': '0.781879',
                    'Q2': '0.92',
                    'Q3': '1.032146',
                    'whisker_low': '0.74278505',
                    'whisker_high': '1.0837533000000001',
                    'outliers': ['0.74278505', '0.92', '1.0837533000000001']
                }]
            },
            'tmp/ChartTitle'
        ];
    };

  static makeRawVcftData = () => {
    return [[
      {"chromosome":"chr1","cis":["FALSE","0.05:1.55518","0.95:1.96923"],"gene":"MYCL","position":"40361592","raw_copy_number":"7.0","tsg_gene":false,"values":["1.480967","1.52041","1.555179","1.596265","1.647487","1.667375","1.75","1.83672","1.858892","1.918542","1.969227","2.01426","2.067905"]},{"chromosome":"chr1","cis":["FALSE","0.05:1.49768","0.95:1.88452"],"gene":"BCL9","position":"147022100","raw_copy_number":"1.68","tsg_gene":false,"values":["1.428072","1.465078","1.497679","1.536177","1.584136","1.602746","1.68","1.760978","1.781666","1.837289","1.884516","1.92645","1.976371"]},{"chromosome":"chr1","cis":["FALSE","0.05:1.45245","0.95:1.85177"],"gene":"MCL1","position":"150547017","raw_copy_number":"1.64","tsg_gene":false,"values":["1.381178","1.419043","1.452446","1.491946","1.541231","1.560379","1.64","1.723684","1.745099","1.802747","1.851772","1.895361","1.947324"]},{"chromosome":"chr1","cis":["FALSE","0.05:1.58251","0.95:1.97971"],"gene":"MDM4","position":"204490598","raw_copy_number":"1.77","tsg_gene":false,"values":["1.510778","1.548924","1.582508","1.622144","1.671485","1.690621","1.77","1.853106","1.874322","1.931333","1.979706","2.02263","2.073699"]},{"chromosome":"chr2","cis":["FALSE","0.05:1.47522","0.95:1.84549"],"gene":"MYCN","position":"16080662","raw_copy_number":"1.65","tsg_gene":false,"values":["1.408353","1.443912","1.475219","1.512168","1.558164","1.576003","1.65","1.727471","1.747249","1.800395","1.845488","1.885503","1.93311"]},{"chromosome":"chr2","cis":["FALSE","0.05:2.01222","0.95:2.34015"],"gene":"MSH2","position":"47630308","raw_copy_number":"2.17","tsg_gene":true,"values":["1.950264","1.983328","2.012219","2.04606","2.087814","2.1039","2.17","2.238177","2.255421","2.301447","2.340153","2.374242","2.414494"]},{"chromosome":"chr3","cis":["FALSE","0.05:1.67169","0.95:2.44088"],"gene":"VHL","position":"10183523","raw_copy_number":"2.02","tsg_gene":true,"values":["1.545627","1.612165","1.671692","1.743074","1.833631","1.869256","2.02","2.182901","2.225311","2.340922","2.440881","2.531006","2.639965"]},{"chromosome":"chr3","cis":["FALSE","0.05:2.05468","0.95:2.61958"],"gene":"PPARG","position":"12333702","raw_copy_number":"2.32","tsg_gene":false,"values":["1.953861","2.007427","2.05468","2.110557","2.180278","2.207365","2.32","2.438382","2.468677","2.550227","2.61958","2.681243","2.754751"]},{"chromosome":"chr3","cis":["FALSE","0.05:1.79396","0.95:2.14141"],"gene":"BAP1","position":"52436208","raw_copy_number":"1.96","tsg_gene":true,"values":["1.729365","1.763794","1.79396","1.82939","1.873242","1.890177","1.96","2.032402","2.050776","2.099935","2.141408","2.178032","2.221394"]},{"chromosome":"chr3","cis":["FALSE","0.05:1.71107","0.95:2.02189"],"gene":"PIK3CA","position":"178870451","raw_copy_number":"1.86","tsg_gene":false,"values":["1.652924","1.683932","1.711072","1.742914","1.782277","1.797464","1.86","1.924711","1.941112","1.984952","2.02189","2.054477","2.093018"]},{"chromosome":"chr3","cis":["FALSE","0.05:1.75176","0.95:2.06078"],"gene":"SOX2","position":"181429683","raw_copy_number":"1.9","tsg_gene":false,"values":["1.693795","1.724714","1.751764","1.783486","1.82268","1.837795","1.9","1.96431","1.9806","2.024126","2.06078","2.0931","2.131309"]},{"chromosome":"chr4","cis":["FALSE","0.05:1.85967","0.95:2.32643"],"gene":"FGFR3","position":"1797210","raw_copy_number":"2.08","tsg_gene":false,"values":["1.775378","1.820204","1.859671","1.906248","1.964231","1.986719","2.08","2.177661","2.202593","2.269589","2.326434","2.376876","2.43689"]},{"chromosome":"chr4","cis":["FALSE","0.05:1.59078","0.95:1.96942"],"gene":"PDGFRA","position":"55096971","raw_copy_number":"1.77","tsg_gene":false,"values":["1.521953","1.558571","1.590776","1.628742","1.675945","1.694235","1.77","1.849153","1.869333","1.923509","1.969417","2.01011","2.058474"]},{"chromosome":"chr4","cis":["FALSE","0.05:1.80701","0.95:2.16955"],"gene":"KIT","position":"55529116","raw_copy_number":"1.98","tsg_gene":false,"values":["1.739853","1.775639","1.807012","1.843882","1.889549","1.907194","1.98","2.055585","2.07478","2.126167","2.169548","2.207881","2.253293"]},{"chromosome":"chr4","cis":["FALSE","0.05:1.86576","0.95:2.10123"],"gene":"TET2","position":"106155065","raw_copy_number":"1.98","tsg_gene":true,"values":["1.82039","1.844642","1.865763","1.890421","1.920725","1.932365","1.98","2.02881","2.041105","2.073824","2.101231","2.12529","2.153604"]},{"chromosome":"chr4","cis":["FALSE","0.05:2.32339","0.95:2.73325"],"gene":"FBXW7","position":"153243998","raw_copy_number":"2.52","tsg_gene":true,"values":["2.246507","2.287516","2.323392","2.365466","2.417449","2.437497","2.52","2.605296","2.626901","2.68463","2.733245","2.776112","2.826789"]},{"chromosome":"chr5","cis":["FALSE","0.05:1.67835","0.95:2.17362"],"gene":"TERT","position":"1258799","raw_copy_number":"1.91","tsg_gene":false,"values":["1.590822","1.637293","1.678353","1.726986","1.787784","1.811439","1.91","2.013924","2.040571","2.112409","2.173619","2.228129","2.293216"]},{"chromosome":"chr5","cis":["FALSE","0.05:1.88281","0.95:2.21031"],"gene":"PIK3R1","position":"67522497","raw_copy_number":"2.04","tsg_gene":true,"values":["1.821299","1.854113","1.882814","1.916465","1.958032","1.974059","2.04","2.108143","2.125399","2.171498","2.210309","2.244523","2.284963"]},{"chromosome":"chr5","cis":["FALSE","0.05:2.08097","0.95:2.28375"],"gene":"APC","position":"112043350","raw_copy_number":"2.18","tsg_gene":true,"values":["2.041269","2.062514","2.080967","2.102452","2.128773","2.13886","2.18","2.221932","2.232459","2.260409","2.283746","2.304178","2.32816"]},{"chromosome":"chr5","cis":["FALSE","0.05:1.68489","0.95:2.12008"],"gene":"FGFR4","position":"176516567","raw_copy_number":"1.89","tsg_gene":false,"values":["1.606581","1.648213","1.684889","1.728199","1.782153","1.803089","1.89","1.9811","2.004374","2.06695","2.120081","2.167256","2.223417"]},{"chromosome":"chr7","cis":["FALSE","0.05:1.38526","0.95:1.77937"],"gene":"IL6","position":"22766817","raw_copy_number":"1.57","tsg_gene":false,"values":["1.315254","1.352438","1.385264","1.424112","1.472629","1.491491","1.57","1.652641","1.67381","1.730833","1.779372","1.822561","1.874087"]},{"chromosome":"chr7","cis":["FALSE","0.05:1.70473","0.95:2.02941"],"gene":"EGFR","position":"55092604","raw_copy_number":"1.86","tsg_gene":false,"values":["1.644272","1.676503","1.704734","1.737882","1.778898","1.794733","1.86","1.927641","1.9448","1.990699","2.029408","2.063582","2.104032"]},{"chromosome":"chr7","cis":["FALSE","0.05:1.59927","0.95:2.0712"],"gene":"CDK6","position":"92243170","raw_copy_number":"1.82","tsg_gene":false,"values":["1.515862","1.560143","1.599269","1.64561","1.703543","1.726083","1.82","1.919027","1.944419","2.012871","2.071197","2.123139","2.185159"]},{"chromosome":"chr7","cis":["FALSE","0.05:1.97225","0.95:2.40963"],"gene":"MET","position":"116313479","raw_copy_number":"2.18","tsg_gene":false,"values":["1.892102","1.934775","1.972254","2.016379","2.071149","2.092345","2.18","2.271327","2.294572","2.356899","2.409629","2.456306","2.511704"]},{"chromosome":"chr8","cis":["FALSE","0.05:1.66747","0.95:2.07476"],"gene":"FGFR1","position":"38271444","raw_copy_number":"1.86","tsg_gene":false,"values":["1.593668","1.632925","1.667468","1.708213","1.758901","1.778551","1.86","1.945179","1.96691","2.025274","2.074762","2.118652","2.170841"]},{"chromosome":"chr8","cis":["FALSE","0.05:1.51337","0.95:2.04683"],"gene":"MYC","position":"128748884","raw_copy_number":"1.76","tsg_gene":false,"values":["1.421608","1.470219","1.513365","1.564696","1.629209","1.65441","1.76","1.872329","1.901291","1.979682","2.04683","2.106897","2.178941"]},{"chromosome":"chr9","cis":["FALSE","0.05:1.73291","0.95:2.19428"],"gene":"CD274","position":"5451200","raw_copy_number":"1.95","tsg_gene":false,"values":["1.650221","1.694171","1.732914","1.778695","1.835771","1.857932","1.95","2.046631","2.071337","2.137803","2.194281","2.244461","2.304237"]},{"chromosome":"chr9","cis":["FALSE","0.05:1.74471","0.95:2.22438"],"gene":"PDCD1LG2","position":"5510907","raw_copy_number":"1.97","tsg_gene":false,"values":["1.659098","1.704583","1.744707","1.792154","1.851356","1.874357","1.97","2.070523","2.096247","2.165495","2.224385","2.276745","2.339163"]},{"chromosome":"chr9","cis":["FALSE","0.05:2.25872","0.95:3.01591"],"gene":"CDKN2A","position":"21968185","raw_copy_number":"2.61","tsg_gene":true,"values":["2.127431","2.197031","2.258723","2.332022","2.423999","2.459886","2.61","2.769275","2.810274","2.921114","3.015908","3.100593","3.202031"]},{"chromosome":"chr9","cis":["FALSE","0.05:2.17192","0.95:2.45686"],"gene":"PTCH1","position":"98209088","raw_copy_number":"2.31","tsg_gene":true,"values":["2.117161","2.146423","2.171918","2.201697","2.238314","2.252385","2.31","2.369089","2.383982","2.42363","2.45686","2.486043","2.520403"]},{"chromosome":"chr9","cis":["FALSE","0.05:2.06818","0.95:2.36155"],"gene":"TSC1","position":"135771565","raw_copy_number":"2.21","tsg_gene":true,"values":["2.012125","2.042066","2.068178","2.098707","2.136289","2.150743","2.21","2.270889","2.286254","2.327195","2.361547","2.391745","2.427334"]},{"chromosome":"chr9","cis":["FALSE","0.05:1.80675","0.95:1.99807"],"gene":"NOTCH1","position":"139390440","raw_copy_number":"1.9","tsg_gene":true,"values":["1.769468","1.789411","1.806747","1.826947","1.851719","1.861217","1.9","1.939591","1.94954","1.975974","1.998067","2.017424","2.040162"]},{"chromosome":"chr10","cis":["FALSE","0.05:2.07348","0.95:2.66339"],"gene":"GATA3","position":"8097506","raw_copy_number":"2.35","tsg_gene":true,"values":["1.968692","2.024349","2.073485","2.131633","2.204253","2.232487","2.35","2.473699","2.505384","2.590737","2.663391","2.728037","2.805162"]},{"chromosome":"chr10","cis":["FALSE","0.05:2.11001","0.95:2.63961"],"gene":"PTEN","position":"89624207","raw_copy_number":"2.36","tsg_gene":true,"values":["2.014371","2.065232","2.110011","2.162858","2.228646","2.254162","2.36","2.470808","2.499095","2.575111","2.639607","2.69684","2.764933"]},{"chromosome":"chr10","cis":["FALSE","0.05:2.10306","0.95:2.60364"],"gene":"FGFR2","position":"123244278","raw_copy_number":"2.34","tsg_gene":false,"values":["2.012073","2.060484","2.103059","2.153253","2.215657","2.239836","2.34","2.444643","2.471322","2.542944","2.603636","2.657434","2.721372"]},{"chromosome":"chr11","cis":["FALSE","0.05:1.81973","0.95:2.24232"],"gene":"WT1","position":"32410558","raw_copy_number":"2.02","tsg_gene":true,"values":["1.742692","1.783689","1.819727","1.862192","1.914958","1.935394","2.02","2.108305","2.130804","2.191181","2.242315","2.287619","2.341435"]},{"chromosome":"chr11","cis":["FALSE","0.05:1.53334","0.95:1.92939"],"gene":"CD44","position":"35163607","raw_copy_number":"1.72","tsg_gene":false,"values":["1.462074","1.499961","1.533338","1.572752","1.621853","1.640907","1.72","1.802906","1.824086","1.881033","1.929386","1.972318","2.023427"]},{"chromosome":"chr11","cis":["FALSE","0.05:1.62248","0.95:2.04156"],"gene":"CCND1","position":"69456941","raw_copy_number":"1.82","tsg_gene":false,"values":["1.547078","1.587168","1.622485","1.664192","1.716147","1.736308","1.82","1.907726","1.930138","1.990396","2.041559","2.086987","2.141068"]},{"chromosome":"chr11","cis":["FALSE","0.05:1.89803","0.95:2.45812"],"gene":"BIRC3","position":"102188799","raw_copy_number":"2.16","tsg_gene":false,"values":["1.799045","1.851598","1.898033","1.953031","2.021787","2.048538","2.16","2.277526","2.307662","2.388902","2.458124","2.519769","2.593376"]},{"chromosome":"chr11","cis":["FALSE","0.05:1.94996","0.95:2.50472"],"gene":"BIRC2","position":"102218800","raw_copy_number":"2.21","tsg_gene":false,"values":["1.851408","1.90375","1.949958","2.004642","2.072936","2.099487","2.21","2.32633","2.356127","2.436395","2.504721","2.565516","2.638046"]},{"chromosome":"chr11","cis":["FALSE","0.05:2.07458","0.95:2.24894"],"gene":"ATM","position":"108098340","raw_copy_number":"2.16","tsg_gene":true,"values":["2.040186","2.058602","2.074578","2.093155","2.115879","2.124578","2.16","2.196013","2.205041","2.22898","2.24894","2.266392","2.28685"]},{"chromosome":"chr12","cis":["FALSE","0.05:1.74073","0.95:2.27496"],"gene":"KRAS","position":"25364760","raw_copy_number":"1.99","tsg_gene":false,"values":["1.64685","1.696671","1.740734","1.79297","1.858347","1.883804","1.99","2.102182","2.13098","2.208681","2.27496","2.334041","2.404651"]},{"chromosome":"chr12","cis":["FALSE","0.05:1.63843","0.95:2.08889"],"gene":"ACVRL1","position":"52302781","raw_copy_number":"1.85","tsg_gene":false,"values":["1.558036","1.60075","1.63843","1.682987","1.738583","1.760183","1.85","1.9444","1.968557","2.033586","2.088889","2.13806","2.196676"]},{"chromosome":"chr12","cis":["FALSE","0.05:1.34444","0.95:1.74117"],"gene":"CDK4","position":"58141846","raw_copy_number":"1.53","tsg_gene":false,"values":["1.274324","1.311549","1.34444","1.383397","1.432099","1.451048","1.53","1.613248","1.634594","1.692139","1.741171","1.784837","1.836974"]},{"chromosome":"chr12","cis":["FALSE","0.05:1.91568","0.95:2.5036"],"gene":"MDM2","position":"69207031","raw_copy_number":"2.19","tsg_gene":false,"values":["1.812363","1.867191","1.915682","1.973169","2.045115","2.073132","2.19","2.313457","2.345149","2.430659","2.5036","2.568618","2.646324"]},{"chromosome":"chr13","cis":["FALSE","0.05:1.92304","0.95:2.35923"],"gene":"FLT3","position":"28579521","raw_copy_number":"2.13","tsg_gene":false,"values":["1.843313","1.885754","1.923044","1.966964","2.021509","2.042626","2.13","2.221111","2.244313","2.306549","2.359229","2.405882","2.461274"]},{"chromosome":"chr13","cis":["FALSE","0.05:2.06922","0.95:2.25477"],"gene":"BRCA2","position":"32890534","raw_copy_number":"2.16","tsg_gene":true,"values":["2.032735","2.052266","2.069217","2.08894","2.113081","2.122326","2.16","2.198343","2.20796","2.233477","2.254766","2.27339","2.295233"]},{"chromosome":"chr13","cis":["FALSE","0.05:1.98295","0.95:2.28795"],"gene":"RB1","position":"48877958","raw_copy_number":"2.13","tsg_gene":true,"values":["1.925052","1.955965","1.982954","2.014543","2.053479","2.068468","2.13","2.193363","2.209373","2.252074","2.28795","2.31952","2.356768"]},{"chromosome":"chr13","cis":["FALSE","0.05:1.61774","0.95:2.0028"],"gene":"GAS6","position":"114524148","raw_copy_number":"1.8","tsg_gene":false,"values":["1.547749","1.584988","1.617738","1.656348","1.704351","1.722951","1.8","1.880495","1.901017","1.956111","2.002797","2.04418","2.093363"]},{"chromosome":"chr14","cis":["FALSE","0.05:1.7135","0.95:2.21914"],"gene":"APEX1","position":"20923277","raw_copy_number":"1.95","tsg_gene":false,"values":["1.624138","1.671582","1.713502","1.763153","1.825224","1.849375","1.95","2.0561","2.083306","2.156648","2.21914","2.274792","2.341242"]},{"chromosome":"chr14","cis":["FALSE","0.05:1.70625","0.95:2.16052"],"gene":"PNP","position":"20938047","raw_copy_number":"1.92","tsg_gene":false,"values":["1.624833","1.668106","1.706253","1.75133","1.807528","1.829348","1.92","2.015144","2.03947","2.104914","2.160523","2.209931","2.268788"]},{"chromosome":"chr14","cis":["FALSE","0.05:1.42543","0.95:1.95653"],"gene":"NKX2-1","position":"36985745","raw_copy_number":"1.67","tsg_gene":false,"values":["1.334927","1.382842","1.425434","1.476184","1.540082","1.565076","1.67","1.781958","1.810878","1.889263","1.956527","2.016789","2.089178"]},{"chromosome":"chr14","cis":["FALSE","0.05:1.77735","0.95:2.25054"],"gene":"AKT1","position":"105237279","raw_copy_number":"2","tsg_gene":false,"values":["1.692534","1.737611","1.777347","1.824302","1.882842","1.905571","2.0","2.099108","2.124448","2.192619","2.250545","2.302011","2.36332"]},{"chromosome":"chr15","cis":["FALSE","0.05:1.70625","0.95:2.16052"],"gene":"IGF1R","position":"99195597","raw_copy_number":"1.92","tsg_gene":false,"values":["1.624833","1.668106","1.706253","1.75133","1.807528","1.829348","1.92","2.015144","2.03947","2.104914","2.160523","2.209931","2.268788"]},{"chromosome":"chr16","cis":["FALSE","0.05:1.95577","0.95:2.16979"],"gene":"TSC2","position":"2098578","raw_copy_number":"2.06","tsg_gene":true,"values":["1.914145","1.936407","1.955766","1.978331","2.006013","2.01663","2.06","2.104302","2.11544","2.14504","2.169789","2.191481","2.21697"]},{"chromosome":"chr16","cis":["FALSE","0.05:1.91973","0.95:2.25365"],"gene":"CDH1","position":"68771250","raw_copy_number":"2.08","tsg_gene":true,"values":["1.85701","1.890468","1.919732","1.954043","1.996425","2.012766","2.08","2.14948","2.167074","2.214076","2.253648","2.288534","2.329766"]},{"chromosome":"chr17","cis":["FALSE","0.05:1.67025","0.95:2.04909"],"gene":"TP53","position":"7572833","raw_copy_number":"8.85","tsg_gene":true,"values":["1.601","1.637861","1.670249","1.708396","1.755771","1.774112","1.85","1.929134","1.949286","2.003341","2.049095","2.089615","2.137727"]},{"chromosome":"chr17","cis":["FALSE","0.05:1.54196","0.95:1.9186"],"gene":"TIAF1","position":"27400788","raw_copy_number":"1.72","tsg_gene":false,"values":["1.473714","1.510017","1.54196","1.579638","1.626511","1.644681","1.72","1.798768","1.818863","1.872834","1.918597","1.959184","2.007445"]},{"chromosome":"chr17","cis":["FALSE","0.05:2.26967","0.95:2.47477"],"gene":"NF1","position":"29422232","raw_copy_number":"2.37","tsg_gene":true,"values":["2.229355","2.250935","2.269666","2.291461","2.318141","2.328359","2.37","2.412386","2.423019","2.451231","2.474769","2.495363","2.519518"]},{"chromosome":"chr17","cis":["FALSE","0.05:1.58015","0.95:1.91602"],"gene":"ERBB2","position":"37845133","raw_copy_number":"1.74","tsg_gene":false,"values":["1.518306","1.551243","1.580147","1.61415","1.656318","1.672626","1.74","1.810088","1.827909","1.875662","1.916024","1.951726","1.994065"]},{"chromosome":"chr17","cis":["FALSE","0.05:2.00093","0.95:2.22502"],"gene":"BRCA1","position":"41197601","raw_copy_number":"2.11","tsg_gene":true,"values":["1.957407","1.980682","2.000925","2.024528","2.05349","2.064601","2.11","2.156397","2.168065","2.199081","2.225021","2.247761","2.274489"]},{"chromosome":"chr17","cis":["FALSE","0.05:1.79512","0.95:2.27305"],"gene":"RPS6KB1","position":"57974717","raw_copy_number":"2.02","tsg_gene":false,"values":["1.709459","1.754987","1.795121","1.842545","1.90167","1.924627","2.02","2.120099","2.145693","2.214545","2.27305","2.325031","2.386954"]},{"chromosome":"chr18","cis":["FALSE","0.05:2.13261","0.95:2.97776"],"gene":"SMAD4","position":"48575099","raw_copy_number":"2.52","tsg_gene":true,"values":["1.990126","2.065494","2.132609","2.21272","2.313797","2.353397","2.52","2.698397","2.744579","2.869951","2.977761","3.074519","3.190954"]},{"chromosome":"chr19","cis":["FALSE","0.05:1.85573","0.95:2.30901"],"gene":"STK11","position":"1206846","raw_copy_number":"2.07","tsg_gene":true,"values":["1.773598","1.817287","1.855731","1.901076","1.957487","1.979355","2.07","2.164796","2.18898","2.253934","2.30901","2.357855","2.415936"]},{"chromosome":"chr19","cis":["FALSE","0.05:1.60585","0.95:2.06271"],"gene":"CCNE1","position":"30303692","raw_copy_number":"1.82","tsg_gene":false,"values":["1.524689","1.567794","1.605848","1.650881","1.707124","1.72899","1.82","1.915801","1.94034","2.006443","2.062711","2.112778","2.172508"]},{"chromosome":"chr20","cis":["FALSE","0.05:1.88101","0.95:2.36686"],"gene":"CSNK2A1","position":"466976","raw_copy_number":"2.11","tsg_gene":false,"values":["1.793591","1.840069","1.881013","1.929365","1.989599","2.012973","2.11","2.211704","2.237687","2.307547","2.366863","2.419529","2.482228"]},{"chromosome":"chr20","cis":["FALSE","0.05:1.37744","0.95:1.74417"],"gene":"BCL2L1","position":"30257850","raw_copy_number":"1.55","tsg_gene":false,"values":["1.311714","1.346648","1.377444","1.413834","1.459202","1.476818","1.55","1.626809","1.646447","1.69928","1.744172","1.784059","1.831573"]},{"chromosome":"chr20","cis":["FALSE","0.05:1.73291","0.95:2.19428"],"gene":"ZNF217","position":"52184148","raw_copy_number":"1.95","tsg_gene":false,"values":["1.650221","1.694171","1.732914","1.778695","1.835771","1.857932","1.95","2.046631","2.071337","2.137803","2.194281","2.244461","2.304237"]},{"chromosome":"chr22","cis":["FALSE","0.05:1.71163","0.95:2.15373"],"gene":"SMARCB1","position":"24129262","raw_copy_number":"1.92","tsg_gene":true,"values":["1.632082","1.674375","1.711633","1.755631","1.810441","1.83171","1.92","2.012546","2.036189","2.099758","2.153733","2.201657","2.258709"]},{"chromosome":"chr22","cis":["FALSE","0.05:2.01914","0.95:2.37532"],"gene":"NF2","position":"29999945","raw_copy_number":"2.19","tsg_gene":true,"values":["1.952321","1.98796","2.019139","2.055702","2.100878","2.118301","2.19","2.264126","2.282902","2.333071","2.37532","2.412573","2.456614"]},{"chromosome":"chrX","cis":["FALSE","0.05:0.758807","0.95:0.974688"],"gene":"AR","position":"66773856","raw_copy_number":"0.86","tsg_gene":false,"values":["0.720458","0.740826","0.758807","0.780087","0.806663","0.816995","0.86","0.905269","0.916864","0.9481","0.974688","0.998346","1.02657"]}],
      "/tmp/MSN3699_v2_MSN3699_RNA_v2.vcf"]
    };

    static makeCnvData = () => {
        return [
            {
                'x': '70',
                'label': 'AR',
                'status': '#CD0000',
                'chr': 'chrX',
                'values':
                {
                    'position': '66773856',
                    'cn': '0.92',
                    'Q1': '0.781879',
                    'Q2': '0.92',
                    'Q3': '1.032146',
                    'whisker_low': '0.74278505',
                    'whisker_high': '1.0837533000000001',
                    'outliers': ['0.74278505', '0.92', '1.0837533000000001']
                }
            }
        ];
    };

    static makeVariantReportQcData = () => {
        return {
            psn: '11276',
            analysisId: 'ABCD',
            molecularSequenceNumber: 'fake-msn',
            dateReceived: null,
            biopsySequenceNumber: 'fake-bsn',
            mapd: 'mapd',
            tvc_version: 'tvc_version',
            pool1: 'pool1',
            pool2: 'pool2',
            cellularity: 'cellularity',
            variantReport: {},
            assignmentReport: {},
            moiSummary: {},
            cnv: [],
            snvAndIndels: [],
            geneFusions: [],
            ocpSummary: {},
            showPools: false,
            parsed_vcf_genes: PatientApiServiceStub.makeParsedVcftData(),
            dnaBamFilePath: 'fake-path',
            rnaBamFilePath: 'fake-path',
            vcfFilePath: 'fake-path',
            assignmentHistory: {},
            patient: {},
            analysis: {},
            assays: []
        } as any;
    }

    static makeVariantReportData = () => {
        return {
            psn: '11276',
            analysisId: 'ABCD',
            patient: {},
            analysis: {},
            variantReport: { moiSummary: {} },
            assignmentReport: {},
            assignmentHistory: {},
            parsed_vcf_genes: PatientApiServiceStub.makeParsedVcftData(),
            tvc_version: 'tvc_version',
            pool1: 'pool1',
            pool2: 'pool2',
            mapd: 'mapd',
            cellularity: 'cellularity',
            showPools: false,
            assays: []
        } as any;
    }

    static makeOutsideAssayVariantReportData = () => {
        return {
            isOutsideAssay: true,
            psn: 'dummy-value',
            currentPatientStatus: 'dummy-value',
            currentStepNumber: 'dummy-value',
            concordance: 'dummy-value',
            outsideData: {
                analysisId: 'dummy-value',
                assays: [],
                variantReport: { molecularSequenceNumber: 'outside-msn', moiSummary: {} },
                assignmentReport: {},
                assignmentHistory: {},
                parsed_vcf_genes: PatientApiServiceStub.makeParsedVcftData(),
                tvc_version: 'dummy-value',
                pool1: 123,
                pool2: 123,
                mapd: 'dummy-value',
                cellularity: {},
                showPools: false,
            },
            matchData: {
                analysisId: 'dummy-value',
                assays: [],
                variantReport: { molecularSequenceNumber: 'match-msn', moiSummary: {} },
                assignmentReport: {},
                assignmentHistory: {},
                parsed_vcf_genes: PatientApiServiceStub.makeParsedVcftData(),
                tvc_version: 'dummy-value',
                pool1: 123,
                pool2: 123,
                mapd: 'dummy-value',
                cellularity: {},
                showPools: false,
            },
            comparisonVariantReport: {
                singleNucleotideVariantAndIndels: [],
                copyNumberVariants: [],
                unifiedGeneFusions: [],
            }
        } as VariantReportComparisonData;
    }

    static makePatientListData = () => [
        { patientSequenceNumber: '1', currentStepNumber: '1.1' },
        { patientSequenceNumber: '2', currentStepNumber: '1.1' },
        { patientSequenceNumber: '3', currentStepNumber: '1.1' },
        { patientSequenceNumber: '4', currentStepNumber: '1.1' }
    ] as any[]

    static makePatientData = () => {
        let patient = {
            '_class': 'gov.match.model.Patient',
            '_id': {
                '$oid': '5970c792b0c8f5584c5d38f6'
            },
            'biopsies': [
                {
                    'abc':'cba',
                    'assayMessages': [
                        {
                            'biomarker': 'ICCPTENs',
                            'biopsySequenceNumber': 'MDACC-case1',
                            'orderedDate': {
                                '$date': 1500563346387
                            },
                            'patientSequenceNumber': 'OA5',
                            'reportedDate': {
                                '$date': 1500563346387
                            },
                            'result': 'UNKNOWN',
                            'studyId': 'EAY131'
                        }
                    ],
                    'associatedPatientStatus': 'REGISTRATION_OUTSIDE_ASSAY',
                    'biopsySequenceNumber': 'MDACC-case1',
                    'dateCreated': {
                        '$date': 1500563346387
                    },
                    'failure': false,
                    'mdAndersonMessages': [
                        {
                            'biopsySequenceNumber': 'MDACC-case1',
                            'collectedDate': {
                                '$date': 1500563346387
                            },
                            'message': 'SPECIMEN_RECEIVED',
                            'patientSequenceNumber': 'OA5',
                            'reportedDate': {
                                '$date': 1500563346387
                            },
                            'studyId': 'EAY131'
                        },
                        {
                            'biopsySequenceNumber': 'MDACC-case1',
                            'message': 'PATHOLOGY_CONFIRMATION',
                            'patientSequenceNumber': 'OA5',
                            'reportedDate': {
                                '$date': 1500563346387
                            },
                            'status': 'U',
                            'studyId': 'EAY131'
                        },
                        {
                            '_class': 'gov.match.model.message.NucleicAcidsShippingMessage',
                            'biopsySequenceNumber': 'MDACC-case1',
                            'destinationSite': 'MDACC',
                            'message': 'NUCLEIC_ACID_SENDOUT',
                            'molecularSequenceNumber': '5fe34a7f-88f6-4ea5-b547-41f3053b680d',
                            'patientSequenceNumber': 'OA5',
                            'reportedDate': {
                                '$date': 1500563346427
                            },
                            'studyId': 'EAY131'
                        },
                        {
                            'biopsySequenceNumber': 'MDACC-case1',
                            'collectedDate': {
                                '$date': 1500563346387
                            },
                            'message': 'SPECIMEN_FAILURE',
                            'patientSequenceNumber': 'OA5',
                            'reportedDate': {
                                '$date': 1500563346387
                            },
                            'studyId': 'EAY131'
                        }
                    ],
                    'nextGenerationSequences': [
                        {
                            'dateReceived': {
                                '$date': 1500563346427
                            },
                            'dateVerified': {
                                '$date': 1500563346472
                            },
                            'ionReporterResults': {
                                'jobName': '88fd81b9-d77b-4760-93f9-a5225f129a5c',
                                'molecularSequenceNumber': '5fe34a7f-88f6-4ea5-b547-41f3053b680d',
                                'variantReport': {
                                    'copyNumberVariants': [] as any[],
                                    'createdDate': {
                                        '$date': 1500563346427
                                    },
                                    'geneFusions': [] as any[],
                                    'indels': [] as any[],
                                    'nonHotspotRules': [] as any[],
                                    'singleNucleotideVariants': [] as any[],
                                    'unifiedGeneFusions': [
                                        {
                                            'armSpecific': false,
                                            'confirmed': true,
                                            'driverGene': 'TPM3',
                                            'driverReadCount': 450,
                                            'identifier': 'TPM3-ALK.T7A20',
                                            'inclusion': true,
                                            'metadata': {
                                                '_id': '31bf5559-409f-4356-8b81-69b2299d6ed1'
                                            },
                                            'partnerGene': 'ALK',
                                            'partnerReadCount': 450,
                                            'rare': false
                                        }
                                    ]
                                }
                            },
                            'ngsRunNumber': '1',
                            'status': 'CONFIRMED'
                        },
                        {
                            'dateReceived': {
                                '$date': 1500563346427
                            },
                            'dateVerified': {
                                '$date': 1500563346473
                            },
                            'ionReporterResults': {
                                'jobName': '88fd81b9-d77b-4760-93f9-a5225f129a5c',
                                'molecularSequenceNumber': '5fe34a7f-88f6-4ea5-b547-41f3053b680d'
                            },
                            'ngsRunNumber': '2',
                            'status': 'REJECTED'
                        }
                    ],
                    'pathologyReportMessages': [] as any[],
                    'patientOutsideAssayLabReport': {
                        'dateCreated': {
                            '$date': 1500563346375
                        },
                        'lab': 'MDACC',
                        'patientSequenceNumber': 'OA5',
                        'reportId': 'case1',
                        'studyId': 'EAY131'
                    }
                },
                {
                    'assayMessages': [
                        {
                            'biomarker': 'ICCPTENs',
                            'biopsySequenceNumber': 'BSN-OA5',
                            'orderedDate': {
                                '$date': 1500563377616
                            },
                            'patientSequenceNumber': 'OA5',
                            'reportedDate': {
                                '$date': 1500563377616
                            },
                            'result': 'NEGATIVE'
                        },
                        {
                            'biomarker': 123,
                            'biopsySequenceNumber': 'BSN-OA5',
                            'orderedDate': {
                                '$date': 1500563377616
                            },
                            'patientSequenceNumber': 'OA5',
                            'reportedDate': {
                                '$date': 1500563377616
                            },
                            'result': 'NEGATIVE'
                        }                    ],
                    'associatedPatientStatus': 'REGISTRATION_OUTSIDE_ASSAY',
                    'biopsySequenceNumber': 'BSN-OA5',
                    'dateCreated': {
                        '$date': 1500563376718
                    },
                    'failure': false,
                    'mdAndersonMessages': [
                        {
                            'biopsySequenceNumber': 'BSN-OA5',
                            'message': 'SPECIMEN_RECEIVED',
                            'patientSequenceNumber': 'OA5',
                            'reportedDate': {
                                '$date': 1500563376705
                            }
                        },
                        {
                            '_class': 'gov.match.model.message.NucleicAcidsShippingMessage',
                            'biopsySequenceNumber': 'BSN-OA5',
                            'cDnaConcentration': '',
                            'cDnaVolume': '',
                            'destinationSite': 'Boston',
                            'dnaConcentration': '',
                            'dnaVolume': '',
                            'message': 'NUCLEIC_ACID_SENDOUT',
                            'molecularSequenceNumber': 'MSN-OA5',
                            'patientSequenceNumber': 'OA5',
                            'reportedDate': {
                                '$date': 1500563376731
                            },
                            'trackingNumber': 'TN-OA5'
                        }
                    ],
                    'nextGenerationSequences': [
                        {
                            'dateReceived': {
                                '$date': 1500563378673
                            },
                            'ionReporterResults': {
                                'dnaBaiFilePath': 's3://BDD/MSN-OA5/job-OA5/sample1.bai',
                                'dnaBamFilePath': 's3://BDD/MSN-OA5/job-OA5/sample1.bam',
                                'ionReporterId': 'BDD',
                                'jobName': 'job-OA5',
                                'molecularSequenceNumber': 'MSN-OA5',
                                'qcFilePath': 's3://BDD/MSN-OA5/job-OA5/113re_QC.pdf',
                                'rnaBaiFilePath': 's3://BDD/MSN-OA5/job-OA5/sample2.bai',
                                'rnaBamFilePath': 's3://BDD/MSN-OA5/job-OA5/sample2.bam',
                                'variantReport': {
                                    'copyNumberVariants': [] as any[],
                                    'createdDate': {
                                        '$date': 1500563378608
                                    },
                                    'geneFusions': [
                                        {
                                            'alternative': '[chr1:154142875[A',
                                            'armSpecific': false,
                                            'chromosome': 'chr2',
                                            'confirmed': false,
                                            'exon': '20',
                                            'filter': 'PASS',
                                            'gene': 'ALK',
                                            'geneName': 'ALK',
                                            'identifier': 'TPM3-ALK.T7A20_1',
                                            'inclusion': true,
                                            'metadata': {
                                                '_id': 'ce4f590a-eedc-40c0-ac07-59a712d33108'
                                            },
                                            'oncominevariantclass': 'Fusion',
                                            'position': '29446394',
                                            'rare': false,
                                            'readDepth': 1001,
                                            'reference': 'A',
                                            'svType': 'Fusion'
                                        },
                                        {
                                            'alternative': '[chr1:154142875[A',
                                            'armSpecific': false,
                                            'chromosome': 'chr2',
                                            'confirmed': false,
                                            'exon': '12',
                                            'filter': 'PASS',
                                            'gene': 'TPM3',
                                            'geneName': 'TPM3',
                                            'identifier': 'TPM3-ALK.T7A20_2',
                                            'inclusion': true,
                                            'metadata': {
                                                '_id': '79eb0009-91d0-442a-9b04-167477d1d84c'
                                            },
                                            'oncominevariantclass': 'Fusion',
                                            'position': '29446394',
                                            'rare': false,
                                            'readDepth': 1001,
                                            'reference': 'C',
                                            'svType': 'Fusion'
                                        }
                                    ],
                                    'indels': [] as any[],
                                    'nonHotspotRules': [] as any[],
                                    'singleNucleotideVariants': [] as any[],
                                    'unifiedGeneFusions': [
                                        {
                                            'annotation': '-',
                                            'armSpecific': false,
                                            'confirmed': true,
                                            'isAMoi': true,
                                            'driverGene': 'TPM3',
                                            'driverReadCount': 1001,
                                            'identifier': 'TPM3-ALK.T7A20',
                                            'inclusion': true,
                                            'metadata': {
                                                '_id': '716e68f3-ce87-4f67-9402-116df85fba7f'
                                            },
                                            'partnerGene': 'ALK',
                                            'partnerReadCount': 1001,
                                            'rare': false
                                        }
                                    ]
                                },
                                'vcfFilePath': 's3://BDD/MSN-OA5/job-OA5/113re_gene-fusion.vcf'
                            },
                            'ngsRunNumber': '0',
                            'oncomineVariantAnnotationToolVersion': '1.0.5',
                            'status': 'PENDING',
                            'tvcVersion': '4.2-13'
                        }
                    ],
                    'pathologyReportMessages': [] as any[]
                }
            ],
            'concordance': 'U',
            'currentPatientAssignmentLogic': {
                'patientAssignmentReasonCategory': 'SELECTED',
                'reason': 'The patient and treatment arm match on variant identifier [TPM3-ALK.T7A20].',
                'treatmentArmId': 'CukeTest-113',
                'treatmentArmVersion': '2015-08-06'
            },
            'currentPatientStatus': 'ON_TREATMENT_ARM',
            'currentStepNumber': '1',
            'currentTreatmentArm': {
                'assayResults': [] as any[],
                'dateCreated': {
                    '$date': 1488461499519
                },
                'description': 'This TA is used by Cuke Test',
                'exclusionCriterias': [
                    {
                        '_id': '31',
                        'description': 'ASIAN'
                    },
                    {
                        '_id': '32',
                        'description': 'FEMALE'
                    }
                ],
                'exclusionDiseases': [
                    {
                        '_id': '10058354',
                        'ctepCategory': 'Non-Small Cell Lung Cancer',
                        'shortName': 'Bronchioloalveolar carcinoma'
                    },
                    {
                        '_id': '10025032',
                        'ctepCategory': 'Non-Small Cell Lung Cancer',
                        'shortName': 'Lung adenocarcinoma'
                    },
                    {
                        '_id': '90600324',
                        'ctepCategory': 'Non-Small Cell Lung Cancer',
                        'shortName': 'Lung adenocar. w/ bronch. feat.'
                    },
                    {
                        '_id': '10029514',
                        'ctepCategory': 'Non-Small Cell Lung Cancer',
                        'shortName': 'Non-small cell lung cancer, NOS'
                    },
                    {
                        '_id': '10025125',
                        'ctepCategory': 'Non-Small Cell Lung Cancer',
                        'shortName': 'Squamous cell lung carcinoma'
                    }
                ],
                'exclusionDrugs': [
                    {
                        'drugs': [
                            {
                                'drugClass': 'ALK inhibitor',
                                'drugId': '10001',
                                'name': 'Doxorubicin Hydrochloride',
                                'target': 'ALK'
                            }
                        ]
                    }
                ],
                'gene': 'ALK',
                'maxPatientsAllowed': 35,
                'name': 'CukeTest113',
                'numPatientsAssigned': 6,
                'statusLog': {
                    '1488461499519': 'PENDING',
                    '1488461581': 'OPEN',
                    '1488461581759': 'READY'
                },
                'targetId': '113',
                'targetName': 'Crizotinib',
                'treatmentArmDrugs': [
                    {
                        'drugId': '113',
                        'name': 'Crizotinib',
                        'pathway': 'ALK'
                    }
                ],
                'treatmentArmId': 'CukeTest-113',
                'treatmentArmStatus': 'OPEN',
                'variantReport': {
                    'copyNumberVariants': [] as any[],
                    'geneFusions': [
                        {
                            'alternative': '[chr1:154142875[A',
                            'armSpecific': false,
                            'chromosome': '2',
                            'confirmed': false,
                            'description': 'ALK translocation',
                            'geneName': 'ALK',
                            'identifier': 'TPM3-ALK.T7A20',
                            'inclusion': true,
                            'levelOfEvidence': 2.0,
                            'position': '29446394',
                            'publicMedIds': [
                                '23724913'
                            ],
                            'rare': false,
                            'reference': 'A'
                        },
                        {
                            'alternative': 'C[chrX:13754596[',
                            'armSpecific': false,
                            'chromosome': '10',
                            'confirmed': false,
                            'description': 'some description',
                            'geneName': 'FGFR2',
                            'identifier': 'FGFR2-OFD1.F17O3',
                            'inclusion': true,
                            'levelOfEvidence': 3.0,
                            'position': '123243211',
                            'rare': false,
                            'reference': 'C'
                        }
                    ],
                    'indels': [] as any[],
                    'nonHotspotRules': [
                        {
                            'armSpecific': false,
                            'gene': 'PTEN',
                            'inclusion': true,
                            'levelOfEvidence': 3.0,
                            'oncominevariantclass': 'deleterious',
                            'rare': false
                        }
                    ],
                    'singleNucleotideVariants': [] as any[],
                    'unifiedGeneFusions': [] as any[]
                },
                'version': '2015-08-06'
            },
            'diseases': [
                {
                    '_id': '10040811',
                    'ctepCategory': 'Skin Neoplasm',
                    'ctepSubCategory': 'Skin Neoplasm, Miscellaneous',
                    'ctepTerm': 'Skin cancer, NOS',
                    'shortName': 'Skin cancer, NOS - outside'
                },
                {
                    '_id': '10049999',
                    'ctepCategory': 'Skin Neoplasm',
                    'ctepSubCategory': 'Skin Neoplasm, Miscellaneous',
                    'ctepTerm': 'Skin cancer, NOS',
                    'shortName': 'Skin cancer, NOS - confirmation'
                }
            ],
            'ethnicity': 'PATIENT_REFUSAL',
            'exclusionCriterias': [] as any[],
            'gender': 'MALE',
            'patientAssignments': [
                {
                    'assayMessages': [
                        {
                            'biomarker': 'ICCPTENs',
                            'biopsySequenceNumber': 'MDACC-case1',
                            'orderedDate': {
                                '$date': 1500563346387
                            },
                            'patientSequenceNumber': 'OA5',
                            'reportedDate': {
                                '$date': 1500563346387
                            },
                            'result': 'UNKNOWN',
                            'studyId': 'EAY131'
                        }
                    ],
                    'assignmentType': 'OUTSIDE',
                    'biopsySequenceNumber': 'MDACC-case1',
                    'dateAssigned': {
                        '$date': 1500563371502
                    },
                    'dateConfirmed': {
                        '$date': 1500563371627
                    },
                    'dateReceivedByECOG': {
                        '$date': 1500563371663
                    },
                    'dateSentToECOG': {
                        '$date': 1500563371627
                    },
                    'patientAssignmentLogic': [
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1048',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1049',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1049-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1050',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1050-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1051',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1052',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1053',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1054',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1055',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1056',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1057',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1058',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1064',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1065',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1066',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1067',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1078',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'SELECTED',
                            'reason': 'The patient and treatment arm match on variant identifier [TPM3-ALK.T7A20].',
                            'treatmentArmId': 'CukeTest-113',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-115',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-117',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-118',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-122',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-122-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'CukeTest-122-1-PENDING',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-128',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-129',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-130',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-131',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-132',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-133',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-133-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-171',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-172',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-173',
                            'treatmentArmVersion': '2016-01-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-177',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'CukeTest-178',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'CukeTest-179',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-185',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-186',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-187',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-188',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-623-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [READY].',
                            'treatmentArmId': 'CukeTest-623-1-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-623-2',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-636-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-636-2',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-770-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-770-2',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-770-3',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-770-4',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-770-5',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-78',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-995',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'CukeTest-PEN-NHR',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [CLOSED].',
                            'treatmentArmId': 'CukeTest-PEN-NHR-CLOSED',
                            'treatmentArmVersion': '2015-01-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'CukeTest-PEN-NHR-PENDING',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-PEN-NHR-READY',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-PEN-NHR-SUSPENDED',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'CukeTest-PEN-NoVar',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-A',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-B',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-C',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-D',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-E',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-F_2015_11_23',
                            'treatmentArmVersion': '2015-11-23'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-F_2015_12_23',
                            'treatmentArmVersion': '2015-12-23'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-F_2016_01_13',
                            'treatmentArmVersion': '2016-01-13'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-H',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-I',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-J',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-L',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'EAY131-O',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-Q',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-S1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-S2',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-T',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-U',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-V',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'EAY131_S3_TRAMET_GNA',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'match129.3',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest10_2016_02_01',
                            'treatmentArmVersion': '2016-02-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest11_2016_03_01',
                            'treatmentArmVersion': '2016-03-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest12_2016_03_01',
                            'treatmentArmVersion': '2016-03-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest13_2016_03_01',
                            'treatmentArmVersion': '2016-03-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest14_2016_03_01',
                            'treatmentArmVersion': '2016-03-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest15_2016_03_01',
                            'treatmentArmVersion': '2016-03-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest17',
                            'treatmentArmVersion': '2015-04-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest1_2016_02_01',
                            'treatmentArmVersion': '2016-02-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest2_2016_02_01',
                            'treatmentArmVersion': '2016-02-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest3_2016_01_01',
                            'treatmentArmVersion': '2016-01-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest4_2016_02_01',
                            'treatmentArmVersion': '2016-02-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest6',
                            'treatmentArmVersion': '2016-02-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest7_2016_02_01',
                            'treatmentArmVersion': '2016-02-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest8_2016_02_01',
                            'treatmentArmVersion': '2016-02-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest_2015_11_25',
                            'treatmentArmVersion': '2015-11-25'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1034',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1035',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1035-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-F',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-K',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-N',
                            'treatmentArmVersion': '2016-05-31'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-R',
                            'treatmentArmVersion': '2015-08-06'
                        }
                    ],
                    'patientAssignmentMessages': [
                        {
                            'ineligibleReason': {
                                'eligCritVersion': '1.0',
                                'eligDeath': '',
                                'eligEligible': '',
                                'eligInelig': 'yes',
                                'eligQuestions': [
                                    {
                                        'eligCrit': 'Patients must fulfill all eligibility criteria outlined in Section 3.1 of MATCH Master Protocol(excluding Section 3.1 .6) at the time of registration to treatment step(Step 1, 3, 5, 7).',
                                        'eligCritKey': '2643',
                                        'eligYn': 'Patient is NOT eligible based on this criterion'
                                    },
                                    {
                                        'eligCrit': 'Patients must have deleterious inactivating mutations of NF - 1 by the MATCH NGS assay.See Appendix III for a description of the included NF1 mutations and corresponding Levels of Evidence.',
                                        'eligCritKey': '2644',
                                        'eligYn': 'Patient is NOT eligible based on this criterion'
                                    },
                                    {
                                        'eligCrit': 'Patients must have an electrocardiogram (ECG) within 8 weeks prior to treatment assignment and must have NONE of the following cardiac criteria=> * Clinically important abnormalities in rhythm, conduction or morphology of resting ECG(e.g.complete left bundle branch block, third degree heart block).*Treatment - refractory hypertension defined as a blood pressure of systolic > 140 mmHg and / or diastolic > 90 mmHg which cannot be controlled by anti - hypertensive therapy.',
                                        'eligCritKey': '2645',
                                        'eligYn': 'Patient is eligible based on this criterion'
                                    },
                                    {
                                        'eligCrit': 'Patients with a history of interstitial lung disease or pneumonitis are excluded.',
                                        'eligCritKey': '2646',
                                        'eligYn': 'Criterion not evaluated'
                                    },
                                    {
                                        'eligCrit': 'Patients must have an ECHO or a nuclear study (MUGA or First Pass) within 4 weeks prior to registration to treatment  and must not have a left ventricular ejection fraction(LVEF) < the institutional lower limit of normal(LLN).If the LLN is not defined at a site, the LVEF must be > 50 % for the patient to be eligible.',
                                        'eligCritKey': '2647',
                                        'eligYn': 'Criterion not evaluated'
                                    },
                                    {
                                        'eligCrit': 'Patients must not have known hypersensitivity to trametinib or compounds of similar chemical or biologic composition or to dimethyl sulfoxide(DMSO). ',
                                        'eligCritKey': '2648',
                                        'eligYn': 'Criterion not evaluated'
                                    },
                                    {
                                        'eligCrit': 'Patients must not have a history or current evidence / risk of retinal vein occlusion(RVO).An eye exam is required at baseline.See Appendix II for the Trametinib Ophthalmic Exam Form.',
                                        'eligCritKey': '2649',
                                        'eligYn': 'Criterion not evaluated'
                                    },
                                    {
                                        'eligCrit': 'Patients who previously received MEK inhibitors (including, but not limited to, trametinib, binimetinib, cobimetinib, selumetinib, RO4987655(CH4987655), GDC - 0623 and pimarsertib) will be excluded.',
                                        'eligCritKey': '2650',
                                        'eligYn': 'Patient is NOT eligible based on this criterion'
                                    },
                                    {
                                        'eligCrit': 'Patients who previously received monoclonal antibody therapy(eg.ipilimumab, nivolumab, pembrolizumab and others) must have stopped the prior therapy for 8 or more weeks before starting on trametinib.',
                                        'eligCritKey': '2651',
                                        'eligYn': 'Criterion not evaluated'
                                    },
                                    {
                                        'eligCrit': 'Patients with glioblastoma must have histologically or radiographically confirmed recurrent or progressive WHO Grade 4 glioma(glioblastoma).NOTE=> All baseline and post - baseline disease assessments must be performed using contrast - enhanced cranial MRI or contrast - enhanced CT for subjects who cannot have MRI performed.',
                                        'eligCritKey': '2652',
                                        'eligYn': 'Criterion not evaluated'
                                    }
                                ],
                                'formOid': 'ELIG_CRIT',
                                'patientId': 'OA5',
                                'protTxArmAssTxt': 'Trametinib in NF1 Mutations',
                                'ps': '1',
                                'ptVtStat': 'Alive',
                                'stepNum': '',
                                'treatmentArm': 'CukeTest-113'
                            },
                            'message': 'Treatment evaluation process completed.',
                            'patientSequenceNumber': 'OA5',
                            'status': 'ON_TREATMENT_ARM',
                            'stepNumber': '1',
                            'treatmentArmId': 'CukeTest-113'
                        }
                    ],
                    'patientAssignmentStatus': 'AVAILABLE',
                    'patientAssignmentStatusMessage': 'Treatment evaluation process completed.',
                    'stepNumber': '0',
                    'treatmentArm': {
                        'assayResults': [] as any[],
                        'dateCreated': {
                            '$date': 1488461499519
                        },
                        'description': 'This TA is used by Cuke Test',
                        'exclusionCriterias': [
                            {
                                '_id': '31',
                                'description': 'ASIAN'
                            },
                            {
                                '_id': '32',
                                'description': 'FEMALE'
                            }
                        ],
                        'exclusionDiseases': [
                            {
                                '_id': '10058354',
                                'ctepCategory': 'Non-Small Cell Lung Cancer',
                                'shortName': 'Bronchioloalveolar carcinoma'
                            },
                            {
                                '_id': '10025032',
                                'ctepCategory': 'Non-Small Cell Lung Cancer',
                                'shortName': 'Lung adenocarcinoma'
                            },
                            {
                                '_id': '90600324',
                                'ctepCategory': 'Non-Small Cell Lung Cancer',
                                'shortName': 'Lung adenocar. w/ bronch. feat.'
                            },
                            {
                                '_id': '10029514',
                                'ctepCategory': 'Non-Small Cell Lung Cancer',
                                'shortName': 'Non-small cell lung cancer, NOS'
                            },
                            {
                                '_id': '10025125',
                                'ctepCategory': 'Non-Small Cell Lung Cancer',
                                'shortName': 'Squamous cell lung carcinoma'
                            }
                        ],
                        'exclusionDrugs': [
                            {
                                'drugs': [
                                    {
                                        'drugClass': 'ALK inhibitor',
                                        'drugId': '10001',
                                        'name': 'Doxorubicin Hydrochloride',
                                        'target': 'ALK'
                                    }
                                ]
                            }
                        ],
                        'gene': 'ALK',
                        'maxPatientsAllowed': 35,
                        'name': 'CukeTest113',
                        'numPatientsAssigned': 6,
                        'statusLog': {
                            '1488461499519': 'PENDING',
                            '1488461581': 'OPEN',
                            '1488461581759': 'READY'
                        },
                        'targetId': '113',
                        'targetName': 'Crizotinib',
                        'treatmentArmDrugs': [
                            {
                                'drugId': '113',
                                'name': 'Crizotinib',
                                'pathway': 'ALK'
                            }
                        ],
                        'treatmentArmId': 'CukeTest-113',
                        'treatmentArmStatus': 'OPEN',
                        'variantReport': {
                            'copyNumberVariants': [] as any[],
                            'geneFusions': [
                                {
                                    'alternative': '[chr1:154142875[A',
                                    'armSpecific': false,
                                    'chromosome': '2',
                                    'confirmed': false,
                                    'description': 'ALK translocation',
                                    'geneName': 'ALK',
                                    'identifier': 'TPM3-ALK.T7A20',
                                    'inclusion': true,
                                    'levelOfEvidence': 2.0,
                                    'position': '29446394',
                                    'publicMedIds': [
                                        '23724913'
                                    ],
                                    'rare': false,
                                    'reference': 'A'
                                },
                                {
                                    'alternative': 'C[chrX:13754596[',
                                    'armSpecific': false,
                                    'chromosome': '10',
                                    'confirmed': false,
                                    'description': 'some description',
                                    'geneName': 'FGFR2',
                                    'identifier': 'FGFR2-OFD1.F17O3',
                                    'inclusion': true,
                                    'levelOfEvidence': 3.0,
                                    'position': '123243211',
                                    'rare': false,
                                    'reference': 'C'
                                }
                            ],
                            'indels': [] as any[],
                            'nonHotspotRules': [
                                {
                                    'armSpecific': false,
                                    'gene': 'PTEN',
                                    'inclusion': true,
                                    'levelOfEvidence': 3.0,
                                    'oncominevariantclass': 'deleterious',
                                    'rare': false
                                }
                            ],
                            'singleNucleotideVariants': [] as any[],
                            'unifiedGeneFusions': [] as any[]
                        },
                        'version': '2015-08-06'
                    }
                },
                {
                    'assayMessages': [
                        {
                            'biomarker': 'ICCPTENs',
                            'biopsySequenceNumber': 'MDACC-case1',
                            'orderedDate': {
                                '$date': 1500563346387
                            },
                            'patientSequenceNumber': 'OA5',
                            'reportedDate': {
                                '$date': 1500563346387
                            },
                            'result': 'UNKNOWN',
                            'studyId': 'EAY131'
                        }
                    ],
                    'assignmentType': 'CONFIRMATION',
                    'biopsySequenceNumber': 'BSN-OA5',
                    'dateAssigned': {
                        '$date': 1500563371502
                    },
                    'dateConfirmed': {
                        '$date': 1500563371627
                    },
                    'dateReceivedByECOG': {
                        '$date': 1500563371663
                    },
                    'dateSentToECOG': {
                        '$date': 1500563371627
                    },
                    'patientAssignmentLogic': [
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1048',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1049',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1049-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1050',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1050-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1051',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1052',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1053',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1054',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1055',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1056',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1057',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1058',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1064',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1065',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1066',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1067',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1078',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'SELECTED',
                            'reason': 'The patient and treatment arm match on variant identifier [TPM3-ALK.T7A20].',
                            'treatmentArmId': 'CukeTest-113',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-115',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-117',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-118',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-122',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-122-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'CukeTest-122-1-PENDING',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-128',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-129',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-130',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-131',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-132',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-133',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-133-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-171',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-172',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-173',
                            'treatmentArmVersion': '2016-01-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-177',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'CukeTest-178',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'CukeTest-179',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-185',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-186',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-187',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-188',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-623-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [READY].',
                            'treatmentArmId': 'CukeTest-623-1-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-623-2',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-636-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-636-2',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-770-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-770-2',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-770-3',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-770-4',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-770-5',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-78',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-995',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'CukeTest-PEN-NHR',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [CLOSED].',
                            'treatmentArmId': 'CukeTest-PEN-NHR-CLOSED',
                            'treatmentArmVersion': '2015-01-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'CukeTest-PEN-NHR-PENDING',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-PEN-NHR-READY',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-PEN-NHR-SUSPENDED',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'CukeTest-PEN-NoVar',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-A',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-B',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-C',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-D',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-E',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-F_2015_11_23',
                            'treatmentArmVersion': '2015-11-23'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-F_2015_12_23',
                            'treatmentArmVersion': '2015-12-23'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-F_2016_01_13',
                            'treatmentArmVersion': '2016-01-13'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-H',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-I',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-J',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-L',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'EAY131-O',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-Q',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-S1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-S2',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-T',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-U',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-V',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'EAY131_S3_TRAMET_GNA',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'ARM_NOT_OPEN',
                            'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
                            'treatmentArmId': 'match129.3',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest10_2016_02_01',
                            'treatmentArmVersion': '2016-02-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest11_2016_03_01',
                            'treatmentArmVersion': '2016-03-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest12_2016_03_01',
                            'treatmentArmVersion': '2016-03-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest13_2016_03_01',
                            'treatmentArmVersion': '2016-03-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest14_2016_03_01',
                            'treatmentArmVersion': '2016-03-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest15_2016_03_01',
                            'treatmentArmVersion': '2016-03-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest17',
                            'treatmentArmVersion': '2015-04-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest1_2016_02_01',
                            'treatmentArmVersion': '2016-02-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest2_2016_02_01',
                            'treatmentArmVersion': '2016-02-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest3_2016_01_01',
                            'treatmentArmVersion': '2016-01-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest4_2016_02_01',
                            'treatmentArmVersion': '2016-02-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest6',
                            'treatmentArmVersion': '2016-02-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest7_2016_02_01',
                            'treatmentArmVersion': '2016-02-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest8_2016_02_01',
                            'treatmentArmVersion': '2016-02-01'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'rejoinTest_2015_11_25',
                            'treatmentArmVersion': '2015-11-25'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1034',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1035',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1035-1',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-F',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-K',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-N',
                            'treatmentArmVersion': '2016-05-31'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'EAY131-R',
                            'treatmentArmVersion': '2015-08-06'
                        }
                    ],
                    'patientAssignmentMessages': [
                        {
                            'ineligibleReason': {
                                'eligCritVersion': '1.0',
                                'eligDeath': '',
                                'eligEligible': '',
                                'eligInelig': 'yes',
                                'eligQuestions': [
                                    {
                                        'eligCrit': 'Patients must fulfill all eligibility criteria outlined in Section 3.1 of MATCH Master Protocol(excluding Section 3.1 .6) at the time of registration to treatment step(Step 1, 3, 5, 7).',
                                        'eligCritKey': '2643',
                                        'eligYn': 'Patient is NOT eligible based on this criterion'
                                    },
                                    {
                                        'eligCrit': 'Patients must have deleterious inactivating mutations of NF - 1 by the MATCH NGS assay.See Appendix III for a description of the included NF1 mutations and corresponding Levels of Evidence.',
                                        'eligCritKey': '2644',
                                        'eligYn': 'Patient is NOT eligible based on this criterion'
                                    },
                                    {
                                        'eligCrit': 'Patients must have an electrocardiogram (ECG) within 8 weeks prior to treatment assignment and must have NONE of the following cardiac criteria=> * Clinically important abnormalities in rhythm, conduction or morphology of resting ECG(e.g.complete left bundle branch block, third degree heart block).*Treatment - refractory hypertension defined as a blood pressure of systolic > 140 mmHg and / or diastolic > 90 mmHg which cannot be controlled by anti - hypertensive therapy.',
                                        'eligCritKey': '2645',
                                        'eligYn': 'Patient is eligible based on this criterion'
                                    },
                                    {
                                        'eligCrit': 'Patients with a history of interstitial lung disease or pneumonitis are excluded.',
                                        'eligCritKey': '2646',
                                        'eligYn': 'Criterion not evaluated'
                                    },
                                    {
                                        'eligCrit': 'Patients must have an ECHO or a nuclear study (MUGA or First Pass) within 4 weeks prior to registration to treatment  and must not have a left ventricular ejection fraction(LVEF) < the institutional lower limit of normal(LLN).If the LLN is not defined at a site, the LVEF must be > 50 % for the patient to be eligible.',
                                        'eligCritKey': '2647',
                                        'eligYn': 'Criterion not evaluated'
                                    },
                                    {
                                        'eligCrit': 'Patients must not have known hypersensitivity to trametinib or compounds of similar chemical or biologic composition or to dimethyl sulfoxide(DMSO). ',
                                        'eligCritKey': '2648',
                                        'eligYn': 'Criterion not evaluated'
                                    },
                                    {
                                        'eligCrit': 'Patients must not have a history or current evidence / risk of retinal vein occlusion(RVO).An eye exam is required at baseline.See Appendix II for the Trametinib Ophthalmic Exam Form.',
                                        'eligCritKey': '2649',
                                        'eligYn': 'Criterion not evaluated'
                                    },
                                    {
                                        'eligCrit': 'Patients who previously received MEK inhibitors (including, but not limited to, trametinib, binimetinib, cobimetinib, selumetinib, RO4987655(CH4987655), GDC - 0623 and pimarsertib) will be excluded.',
                                        'eligCritKey': '2650',
                                        'eligYn': 'Patient is NOT eligible based on this criterion'
                                    },
                                    {
                                        'eligCrit': 'Patients who previously received monoclonal antibody therapy(eg.ipilimumab, nivolumab, pembrolizumab and others) must have stopped the prior therapy for 8 or more weeks before starting on trametinib.',
                                        'eligCritKey': '2651',
                                        'eligYn': 'Criterion not evaluated'
                                    },
                                    {
                                        'eligCrit': 'Patients with glioblastoma must have histologically or radiographically confirmed recurrent or progressive WHO Grade 4 glioma(glioblastoma).NOTE=> All baseline and post - baseline disease assessments must be performed using contrast - enhanced cranial MRI or contrast - enhanced CT for subjects who cannot have MRI performed.',
                                        'eligCritKey': '2652',
                                        'eligYn': 'Criterion not evaluated'
                                    }
                                ],
                                'formOid': 'ELIG_CRIT',
                                'patientId': 'OA5',
                                'protTxArmAssTxt': 'Trametinib in NF1 Mutations',
                                'ps': '1',
                                'ptVtStat': 'Alive',
                                'stepNum': '',
                                'treatmentArm': 'CukeTest-113'
                            },
                            'message': 'Treatment evaluation process completed.',
                            'patientSequenceNumber': 'OA5',
                            'status': 'ON_TREATMENT_ARM',
                            'stepNumber': '1',
                            'treatmentArmId': 'CukeTest-113'
                        }
                    ],
                    'patientAssignmentStatus': 'AVAILABLE',
                    'patientAssignmentStatusMessage': 'Treatment evaluation process completed.',
                    'stepNumber': '0',
                    'treatmentArm': {
                        'assayResults': [] as any[],
                        'dateCreated': {
                            '$date': 1488461499519
                        },
                        'description': 'This TA is used by Cuke Test',
                        'exclusionCriterias': [
                            {
                                '_id': '31',
                                'description': 'ASIAN'
                            },
                            {
                                '_id': '32',
                                'description': 'FEMALE'
                            }
                        ],
                        'exclusionDiseases': [
                            {
                                '_id': '10058354',
                                'ctepCategory': 'Non-Small Cell Lung Cancer',
                                'shortName': 'Bronchioloalveolar carcinoma'
                            },
                            {
                                '_id': '10025032',
                                'ctepCategory': 'Non-Small Cell Lung Cancer',
                                'shortName': 'Lung adenocarcinoma'
                            },
                            {
                                '_id': '90600324',
                                'ctepCategory': 'Non-Small Cell Lung Cancer',
                                'shortName': 'Lung adenocar. w/ bronch. feat.'
                            },
                            {
                                '_id': '10029514',
                                'ctepCategory': 'Non-Small Cell Lung Cancer',
                                'shortName': 'Non-small cell lung cancer, NOS'
                            },
                            {
                                '_id': '10025125',
                                'ctepCategory': 'Non-Small Cell Lung Cancer',
                                'shortName': 'Squamous cell lung carcinoma'
                            }
                        ],
                        'exclusionDrugs': [
                            {
                                'drugs': [
                                    {
                                        'drugClass': 'ALK inhibitor',
                                        'drugId': '10001',
                                        'name': 'Doxorubicin Hydrochloride',
                                        'target': 'ALK'
                                    }
                                ]
                            }
                        ],
                        'gene': 'ALK',
                        'maxPatientsAllowed': 35,
                        'name': 'CukeTest113',
                        'numPatientsAssigned': 6,
                        'statusLog': {
                            '1488461499519': 'PENDING',
                            '1488461581': 'OPEN',
                            '1488461581759': 'READY'
                        },
                        'targetId': '113',
                        'targetName': 'Crizotinib',
                        'treatmentArmDrugs': [
                            {
                                'drugId': '113',
                                'name': 'Crizotinib',
                                'pathway': 'ALK'
                            }
                        ],
                        'treatmentArmId': 'CukeTest-113',
                        'treatmentArmStatus': 'OPEN',
                        'variantReport': {
                            'copyNumberVariants': [] as any[],
                            'geneFusions': [
                                {
                                    'alternative': '[chr1:154142875[A',
                                    'armSpecific': false,
                                    'chromosome': '2',
                                    'confirmed': false,
                                    'description': 'ALK translocation',
                                    'geneName': 'ALK',
                                    'identifier': 'TPM3-ALK.T7A20',
                                    'inclusion': true,
                                    'levelOfEvidence': 2.0,
                                    'position': '29446394',
                                    'publicMedIds': [
                                        '23724913'
                                    ],
                                    'rare': false,
                                    'reference': 'A'
                                },
                                {
                                    'alternative': 'C[chrX:13754596[',
                                    'armSpecific': false,
                                    'chromosome': '10',
                                    'confirmed': false,
                                    'description': 'some description',
                                    'geneName': 'FGFR2',
                                    'identifier': 'FGFR2-OFD1.F17O3',
                                    'inclusion': true,
                                    'levelOfEvidence': 3.0,
                                    'position': '123243211',
                                    'rare': false,
                                    'reference': 'C'
                                }
                            ],
                            'indels': [] as any[],
                            'nonHotspotRules': [
                                {
                                    'armSpecific': false,
                                    'gene': 'PTEN',
                                    'inclusion': true,
                                    'levelOfEvidence': 3.0,
                                    'oncominevariantclass': 'deleterious',
                                    'rare': false
                                }
                            ],
                            'singleNucleotideVariants': [] as any[],
                            'unifiedGeneFusions': []
                        },
                        'version': '2015-08-06'
                    }
                }
            ],
            'patientRejoinTriggers': [] as any[],
            'patientSequenceNumber': 'OA5',
            'patientTriggers': [
                {
                    'accrualGroupId': '22334a2sr',
                    'auditDate': {
                        '$date': 1500563346357
                    },
                    'dateCreated': {
                        '$date': 1500563346347
                    },
                    'message': 'Patient trigger for an outside assay patient',
                    'patientSequenceNumber': 'OA5',
                    'patientStatus': 'REGISTRATION_OUTSIDE_ASSAY',
                    'stepNumber': '0',
                    'studyId': 'EAY131'
                },
                {
                    'auditDate': {
                        '$date': 1500563371507
                    },
                    'dateCreated': {
                        '$date': 1500563371507
                    },
                    'patientSequenceNumber': 'OA5',
                    'patientStatus': 'PENDING_CONFIRMATION',
                    'stepNumber': '0',
                    'studyId': 'EAY131'
                },
                {
                    'auditDate': {
                        '$date': 1500563371663
                    },
                    'dateCreated': {
                        '$date': 1500563371663
                    },
                    'patientSequenceNumber': 'OA5',
                    'patientStatus': 'PENDING_APPROVAL',
                    'stepNumber': '0',
                    'studyId': 'EAY131'
                },
                {
                    'auditDate': {
                        '$date': 1500563373677
                    },
                    'dateCreated': {
                        '$date': 1500563373677
                    },
                    'message': 'Treatment evaluation process completed.',
                    'patientSequenceNumber': 'OA5',
                    'patientStatus': 'ON_TREATMENT_ARM',
                    'stepNumber': '1',
                    'studyId': 'EAY131'
                }
            ],
            'priorDrugs': [] as any[],
            'races': [
                'WHITE'
            ],
            'registrationDate': {
                '$date': 1500563346347
            },
            'stateToken': {
                '$uuid': '7cf1ff23aba64d88a1d791c78ff0b60b'
            }
        };

        return patient as any;
    }

    static makeOutsideAssayComparisonVariantReportData = () => {
        return {
            psn: 'value',
            currentPatientStatus: 'value',
            currentStepNumber: 'value',
            concordance: 'value',
            outsideData: {
                analysisId: 'value',
                assays: ['value'],
                variantReport: {},
                assignmentReport: {
                    patientAssignmentLogic: [
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1048',
                            'treatmentArmVersion': '2015-08-06'
                        },
                        {
                            'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH',
                            'reason': 'The patient contains no matching variant.',
                            'treatmentArmId': 'CukeTest-1049',
                            'treatmentArmVersion': '2015-08-06'
                        }
                    ]
                },
                tvc_version: 'value',
                pool1: 1,
                pool2: 1,
                mapd: 'value',
                cellularity: 'value',
                showPools: false
            },
            matchData: {
                analysisId: 'value',
                assays: ['value'],
                variantReport: {},
                assignmentReport: {
                },
                tvc_version: 'value',
                pool1: 1,
                pool2: 1,
                mapd: 'value',
                cellularity: 'value',
                showPools: false
            },
            comparisonVariantReport: {
                singleNucleotideVariantAndIndels: ['value'],
                copyNumberVariants: ['value'],
                unifiedGeneFusions: ['value']
            },
        } as VariantReportComparisonData;
    }

    static makePatientVariantReportOcpData = () => {
        return {
            variantReport: {
                patientSequenceNumber: '11276',
                patientStatus: 'PENDING_CONFIRMATION',
                step: 0,
                concordance: 'YES',
                variantReportStatus: 'CONFIRMED',
                variantReportDate: 'August 26, 2016 3:28 PM GMT',
                user: 'TA commettee',
                biopsySequenceNumber: 'T-16-000762',
                molecularSequenceNumber: 'MSN17772',
                analysisId: 'MSN17772_v1_92ad9833-e79a-4807-b1f3-6be88a0ab824',
                mapd: '0.317',
                cellularity: '1.000000',
                fileReceivedDate: 'August 25, 2016 10:13 PM GMT',
                torrentVariantCallerVersion: '5.0-9'
            }
        } as any;
    }

    static makePatientCopyNumberReportData = () => {
        return {
            variantReport: {
                patientSequenceNumber: '11276',
                patientStatus: 'PENDING_CONFIRMATION',
                step: 0,
                concordance: 'YES',
                variantReportStatus: 'CONFIRMED',
                variantReportDate: 'August 26, 2016 3:28 PM GMT',
                user: 'TA commettee',
                biopsySequenceNumber: 'T-16-000762',
                molecularSequenceNumber: 'MSN17772',
                analysisId: 'MSN17772_v1_92ad9833-e79a-4807-b1f3-6be88a0ab824',
                mapd: '0.317',
                cellularity: '1.000000',
                fileReceivedDate: 'August 25, 2016 10:13 PM GMT',
                torrentVariantCallerVersion: '5.0-9'
            }
        } as any;
    }

    static makePatientVariantReportFileInfoData = () => {
        return {
            variantReport: {
                patientSequenceNumber: '11276',
                patientStatus: 'PENDING_CONFIRMATION',
                step: 0,
                concordance: 'YES',
                variantReportStatus: 'CONFIRMED',
                variantReportDate: 'August 26, 2016 3:28 PM GMT',
                user: 'TA commettee',
                biopsySequenceNumber: 'T-16-000762',
                molecularSequenceNumber: 'MSN17772',
                analysisId: 'MSN17772_v1_92ad9833-e79a-4807-b1f3-6be88a0ab824',
                mapd: '0.317',
                cellularity: '1.000000',
                fileReceivedDate: 'August 25, 2016 10:13 PM GMT',
                torrentVariantCallerVersion: '5.0-9'
            }
        } as any;
    }
}

export class PatientApiServiceMock {

    // getPatientDetails(psn: any): Observable<any> {
    //     let testdata: any = {
    //         '_id': '58c33121d4c6569b736592fd',
    //         '_class': 'gov.match.model.Patient',
    //         'patientSequenceNumber': '1067',
    //         'gender': 'MALE',
    //         'ethnicity': 'PATIENT_REFUSAL',
    //         'races': [
    //             'WHITE'
    //         ],
    //         'patientRejoinTriggers': [] as any[],
    //         'patientTriggers': [{
    //             'studyId': 'EAY131',
    //             'patientSequenceNumber': '1067',
    //             'stepNumber': '0',
    //             'patientStatus': 'REGISTRATION',
    //             'message': 'Patient trigger',
    //             'accrualGroupId': '22334a2sr',
    //             'dateCreated': '2017-03-10T23:05:05.602Z',
    //             'auditDate': '2017-03-10T23:05:05.611Z'
    //         },
    //         {
    //             'studyId': 'EAY131',
    //             'patientSequenceNumber': '1067',
    //             'stepNumber': '0',
    //             'patientStatus': 'PENDING_CONFIRMATION',
    //             'dateCreated': '2017-03-10T23:05:27.213Z',
    //             'auditDate': '2017-03-10T23:05:27.213Z'
    //         }
    //         ],
    //         'biopsies': [{
    //             'dateCreated': '2017-03-10T23:05:05.657Z',
    //             'biopsySequenceNumber': 'BSN-1067',
    //             'nextGenerationSequences': [{
    //                 'ngsRunNumber': '1',
    //                 'dateReceived': '2017-03-10T23:05:07.306Z',
    //                 'dateVerified': '2017-03-10T23:05:07.932Z',
    //                 'status': 'CONFIRMED',
    //                 'ionReporterResults': {
    //                     'jobName': 'JOB-1067',
    //                     'molecularSequenceNumber': 'MSN-1067',
    //                     'dnaBamFilePath': '/tmp/patient-1067/biopsy-BSN-1067/ngs-JOB-1067/sample1.bam',
    //                     'rnaBamFilePath': '/tmp/patient-1067/biopsy-BSN-1067/ngs-JOB-1067/sample2.bam',
    //                     'vcfFilePath': '/tmp/patient-1067/biopsy-BSN-1067/ngs-JOB-1067/1067_variants.vcf',
    //                     'variantReport': {
    //                         'singleNucleotideVariants': [{
    //                             'confirmed': true,
    //                             'gene': 'KIT',
    //                             'exon': '22',
    //                             'metadata': {
    //                                 '_id': 'b9e93b0a-d4af-4f63-b1fd-0fd617772222'
    //                             },
    //                             'chromosome': 'chr1',
    //                             'position': '11184573',
    //                             'identifier': 'match1067',
    //                             'reference': 'G',
    //                             'alternative': 'A',
    //                             'filter': 'PASS',
    //                             'transcript': 'NM_004958.3',
    //                             'location': 'exonic',
    //                             'readDepth': 2124,
    //                             'rare': false,
    //                             'alleleFrequency': 1.0,
    //                             'flowAlternativeAlleleObservationCount': '350',
    //                             'flowReferenceAlleleObservations': '1998',
    //                             'referenceAlleleObservations': 2120,
    //                             'alternativeAlleleObservationCount': 0,
    //                             'inclusion': true,
    //                             'armSpecific': false
    //                         }],
    //                         'indels': [] as any[],
    //                         'copyNumberVariants': [] as any[],
    //                         'geneFusions': [] as any[],
    //                         'unifiedGeneFusions': [] as any[],
    //                         'nonHotspotRules': [] as any[],
    //                         'createdDate': '2017-03-10T23:05:07.304Z'
    //                     }
    //                 },
    //                 'tvcVersion': '4.2-13',
    //                 'oncomineVariantAnnotationToolVersion': '1.0.5'
    //             }],
    //             'assayMessages': [{
    //                 'patientSequenceNumber': '1067',
    //                 'biopsySequenceNumber': 'BSN-1067',
    //                 'biomarker': 'ICCPTENs',
    //                 'orderedDate': '2017-03-10T23:05:06.892Z'
    //             },
    //             {
    //                 'patientSequenceNumber': '1067',
    //                 'biopsySequenceNumber': 'BSN-1067',
    //                 'biomarker': 'ICCPTENs',
    //                 'result': 'INDETERMINATE',
    //                 'orderedDate': '2017-03-10T23:05:06.892Z',
    //                 'reportedDate': '2017-03-10T23:05:06.984Z'
    //             },
    //             {
    //                 'patientSequenceNumber': '1067',
    //                 'biopsySequenceNumber': 'BSN-1067',
    //                 'biomarker': 'ICCMSH2s',
    //                 'orderedDate': '2017-03-10T23:05:07.062Z'
    //             },
    //             {
    //                 'patientSequenceNumber': '1067',
    //                 'biopsySequenceNumber': 'BSN-1067',
    //                 'biomarker': 'ICCMSH2s',
    //                 'result': 'POSITIVE',
    //                 'orderedDate': '2017-03-10T23:05:07.062Z',
    //                 'reportedDate': '2017-03-10T23:05:07.138Z'
    //             }
    //             ],
    //             'pathologyReportMessages': [] as any[],
    //             'mdAndersonMessages': [{
    //                 'patientSequenceNumber': '1067',
    //                 'biopsySequenceNumber': 'BSN-1067',
    //                 'reportedDate': '2017-03-10T23:05:05.644Z',
    //                 'message': 'SPECIMEN_RECEIVED'
    //             },
    //             {
    //                 'molecularSequenceNumber': 'MSN-1067',
    //                 'destinationSite': 'Boston',
    //                 'trackingNumber': 'TN-1067',
    //                 'dnaConcentration': '',
    //                 'dnaVolume': '',
    //                 'cDnaConcentration': '',
    //                 'cDnaVolume': '',
    //                 'patientSequenceNumber': '1067',
    //                 'biopsySequenceNumber': 'BSN-1067',
    //                 'reportedDate': '2017-03-10T23:05:05.682Z',
    //                 'message': 'NUCLEIC_ACID_SENDOUT',
    //                 '_class': 'gov.match.model.message.NucleicAcidsShippingMessage'
    //             }
    //             ],
    //             'failure': false,
    //             'associatedPatientStatus': 'REGISTRATION'
    //         }],
    //         'currentStepNumber': '0',
    //         'currentPatientStatus': 'PENDING_CONFIRMATION',
    //         'patientAssignments': [{
    //             'dateAssigned': '2017-03-10T23:05:27.209Z',
    //             'biopsySequenceNumber': 'BSN-1067',
    //             'assayMessages': [{
    //                 'patientSequenceNumber': '1067',
    //                 'biopsySequenceNumber': 'BSN-1067',
    //                 'biomarker': 'ICCPTENs',
    //                 'result': 'INDETERMINATE',
    //                 'orderedDate': '2017-03-10T23:05:06.892Z',
    //                 'reportedDate': '2017-03-10T23:05:06.984Z'
    //             },
    //             {
    //                 'patientSequenceNumber': '1067',
    //                 'biopsySequenceNumber': 'BSN-1067',
    //                 'biomarker': 'ICCMSH2s',
    //                 'result': 'POSITIVE',
    //                 'orderedDate': '2017-03-10T23:05:07.062Z',
    //                 'reportedDate': '2017-03-10T23:05:07.138Z'
    //             }
    //             ],
    //             'treatmentArm': {
    //                 '_id': 'CukeTest-1066',
    //                 'name': 'CukeTest-1066',
    //                 'version': '2015-08-06',
    //                 'description': 'TA used by Cuke test',
    //                 'targetId': '1066',
    //                 'targetName': 'Sunitinib',
    //                 'gene': 'cKIT',
    //                 'treatmentArmDrugs': [{
    //                     'drugId': '1066',
    //                     'name': 'Sunitinib',
    //                     'pathway': 'cKIT'
    //                 }],
    //                 'exclusionDiseases': [{
    //                     '_id': '10066351',
    //                     'ctepCategory': 'Renal Cell Carcinoma',
    //                     'shortName': 'Collecting duct renal cancer'
    //                 },
    //                 {
    //                     '_id': '10033702',
    //                     'ctepCategory': 'Renal Cell Carcinoma',
    //                     'shortName': 'Papillary renal cell carcinoma'
    //                 },
    //                 {
    //                     '_id': '10066352',
    //                     'ctepCategory': 'Renal Cell Carcinoma',
    //                     'shortName': 'RCC w/ sarcomatoid features'
    //                 },
    //                 {
    //                     '_id': '10009251',
    //                     'ctepCategory': 'Renal Cell Carcinoma',
    //                     'shortName': 'RCC, clear cell adenocarcinoma'
    //                 },
    //                 {
    //                     '_id': '10038415',
    //                     'ctepCategory': 'Renal Cell Carcinoma',
    //                     'shortName': 'Renal cell carcinoma, NOS'
    //                 },
    //                 {
    //                     '_id': '10033630',
    //                     'ctepCategory': 'Neuroendocrine Cancer',
    //                     'shortName': 'Islet cell tumors - pancreas'
    //                 },
    //                 {
    //                     '_id': '10051066',
    //                     'ctepCategory': 'Non-Rhabdomyosarcoma Soft Tissue Sarcoma',
    //                     'shortName': 'Gastrointestinal stromal tumor'
    //                 }
    //                 ],
    //                 'exclusionDrugs': [{
    //                     'drugs': [{
    //                         'drugId': '',
    //                         'name': 'Sunitinib'
    //                     }]
    //                 },
    //                 {
    //                     'drugs': [{
    //                         'drugId': '',
    //                         'name': 'Imatinib'
    //                     }]
    //                 },
    //                 {
    //                     'drugs': [{
    //                         'drugId': '',
    //                         'name': 'Flumatinib'
    //                     }]
    //                 },
    //                 {
    //                     'drugs': [{
    //                         'drugId': '',
    //                         'name': 'Dasatinib'
    //                     }]
    //                 },
    //                 {
    //                     'drugs': [{
    //                         'drugId': '',
    //                         'name': 'Ponatinib'
    //                     }]
    //                 },
    //                 {
    //                     'drugs': [{
    //                         'drugId': '',
    //                         'name': 'Cabozantinib'
    //                     }]
    //                 },
    //                 {
    //                     'drugs': [{
    //                         'drugId': '',
    //                         'name': 'Nilotinib'
    //                     }]
    //                 },
    //                 {
    //                     'drugs': [{
    //                         'drugId': '',
    //                         'name': 'Pazopanib'
    //                     }]
    //                 },
    //                 {
    //                     'drugs': [{
    //                         'drugId': '',
    //                         'name': 'Regorafenib'
    //                     }]
    //                 },
    //                 {
    //                     'drugs': [{
    //                         'drugId': '',
    //                         'name': 'Sorafenib'
    //                     }]
    //                 },
    //                 {
    //                     'drugs': [{
    //                         'drugId': '',
    //                         'name': 'Motesanib'
    //                     }]
    //                 },
    //                 {
    //                     'drugs': [{
    //                         'drugId': '',
    //                         'name': 'Rickroll'
    //                     }]
    //                 }
    //                 ],
    //                 'exclusionCriterias': [] as any[],
    //                 'assayResults': [{
    //                     'gene': 'MSH2',
    //                     'assayResultStatus': 'POSITIVE',
    //                     'assayVariant': 'EMPTY',
    //                     'levelOfEvidence': 1.39999997615814
    //                 }],
    //                 'numPatientsAssigned': 1,
    //                 'maxPatientsAllowed': 35,
    //                 'treatmentArmStatus': 'OPEN',
    //                 'variantReport': {
    //                     'singleNucleotideVariants': [{
    //                         'confirmed': false,
    //                         'publicMedIds': [
    //                             '18955458'
    //                         ],
    //                         'geneName': 'KIT',
    //                         'chromosome': 'chr4',
    //                         'position': '55593613',
    //                         'identifier': 'COSM1257',
    //                         'reference': 'T',
    //                         'alternative': 'A',
    //                         'description': 'Activation mutation',
    //                         'rare': false,
    //                         'levelOfEvidence': 2.0,
    //                         'inclusion': true,
    //                         'armSpecific': false
    //                     },
    //                     {
    //                         'confirmed': false,
    //                         'publicMedIds': [
    //                             '18955458'
    //                         ],
    //                         'geneName': 'KIT',
    //                         'chromosome': 'chr4',
    //                         'position': '55593613',
    //                         'identifier': 'COSM1260',
    //                         'reference': 'T',
    //                         'alternative': 'G',
    //                         'description': 'Activation mutation',
    //                         'rare': false,
    //                         'levelOfEvidence': 2.0,
    //                         'inclusion': true,
    //                         'armSpecific': false
    //                     },
    //                     {
    //                         'confirmed': false,
    //                         'publicMedIds': [
    //                             '18955458'
    //                         ],
    //                         'geneName': 'KIT',
    //                         'chromosome': 'chr4',
    //                         'position': '55594258',
    //                         'identifier': 'COSM12706',
    //                         'reference': 'T',
    //                         'alternative': 'C',
    //                         'description': 'Activation mutation',
    //                         'rare': false,
    //                         'levelOfEvidence': 2.0,
    //                         'inclusion': true,
    //                         'armSpecific': false
    //                     },
    //                     {
    //                         'confirmed': false,
    //                         'publicMedIds': [
    //                             '18955458'
    //                         ],
    //                         'geneName': 'KIT',
    //                         'chromosome': 'chr4',
    //                         'position': '55595519',
    //                         'identifier': 'COSM12708',
    //                         'reference': 'C',
    //                         'alternative': 'T',
    //                         'description': 'Activation mutation',
    //                         'rare': false,
    //                         'levelOfEvidence': 2.0,
    //                         'inclusion': true,
    //                         'armSpecific': false
    //                     },
    //                     {
    //                         'confirmed': false,
    //                         'geneName': 'KIT',
    //                         'chromosome': 'chr1',
    //                         'position': '11184573',
    //                         'identifier': 'match1066',
    //                         'reference': 'G',
    //                         'alternative': 'A',
    //                         'description': 'TEST',
    //                         'rare': false,
    //                         'levelOfEvidence': 2.0,
    //                         'inclusion': true,
    //                         'armSpecific': false
    //                     },
    //                     {
    //                         'confirmed': false,
    //                         'publicMedIds': [
    //                             '21539479'
    //                         ],
    //                         'geneName': 'KIT',
    //                         'chromosome': 'chr4',
    //                         'position': '55599320',
    //                         'identifier': 'COSM1311',
    //                         'reference': 'G',
    //                         'alternative': 'C',
    //                         'rare': false,
    //                         'levelOfEvidence': 3.0,
    //                         'inclusion': false,
    //                         'armSpecific': false
    //                     },
    //                     {
    //                         'confirmed': false,
    //                         'publicMedIds': [
    //                             '21539479'
    //                         ],
    //                         'geneName': 'KIT',
    //                         'chromosome': 'chr4',
    //                         'position': '55599321',
    //                         'identifier': 'COSM1314',
    //                         'reference': 'A',
    //                         'alternative': 'T',
    //                         'rare': false,
    //                         'levelOfEvidence': 3.0,
    //                         'inclusion': false,
    //                         'armSpecific': false
    //                     },
    //                     {
    //                         'confirmed': false,
    //                         'publicMedIds': [
    //                             '21539479'
    //                         ],
    //                         'geneName': 'KIT',
    //                         'chromosome': 'chr4',
    //                         'position': '55599333',
    //                         'identifier': 'COSM1316',
    //                         'reference': 'A',
    //                         'alternative': 'G',
    //                         'rare': false,
    //                         'levelOfEvidence': 3.0,
    //                         'inclusion': false,
    //                         'armSpecific': false
    //                     },
    //                     {
    //                         'confirmed': false,
    //                         'publicMedIds': [
    //                             '21539479'
    //                         ],
    //                         'geneName': 'KIT',
    //                         'chromosome': 'chr4',
    //                         'position': '55599340',
    //                         'identifier': 'COSM1321',
    //                         'reference': 'T',
    //                         'alternative': 'A',
    //                         'rare': false,
    //                         'levelOfEvidence': 3.0,
    //                         'inclusion': false,
    //                         'armSpecific': false
    //                     },
    //                     {
    //                         'confirmed': false,
    //                         'geneName': 'KIT',
    //                         'chromosome': 'chr4',
    //                         'position': '55599340',
    //                         'identifier': 'COSM1322',
    //                         'reference': 'T',
    //                         'alternative': 'G',
    //                         'rare': false,
    //                         'levelOfEvidence': 3.0,
    //                         'inclusion': false,
    //                         'armSpecific': false
    //                     },
    //                     {
    //                         'confirmed': false,
    //                         'geneName': 'KIT',
    //                         'chromosome': 'chr4',
    //                         'position': '55599341',
    //                         'identifier': 'COSM18681',
    //                         'reference': 'T',
    //                         'alternative': 'G',
    //                         'rare': false,
    //                         'levelOfEvidence': 3.0,
    //                         'inclusion': false,
    //                         'armSpecific': false
    //                     },
    //                     {
    //                         'confirmed': false,
    //                         'geneName': 'KIT',
    //                         'chromosome': 'chr4',
    //                         'position': '55602664',
    //                         'identifier': 'COSM13172',
    //                         'reference': 'G',
    //                         'alternative': 'C',
    //                         'rare': false,
    //                         'levelOfEvidence': 3.0,
    //                         'inclusion': false,
    //                         'armSpecific': false
    //                     }
    //                     ],
    //                     'indels': [] as any[],
    //                     'copyNumberVariants': [] as any[],
    //                     'geneFusions': [] as any[],
    //                     'unifiedGeneFusions': [] as any[],
    //                     'nonHotspotRules': []
    //                 },
    //                 'statusLog': {
    //                     '1488461547861': 'PENDING',
    //                     '1488461594550': 'READY',
    //                     '1488461594': 'OPEN'
    //                 },
    //                 'dateCreated': '2017-03-02T13:32:27.861Z'
    //             },
    //             'patientAssignmentStatus': 'AVAILABLE',
    //             'patientAssignmentLogic': [{
    //                 'treatmentArmId': 'CukeTest-1034',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1035',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1035-1',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1048',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1049',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1049-1',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1050',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1050-1',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1051',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1052',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1053',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1054',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1055',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1056',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1057',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1058',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1064',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1065',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1066',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant. The patient\'s IHC MSH2 result match the IHC MSH2 rule for the treatment arm [RES:POSITIVE, VAR:EMPTY]. The variant\'s level of evidence for the treatment arm is 1.4. The patient was selected for this treatment arm because it has the highest level of evidence of 1.4.',
    //                 'patientAssignmentReasonCategory': 'SELECTED'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1067',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient and treatment arm match on variant identifier [match1067]. The patient\'s IHC assay results does not match any of the arm\'s IHC assay rule(s).',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-1078',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant. The patient\'s IHC MSH2 result match the IHC MSH2 rule for the treatment arm [RES:POSITIVE, VAR:NEGATIVE]. The variant\'s level of evidence for the treatment arm is 4.0. The patient was not selected for this treatment arm because its level of evidence is 4.0 and is lower than the one chosen.',
    //                 'patientAssignmentReasonCategory': 'LEVEL_OF_EVIDENCE_TIE_BREAKER'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-113',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-115',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-117',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-118',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-122',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-122-1',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-122-1-PENDING',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
    //                 'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-128',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-129',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-130',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-131',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-132',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-133',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-133-1',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-171',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-172',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-173',
    //                 'treatmentArmVersion': '2016-01-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-177',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-178',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
    //                 'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-179',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
    //                 'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-185',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-186',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-187',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-188',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-623-1',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-623-1-1',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the status is [READY].',
    //                 'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-623-2',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-636-1',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-636-2',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-770-1',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-770-2',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-770-3',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-770-4',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-770-5',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-78',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-995',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-PEN-NHR',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
    //                 'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-PEN-NHR-CLOSED',
    //                 'treatmentArmVersion': '2015-01-01',
    //                 'reason': 'The patient is excluded from this treatment arm because the status is [CLOSED].',
    //                 'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-PEN-NHR-PENDING',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
    //                 'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-PEN-NHR-READY',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-PEN-NHR-SUSPENDED',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'CukeTest-PEN-NoVar',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
    //                 'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-A',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-B',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-C',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-D',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-E',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-F',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-F_2015_11_23',
    //                 'treatmentArmVersion': '2015-11-23',
    //                 'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-F_2015_12_23',
    //                 'treatmentArmVersion': '2015-12-23',
    //                 'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-F_2016_01_13',
    //                 'treatmentArmVersion': '2016-01-13',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-G',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-H',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-I',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-J',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-K',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-L',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-O',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
    //                 'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-Q',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-R',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-S1',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-S2',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-T',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-U',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-V',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131_S3_TRAMET_GNA',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
    //                 'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
    //             },
    //             {
    //                 'treatmentArmId': 'match129.3',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the status is [PENDING].',
    //                 'patientAssignmentReasonCategory': 'ARM_NOT_OPEN'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest10_2016_02_01',
    //                 'treatmentArmVersion': '2016-02-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest11_2016_03_01',
    //                 'treatmentArmVersion': '2016-03-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest12_2016_03_01',
    //                 'treatmentArmVersion': '2016-03-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest13_2016_03_01',
    //                 'treatmentArmVersion': '2016-03-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest14_2016_03_01',
    //                 'treatmentArmVersion': '2016-03-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest15_2016_03_01',
    //                 'treatmentArmVersion': '2016-03-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest17',
    //                 'treatmentArmVersion': '2015-04-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest1_2016_02_01',
    //                 'treatmentArmVersion': '2016-02-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest2_2016_02_01',
    //                 'treatmentArmVersion': '2016-02-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest3_2016_01_01',
    //                 'treatmentArmVersion': '2016-01-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest4_2016_02_01',
    //                 'treatmentArmVersion': '2016-02-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest6',
    //                 'treatmentArmVersion': '2016-02-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest7_2016_02_01',
    //                 'treatmentArmVersion': '2016-02-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest8_2016_02_01',
    //                 'treatmentArmVersion': '2016-02-01',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest_2015_11_25',
    //                 'treatmentArmVersion': '2015-11-25',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             },
    //             {
    //                 'treatmentArmId': 'rejoinTest_cc',
    //                 'treatmentArmVersion': '2015-08-06',
    //                 'reason': 'The patient is excluded from this treatment arm because the patient has disease(s) Lung adenocarcinoma.',
    //                 'patientAssignmentReasonCategory': 'RECORD_BASED_EXCLUSION'
    //             },
    //             {
    //                 'treatmentArmId': 'EAY131-N',
    //                 'treatmentArmVersion': '2016-05-31',
    //                 'reason': 'The patient contains no matching variant.',
    //                 'patientAssignmentReasonCategory': 'NO_VARIANT_MATCH'
    //             }
    //             ],
    //             'stepNumber': '0',
    //             'assignmentType': 'STANDARD',
    //             'patientAssignmentMessages': []
    //         }],
    //         'diseases': [{
    //             '_id': '10025032',
    //             'ctepCategory': 'Lung, Mediastinal and Pleural Neoplasm',
    //             'ctepSubCategory': 'Non-Small Cell Lung Cancer',
    //             'ctepTerm': 'Lung adenocarcinoma',
    //             'shortName': 'Lung adenocarcinoma'
    //         }],
    //         'concordance': 'Y',
    //         'priorDrugs': [{
    //             'drugs': [{
    //                 'drugId': '781450',
    //                 'name': 'VS-6063 (Defactinib)',
    //                 'drugClass': 'NF2 Loss',
    //                 'target': 'NF2'
    //             }]
    //         }],
    //         'analyses': {
    //             '1234': {
    //                 variantReport: 'test',
    //                 assignmentReport: 'test',
    //                 assignmentHistory: 'test'
    //             }
    //         },
    //         'exclusionCriterias': [] as any[],
    //         'registrationDate': '2017-03-10T23:05:05.602Z'
    //     };

    //     return Observable.of(testdata);
    // }

    getPatientList(page: number,
        size: number,
        sortOrder: string,
        sortBy: string,
        filter: string,
        isOutsideAssayWorkflow?: boolean): Observable<any[]> {
        let testData: any = [
            {
                'currentPatientStatus': 'REGISTRATION',
                'currentStepNumber': '0',
                'diseases': [] as any[],
                'isOutsideAssayWorkflow': false,
                'offTrialDate': null,
                'patientSequenceNumber': '1001re',
                'registrationDate': {
                    '$date': 1488461754641
                }
            },
            {
                'currentPatientStatus': 'REGISTRATION',
                'currentStepNumber': '0',
                'diseases': [] as any[],
                'isOutsideAssayWorkflow': false,
                'offTrialDate': null,
                'patientSequenceNumber': '1006',
                'registrationDate': {
                    '$date': 1488585127999
                }
            },
            {
                'currentPatientStatus': 'REGISTRATION',
                'currentStepNumber': '0',
                'diseases': [] as any[],
                'isOutsideAssayWorkflow': false,
                'offTrialDate': null,
                'patientSequenceNumber': '1007',
                'registrationDate': {
                    '$date': 1488585132732
                }
            },
            {
                'currentPatientStatus': 'REGISTRATION',
                'currentStepNumber': '0',
                'diseases': [] as any[],
                'isOutsideAssayWorkflow': false,
                'offTrialDate': null,
                'patientSequenceNumber': '1008',
                'registrationDate': {
                    '$date': 1489417580128
                }
            },
            {
                'currentPatientStatus': 'REGISTRATION',
                'currentStepNumber': '0',
                'diseases': [] as any[],
                'isOutsideAssayWorkflow': false,
                'offTrialDate': null,
                'patientSequenceNumber': '1009',
                'registrationDate': {
                    '$date': 1488585122475
                }
            },
            {
                'currentPatientStatus': 'REGISTRATION',
                'currentStepNumber': '0',
                'diseases': [] as any[],
                'isOutsideAssayWorkflow': false,
                'offTrialDate': null,
                'patientSequenceNumber': '1010re',
                'registrationDate': {
                    '$date': 1488461958276
                }
            },
            {
                'currentPatientStatus': 'REGISTRATION',
                'currentStepNumber': '0',
                'diseases': [] as any[],
                'isOutsideAssayWorkflow': false,
                'offTrialDate': null,
                'patientSequenceNumber': '1011re',
                'registrationDate': {
                    '$date': 1488461959694
                }
            },
            {
                'currentPatientStatus': 'REGISTRATION',
                'currentStepNumber': '0',
                'diseases': [] as any[],
                'isOutsideAssayWorkflow': false,
                'offTrialDate': null,
                'patientSequenceNumber': '1012',
                'registrationDate': {
                    '$date': 1488585138447
                }
            },
            {
                'currentPatientStatus': 'REGISTRATION',
                'currentStepNumber': '0',
                'diseases': [] as any[],
                'isOutsideAssayWorkflow': false,
                'offTrialDate': null,
                'patientSequenceNumber': '1013',
                'registrationDate': {
                    '$date': 1488461945524
                }
            },
            {
                'currentPatientStatus': 'REGISTRATION',
                'currentStepNumber': '0',
                'diseases': [] as any[],
                'isOutsideAssayWorkflow': false,
                'offTrialDate': null,
                'patientSequenceNumber': '1014',
                'registrationDate': {
                    '$date': 1488461947169
                }
            }
        ];
        return Observable.of(testData);
    }

    getPatientCount(): Observable<any> {
        return Observable.of(150);
    }

    getPatientTotal(): Observable<any> {
        return Observable.of(350);
    }

    downloadPatientFile(psn: string, url: string): void {
        ;
    }
}
