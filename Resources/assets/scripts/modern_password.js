global.switchType = (selector) => {
    if(selector.type === 'password') {
        selector.type = 'text';
    } else if(selector.type === 'text') {
        selector.type = 'password';
    }
}