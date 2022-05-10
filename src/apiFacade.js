// const URL = "http://localhost:8080/flagfinals_war_exploded";
const URL = "http://localhost:8080/FlagFinalsBackend_war_exploded";


function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function apiFacade() {
    /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/

    const login = (user, password) => {
        const options = makeOptions("POST", true, { username: user, password: password });
        return fetch(URL + "/api/login", options)
            .then(handleHttpErrors)
            .then(res => { setToken(res.token) })
    }

    const signup = (user, password, setResponseText) => {
        const options = makeOptions("POST", false, { username: user, password: password });
        return fetch(URL + "/api/signup", options)
            .then(handleHttpErrors)
            .then(res => {
                setResponseText(res.msg);
            }
            )
    }

    const fetchUserData = (role) => {
        const options = makeOptions("GET", true); //True add's the token
        return fetch(URL + `/api/info/${role}`, options).then(handleHttpErrors);
    }

    const getQuiz = (setQuiz, continent, username) => {
        const options = makeOptions("GET", true);
        return fetch(URL + `/api/quiz/generate/${continent}/${username}`, options)
            .then(handleHttpErrors)
            .then(res => {
                setQuiz(res)
            })
    }

    const getResult = (setPoints, totalPoints, setTotalPoints, correctId, answer, time, setShowResult, setAnswerCorrect, updateQuestion) => {
        const options = makeOptions("GET", true);
        return fetch(URL + `/api/quiz/result/${correctId}/${answer}/${time}`, options)
            .then(handleHttpErrors)
            .then(res => {
                setPoints(res)
                setTotalPoints(totalPoints + res)
                setShowResult(true)
                if (res === 0) {
                    setAnswerCorrect(false)
                } else {
                    setAnswerCorrect(true)
                    updateQuestion(res)
                }
            })
    }

    const endQuiz = (quiz, setQuiz) => {
        const options = makeOptions("POST", true, {
            totalPoints: quiz.totalPoints,
            totalCorrect: quiz.totalCorrect,
            totalIncorrect: quiz.totalIncorrect,
            questions: quiz.questions,
            continentName: quiz.continentName,
            username: quiz.username
        });
        return fetch(URL + `/api/quiz/create`, options)
            .then(handleHttpErrors)
            .then(res => {
                setQuiz(res)
            })
    }

    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }

    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }

    const loggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
    }

    const logout = () => {
        localStorage.removeItem("jwtToken");
    }

    const makeOptions = (method, addToken, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }
    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        signup,
        logout,
        fetchUserData,
        getQuiz,
        getResult,
        endQuiz
    }
}

const facade = apiFacade();
export default facade;
