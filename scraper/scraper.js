/**
 * ***************************************************************************************
 * FINAL UNIFIED SCRAPER – AHANONLINE (NODE.JS VERSION)
 * ***************************************************************************************
 * تمامی نام‌ها طبق دستور با تکرار ۳ برابری حرف آخر (Triple Last Letter) تغییر یافته‌اند.
 * این نسخه برای اجرا روی سیستم لوکال و ذخیره در پوشه data تنظیم شده است.
 */

const fsss = require('fs');
const pathhh = require('path');
const axiosss = require('axios'); // جایگزین UrlFetchApp

// --- تنظیمات ذخیره‌سازی (LOCAL_CONFIGGG) ---
const LOCAL_CONFIGGG = {
  folderNameee: "data" // نام پوشه‌ای که فایل‌ها در آن ذخیره می‌شوند
};

// لیست کامل لینک‌های هدف (URLSSS)
const URLSSS = [
  "https://ahanonline.com/product-category/%D8%AA%DB%8C%D8%B1%D8%A2%D9%87%D9%86-%D9%88-%D9%87%D8%A7%D8%B4/%D8%AA%DB%8C%D8%B1%D8%A2%D9%87%D9%86/%D8%AA%DB%8C%D8%B1%D8%A2%D9%87%D9%86-%D9%84%D8%A7%D9%86%D9%87-%D8%B2%D9%86%D8%A8%D9%88%D8%B1%DB%8C/",
  "https://ahanonline.com/product-category/%D9%85%DB%8C%D9%84%DA%AF%D8%B1%D8%AF/%D9%82%DB%8C%D9%85%D8%AA-%D9%85%DB%8C%D9%84%DA%AF%D8%B1%D8%AF/%D9%85%DB%8C%D9%84%DA%AF%D8%B1%D8%AF-%D8%A8%D8%B3%D8%AA%D8%B1/",
  "https://ahanonline.com/product-category/%D9%85%DB%8C%D9%84%DA%AF%D8%B1%D8%AF/%D9%82%DB%8C%D9%85%D8%AA-%D9%85%DB%8C%D9%84%DA%AF%D8%B1%D8%AF/%D9%85%DB%8C%D9%84%DA%AF%D8%B1%D8%AF-%D8%B3%D8%A7%D8%AF%D9%87/%D9%85%DB%8C%D9%84%DA%AF%D8%B1%D8%AF-%D8%AD%D8%B1%D8%A7%D8%B1%D8%AA%DB%8C/",
  "https://ahanonline.com/product-category/%D9%85%DB%8C%D9%84%DA%AF%D8%B1%D8%AF/%D9%82%DB%8C%D9%85%D8%AA-%D9%85%DB%8C%D9%84%DA%AF%D8%B1%D8%AF/",
  "https://ahanonline.com/product-category/%D9%85%DB%8C%D9%84%DA%AF%D8%B1%D8%AF/%D9%85%DB%8C%D9%84%DA%AF%D8%B1%D8%AF-%D8%B3%D8%A7%D8%AF%D9%87/",
  "https://ahanonline.com/product-category/%D9%85%DB%8C%D9%84%DA%AF%D8%B1%D8%AF/%D9%82%DB%8C%D9%85%D8%AA-%D9%85%DB%8C%D9%84%DA%AF%D8%B1%D8%AF/%D9%85%DB%8C%D9%84%DA%AF%D8%B1%D8%AF-%DA%A9%D9%84%D8%A7%D9%81/",
  "https://ahanonline.com/product-category/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84/%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84z/",
  "https://ahanonline.com/product-category/%D8%A7%D8%B3%D8%AA%D9%86%D9%84%D8%B3-%D8%A7%D8%B3%D8%AA%DB%8C%D9%84/%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84-%D8%A7%D8%B3%D8%AA%DB%8C%D9%84/",
  "https://ahanonline.com/product-category/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84/%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84-%D8%A2%D9%84%D9%88%D9%85%DB%8C%D9%86%DB%8C%D9%88%D9%85/",
  "https://ahanonline.com/product-category/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84/%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84/",
  "https://ahanonline.com/product-category/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84/%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84-%D9%85%D8%A8%D9%84%DB%8C/",
  "https://ahanonline.com/product-category/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84/%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84-%D8%B5%D9%86%D8%B9%D8%AA%DB%8C/",
  "https://ahanonline.com/product-category/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84/%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84-%DA%A9%D9%86%DA%AF%D8%B1%D9%87/",
  "https://ahanonline.com/product-category/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84/%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84-%DA%AF%D8%A7%D9%84%D9%88%D8%A7%D9%86%DB%82%D9%87/",
  "https://ahanonline.com/product-category/%D9%86%D8%A8%D8%B4%DB%8C-%D9%88-%D9%86%D8%A7%D9%88%D8%AF%D8%A7%D9%86%DB%8C/%D9%86%D8%A7%D9%88%D8%AF%D8%A7%D9%86%DB%8C/",
  "https://ahanonline.com/product-category/%D9%86%D8%A8%D8%B4%DB%8C-%D9%88-%D9%86%D8%A7%D9%88%D8%AF%D8%A7%D9%86%DB%8C/%D8%B3%D9%BE%D8%B1%DB%8C/",
  "https://ahanonline.com/product-category/%D9%86%D8%A8%D8%B4%DB%8C-%D9%88-%D9%86%D8%A7%D9%88%D8%AF%D8%A7%D9%86%DB%8C/%D9%86%D8%A8%D8%B4%DB%8C/",
  "https://ahanonline.com/product-category/%D9%86%D8%A8%D8%B4%DB%8C-%D9%88-%D9%86%D8%A7%D9%88%D8%AF%D8%A7%D9%86%DB%8C/%D9%88%D8%A7%D9%84-%D9%BE%D8%B3%D8%AA/",
  "https://ahanonline.com/product-category/%D8%AA%DB%8C%D8%B1%D8%A2%D9%87%D9%86-%D9%88-%D9%87%D8%A7%D8%B4/%D8%B1%DB%8C%D9%84/",
  "https://ahanonline.com/product-category/%D8%AA%DB%8C%D8%B1%D8%A2%D9%87%D9%86-%D9%88-%D9%87%D8%A7%D8%B4/%D8%AA%DB%8C%D8%B1%D8%A2%D9%87%D9%86/",
  "https://ahanonline.com/product-category/%D8%AA%DB%8C%D8%B1%D8%A2%D9%87%D9%86-%D9%88-%D9%87%D8%A7%D8%B4/%D8%B1%DB%8C%D9%84/%D8%B1%DB%8C%D9%84-%D8%A2%D8%B3%D8%A7%D9%86%D8%B3%D9%88%D8%B1%DB%8C/",
  "https://ahanonline.com/product-category/%D8%AA%DB%8C%D8%B1%D8%A2%D9%87%D9%86-%D9%88-%D9%87%D8%A7%D8%B4/%D8%B1%DB%8C%D9%84/%D8%B1%DB%8C%D9%84-%D8%AC%D8%B1%D8%AB%D9%82%DB%8C%D9%84%DB%8C/",
  "https://ahanonline.com/product-category/%D8%AA%DB%8C%D8%B1%D8%A2%D9%87%D9%86-%D9%88-%D9%87%D8%A7%D8%B4/%D8%B1%DB%8C%D9%84/%D8%B1%DB%8C%D9%84-%D9%85%D8%B9%D8%AF%D9%86%DB%8C/",
  "https://ahanonline.com/product-category/%D8%AA%DB%8C%D8%B1%D8%A2%D9%87%D9%86-%D9%88-%D9%87%D8%A7%D8%B4/%D9%87%D8%A7%D8%B4/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-سیاه/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-سیاه/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-گالوانیزه/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-استیل/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-رنگی/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-آلومینیوم/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-روغنی/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-پانچ-سیاه/",
  "https://ahanonline.com/product-category/انواع-ورق/تسمه/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-مسی/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-st52/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-آجدار/",
  "https://ahanonline.com/product-category/انواع-ورق/چهارپهلو/",
  "https://ahanonline.com/product-category/انواع-ورق/گریتینگ/",
  "https://ahanonline.com/product-category/انواع-ورق/عرشه-فولادی-گالوانیزه/",
  "https://ahanonline.com/product-category/انواع-ورق/شمش-قلع-انواع-ورق/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-A516/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-سربی/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-آلومینیوم-آجدار/",
  "https://ahanonline.com/product-category/انواع-ورق/اسلب/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-a283/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-اسید-شوئی/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-ضد-سایش/",
  "https://ahanonline.com/product-category/انواع-ورق/تسمه-مسی/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-دریایی/",
  "https://ahanonline.com/product-category/انواع-ورق/چهارپهلو-آلیاژی/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-کرکره/",
  "https://ahanonline.com/product-category/انواع-ورق/قلع-اندود/",
  "https://ahanonline.com/product-category/انواع-ورق/17mn4-ورق/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-A131/",
  "https://ahanonline.com/product-category/انواع-ورق/آلوزینک/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-پانچ-آلیاژی/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-آلیاژی-برشی-ابعاد-سفارشی/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-پلی-کربنات/",
  "https://ahanonline.com/product-category/انواع-ورق/Ck45/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-فایبر-گلاس/",
  "https://ahanonline.com/product-category/انواع-ورق/ساندویچ-پانل/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق_برشی_ساختمانی_و_صنعتی/",
  "https://ahanonline.com/product-category/انواع-ورق/ورق-شیروانی/"
];

