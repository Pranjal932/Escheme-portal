import './style.css';
import schemesData from './data/schemes.json';

// ============================================================
//  TRANSLATIONS — Marathi / Hindi / English
// ============================================================
const i18n = {
  mr: {
    gov_maha: 'महाराष्ट्र शासन', zp_nagpur: 'जिल्हा परिषद नागपूर', zp_portal_sub: 'जिल्हा परिषद नागपूर • ग्रामपंचायत ई-योजना पोर्टल', tagline: 'जय जवान जय किसान',
    nav_home:'मुख्यपृष्ठ', nav_schemes:'योजना', nav_check:'पात्रता तपासा',
    nav_documents:'कागदपत्रे', nav_contact:'संपर्क', nav_profile:'माझी प्रोफाईल', nav_admin:'प्रशासन',
    footer_text:'© 2026 जिल्हा परिषद नागपूर • महाराष्ट्र शासन • सर्व हक्क राखीव.',
    auth_title:'ई-योजना पोर्टलवर आपले स्वागत आहे', auth_desc:'कृपया तुमचा अनुभव सुधारण्यासाठी काही माहिती द्या.',
    auth_name:'पूर्ण नाव', auth_dob:'जन्मतारीख', auth_village: 'गाव', auth_village_ph: 'तुमच्या गावाचे नाव', auth_submit:'पोर्टलवर जा →',
    hero_h1:'गावांना सक्षम बनवणे,<br>भारताला सक्षम बनवणे.',
    hero_p:'सर्व केंद्र व राज्य सरकारच्या योजना तुमच्या बोटांवर. शोधा, पात्रता तपासा, सहज अर्ज करा.',
    hero_cta1:'पात्रता तपासा', hero_cta2:'सर्व योजना पहा',
    cat_title:'योजना श्रेणी', cat_sub:'तुमच्या गरजेनुसार योजना शोधा.',
    cat_student:'विद्यार्थी', cat_student_desc:'शिष्यवृत्ती व शिक्षण',
    cat_women:'महिला', cat_women_desc:'आरोग्य व सक्षमीकरण',
    cat_farmer:'शेतकरी', cat_farmer_desc:'शेती व अनुदान',
    cat_senior:'ज्येष्ठ नागरिक', cat_senior_desc:'पेन्शन व कल्याण',
    cat_health:'आरोग्य', cat_health_desc:'वैद्यकीय व विमा',
    cat_employment:'रोजगार', cat_employment_desc:'कौशल्य व नोकरी',
    cat_welfare:'कल्याण', cat_welfare_desc:'घरकुल, पाणी, स्वच्छता',
    cat_scholarship:'शिष्यवृत्ती', cat_scholarship_desc:'सरकारी शिष्यवृत्ती',
    schemes_title:'सर्व योजना निर्देशिका', schemes_search:'योजना शोधा...',
    eligibility_title:'पात्रता तपासणी', eligibility_sub:'तुम्ही कोणत्या योजनेसाठी पात्र आहात हे शोधा.',
    elig_age:'वय', elig_gender:'लिंग', elig_gender_ph:'लिंग निवडा',
    elig_gender_male:'पुरुष', elig_gender_female:'महिला', elig_gender_other:'इतर',
    elig_occ:'व्यवसाय', elig_occ_ph:'व्यवसाय निवडा',
    elig_occ_student:'विद्यार्थी', elig_occ_farmer:'शेतकरी', elig_occ_employed:'नोकरदार',
    elig_occ_unemployed:'बेरोजगार', elig_occ_retired:'निवृत्त', elig_occ_homemaker:'गृहिणी',
    elig_income:'वार्षिक कौटुंबिक उत्पन्न (₹)', elig_submit:'पात्रता तपासा',
    elig_found:'{n} योजना तुमच्यासाठी सापडल्या!', elig_none:'कोणतीही योजना सापडली नाही.',
    elig_none_sub:'निकष बदला किंवा सर्व योजना पहा.',
    doc_title:'महत्त्वाची कागदपत्रे', doc_sub:'बहुतांश योजनांसाठी ही कागदपत्रे तयार ठेवा.',
    faq_title:'वारंवार विचारले जाणारे प्रश्न',
    faq_q1:'मी योजनेसाठी अर्ज कसा करू?', faq_a1:'पात्र योजना मिळाल्यावर "तपशील पहा" वर क्लिक करा व आवेदन प्रक्रिया पाळा.',
    faq_q2:'पात्रता तपासणी मोफत आहे का?', faq_a2:'होय, पोर्टलवर पात्रता तपासणी पूर्णपणे मोफत आहे.',
    faq_q3:'कोणती कागदपत्रे लागतात?', faq_a3:'प्रत्येक योजनेत आवश्यक कागदपत्रांची यादी असते.',
    contact_title:'ग्रामपंचायतीशी संपर्क साधा',
    contact_addr:'पत्ता', contact_addr_val:'जिल्हा परिषद कार्यालय,<br>नागपूर - 440001',
    contact_phone:'फोन', contact_phone_val:'0712-2562680',
    contact_hours:'कार्यालय वेळ', contact_hours_val:'सोम-शुक्र: सकाळी १० ते सायं. ५:३०',
    contact_name_ph:'तुमचे नाव', contact_mobile_ph:'मोबाईल नंबर',
    contact_msg_ph:'तुमचा संदेश / प्रश्न', contact_send:'संदेश पाठवा',
    profile_title:'माझी प्रोफाईल', profile_name:'पूर्ण नाव', profile_email:'ईमेल', profile_dob:'जन्मतारीख',
    profile_lang:'पसंतीची भाषा', profile_edit:'प्रोफाईल संपादित करा', profile_save:'बदल जतन करा', profile_cancel:'रद्द करा',
    view_details:'तपशील पहा', check_elig:'पात्रता तपासा',
    benefits_label:'फायदे', docs_label:'आवश्यक कागदपत्रे',
    process_label:'अर्ज प्रक्रिया', eligibility_label:'पात्रता',
    close:'बंद करा', browse_all:'सर्व योजना पहा', no_schemes:'कोणतीही योजना सापडली नाही.',
    apply_now:'अर्ज करा', verify_docs:'कागदपत्रे पडताळणी',
    footer_privacy: 'गोपनीयता धोरण', footer_terms: 'अटी व शर्ती', footer_sitemap: 'साइटमॅप', footer_about: 'आमच्याबद्दल',
    schemes_sub: 'जि.प. नागपूर अंतर्गत सर्व केंद्र व राज्य सरकारी योजना',
    contact_info_title: 'जि.प. नागपूर संपर्क माहिती', contact_tollfree: 'टोल-फ्री सहाय्य', contact_website: 'अधिकृत संकेतस्थळ',
    contact_send_msg: 'संदेश पाठवा', contact_success: 'संदेश पाठवला गेला! लवकरच आम्ही संपर्क करू.',
    admin_title: 'जि.प. नागपूर प्रशासन पोर्टल', admin_desc: 'प्रशासकीय नियंत्रण पॅनल. अधिकृत PIN प्रविष्ट करा.',
    admin_pin_ph: 'PIN प्रविष्ट करा (Default: 1234)', admin_open: 'प्रशासन पॅनल उघडा', admin_logout: 'बाहेर पडा',
    admin_panel_title: 'जि.प. नागपूर प्रशासन पॅनल', admin_panel_sub: 'अंतर्गत व्यवस्थापन व प्रणाली देखरेख',
    admin_stat_schemes: 'सक्रिय योजना', admin_stat_users: 'लाभार्थी नोंदणीकृत', admin_stat_pending: 'प्रलंबित चौकशी', admin_stat_server: 'सर्व्हर स्वास्थ्य',
    admin_tab_officers: 'अधिकारी यादी', admin_tab_schemes: 'योजना व्यवस्थापन', admin_tab_inquiries: 'नागरिक चौकशी', admin_tab_server: 'सर्व्हर माहिती',
    admin_officers_title: 'ग्रामपंचायत प्रशासकीय अधिकारी',
    admin_col_designation: 'पदनाम', admin_col_name: 'नाव', admin_col_dept: 'विभाग', admin_col_contact: 'संपर्क', admin_col_status: 'स्थिती',
    filter_all: 'सर्व', filter_central: 'केंद्र सरकार', filter_state: 'राज्य सरकार',
    stat_schemes:'सरकारी योजना', stat_beneficiaries:'लाभार्थी', stat_depts:'विभाग', stat_langs:'भाषा', stat_free:'मोफत सेवा', stat_online:'ऑनलाइन',
    leaders_title: 'आमचे नेतृत्व', leaders_sub: 'सरकारी योजनांचे प्रभावी अंमलबजावणी करणारे आमचे नेते',
    leader_modi_name: 'श्री. नरेंद्र मोदी', leader_modi_title: 'मा. पंतप्रधान, भारत सरकार', leader_modi_msg: 'सबका साथ, सबका विकास, सबका विश्वास, सबका प्रयास',
    leader_murmu_name: 'श्रीमती द्रौपदी मुर्मू', leader_murmu_title: 'मा. राष्ट्रपती, भारत', leader_murmu_msg: 'ग्रामीण व वंचित घटकांचे सक्षमीकरण हेच राष्ट्राचे यश',
    leader_fadnavis_name: 'श्री. देवेंद्र फडणवीस', leader_fadnavis_title: 'मा. मुख्यमंत्री, महाराष्ट्र शासन', leader_fadnavis_msg: 'महाराष्ट्राचा सर्वांगीण विकास व गतिमान शासन',
    leader_joshi_name: 'श्री. प्रल्हाद जोशी', leader_joshi_title: 'मा. शिक्षण मंत्री, भारत', leader_joshi_msg: 'शाश्वत ग्रामीण विकास व जनकल्याणकारी योजनांचे अंमलबजावणी',
    news_title: 'ताज्या बातम्या / अद्यतने', view_all_updates: 'सर्व अद्यतने पहा',
    gallery_title: 'फोटो गॅलरी', zp_banner_title: 'जिल्हा परिषद नागपूर', zp_banner_sub: 'अधिकृत संकेतस्थळावर ताज्या सूचना, निविदा व अद्यतने पहा.',
    zp_website_btn: 'जि.प. नागपूर संकेतस्थळ',
    gallery_rural: 'ग्रामीण विकास', gallery_farmer: 'शेतकरी योजना', gallery_women: 'महिला सक्षमीकरण', gallery_emp: 'रोजगार हमी', gallery_schol: 'शिष्यवृत्ती', gallery_health: 'आरोग्य योजना',
    news_1: '<strong>PM किसान 17वा हप्ता</strong> — आधार सीडेड खाते अनिवार्य. आत्ता नोंदणी करा.',
    news_2: '<strong>लाडकी बहीण योजना</strong> — जुलै 2026 हप्ता जमा. <a href="#schemes" style="color:var(--primary)">अधिक माहिती</a>',
    news_3: '<strong>पोस्ट मॅट्रिक शिष्यवृत्ती</strong> — 2026-27 अर्ज प्रक्रिया सुरु (NSP पोर्टल)',
    news_4: '<strong>MGNREGA नोंदणी</strong> — जि.प. नागपूर अंतर्गत सर्व गावांमध्ये नोंदणी सुरु',
    news_5: '<strong>आयुष्मान भारत</strong> — नवीन लाभार्थी यादी जाहीर. e-card डाउनलोड करा.'
  },
  hi: {
    gov_maha: 'महाराष्ट्र सरकार', zp_nagpur: 'जिला परिषद नागपुर', zp_portal_sub: 'जिला परिषद नागपुर • ग्राम पंचायत ई-योजना पोर्टल', tagline: 'जय जवान जय किसान',
    nav_home:'होम', nav_schemes:'योजनाएं', nav_check:'पात्रता जांचें',
    nav_documents:'दस्तावेज़', nav_contact:'संपर्क करें', nav_profile:'मेरी प्रोफाइल', nav_admin:'प्रशासन',
    footer_text:'© 2026 जिल्हा परिषद नागपूर • महाराष्ट्र शासन • सर्वाधिकार सुरक्षित.',
    auth_title:'ई-योजना पोर्टल में आपका स्वागत है', auth_desc:'कृपया अपना अनुभव बेहतर बनाने के लिए कुछ जानकारी दें.',
    auth_name:'पूरा नाम', auth_dob:'जन्म तिथि', auth_village: 'गाँव', auth_village_ph: 'अपने गाँव का नाम दर्ज करें', auth_submit:'पोर्टल पर जाएं →',
    hero_h1:'गाँवों को सशक्त,<br>भारत को सशक्त.',
    hero_p:'सभी केंद्रीय व राज्य सरकारी योजनाएं आपकी उंगलियों पर. खोजें, पात्रता जांचें, आसानी से आवेदन करें.',
    hero_cta1:'पात्रता जांचें', hero_cta2:'सभी योजनाएं देखें',
    cat_title:'योजना श्रेणियां', cat_sub:'अपनी जरूरत के अनुसार योजनाएं खोजें.',
    cat_student:'विद्यार्थी', cat_student_desc:'छात्रवृत्ति और शिक्षा',
    cat_women:'महिलाएं', cat_women_desc:'स्वास्थ्य और सशक्तिकरण',
    cat_farmer:'किसान', cat_farmer_desc:'कृषि और सब्सिडी',
    cat_senior:'वरिष्ठ नागरिक', cat_senior_desc:'पेंशन और कल्याण',
    cat_health:'स्वास्थ्य', cat_health_desc:'चिकित्सा और बीमा',
    cat_employment:'रोजगार', cat_employment_desc:'कौशल और नौकरी',
    cat_welfare:'कल्याण', cat_welfare_desc:'आवास, जल, स्वच्छता',
    cat_scholarship:'छात्रवृत्ति', cat_scholarship_desc:'सरकारी छात्रवृत्ति',
    schemes_title:'सभी योजना निर्देशिका', schemes_search:'योजना खोजें...',
    eligibility_title:'पात्रता जांच', eligibility_sub:'जानें आप किस योजना के पात्र हैं.',
    elig_age:'आयु', elig_gender:'लिंग', elig_gender_ph:'लिंग चुनें',
    elig_gender_male:'पुरुष', elig_gender_female:'महिला', elig_gender_other:'अन्य',
    elig_occ:'व्यवसाय', elig_occ_ph:'व्यवसाय चुनें',
    elig_occ_student:'विद्यार्थी', elig_occ_farmer:'किसान', elig_occ_employed:'नौकरीपेशा',
    elig_occ_unemployed:'बेरोजगार', elig_occ_retired:'सेवानिवृत्त', elig_occ_homemaker:'गृहिणी',
    elig_income:'वार्षिक पारिवारिक आय (₹)', elig_submit:'पात्रता जांचें',
    elig_found:'आपके लिए {n} योजनाएं मिलीं!', elig_none:'कोई योजना नहीं मिली.',
    elig_none_sub:'मानदंड बदलें या सभी योजनाएं देखें.',
    doc_title:'महत्वपूर्ण दस्तावेज़', doc_sub:'अधिकांश योजनाओं के लिए ये दस्तावेज़ तैयार रखें.',
    faq_title:'अक्सर पूछे जाने वाले प्रश्न',
    faq_q1:'मैं योजना के लिए आवेदन कैसे करूं?', faq_a1:'"विवरण देखें" पर क्लिक करें और चरण-दर-चरण प्रक्रिया का पालन करें.',
    faq_q2:'क्या पात्रता जांचना निःशुल्क है?', faq_a2:'हाँ, पोर्टल पर पात्रता जांचना बिल्कुल मुफ़्त है.',
    faq_q3:'कौन से दस्तावेज़ चाहिए?', faq_a3:'हर योजना में आवश्यक दस्तावेज़ों की सूची होती है.',
    contact_title:'ग्राम पंचायत से संपर्क करें',
    contact_addr:'पता', contact_addr_val:'जिला परिषद कार्यालय,<br>नागपूर - 440001',
    contact_phone:'फोन', contact_phone_val:'0712-2562680',
    contact_hours:'कार्यालय समय', contact_hours_val:'सोम-शुक्र: सुबह 10 – शाम 5:30',
    contact_name_ph:'आपका नाम', contact_mobile_ph:'मोबाइल नंबर',
    contact_msg_ph:'आपका संदेश', contact_send:'संदेश भेजें',
    profile_title:'मेरी प्रोफाइल', profile_name:'पूरा नाम', profile_email:'ईमेल', profile_dob:'जन्म तिथि',
    profile_lang:'पसंदीदा भाषा', profile_edit:'प्रोफाइल संपादित करें', profile_save:'परिवर्तन सहेजें', profile_cancel:'रद्द करें',
    view_details:'विवरण देखें', check_elig:'पात्रता जांचें',
    benefits_label:'लाभ', docs_label:'आवश्यक दस्तावेज़',
    process_label:'आवेदन प्रक्रिया', eligibility_label:'पात्रता',
    close:'बंद करें', browse_all:'सभी योजनाएं देखें', no_schemes:'कोई योजना नहीं मिली.',
    apply_now:'आवेदन करें', verify_docs:'दस्तावेज़ सत्यापन',
    footer_privacy: 'गोपनीयता नीति', footer_terms: 'नियम और शर्तें', footer_sitemap: 'साइटमैप', footer_about: 'हमारे बारे में',
    stat_schemes:'सरकारी योजनाएं', stat_beneficiaries:'लाभार्थी', stat_depts:'विभाग', stat_langs:'भाषाएं', stat_free:'मुफ्त सेवा', stat_online:'ऑनलाइन',
    leaders_title: 'हमारा नेतृत्व', leaders_sub: 'सरकारी योजनाओं का प्रभावी क्रियान्वयन सुनिश्चित करने वाले हमारे नेता',
    leader_modi_name: 'श्री नरेंद्र मोदी', leader_modi_title: 'माननीय प्रधान मंत्री, भारत सरकार', leader_modi_msg: 'सबका साथ, सबका विकास, सबका विश्वास, सबका प्रयास',
    leader_murmu_name: 'श्रीमती द्रौपदी मुर्मू', leader_murmu_title: 'माननीय राष्ट्रपति, भारत', leader_murmu_msg: 'ग्रामीण व वंचित वर्गों का सशक्तिकरण ही राष्ट्र की सच्ची सफलता है',
    leader_fadnavis_name: 'श्री देवेंद्र फडणवीस', leader_fadnavis_title: 'माननीय मुख्यमंत्री, महाराष्ट्र', leader_fadnavis_msg: 'महाराष्ट्र का समग्र विकास और गतिशील प्रशासन',
    leader_joshi_name: 'श्री प्रल्हाद जोशी', leader_joshi_title: 'माननीय शिक्षा मंत्री, भारत', leader_joshi_msg: 'सतत ग्रामीण विकास और जनकल्याणकारी योजनाओं का क्रियान्वयन',
    news_title: 'ताज़ा समाचार / अपडेट', view_all_updates: 'सभी अपडेट देखें',
    gallery_title: 'फोटो गैलरी', zp_banner_title: 'ज़िला परिषद नागपुर', zp_banner_sub: 'आधिकारिक वेबसाइट पर नवीनतम नोटिस, टेंडर और अपडेट देखें.',
    zp_website_btn: 'ज़ि.प. नागपुर वेबसाइट',
    gallery_rural: 'ग्रामीण विकास', gallery_farmer: 'किसान योजनाएं', gallery_women: 'महिला सशक्तिकरण', gallery_emp: 'रोजगार गारंटी', gallery_schol: 'छात्रवृत्ति', gallery_health: 'स्वास्थ्य योजनाएं',
    news_1: '<strong>PM किसान 17वीं किस्त</strong> — आधार सीडेड खाता अनिवार्य। अभी रजिस्टर करें।',
    news_2: '<strong>लाडकी बहीण योजना</strong> — जुलाई 2026 किस्त जमा। <a href="#schemes" style="color:var(--primary)">अधिक जानकारी</a>',
    news_3: '<strong>पोस्ट मैट्रिक छात्रवृत्ति</strong> — 2026-27 आवेदन प्रक्रिया शुरू (NSP पोर्टल)',
    news_4: '<strong>MGNREGA पंजीकरण</strong> — जि.प. नागपुर के तहत सभी गांवों में पंजीकरण शुरू',
    news_5: '<strong>आयुष्मान भारत</strong> — नई लाभार्थी सूची जारी। e-card डाउनलोड करें।',
    schemes_sub: 'जि.प. नागपुर के अंतर्गत सभी केंद्र व राज्य सरकारी योजनाएं',
    contact_info_title: 'जि.प. नागपुर संपर्क जानकारी', contact_tollfree: 'टोल-फ्री हेल्पलाइन', contact_website: 'आधिकारिक वेबसाइट',
    contact_send_msg: 'संदेश भेजें', contact_success: 'संदेश भेजा गया! हम जल्द संपर्क करेंगे।',
    admin_title: 'जि.प. नागपुर प्रशासन पोर्टल', admin_desc: 'प्रशासनिक नियंत्रण पैनल। अधिकृत PIN दर्ज करें।',
    admin_pin_ph: 'PIN दर्ज करें (Default: 1234)', admin_open: 'Admin Panel खोलें', admin_logout: 'बाहर निकलें',
    admin_panel_title: 'जि.प. नागपुर Admin Panel', admin_panel_sub: 'आंतरिक प्रबंधन व प्रणाली निगरानी',
    admin_stat_schemes: 'सक्रिय योजनाएं', admin_stat_users: 'लाभार्थी पंजीकृत', admin_stat_pending: 'लंबित प्रश्न', admin_stat_server: 'सर्वर स्वास्थ्य',
    admin_tab_officers: 'अधिकारी सूची', admin_tab_schemes: 'योजना प्रबंधन', admin_tab_inquiries: 'नागरिक पूछताछ', admin_tab_server: 'सर्वर जानकारी',
    admin_officers_title: 'ग्राम पंचायत प्रशासनिक अधिकारी',
    admin_col_designation: 'पदनाम', admin_col_name: 'नाम', admin_col_dept: 'विभाग', admin_col_contact: 'संपर्क', admin_col_status: 'स्थिति',
    filter_all: 'सभी', filter_central: 'केंद्र सरकार', filter_state: 'राज्य सरकार',
  },
  en: {
    gov_maha: 'Government of Maharashtra', zp_nagpur: 'Zilla Parishad Nagpur', zp_portal_sub: 'Gram Panchayat E-Scheme Portal', tagline: 'Jai Jawan Jai Kisaan',
    nav_home:'Home', nav_schemes:'Schemes', nav_check:'Check Eligibility',
    nav_documents:'Documents', nav_contact:'Contact Us', nav_profile:'My Profile', nav_admin:'Admin Panel',
    footer_text:'© 2026 Zilla Parishad Nagpur • Government of Maharashtra • All Rights Reserved.',
    auth_title:'Welcome to E-Scheme Portal', auth_desc:'Please provide a few details to personalise your experience.',
    auth_name:'Full Name', auth_dob:'Date of Birth', auth_village: 'Village', auth_village_ph: 'Enter your village name', auth_submit:'Proceed to Portal →',
    hero_h1:'Empowering Villages,<br>Empowering India.',
    hero_p:'All Central & State Government schemes at your fingertips. Discover, check eligibility, and apply easily.',
    hero_cta1:'Check Your Eligibility', hero_cta2:'Browse All Schemes',
    cat_title:'Scheme Categories', cat_sub:'Find schemes tailored to your specific needs.',
    cat_student:'Students', cat_student_desc:'Scholarships & Education',
    cat_women:'Women', cat_women_desc:'Health & Empowerment',
    cat_farmer:'Farmers', cat_farmer_desc:'Agriculture & Subsidies',
    cat_senior:'Senior Citizens', cat_senior_desc:'Pension & Welfare',
    cat_health:'Health', cat_health_desc:'Medical & Insurance',
    cat_employment:'Employment', cat_employment_desc:'Skill & Jobs',
    cat_welfare:'Welfare', cat_welfare_desc:'Housing, Water, Sanitation',
    cat_scholarship:'Scholarships', cat_scholarship_desc:'Govt Scholarship Schemes',
    schemes_title:'All Schemes Directory', schemes_search:'Search schemes...',
    eligibility_title:'Eligibility Checker', eligibility_sub:'Find which schemes you qualify for.',
    elig_age:'Age', elig_gender:'Gender', elig_gender_ph:'Select Gender',
    elig_gender_male:'Male', elig_gender_female:'Female', elig_gender_other:'Other',
    elig_occ:'Occupation', elig_occ_ph:'Select Occupation',
    elig_occ_student:'Student', elig_occ_farmer:'Farmer', elig_occ_employed:'Employed',
    elig_occ_unemployed:'Unemployed', elig_occ_retired:'Retired/Senior', elig_occ_homemaker:'Homemaker',
    elig_income:'Annual Family Income (₹)', elig_submit:'Check Eligibility',
    elig_found:'We found {n} schemes for you!', elig_none:'No schemes found.',
    elig_none_sub:'Try adjusting your criteria or browse all schemes.',
    doc_title:'Important Documents', doc_sub:'Keep these documents ready for most scheme applications.',
    faq_title:'Frequently Asked Questions',
    faq_q1:'How do I apply for a scheme?', faq_a1:'Click "View Details" on any scheme to see the step-by-step application process.',
    faq_q2:'Is eligibility checking free?', faq_a2:'Yes, checking eligibility on this portal is completely free.',
    faq_q3:'How do I know which documents I need?', faq_a3:'Each scheme card shows the complete document checklist.',
    contact_title:'Contact Gram Panchayat',
    contact_addr:'Address', contact_addr_val:'Zilla Parishad Office,<br>Nagpur - 440001',
    contact_phone:'Phone', contact_phone_val:'0712-2562680',
    contact_hours:'Office Hours', contact_hours_val:'Mon–Fri: 10:00 AM – 5:30 PM',
    contact_name_ph:'Your Name', contact_mobile_ph:'Mobile Number',
    contact_msg_ph:'Your Message / Query', contact_send:'Send Message',
    profile_title:'My Profile', profile_name:'Full Name', profile_email:'Email', profile_dob:'Date of Birth',
    profile_lang:'Preferred Language', profile_edit:'Edit Profile', profile_save:'Save Changes', profile_cancel:'Cancel',
    view_details:'View Details', check_elig:'Check Eligibility',
    benefits_label:'Benefits', docs_label:'Required Documents',
    process_label:'Application Process', eligibility_label:'Eligibility',
    close:'Close', browse_all:'Browse All Schemes', no_schemes:'No schemes found.',
    apply_now:'Apply Now', verify_docs:'Document Verification',
    footer_privacy: 'Privacy Policy', footer_terms: 'Terms & Conditions', footer_sitemap: 'Sitemap', footer_about: 'About Us',
    stat_schemes:'Govt Schemes', stat_beneficiaries:'Beneficiaries', stat_depts:'Departments', stat_langs:'Languages', stat_free:'Free Service', stat_online:'Online',
    leaders_title: 'Our Leadership', leaders_sub: 'Leaders driving effective implementation of government schemes',
    leader_modi_name: 'Shri Narendra Modi', leader_modi_title: 'Hon. Prime Minister, Govt. of India', leader_modi_msg: 'Sabka Saath, Sabka Vikas, Sabka Vishwas, Sabka Prayas',
    leader_murmu_name: 'Smt. Droupadi Murmu', leader_murmu_title: 'Hon. President of India', leader_murmu_msg: 'Empowerment of rural and marginalized sections is the true success of the nation',
    leader_fadnavis_name: 'Shri Devendra Fadnavis', leader_fadnavis_title: 'Hon. Chief Minister, Maharashtra', leader_fadnavis_msg: 'Comprehensive development and dynamic governance of Maharashtra',
    leader_joshi_name: 'Shri Pralhad Joshi', leader_joshi_title: 'Hon. Education Minister, India', leader_joshi_msg: 'Sustainable rural development and implementation of public welfare schemes',
    news_title: 'Latest News / Updates', view_all_updates: 'View All Updates',
    gallery_title: 'Photo Gallery', zp_banner_title: 'Zilla Parishad Nagpur', zp_banner_sub: 'Check latest notices, tenders and updates on official website.',
    zp_website_btn: 'ZP Nagpur Website',
    gallery_rural: 'Rural Development', gallery_farmer: 'Farmer Schemes', gallery_women: 'Women Empowerment', gallery_emp: 'Employment Guarantee', gallery_schol: 'Scholarships', gallery_health: 'Health Schemes',
    news_1: '<strong>PM Kisan 17th Installment</strong> — Aadhaar seeded account mandatory. Register now.',
    news_2: '<strong>Ladki Bahin Yojana</strong> — July 2026 installment credited. <a href="#schemes" style="color:var(--primary)">More info</a>',
    news_3: '<strong>Post Matric Scholarship</strong> — 2026-27 applications open (NSP Portal)',
    news_4: '<strong>MGNREGA Registration</strong> — Open in all villages under ZP Nagpur',
    news_5: '<strong>Ayushman Bharat</strong> — New beneficiary list published. Download e-card.',
    gov_maha: 'Government of Maharashtra', zp_nagpur: 'Zilla Parishad Nagpur', zp_portal_sub: 'Gram Panchayat E-Scheme Portal', tagline: 'Jai Jawan Jai Kisaan',
    schemes_sub: 'All Central & State Government schemes under ZP Nagpur',
    contact_info_title: 'ZP Nagpur Contact Information', contact_tollfree: 'Toll-Free Helpline', contact_website: 'Official Website',
    contact_send_msg: 'Send a Message', contact_success: 'Message sent! We will contact you soon.',
    admin_title: 'ZP Nagpur Administration Portal', admin_desc: 'Admin control panel. Enter authorized PIN.',
    admin_pin_ph: 'Enter PIN (Default: 1234)', admin_open: 'Open Admin Panel', admin_logout: 'Log Out',
    admin_panel_title: 'ZP Nagpur Admin Panel', admin_panel_sub: 'Internal management & system monitoring',
    admin_stat_schemes: 'Active Schemes', admin_stat_users: 'Beneficiaries Registered', admin_stat_pending: 'Pending Queries', admin_stat_server: 'Server Health',
    admin_tab_officers: 'Officers List', admin_tab_schemes: 'Scheme Management', admin_tab_inquiries: 'Citizen Inquiries', admin_tab_server: 'Server Info',
    admin_officers_title: 'Gram Panchayat Administrative Officers',
    admin_col_designation: 'Designation', admin_col_name: 'Name', admin_col_dept: 'Department', admin_col_contact: 'Contact', admin_col_status: 'Status',
    filter_all: 'All', filter_central: 'Central Govt', filter_state: 'State Govt'
  }
};

