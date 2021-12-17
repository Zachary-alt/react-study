import { call, put, takeEvery } from 'redux-saga/effects';

// 模拟登录接⼝
const UserService = {
    login(name) {
        return new Promise((resolve, reject) => {
            console.log("omg");
            setTimeout(() => {
                if (name === "⼩明") {
                    resolve({ name: "⼩明" });
                } else {
                    reject("⽤户名或密码错误");
                }
            }, 1000);
        });
    },
};

//worker saga
function* loginHandle(action){
    try {
        const res = yield call(UserService.login, action.name);
        yield put({ type: "loginSuccess", res });
    } catch (error) {
        yield put({ type: "loginFail", error });
    }
}

//watcher saga
function* mySaga() {
    yield takeEvery("login", loginHandle);
}

export default mySaga;