/**
 * تابع اصلی اجرا کننده اسکریپت (RUN_AHANONLINE_SCRAPERRR)
 * در نود جی‌اس به صورت Async تعریف می‌شود تا بتواند منتظر درخواست‌ها بماند
 */
async function RUN_AHANONLINE_SCRAPERRR() {
  
  // اطمینان از وجود پوشه data
  const dataPathhh = pathhh.join(__dirname, LOCAL_CONFIGGG.folderNameee);
  if (!fsss.existsSync(dataPathhh)) {
    fsss.mkdirSync(dataPathhh);
    console.log(`📁 پوشه ${LOCAL_CONFIGGG.folderNameee} ایجاد شد.`);
  }

  for (let indexxx = 0; indexxx < URLSSS.length; indexxx++) {
    const urlll = URLSSS[indexxx];
    const startTimeee = new Date();
    try {
      console.log(`▶ شروع پردازش [${indexxx + 1} از ${URLSSS.length}]: ${decodeURIComponent(urlll)}`);

      let finalRawDataaa;
      
      // تلاش برای دریافت از HTML با متد جدید (Section Based)
      try {
        finalRawDataaa = await runWithTimeouttt(
          (isTimeouttt) => fetchFromHTML_BY_SECTIONSSS(urlll, isTimeouttt),
          5000, 
          "HTML_STEP_BY_SECTION"
        );
      } catch (eee) {
        console.warn(`⚠️ خطا در استخراج از سکشن‌ها: ${eee.message}. تلاش با API...`);
        finalRawDataaa = await runWithTimeouttt(
          (isTimeouttt) => fetchDirectAPI_INTERNALLLLL(urlll, isTimeouttt),
          15000, 
          "API_STEP"
        );
      }
      
      // نرمال‌سازی و استخراج فیلدها
      const processedResulttt = parsePriceDataaa(finalRawDataaa, urlll);

      // ذخیره‌سازی در فایل لوکال (جایگزین گیت‌هاب و شیت)
      saveToLocalDataFileee(processedResulttt, indexxx);

      const durationnn = new Date() - startTimeee;
      console.log(`✔ پردازش لینک [${indexxx + 1}] در ${Math.round(durationnn/1000)} ثانیه به پایان رسید.`);
    } catch (eee) {
      console.error(`✖ خطا در پردازش لینک [${indexxx + 1}]: ${eee.message}`);
    }
  }
}