// ============================================================
//  APP STATE
// ============================================================
let currentLang = localStorage.getItem('escheme_lang') || 'mr';
let userProfile = JSON.parse(localStorage.getItem('escheme_user') || 'null');
let verifiedDocs = JSON.parse(sessionStorage.getItem('escheme_verified') || '{}');

function t(key, replacements = {}) {
  let str = (i18n[currentLang] || i18n.mr)[key] || i18n.en[key] || key;
  for (const [k, v] of Object.entries(replacements)) str = str.replace(`{${k}}`, v);
  return str;
}
function getF(scheme, field) {
  return scheme[`${field}_${currentLang}`] || scheme[`${field}_mr`] || scheme[`${field}_en`] || '';
}
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
  const ls = document.getElementById('lang-switcher');
  if (ls) ls.value = currentLang;
}
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('escheme_lang', lang);
  if (userProfile) { userProfile.lang = lang; localStorage.setItem('escheme_user', JSON.stringify(userProfile)); }
  applyTranslations();
  handleRoute();
}

// ============================================================
//  AUTH
// ============================================================
function showAuthModal() {
  document.getElementById('auth-modal').classList.remove('hidden');
  document.body.classList.add('modal-open');
}
function hideAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
  document.body.classList.remove('modal-open');
}
function initAuthForm() {
  const form = document.getElementById('auth-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('auth-name').value.trim();
    const mobile = document.getElementById('auth-mobile')?.value.trim() || '';
    const dob = document.getElementById('auth-dob').value;
    const village = document.getElementById('auth-village')?.value.trim() || '';
    userProfile = { name, mobile, dob, village, lang: currentLang };
    localStorage.setItem('escheme_user', JSON.stringify(userProfile));
    hideAuthModal();
    handleRoute();
  });
}

