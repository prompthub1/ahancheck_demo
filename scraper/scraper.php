<?php
/**
 * ***************************************************************************************
 * FINAL UNIFIED SCRAPER – AHANONLINE (PHP VERSION)
 * ***************************************************************************************
 * تمامی نام‌ها طبق دستور با تکرار ۳ برابری حرف آخر (Triple Last Letter) تغییر یافته‌اند.
 * این نسخه برای اجرا در محیط PHP و ذخیره در پوشه data تنظیم شده است.
 */

// تنظیمات اولیه
set_time_limit(0); // جلوگیری از قطع شدن اسکریپت در زمان طولانی
date_default_timezone_set('Asia/Tehran');

const LOCAL_CONFIGGG = [
    "folderNameee" => "data"
];

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
    "https://ahanonline.com/product-category/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84/%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84-%D9%5B%D8%A8%D9%84%DB%8C/",
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
 * تابع اصلی برای اجرای اسکرپر (RUN_AHANONLINE_SCRAPERRR)
 */
function RUN_AHANONLINE_SCRAPERRR() {
    $dataPathhh = __DIR__ . DIRECTORY_SEPARATOR . LOCAL_CONFIGGG['folderNameee'];
    
    // ایجاد پوشه دیتا در صورت عدم وجود
    if (!file_exists($dataPathhh)) {
        mkdir($dataPathhh, 0777, true);
        echo "📁 پوشه " . LOCAL_CONFIGGG['folderNameee'] . " ایجاد شد.\n";
    }

    foreach (URLSSS as $indexxx => $urlll) {
        $startTimeee = microtime(true);
        echo "▶ شروع پردازش [" . ($indexxx + 1) . " از " . count(URLSSS) . "]: " . urldecode($urlll) . "\n";

        try {
            $finalRawDataaa = null;

            // مرحله اول: استخراج از HTML سکشن‌ها
            try {
                $finalRawDataaa = fetchFromHTML_BY_SECTIONSSS($urlll);
            } catch (Exception $eee) {
                echo "⚠️ خطا در HTML: " . $eee->getMessage() . ". تلاش با API...\n";
                // مرحله دوم: تلاش با API داخلی
                $finalRawDataaa = fetchDirectAPI_INTERNALLLLL($urlll);
            }

            if ($finalRawDataaa) {
                // پردازش و نرمال‌سازی داده‌ها
                $processedResulttt = parsePriceDataaa($finalRawDataaa, $urlll);

                // ذخیره در فایل محلی
                saveToLocalDataFileee($processedResulttt, $indexxx);
            }

            $durationnn = microtime(true) - $startTimeee;
            echo "✔ پایان پردازش لینک [" . ($indexxx + 1) . "] در " . round($durationnn) . " ثانیه.\n";
        } catch (Exception $eee) {
            echo "✖ خطا در پردازش لینک [" . ($indexxx + 1) . "]: " . $eee->getMessage() . "\n";
        }
    }
}

/**
 * استخراج داده از HTML با استفاده از Regex (مشابه نسخه JS)
 */
function fetchFromHTML_BY_SECTIONSSS($urlll) {
    $contexttt = stream_context_create([
        "http" => [
            "header" => "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36\r\n",
            "timeout" => 15
        ]
    ]);

    $htmlll = @file_get_contents($urlll, false, $contexttt);
    if (!$htmlll) throw new Exception("عدم دسترسی به صفحه وب");

    $resultDataRowsss = [];

    // استخراج سکشن‌ها
    preg_match_all('/<section[^>]*>(.*?)<\/section>/is', $htmlll, $sectionsMatches);
    
    foreach ($sectionsMatches[1] as $sectionContenttt) {
        $groupTitleee = "";
        $updateDateee = "امروز";

        // استخراج هدر و عنوان گروه
        if (preg_match('/<div[^>]*class="[^"]*header[^"]*"[^>]*>(.*?)<\/div>/is', $sectionContenttt, $headerMatchhh)) {
            $headerContenttt = $headerMatchhh[1];
            if (preg_match('/<div[^>]*>(.*?)<\/div>/is', $headerContenttt, $titleMatchhh)) {
                $groupTitleee = cleanTexttt($titleMatchhh[1]);
            }
            if (preg_match('/<span[^>]*>(.*?)<\/span>/is', $headerContenttt, $dateSpanMatchhh)) {
                $updateDateee = cleanTexttt($dateSpanMatchhh[1]);
            }
        }

        if (empty($groupTitleee)) {
            if (preg_match('/<table[^>]*data-value=["\']([^"\']+)["\']/is', $sectionContenttt, $tableAttrMatchhh)) {
                $groupTitleee = $tableAttrMatchhh[1];
            }
        }

        // پردازش جدول
        if (preg_match('/<table[^>]*>(.*?)<\/table>/is', $sectionContenttt, $tableMatchhh)) {
            $tableHtmlll = $tableMatchhh[1];
            
            // هدرهای جدول
            $currentHeadersss = [];
            if (preg_match('/<thead[^>]*>(.*?)<\/thead>/is', $tableHtmlll, $theadMatchhh)) {
                preg_match_all('/<th[^>]*>(.*?)<\/th>/is', $theadMatchhh[1], $thMatches);
                foreach ($thMatches[1] as $th) {
                    $currentHeadersss[] = cleanTexttt($th);
                }
            }

            // بدنه جدول
            if (preg_match('/<tbody[^>]*>(.*?)<\/tbody>/is', $tableHtmlll, $tbodyMatchhh)) {
                preg_match_all('/<tr[^>]*>(.*?)<\/tr>/is', $tbodyMatchhh[1], $rowMatches);
                foreach ($rowMatches[1] as $rowContenttt) {
                    preg_match_all('/<td[^>]*>(.*?)<\/td>/is', $rowContenttt, $tdMatches);
                    $cellsss = array_map('cleanTexttt', $tdMatches[1]);
                    
                    if (!empty($cellsss)) {
                        $resultDataRowsss[] = [
                            "values" => $cellsss,
                            "group" => $groupTitleee,
                            "date" => $updateDateee,
                            "headers" => $currentHeadersss
                        ];
                    }
                }
            }
        }
    }

    if (empty($resultDataRowsss)) throw new Exception("داده‌ای یافت نشد");

    return [
        "rows" => $resultDataRowsss,
        "updated_attt" => date('c')
    ];
}

