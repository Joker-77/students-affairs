import signature from '../assets/img/signature.png';

export const getObservationAssignments = (data, st, en, current) => {
  let elems = data.map((obs) => {
    const nickname = obs.employee_nickname === obs.employee_name ?
                      "السيد/السيدة"
                    : obs.employee_nickname;
    const role = obs.is_master ? "برئاسة" : "بالمراقبة في";
    const ConvertToArabicNumbers = (num) => {
      const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
      return new String(num).replace(/[0123456789]/g, (d)=>{return arabicNumbers[d]});
    }
    const formatDate = (date) => {
      let fullDay = date.split('-')[0];
      let dayName = fullDay.split(' ')[0];
      let day = fullDay.split(' ')[1];
      let month = date.split('-')[1];
      let year = date.split('-')[2];
      return dayName + ' ' + ConvertToArabicNumbers(year) + '/' + ConvertToArabicNumbers(month) + '/' + ConvertToArabicNumbers(day);
    }
    const hall = ConvertToArabicNumbers(obs.hall);
    const examDate = formatDate(obs.date);
    const from = ConvertToArabicNumbers(obs.from);
    const to = ConvertToArabicNumbers(obs.to);
    
    return `
      <div class="text-center">
      <div class="row">
        <div class="col-xs-5" style="text-align: right;">
            <h4>الجمهورية العربية السورية</h4>
            <h4>المعهد العالي للعلوم التطبيقية والتكنولوجيا</h4>
        </div>
        <div class="col-xs-2">
            
        </div>
      </div>
    </div>
    <div class="text-center" style="margin-right: 40px; margin-top: 20px">
      <div style="display: flex; flex-direction: row; justify-content: center; gap: 20px;">
        <h4> <b>${nickname}</b> ${obs.employee_name}</h4>
        <h4> <b>${obs.bulding}</b></h4>
      </div>
    </div>
    <p style="text-align: right; margin-right: 40px; margin-top: 20px; width: 100%;"> 
         نظراً لتكليفكم ${role} ${hall} خلال إجراء الامتحان المقرر يوم ${examDate}
    </p>
    <p style="text-align: right;">
      من الساعة ${from} إلى الساعة ${to} يرجى حضوركم إلى دائرة التسجيل والامتحانات قبل بدء الامتحان
    </p>
    <p style="text-align: right;">
      بربع ساعة لاستلام الأسئلة وأوراق الإجابة. علماً أن تغيبكم أو تأخركم عن الحضور يعرضكم للمسؤولية أمام إدارة المعهد
    </p>
    <p style="text-align: right;">
      <span><b>ملاحظة</b></span> سيتم منح يوم إجازة بدل مراقبة للمكلفين بالمراقبة يوم السبت إضافة للتعويض المادي المعتمد أصولاً للمراقبة
    </p>
    <p style="text-align: right; margin-right: 40px; margin-top: 20px;"> 
      شاكرين تعاونكم
    </p>
    <p style="text-align: left; margin-left: 60px; margin-top: 50px;"> 
      <b>مدير المعهد العالي</b>
    </p>
    <p style="text-align: left; margin-left: 60px;"> 
      الدكتور ماهر سليمان
    </p>
    <div style="display: flex; justify-content: flex-end; margin-left: 30px;">
      <img src="${signature}" style="width: 150px; height: 50px;" />
    </div>
  `;
  });

    return `
    <html lang="ar" dir="rtl">
        <head>
          <title>طباعة تكاليف المراقبين من ${st} إلى ${en}</title>
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
          p {
            font-size: 16px;
          }
          </style>
        </head>
        <body>
        ${elems.join('<hr />')}
        </body>
        </html>

    `;
}