// ============================================================
//  ROUTING
// ============================================================
const routes = {
  '#home': renderHome,
  '#schemes': renderSchemes,
  '#scholarships': renderScholarships,
  '#eligibility': renderEligibility,
  '#documents': renderDocuments,
  '#contact': renderContact,
  '#profile': renderProfile,
  '#verify': renderVerify,
  '#admin': renderAdmin,
};

function handleRoute() {
  const hash = window.location.hash || '#home';
  const renderFunc = routes[hash];
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === hash);
  });
  const main = document.getElementById('main-content');
  if (!main) return;
  if (renderFunc) {
    main.innerHTML = renderFunc();
    if (hash === '#home') initHome();
    if (hash === '#schemes') initSchemes();
    if (hash === '#scholarships') initScholarships();
    if (hash === '#eligibility') initEligibility();
    if (hash === '#documents') initDocuments();
    if (hash === '#profile') initProfile();
    if (hash === '#verify') initVerify();
    if (hash === '#admin') initAdmin();
  } else {
    main.innerHTML = '<h2 style="padding:3rem;text-align:center;color:var(--primary);">404 — पृष्ठ सापडले नाही</h2>';
  }
  applyTranslations();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Close mobile menu
  document.getElementById('nav-menu')?.classList.remove('open');
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', () => {
  const ls = document.getElementById('lang-switcher');
  if (ls) { ls.value = currentLang; ls.addEventListener('change', e => setLanguage(e.target.value)); }

  // Mobile hamburger
  document.getElementById('hamburger-btn')?.addEventListener('click', () => {
    document.getElementById('nav-menu')?.classList.toggle('open');
  });

  // Accessibility
  let fontSize = 16;
  document.addEventListener('click', e => {
    if (e.target.closest('#contrast-toggle')) document.body.classList.toggle('high-contrast');
    if (e.target.closest('#font-increase')) { fontSize = Math.min(fontSize + 2, 24); document.documentElement.style.fontSize = fontSize + 'px'; }
    if (e.target.closest('#font-decrease')) { fontSize = Math.max(fontSize - 2, 12); document.documentElement.style.fontSize = fontSize + 'px'; }
    if (e.target.closest('#font-reset')) { fontSize = 16; document.documentElement.style.fontSize = '16px'; }
    if (e.target.closest('.modal-close-btn') || e.target.id === 'scheme-modal') closeSchemeModal();
    if (e.target.closest('.modal-close-verify') || e.target.id === 'verify-modal') closeVerifyModal();
  });

  if (!userProfile) showAuthModal();
  initAuthForm();
  handleRoute();
});

// ============================================================
//  SCHEME MODAL
// ============================================================
function openSchemeModal(id) {
  const scheme = schemesData.find(s => s.id === id);
  if (!scheme) return;
  const modal = document.getElementById('scheme-modal');
  const content = document.getElementById('scheme-detail-content');
  const faqs = scheme[`faqs_${currentLang}`] || scheme.faqs_mr || scheme.faqs_en || [];
  const contact = scheme.contact_en || {};
  content.innerHTML = `
    <div class="scheme-detail-header" style="background: linear-gradient(180deg,rgba(15,23,42,0.25) 0%,rgba(15,23,42,0.92) 100%), url('${scheme.imageUrl}') center/cover no-repeat;">
      <button class="close-btn modal-close-btn" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;">
        <div style="font-size:2.5rem;"><i class="fa-solid ${scheme.theme.icon}"></i></div>
        <span style="background:rgba(19,136,8,0.9);color:white;font-size:0.72rem;font-weight:700;padding:0.3rem 0.8rem;border-radius:20px;text-transform:uppercase;">✓ जि.प. नागपूर Verified</span>
      </div>
      <h2 style="margin:0.75rem 0 0;font-size:1.7rem;text-shadow:0 2px 6px rgba(0,0,0,0.6);">${getF(scheme,'title')}
        <span style="background:rgba(255,255,255,0.2);padding:0.15rem 0.6rem;border-radius:20px;font-size:0.75rem;margin-left:0.5rem;">${scheme.provider === 'central' ? 'Central' : 'State'}</span>
      </h2>
      <p style="margin:0.4rem 0 0;opacity:0.9;font-size:0.9rem;font-weight:600;color:#fbbf24;">${getF(scheme,'department')}</p>
      <p style="margin:0.4rem 0 0;opacity:0.9;font-size:0.95rem;">${getF(scheme,'description')}</p>
    </div>
    <div class="scheme-detail-body">
      <div class="detail-section">
        <h4><i class="fa-solid fa-circle-check" style="color:${scheme.theme.color}"></i> ${t('eligibility_label')}</h4>
        <p>${getF(scheme,'eligibility_text')}</p>
      </div>
      <div class="detail-section">
        <h4><i class="fa-solid fa-star" style="color:${scheme.theme.color}"></i> ${t('benefits_label')}</h4>
        <ul>${getF(scheme,'benefits').map(b=>`<li>${b}</li>`).join('')}</ul>
      </div>
      <div class="detail-section">
        <h4><i class="fa-solid fa-file-alt" style="color:${scheme.theme.color}"></i> ${t('docs_label')}</h4>
        <ul>${getF(scheme,'documents').map(d=>`<li>${d}</li>`).join('')}</ul>
      </div>
      <div class="detail-section">
        <h4><i class="fa-solid fa-list-ol" style="color:${scheme.theme.color}"></i> ${t('process_label')}</h4>
        <p style="white-space:pre-line;">${getF(scheme,'applicationProcess')}</p>
      </div>
      ${faqs.length > 0 ? `
      <div class="detail-section">
        <h4><i class="fa-solid fa-circle-question" style="color:${scheme.theme.color}"></i> FAQs</h4>
        ${faqs.map(f=>`
          <div style="margin-bottom:0.75rem;padding:0.75rem;background:var(--bg);border-radius:8px;border-left:3px solid ${scheme.theme.color};">
            <p style="font-weight:600;margin-bottom:0.2rem;">Q: ${f.q}</p>
            <p style="color:var(--text-muted);">A: ${f.a}</p>
          </div>`).join('')}
      </div>` : ''}
      ${contact.office ? `
      <div class="detail-section" style="background:var(--bg);border-radius:12px;padding:1rem;">
        <h4><i class="fa-solid fa-phone" style="color:${scheme.theme.color}"></i> अधिकृत संपर्क</h4>
        <p><strong>कार्यालय:</strong> ${contact.office}</p>
        ${contact.phone ? `<p><strong>फोन:</strong> ${contact.phone}</p>` : ''}
        ${contact.officialSchemeUrl ? `<a href="${contact.officialSchemeUrl}" target="_blank" class="btn btn-primary btn-sm" style="margin-top:0.75rem;background:${scheme.theme.gradient};"><i class="fa-solid fa-external-link-alt"></i> अधिकृत संकेतस्थळ</a>` : ''}
      </div>` : ''}
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-top:1.5rem;">
        <button class="btn btn-saffron" onclick="openVerifyAndApply(${scheme.id})"><i class="fa-solid fa-id-card"></i> ${t('verify_docs')} व अर्ज करा</button>
        <a href="#eligibility" class="btn btn-secondary" onclick="closeSchemeModal()"><i class="fa-solid fa-user-check"></i> ${t('check_elig')}</a>
      </div>
    </div>`;
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}
function closeSchemeModal() {
  document.getElementById('scheme-modal').classList.add('hidden');
  document.body.classList.remove('modal-open');
}
window.openSchemeModal = openSchemeModal;
window.openVerifyAndApply = (id) => { closeSchemeModal(); openVerifyModal(id); };

