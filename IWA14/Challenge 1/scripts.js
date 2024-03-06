firstName = 'John';
age = 35;
pastTime = 'Coding';

const logTwice = () => {
  const log = `Hello, ${firstName} (${age}). I love ${pastTime}!`;
  console.log(log);
  console.log(log);
}
function hobby () {
  logTwice()
}


hobby()