/**
 * دریافت مستقیم از API داخلی
 */
function fetchDirectAPI_INTERNALLLLL($urlll) {
    $slugggg = basename(rtrim($urlll, '/'));
    $apiUrlll = "https://ahanonline.com/api/prices?category=" . urlencode(urldecode($slugggg));

    $contexttt = stream_context_create([
        "http" => ["header" => "Accept: application/json\r\n", "timeout" => 15]
    ]);

    $jsonStrrr = @file_get_contents($apiUrlll, false, $contexttt);
    if (!$jsonStrrr) throw new Exception("API Failure");

    $jsonnn = json_decode($jsonStrrr, true);
    if (isset($jsonnn['rows']) && count($jsonnn['rows']) > 0) {
        $mappedRowsss = [];
        foreach ($jsonnn['rows'] as $row) {
            $mappedRowsss[] = [
                "values" => $row,
                "group" => urldecode($slugggg),
                "date" => "آپدیت API",
                "headers" => $jsonnn['headers'] ?? []
            ];
        }
        return ["rows" => $mappedRowsss, "updated_attt" => date('c')];
    }
    throw new Exception("API Empty Data");
}

/**
 * تبدیل داده‌های خام به فرمت استاندارد (parsePriceDataaa)
 */
function parsePriceDataaa($rawInputtt, $urlll) {
    $rawRowsss = $rawInputtt['rows'];
    $semanticObjectsss = [];

    foreach ($rawRowsss as $itemmm) {
        $semanticObjectsss[] = mapToSemanticcc($itemmm['headers'], $itemmm['values'], $itemmm['group'], $itemmm['date']);
    }

    $mainHeadersss = count($rawRowsss) > 0 ? $rawRowsss[0]['headers'] : ["محصول", "قیمت", "تاریخ"];

    return [
        "source" => 'ahanonline.com',
        "urlll" => $urlll,
        "scraped_attt" => date('c'),
        "headersss" => $mainHeadersss,
        "dataaa" => $semanticObjectsss
    ];
}

/**
 * نگاشت ستون‌ها (mapToSemanticcc)
 */
function mapToSemanticcc($headersss, $rowww, $groupNameee, $updateDateee) {
    $objjj = [
        "group_infooo" => [
            "category_nameee" => $groupNameee ?: "نامشخص",
            "update_labelll" => $updateDateee ?: ""
        ]
    ];

    foreach ($headersss as $iii => $hhh) {
        $valll = $rowww[$iii] ?? "";
        if (preg_match('/سایز|ابعاد/iu', $hhh)) $objjj['sizeee'] = $valll;
        elseif (preg_match('/قیمت/iu', $hhh)) {
            $objjj['price_strrr'] = $valll;
            $objjj['price_nummm'] = parseNumericcc($valll);
        }
        elseif (preg_match('/واحد/iu', $hhh)) $objjj['unittt'] = $valll;
        elseif (preg_match('/محصول|نام|کالا/iu', $hhh)) $objjj['titleee'] = $valll;
        else {
            $objjj["col_$iii"] = $valll;
        }
    }
    return $objjj;
}

/**
 * پاکسازی متن (cleanTexttt)
 */
function cleanTexttt($txttt) {
    if (!$txttt) return "";
    $txttt = preg_replace('/<[^>]*>/', ' ', $txttt);
    $txttt = str_replace(['&nbsp;', '&zwnj;'], [' ', ''], $txttt);
    return trim(preg_replace('/\s+/', ' ', $txttt));
}

/**
 * استخراج عدد از رشته (parseNumericcc)
 */
function parseNumericcc($strrr) {
    if (!$strrr) return null;
    $nummm = preg_replace('/[^0-9]/', '', $strrr);
    return $nummm ? (int)$nummm : null;
}

/**
 * ذخیره در پوشه محلی (saveToLocalDataFileee)
 */
function saveToLocalDataFileee($dataObjecttt, $idxxx) {
    try {
        $urlll = $dataObjecttt['urlll'];
        $pathPartsss = array_filter(explode('/', $urlll));
        $fileNameee = urldecode(end($pathPartsss));

        if (strlen($fileNameee) < 2) $fileNameee = "data_output_$idxxx";
        $fileNameee .= ".json";

        $fullPathhh = __DIR__ . DIRECTORY_SEPARATOR . LOCAL_CONFIGGG['folderNameee'] . DIRECTORY_SEPARATOR . $fileNameee;

        file_put_contents($fullPathhh, json_encode($dataObjecttt, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
        echo "💾 فایل ذخیره شد: $fileNameee\n";
    } catch (Exception $errrr) {
        echo "✖ خطا در ذخیره فایل: " . $errrr->getMessage() . "\n";
    }
}

// شروع اجرا
RUN_AHANONLINE_SCRAPERRR();