// ============================================================
//  DOCUMENT VERIFICATION MODAL
// ============================================================
const docTypes = [
  { id: 'aadhaar', icon: '🪪', label_mr: 'आधार कार्ड', label_hi: 'आधार कार्ड', label_en: 'Aadhaar Card', placeholder: '12 अंकी आधार नंबर', pattern: /^\d{12}$/ },
  { id: 'ration',  icon: '🟧', label_mr: 'रेशन कार्ड',  label_hi: 'राशन कार्ड',  label_en: 'Ration Card',  placeholder: 'रेशन कार्ड नंबर', pattern: /^.{6,}$/ },
  { id: 'voter',   icon: '🗳️', label_mr: 'मतदार ओळखपत्र', label_hi: 'मतदाता पहचान पत्र', label_en: 'Voter ID', placeholder: 'मतदार ओळखपत्र नंबर', pattern: /^[A-Z]{3}\d{7}$/ },
  { id: 'pan',     icon: '💳', label_mr: 'पॅन कार्ड', label_hi: 'पैन कार्ड', label_en: 'PAN Card', placeholder: 'ABCDE1234F (10 अक्षरे)', pattern: /^[A-Z]{5}\d{4}[A-Z]$/ },
];

function openVerifyModal(schemeId) {
  const modal = document.getElementById('verify-modal');
  const content = document.getElementById('verify-steps-content');
  content.innerHTML = `
    <div style="padding:1.5rem 2rem;">
      <p style="margin-bottom:1.5rem;color:var(--text-muted);font-size:0.9rem;">कागदपत्रे पडताळणी करणे सुरक्षित आहे. तुमची माहिती फक्त या सत्रापुरती वापरली जाईल.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
        ${docTypes.map(doc => {
          const isVerified = verifiedDocs[doc.id];
          const label = doc[`label_${currentLang}`] || doc.label_en;
          return `
          <div class="verify-step-card ${isVerified ? 'verified' : ''}" id="vstep-${doc.id}">
            <div class="verify-icon">${doc.icon}</div>
            <h4>${label}</h4>
            ${isVerified
              ? `<span class="verified-badge">✓ पडताळणी झाली</span>`
              : `<div class="form-group" style="margin:0.75rem 0 0;text-align:left;">
                  <input type="text" id="vinput-${doc.id}" placeholder="${doc.placeholder}" style="font-size:0.85rem;padding:0.5rem 0.75rem;" oninput="this.value=this.value.toUpperCase()">
                </div>
                <button class="btn btn-primary btn-sm" style="margin-top:0.5rem;font-size:0.78rem;" onclick="verifyDoc('${doc.id}')">पडताळणी करा</button>`
            }
          </div>`;
        }).join('')}
      </div>
      <div id="verify-status" style="margin-top:1.25rem;text-align:center;font-weight:600;color:var(--gov-green);"></div>
      <div style="display:flex;gap:0.75rem;margin-top:1.5rem;flex-wrap:wrap;">
        <button class="btn btn-green btn-full" onclick="checkAllAndProceed(${schemeId || 'null'})">
          <i class="fa-solid fa-check-circle"></i> पडताळणी पूर्ण करा व पुढे जा
        </button>
        <button class="btn btn-secondary modal-close-verify" style="flex:0 0 auto;">बंद करा</button>
      </div>
    </div>`;
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

window.verifyDoc = function(docId) {
  const doc = docTypes.find(d => d.id === docId);
  const input = document.getElementById(`vinput-${docId}`);
  const val = input?.value.trim() || '';
  const statusEl = document.getElementById('verify-status');
  if (doc.pattern.test(val)) {
    verifiedDocs[docId] = true;
    sessionStorage.setItem('escheme_verified', JSON.stringify(verifiedDocs));
    const card = document.getElementById(`vstep-${docId}`);
    const label = doc[`label_${currentLang}`] || doc.label_en;
    card.classList.add('verified');
    card.innerHTML = `<div class="verify-icon">${doc.icon}</div><h4>${label}</h4><span class="verified-badge">✓ पडताळणी झाली</span>`;
    statusEl.textContent = `✓ ${label} पडताळणी यशस्वी!`;
    statusEl.style.color = 'var(--gov-green)';
  } else {
    if (statusEl) { statusEl.textContent = `❌ अवैध नंबर. पुन्हा तपासा.`; statusEl.style.color = '#c62828'; }
    input?.classList.add('shake');
    setTimeout(() => input?.classList.remove('shake'), 500);
  }
};
window.checkAllAndProceed = function(schemeId) {
  const verifiedCount = Object.keys(verifiedDocs).length;
  const statusEl = document.getElementById('verify-status');
  if (verifiedCount === 0) {
    statusEl.textContent = '⚠️ कमीत कमी एक कागदपत्र पडताळणी करा.';
    statusEl.style.color = '#b45309';
    return;
  }
  closeVerifyModal();
  if (schemeId) {
    alert(`✅ ${verifiedCount} कागदपत्रे पडताळणी झाली!\n\nतुम्हाला आता अधिकृत सरकारी पोर्टलवर पाठवले जाईल.\n\nपुढे: अधिकृत संकेतस्थळावर अर्ज सादर करा.`);
  }
};
function closeVerifyModal() {
  document.getElementById('verify-modal').classList.add('hidden');
  document.body.classList.remove('modal-open');
}
window.closeVerifyModal = closeVerifyModal;

// ============================================================
//  HOME PAGE
// ============================================================
const heroSlides = [
  { img:'https://picsum.photos/seed/egovern/1600/900', tag:'E-Governance Initiative', title_mr:'ग्रामपंचायत डिजिटल पोर्टल', title_hi:'ग्राम पंचायत डिजिटल पोर्टल', title_en:'Gram Panchayat Digital Portal', desc_mr:'सर्व केंद्र व राज्य सरकारच्या कल्याणकारी योजनांसाठी ग्रामीण नागरिकांना थेट डिजिटल प्रवेश.', desc_hi:'ग्रामीण नागरिकों को सभी सरकारी कल्याणकारी योजनाओं तक सीधी डिजिटल पहुंच.', desc_en:'Direct digital access for rural citizens to all Central & State Government Welfare Schemes.', cta:'#eligibility' },
  { img:'https://picsum.photos/seed/farming/1600/900', tag:'Agriculture Welfare', title_mr:'PM किसान सन्मान निधी', title_hi:'PM किसान सम्मान निधि', title_en:'PM Kisan Samman Nidhi', desc_mr:'सर्व शेतकरी कुटुंबांना वार्षिक ₹6,000 डीबीटी द्वारे थेट बँक खात्यात जमा.', desc_hi:'सभी किसान परिवारों को ₹6,000 प्रति वर्ष सीधे बैंक खाते में.', desc_en:'Annual ₹6,000 income support to all farmer families via Direct Benefit Transfer.', cta:'#schemes' },
  { img:'https://picsum.photos/seed/women2/1600/900', tag:'Women Empowerment', title_mr:'मुख्यमंत्री माझी लाडकी बहीण योजना', title_hi:'मुख्यमंत्री माझी लाडकी बहीण योजना', title_en:"CM's Majhi Ladki Bahin Scheme", desc_mr:'पात्र महिलांना दरमहा ₹1,500 डीबीटी द्वारे जमा. आत्ताच नोंदणी करा!', desc_hi:'पात्र महिलाओं को प्रति माह ₹1,500 DBT द्वारा. अभी नामांकन करें!', desc_en:'₹1,500/month directly to eligible women via DBT. Register now!', cta:'#schemes' },
  { img:'https://picsum.photos/seed/education2/1600/900', tag:'Youth & Education', title_mr:'पोस्ट मॅट्रिक शिष्यवृत्ती (SC/ST/OBC)', title_hi:'पोस्ट मैट्रिक छात्रवृत्ति', title_en:'Post Matric Scholarship SC/ST/OBC', desc_mr:'उच्च शिक्षण घेणाऱ्या SC/ST/OBC विद्यार्थ्यांसाठी संपूर्ण शुल्क परतावा व मासिक भत्ता.', desc_hi:'उच्च शिक्षा हेतु SC/ST/OBC छात्रों के लिए पूर्ण शुल्क प्रतिपूर्ति.', desc_en:'Full tuition fee reimbursement & monthly allowance for SC/ST/OBC students.', cta:'#scholarships' },
  { img:'https://picsum.photos/seed/health3/1600/900', tag:'Health Insurance', title_mr:'आयुष्मान भारत PM-JAY', title_hi:'आयुष्मान भारत PM-JAY', title_en:'Ayushman Bharat PM-JAY', desc_mr:'पात्र कुटुंबांना दरवर्षी ₹5 लाखांपर्यंत रोखरहित आरोग्य उपचार.', desc_hi:'पात्र परिवारों को ₹5 लाख तक कैशलेस स्वास्थ्य बीमा प्रतिवर्ष.', desc_en:'₹5 lakh cashless health cover per year for eligible families.', cta:'#schemes' },
  { img:'https://picsum.photos/seed/employment4/1600/900', tag:'Rural Employment', title_mr:'महात्मा गांधी रोजगार हमी योजना', title_hi:'महात्मा गांधी रोजगार गारंटी', title_en:'MGNREGA', desc_mr:'प्रत्येक ग्रामीण कुटुंबाला वर्षातून किमान 100 दिवसांच्या रोजगाराची हमी.', desc_hi:'हर ग्रामीण परिवार को साल में 100 दिन के रोजगार की गारंटी.', desc_en:'Guarantee of 100 days of unskilled employment per year to rural households.', cta:'#schemes' },
];

function renderHome() {
  return `
  <div class="hero-wrapper">
    <!-- Slideshow Carousel -->
    <div class="carousel-container" id="hero-carousel">
      <div class="carousel-slides">
        ${heroSlides.map((s, i) => `
          <div class="carousel-slide ${i === 0 ? 'active' : ''}">
            <img src="${s.img}" alt="${s.title_en}" class="slide-bg-image" loading="${i===0?'eager':'lazy'}">
            <div class="slide-overlay"></div>
            <div class="slide-caption">
              <span class="slide-tag">${s.tag}</span>
              <h2>${s[`title_${currentLang}`] || s.title_en}</h2>
              <p>${s[`desc_${currentLang}`] || s.desc_en}</p>
              <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
                <a href="${s.cta}" class="btn btn-saffron"><i class="fa-solid fa-arrow-right"></i> आत्ता जाणून घ्या</a>
                <a href="#verify" class="btn btn-secondary" style="background:rgba(255,255,255,0.15);color:white;border:1px solid rgba(255,255,255,0.4);"><i class="fa-solid fa-id-card"></i> कागदपत्रे पडताळणी</a>
              </div>
            </div>
          </div>`).join('')}
      </div>
      <button class="carousel-nav-btn carousel-prev" id="carousel-prev"><i class="fa-solid fa-chevron-left"></i></button>
      <button class="carousel-nav-btn carousel-next" id="carousel-next"><i class="fa-solid fa-chevron-right"></i></button>
      <div class="carousel-indicators">
        ${heroSlides.map((_,i) => `<button class="carousel-dot ${i===0?'active':''}" data-index="${i}"></button>`).join('')}
      </div>
    </div>
  </div>

  <!-- Quick Stats -->
  <div class="stats-row" style="padding-top:2rem;">
    <div class="stat-card"><div class="stat-number" style="color:var(--gov-navy);">25+</div><div class="stat-label">${t('stat_schemes')}</div></div>
    <div class="stat-card"><div class="stat-number" style="color:var(--gov-saffron);">5,000+</div><div class="stat-label">${t('stat_beneficiaries')}</div></div>
    <div class="stat-card"><div class="stat-number" style="color:var(--gov-green);">12</div><div class="stat-label">${t('stat_depts')}</div></div>
    <div class="stat-card"><div class="stat-number" style="color:#7c3aed;">3</div><div class="stat-label">${t('stat_langs')}</div></div>
    <div class="stat-card"><div class="stat-number" style="color:#0891b2;">100%</div><div class="stat-label">${t('stat_free')}</div></div>
    <div class="stat-card"><div class="stat-number" style="color:#c62828;">24/7</div><div class="stat-label">${t('stat_online')}</div></div>
  </div>

  <!-- Leadership Section -->
  <div class="leaders-section">
    <div style="max-width:1400px;margin:0 auto;padding-bottom:1.5rem;">
      <h2 style="font-size:1.6rem;font-weight:800;color:white;margin-bottom:0.4rem;"><i class="fa-solid fa-star" style="color:var(--gov-saffron)"></i> ${t('leaders_title')}</h2>
      <p style="color:rgba(255,255,255,0.65);font-size:0.88rem;">${t('leaders_sub')}</p>
    </div>
    <div class="leaders-grid">
      <div class="leader-big-card">
        <div class="leader-big-portrait" style="background:linear-gradient(135deg,#FF8C00,#FF6B00);">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png" alt="Narendra Modi">
        </div>
        <div class="l-name">${t('leader_modi_name')}</div>
        <div class="l-title">${t('leader_modi_title')}</div>
        <div class="l-msg">"${t('leader_modi_msg')}"</div>
      </div>
      <div class="leader-big-card">
        <div class="leader-big-portrait" style="background:linear-gradient(135deg,#d97706,#b45309);">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Droupadi_Murmu_official_portrait_%281%29.jpg" alt="Droupadi Murmu">
        </div>
        <div class="l-name">${t('leader_murmu_name')}</div>
        <div class="l-title">${t('leader_murmu_title')}</div>
        <div class="l-msg">"${t('leader_murmu_msg')}"</div>
      </div>
      <div class="leader-big-card">
        <div class="leader-big-portrait" style="background:linear-gradient(135deg,#1a3a5c,#0f2540);">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Devendra_Fadnavis_official_portrait.jpg" alt="Devendra Fadnavis">
        </div>
        <div class="l-name">${t('leader_fadnavis_name')}</div>
        <div class="l-title">${t('leader_fadnavis_title')}</div>
        <div class="l-msg">"${t('leader_fadnavis_msg')}"</div>
      </div>
      <div class="leader-big-card">
        <div class="leader-big-portrait" style="background:linear-gradient(135deg,#138808,#0a5c06);">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Pralhad_Joshi_official_photo.jpg" alt="Pralhad Joshi">
        </div>
        <div class="l-name">${t('leader_joshi_name')}</div>
        <div class="l-title">${t('leader_joshi_title')}</div>
        <div class="l-msg">"${t('leader_joshi_msg')}"</div>
      </div>
    </div>
  </div>

  <!-- Categories -->
  <div class="section-wrapper">
    <div class="section-header">
      <h2>${t('cat_title')}</h2>
      <p>${t('cat_sub')}</p>
    </div>
    <div class="category-grid">
      ${[
        { cat:'farmer',     color:'#138808', bgColor:'linear-gradient(135deg,#138808,#0a5c06)', icon:'fa-tractor',           tk:'cat_farmer',     dk:'cat_farmer_desc',     img:'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&q=80' },
        { cat:'women',      color:'#c62828', bgColor:'linear-gradient(135deg,#c62828,#b71c1c)', icon:'fa-person-dress',       tk:'cat_women',      dk:'cat_women_desc',      img:'https://images.unsplash.com/photo-1622359419163-546059fc54bc?w=400&q=80' },
        { cat:'student',    color:'#1a3a5c', bgColor:'linear-gradient(135deg,#1a3a5c,#0f2540)', icon:'fa-graduation-cap',    tk:'cat_student',    dk:'cat_student_desc',    img:'https://images.unsplash.com/photo-1544837580-f04bf495d43e?w=400&q=80' },
        { cat:'health',     color:'#ef4444', bgColor:'linear-gradient(135deg,#ef4444,#dc2626)', icon:'fa-heart-pulse',       tk:'cat_health',     dk:'cat_health_desc',     img:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80' },
        { cat:'senior',     color:'#FF8C00', bgColor:'linear-gradient(135deg,#FF8C00,#e65100)', icon:'fa-person-cane',       tk:'cat_senior',     dk:'cat_senior_desc',     img:'https://images.unsplash.com/photo-1581579438747-1dc8d17373ce?w=400&q=80' },
        { cat:'employment', color:'#7c3aed', bgColor:'linear-gradient(135deg,#7c3aed,#6d28d9)', icon:'fa-briefcase',         tk:'cat_employment', dk:'cat_employment_desc', img:'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?w=400&q=80' },
        { cat:'welfare',    color:'#0891b2', bgColor:'linear-gradient(135deg,#0891b2,#0e7490)', icon:'fa-house-chimney',     tk:'cat_welfare',    dk:'cat_welfare_desc',    img:'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80' },
        { cat:'student',    color:'#d97706', bgColor:'linear-gradient(135deg,#d97706,#b45309)', icon:'fa-award',             tk:'cat_scholarship',dk:'cat_scholarship_desc',img:'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80', href:'#scholarships' },
      ].map(c => `
        <a href="${c.href || '#schemes'}" class="category-card" data-category="${c.cat}" style="--cat-color:${c.color};" ${c.href ? '' : `onclick="filterSchemesByCategory('${c.cat}')"`}>
          <div class="cat-icon" style="background:${c.bgColor}"><i class="fa-solid ${c.icon}"></i></div>
          <h3>${t(c.tk)}</h3>
          <p>${t(c.dk)}</p>
        </a>`).join('')}
    </div>
  </div>

  <!-- Announcements + Gallery -->
  <div class="announcements-section">
    <div class="announcements-grid">
      <div class="announcement-col">
        <h3><i class="fa-solid fa-bullhorn"></i> ${t('news_title')}</h3>
        ${[
          { date:'08 Aug 2026', text: t('news_1'), isNew:true },
          { date:'05 Aug 2026', text: t('news_2'), isNew:true },
          { date:'01 Aug 2026', text: t('news_3'), isNew:false },
          { date:'28 Jul 2026', text: t('news_4'), isNew:false },
          { date:'20 Jul 2026', text: t('news_5'), isNew:false },
        ].map(n => `
          <div class="notice-item">
            <span class="notice-date">${n.date}</span>
            <div class="notice-text">${n.text}${n.isNew ? '<span class="notice-new-badge">NEW</span>' : ''}</div>
          </div>`).join('')}
        <a href="#schemes" class="btn btn-primary btn-sm" style="margin-top:1rem;">${t('view_all_updates')} <i class="fa-solid fa-arrow-right"></i></a>
      </div>
      <div class="announcement-col">
        <h3><i class="fa-solid fa-camera"></i> ${t('gallery_title')}</h3>
        <div class="gallery-grid">
          ${[
            { src:'https://picsum.photos/seed/gallery1/400/300', caption: t('gallery_rural') },
            { src:'https://picsum.photos/seed/gallery2/400/300', caption: t('gallery_farmer') },
            { src:'https://picsum.photos/seed/gallery3/400/300', caption: t('gallery_women') },
            { src:'https://picsum.photos/seed/gallery4/400/300', caption: t('gallery_emp') },
            { src:'https://picsum.photos/seed/gallery5/400/300', caption: t('gallery_schol') },
            { src:'https://picsum.photos/seed/gallery6/400/300', caption: t('gallery_health') },
          ].map((img, i) => `
            <div class="gallery-item ${i === 0 ? '' : ''}">
              <img src="${img.src}" alt="${img.caption}" loading="lazy">
              <div class="gallery-item-overlay"><span>${img.caption}</span></div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  </div>

  <!-- ZP Nagpur Banner -->
  <div style="background:linear-gradient(135deg,var(--gov-navy),var(--gov-navy2));color:white;padding:2rem 5%;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;border-top:4px solid var(--gov-saffron);">
    <div>
      <h3 style="font-size:1.3rem;font-weight:800;margin-bottom:0.35rem;"><i class="fa-solid fa-building-columns" style="color:var(--gov-saffron)"></i> ${t('zp_banner_title')}</h3>
      <p style="color:rgba(255,255,255,0.7);font-size:0.9rem;">${t('zp_banner_sub')}</p>
    </div>
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
      <a href="https://zpnagpur.maharashtra.gov.in" target="_blank" class="btn btn-saffron"><i class="fa-solid fa-external-link-alt"></i> ${t('zp_website_btn')}</a>
      <a href="#verify" class="btn btn-secondary" style="background:rgba(255,255,255,0.1);color:white;border:1px solid rgba(255,255,255,0.3);"><i class="fa-solid fa-id-card"></i> ${t('verify_docs')}</a>
    </div>
  </div>`;
}

// ============================================================
//  SCHEMES PAGE
// ============================================================
function renderSchemes() {
  return `
  <div class="page-header">
    <h2><i class="fa-solid fa-layer-group"></i> ${t('schemes_title')}</h2>
    <p>${t('schemes_sub')}</p>
    <div class="search-bar-wrapper">
      <i class="fa-solid fa-magnifying-glass search-icon"></i>
      <input type="text" id="scheme-search" placeholder="${t('schemes_search')}">
    </div>
  </div>
  <div class="filter-tabs">
    <button class="filter-btn active" data-cat="all">${t('filter_all')}</button>
    <button class="filter-btn" data-cat="farmer">${t('cat_farmer')}</button>
    <button class="filter-btn" data-cat="women">${t('cat_women')}</button>
    <button class="filter-btn" data-cat="student">${t('cat_student')}</button>
    <button class="filter-btn" data-cat="senior">${t('cat_senior')}</button>
    <button class="filter-btn" data-cat="health">${t('cat_health')}</button>
    <button class="filter-btn" data-cat="employment">${t('cat_employment')}</button>
    <button class="filter-btn" data-cat="welfare">${t('cat_welfare')}</button>
    <button class="filter-btn" data-provider="central">${t('filter_central')}</button>
    <button class="filter-btn" data-provider="state">${t('filter_state')}</button>
  </div>
  <div class="schemes-grid" id="scheme-results"></div>`;
}

window.filterSchemesByCategory = function(cat) {
  setTimeout(() => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === cat);
    });
    const input = document.getElementById('scheme-search');
    const results = document.getElementById('scheme-results');
    if (!results) return;
    renderSchemeList(results, schemesData.filter(s => s.category === cat), input);
  }, 100);
};

function renderSchemeCard(scheme) {
  return `
  <div class="scheme-card">
    <div class="scheme-card-img" style="background-image:url('${scheme.imageUrl}')">
      <div class="scheme-card-img-overlay"></div>
      <div class="scheme-card-img-content">
        <div>
          <span class="scheme-badge">${scheme.category}</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:0.3rem;">
          <span class="scheme-provider-badge">${scheme.provider === 'central' ? '🏛 ' + t('filter_central') : '🏢 ' + t('filter_state')}</span>
          <span style="font-size:2rem;color:white;"><i class="fa-solid ${scheme.theme.icon}"></i></span>
        </div>
      </div>
    </div>
    <div class="scheme-card-body">
      <p class="scheme-dept" style="color:${scheme.theme.color}"><i class="fa-solid fa-building-columns"></i> ${getF(scheme,'department')}</p>
      <h3>${getF(scheme,'title')}</h3>
      <p>${getF(scheme,'description')}</p>
      <div class="scheme-card-actions">
        <button class="btn btn-primary btn-sm" style="background:${scheme.theme.gradient};" onclick="openSchemeModal(${scheme.id})">${t('view_details')}</button>
        <button class="btn btn-saffron btn-sm" onclick="openVerifyAndApply(${scheme.id})"><i class="fa-solid fa-file-signature"></i> ${t('apply_now')}</button>
        <a href="#eligibility" class="btn btn-secondary btn-sm">${t('check_elig')}</a>
      </div>
    </div>
  </div>`;
}

function renderSchemeList(container, list, searchInput) {
  if (!list.length) {
    container.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:3rem;">${t('no_schemes')}</p>`;
    return;
  }
  container.innerHTML = list.map(renderSchemeCard).join('');
}

