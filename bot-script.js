var botui = new BotUI('help-bot');

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi! there...',
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'Ever wonder what its like to be a woman on the internet?'
  });}).then(function () {
    return botui.message.add({
      type: 'html',
      delay: 500,
      loading: true,
      content: '<p style="color:yellow;text-align:center;font-size:100px">👋<p>'
    });


}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'Hello....',
        value: 'hello'
      }
    ]
  });

}).then(function (index) {
  return botui.message.add({
    type: 'embed',
    content: 'https://giphy.com/gifs/brckhmptn-brockhampton-mFZ7zYki7WZEwyDWaU'
  });

}).then(function (index) {
    return botui.message.add({
      delay: 1000,
      loading: true,
      content: 'Realities of the physical world are often mimicked and even amplified in online spaces.'
    });}).then(function (index) {
      return botui.message.add({
        delay: 1000,
        loading: true,
        content: 'We wanted to find out about the lived experiences of women in digital spaces, so we set out to talk to women in five countries across Africa.'
      });}).then(function (index) {
        return botui.message.add({
          delay: 1000,
          loading: true,
          content: 'You can read more about our study inception here:[here](https://medium.com/pollicy/a-survival-guide-to-being-a-woman-on-the-internet-feminist-research-for-a-feminist-internet-e8e76e4ed20f)^'
        });}).then(function (index) {
          return botui.message.add({
            delay: 1000,
            human: true,
            content: 'What did you find out!'
          });}).then(function () {
            return botui.message.add({
              type: 'html',
              delay: 500,
              human: true,
              content: '<p style="color:yellow;text-align:center;font-size:100px">🤔<p>'
            });
        }).then(function (index) {
            return botui.message.add({
              delay: 1000,
              loading: true,
              content: 'Well, at a first glance, it looks like around 27-30% of women have experienced some form of online harassment or violence!'
            });}).then(function () {
              return botui.action.button({
                action: [
                  {
                    text: 'That’s more than I expected!',
                    value: 'more'
                  },
                  {
                    text: 'That’s less than I expected',
                    value: 'less'
                  }
                ]
              });}).then(function (res) {
                var message;
              
                if (res.value === "more") {
                  message = 'We conducted quantitative interviews with women in capital cities as well as in-depth interviews with women to put a human face to these numbers.';
                }
                else if (res.value === "less") {
                  message = 'We conducted quantitative interviews with women in capital cities as well as in-depth interviews with women to put a human face to these numbers.';
                }
              
                return botui.message.add({
                  type: 'html',
                  delay: 1000,
                  loading: true,
                  content: message
                });}).then(function () {
                  return botui.action.button({
                    action: [
                      {
                        text: 'Tell me more about your reserach experience!',
                        value: 'tellme'
                      },
                      {
                        text: 'What else did you find',
                        value: 'Whatelse'
                      }
                    ]
                  });}).then(function (res) {
                    var message;
                  
                    if (res.value === "more") {
                      message = 'We conducted quantitative interviews with women in capital cities as well as in-depth interviews with women to put a human face to these numbers.';
                    }
                    else if (res.value === "less") {
                      message = 'We conducted quantitative interviews with women in capital cities as well as in-depth interviews with women to put a human face to these numbers.';
                    }
                  
                    return botui.message.add({
                      type: 'html',
                      delay: 1000,
                      loading: true,
                      content: message
                    });
    
  










  
// }).then(function (res) {
//   var message;

//   if (res.value === "hello") {
//     message = 'That’s a good one! This is a website, it’s always open.';
//   }
//   else if (res.value === "do") {
//     message = 'I’m a product-focused Scrum master<br><br>I also have a keen interest in chatbots and web analytics';
//   }

//   return botui.message.add({
//     type: 'html',
//     delay: 1000,
//     loading: true,
//     content: message
//   });
// }).then(function (index) {
//   return botui.action.button({
//     action: [
//       {
//         text: 'Cool!',
//         value: 'cool'
//       }
//     ]
//   });
// }).then(function (index) {
//   return botui.message.add({
//     delay: 1000,
//     loading: true,
//     content: 'I know! Thanks.'
//   });
});
