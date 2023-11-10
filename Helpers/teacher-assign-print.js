export const getTeacherAssign = (data) => {
  return `
    <html lang="ar" dir="rtl">
        <head>
          <title></title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
          <style>
          * {
            direction: rtl;
          }
          .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
            float: right;
          }
          </style>
        </head>
        <body>
        ${data.map((item) => {
          return ` 
        <div style="height: 50%">
            <div class="text-center">
              <div class="row">
                  <div class="col-xs-5" style="text-align: right;">
                      <h4>الجمهورية العربية السورية</h4>
                      <h4>المعهد العالي للعلوم التطبيقية والتكنولوجيا</h4>
                      <h4>===============================================</h4>
                  </div>
              </div>
            </div>
            <div class="text-center">
                <div class="row"> 
                    <div class="col-xs-7" style="text-align: right;">التاريخ /  /</div>
                    <div class="col-xs-4">${item.years}: ${item.specs}</div>
                </div>
                <div class="row"> 
                    <div class="col-xs-2" style="text-align: right;">السيد / الآنسة:</div>
                    <div class="col-xs-2" style="text-align: right;"><span style="font-weight: bold;">${item.teacher_name}</span></div>
                    <div class="col-xs-5" style="text-align: right;"> ${item.department}</div>
                </div>
                <div class="row mt-2"> 
                    <div class="col-xs-9 my-1" style="text-align: right;">
                    يرجى أخذ العلم أن موعد <span style="font-weight: bold">مذاكرة/امتحان مادة: ${item.course_code} ${item.course_name}</span> 
                    </div>
                    <div class="col-xs-9" style="text-align: right;">
                      هو يوم ${item.date} من الساعة ${item.from} إلى الساعة ${item.to}
                    </div>
                    <div class="col-xs-12" style="text-align: right;">
                      يرجى تسليم دائرة التسجيل والامتحانات أوراق أسئلة المذاكرة / الامتحان مصورة قبل الموعد المحدد إعلاه بيومين
                      على الأقل، آملين منكم التقيّد بالموعد المحدّد أعلاه، علماً بأن أي تعديل على مواعيد المذاكرة/الامتحان مشروط بموافقة الوكيل التعليمي 
                      على كتاب موجه من قبل مدرّس المادة أصولاً.
                    </div>
                </div>
                <div class="row" style="margin-top: 3em"> 
                  <div class="col-xs-1"></div>
                  <div class="col-xs-3 mt-5" style="text-align: right;">شاكرين حسن تعاونكم</div>
                </div>
                <div class="row mt-5" style="margin-top: 5em"> 
                  <div class="col-xs-9"></div>
                  <div class="col-xs-3 mt-3">
                    <span style="font-weight: bold">مدير شؤون الطلاب</span>
                  </div>
                </div>
            </div>
        </div>`;
        })}
        <script> 
              $(document).ready(function() {
                  window.print();
              })
        </script>
        </body>
        </html>

    `;
};