function initSchemes(presetCat = null) {
  const searchInput = document.getElementById('scheme-search');
  const results = document.getElementById('scheme-results');
  if (!results) return;

  let activeCat = presetCat || 'all';
  let activeProvider = null;

  const getFiltered = () => {
    const q = (searchInput?.value || '').toLowerCase();
    return schemesData.filter(s => {
      const matchSearch = !q || getF(s,'title').toLowerCase().includes(q) || s.category.toLowerCase().includes(q) || getF(s,'description').toLowerCase().includes(q);
      const matchCat = activeCat === 'all' || s.category === activeCat;
      const matchProv = !activeProvider || s.provider === activeProvider;
      return matchSearch && matchCat && matchProv;
    });
  };

  renderSchemeList(results, getFiltered(), searchInput);

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (btn.dataset.cat) { activeCat = btn.dataset.cat; activeProvider = null; }
      if (btn.dataset.provider) { activeProvider = btn.dataset.provider; activeCat = 'all'; }
      renderSchemeList(results, getFiltered(), searchInput);
    });
  });

  searchInput?.addEventListener('input', () => renderSchemeList(results, getFiltered(), searchInput));
}

// ============================================================
//  SCHOLARSHIPS PAGE
// ============================================================
const scholarshipSchemes = [
  { id:'s1', name_mr:'राजर्षी छत्रपती शाहू महाराज शिष्यवृत्ती (OBC)', name_hi:'राजर्षी छत्रपती शाहू महाराज छात्रवृत्ति (OBC)', name_en:'Rajarshi Chhatrapati Shahu Maharaj Scholarship (OBC)', img:'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80', cat:'OBC', amount:'₹15,000–₹40,000/वर्ष', dept_mr:'समाज कल्याण विभाग, महाराष्ट्र', portal:'https://mahadbt.maharashtra.gov.in', eligibility_mr:'OBC/VJNT/SBC प्रवर्गातील 10वी नंतरचे विद्यार्थी. वार्षिक उत्पन्न ₹8 लाखाखाली.', docs_mr:'आधार, जात प्रमाणपत्र, उत्पन्न दाखला, मार्कशीट, प्रवेश पत्र, बँक पासबुक' },
  { id:'s2', name_mr:'पोस्ट मॅट्रिक शिष्यवृत्ती SC/ST', name_hi:'पोस्ट मैट्रिक छात्रवृत्ति SC/ST', name_en:'Post Matric Scholarship SC/ST', img:'https://images.unsplash.com/photo-1544837580-f04bf495d43e?w=400&q=80', cat:'SC/ST', amount:'₹5,000–₹75,000/वर्ष', dept_mr:'अनुसूचित जाती/जमाती विभाग', portal:'https://scholarships.gov.in', eligibility_mr:'SC/ST प्रवर्गातील इयत्ता 11वी व त्यापुढील विद्यार्थी. उत्पन्न मर्यादा नाही (SC/ST).', docs_mr:'आधार, जात प्रमाणपत्र, मार्कशीट, प्रवेश पत्र, बोनाफाईड, बँक पासबुक' },
  { id:'s3', name_mr:'स्वाधार योजना (SC विद्यार्थी)', name_hi:'स्वाधार योजना (SC छात्र)', name_en:'Swadhar Scheme (SC Students)', img:'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80', cat:'SC', amount:'₹51,000/वर्ष', dept_mr:'समाज कल्याण विभाग', portal:'https://mahadbt.maharashtra.gov.in', eligibility_mr:'SC प्रवर्ग, 10वी 60%+ गुण, वार्षिक उत्पन्न ₹2.5 लाखाखाली.', docs_mr:'आधार, जात प्रमाणपत्र, उत्पन्न दाखला, 10वी मार्कशीट, बँक पासबुक' },
  { id:'s4', name_mr:'EBC शिष्यवृत्ती (आर्थिकदृष्ट्या दुर्बल)', name_hi:'EBC छात्रवृत्ति (आर्थिक रूप से कमजोर)', name_en:'EBC Scholarship (Economically Backward)', img:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80', cat:'EBC', amount:'₹2,000–₹10,000/वर्ष', dept_mr:'उच्च व तंत्र शिक्षण विभाग', portal:'https://mahadbt.maharashtra.gov.in', eligibility_mr:'खुला प्रवर्ग, उत्पन्न ₹2.5 लाखाखाली. इयत्ता 11वी व त्यापुढील.', docs_mr:'आधार, उत्पन्न दाखला, प्रवेश पत्र, मार्कशीट, बँक पासबुक' },
  { id:'s5', name_mr:'मॅट्रिकपूर्व शिष्यवृत्ती (Pre-Matric SC/ST)', name_hi:'Pre-Matric Scholarship SC/ST', name_en:'Pre-Matric Scholarship SC/ST', img:'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80', cat:'SC/ST', amount:'₹1,000–₹2,000/माह', dept_mr:'अनुसूचित जाती विभाग', portal:'https://scholarships.gov.in', eligibility_mr:'SC/ST विद्यार्थी इयत्ता 9वी–10वी. विद्यार्थी नियमित असणे आवश्यक.', docs_mr:'आधार, जात प्रमाणपत्र, शाळेचे बोनाफाईड, मार्कशीट, बँक पासबुक' },
  { id:'s6', name_mr:'NSP राष्ट्रीय शिष्यवृत्ती (NSP Portal)', name_hi:'NSP राष्ट्रीय छात्रवृत्ति', name_en:'NSP National Scholarship Portal', img:'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=80', cat:'All', amount:'विविध प्रमाणे', dept_mr:'राष्ट्रीय शिष्यवृत्ती पोर्टल', portal:'https://scholarships.gov.in', eligibility_mr:'सर्व SC/ST/OBC/EBC/अल्पसंख्याक विद्यार्थी. गुणवत्ता व उत्पन्नावर आधारित.', docs_mr:'आधार, जात/श्रेणी प्रमाणपत्र, मागील वर्षाची मार्कशीट, बँक पासबुक, बोनाफाईड' },
];

function renderScholarships() {
  return `
  <div class="page-header">
    <h2><i class="fa-solid fa-graduation-cap"></i> ग्रामीण शिष्यवृत्ती योजना</h2>
    <p>महाराष्ट्र शासन व केंद्र शासनाच्या सर्व शिष्यवृत्ती योजना</p>
  </div>
  <div style="padding:2rem 5%;max-width:1400px;margin:0 auto;">
    <div style="background:linear-gradient(135deg,rgba(26,58,92,0.08),rgba(255,140,0,0.08));border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.5rem;margin-bottom:2rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
      <div style="font-size:2.5rem;">📋</div>
      <div>
        <h3 style="color:var(--primary);margin-bottom:0.25rem;">अर्ज करण्यासाठी लागणारी कागदपत्रे</h3>
        <p style="color:var(--text-muted);font-size:0.88rem;">आधार कार्ड • जात प्रमाणपत्र • उत्पन्नाचा दाखला • मागील वर्षाची मार्कशीट • बँक पासबुक • बोनाफाईड प्रमाणपत्र • प्रवेश पत्र</p>
      </div>
      <a href="#verify" class="btn btn-saffron" style="margin-left:auto;"><i class="fa-solid fa-id-card"></i> कागदपत्रे पडताळणी करा</a>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:1.5rem;">
      ${scholarshipSchemes.map(s => `
        <div style="background:white;border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-sm);transition:var(--transition);" onmouseover="this.style.transform='translateY(-6px)';this.style.boxShadow='var(--shadow-gov)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--shadow-sm)'">
          <div style="height:160px;background:url('${s.img}') center/cover;position:relative;">
            <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent,rgba(0,0,0,0.7));"></div>
            <div style="position:absolute;bottom:0.75rem;left:1rem;right:1rem;display:flex;justify-content:space-between;align-items:center;">
              <span style="background:var(--gov-saffron);color:white;padding:0.2rem 0.65rem;border-radius:20px;font-size:0.72rem;font-weight:700;">${s.cat}</span>
              <span style="background:rgba(19,136,8,0.85);color:white;padding:0.2rem 0.65rem;border-radius:20px;font-size:0.72rem;font-weight:700;">${s.amount}</span>
            </div>
          </div>
          <div style="padding:1.25rem 1.5rem;">
            <p style="font-size:0.72rem;font-weight:700;text-transform:uppercase;color:var(--gov-navy);margin-bottom:0.3rem;"><i class="fa-solid fa-building-columns"></i> ${s.dept_mr}</p>
            <h3 style="font-size:1rem;font-weight:700;color:var(--text);margin-bottom:0.5rem;line-height:1.3;">${s[`name_${currentLang}`] || s.name_en}</h3>
            <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.5rem;"><strong>पात्रता:</strong> ${s.eligibility_mr}</p>
            <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:1rem;"><strong>कागदपत्रे:</strong> ${s.docs_mr}</p>
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
              <a href="${s.portal}" target="_blank" class="btn btn-primary btn-sm"><i class="fa-solid fa-external-link-alt"></i> अर्ज करा</a>
              <button class="btn btn-saffron btn-sm" onclick="openVerifyModal(null)"><i class="fa-solid fa-id-card"></i> कागदपत्रे पडताळणी</button>
            </div>
          </div>
        </div>`).join('')}
    </div>
    <div style="margin-top:2rem;padding:1.5rem;background:var(--gov-light);border-radius:var(--radius-lg);border-left:4px solid var(--gov-navy);">
      <h4 style="color:var(--primary);margin-bottom:0.5rem;"><i class="fa-solid fa-info-circle"></i> महत्त्वाची माहिती</h4>
      <ul style="color:var(--text-muted);padding-left:1.5rem;font-size:0.88rem;line-height:1.8;">
        <li>शिष्यवृत्तीसाठी अर्ज <strong>NSP Portal (scholarships.gov.in)</strong> किंवा <strong>MahaDBT Portal</strong> द्वारे करावा.</li>
        <li>अर्जाची मुदत सहसा <strong>ऑगस्ट ते ऑक्टोबर</strong> दरम्यान असते.</li>
        <li>एकाच विद्यार्थ्याला सामान्यतः एकच शिष्यवृत्ती मिळू शकते.</li>
        <li>अधिक माहितीसाठी जवळच्या <strong>ग्रामपंचायत कार्यालय</strong> किंवा <strong>जि.प. शिक्षण विभाग</strong> यांना संपर्क करा.</li>
      </ul>
    </div>
  </div>`;
}
function initScholarships() {}

