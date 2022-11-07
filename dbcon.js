const Pool = require('pg').Pool

const pool = new Pool({
    user: "qnityejbehoran",
    host: "ec2-44-205-177-160.compute-1.amazonaws.com",
    database: "d2meq4ce8fu4ui",
    password: "b8f3b3b60d9da3e842fba4eaa04988e37ebd009b20ea68455ed64c7ff33bfbf6",
    port: 5432,
    ssl:{

        rejectUnauthorized: false
    }
  });

  module.exports= pool;