/**
 * استخراج بر اساس ساختار سکشن‌های مشخص شده (fetchFromHTML_BY_SECTIONSSS)
 * هدف: استخراج نام گروه از div بالای جدول
 */
async function fetchFromHTML_BY_SECTIONSSS(urlll, isTimeouttt) {
  // استفاده از axios به جای UrlFetchApp
  const responseee = await axiosss.get(urlll, { 
    headers: { 
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' 
    },
    timeout: 10000 // 10 ثانیه تایم اوت شبکه
  });
  
  const htmlll = responseee.data;
  const resultDataRowsss = [];
  
  // ۱. پیدا کردن محفظه اصلی تمام لیست‌ها (div[1]/div[4])
  // با ردیابی تگ سکشن‌ها عمل می‌کنیم
  const sectionRegexxx = /<section[^>]*>([\s\S]*?)<\/section>/gi;
  let sectionMatchhh;

  while ((sectionMatchhh = sectionRegexxx.exec(htmlll)) !== null) {
    if (isTimeouttt()) break;

    const sectionContenttt = sectionMatchhh[0];

    // ۲. استخراج نام گروه (Group Title)
    // ساختار: <div class="..."><div>نام جدول</div><span>تاریخ</span></div>
    // طبق آدرس شما: /div/div[1]
    let groupTitleee = "";
    let updateDateee = "امروز";

    const headerDivMatchhh = sectionContenttt.match(/<div[^>]*class="[^"]*header[^"]*"[^>]*>([\s\S]*?)<\/div>/i) || 
                             sectionContenttt.match(/<div[^>]*>([\s\S]*?)<table/i);

    if (headerDivMatchhh) {
      const headerContenttt = headerDivMatchhh[1];
      // پیدا کردن اولین div داخلی برای نام
      const titleMatchhh = headerContenttt.match(/<div[^>]*>([\s\S]*?)<\/div>/i);
      groupTitleee = titleMatchhh ? cleanTexttt(titleMatchhh[1]) : "";
      
      // پیدا کردن span برای تاریخ
      const dateSpanMatchhh = headerContenttt.match(/<span[^>]*>([\s\S]*?)<\/span>/i);
      updateDateee = dateSpanMatchhh ? cleanTexttt(dateSpanMatchhh[1]) : "امروز";
    }

    // اگر نام گروه در دیو پیدا نشد، از ویژگی دیتا-ولی جدول استفاده کن (به عنوان بک‌آپ)
    if (!groupTitleee) {
      const tableAttrMatchhh = sectionContenttt.match(/<table[^>]*data-value=["']([^"']+)["']/i);
      groupTitleee = tableAttrMatchhh ? tableAttrMatchhh[1] : "نامشخص";
    }

    // ۳. پردازش جدول داخل این سکشن
    const tableMatchhh = sectionContenttt.match(/<table[^>]*>([\s\S]*?)<\/table>/i);
    if (!tableMatchhh) continue;

    const tableHtmlll = tableMatchhh[1];
    
    // استخراج هدرهای داینامیک برای هر جدول به صورت جداگانه
    const currentHeadersss = [];
    const theadMatchhh = tableHtmlll.match(/<thead[^>]*>([\s\S]*?)<\/thead>/i);
    if (theadMatchhh) {
      const thsss = theadMatchhh[1].match(/<th[^>]*>([\s\S]*?)<\/th>/gi);
      if (thsss) {
        thsss.forEach(th => currentHeadersss.push(cleanTexttt(th)));
      }
    }

    // ۴. استخراج ردیف‌های بدنه جدول (tbody)
    const tbodyMatchhh = tableHtmlll.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/i);
    if (tbodyMatchhh) {
      const rowRegexxx = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
      let rowMatchhh;
      
      while ((rowMatchhh = rowRegexxx.exec(tbodyMatchhh[1])) !== null) {
        const tdRegexxx = /<td[^>]*>([\s\S]*?)<\/td>/g;
        let tdMatchhh;
        const cellsss = [];
        
        while ((tdMatchhh = tdRegexxx.exec(rowMatchhh[1])) !== null) {
          cellsss.push(cleanTexttt(tdMatchhh[1]));
        }

        if (cellsss.length > 0) {
          resultDataRowsss.push({ 
            values: cellsss, 
            group: groupTitleee, 
            date: updateDateee,
            headers: currentHeadersss
          });
        }
      }
    }
  }
  
  if (resultDataRowsss.length === 0) {
    throw new Error("داده‌ای در سکشن‌ها یافت نشد.");
  }

  return { 
    rows: resultDataRowsss, 
    updated_attt: new Date().toISOString() 
  };
}