// ============================================================
//  DOCUMENT VERIFICATION PAGE
// ============================================================
function renderVerify() {
  return `
  <div class="page-header">
    <h2><i class="fa-solid fa-id-card"></i> कागदपत्रे पडताळणी | Document Verification</h2>
    <p>योजनेसाठी अर्ज करण्यापूर्वी तुमची कागदपत्रे येथे पडताळा</p>
  </div>
  <div class="verify-page">
    <div style="background:linear-gradient(135deg,rgba(26,58,92,0.06),rgba(255,140,0,0.06));border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.5rem;margin-bottom:2rem;">
      <h3 style="color:var(--primary);margin-bottom:0.5rem;"><i class="fa-solid fa-shield-halved" style="color:var(--gov-saffron)"></i> सुरक्षित पडताळणी</h3>
      <p style="color:var(--text-muted);font-size:0.88rem;">तुमची माहिती सुरक्षित आहे. फक्त या सत्रात वापरली जाईल. कोणत्याही बाह्य सर्व्हरवर पाठवली जाणार नाही.</p>
    </div>
    <h3 style="margin-bottom:1rem;color:var(--primary);">खालीलपैकी कागदपत्रे पडताळा:</h3>
    <div class="verify-steps" id="verify-steps-main">
      ${docTypes.map(doc => {
        const isVerified = verifiedDocs[doc.id];
        const label = doc[`label_${currentLang}`] || doc.label_en;
        return `
        <div class="verify-step-card ${isVerified ? 'verified' : ''}" id="vmain-${doc.id}">
          <div class="verify-icon">${doc.icon}</div>
          <h4>${label}</h4>
          <p>${doc.placeholder}</p>
          ${isVerified
            ? `<span class="verified-badge">✓ पडताळणी झाली</span>`
            : `<div class="form-group" style="margin:1rem 0 0;text-align:left;">
                <input type="text" id="vmain-input-${doc.id}" placeholder="${doc.placeholder}" style="font-size:0.88rem;" oninput="this.value=this.value.toUpperCase()">
              </div>
              <button class="btn btn-primary btn-sm" style="margin-top:0.5rem;" onclick="verifyDocMain('${doc.id}')">पडताळणी करा</button>`
          }
        </div>`;
      }).join('')}
    </div>
    <div id="verify-main-status" style="margin-top:1.5rem;text-align:center;font-size:1rem;font-weight:600;"></div>
    <div style="margin-top:2rem;padding:1.5rem;background:var(--gov-light);border-radius:var(--radius-lg);">
      <h4 style="color:var(--primary);margin-bottom:0.75rem;"><i class="fa-solid fa-circle-info"></i> कागदपत्रांचे स्वरूप</h4>
      <ul style="list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;">
        <li style="font-size:0.85rem;color:var(--text-muted);">🪪 <strong>आधार कार्ड:</strong> 12 अंकी नंबर</li>
        <li style="font-size:0.85rem;color:var(--text-muted);">🟧 <strong>रेशन कार्ड:</strong> किमान 6 अक्षरे</li>
        <li style="font-size:0.85rem;color:var(--text-muted);">🗳️ <strong>मतदार ओळखपत्र:</strong> ABC1234567 स्वरूप</li>
        <li style="font-size:0.85rem;color:var(--text-muted);">💳 <strong>पॅन कार्ड:</strong> ABCDE1234F स्वरूप</li>
      </ul>
    </div>
  </div>`;
}

window.verifyDocMain = function(docId) {
  const doc = docTypes.find(d => d.id === docId);
  const input = document.getElementById(`vmain-input-${docId}`);
  const val = input?.value.trim() || '';
  const statusEl = document.getElementById('verify-main-status');
  if (doc.pattern.test(val)) {
    verifiedDocs[docId] = true;
    sessionStorage.setItem('escheme_verified', JSON.stringify(verifiedDocs));
    const card = document.getElementById(`vmain-${docId}`);
    const label = doc[`label_${currentLang}`] || doc.label_en;
    card.classList.add('verified');
    card.innerHTML = `<div class="verify-icon">${doc.icon}</div><h4>${label}</h4><p>पडताळणी यशस्वी</p><span class="verified-badge">✓ पडताळणी झाली</span>`;
    statusEl.innerHTML = `<span style="color:var(--gov-green)">✓ ${label} — पडताळणी यशस्वी!</span>`;
  } else {
    statusEl.innerHTML = `<span style="color:#c62828">❌ अवैध नंबर. ${doc.placeholder} नुसार प्रविष्ट करा.</span>`;
  }
};

function initVerify() {}

