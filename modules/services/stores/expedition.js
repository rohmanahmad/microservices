'use strict'

const expedisi = ['Indo Ekspedisi',
    'Garuda Ekspedisi',
    'Baraka Ekspedisi',
    'Atri Ekspedisi',
    'Kib Ekspedisi',
    'Pet Kargo Ekspedisi',
    'Pupul Ekspedisi',
    'W3Cargo Ekspedisi',
    'Sentral Ekspedisi',
    'Mandiri Ekspedisi',
    'Indah Ekspedisi',
    'Lodan Ekspedisi',
    'Dumbtruck Ekspedisi',
    'Indah Cargo Ekspedisi',
    'Trans Ekspedisi',
    'Kiki Ekspedisi',
    'Indah Ekspedisi',
    'Sai Ekspedisi',
    'Jne Ekspedisi',
    'Pet Cargo Ekspedisi',
    'Abm Ekspedisi',
    'Sinar Ekspedisi',
    'J&T Ekspedisi',
    'Wisma Ekspedisi',
    'Cardig Ekspedisi',
    'Elnathan Ekspedisi',
    'Jnw Ekspedisi',
    'Pusaka Ekspedisi',
    'Dirga Ekspedisi',
    'Sindo Ekspedisi',
    'Tiga Saudara Ekspedisi',
    'Legapaket Ekspedisi',
    'Vidio Ekspedisi',
    'Karya Ekspedisi',
    'Citylink Ekspedisi',
    'Cmc Ekspedisi',
    'Haris Ekspedisi',
    'Sj Jakarta Ekspedisi',
    'Dumtrak Ekspedisi',
    'Hpm Ekspedisi',
    'Mahkota Ekspedisi',
    'Kalog Ekspedisi',
    'Dian Ekspedisi',
    'Jasa ekspedisi',
    'Msa Ekspedisi',
    'Spx Ekspedisi',
    'Rpx Ekspedisi',
    'Nusantara Ekspedisi',
    'Armas Ekspedisi',
    'Kgp Ekspedisi',
    'Dewata Ekspedisi',
    'Download Ekspedisi',
    'Citilink Ekspedisi',
    'Lingga Ekspedisi',
    'Buana Ekspedisi',
    'Linggau Ekspedisi',
    'Tritunggal Ekspedisi',
    'Mawahana Ekspedisi',
    'Yun Ekspedisi',
    'Barindo Ekspedisi',
    'Pmtoh Ekspedisi',
    'Asperindo Ekspedisi',
    'Bintan Cargo Ekspedisi',
    'Xpress Ekspedisi',
    'Dhl Ekspedisi',
    'Rex Ekspedisi',
    'Mitra Ekspedisi',
    'Bintang Ekspedisi',
    'Fajar Ekspedisi',
    'Bes Ekspedisi',
    'Gaya Ekspedisi',
    'Jnt Ekspedisi',
    'Kerta Ekspedisi',
    'Lex Ekspedisi',
    'Max Ekspedisi',
    'Resota Ekspedisi',
    'Djat Ekspedisi',
    'Ups Ekspedisi',
    'Dakota Ekspedisi',
    'Pos Ekspedisi',
    'Royal Ekspedisi',
    'Tiki Ekspedisi',
    'Mega Ekspedisi',
    'Lion Ekspedisi',
    'Mex Ekspedisi',
    'Cipta Ekspedisi',
    'Alam Ekspedisi',
    'Gcx Ekspedisi',
    'Wahana Ekspedisi',
    'Sriwijaya Ekspedisi',
    'Pt Kai Ekspedisi',
    'J & T Ekspedisi',
    'Mps Ekspedisi',
    'Pahala Ekspedisi',
    'Sakti Ekspedisi',
    'Hwu Ekspedisi',
    'Fedex Ekspedisi',
    'Nct Ekspedisi',
    'Elang Ekspedisi',
    'Panca Ekspedisi',
    'Pegasus Ekspedisi',
    'Esl Ekspedisi',
    'Asri Ekspedisi',
    'Citra Ekspedisi',
    'Banca Ekspedisi',
    'Jaya Ekspedisi',
    'Mentari Ekspedisi',
    'Als Cargo Ekspedisi',
    'Sicepat Ekspedisi',
    'Bmt Ekspedisi',
    'Pelni Ekspedisi',
    'Zaiki Ekspedisi',
    'Lintas Cargo Ekspedisi',
    'Acommerce Ekspedisi',
    'Raja Pindah Ekspedisi',
    'Cobra Ekspedisi',
    'Kobra Ekspedisi',
    'Star Ekspedisi',
    'Pressa Ekspedisi',
    'Sakura Ekspedisi',
    'Damai Ekspedisi',
    'Aneka Ekspedisi',
    'Pandu Ekspedisi',
    'Satria Ekspedisi',
    'Duta Ekspedisi',
    'Santoso Ekspedisi',
    'Repex Ekspedisi',
    'Damri Ekspedisi',
    'Kramat Jati Ekspedisi',
    'Sj Ekspedisi',
    'Lth Ekspedisi',
    'Air Asia Ekspedisi',
    'Gmt Ekspedisi',
    'Cbn Ekspedisi',
    'Airasia Ekspedisi',
    'Thomas Trans Ekspedisi',
    'Aps Cargo Ekspedisi',
    'Express Ekspedisi',
    'Jet Ekspedisi',
    'Prima Ekspedisi',
    'Primex Ekspedisi',
    'Usaha Ekspedisi',
    'Adam Ekspedisi',
    'Mda Ekspedisi',
    'Kdx Ekspedisi',
    'Idex Ekspedisi',
    'Putra Ekspedisi',
    'Kalstar Ekspedisi',
    'Elteha Ekspedisi',
    'Lion Air Ekspedisi',
    'Karyati Ekspedisi',
    'Segoro Ekspedisi',
    'Adam Cargo Ekspedisi',
    'Bsa Express Ekspedisi',
    'Cobra Express Ekspedisi',
    'Dakota Cargo Ekspedisi',
    'Eka Express Ekspedisi',
    'Dhl Express Ekspedisi',
    'Elang Logistik Ekspedisi',
    'Elteha Ekspedisi',
    'Esl Express Ekspedisi',
    'Fedex Ekspedisi',
    'First Logistik Ekspedisi',
    'Garuda Cargo Ekspedisi',
    'Ged Ekspedisi',
    'Herona Express Ekspedisi',
    'Hira Express Ekspedisi',
    'Indah Cargo Ekspedisi',
    'Jne Ekspedisi',
    'J&T Express Ekspedisi',
    'Kantor Pos Ekspedisi',
    'Karya Indah 8 Ekspedisi',
    'Kgp Ekspedisi',
    'Lion Express Ekspedisi',
    'Mentari Ekspedisi',
    'Mex Ekspedisi',
    'Pahala Express Ekspedisi',
    'Pandu Logistics Ekspedisi',
    'Papandayan Ekspedisi',
    'Pcp Cargo Ekspedisi',
    'Rex Express Ekspedisi',
    'Sace Express Ekspedisi',
    'Tiki Ekspedisi',
    'Wahana Ekspedisi',
    'Xpslink Ekspedisi',
    'Pt Transporindo Agung Sejahtera Ekspedisi',
    'Top Kargo Ekspedisi',
    'Elang Buana Perkasa Ekspedisi',
    'Putra Bangka Express Ekspedisi',
    'Pt Songhai Express Ekspedisi',
    '21 Express Ekspedisi',
    'Andean Dua Satu Ekspres Ekspedisi',
    'Chaya Abadi Express Ekspedisi',
    'Klik Logistics Ekspedisi',
    'Cargonesia Ekspedisi',
    'Sentral Cargo Ekspedisi',
    'Nct Cargo Ekspedisi',
    'Java Express Ekspedisi',
    'Gloria Indah Trans Ekspedisi',
    'Sarana Material Ekspedisi',
    'Almaguna Cargo Ekspedisi',
    'Cv Chaya Nusantara Express Ekspedisi',
    'Wahana Ekspedisi',
    'Dinoyo Ekspedisi',
    'Barindo Ekspedisi',
    'Yudha Abadi Samudra Ekspedisi',
    'Niaga Pratama Express Ekspedisi',
    'Rahayu Transco Ekspedisi',
    'Dakota Ekspedisi',
    'Mentor Ekspedisi',
    'Buana Raya Ekspedisi',
    'Panda Ekspedisi',
    'Platinium Logistic Ekspedisi',
    'Antariksa Ekspedisi',
    'Karyati Ekspedisi',
    'Agung Jasa Mandrin Ekspedisi',
    'Sindo Ekspedisi',
    'Atlas Ekspedisi',
    'Aura Abadi Ekspedisi',
    'Dian Multi Kurnia Ekspedisi',
    'Prima Jasa Ekspedisi Ekspedisi',
    'Megaraya Trasindo Ekspedisi',
    'Aj Jaya Mulia Ekspedisi',
    'Sadana Ekspedisi',
    'Pcp Kargo Ekspedisi',
    'Alam Jaya Express Ekspedisi',
    'Dmk Ekspedisi',
    'Hexa Kargo Expresindo Ekspedisi',
    'Jasa Samudra Ekspedisi',
    'Mentari Ekspedisi',
    'Usaha Baru Putra Ekspedisi',
    'Bima Persada Logistic Ekspedisi',
    'Bali Prima Ekspedisi',
    'Sumber Baru Ekspedisi',
    'Bima Agung Ekspedisi',
    'Ltk Ekspedisi',
    'Bintang Jasa Samudra Ekspedisi',
    'Royal Express Indonesia Ekspedisi',
    'Pt Urip Bali Ekspedisi',
    'Tirta Mas Ekspedisi',
    'Abm Express Ekspedisi',
    'Jaya Mas Ekspedisi',
    'Berkat Sejati Ekspedisi',
    'Jalisco Wahana Kencana Ekspedisi',
    'Ksm Trans Ekspedisi',
    'Kusuma Sejahtera Makmur Ekspedisi',
    'Karang Jasa Utama Ekspedisi',
    'Candra Dewi Ekspedisi',
    'Sumber Timor Ekspedisi',
    'Arifin Dirgantara Mandiri Ekspedisi',
    'Csm Cargo Ekspedisi',
    'Mm Logistics Courier Service Ekspedisi',
    'Dharutama Logistics Ekspedisi',
    'Go-Send Instant Delivery',
    'Go-Send Same Day',
    'Grab'
]

const Models = use('Models')
const Expedisi = new Models().model('Expedition.Model')
const md5 = use('md5')
const utils = use('Utils.Helper')
const raw = expedisi.map(x => ({
    id: md5(x),
    name: x,
    wesite: '',
    options: {},
    status: {
        available: true,
        banned: false
    }
}))
class Expedition {
    async handle (args = {}) {
        if (args.type === 'export') await this.export()
        else console.log('ex: node service.js expedition --type [export|...]')
    }
    async export () {
        try {
            await this.upsertMany(raw, Expedisi)
        } catch (e) {
            console.log(e)
        }
    }
    async upsertMany (data = [], M) {
        utils.debugme('updating data to raw collection')
        if (data.length === 0) return null
        for (const x of data) {
            utils.debugme(`upserting data ${x.name}`)
            await M.updateOne({id: x.id}, x, {upsert: true})
        }
    }
}

module.exports = Expedition