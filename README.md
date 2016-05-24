# Pagination Component
The goal of this challenge is to make a simple pagination component, normally used to provide pagination on large result lists.

### Information
- [index.html](/wwwroot/index.html)
 - Use the element `pagination` but do not edit the html of it.
 - Use `btnPrev` and `btnNext` for the backward and forward navigations.
 - Do not remove any of the existing `script` tags
- [index.js](./wwwroot/index.js)
 - You can freely use this file for any JavaScript code.
- [custom.css](./wwwroot/custom.css)
 - You can freely use this file for additional styling.

### Goal
The pagination component must pass the following rules;

- Only 5 items can be shown at a time, currently there are 20 items.
- The active item must have the `active` class.
- The hidden items must have the `hidden` class.
- `btnPrev` must be used for moving the active item 1 position backwards.
- `btnNext` must be used for moving the active item 1 position forward.

### Test Results *before* solving the challenge  
```
codecheck: Finish with code 2
codecheck: tests  : 5
codecheck: success: 3
codecheck: failure: 2
```

### Test Results *after* solving the challenge
```
codecheck: Finish with code 0
codecheck: tests  : 5
codecheck: success: 5
codecheck: failure: 0
```
--- --- ---
## Run Tests
To run tests locally install `codecheck` by running the following command in terminal.
```
$ npm install codecheck -g
```
To run tests in web editor please click in `RUN` button on left side of web editor.

## Explain your code
In [answer.md](answer.md) write a brief explanation 
- About how your code works
- Problems faced while solving the challenge
- How you solved those problems
- Improvements/Feedbacks are also welcomed