// ============================================================
//  ELIGIBILITY PAGE
// ============================================================
function renderEligibility() {
  return `
  <div class="page-header">
    <h2><i class="fa-solid fa-user-check"></i> ${t('eligibility_title')}</h2>
    <p>${t('eligibility_sub')}</p>
  </div>
  <section class="eligibility-section">
    <div class="eligibility-card">
      <h2>${t('eligibility_title')}</h2>
      <p style="color:var(--text-muted);margin-bottom:2rem;">${t('eligibility_sub')}</p>
      <form id="eligibility-form">
        <div class="form-group">
          <label>${t('elig_age')}</label>
          <input type="number" id="age" required min="1" max="120" placeholder="उदा. 35">
        </div>
        <div class="form-group">
          <label>${t('elig_gender')}</label>
          <select id="gender" required>
            <option value="" disabled selected>${t('elig_gender_ph')}</option>
            <option value="male">${t('elig_gender_male')}</option>
            <option value="female">${t('elig_gender_female')}</option>
            <option value="other">${t('elig_gender_other')}</option>
          </select>
        </div>
        <div class="form-group">
          <label>${t('elig_occ')}</label>
          <select id="occupation" required>
            <option value="" disabled selected>${t('elig_occ_ph')}</option>
            <option value="student">${t('elig_occ_student')}</option>
            <option value="farmer">${t('elig_occ_farmer')}</option>
            <option value="employed">${t('elig_occ_employed')}</option>
            <option value="unemployed">${t('elig_occ_unemployed')}</option>
            <option value="retired">${t('elig_occ_retired')}</option>
            <option value="homemaker">${t('elig_occ_homemaker')}</option>
          </select>
        </div>
        <div class="form-group">
          <label>${t('elig_income')}</label>
          <input type="number" id="income" required min="0" placeholder="उदा. 50000">
        </div>
        <button type="submit" class="btn btn-primary btn-full">${t('elig_submit')}</button>
      </form>
      <div id="eligibility-results" class="eligibility-results hidden"></div>
    </div>
  </section>`;
}

function initEligibility() {
  const form = document.getElementById('eligibility-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const occupation = document.getElementById('occupation').value;
    const income = parseInt(document.getElementById('income').value);
    const matched = schemesData.filter(scheme => {
      if (!scheme.eligibility) return true;
      const req = scheme.eligibility;
      if (req.minAge && age < req.minAge) return false;
      if (req.maxAge && age > req.maxAge) return false;
      if (req.gender && gender !== req.gender) return false;
      if (req.occupations && !req.occupations.includes(occupation)) return false;
      if (req.maxIncome && income > req.maxIncome) return false;
      return true;
    });
    const resultsDiv = document.getElementById('eligibility-results');
    resultsDiv.classList.remove('hidden');
    if (matched.length > 0) {
      resultsDiv.innerHTML = `
        <div style="text-align:center;padding:1.5rem;background:linear-gradient(135deg,rgba(19,136,8,0.08),rgba(10,92,5,0.08));border-radius:var(--radius-md);margin-bottom:1rem;border:1px solid rgba(19,136,8,0.2);">
          <i class="fa-solid fa-circle-check" style="font-size:2.5rem;color:var(--gov-green);display:block;margin-bottom:0.5rem;"></i>
          <h3 style="color:var(--gov-green);">${t('elig_found', { n: matched.length })}</h3>
        </div>
        <ul style="list-style:none;margin-top:1rem;">
          ${matched.map(m => `
            <li style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem 1rem;border-radius:var(--radius-sm);border:1px solid var(--border);margin-bottom:0.5rem;background:var(--card-bg);gap:0.75rem;flex-wrap:wrap;">
              <span style="font-weight:500;display:flex;align-items:center;gap:0.5rem;">
                <i class="fa-solid ${m.theme.icon}" style="color:${m.theme.color};"></i>
                ${getF(m,'title')}
              </span>
              <div style="display:flex;gap:0.5rem;">
                <button class="btn btn-primary btn-sm" onclick="openSchemeModal(${m.id})">${t('view_details')}</button>
                <button class="btn btn-saffron btn-sm" onclick="openVerifyAndApply(${m.id})">अर्ज करा</button>
              </div>
            </li>`).join('')}
        </ul>
        <a href="#schemes" class="btn btn-secondary" style="margin-top:1rem;display:block;text-align:center;">${t('browse_all')}</a>`;
    } else {
      resultsDiv.innerHTML = `
        <div style="text-align:center;padding:2rem;color:var(--text-muted);">
          <i class="fa-solid fa-circle-xmark" style="font-size:2.5rem;margin-bottom:0.5rem;display:block;color:#c62828;"></i>
          <h3>${t('elig_none')}</h3>
          <p>${t('elig_none_sub')}</p>
        </div>`;
    }
    resultsDiv.scrollIntoView({ behavior:'smooth', block:'nearest' });
  });
}

// ============================================================
//  DOCUMENTS PAGE
// ============================================================
function renderDocuments() {
  return `
  <section style="padding:3rem 5%;max-width:900px;margin:0 auto;">
    <h2 style="font-size:1.9rem;color:var(--primary);margin-bottom:0.5rem;"><i class="fa-solid fa-file-shield"></i> ${t('doc_title')}</h2>
    <p style="color:var(--text-muted);margin-bottom:2rem;">${t('doc_sub')}</p>
    <ul class="document-list">
      <li><i class="fa-solid fa-address-card" style="color:var(--gov-navy);"></i> आधार कार्ड (Aadhaar Card)</li>
      <li><i class="fa-solid fa-money-check" style="color:var(--gov-green);"></i> बँक पासबुक (Bank Passbook)</li>
      <li><i class="fa-solid fa-file-invoice-dollar" style="color:var(--gov-saffron);"></i> उत्पन्नाचा दाखला (Income Certificate)</li>
      <li><i class="fa-solid fa-house" style="color:#7c3aed;"></i> रहिवासी प्रमाणपत्र (Domicile Certificate)</li>
      <li><i class="fa-solid fa-camera" style="color:#db2777;"></i> पासपोर्ट आकाराचे फोटो (Passport Photos)</li>
      <li><i class="fa-solid fa-wheat-awn" style="color:var(--gov-green);"></i> जमिनीचे दस्तऐवज / ७/१२ उतारा (Land Record)</li>
      <li><i class="fa-solid fa-id-card" style="color:#0891b2;"></i> जात प्रमाणपत्र (Caste Certificate — SC/ST/OBC)</li>
      <li><i class="fa-solid fa-credit-card" style="color:#c62828;"></i> रेशन कार्ड (Ration Card)</li>
      <li><i class="fa-solid fa-vote-yea" style="color:#1a3a5c;"></i> मतदार ओळखपत्र (Voter ID Card)</li>
    </ul>

    <h2 style="font-size:1.9rem;color:var(--primary);margin:3rem 0 1.5rem;"><i class="fa-solid fa-circle-question"></i> ${t('faq_title')}</h2>
    <div class="faq-container" id="faq-container">
      ${[
        { q: t('faq_q1'), a: t('faq_a1') },
        { q: t('faq_q2'), a: t('faq_a2') },
        { q: t('faq_q3'), a: t('faq_a3') },
        { q:'शिष्यवृत्तीसाठी अर्ज कसा करावा?', a:'NSP Portal (scholarships.gov.in) किंवा MahaDBT Portal (mahadbt.maharashtra.gov.in) वर अर्ज करा. जवळच्या ग्रामपंचायत कार्यालयातून मदत घेता येते.' },
        { q:'आधार मोबाईलशी जोडलेले नसल्यास काय करावे?', a:'जवळच्या आधार केंद्र किंवा CSC (Common Service Centre) येथे जाऊन आधार अपडेट करता येते.' },
        { q:'DBT म्हणजे काय?', a:'DBT म्हणजे Direct Benefit Transfer — सरकारी मदत थेट तुमच्या बँक खात्यात जमा होते. यासाठी आधार-बँक खाते लिंक असणे आवश्यक आहे.' },
      ].map(f => `
        <div class="faq-item">
          <div class="faq-question">${f.q} <i class="fa-solid fa-chevron-down"></i></div>
          <div class="faq-answer">${f.a}</div>
        </div>`).join('')}
    </div>
  </section>`;
}
function initDocuments() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
  });
}

// ============================================================
//  CONTACT PAGE
// ============================================================
function renderContact() {
  return `
  <div class="page-header">
    <h2><i class="fa-solid fa-phone-volume"></i> ${t('contact_title')}</h2>
  </div>
  <section style="padding:3rem 5%;max-width:1200px;margin:0 auto;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;">
      <div>
        <h3 style="font-size:1.25rem;font-weight:700;color:var(--primary);margin-bottom:1.25rem;">${t('contact_info_title')}</h3>
        <div class="info-card"><i class="fa-solid fa-location-dot"></i><h4>${t('contact_addr')}</h4><p>${t('contact_addr_val')}</p></div>
        <div class="info-card"><i class="fa-solid fa-phone"></i><h4>${t('contact_phone')}</h4><p>${t('contact_phone_val')}</p></div>
        <div class="info-card"><i class="fa-solid fa-headset"></i><h4>${t('contact_tollfree')}</h4><p>1800-120-8040</p></div>
        <div class="info-card"><i class="fa-solid fa-clock"></i><h4>${t('contact_hours')}</h4><p>${t('contact_hours_val')}</p></div>
        <div class="info-card"><i class="fa-solid fa-globe"></i><h4>${t('contact_website')}</h4><p><a href="https://zpnagpur.maharashtra.gov.in" target="_blank" style="color:var(--primary);">zpnagpur.maharashtra.gov.in</a></p></div>
      </div>
      <div>
        <h3 style="font-size:1.25rem;font-weight:700;color:var(--primary);margin-bottom:1.25rem;">${t('contact_send_msg')}</h3>
        <form class="contact-form" onsubmit="event.preventDefault();this.reset();alert('✅ ' + '${t('contact_success')}')">
          <input type="text" placeholder="${t('contact_name_ph')}" required>
          <input type="tel" placeholder="${t('contact_mobile_ph')}" required>
          <input type="text" placeholder="${t('auth_village_ph')}">
          <textarea placeholder="${t('contact_msg_ph')}" rows="5" required></textarea>
          <button type="submit" class="btn btn-primary"><i class="fa-solid fa-paper-plane"></i> ${t('contact_send')}</button>
        </form>
      </div>
    </div>
  </section>`;
}

// ============================================================
//  PROFILE PAGE
// ============================================================
function renderProfile() {
  if (!userProfile) return '<p style="padding:3rem;text-align:center;color:var(--text-muted);">कृपया पृष्ठ पुन्हा लोड करा.</p>';
  const langLabel = { en:'English', hi:'हिंदी', mr:'मराठी' };
  const verifiedCount = Object.keys(verifiedDocs).length;
  return `
  <section class="eligibility-section">
    <div class="profile-card">
      <div style="text-align:center;margin-bottom:2rem;">
        <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,var(--gov-navy),var(--gov-saffron));display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-size:2rem;color:white;">
          <i class="fa-solid fa-user"></i>
        </div>
        <h2 style="color:var(--primary);">${t('profile_title')}</h2>
        ${verifiedCount > 0 ? `<span style="background:rgba(19,136,8,0.1);color:var(--gov-green);padding:0.2rem 0.75rem;border-radius:20px;font-size:0.8rem;font-weight:700;"><i class="fa-solid fa-check-circle"></i> ${verifiedCount} कागदपत्रे पडताळणी झाली</span>` : ''}
      </div>
      <div id="profile-view">
        <div class="profile-info-item"><span class="profile-label">${t('profile_name')}</span><span class="profile-value">${userProfile.name}</span></div>
        ${userProfile.mobile ? `<div class="profile-info-item"><span class="profile-label">मोबाईल</span><span class="profile-value">${userProfile.mobile}</span></div>` : ''}
        <div class="profile-info-item"><span class="profile-label">${t('profile_dob')}</span><span class="profile-value">${userProfile.dob}</span></div>
        ${userProfile.village ? `<div class="profile-info-item"><span class="profile-label">गाव</span><span class="profile-value">${userProfile.village}</span></div>` : ''}
        <div class="profile-info-item"><span class="profile-label">${t('profile_lang')}</span><span class="profile-value">${langLabel[currentLang]}</span></div>
        <div style="display:flex;gap:0.75rem;margin-top:1.5rem;flex-wrap:wrap;">
          <button id="edit-profile-btn" class="btn btn-primary" style="flex:1;">${t('profile_edit')}</button>
          <a href="#verify" class="btn btn-saffron" style="flex:1;text-align:center;"><i class="fa-solid fa-id-card"></i> कागदपत्रे पडताळणी</a>
        </div>
      </div>
      <div id="profile-edit-form" style="display:none;">
        <form id="edit-form">
          <div class="form-group"><label>${t('profile_name')}</label><input type="text" id="edit-name" value="${userProfile.name}" required></div>
          <div class="form-group"><label>मोबाईल</label><input type="tel" id="edit-mobile" value="${userProfile.mobile || ''}"></div>
          <div class="form-group"><label>गाव</label><input type="text" id="edit-village" value="${userProfile.village || ''}"></div>
          <div class="form-group"><label>${t('profile_lang')}</label>
            <select id="edit-lang">
              <option value="mr" ${currentLang==='mr'?'selected':''}>मराठी</option>
              <option value="hi" ${currentLang==='hi'?'selected':''}>हिंदी</option>
              <option value="en" ${currentLang==='en'?'selected':''}>English</option>
            </select>
          </div>
          <div style="display:flex;gap:1rem;margin-top:1.5rem;">
            <button type="submit" class="btn btn-primary" style="flex:1;">${t('profile_save')}</button>
            <button type="button" id="cancel-edit-btn" class="btn btn-secondary" style="flex:1;">${t('profile_cancel')}</button>
          </div>
        </form>
      </div>
    </div>
  </section>`;
}
function initProfile() {
  document.getElementById('edit-profile-btn')?.addEventListener('click', () => {
    document.getElementById('profile-view').style.display = 'none';
    document.getElementById('profile-edit-form').style.display = 'block';
  });
  document.getElementById('cancel-edit-btn')?.addEventListener('click', () => {
    document.getElementById('profile-view').style.display = 'block';
    document.getElementById('profile-edit-form').style.display = 'none';
  });
  document.getElementById('edit-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const newLang = document.getElementById('edit-lang').value;
    userProfile = { ...userProfile, name: document.getElementById('edit-name').value, mobile: document.getElementById('edit-mobile').value, village: document.getElementById('edit-village').value, lang: newLang };
    localStorage.setItem('escheme_user', JSON.stringify(userProfile));
    if (newLang !== currentLang) setLanguage(newLang);
    else handleRoute();
  });
}