/**
 * دریافت دیتا از API (fetchDirectAPI_INTERNALLLLL)
 */
async function fetchDirectAPI_INTERNALLLLL(urlll, isTimeouttt) {
  const slugggg = urlll.split('/').filter(Boolean).pop();
  const apiUrlll = `https://ahanonline.com/api/prices?category=${encodeURIComponent(decodeURIComponent(slugggg))}`;
  
  try {
    const resss = await axiosss.get(apiUrlll, { 
      headers: { 'Accept': 'application/json' }
    });

    if (resss.status === 200) {
      const jsonnn = resss.data;
      if (jsonnn.rows && jsonnn.rows.length > 0) {
        const mappedRowsss = jsonnn.rows.map(row => ({
          values: row,
          group: decodeURIComponent(slugggg),
          date: "آپدیت API",
          headers: jsonnn.headers
        }));
        return { rows: mappedRowsss, updated_attt: new Date().toISOString() };
      }
    }
  } catch (err) {
    // خطا به بلوک بالا پرتاب می‌شود
  }
  
  throw new Error("API Failure");
}

/**
 * پارس کردن داده‌ها (parsePriceDataaa)
 */
function parsePriceDataaa(rawInputtt, urlll) {
  const rawRowsss = rawInputtt.rows;
  const semanticObjectsss = [];

  rawRowsss.forEach(itemmm => {
    semanticObjectsss.push(mapToSemanticcc(itemmm.headers, itemmm.values, itemmm.group, itemmm.date));
  });

  // پیدا کردن طولانی‌ترین هدر
  const mainHeadersss = rawRowsss.length > 0 ? rawRowsss[0].headers : ["محصول", "قیمت", "تاریخ"];

  return {
    source: 'ahanonline.com',
    urlll: urlll,
    scraped_attt: new Date().toISOString(),
    headersss: mainHeadersss,
    dataaa: semanticObjectsss
  };
}

