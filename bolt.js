const { App } = require("@slack/bolt");
// const {SlackEventAdapter} = require('@slack/events-api')

const express = require("express");
const axios = require("axios");
// const { createMessageAdapter } = require('@slack/interactive-messages');
const { createServer } = require("http");
// const slackSigningSecret = '0c8a67f995efe646068bffb062141be9';
// const slackInteractions = createMessageAdapter(slackSigningSecret);


const app = express();


// const slack_event_adapter = SlackEventAdapter(slackSigningSecret, '/slack/events', app)

const port = process.env.PORT || 3000

const apps = new App({
  signingSecret: "0c8a67f995efe646068bffb062141be9",
  token: "xoxb-808986357047-3122336369620-8VuhHKNSklAFubDH28VgMXuc",
});
const options = {	"blocks": [
  {
    "type": "header",
    "text": {
      "type": "plain_text",
      "text": "This is a header block",
      "emoji": true
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "`WhatsApp (6 bots, 1000 conversations)`"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "text": "Show More"
      },
      "style": "primary",
      "value": "true",
      "action_id": "button-action_1"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ">Testing: 13253077759  -> 3\n>Account: 14155238886  -> 2\n>Account: 917834811114  -> 2\n>Whatsapp Account: 14155238886  -> 1\n>Account: 13253077759  -> 1"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "`Facebook (14 bots, 1200 conversation)`"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "text": "Show More"
      },
      "style": "primary",
      "value": "true",
      "action_id": "button-action_2"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ">Account: Dev - 2772 FB bot  -> 2\n>Account: Feb 01 WotNot Prod  -> 2"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "`Web (18 bots, 1500 conversation)`"
    },
    "accessory": {
      "type": "button",
      "text": {
        "type": "plain_text",
        "text": "Show More"
      },
      "style": "primary",
      "value": "true",
      "action_id": "button-action_3"
    }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ">Bot_Automation: goofy-curran-220f6e.netlify.app  -> 42 \n> بانساري جان बंसरी بانساري جان \n>बंसरी : 405-account.netlify.app  -> 12 \n>Demo Account: test-trigger-api.netlify.app  -> 11\n>Can Divit: 402-dreamy-can-divit.netlify.app  -> 9\n>Tara: 202-contact-load.netlify.app  -> 6\n>Account: sharp-bohr-fe9830.netlify.app  -> 4\n>Salim-Test: check-hello.netlify.app  -> 3\n"
    }
  },
  {
    "type": "divider"
  }
]
}

app.use(express.json());

/* Add functionality here */
app.get("/send", async (req, res) => {
  const result = await axios.post(
    "https://hooks.slack.com/services/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",
    options
  )
  res.json();
})

app.get("/", async (req, res) => {
  res.send("hello");
})
app.post('/', (req,res)=>{
  res.send(req.challenge)
})

// apps.action('click_me_4', async ({ ack, say }) => {
// //     // Acknowledge action request
//     await ack();
//     await say('Request approved 👍');
//   });
  
// Handle interactions from messages with a `callback_id` of `welcome_button`
// app.action("welcome_button", (payload, respond) => {
//   // `payload` contains information about the action
//   // see: https://api.slack.com/docs/interactive-message-field-guide#action_url_invocation_payload
//   console.log(payload);

//   // `respond` is a function that can be used to follow up on the action with a message
//   respond({
//     text: "Success!",
//   });

//   // The return value is used to update the message where the action occurred immediately.
//   // Use this to items like buttons and menus that you only want a user to interact with once.
//   return {
//     text: "Processing...",
//   };
// });

// Handle interactions from messages containing an action block with an `action_id` of `select_coffee`
// apps.action({ action_id: "button-action_1" }, (payload, respond) => {
//   console.log("button clicked");
//   respond({
//     type: "header",
//     text: {
//       type: "plain_text",
//       text: "stats-wotnot-staging",
//     },
//   });
// })

  // `payload` contains information about the action
  // Block Kit Builder can be used to explore the payload shape for various action blocks:
  // https://api.slack.com/tools/block-kit-builder
  // `respond` and return value are the same as above.


// (async () => {
//   // Start the app
//   await apps.start(process.env.PORT || 3000);
//   const result = await axios.post(
//     "https://hooks.slack.com/services/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",
//     options
//   );

//   console.log("Bolt app is running!");
// })();

// app.listen(() => {
//   console.log("this port is running on ", 4000);
// });
// slackInteractions.action({ type: 'button',action_id: "button-action_1" }, (payload, respond) => {
//     console.log('1');
//     // Logs the contents of the action to the console
//     console.log('payload', payload);
  
//     // Replace the original message again after the deferred work completes.
//     doWork()
//       .then(() => {
//         respond({ text: 'Processing complete.', replace_original: true });
//       })
//       .catch((error) => {
//         respond({ text: 'Sorry, there\'s been an error. Try again later.',  replace_original: true });
//       });
  
//     // Return a replacement message
//     return { text: 'Processing...' };
//   });

const server = createServer(app)

app.listen(port, async()=>{
    console.log('on the port ', port);
})