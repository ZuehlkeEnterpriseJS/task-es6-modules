export default class Logger {
    static info(message) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(message));
        document.querySelector('#log-output').appendChild(li);
    }
}