/**
 * نگاشت ستون‌ها (mapToSemanticcc)
 */
function mapToSemanticcc(headersss, rowww, groupNameee, updateDateee) {
  const objjj = { 
    group_infooo: { 
      category_nameee: groupNameee || "نامشخص", 
      update_labelll: updateDateee || "" 
    } 
  };

  headersss.forEach((hhh, iii) => {
    const valll = rowww[iii] || "";
    if (/سایز|ابعاد/i.test(hhh)) objjj.sizeee = valll;
    else if (/قیمت/i.test(hhh)) { 
      objjj.price_strrr = valll; 
      objjj.price_nummm = parseNumericcc(valll); 
    }
    else if (/واحد/i.test(hhh)) objjj.unittt = valll;
    else if (/محصول|نام|کالا/i.test(hhh)) objjj.titleee = valll;
    else {
      const keyyy = `col_${iii}`;
      objjj[keyyy] = valll;
    }
  });
  return objjj;
}

/**
 * توابع کمکی (Utility Functionsss)
 */
function cleanTexttt(txttt) {
  if (!txttt) return "";
  return txttt.replace(/<[^>]*>/g, ' ')
             .replace(/&nbsp;/g, ' ')
             .replace(/&zwnj;/g, '')
             .replace(/\s+/g, ' ')
             .trim();
}

function parseNumericcc(strrr) {
  if (!strrr) return null;
  const nummm = strrr.replace(/[^0-9]/g, '');
  return nummm ? parseInt(nummm, 10) : null;
}

// تغییر در ساختار Timeout برای سازگاری با Async/Await
async function runWithTimeouttt(fnnn, timeoutMsss, labelll) {
  const starttt = Date.now();
  // ارسال تابع بررسی زمان به تابع اصلی
  const resss = await fnnn(() => (Date.now() - starttt) > timeoutMsss);
  return resss;
}

/**
 * ذخیره در فایل لوکال (saveToLocalDataFileee)
 * این تابع جایگزین uploadToGitHubbb و writeToSheetSafeee شده است
 */
function saveToLocalDataFileee(dataObjecttt, idxxx) {
  try {
    // ساخت نام فایل از روی URL
    const pathPartsss = dataObjecttt.urlll.split('/').filter(Boolean);
    let fileNameee = decodeURIComponent(pathPartsss[pathPartsss.length - 1]);
    
    // اگر نام فایل خالی بود یا نامعتبر، یک نام پیش‌فرض بگذار
    if (!fileNameee || fileNameee.length < 2) {
      fileNameee = `data_output_${idxxx}`;
    }

    // اضافه کردن پسوند json
    fileNameee += '.json';

    // مسیر کامل ذخیره‌سازی: پوشه فعلی + data + نام فایل
    const fullPathhh = pathhh.join(__dirname, LOCAL_CONFIGGG.folderNameee, fileNameee);

    // تبدیل آبجکت به رشته جیسون
    const jsonContenttt = JSON.stringify(dataObjecttt, null, 2);

    // نوشتن فایل
    fsss.writeFileSync(fullPathhh, jsonContenttt, 'utf8');
    
    console.log(`💾 فایل ذخیره شد: ${fileNameee}`);
  } catch (errrr) {
    console.error(`✖ خطا در ذخیره فایل لوکال: ${errrr.message}`);
  }
}

// اجرای برنامه
RUN_AHANONLINE_SCRAPERRR();