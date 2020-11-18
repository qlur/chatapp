//Helper Function to acheive some things very quickly

//Make a Valid Width and Height for DOM Elelment
/** @return Object [width, height] */
export function makeValidSize(size) {
    let wd = String(size);
    //let hg = String(height);
    if (wd.search(/px$/) == -1) {
        return wd + 'px';
    }
    return wd;
}

//Validate Email
export function checkEmail(email) {
    //Email REGEX
    // let emailRgx = /^\w+\B\S@\w+\.{1}\w+[^_\s]$/g;
    // let emailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+/.edu$;
    let emailRgx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.[Ee][Dd][Uu]$/;

    return emailRgx.test(email);
}