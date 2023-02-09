import  Button  from '@mui/material/Button'
import  Avatar  from '@mui/material/Avatar'
import React, { useEffect, useState } from 'react'
import './Calender.css'
import  Pagination  from '@mui/material/Pagination'
import TextField  from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TextsmsIcon from '@mui/icons-material/Textsms';
import Dialog from '@mui/material/Dialog';
import  Typography  from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import  Container  from '@mui/material/Container'
import { Grid } from '@mui/material'
import Forms from './Forms'
import { API_URL } from './Constants/URL'
import axios from 'axios'
// import Pagination from './Pagination'


const Calender = () => {
 
    
    // const [array ,setArray] = useState([{"id":1,"first_name":"Correna","developer":"UI/UX_Designer","email":"crheaume0@epa.gov","phone_number":"512-676-9592","address":"59 Northview Junction","images":require('../../calender/src/Assets/1.jfif'),"colors":'red'},
    // {"id":2,"first_name":"Cal","developer":"UI/UX Designer","colors":'red',"email":"cianiello1@spotify.com","phone_number":"809-864-7404","address":"68239 Raven Place","images":require('../../calender/src/Assets/2.jfif')},
    // {"id":3,"first_name":"Veda","developer":"Backend_Developer","colors":'orange',"email":"vspinello2@infoseek.co.jp","phone_number":"630-940-4827","address":"35472 Longview Park","images":require('../../calender/src/Assets/3.jpg')},
    // {"id":4,"first_name":"Hansiain","developer":"FullStack Developer","colors":'green',"email":"hcraydon3@miibeian.gov.cn","phone_number":"497-768-9798","address":"9 Toban Crossing","images":require('../../calender/src/Assets/4.jfif')},
    // {"id":6,"first_name":"Barry","developer":"Backend Developer","colors":'orange',"email":"bpatel5@google.com.br","phone_number":"229-749-9315","address":"15903 Cherokee Center","images":require('../../calender/src/Assets/5.jpg')},
    // {"id":7,"first_name":"Denny","developer":"UI/UX Designer","colors":'red',"email":"dblaxeland6@slideshare.net","phone_number":"884-404-8601","address":"1 Hansons Court","images":require('../../calender/src/Assets/6.jfif')},
    //{"id":8,"first_name":"Cooper","developer":"Backend Developer","colors":'orange',"email":"cblasetti7@walmart.com","phone_number":"708-700-7415","address":"734 Meadow Vale Center","images":require('../../calender/src/Assets/7.jfif')},
    // {"id":9,"first_name":"Sissie","developer":"FullStack Developer","colors":'green',"email":"sfruen8@irs.gov","phone_number":"942-163-6863","address":"389 Brown Lane","images":require('../../calender/src/Assets/8.jpeg')},
    // {"id":10,"first_name":"Cordell","developer":"Backend Developer","colors":'orange',"email":"cegerton9@about.me","phone_number":"112-107-8138","address":"73 Burning Wood Pass","images":require('../../calender/src/Assets/9.jpg')},
    // {"id":11,"first_name":"Rhonda","developer":"UI/UX Designer","colors":'red',"email":"rmackegga@1und1.de","phone_number":"553-195-0681","address":"2 Lakewood Gardens Road","images":require('../../calender/src/Assets/10.jpg')},
    // {"id":12,"first_name":"Vivien","developer":"FullStack Developer","colors":'green',"email":"vingoldb@bizjournals.com","phone_number":"685-531-3500","address":"65015 Atwood Plaza","images":"http://dummyimage.com/122x100.png/dddddd/000000"},
    // {"id":13,"first_name":"Roddie","developer":"FullStack Developer","colors":'green',"email":"rlillywhitec@yale.edu","phone_number":"309-608-5234","address":"580 Monument Junction","images":"http://dummyimage.com/184x100.png/5fa2dd/ffffff"},
    // {"id":14,"first_name":"Wandis","developer":"FullStack Developer","colors":'green',"email":"wcootesd@bbc.co.uk","phone_number":"355-776-7413","address":"05 Dottie Way","images":"http://dummyimage.com/211x100.png/ff4444/ffffff"},
    // {"id":15,"first_name":"Brigitte","developer":"Backend Developer","colors":'orange',"email":"bmavine@is.gd","phone_number":"768-813-4162","address":"6 Norway Maple Road","images":"http://dummyimage.com/109x100.png/5fa2dd/ffffff"},
    // {"id":16,"first_name":"Dacey","developer":"UI/UX Designer","colors":'red',"email":"dswaytonf@gnu.org","phone_number":"254-884-5875","address":"2473 Browning Alley","images":"http://dummyimage.com/214x100.png/cc0000/ffffff"},
    // {"id":17,"first_name":"Genevra","developer":"Backend Developer","colors":'orange',"email":"gsimonsg@typepad.com","phone_number":"476-958-2686","address":"0880 Thompson Pass","images":"http://dummyimage.com/230x100.png/cc0000/ffffff"},
    // {"id":18,"first_name":"Arron","developer":"FullStack Developer","colors":'green',"email":"awhyteh@google.ca","phone_number":"151-222-4364","address":"592 Corscot Junction","images":"http://dummyimage.com/224x100.png/dddddd/000000"},
    // {"id":19,"first_name":"Gusella","developer":"FullStack Developer","colors":'green',"email":"gstotei@dagondesign.com","phone_number":"455-202-6821","address":"8072 Evergreen Hill","images":"http://dummyimage.com/176x100.png/ff4444/ffffff"},
    // {"id":20,"first_name":"Corina","developer":"UI/UX Deigner","colors":'red',"email":"cjancikj@epa.gov","phone_number":"359-207-8375","address":"04613 Bellgrove Court","images":"http://dummyimage.com/130x100.png/5fa2dd/ffffff"},
    // {"id":21,"first_name":"Ewart","developer":"Backend Developer","colors":'orange',"email":"ecleifek@pbs.org","phone_number":"937-312-6706","address":"05 5th Street","images":"http://dummyimage.com/170x100.png/ff4444/ffffff"},
    // {"id":22,"first_name":"Cordelia","developer":"UI/UX Designer","colors":'red',"email":"cbainesl@gmpg.org","phone_number":"648-378-2721","address":"026 Kings Road","images":"http://dummyimage.com/103x100.png/dddddd/000000"},
    // {"id":23,"first_name":"Whitby","developer":"FullStack Developer","email":"wfrisbym@unblog.fr","phone_number":"986-852-8610","address":"7 Mosinee Junction","images":"http://dummyimage.com/112x100.png/dddddd/000000"},
    // {"id":24,"first_name":"Sayre","developer":"UI/UX Designer","colors":'red',"email":"sbendaren@umich.edu","phone_number":"875-485-3910","address":"0944 Doe Crossing Junction","images":"http://dummyimage.com/171x100.png/dddddd/000000"},
    // {"id":25,"first_name":"Ailene","developer":"Backend Developer","colors":'orange',"email":"awroughtono@cnet.com","phone_number":"826-655-6693","address":"5521 Algoma Plaza","images":"http://dummyimage.com/209x100.png/ff4444/ffffff"},
    // {"id":26,"first_name":"Analiese","developer":"FUllStack Developer","colors":'green',"email":"aportugalp@ameblo.jp","phone_number":"372-465-9944","address":"68 Heffernan Terrace","images":"http://dummyimage.com/205x100.png/dddddd/000000"},
    // {"id":27,"first_name":"Lucille","developer":"Backend Developer","email":"lfitzsymonsq@hc360.com","phone_number":"837-565-0172","address":"37260 Westport Place","images":"http://dummyimage.com/136x100.png/ff4444/ffffff"},
    // {"id":28,"first_name":"Devonne","developer":"Apt 1511","email":"dmingaudr@facebook.com","phone_number":"826-577-4183","address":"2 Basil Hill","images":"http://dummyimage.com/117x100.png/dddddd/000000"},
    // {"id":29,"first_name":"Kendell","developer":"PO Box 50692","email":"kconens@bing.com","phone_number":"411-358-9499","address":"50951 North Hill","images":"http://dummyimage.com/116x100.png/cc0000/ffffff"},
    // {"id":30,"first_name":"Morie","developer":"FullStack Developer","email":"manfossot@jugem.jp","phone_number":"186-915-6062","address":"85 Scoville Point","images":"http://dummyimage.com/247x100.png/5fa2dd/ffffff"},
    // {"id":31,"first_name":"Karita","developer":"UI/UX Designer","email":"khucksu@latimes.com","phone_number":"515-483-8482","address":"2805 Melvin Way","images":"http://dummyimage.com/220x100.png/5fa2dd/ffffff"},
    // {"id":32,"first_name":"Chrissie","developer":"UI/UX Designer","email":"cdowsv@accuweather.com","phone_number":"621-825-8531","address":"9975 Dryden Point","images":"http://dummyimage.com/144x100.png/ff4444/ffffff"},
    // {"id":33,"first_name":"Gabie","developer":"FullStack Developer87","email":"glevingw@cam.ac.uk","phone_number":"740-945-8191","address":"084 Sachtjen Hill","images":"http://dummyimage.com/130x100.png/5fa2dd/ffffff"},
    // {"id":34,"first_name":"Janessa","developer":"Apt 336","email":"jperrellix@go.com","phone_number":"584-928-7175","address":"59135 Barby Point","images":"http://dummyimage.com/131x100.png/5fa2dd/ffffff"},
    // {"id":35,"first_name":"Tricia","developer":"PO Box 34523","email":"tbrownilly@cornell.edu","phone_number":"134-643-8898","address":"701 American Ash Terrace","images":"http://dummyimage.com/149x100.png/dddddd/000000"},
    // {"id":36,"first_name":"Agnes","developer":"PO Box 57430","email":"aposselowz@webnode.com","phone_number":"104-292-2386","address":"482 Esker Alley","images":"http://dummyimage.com/159x100.png/ff4444/ffffff"},
    // {"id":37,"first_name":"Irv","developer":"Backend Developer","email":"icesconi10@dedecms.com","phone_number":"200-377-2342","address":"77501 Monica Parkway","images":"http://dummyimage.com/238x100.png/5fa2dd/ffffff"},
    // {"id":38,"first_name":"Ingelbert","developer":"PO Box 89445","email":"igrabban11@jiathis.com","phone_number":"834-644-9942","address":"700 Warbler Pass","images":"http://dummyimage.com/153x100.png/dddddd/000000"},
    // {"id":39,"first_name":"Fayette","developer":"FullStack Developer57","email":"fpettiford12@facebook.com","phone_number":"492-356-7813","address":"855 Dovetail Avenue","images":"http://dummyimage.com/188x100.png/dddddd/000000"},
    // {"id":40,"first_name":"Leann","developer":"UI/UX Designer","email":"ldrinkhill13@ihg.com","phone_number":"629-727-1218","address":"1239 Bultman Center","images":"http://dummyimage.com/228x100.png/dddddd/000000"},
    // {"id":41,"first_name":"Nicolais","developer":"Backend Developer","email":"nmessier14@home.pl","phone_number":"951-855-1864","address":"365 Lake View Trail","images":"http://dummyimage.com/222x100.png/ff4444/ffffff"},
    // {"id":42,"first_name":"Tamarah","developer":"Apt 65","email":"tmongin15@wunderground.com","phone_number":"339-622-8125","address":"9146 Burning Wood Crossing","images":"http://dummyimage.com/117x100.png/cc0000/ffffff"},
    // {"id":43,"first_name":"Anderson","developer":"UI/UX Designer","email":"adeeley16@samsung.com","phone_number":"395-917-5313","address":"05009 Cardinal Alley","images":"http://dummyimage.com/201x100.png/5fa2dd/ffffff"},
    // {"id":44,"first_name":"Mohandis","developer":"UI/UX Designer","email":"mdawidowitsch17@list-manage.com","phone_number":"414-809-8647","address":"3044 Forest Dale Road","images":"http://dummyimage.com/190x100.png/cc0000/ffffff"},
    // {"id":45,"first_name":"Yorgos","developer":"UI/UX Designer","email":"yyosifov18@godaddy.com","phone_number":"142-344-1696","address":"8 Talisman Place","images":"http://dummyimage.com/113x100.png/cc0000/ffffff"},
    // {"id":46,"first_name":"Mata","developer":"Backend Developer","email":"mkinnach19@blogtalkradio.com","phone_number":"869-410-0438","address":"8 Sloan Center","images":"http://dummyimage.com/241x100.png/5fa2dd/ffffff"},
    // {"id":47,"first_name":"Fidelity","developer":"PO Box 19963","email":"fgossan1a@hhs.gov","phone_number":"550-563-7204","address":"8957 Roxbury Road","images":"http://dummyimage.com/101x100.png/ff4444/ffffff"},
    // {"id":48,"first_name":"Jeni","developer":"Apt 1527","email":"jmckinn1b@ca.gov","phone_number":"620-849-4365","address":"0 Packers Center","images":"http://dummyimage.com/197x100.png/5fa2dd/ffffff"},
    // {"id":49,"first_name":"Yard","developer":"Backend Developer","email":"yshoebottom1c@house.gov","phone_number":"471-800-8107","address":"23647 Vermont Alley","images":"http://dummyimage.com/224x100.png/ff4444/ffffff"},
    // {"id":50,"first_name":"Kendricks","developer":"Backend Developer","email":"kschwanden1d@last.fm","phone_number":"444-290-0855","address":"37 Moose Parkway","images":"http://dummyimage.com/129x100.png/cc0000/ffffff"},
    // {"id":51,"first_name":"Caro","developer":"FullStack Developer","email":"ckalker1e@stanford.edu","phone_number":"410-790-6804","address":"54062 Di Loreto Hill","images":"http://dummyimage.com/104x100.png/dddddd/000000"},
    // {"id":52,"first_name":"Teodoor","developer":"UI/UX Designer","email":"tgrindley1f@gov.uk","phone_number":"624-651-8289","address":"01522 Forest Dale Trail","images":"http://dummyimage.com/203x100.png/cc0000/ffffff"},
    // {"id":53,"first_name":"Diane","developer":"PO Box 49839","email":"dimlin1g@mozilla.com","phone_number":"355-171-3157","address":"71 Lakewood Avenue","images":"http://dummyimage.com/230x100.png/5fa2dd/ffffff"},
    // {"id":54,"first_name":"Cheston","developer":"FullStack Developer8","email":"challigan1h@nymag.com","phone_number":"835-576-5368","address":"432 Sachs Trail","images":"http://dummyimage.com/215x100.png/cc0000/ffffff"},
    // {"id":55,"first_name":"Jaquith","developer":"PO Box 18019","email":"jdondon1i@myspace.com","phone_number":"527-821-7435","address":"0621 Fordem Alley","images":"http://dummyimage.com/173x100.png/cc0000/ffffff"},
    // {"id":56,"first_name":"Cyrille","developer":"PO Box 42408","email":"cfippe1j@businessinsider.com","phone_number":"970-733-4087","address":"2410 Hoepker Lane","images":"http://dummyimage.com/187x100.png/cc0000/ffffff"},
    // {"id":57,"first_name":"Tildie","developer":"Apt 245","email":"tgoble1k@loc.gov","phone_number":"446-681-7342","address":"25 Lake View Hill","images":"http://dummyimage.com/177x100.png/cc0000/ffffff"},
    // {"id":58,"first_name":"Nixie","developer":"Backend Developer","email":"ncelez1l@google.ru","phone_number":"286-521-5722","address":"62642 Algoma Terrace","images":"http://dummyimage.com/233x100.png/cc0000/ffffff"},
    // {"id":59,"first_name":"Noah","developer":"PO Box 18479","email":"ncheine1m@merriam-webster.com","phone_number":"866-386-6167","address":"608 Fremont Trail","images":"http://dummyimage.com/139x100.png/5fa2dd/ffffff"},
    // {"id":60,"first_name":"Bailey","developer":"UI/UX Designer","email":"bdunsmore1n@biblegateway.com","phone_number":"695-549-0552","address":"9749 American Ash Plaza","images":"http://dummyimage.com/155x100.png/cc0000/ffffff"},
    // {"id":61,"first_name":"Margaretta","developer":"PO Box 28100","email":"mphelip1o@ucsd.edu","phone_number":"302-275-4719","address":"315 Warrior Circle","images":"http://dummyimage.com/130x100.png/dddddd/000000"},
    // {"id":62,"first_name":"Yevette","developer":"UI/UX Designer","email":"ywastie1p@cocolog-nifty.com","phone_number":"532-848-3708","address":"0754 Delaware Crossing","images":"http://dummyimage.com/189x100.png/dddddd/000000"},
    // {"id":63,"first_name":"Lil","developer":"PO Box 1492","email":"lgiraudel1q@businessinsider.com","phone_number":"280-402-8085","address":"1 Debra Park","images":"http://dummyimage.com/135x100.png/ff4444/ffffff"},
    // {"id":64,"first_name":"Kip","developer":"UI/UX Designer","email":"kfrise1r@over-blog.com","phone_number":"590-924-7245","address":"91962 Iowa Pass","images":"http://dummyimage.com/205x100.png/cc0000/ffffff"},
    // {"id":65,"first_name":"Hedy","developer":"UI/UX Designer","email":"htaynton1s@prnewswire.com","phone_number":"994-161-5895","address":"89 Gina Terrace","images":"http://dummyimage.com/156x100.png/cc0000/ffffff"},
    // {"id":66,"first_name":"Michaelina","developer":"FullStack Developer","email":"mfeasby1t@blogtalkradio.com","phone_number":"363-437-3982","address":"745 Northland Terrace","images":"http://dummyimage.com/131x100.png/5fa2dd/ffffff"},
    // {"id":67,"first_name":"Josiah","developer":"FullStack Developer","email":"jlangmead1u@wufoo.com","phone_number":"165-580-6876","address":"52668 Ruskin Lane","images":"http://dummyimage.com/121x100.png/5fa2dd/ffffff"},
    // {"id":68,"first_name":"Freddi","developer":"PO Box 97785","email":"fenstone1v@umich.edu","phone_number":"935-130-7381","address":"1499 Graedel Avenue","images":"http://dummyimage.com/111x100.png/dddddd/000000"},
    // {"id":69,"first_name":"Angus","developer":"PO Box 28144","email":"abambrugh1w@epa.gov","phone_number":"301-315-0164","address":"44271 Birchwood Center","images":"http://dummyimage.com/246x100.png/5fa2dd/ffffff"},
    // {"id":70,"first_name":"Rancell","developer":"FullStack Developer","email":"rbugbird1x@cpanel.net","phone_number":"638-524-0438","address":"26 Elmside Plaza","images":"http://dummyimage.com/246x100.png/cc0000/ffffff"},
    // {"id":71,"first_name":"Veronike","developer":"PO Box 49861","email":"vlardeur1y@blogtalkradio.com","phone_number":"590-187-5291","address":"30616 Laurel Court","images":"http://dummyimage.com/240x100.png/5fa2dd/ffffff"},
    // {"id":72,"first_name":"Gilly","developer":"UI/UX Designer","email":"gingon1z@vk.com","phone_number":"490-439-8006","address":"65803 La Follette Crossing","images":"http://dummyimage.com/199x100.png/cc0000/ffffff"},
    // {"id":73,"first_name":"Jethro","developer":"FullStack Developer","email":"jgouldthorpe20@lulu.com","phone_number":"227-597-6693","address":"191 Nobel Circle","images":"http://dummyimage.com/175x100.png/dddddd/000000"},
    // {"id":74,"first_name":"Sallee","developer":"FullStack Developer","email":"ssuddards21@pagesperso-orange.fr","phone_number":"310-272-8071","address":"81 Portage Center","images":"http://dummyimage.com/152x100.png/cc0000/ffffff"},
    // {"id":75,"first_name":"Percival","developer":"UI/UX Designer","email":"pkeijser22@state.gov","phone_number":"598-128-6083","address":"71 Mallory Circle","images":"http://dummyimage.com/248x100.png/5fa2dd/ffffff"},
    // {"id":76,"first_name":"Laetitia","developer":"PO Box 65310","email":"lferrer23@pcworld.com","phone_number":"470-570-3159","address":"7 Mesta Circle","images":"http://dummyimage.com/229x100.png/dddddd/000000"},
    // {"id":77,"first_name":"Gawen","developer":"PO Box 41569","email":"gbevington24@yolasite.com","phone_number":"624-359-9458","address":"7 Crowley Drive","images":"http://dummyimage.com/142x100.png/cc0000/ffffff"},
    // {"id":78,"first_name":"Sibylla","developer":"Backend Developer","email":"srennix25@studiopress.com","phone_number":"165-305-3065","address":"986 Macpherson Alley","images":"http://dummyimage.com/189x100.png/dddddd/000000"},
    // {"id":79,"first_name":"Marylynne","developer":"Apt 745","email":"mchavrin26@businessweek.com","phone_number":"386-184-7156","address":"1 Meadow Vale Hill","images":"http://dummyimage.com/120x100.png/ff4444/ffffff"},
    // {"id":80,"first_name":"Alaster","developer":"PO Box 23229","email":"adegowe27@sourceforge.net","phone_number":"691-759-0997","address":"4 Oak Valley Avenue","images":"http://dummyimage.com/219x100.png/cc0000/ffffff"},
    // {"id":81,"first_name":"Cirilo","developer":"PO Box 88617","email":"cdemanuele28@360.cn","phone_number":"909-736-3577","address":"179 Morning Parkway","images":"http://dummyimage.com/235x100.png/ff4444/ffffff"},
    // {"id":82,"first_name":"Othella","developer":"FullStack Developer","email":"oandriolli29@dell.com","phone_number":"534-982-0901","address":"002 Declaration Street","images":"http://dummyimage.com/104x100.png/dddddd/000000"},
    // {"id":83,"first_name":"Chastity","developer":"PO Box 39610","email":"cbibby2a@comsenz.com","phone_number":"983-357-0184","address":"506 Bellgrove Way","images":"http://dummyimage.com/207x100.png/dddddd/000000"},
    // {"id":84,"first_name":"Osborne","developer":"FullStack Developer","email":"omorilla2b@storify.com","phone_number":"261-746-5821","address":"08 Prentice Avenue","images":"http://dummyimage.com/210x100.png/5fa2dd/ffffff"},
    // {"id":85,"first_name":"Horst","developer":"Apt 298","email":"hnewe2c@posterous.com","phone_number":"515-514-3544","address":"73270 Becker Junction","images":"http://dummyimage.com/141x100.png/dddddd/000000"},
    // {"id":86,"first_name":"Ruperta","developer":"PO Box 78989","email":"rworsall2d@seesaa.net","phone_number":"168-772-7335","address":"05 Crowley Hill","images":"http://dummyimage.com/145x100.png/ff4444/ffffff"},
    // {"id":87,"first_name":"Alta","developer":"UI/UX Designer","email":"aroyan2e@epa.gov","phone_number":"522-931-9786","address":"4154 Bobwhite Alley","images":"http://dummyimage.com/230x100.png/cc0000/ffffff"},
    // {"id":88,"first_name":"Aharon","developer":"UI/UX Designer","email":"amaslen2f@walmart.com","phone_number":"649-222-5662","address":"8202 Thompson Court","images":"http://dummyimage.com/156x100.png/dddddd/000000"},
    // {"id":89,"first_name":"Claresta","developer":"Backend Developer","email":"cciccarello2g@moonfruit.com","phone_number":"695-559-4466","address":"94 Ridgeview Road","images":"http://dummyimage.com/215x100.png/cc0000/ffffff"},
    // {"id":90,"first_name":"Enid","developer":"FullStack Developer","email":"ebodycomb2h@biblegateway.com","phone_number":"893-209-1827","address":"81851 Fairfield Circle","images":"http://dummyimage.com/132x100.png/5fa2dd/ffffff"},
    // {"id":91,"first_name":"Tony","developer":"Backend Developer","email":"tgroundwator2i@blinklist.com","phone_number":"248-145-1932","address":"067 High Crossing Drive","images":"http://dummyimage.com/166x100.png/dddddd/000000"},
    // {"id":92,"first_name":"Wilone","developer":"FullStack Developer","email":"wtesmond2j@alibaba.com","phone_number":"635-181-0354","address":"06188 Green Park","images":"http://dummyimage.com/112x100.png/dddddd/000000"},
    // {"id":93,"first_name":"Sherlock","developer":"PO Box 5175","email":"schieze2k@stumbleupon.com","phone_number":"237-460-7852","address":"334 Sullivan Way","images":"http://dummyimage.com/209x100.png/ff4444/ffffff"},
    // {"id":94,"first_name":"Buckie","developer":"PO Box 26303","email":"bpearce2l@nationalgeographic.com","phone_number":"829-559-9858","address":"36 Corben Place","images":"http://dummyimage.com/165x100.png/dddddd/000000"},
    // {"id":95,"first_name":"Tilda","developer":"FullStack Developer","email":"tsenyard2m@bloglines.com","phone_number":"223-440-8106","address":"39 Hoard Road","images":"http://dummyimage.com/167x100.png/cc0000/ffffff"},
    // {"id":96,"first_name":"Maggi","developer":"Apt 1914","email":"mbraisby2n@blogspot.com","phone_number":"482-291-7853","address":"7356 Sutherland Circle","images":"http://dummyimage.com/231x100.png/5fa2dd/ffffff"},
    // {"id":97,"first_name":"Deva","developer":"Apt 1184","email":"dcrickmer2o@taobao.com","phone_number":"887-382-4049","address":"125 Tennyson Court","images":"http://dummyimage.com/199x100.png/ff4444/ffffff"},
    // {"id":98,"first_name":"Laina","developer":"Apt 1181","email":"lbru2p@quantcast.com","phone_number":"566-320-8794","address":"34477 Westport Circle","images":"http://dummyimage.com/247x100.png/dddddd/000000"},
    // {"id":99,"first_name":"Kelcey","developer":"UI/UX Designer","email":"kbundock2q@nifty.com","phone_number":"188-374-7560","address":"13780 North Court","images":"http://dummyimage.com/238x100.png/cc0000/ffffff"},
    // {"id":100,"first_name":"Harmonie","developer":"Backend_Developer","email":"htrott2r@globo.com","phone_number":"632-586-4698","address":"8 Upham Road","images":"http://dummyimage.com/154x100.png/dddddd/000000"}
  // ]) 
  
  // const [array, setArray] = useState([]);
    const [value,setValue] =useState(true)
    const [isActive, setIsActive] = useState(true);
    // const [array, setArray] = useState([]);
    // const [total, setTotal] = useState("");
    // const [postPerPage,setPostPerPage] =useState(10);
  const [isLive,setIsLive]=useState(true)
    // console.log("array" ,array);
    const [apiData,setApiData] =useState([]);
  
    const getData = async () => {
        const update = await axios.get(API_URL)
        setApiData(update.data)
    }
    useEffect( () => {
        getData()
    },[])
  
    const getItem = () => {
      // let a = JSON.parse(localStorage.getItem("obj"));
      // let b = JSON.parse(localStorage.getItem("isLive"));
      // setArray(a);
      // setIsLive(b);
    };
    const setOpen = () => {
      // setValue(!value);
      // setOpen(true)
    };
    const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = apiData.slice(indexOfFirstPost, indexOfLastPost);
   console.log(indexOfFirstPost ,indexOfLastPost);


 console.log("current " ,currentPage);
   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);

    const pageSize=2;
    const pageNumber=5;
    const [page,setPage]=useState(1)
    let row =10;
    const [total,setTotal]=useState("")
    const [postPerPage,setPostPerPage]=useState(5);
    const count = Math.ceil(apiData.length/row);
    console.log("count" ,count);
    // console.log("length" , array.length);
    const [one , setOne] =useState(0)
    row=row*page
    const list = apiData.slice((page-1)*10 , row);
    // console.log("list" , list);
   const handleChange = (event ,value) => {
    setPage(value);
   
   }
   console.log("page" ,page);

   console.log(list);
    return (
    <div>
    {/* <Forms /> */}
    <div>
        {value ? (
          <div></div>
        ) : (
          <Dialog open={true} onClose={ () => setOpen(false)}>
          <div style={{ width: "100%", height: "600px" }}>
            <div className="box">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <span>FirstName :</span>
                  <br />
                  <TextField size="small" placeholder='FirstName' />
                </div>
                <div>
                  <span>SecondName :</span>
                  <br />
                  <TextField size="small" placeholder='SecondName'/>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <span>MobileNumber :</span>
                  <br />
                  <TextField size="small" placeholder='MobileNumber'/>
                </div>
                <div>
                  <span>City :</span>
                  <br />
                  <TextField size="small" placeholder='City'/>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <span>Email :</span>
                  <br />
                  <TextField size="small" placeholder='Email'/>
                </div>
                <div>
                  <span>Country :</span>
                  <br />
                  <TextField size="small" placeholder='Country'/>
                </div>
              </div>
              <div>

               <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
<RadioGroup>
  <div style={{display:'flex'}}>
  <FormControlLabel value="female" control={<Radio />} label="Female" />
<FormControlLabel value="male" control={<Radio />} label="Male" />
<FormControlLabel value="other" control={<Radio />} label="Other" />
  </div>

</RadioGroup>
  </div>
              <div>
                <span>
                  Address :<br />
                  <textarea style={{height:'50px',width:'460px'}} placeholder='Address'/>
                </span>
               
              </div>
              <div style={{height:'60px',width:'220px',margin:'0 auto'}}>
              <span><button style={{height:'40px',width:'100px',borderRadius:'10px',border:'none',backgroundColor:'orange'}}>Submit</button></span>
              <span><button style={{marginLeft:'10px',height:'40px',width:'100px',borderRadius:'10px',border:'none',backgroundColor:'orange',marginTop:'15px'}} >Update</button></span>
              
              </div>
            </div>
          </div>
          </Dialog>
        )}
      </div>

    <div className='top_calender'>
      {/* <Grid container spacing={5}> */}
     {list.map((data,index) => 
    //  <Grid item sm={3} key={array.length}>
       <div key={index} >
        <div className='calender2'>
        <div className='calender'>
            <div>
               <Avatar alt="Cindy Baker" src={data.images} sx={{width:50,height:50}}/>
             </div>
             <div style={{marginTop:'-5px',lineHeight:'10px'}}>
                <p style={{fontWeight:'bolder'}}>{data.first}</p>
                <p style={{color: `${data.colors}` ,fontSize:'13px'}}  className='b'>{data.nation}</p>
             </div>
             <div style={{marginTop:'-10px'}}>
                <p ><i className="fa fa-ellipsis-h"></i></p>

             </div>
        </div>

        <div>
            <p style={{color:'gray'}}><i class="fa fa-phone"></i> {"        "}  {data.phone}</p>
            <p style={{color:'gray'}}><i class="fa fa-envelope"></i> {"       "}  {data.email}</p>
            <p style={{color:'gray'}}><i class="fa fa-map-marker" ></i> {"      "}  {data.address}</p>
        </div>
        <div style={{width:'350px'}}>
        <button className='btn1' style={{backgroundColor:'#EAF1F3',border:'none',height:'30px',width:'100px',borderRadius:'10px'}}> <PersonOutlineIcon sx={{fontSize:'15px'}}/> {'   '}Profile</button>
        <button className='btn2' style={{marginLeft:'10px',backgroundColor:'blue',border:'none',color:'white',width:'110px',height:'26px',borderRadius:'7px',opacity:'0.6'}}> <TextsmsIcon sx={{fontSize:'13px'}}/> {'  '}Contact</button>
        <Button onClick={  () => setOpen()}><i class="fa fa-eye" style={{fontSize:'17px',color:'#1575A0'}}></i></Button>
        
        </div>
        </div>
        </div>
        // </Grid>
        )}
   

   <div style={{marginLeft:'500px',marginTop:'200px'}}>
   <Pagination count={count} page={page} shape="rounded" color="primary" onChange={handleChange}
   />
   {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={apiData.length}
        paginate={paginate}
      /> */}
   </div>
   
   
    </div>
    </div>
  )
}

export default Calender