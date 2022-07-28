const {expressjwt} = require('express-jwt');
const util = require('util');
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export { jwtMiddleware };

function jwtMiddleware(req, res) {
    const middleware = expressjwt({ secret: serverRuntimeConfig.secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/api/users/register',
            '/api/users/authenticate'
        ]
    });
    // middleware là 1 funtion nhận vào 3 param.
    // param 1 vá 2 là request và response
    // param thứ 3 là 1 function nhận vào 1 tham số error. Khi thực hiện xong việc check jwt token thì hàm số này sẽ được gọi lại
    // Nếu có lỗi thì error sẽ có giá trị

    const middleware1 = (...prams) => {
        console.log('prams.length');
        middleware(...prams);
    }
    const test = (a, b, c, d, e, fn) => {
        a > 0 ? fn(null, 'giá trị là: ' + (a + b + c + d + e)) :n({
            error: 'a not > 0'
        })
    }
    // return util.promisify(middleware1)(req, res);
    // Cách util.promisify hoạt động (thay thế cho các môi trường ko có promise, ví dụ nodeJS < 8.0)
    // Thực hiện 1 funtion nhưng bổ sung thêm 1 param mới để xác định công việc có thành công hay ko ?
    // util.promisify(test)(0,2,3,4,5)
    //   .then((a) => {
    //       console.log('then: ' + a);
    //   })
    //   .catch((e) => {
    //       console.log('catch: ' + JSON.stringify(e));
    //   });

    // const middleware2 = (req, res, fn) => {
    //     const overrideFn = (a, b) => {
    //         console.log(a)
    //         console.log(b);
    //         fn(a, b);
    //     }
    //     middleware(req, res, overrideFn);
    // }
    // return util.promisify(middleware2)(req, res);

    // return util.promisify(middleware)(req, res);
    // Dùng promise để thay thế cho util.promisify
    return new Promise((resolve, reject) => {
        return middleware(req, res, (error, value) => {
            error ? reject(error) : resolve();
        });
    });
}
