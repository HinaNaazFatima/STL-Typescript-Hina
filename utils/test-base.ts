const base = require('@playwright/test');

exports.customtest1 =base.test.extend(
    {
        testDataForOrder:
        {
            username : "hina.nazfatima@gmail.com",
            password : "@Aisha1983",
            item: "IPHONE 13 PRO"
        }

    }

)