// ============================================================
//  ADMIN PANEL
// ============================================================
let isAdminLoggedIn = sessionStorage.getItem('escheme_admin_auth') === 'true';

function renderAdmin() {
  if (!isAdminLoggedIn) {
    return `
    <section class="eligibility-section">
      <div class="profile-card" style="text-align:center;">
        <div style="width:80px;height:80px;border-radius:50%;background:rgba(239,68,68,0.1);display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;font-size:2.5rem;color:#ef4444;"><i class="fa-solid fa-user-shield"></i></div>
        <h2 style="color:var(--primary);">${t('admin_title')}</h2>
        <p style="color:var(--text-muted);margin-bottom:2rem;">${t('admin_desc')}</p>
        <form id="admin-login-form">
          <div class="form-group" style="text-align:left;"><label>Admin PIN</label><input type="password" id="admin-pin" placeholder="${t('admin_pin_ph')}" required></div>
          <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
            <button type="submit" class="btn btn-primary btn-full" style="background:#c62828;"><i class="fa-solid fa-key"></i> ${t('admin_open')}</button>
            <button type="button" id="instant-admin-btn" class="btn btn-secondary btn-full"><i class="fa-solid fa-bolt"></i> Demo Unlock (1234)</button>
          </div>
        </form>
      </div>
    </section>`;
  }
  return `
  <section class="admin-dashboard">
    <div class="admin-header">
      <div class="admin-header-title"><i class="fa-solid fa-landmark"></i><div><h2 style="margin:0;font-size:1.8rem;">${t('admin_panel_title')}</h2><p style="margin:0.25rem 0 0;opacity:0.8;font-size:0.9rem;">${t('admin_panel_sub')}</p></div></div>
      <button id="admin-logout-btn" class="btn btn-secondary" style="background:rgba(255,255,255,0.1);color:white;border-color:rgba(255,255,255,0.3);"><i class="fa-solid fa-right-from-bracket"></i> ${t('admin_logout')}</button>
    </div>
    <div class="admin-stats-grid">
      <div class="admin-stat-card"><div class="admin-stat-icon" style="background:#1a3a5c;"><i class="fa-solid fa-list-check"></i></div><div class="admin-stat-info"><h4>${schemesData.length}</h4><p>${t('admin_stat_schemes')}</p></div></div>
      <div class="admin-stat-card"><div class="admin-stat-icon" style="background:#138808;"><i class="fa-solid fa-users"></i></div><div class="admin-stat-info"><h4>5,420</h4><p>${t('admin_stat_users')}</p></div></div>
      <div class="admin-stat-card"><div class="admin-stat-icon" style="background:#FF8C00;"><i class="fa-solid fa-envelope-open-text"></i></div><div class="admin-stat-info"><h4>32</h4><p>${t('admin_stat_pending')}</p></div></div>
      <div class="admin-stat-card"><div class="admin-stat-icon" style="background:#7c3aed;"><i class="fa-solid fa-server"></i></div><div class="admin-stat-info"><h4>99.9%</h4><p>${t('admin_stat_server')}</p></div></div>
    </div>
    <div class="admin-tabs">
      <button class="admin-tab-btn active" data-tab="officers"><i class="fa-solid fa-user-tie"></i> ${t('admin_tab_officers')}</button>
      <button class="admin-tab-btn" data-tab="schemes-mgr"><i class="fa-solid fa-folder-open"></i> ${t('admin_tab_schemes')}</button>
      <button class="admin-tab-btn" data-tab="inquiries"><i class="fa-solid fa-comments"></i> ${t('admin_tab_inquiries')}</button>
      <button class="admin-tab-btn" data-tab="server-details"><i class="fa-solid fa-hard-drive"></i> ${t('admin_tab_server')}</button>
    </div>
    <div class="admin-tab-content" id="tab-officers">
      <h3 style="margin-bottom:1rem;color:var(--primary);">${t('admin_officers_title')}</h3>
      <table class="admin-table"><thead><tr><th>${t('admin_col_designation')}</th><th>${t('admin_col_name')}</th><th>${t('admin_col_dept')}</th><th>${t('admin_col_contact')}</th><th>${t('admin_col_status')}</th></tr></thead><tbody>
        <tr><td><strong>सरपंच</strong></td><td>श्री. रामेश्वर पाटील</td><td>पंचायत समिती</td><td>+91 98220 11223</td><td><span class="badge-status badge-online">कार्यावर</span></td></tr>
        <tr><td><strong>ग्रामसेवक</strong></td><td>सौ. सुनीता देशमुख</td><td>ग्राम विकास</td><td>+91 94231 44556</td><td><span class="badge-status badge-online">कार्यावर</span></td></tr>
        <tr><td><strong>गट विकास अधिकारी</strong></td><td>डॉ. विजय कुलकर्णी</td><td>जि.प. नागपूर</td><td>0712-2562680</td><td><span class="badge-status badge-active">उपलब्ध</span></td></tr>
        <tr><td><strong>कृषी विस्तार अधिकारी</strong></td><td>श्री. आनंद भोयर</td><td>कृषी विभाग</td><td>+91 98503 77889</td><td><span class="badge-status badge-online">कार्यावर</span></td></tr>
        <tr><td><strong>समाज कल्याण अधिकारी</strong></td><td>सौ. मीना राऊत</td><td>समाज कल्याण</td><td>+91 97655 33210</td><td><span class="badge-status badge-active">उपलब्ध</span></td></tr>
      </tbody></table>
    </div>
    <div class="admin-tab-content" id="tab-schemes-mgr" style="display:none;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;"><h3 style="margin:0;color:var(--primary);">सक्रिय योजना निर्देशिका</h3><button class="btn btn-primary" onclick="alert('नवीन योजना जोडण्याची सुविधा लवकरच!')"><i class="fa-solid fa-plus"></i> नवीन योजना जोडा</button></div>
      <table class="admin-table"><thead><tr><th>योजना नाव</th><th>श्रेणी</th><th>विभाग</th><th>प्रकार</th><th>स्थिती</th></tr></thead><tbody>
        ${schemesData.map(s => `<tr><td><strong>${s.title_mr || s.title_en}</strong></td><td><span class="badge-status badge-active">${s.category}</span></td><td>${s.department_mr || s.department_en}</td><td>${s.provider === 'central' ? 'केंद्र' : 'राज्य'}</td><td><span class="badge-status badge-online">प्रकाशित</span></td></tr>`).join('')}
      </tbody></table>
    </div>
    <div class="admin-tab-content" id="tab-inquiries" style="display:none;">
      <h3 style="margin-bottom:1rem;color:var(--primary);">अलीकडील नागरिक चौकशी</h3>
      <table class="admin-table"><thead><tr><th>नाव</th><th>मोबाईल</th><th>संदेश</th><th>तारीख</th><th>स्थिती</th></tr></thead><tbody>
        <tr><td><strong>विजय शिंदे</strong></td><td>9876543210</td><td>PM किसान 17वा हप्ता स्थिती...</td><td>आज, 14:20</td><td><span class="badge-status badge-pending">प्रलंबित</span></td></tr>
        <tr><td><strong>मीना राऊत</strong></td><td>9422113344</td><td>मातृ वंदना योजना कागदपत्रे...</td><td>काल</td><td><span class="badge-status badge-online">उत्तर दिले</span></td></tr>
        <tr><td><strong>रमेश पाटील</strong></td><td>9845678901</td><td>MGNREGA जॉब कार्ड नूतनीकरण...</td><td>26 Jul</td><td><span class="badge-status badge-online">उत्तर दिले</span></td></tr>
      </tbody></table>
    </div>
    <div class="admin-tab-content" id="tab-server-details" style="display:none;">
      <div style="background:#0f172a;color:#38bdf8;font-family:monospace;padding:2rem;border-radius:var(--radius-lg);border:1px solid #1e293b;">
        <div style="display:flex;justify-content:space-between;border-bottom:1px solid #1e293b;padding-bottom:1rem;margin-bottom:1.5rem;">
          <div><h3 style="color:white;margin:0;"><i class="fa-solid fa-server" style="color:#10b981;"></i> GP Nagpur Server Node #01</h3><p style="color:#94a3b8;margin:0.25rem 0 0;font-size:0.82rem;">gp-nagpur-node-01.maharashtra.gov.in</p></div>
          <span class="badge-status badge-online"><i class="fa-solid fa-circle" style="font-size:0.6rem;"></i> Active</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem;margin-bottom:1.5rem;">
          <div style="background:#1e293b;padding:1rem;border-radius:8px;"><p style="color:#94a3b8;font-size:0.8rem;margin-bottom:0.25rem;">Database</p><p style="color:white;font-weight:700;">MySQL 8.0.35 ✓</p></div>
          <div style="background:#1e293b;padding:1rem;border-radius:8px;"><p style="color:#94a3b8;font-size:0.8rem;margin-bottom:0.25rem;">Uptime</p><p style="color:#10b981;font-weight:700;">42d 14h 22m</p></div>
          <div style="background:#1e293b;padding:1rem;border-radius:8px;"><p style="color:#94a3b8;font-size:0.8rem;margin-bottom:0.25rem;">API Latency</p><p style="color:#38bdf8;font-weight:700;">14ms</p></div>
          <div style="background:#1e293b;padding:1rem;border-radius:8px;"><p style="color:#94a3b8;font-size:0.8rem;margin-bottom:0.25rem;">RAM</p><p style="color:white;font-weight:700;">1.4GB / 8GB</p></div>
        </div>
        <p style="color:white;font-weight:700;margin-bottom:0.5rem;">Live Events:</p>
        <div style="background:#020617;padding:1rem;border-radius:8px;height:140px;overflow-y:auto;font-size:0.82rem;color:#a7f3d0;line-height:1.7;">
          <div>[2026-08-08 17:30:01] INFO: Admin authenticated successfully.</div>
          <div>[2026-08-08 17:28:12] INFO: DB connection pool active (42/100).</div>
          <div>[2026-08-08 17:25:40] INFO: Schemes cache hit 100% (${schemesData.length} schemes).</div>
          <div>[2026-08-08 17:00:00] INFO: Daily backup created.</div>
          <div>[2026-08-08 16:15:22] INFO: SSL valid until 2026-12-31.</div>
        </div>
      </div>
    </div>
  </section>`;
}

function initAdmin() {
  document.getElementById('admin-login-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const pin = document.getElementById('admin-pin').value;
    if (pin === '1234' || pin === 'admin') { isAdminLoggedIn = true; sessionStorage.setItem('escheme_admin_auth','true'); handleRoute(); }
    else alert('चुकीचा PIN. Default PIN: 1234');
  });
  document.getElementById('instant-admin-btn')?.addEventListener('click', () => { isAdminLoggedIn = true; sessionStorage.setItem('escheme_admin_auth','true'); handleRoute(); });
  document.getElementById('admin-logout-btn')?.addEventListener('click', () => { isAdminLoggedIn = false; sessionStorage.setItem('escheme_admin_auth','false'); handleRoute(); });
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.tab;
      document.querySelectorAll('.admin-tab-content').forEach(c => { c.style.display = c.id === `tab-${target}` ? 'block' : 'none'; });
    });
  });
}

// ============================================================
//  HOME INIT — Carousel
// ============================================================
let carouselTimer = null;
function initHome() {
  initCarousel();
}
function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const prev = document.getElementById('carousel-prev');
  const next = document.getElementById('carousel-next');
  if (!slides.length) return;
  let idx = 0;

  function show(i) {
    if (i >= slides.length) i = 0;
    if (i < 0) i = slides.length - 1;
    idx = i;
    slides.forEach((s, j) => s.classList.toggle('active', j === idx));
    dots.forEach((d, j) => d.classList.toggle('active', j === idx));
  }
  function start() { stop(); carouselTimer = setInterval(() => show(idx + 1), 3000); }
  function stop() { if (carouselTimer) clearInterval(carouselTimer); }

  prev?.addEventListener('click', () => { show(idx - 1); start(); });
  next?.addEventListener('click', () => { show(idx + 1); start(); });
  dots.forEach(d => d.addEventListener('click', () => { show(parseInt(d.dataset.index)); start(); }));
  start();
}
