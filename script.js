let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
//console.log(secretMessage.length);//check if last element was really removed.

secretMessage.push('to', 'Program');
secretMessage[7] = 'right';
//console.log(secretMessage);

secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(5, 6, 'know,');
//console.log(secretMessage);
console.log(secretMessage.join(' '));